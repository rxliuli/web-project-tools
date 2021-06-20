module.exports = {
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'liuli-tools',
      description:
        'Some project-level toolsets mainly try to develop and improve efficiency. Welcome to [Discussion](https://github.com/rxliuli/liuli-tools/discussions) to exchange ideas.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'liuli-tools',
      description:
        '一些项目级别的工具集，主要尝试研发提效，欢迎来 [讨论区](https://github.com/rxliuli/liuli-tools/discussions) 交流想法。',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'GitHub',
            link: 'https://github.com/rxliuli/liuli-tools',
          },
        ],
        sidebar: {
          '/guide/': [''],
        },
      },
      '/zh/': {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          {
            text: 'GitHub',
            link: 'https://github.com/rxliuli/liuli-tools',
          },
        ],
        sidebar: {
          '/zh/guide/': [''],
        },
      },
    },
  },
}
