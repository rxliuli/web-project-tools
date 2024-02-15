import{_ as i,c as s,o as a,V as n}from"./chunks/framework.3e32Qaj4.js";const E=JSON.parse('{"title":"@liuli-util/vite-plugin-dist-firefox","description":"","frontmatter":{},"headers":[],"relativePath":"dev/vite-plugin-firefox-dist.md","filePath":"dev/vite-plugin-firefox-dist.md"}'),t={name:"dev/vite-plugin-firefox-dist.md"},e=n(`<h1 id="liuli-util-vite-plugin-dist-firefox" tabindex="-1">@liuli-util/vite-plugin-dist-firefox <a class="header-anchor" href="#liuli-util-vite-plugin-dist-firefox" aria-label="Permalink to &quot;@liuli-util/vite-plugin-dist-firefox&quot;">​</a></h1><p>将构建的 chrome 扩展转换为 firefox 扩展，仅允许支持 manifest v3 的 firefox 版本。参考：<a href="https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/" target="_blank" rel="noreferrer">firefox manifest v3 迁移指南</a></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在 vite.config.ts 中配置</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { crx } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@crxjs/vite-plugin&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manifest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./manifest.json&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { firefox } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@liuli-util/vite-plugin-dist-firefox&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    crx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      manifest,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    firefox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>这个扩展会将 dist 目录下的 chrome 扩展的 manifest.json 做一些转换，并将转换后的文件放在 dist-firefox 目录下，稍后可以使用 web-ext 打包 zip 并提交。</p>`,6),l=[e];function p(h,r,k,o,d,f){return a(),s("div",null,l)}const c=i(t,[["render",p]]);export{E as __pageData,c as default};
