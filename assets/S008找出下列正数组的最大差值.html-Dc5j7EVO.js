import{_ as n,c as s,a,o as i}from"./app-CjvLLpCW.js";const t={};function r(l,e){return i(),s("div",null,e[0]||(e[0]=[a(`<p>#s008 正数组的最大差值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function getMaxProfit(arr) {</span>
<span class="line">	var minPrice = arr[0];</span>
<span class="line">	var maxProfit = 0;</span>
<span class="line">	for(var i = 0; i &lt; arr.length; i ++) {</span>
<span class="line">		var currentPrice = arr[i];</span>
<span class="line">		minPrice= Math.min(minPrice, currentPrice);</span>
<span class="line">		var potentialProfit = currentPrice - minPrice;</span>
<span class="line">		</span>
<span class="line">		maxprofit = Math.max(maxProfit,potentialProfit);</span>
<span class="line">	}</span>
<span class="line">	return maxProfit</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(t,[["render",r]]),m=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S008%E6%89%BE%E5%87%BA%E4%B8%8B%E5%88%97%E6%AD%A3%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%B7%AE%E5%80%BC.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749193496000,"contributors":[{"name":"bestarMing","username":"bestarMing","email":"49470216+bestarMing@users.noreply.github.com","commits":1,"url":"https://github.com/bestarMing"}],"changelog":[{"hash":"2ce8af76d22c8efad6164db81ee3aedf5f03b58b","time":1749193496000,"email":"49470216+bestarMing@users.noreply.github.com","author":"bestarMing","message":"Update deploy-vuepress.yml"}]},"filePathRelative":"常见算法/S008找出下列正数组的最大差值.md"}');export{d as comp,m as data};
