import{_ as s,c as i,o as a,V as t}from"./chunks/framework.3e32Qaj4.js";const g=JSON.parse('{"title":"@liuli-util/vite-plugin-node","description":"","frontmatter":{},"headers":[],"relativePath":"dev/vite-plugin-node.md","filePath":"dev/vite-plugin-node.md"}'),e={name:"dev/vite-plugin-node.md"},l=t(`<h1 id="liuli-util-vite-plugin-node" tabindex="-1">@liuli-util/vite-plugin-node <a class="header-anchor" href="#liuli-util-vite-plugin-node" aria-label="Permalink to &quot;@liuli-util/vite-plugin-node&quot;">​</a></h1><p>使用 vite 构建 nodejs app/lib 所需的一切，希望在构建 node 应用时，能够像使用 vite 构建 web 应用一样简单。</p><p>目前支持以下功能:</p><ul><li>[x] 支持根据 dependencies 自动 bundle 依赖</li><li>[x] 支持 bundle 时生成 dts 类型定义</li><li>[x] 支持填充 <code>__dirname</code> 等 cjs 特性</li><li>[x] 支持开箱即用的配置，但也支持自定义配置</li><li>[x] 支持 bundle 为 cjs 模块 -- 目前也支持，但需要修改 vite 的配置</li><li>[x] 支持多入口的构建</li><li>[x] 支持 dts 类型捆绑</li></ul><p>特别是支持在以下场景使用</p><ul><li>lib</li><li>cli</li><li>nodejs server</li><li>vscode plugin</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i -D @liuli-util/vite-plugin-node</span></span></code></pre></div><p>创建入口文件 <code>src/index.ts</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createServer } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;server start at http://localhost:3000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>配置 vite.config.ts</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { node } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@liuli-util/vite-plugin-node&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>然后构建</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite build</span></span></code></pre></div><p>事实上，这个 lib 本身也使用这个插件构建！</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>entry</code></td><td><code>string, string[]</code></td><td><code>src/index.ts</code></td><td>入口文件</td></tr><tr><td><code>formats</code></td><td><code>(&#39;es&#39;, &#39;cjs&#39;)[]</code></td><td><code>[es]</code></td><td>输出格式</td></tr><tr><td><code>shims</code></td><td><code>boolean</code></td><td><code>false</code></td><td>是否填充 <code>__dirname/require</code> 等 cjs 特性</td></tr><tr><td><code>dts</code></td><td><code>boolean, { bundle?: boolean }</code></td><td><code>false</code></td><td>是否生成 dts 类型定义</td></tr><tr><td><code>outDir</code></td><td><code>string</code></td><td><code>dist</code></td><td>输出目录</td></tr></tbody></table><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><p>vite 天然支持环境变量，但目前包含两类环境变量，编译时和运行时</p><ul><li>编译时环境变量 <code>import.meta.env.*</code></li><li>运行时环境变量 <code>process.env.*</code></li></ul><p>编译时环境变量在项目编译时就已经被替换为静态字符串，一般适用于 web 应用。而运行时环境变量适合在项目运行时动态指定值，一般适用于 node 应用。</p>`,23),n=[l];function d(h,p,k,o,r,c){return a(),i("div",null,n)}const u=s(e,[["render",d]]);export{g as __pageData,u as default};
