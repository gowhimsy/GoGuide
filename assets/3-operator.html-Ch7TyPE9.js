import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as d,b as r}from"./app-C2DD7JW7.js";const a={},o=r('<h2 id="arithmetic-operators" tabindex="-1"><a class="header-anchor" href="#arithmetic-operators"><span>Arithmetic Operators</span></a></h2><table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>50</td><td>20</td></tr></tbody></table><table><thead><tr><th>Operator</th><th>Operation</th><th>Result</th><th>Description</th></tr></thead><tbody><tr><td>+</td><td>A + B</td><td>70</td><td>Addition</td></tr><tr><td>-</td><td>A - B</td><td>30</td><td>Subtraction</td></tr><tr><td>*</td><td>A * B</td><td>1000</td><td>Multiplication</td></tr><tr><td>/</td><td>A / B</td><td>2</td><td>Division</td></tr><tr><td>%</td><td>A % B</td><td>10</td><td>Modulus</td></tr><tr><td>++</td><td>A++</td><td>51</td><td>Increment</td></tr><tr><td>--</td><td>A--</td><td>49</td><td>Decrement</td></tr></tbody></table><h2 id="relational-operators" tabindex="-1"><a class="header-anchor" href="#relational-operators"><span>Relational Operators</span></a></h2><table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>50</td><td>20</td></tr></tbody></table><table><thead><tr><th>Operator</th><th>Operation</th><th>Result</th><th>Description</th></tr></thead><tbody><tr><td>==</td><td>A == B</td><td>false</td><td>Check if two numbers are equal, if yes then true, otherwise false</td></tr><tr><td>!=</td><td>A != B</td><td>true</td><td>Check if two numbers are not equal, if yes then true, otherwise false</td></tr><tr><td>&gt;</td><td>A &gt; B</td><td>true</td><td>Check if left side is greater than right side, if yes then true, otherwise false</td></tr><tr><td>&lt;</td><td>A &lt; B</td><td>false</td><td>Check if left side is less than right side, if yes then true, otherwise false</td></tr><tr><td>&gt;=</td><td>A &gt;= B</td><td>true</td><td>Check if left side is greater than or equal to right side, if yes then true, otherwise false</td></tr><tr><td>&lt;=</td><td>A &lt;= B</td><td>false</td><td>Check if left side is less than or equal to right side, if yes then true, otherwise false</td></tr></tbody></table><h2 id="logical-operators" tabindex="-1"><a class="header-anchor" href="#logical-operators"><span>Logical Operators</span></a></h2><table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>true</td><td>false</td></tr></tbody></table><table><thead><tr><th>Operator</th><th>Operation</th><th>Result</th><th>Description</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>A &amp;&amp; B</td><td>false</td><td>If both sides are true, then true, otherwise false</td></tr><tr><td>!=</td><td>A != B</td><td>true</td><td>If either side is true, then true, if both sides are false, then false</td></tr><tr><td>!</td><td>!A</td><td>false</td><td>If the condition is true, then false, otherwise true</td></tr></tbody></table><h2 id="bitwise-operators" tabindex="-1"><a class="header-anchor" href="#bitwise-operators"><span>Bitwise Operators</span></a></h2><p>Truth Table</p><table><thead><tr><th><strong>p</strong></th><th><strong>q</strong></th><th><strong>p &amp; q</strong></th><th><strong>p | q</strong></th><th><strong>p ^ q</strong></th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr></tbody></table><p>Assuming</p><table><thead><tr><th>Variable</th><th>Value</th></tr></thead><tbody><tr><td>A</td><td>0110 1000</td></tr><tr><td>B</td><td>0111 0011</td></tr></tbody></table><table><thead><tr><th>Operator</th><th>Operation</th><th>Result</th><th>Description</th></tr></thead><tbody><tr><td>&amp;</td><td>A &amp; B</td><td>0110 0000</td><td>Bitwise AND</td></tr><tr><td>|</td><td>A | B</td><td>0111 1011</td><td>Bitwise OR</td></tr><tr><td>^</td><td>A ^ B</td><td>0001 1011</td><td>Bitwise XOR</td></tr><tr><td>&lt;&lt;</td><td>A &lt;&lt; 2</td><td>1010 0000</td><td>Left shift by 2 bits, padded with 0</td></tr><tr><td>&gt;&gt;</td><td>A &gt;&gt; 2</td><td>0001 1010</td><td>Right shift by 2 bits, padded with 0</td></tr></tbody></table><h2 id="assignment-operators" tabindex="-1"><a class="header-anchor" href="#assignment-operators"><span>Assignment Operators</span></a></h2><p>We can use <code>=</code> to assign the result on the right to the left, such as <code>C = A + B</code></p><table><thead><tr><th>Operator</th><th>Operation</th><th>Equivalent to</th></tr></thead><tbody><tr><td>+=</td><td>A += B</td><td>A = A + B</td></tr><tr><td>-=</td><td>A -= B</td><td>A = A - B</td></tr><tr><td>*=</td><td>A *= B</td><td>A = A * B</td></tr><tr><td>/=</td><td>A /= B</td><td>A = A / B</td></tr><tr><td>%=</td><td>A %= B</td><td>A = A % B</td></tr><tr><td>&lt;&lt;=</td><td>A &lt;&lt;= 2</td><td>A = A &lt;&lt; 2</td></tr><tr><td>&gt;&gt;=</td><td>A &gt;&gt;= 2</td><td>A = A &gt;&gt; 2</td></tr><tr><td>&amp;=</td><td>A &amp;= 2</td><td>A = A &amp; 2</td></tr><tr><td>|=</td><td>A |= 2</td><td>A = A | 2</td></tr><tr><td>^=</td><td>A ^= 2</td><td>A = A ^ 2</td></tr></tbody></table><h2 id="other-symbols" tabindex="-1"><a class="header-anchor" href="#other-symbols"><span>Other Symbols</span></a></h2><table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td>&amp;</td><td>Address of</td></tr><tr><td>*</td><td>Pointer</td></tr></tbody></table><h2 id="symbol-precedence" tabindex="-1"><a class="header-anchor" href="#symbol-precedence"><span>Symbol Precedence</span></a></h2><p>From high to low:</p><table><thead><tr><th>Precedence</th><th>Operator</th></tr></thead><tbody><tr><td>5</td><td>* / % &lt;&lt; &gt;&gt; &amp; &amp;^</td></tr><tr><td>4</td><td>+ - | ^</td></tr><tr><td>3</td><td>== != &lt; &lt;= &gt; &gt;=</td></tr><tr><td>2</td><td>&amp;&amp;</td></tr><tr><td>1</td><td>||</td></tr></tbody></table><p><strong>Parentheses can be used to increase precedence</strong></p>',24),n=[o];function s(h,i){return e(),d("div",null,n)}const c=t(a,[["render",s],["__file","3-operator.html.vue"]]),g=JSON.parse('{"path":"/en/guide/concepts/golang/3-operator.html","title":"Operators","lang":"en-US","frontmatter":{"order":3,"title":"Operators","description":"Arithmetic Operators Relational Operators Logical Operators Bitwise Operators Truth Table Assuming Assignment Operators We can use = to assign the result on the right to the lef...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/golang/3-operator.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/golang/3-operator.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"Operators"}],["meta",{"property":"og:description","content":"Arithmetic Operators Relational Operators Logical Operators Bitwise Operators Truth Table Assuming Assignment Operators We can use = to assign the result on the right to the lef..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T10:20:55.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-01-17T10:20:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Operators\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T10:20:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Arithmetic Operators","slug":"arithmetic-operators","link":"#arithmetic-operators","children":[]},{"level":2,"title":"Relational Operators","slug":"relational-operators","link":"#relational-operators","children":[]},{"level":2,"title":"Logical Operators","slug":"logical-operators","link":"#logical-operators","children":[]},{"level":2,"title":"Bitwise Operators","slug":"bitwise-operators","link":"#bitwise-operators","children":[]},{"level":2,"title":"Assignment Operators","slug":"assignment-operators","link":"#assignment-operators","children":[]},{"level":2,"title":"Other Symbols","slug":"other-symbols","link":"#other-symbols","children":[]},{"level":2,"title":"Symbol Precedence","slug":"symbol-precedence","link":"#symbol-precedence","children":[]}],"git":{"createdTime":1705486855000,"updatedTime":1705486855000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"en/guide/concepts/golang/3-operator.md","localizedDate":"January 17, 2024","autoDesc":true,"excerpt":"<h2>Arithmetic Operators</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>A</th>\\n<th>B</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>50</td>\\n<td>20</td>\\n</tr>\\n</tbody>\\n</table>\\n<table>\\n<thead>\\n<tr>\\n<th>Operator</th>\\n<th>Operation</th>\\n<th>Result</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>+</td>\\n<td>A + B</td>\\n<td>70</td>\\n<td>Addition</td>\\n</tr>\\n<tr>\\n<td>-</td>\\n<td>A - B</td>\\n<td>30</td>\\n<td>Subtraction</td>\\n</tr>\\n<tr>\\n<td>*</td>\\n<td>A * B</td>\\n<td>1000</td>\\n<td>Multiplication</td>\\n</tr>\\n<tr>\\n<td>/</td>\\n<td>A / B</td>\\n<td>2</td>\\n<td>Division</td>\\n</tr>\\n<tr>\\n<td>%</td>\\n<td>A % B</td>\\n<td>10</td>\\n<td>Modulus</td>\\n</tr>\\n<tr>\\n<td>++</td>\\n<td>A++</td>\\n<td>51</td>\\n<td>Increment</td>\\n</tr>\\n<tr>\\n<td>--</td>\\n<td>A--</td>\\n<td>49</td>\\n<td>Decrement</td>\\n</tr>\\n</tbody>\\n</table>"}');export{c as comp,g as data};