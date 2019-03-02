parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){"use strict";var t,n,i,o,l=[{"flex-direction":["row","row-reverse","column","column-reverse"]},{"flex-wrap":["nowrap","wrap","wrap-reverse"]},{"justify-content":["flex-start","flex-end","center","space-between","space-around","space-evenly"]},{"align-items":["flex-start","flex-end","center","stretch","baseline"]},{"align-content":["flex-start","flex-end","center","space-between","space-around","stretch"]}],s={"flex-direction":"It define the main-axis, according to direction item are placed in container. <br /><ul> <li><b>row</b> (default): left to right in ltr; right to left in rtl</li> <li>\t<b>row-reverse</b>: right to left in ltr; left to right in rtl </li> <li><b>column</b>: same as row but top to bottom </li><li> <b>column-reverse</b>: same as row-reverse but bottom to top </li></ul>","flex-wrap":"Define if the flex items will break onto multiple lines if their width are larger than width of container. <br /> <ul> <li> <strong> nowrap </strong>(default): all flex items will be on one line </li> <li> <strong> wrap: </strong> flex items will wrap onto multiple lines, from top to bottom. </li> <li> <strong> wrap - reverse: </strong>flex items will wrap onto multiple lines from bottom to top.</li> </ul>","justify-content":"It control the alignment along the main axis of flex container. <br /> <ul><li><strong>flex-start </strong>(default): items are packed toward the start line. </li><li><strong> flex-end:</strong> items are packed toward to end line. </li><li><strong> center:</strong> items are centered along the line </li><li><strong> space-between:</strong> items are evenly distributed in the line; first item is on the start line, last item on the end line </li><li><strong> space-around:</strong> items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies. </li><li><strong> space-evenly:</strong> items are distributed so that the spacing between any two items (and the space to the edges) is equal.</li></ul>","align-items":"It controls how\tthe\titems are laid out along the cross axis(mainly horizontally), relative to the parent container. <br /> <ul><li><strong>stretch</strong> (default): it fill the container (still follow min-width/max-width)</li><li><strong>flex-start</strong>: cross-start margin edge of the items is placed on the cross-start line</li><li><strong>flex-end</strong>: cross-end margin edge of the items is placed on the cross-end line</li><li><strong>center</strong>: center the items on the cross-axis</li><li><strong>baseline</strong>: items aligned according to their baselines align</li></ul>","align-content":"Align flex items with extra space on the cross-axis, within the flex container when have multiple lines. <br /> <ul><li><strong>flex-start</strong>: lines packed to the start of the container</li><li><strong>flex-end</strong>: lines packed to the end of the container</li><li><strong>center</strong>: lines packed to the center of the container</li><li><strong>space-between</strong>: lines evenly distributed; the first line is at the start of the container while the last one is at the end</li><li><strong>space-around</strong>: lines evenly distributed with equal space around each line</li><li><strong>stretch</strong> (default): lines stretch to take up the remaining space</li></ul>"},r={order:"It is used to re-arrange the natural order of items <br /><span class='code-style'> order: < integer >; &nbsp; &nbsp; // default is 0 </span>","flex-basis":"Similar to min-width, it will expand item's size based on inner content.otherwise the default basis value will be applied. Length can be in - %, em, rem, px or auto. <br /> <span class='code-style'>  flex-basis: < length > | auto;  &nbsp;  &nbsp;  // default auto </span>","flex-grow":"Define how much the item will take of available space, the value serves as a proportion. <br /> <span class = 'code-style'> flex-grow: < number > ; &nbsp; &nbsp; // default 0 </span>","flex-shrink":"Control how much item will shrink relative to others if there is not enough space (proportion of overflow that gets shaved off)","align-self":"It is used to align individual items in a flex container along the cross axis."},a=[],c=null;function u(e){var t;Object.values(l[this.selectedIndex])[0].map(function(e,t){i[t]=new Option(e,t)}),c=n.options[this.value].text,console.log(e),t=c,console.log(t),document.querySelector(".propDetails").innerHTML=s[t]}function h(){var t=this,n=!1;a.length>0?(a.map(function(e){Object.keys(e).includes(c)&&(e[c]=i.options[t.value].text,n=!0)}),n||a.push(e({},c,i.options[this.value].text))):(a.push(e({},c,i.options[this.value].text)),a.unshift({display:"flex"})),document.querySelector(".flex-container").setAttribute("style","".concat(c," : ").concat(i.options[this.value].text)),function(e,t){var n=null;n=t.map(function(e){return"".concat(Object.keys(e)[0],": ").concat(e[Object.keys(e)[0]],"; \n")}),e.innerHTML=n.join("<br>")}(o,a)}function d(e){var t=e.target.getAttribute("data-prop");e.target.closest(".flex-item").style[t]="".concat(e.target.value)}function p(e){var t=e.target.getAttribute("data-prop");t&&function(e){var t;t=void 0===(t="-")?"_":t,e=e.replace(/([a-z\d])([A-Z])/g,"$1"+t+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+t+"$2").toLowerCase(),document.querySelector(".itemPropInfo").innerHTML=r[e]}(t)}!function(){var e;t=document.querySelector(".flex-container"),n=document.getElementById("containerPropSelect"),i=document.getElementById("containerValueSelect"),o=document.getElementById("containerStyle"),document.querySelectorAll(".flex-item"),e=n,l.map(function(t,n){e[n]=new Option(Object.keys(t)[0],n)}),n.onchange=u,i.onchange=h,t.onchange=d,t.onmouseover=p;var s=new Event("change");n.dispatchEvent(s),i.dispatchEvent(s)}(),console.log("@@@@@@")}();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.91affd0e.map