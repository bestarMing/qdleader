import{_ as e,c as a,a as n,o as i}from"./app-CjvLLpCW.js";const l={};function t(r,s){return i(),a("div",null,s[0]||(s[0]=[n(`<h1 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务"><span>宏任务和微任务</span></a></h1><h2 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务"><span>宏任务</span></a></h2><p>setTimeout setInterval Ajax DOM事件</p><h2 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h2><p>Promise async/await</p><h2 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序"><span>执行顺序</span></a></h2><p>微任务执行时机比宏任务要早</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">console.log(1)</span>
<span class="line"></span>
<span class="line">setTimeout(() =&gt; {</span>
<span class="line">  console.log(2)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">Promise.resolve().then(() =&gt; {</span>
<span class="line">    console.log(3)</span>
<span class="line">})</span>
<span class="line">console.log(4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案 ：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">1</span>
<span class="line">4</span>
<span class="line">3</span>
<span class="line">2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const d=e(l,[["render",t]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%BC%82%E6%AD%A5/%E5%AE%8F%E4%BB%BB%E5%8A%A1%E5%92%8C%E5%BE%AE%E4%BB%BB%E5%8A%A1.html","title":"宏任务和微任务","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749193496000,"contributors":[{"name":"bestarMing","username":"bestarMing","email":"49470216+bestarMing@users.noreply.github.com","commits":1,"url":"https://github.com/bestarMing"}],"changelog":[{"hash":"2ce8af76d22c8efad6164db81ee3aedf5f03b58b","time":1749193496000,"email":"49470216+bestarMing@users.noreply.github.com","author":"bestarMing","message":"Update deploy-vuepress.yml"}]},"filePathRelative":"前端面试/js类/异步/宏任务和微任务.md"}');export{d as comp,p as data};
