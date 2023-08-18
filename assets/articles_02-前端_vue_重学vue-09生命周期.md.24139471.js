import{_ as s,o as n,c as a,b as p}from"./app.3e4cff64.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/02-前端/vue/重学vue-09生命周期.md"}'),l={name:"articles/02-前端/vue/重学vue-09生命周期.md"},o=p(`<blockquote><p>有了组件的基础，我们知道我们的UI就是有组件搭建起来，由一个根组件+各种组件组成</p><p>每个组件会有自己的生命周期，而各种组件组合起来的生命周期会有点绕，所以要来捋一下 如果写render函数的话，需要思考一下，这个render函数在什么时候会触发，平时写template时并不会注意到这点 实际上是整个组件的数据(prop、data)发生变化都会触发render，也就是update的生命周期</p></blockquote><p>父子逐渐mounted，destroy顺序，我们把组件创建当成一个个数组项，并且会进出，那么这个数据结构就是栈 先进后出</p><p>父组件触发update生命周期(render)，会触发子组件的update吗？</p><p>react会，那么vue是怎么做到的呢</p><hr><p>知道各种生命周期的作用之后，我们反过来思考一下生命周期的本质是什么 我们都知道生命周期也叫钩子函数，在特定时机抛出来调用 这么一想，钩子函数其实就是一个被放出来自定义的回调函数吧 我们用js实现一下</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">constor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">init</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">config</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cb1</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cb1</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是钩子函数1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(config)</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{C as __pageData,_ as default};
