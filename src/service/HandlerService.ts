import { TextDocument, Uri } from 'vscode'
import {
  noteActionApi,
  noteApi,
  resourceActionApi,
  resourceApi,
  TypeEnum,
} from 'joplin-api'
import { parse } from 'querystring'
import { JoplinNoteCommandService } from './JoplinNoteCommandService'
import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import path = require('path')
import { appConfig } from '../config/AppConfig'
import { BiMultiMap } from '../util/BiMultiMap'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'
import { OpenFileService } from '../util/OpenFileService'
import { i18nLoader } from '../util/constant'
import { safePromise } from '../util/safePromise'

/**
 * other service
 */
export class HandlerService {
  constructor(private joplinNoteCommandService: JoplinNoteCommandService) {}

  private readonly openResourceMap = new BiMultiMap<string, string>()

  /**
   * close note watch
   * @param e
   */
  async handleCloseTextDocument(e: TextDocument) {
    console.log('vscode.workspace.onDidCloseTextDocument: ', e)
    const noteId = JoplinNoteUtil.getNoteIdByFileName(e.fileName)
    if (!noteId) {
      return
    }
    console.log('close note: ', noteId)
    const note = await noteApi.get(noteId)
    await noteActionApi.stopWatching(noteId)
    this.openResourceMap.deleteByKey(noteId)
    const resourceIdList = this.openResourceMap.getByKey(noteId)
    await Promise.all(
      resourceIdList.map((resourceId) =>
        resourceActionApi.stopWatching(resourceId),
      ),
    )
    vscode.window.showInformationMessage(
      i18nLoader.get(
        'Turn off monitoring of attachment resources in the note [{{title}}]',
        {
          title: note.title,
        },
      ),
    )
  }

  async uriHandler(uri: Uri) {
    console.log('uriHandler: ', uri)
    const id = parse(uri.query).id as string
    switch (uri.path) {
      case '/open':
        await this.openNote(id)
        break
      case '/resource':
        await this.openResource(id)
        break
      default:
        vscode.window.showErrorMessage(i18nLoader.get('Unprocessable link'))
    }
  }

  private readonly openFileService = new OpenFileService()

  async openResource(id: string) {
    if (!appConfig.programProfilePath) {
      vscode.window.showWarningMessage(
        i18nLoader.get("Please set up Joplin's personal directory"),
      )
      return
    }
    const resource = await safePromise(
      resourceApi.get(id, ['id', 'title', 'file_extension']),
    )
    if (!resource) {
      vscode.window.showWarningMessage(
        i18nLoader.get('Resource does not exist'),
      )
      return
    }
    const fileName = resource.id + '.' + resource.file_extension
    const filePath = path.resolve(
      appConfig.programProfilePath,
      'resources',
      fileName,
    )
    await resourceActionApi.watch(resource.id)
    const noteId = JoplinNoteUtil.getNoteIdByFileName(
      vscode.window.activeTextEditor?.document.fileName,
    )
    console.log('open file: ', filePath, noteId, resource.id)
    const isWatch = await resourceActionApi.noteIsWatched(resource.id)
    if (isWatch) {
      vscode.window.showInformationMessage(
        i18nLoader.get('Start monitoring attachment resource modification: ') +
          resource.title,
      )
    }
    this.openResourceMap.set(id, resource.id)
    // await this.openFileService.openFileByOS(filePath)
    await this.openFileService.openByVSCode(filePath)
  }

  async openNote(id: string) {
    if (!id) {
      vscode.window.showWarningMessage(i18nLoader.get('id cannot be empty'))
      return
    }
    const item = await safePromise(
      noteApi.get(id, [
        'id',
        'parent_id',
        'title',
        'is_todo',
        'todo_completed',
      ]),
    )
    if (!item) {
      vscode.window.showWarningMessage(i18nLoader.get('Note does not exist'))
      return
    }
    await this.joplinNoteCommandService.openNote(
      new FolderOrNote({
        ...item,
        type_: TypeEnum.Note,
      }) as any,
    )
  }
}
