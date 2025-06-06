import{_ as s,c as a,a as n,o as i}from"./app-CjvLLpCW.js";const l={};function r(t,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="v003-beforedestory里面一般进行什么操作" tabindex="-1"><a class="header-anchor" href="#v003-beforedestory里面一般进行什么操作"><span>V003-beforeDestory里面一般进行什么操作</span></a></h1><p>beforedestoryed是组件销毁之前执行的一个生命周期，在这个生命周期里，我们可以进行回调函数或定时器的清 <br> ①解绑自定义事件 event.$off ②消除定时器 ③解绑自定义的DOM事件 如window.scroll等</p><p>日期在我点击查询的时候要存储,刷新就读内存,但是我点击其他页面再进来的时候,这个内存要清空</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">search(){</span>
<span class="line">      let time = { </span>
<span class="line">        start: this.formSearch.beginSearchTime,</span>
<span class="line">        end: this.formSearch.endSearchTime,</span>
<span class="line">        timeRange: this.formSearch.timeRange,</span>
<span class="line">        page: this.formSearch.page</span>
<span class="line">      }</span>
<span class="line">      localStorage.setItem(&#39;initTime&#39;,JSON.stringify(time))</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> created () {  </span>
<span class="line">    let searchCarTime = JSON.parse(localStorage.getItem(&#39;initTime&#39;))</span>
<span class="line">    if (searchCarTime) {</span>
<span class="line">      this.formSearch.beginSearchTime = searchCarTime.start</span>
<span class="line">      this.formSearch.endSearchTime = searchCarTime.end,</span>
<span class="line">      this.formSearch.timeRange = searchCarTime.timeRange </span>
<span class="line">      this.formSearch.page = searchCarTime.page </span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> beforeDestroy(){</span>
<span class="line">    localStorage.removeItem(&#39;initTime&#39;)</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const d=s(l,[["render",r]]),m=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V003-beforeDestory%E9%87%8C%E9%9D%A2%E4%B8%80%E8%88%AC%E8%BF%9B%E8%A1%8C%E4%BB%80%E4%B9%88%E6%93%8D%E4%BD%9C.html","title":"V003-beforeDestory里面一般进行什么操作","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749193496000,"contributors":[{"name":"bestarMing","username":"bestarMing","email":"49470216+bestarMing@users.noreply.github.com","commits":1,"url":"https://github.com/bestarMing"}],"changelog":[{"hash":"2ce8af76d22c8efad6164db81ee3aedf5f03b58b","time":1749193496000,"email":"49470216+bestarMing@users.noreply.github.com","author":"bestarMing","message":"Update deploy-vuepress.yml"}]},"filePathRelative":"前端面试/vue篇/V003-beforeDestory里面一般进行什么操作.md"}');export{d as comp,m as data};
