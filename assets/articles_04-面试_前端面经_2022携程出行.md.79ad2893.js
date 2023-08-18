import{_ as s,o as l,c as a,b as n}from"./app.3e4cff64.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"2023.2.6 携程一面(挂)","slug":"_2023-2-6-携程一面-挂","link":"#_2023-2-6-携程一面-挂","children":[]}],"relativePath":"articles/04-面试/前端面经/2022携程出行.md"}'),o={name:"articles/04-面试/前端面经/2022携程出行.md"},p=n(`<h2 id="_2023-2-6-携程一面-挂" tabindex="-1">2023.2.6 携程一面(挂) <a class="header-anchor" href="#_2023-2-6-携程一面-挂" aria-hidden="true">#</a></h2><ol><li>script defer async</li><li>输入url到页面显示的过程</li><li>tcp连接过程</li><li>为什么3次握手 - 说主要是稳定性而不是安全性</li><li>TCP和UDP的区别与场景</li><li>CSS盒模型</li><li>BFS解决</li><li>改变盒模型 box-sizing 属性与区别 主要是内容宽度不是margin</li><li>css单位区别</li><li>移动端响应式适配</li><li>块元素居中 什么时候用定位偏移 - 答了伪元素居中，说主要是fixed定位弹窗时</li><li>讲讲重排重绘</li><li>请求方法</li><li>介绍 OPTION 请求 - 说讲到简单请求/复杂请求就行</li><li>解决跨域的方式 - 说了 jsonp iframe cors devServer</li><li>代理工具抓请求包 - 场景是请求被代理 怎么调试这个代理请求有没有问题 什么shell、pasou等工具 - 不了解 ❌ Whistle、LightProxy 就是抓包 和 代理工具无关...</li><li>请求状态码 - 追问 401 知道吗</li><li>JS的基本类型 - 漏了 Bigint</li><li>JS判断类型 - 只说了 typeof instanof Array.isArray</li><li>判断数组 - 只说了 instanof Array.isArray</li><li>0.1+0.2 不等于 3 - 浮点类型精度问题</li><li>怎么解决精度问题 = 说了 Bigint ，说还可以转成整数？</li><li>说执行结果</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">conosle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTimeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> promise </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 接口请求返回值是promise</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resp</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>4 1 setTimeout 2 3 3和2 不确定 因为 请求结果未知</p><ol start="24"><li>说说事件循环</li><li>说执行结果</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj1 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> obj2)</span></span>
<span class="line"></span></code></pre></div><p>不相等说说原因</p><ol start="25"><li>怎么判断对象相等</li><li>怎么拷贝对象</li><li>说说节流防抖区别/场景/实现原理 - 场景说了输入框和按钮点击，说主要还有防止频繁请求</li><li>说一下 $nexttick</li><li>vue生命周期</li><li>请求放在哪个生命周期</li><li>组件传参方式</li><li>了解 pina 吗 说一下 - 没用过大概讲了印象，说是可以用到vue2里</li><li>用过vue3吗？说一下composition api体验</li><li>vue2响应式数据原理</li><li>vue3 和 vue2 区别</li><li>webpack原理</li><li>在Plugin 里用过 AST 吗</li><li>优化webpack</li><li>有什么问题问吗？ - 说技术栈 vue2 和 react 一半一半, 项目会比较多 1个人可能负责多个功能</li></ol>`,8),e=[p];function t(c,r,i,y,F,D){return l(),a("div",null,e)}const _=s(o,[["render",t]]);export{C as __pageData,_ as default};
