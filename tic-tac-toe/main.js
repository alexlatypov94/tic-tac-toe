!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var i,r,o={},s=(r={},function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]});function a(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=o[i.id],s=0;if(r){for(r.refs++;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(v(i.parts[s],t))}else{for(var a=[];s<i.parts.length;s++)a.push(v(i.parts[s],t));o[i.id]={id:i.id,refs:1,parts:a}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}var p=null,h=0;function v(e,t){var n,i,r;if(t.singleton){var o=h++;n=p=p||l(t),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=l(t),i=function(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,n,t),r=function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(e,t);return c(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var s=n[r],l=o[s.id];l&&(l.refs--,i.push(l))}e&&c(a(e,t),t);for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(2),t),r(n(3),t),r(n(15),t)},function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(7),t),r(n(10),t)},function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(11),t),r(n(12),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(5);var i=n(1),r=new i.InitGame,o=new i.PlayMode;r.init(),o.init(),document.querySelector("body").addEventListener("click",(function(e){e.target.closest(".init-game-btn")&&(document.body.innerHTML="",r.init(),o.onDischarge())}))},function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.i,i,""]]);n(0)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.newGame=t.ceil=t.field=t.title=void 0,n(8),t.title='\n    <h1 class = "init-game-title">Tic Tac Toe</h1>\n',t.field='\n    <div class = "init-game-field"></div>\n',t.ceil=function(e){return'<div class = "init-game-ceil" data-ceil-number = "'+e+'"></div>'},t.newGame='\n    <button class = "init-game-btn" type = "button">New Game</button>\n'},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]);n(0)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InitGame=void 0;var i=n(2),r=(o.prototype.init=function(){document.body.insertAdjacentHTML("beforeend",i.title),document.body.insertAdjacentHTML("beforeend",i.field),document.body.insertAdjacentHTML("beforeend",i.newGame),this.initCiel()},o.prototype.initCiel=function(){for(var e=document.querySelector(".init-game-field"),t=0;t<9;t+=1)e.insertAdjacentHTML("beforeend",i.ceil(t))},o);function o(){}t.InitGame=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlayMode=void 0;var i=n(3),r=n(1),o=(s.prototype.init=function(){this.addEventListener()},s.prototype.addEventListener=function(){var e=this;document.querySelector("body").addEventListener("click",(function(t){e.isEnabled||e.finishGame||(e.onCeilClick(t),e.isZero=!e.isZero)}))},s.prototype.onCeilClick=function(e){var t=this;if(!e.target.closest(".zero")&&!e.target.closest(".crest")&&e.target.closest(".init-game-ceil")){var n=new Audio;this.counter+=1,this.isEnabled=!0,setTimeout((function(){t.isEnabled=!1}),900),e.target.insertAdjacentHTML("beforeend",i.ceilItem(this.isZero)),this.isZero?e.target.classList.add("zero"):e.target.classList.add("cross"),this.isZero?n.src="./assets/audio/zero.mp3":n.src="./assets/audio/cross.mp3",n.play(),this.isWin()}},s.prototype.isWin=function(){var e=this,t=document.querySelectorAll(".init-game-ceil"),n=document.querySelector(".init-game-field");9===this.counter&&(document.body.insertAdjacentHTML("beforeend",i.winner("Draw")),n.classList.add("field-hide"),this.winName="Draw",this.finishGame=!0),r.WIN_COMB.forEach((function(r,o,s){t[s[o][0]].classList.contains("cross")&&t[s[o][1]].classList.contains("cross")&&t[s[o][2]].classList.contains("cross")&&(setTimeout((function(){t[s[o][0]].classList.add("finish"),t[s[o][1]].classList.add("finish"),t[s[o][2]].classList.add("finish")})),document.body.insertAdjacentHTML("beforeend",i.winner("Cross")),n.classList.add("field-hide"),e.winName="Cross",e.finishGame=!0),t[s[o][0]].classList.contains("zero")&&t[s[o][1]].classList.contains("zero")&&t[s[o][2]].classList.contains("zero")&&(setTimeout((function(){t[s[o][0]].classList.add("finish"),t[s[o][1]].classList.add("finish"),t[s[o][2]].classList.add("finish")})),document.body.insertAdjacentHTML("beforeend",i.winner("Zero")),n.classList.add("field-hide"),e.winName="Zero",e.finishGame=!0)}))},s.prototype.onDischarge=function(){this.isEnabled=!1,this.isZero=!1,this.counter=0,this.finishGame=!1,this.winName=""},s);function s(){this.isEnabled=!1,this.isZero=!1,this.counter=0,this.finishGame=!1,this.winName=""}t.PlayMode=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.winner=t.ceilItem=void 0,n(13),t.ceilItem=function(e){return e?'\n    <svg class = "circle">\n        <circle r="40" cx="47" cy="47" stroke="blue" stroke-width = "10" fill="none" stroke-linecap="round"/>\n    </svg>\n':'\n    <svg class = "cross">\n        <line class = "first" x1 = "10" y1 = "10" x2 = "80" y2= "80" stroke = "red" stroke-width = "10" stroke-linecap="round" />\n        <line class = "second" x1 = "80" y1 = "10" x2 = "10" y2= "80" stroke = "red" stroke-width = "10" stroke-linecap="round" />\n    </svg>\n'},t.winner=function(e){return"Draw"!==e?'<h1 class = "winner">'+e+" is WIN</h1>":'<h1 class = "winner">'+e+"</h1>"}},function(e,t,n){var i=n(14);"string"==typeof i&&(i=[[e.i,i,""]]);n(0)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)},function(e,t,n){},function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(16),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WIN_COMB=void 0,t.WIN_COMB=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]}]);