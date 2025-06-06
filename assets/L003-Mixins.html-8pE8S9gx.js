import{_ as n,c as e,a as i,o as a}from"./app-CjvLLpCW.js";const l={};function c(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>#mixins</p><blockquote><p>less允许我们将已有的class和id的样式应用到另一个不同的选择器上。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#circle {</span>
<span class="line">	background-color:#333333;</span>
<span class="line">	border-radius:100%;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#small-circle {</span>
<span class="line">	width:50px;</span>
<span class="line">	height:150px;</span>
<span class="line">	#circle</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">#写法2：</span>
<span class="line">#circle {</span>
<span class="line">	background-color:#333333;</span>
<span class="line">	border-radius:100%;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#small-circle {</span>
<span class="line">	width:50px;</span>
<span class="line">	height:150px;</span>
<span class="line">	#circle</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#Mixin 比较酷就是可以传参</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">写法3：</span>
<span class="line"></span>
<span class="line">#circle(@size: 25px) {</span>
<span class="line">	background-color:#333333;</span>
<span class="line">	border-radius:100%;</span>
<span class="line">	width:@size;</span>
<span class="line">	height:@size;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#small-circle{</span>
<span class="line">	#circle</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#big-circle {</span>
<span class="line">	#circle(100px)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://lesscss.org/features/#mixins-feature" target="_blank" rel="noopener noreferrer">Mixin</a></p>`,7)]))}const p=n(l,[["render",c]]),t=JSON.parse('{"path":"/less_scss/L003-Mixins.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749193496000,"contributors":[{"name":"bestarMing","username":"bestarMing","email":"49470216+bestarMing@users.noreply.github.com","commits":1,"url":"https://github.com/bestarMing"}],"changelog":[{"hash":"2ce8af76d22c8efad6164db81ee3aedf5f03b58b","time":1749193496000,"email":"49470216+bestarMing@users.noreply.github.com","author":"bestarMing","message":"Update deploy-vuepress.yml"}]},"filePathRelative":"less&scss/L003-Mixins.md"}');export{p as comp,t as data};
