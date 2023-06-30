import{_ as p,r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app-a261ebb8.js";const l={},u=e(`<h1 id="liuli-util-react-router" tabindex="-1"><a class="header-anchor" href="#liuli-util-react-router" aria-hidden="true">#</a> @liuli-util/react-router</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>封装 react-router 为集中式的 js 路由配置，组件仅暴露必要的 props，并且默认支持在 react 组件外使用路由。</p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h2><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">rm</span> react-router-dom react-router
<span class="token function">pnpm</span> i @liuli-util/react-router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//router.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RouteConfig<span class="token punctuation">,</span> createHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@liuli-util/react-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HomeView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../views/HomeView&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HelloWorld <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../views/HelloWorld&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> routeList<span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> HomeView <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/hello-world&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> HelloWorld <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">createHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>&lt;ReactRouter /&gt;</code> 作为根组件，并使用 layout 组件</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">//main.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@liuli-util/react-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> history<span class="token punctuation">,</span> routeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./constants/router&#39;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ReactRouter</span></span> <span class="token attr-name">history</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span></span> <span class="token attr-name">routes</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>routeList<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r={href:"https://github.com/rxliuli/liuli-tools/tree/master/examples/react-router-basic-example",target:"_blank",rel:"noopener noreferrer"},k=e(`<h3 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h3><p>一般而言，我们的页面会有某种布局结构，即路由内容是嵌入在布局之中，这里可以使用嵌套路由实现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//router.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RouteConfig<span class="token punctuation">,</span> createHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@liuli-util/react-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HomeView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../views/HomeView&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HelloWorld <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../views/HelloWorld&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> routeList<span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> HomeView <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/hello-world&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> HelloWorld <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">createHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RouterView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@liuli-util/react-router&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Layout<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Layout Header</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RouterView</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={href:"https://github.com/rxliuli/liuli-tools/tree/master/examples/react-router-nest-example",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="异步路由" tabindex="-1"><a class="header-anchor" href="#异步路由" aria-hidden="true">#</a> 异步路由</h3><p>使用起来几乎与 vue-router 保持一致，只需要将组件改为 <code>() =&gt; import(&#39;path&#39;)</code> 即可</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> routeList<span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/HomeView&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/hello-world&#39;</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/HelloWorld&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={href:"https://github.com/rxliuli/liuli-tools/tree/master/examples/react-router-async-example",target:"_blank",rel:"noopener noreferrer"},b=e(`<h3 id="使用编程式路由" tabindex="-1"><a class="header-anchor" href="#使用编程式路由" aria-hidden="true">#</a> 使用编程式路由</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> history <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

<span class="token comment">//跳转</span>
history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  pathname<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  query<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;liuli&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//获取当前路由的一些信息</span>
history<span class="token punctuation">.</span>location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用路由查询参数" tabindex="-1"><a class="header-anchor" href="#使用路由查询参数" aria-hidden="true">#</a> 使用路由查询参数</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> history <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

<span class="token comment">//跳转</span>
history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  pathname<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  query<span class="token operator">:</span> <span class="token punctuation">{</span>
    pathname<span class="token operator">:</span> <span class="token string">&#39;/hello-world&#39;</span><span class="token punctuation">,</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;liuli&#39;</span><span class="token punctuation">,</span>
      age<span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
      firends<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;miku&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sora&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件内获取</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>params<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>pre<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        firends<span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">&#39;firends&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件外获取</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>history<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;search: &#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  firends<span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">&#39;firends&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：目前仅处理简单的参数，复杂参数请使用 json+base64 的形式放在 url 上。</p></blockquote><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="为什么不使用官方的-react-router" tabindex="-1"><a class="header-anchor" href="#为什么不使用官方的-react-router" aria-hidden="true">#</a> 为什么不使用官方的 react-router</h3><p>官方的版本更新简直堪称人类迷惑行为大赏，从 4 =&gt; 5 =&gt; 6 的更新基本上是为了更新而更新，没有提高开发者体验或效率，甚至在集中式路由和分散式路由（我从不使用它）两边反复横跳。就拿 react-router v6 的更新来说，吾辈简单试用了一下，目前发现之前的 useHistory 废了，react-router-dom 的那些组件换了一茬，学 vue-router 把 RouterView 加进来了，官方不再支持在 react 组件外使用路由，还废掉了 react-router-config。 路由配置本质上就是一个树结构，不知道为什么绑定 react 组件，他们从早前和 vue-router 一样通过 js 集中式配置 =&gt; 改成使用组件配置 =&gt; 改成分散式的组件配置 =&gt; 滚回集中式的组件配置 =&gt; 下一步是不是要滚回 ts 集中式的配置？</p>`,12),g={href:"https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes",target:"_blank",rel:"noopener noreferrer"};function h(y,f){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[s("Example"),t(a)])])]),k,n("blockquote",null,[n("p",null,[n("a",d,[s("Example"),t(a)])])]),v,n("blockquote",null,[n("p",null,[n("a",m,[s("Example"),t(a)])])]),b,n("blockquote",null,[n("p",null,[s("react-router 官方嵌套路由示例代码已经滚回了集中式 "),n("a",g,[s("https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes"),t(a)])])])])}const x=p(l,[["render",h],["__file","react-router.html.vue"]]);export{x as default};
