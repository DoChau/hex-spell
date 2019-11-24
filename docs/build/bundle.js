var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function l(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}const i="undefined"!=typeof window;let c=i?()=>window.performance.now():()=>Date.now(),a=i?e=>requestAnimationFrame(e):e;const u=new Set;let f,d=!1;function h(){u.forEach(e=>{e[0](c())||(u.delete(e),e[1]())}),(d=u.size>0)&&a(h)}function m(e){let t;return d||(d=!0,a(h)),{promise:new Promise(n=>{u.add(t=[e,n])}),abort(){u.delete(t)}}}function _(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function w(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e){return function(t){return t.preventDefault(),e.call(this,t)}}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.data!==t&&(e.data=t)}function M(e,t,n){e.classList[n?"add":"remove"](t)}let C,O=0,S={};function j(e,t){e.style.animation=(e.style.animation||"").split(", ").filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")).join(", "),t&&!--O&&a(()=>{if(O)return;let e=f.cssRules.length;for(;e--;)f.deleteRule(e);S={}})}function E(n,r,o,l){if(!r)return e;const s=n.getBoundingClientRect();if(r.left===s.left&&r.right===s.right&&r.top===s.top&&r.bottom===s.bottom)return e;const{delay:i=0,duration:a=300,easing:u=t,start:d=c()+i,end:h=d+a,tick:_=e,css:g}=o(n,{from:r,to:s},l);let p,$=!0,b=!1;function v(){g&&j(n,p),$=!1}return m(e=>{if(!b&&e>=d&&(b=!0),b&&e>=h&&(_(1,0),v()),!$)return!1;if(b){const t=0+1*u((e-d)/a);_(t,1-t)}return!0}),g&&(p=function(e,t,n,r,o,l,s,i=0){const c=16.666/r;let a="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*l(e);a+=100*e+`%{${s(r,1-r)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${i}`;if(!S[d]){if(!f){const e=y("style");document.head.appendChild(e),f=e.sheet}S[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length)}const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${d} ${r}ms linear ${o}ms 1 both`,O+=1,d}(n,0,1,a,i,u,g)),i||(b=!0),_(0,1),v}function R(e){const t=getComputedStyle(e);if("absolute"!==t.position&&"fixed"!==t.position){const{width:n,height:r}=t,o=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=r,function(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const r=getComputedStyle(e),o="none"===r.transform?"":r.transform;e.style.transform=`${o} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}(e,o)}}function B(e){C=e}function H(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}const W=[],q=[],D=[],L=[],P=Promise.resolve();let I=!1;function N(e){D.push(e)}function T(){const e=new Set;do{for(;W.length;){const e=W.shift();B(e),U(e.$$)}for(;q.length;)q.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];e.has(n)||(n(),e.add(n))}D.length=0}while(W.length);for(;L.length;)L.pop()();I=!1}function U(e){null!==e.fragment&&(e.update(e.dirty),o(e.before_update),e.fragment&&e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(N))}const F=new Set;let Q;function z(){Q={r:0,c:[],p:Q}}function G(){Q.r||o(Q.c),Q=Q.p}function J(e,t){e&&e.i&&(F.delete(e),e.i(t))}function K(e,t,n,r){if(e&&e.o){if(F.has(e))return;F.add(e),Q.c.push(()=>{F.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function V(e,t){e.f(),function(e,t){K(e,1,1,()=>{t.delete(e.key)})}(e,t)}function X(e){e&&e.c()}function Y(e,t,r){const{fragment:s,on_mount:i,on_destroy:c,after_update:a}=e.$$;s&&s.m(t,r),N(()=>{const t=i.map(n).filter(l);c?c.push(...t):o(t),e.$$.on_mount=[]}),a.forEach(N)}function Z(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx={})}function ee(e,t){e.$$.dirty||(W.push(e),I||(I=!0,P.then(T)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function te(t,n,l,s,i,c){const a=C;B(t);const u=n.props||{},f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:null};let d=!1;f.ctx=l?l(t,u,(e,n,r=n)=>(f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(f.bound[e]&&f.bound[e](r),d&&ee(t,e)),n)):u,f.update(),d=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),n.target&&(n.hydrate?f.fragment&&f.fragment.l(function(e){return Array.from(e.childNodes)}(n.target)):f.fragment&&f.fragment.c(),n.intro&&J(t.$$.fragment),Y(t,n.target,n.anchor),T()),B(a)}class ne{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const re=[];function oe(e,t){return{subscribe:le(e,t).subscribe}}function le(t,n=e){let r;const o=[];function l(e){if(s(t,e)&&(t=e,r)){const e=!re.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),re.push(n,t)}if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(s,i=e){const c=[s,i];return o.push(c),1===o.length&&(r=n(l)||e),s(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const se=[...Array(24).fill("E"),...Array(16).fill("A"),...Array(15).fill("O"),...Array(15).fill("T"),...Array(13).fill("I"),...Array(13).fill("N"),...Array(13).fill("R"),...Array(10).fill("S"),...Array(7).fill("L"),...Array(5).fill("U"),...Array(8).fill("D"),...Array(5).fill("G"),...Array(6).fill("C"),...Array(6).fill("M"),...Array(4).fill("B"),...Array(4).fill("P"),...Array(5).fill("H"),...Array(4).fill("F"),...Array(4).fill("W"),...Array(4).fill("Y"),...Array(3).fill("V"),...Array(2).fill("K"),...Array(2).fill("J"),...Array(2).fill("X"),...Array(2).fill("Qu"),...Array(2).fill("Z")],ie=se.length,ce=7,ae=12;let ue;!async function(){const e=await fetch("data/wordlist.txt"),t=await e.text(),n=new Set(t.split("\n"));ue={isWord:e=>n.has(e)}}();const fe=[10,20,40,70,100,130,160,200];function de(e){let t=[...se];!function(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}(t);const n=Array(ce),r=Array(ce).fill(null).map(()=>[]);for(let e=0;e<ae;e++)for(let o=0;o<ce;o++){const l=e*ce+o;r[o].push({index:l,value:t[l%ie]}),n[o]=l}const{subscribe:o,update:l}=le(r);return{subscribe:o,remove:e=>l(r=>{for(const t of e){const[e,n]=_e(t);r[n][e]=null}for(let e=0;e<ce;e++)if(r[e].includes(null)){r[e]=r[e].filter(e=>e);const o=ae-r[e].length;for(let l=0;l<o;l++)n[e]+=ce,r[e].push({index:n[e],value:t[n[e]%ie]})}return[...r]})}}const he=oe(new Date,(function(e){const t=setInterval(()=>{e(new Date)},1e3);return function(){clearInterval(t)}}));function me(){const t=new Date;return function(t,n,r){const s=!Array.isArray(t),i=s?[t]:t,c=n.length<2;return oe(r,t=>{let r=!1;const a=[];let u=0,f=e;const d=()=>{if(u)return;f();const r=n(s?a[0]:a,t);c?t(r):f=l(r)?r:e},h=i.map((e,t)=>e.subscribe(e=>{a[t]=e,u&=~(1<<t),r&&d()},()=>{u|=1<<t}));return r=!0,d(),function(){o(h),f()}})}(he,e=>Math.round((e-t)/1e3))}function _e(e){return[Math.floor(e/ce),e%ce]}function ge(e,t){return e*ce+t}function pe(e){let t=e.length-3,n=0;for(;;){let r=e.indexOf("QU",n);if(-1===r)break;t--,n=r+1}return fe[t]}function $e(e){return{board_tiles:de(),score_card:function(){const{subscribe:e,set:t,update:n}=le({score:0,matched_words:[]});return{subscribe:e,push:e=>n(({score:t,matched_words:n})=>({score:t+=pe(e),matched_words:[...n,e]})),reset:()=>t({score:0,matched_words:[]})}}(),timer:me(),isWord:e=>ue.isWord(e)}}function ye(t){let n,r,o,l=(t.remaining<0?"0:00":t.timer_text)+"";return{c(){n=y("section"),r=b("Timer: "),o=b(l)},m(e,t){g(e,n,t),_(n,r),_(n,o)},p(e,t){(e.remaining||e.timer_text)&&l!==(l=(t.remaining<0?"0:00":t.timer_text)+"")&&k(o,l)},i:e,o:e,d(e){e&&p(n)}}}function be(t,n,r){let o,l=e,s=()=>(l(),l=function(e,t){const n=e.subscribe(t);return n.unsubscribe?()=>n.unsubscribe():n}(a,e=>r("$timer",o=e)),a);t.$$.on_destroy.push(()=>l());let i,c,{timer:a}=n;return s(),t.$set=e=>{"timer"in e&&s(r("timer",a=e.timer))},t.$$.update=(e={$timer:1,remaining:1})=>{e.$timer&&r("remaining",i=120-o),e.remaining&&r("timer_text",c=`${Math.floor(i/60)}:${i%60<10?"0"+i%60:i%60}`)},{timer:a,remaining:i,timer_text:c}}class ve extends ne{constructor(e){super(),te(this,e,be,ye,s,{timer:0})}}function we(e,t,n){const r=Object.create(e);return r.word=t[n],r}function xe(e){let t,n,r,o,l,s,i,c=e.word+"",a=pe(e.word)+"";return{c(){t=y("li"),n=y("span"),r=b(c),o=v(),l=y("span"),s=b(a),i=v(),A(n,"class","word-list__item-text svelte-a24h1u"),A(l,"class","word-list__item-score svelte-a24h1u"),A(t,"class","word-list__item svelte-a24h1u")},m(e,c){g(e,t,c),_(t,n),_(n,r),_(t,o),_(t,l),_(l,s),_(t,i)},p(e,t){e.matched_words_value&&c!==(c=t.word+"")&&k(r,c),e.matched_words_value&&a!==(a=pe(t.word)+"")&&k(s,a)},d(e){e&&p(t)}}}function Ae(t){let n,r,o,l,s,i,c=t.matched_words_value,a=[];for(let e=0;e<c.length;e+=1)a[e]=xe(we(t,c,e));return{c(){n=y("section"),r=y("div"),o=b("Score: "),l=b(t.score_value),s=v(),i=y("ul");for(let e=0;e<a.length;e+=1)a[e].c();A(i,"class","word-list svelte-a24h1u"),A(n,"class","score-card")},m(e,t){g(e,n,t),_(n,r),_(r,o),_(r,l),_(n,s),_(n,i);for(let e=0;e<a.length;e+=1)a[e].m(i,null)},p(e,t){if(e.score_value&&k(l,t.score_value),e.getWordScore||e.matched_words_value){let n;for(c=t.matched_words_value,n=0;n<c.length;n+=1){const r=we(t,c,n);a[n]?a[n].p(e,r):(a[n]=xe(r),a[n].c(),a[n].m(i,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=c.length}},i:e,o:e,d(e){e&&p(n),$(a,e)}}}function ke(e,t,n){let r,o,{score_card:l}=t;l.subscribe(({matched_words:e,score:t})=>{n("score_value",o=t),n("matched_words_value",r=e)});return e.$set=e=>{"score_card"in e&&n("score_card",l=e.score_card)},{score_card:l,matched_words_value:r,score_value:o}}class Me extends ne{constructor(e){super(),te(this,e,ke,Ae,s,{score_card:0})}}function Ce(e){const t=e-1;return t*t*t+1}function Oe(e,t,n){const r=getComputedStyle(e),o="none"===r.transform?"":r.transform,s=t.from.width/e.clientWidth,i=t.from.height/e.clientHeight,c=(t.from.left-t.to.left)/s,a=(t.from.top-t.to.top)/i,u=Math.sqrt(c*c+a*a),{delay:f=0,duration:d=(e=>120*Math.sqrt(e)),easing:h=Ce}=n;return{delay:f,duration:l(d)?d(u):d,easing:h,css:(e,t)=>`transform: ${o} translate(${t*c}px, ${t*a}px);`}}function Se(t){let n,r,l,s,i;return{c(){n=y("div"),r=y("div"),l=y("div"),s=b(t.tile),A(l,"class","hex__text"),A(r,"class","hex__body svelte-1ykjaqx"),A(n,"class","hex svelte-1ykjaqx"),M(n,"hex--selected",t.is_selected),i=[w(n,"selectstart",x(t.selectstart_handler)),w(n,"mousedown",x(t.mousedown_handler)),w(n,"mouseover",x(t.mouseover_handler)),w(n,"selectstart",x(t.selectstart_handler_1))]},m(e,t){g(e,n,t),_(n,r),_(r,l),_(l,s)},p(e,t){e.tile&&k(s,t.tile),e.is_selected&&M(n,"hex--selected",t.is_selected)},i:e,o:e,d(e){e&&p(n),o(i)}}}function je(e,t,n){let{is_selected:r}=t,{tile:o}=t;return e.$set=e=>{"is_selected"in e&&n("is_selected",r=e.is_selected),"tile"in e&&n("tile",o=e.tile)},{is_selected:r,tile:o,selectstart_handler:function(t){H(e,t)},mousedown_handler:function(t){H(e,t)},mouseover_handler:function(t){H(e,t)},selectstart_handler_1:function(t){H(e,t)}}}class Ee extends ne{constructor(e){super(),te(this,e,je,Se,s,{is_selected:0,tile:0})}}function Re(e,t,n){const r=Object.create(e);return r.tile=t[n],r.row_index=n,r}function Be(e,t,n){const r=Object.create(e);return r.col_tiles=t[n],r.col_index=n,r}function He(t,n){let r,o,l,s=e;const i=new Ee({props:{tile:n.tile.value,is_selected:n.selected_flags[ge(n.row_index,n.col_index)]}});return i.$on("mousedown",(function(...e){return n.mousedown_handler(n,...e)})),i.$on("mouseover",(function(...e){return n.mouseover_handler(n,...e)})),{key:t,first:null,c(){r=y("div"),X(i.$$.fragment),A(r,"class","board__tile svelte-sdhutt"),this.first=r},m(e,t){g(e,r,t),Y(i,r,null),l=!0},p(e,t){n=t;const r={};e.board_tiles_value&&(r.tile=n.tile.value),(e.selected_flags||e.board_tiles_value)&&(r.is_selected=n.selected_flags[ge(n.row_index,n.col_index)]),i.$set(r)},r(){o=r.getBoundingClientRect()},f(){R(r),s()},a(){s(),s=E(r,o,Oe,{})},i(e){l||(J(i.$$.fragment,e),l=!0)},o(e){K(i.$$.fragment,e),l=!1},d(e){e&&p(r),Z(i)}}}function We(e){let t,n,r,o=[],l=new Map,s=e.col_tiles;const i=e=>e.tile.index;for(let t=0;t<s.length;t+=1){let n=Re(e,s,t),r=i(n);l.set(r,o[t]=He(r,n))}return{c(){t=y("div");for(let e=0;e<o.length;e+=1)o[e].c();n=v(),A(t,"class","board__col svelte-sdhutt"),M(t,"board__col--even",e.col_index%2)},m(e,l){g(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);_(t,n),r=!0},p(e,r){const s=r.col_tiles;z();for(let e=0;e<o.length;e+=1)o[e].r();o=function(e,t,n,r,o,l,s,i,c,a,u,f){let d=e.length,h=l.length,m=d;const _={};for(;m--;)_[e[m].key]=m;const g=[],p=new Map,$=new Map;for(m=h;m--;){const e=f(o,l,m),i=n(e);let c=s.get(i);c?r&&c.p(t,e):(c=a(i,e)).c(),p.set(i,g[m]=c),i in _&&$.set(i,Math.abs(m-_[i]))}const y=new Set,b=new Set;function v(e){J(e,1),e.m(i,u),s.set(e.key,e),u=e.first,h--}for(;d&&h;){const t=g[h-1],n=e[d-1],r=t.key,o=n.key;t===n?(u=t.first,d--,h--):p.has(o)?!s.has(r)||y.has(r)?v(t):b.has(o)?d--:$.get(r)>$.get(o)?(b.add(r),v(t)):(y.add(o),d--):(c(n,s),d--)}for(;d--;){const t=e[d];p.has(t.key)||c(t,s)}for(;h;)v(g[h-1]);return g}(o,e,i,1,r,s,l,t,V,He,n,Re);for(let e=0;e<o.length;e+=1)o[e].a();G()},i(e){if(!r){for(let e=0;e<s.length;e+=1)J(o[e]);r=!0}},o(e){for(let e=0;e<o.length;e+=1)K(o[e]);r=!1},d(e){e&&p(t);for(let e=0;e<o.length;e+=1)o[e].d()}}}function qe(e){let t,n,r,l=e.board_tiles_value,s=[];for(let t=0;t<l.length;t+=1)s[t]=We(Be(e,l,t));const i=e=>K(s[e],1,1,()=>{s[e]=null});return{c(){t=y("section");for(let e=0;e<s.length;e+=1)s[e].c();A(t,"class","board svelte-sdhutt"),r=[w(t,"mouseleave",x(e.mouseleave_handler)),w(t,"mouseup",x(e.mouseup_handler))]},m(e,r){g(e,t,r);for(let e=0;e<s.length;e+=1)s[e].m(t,null);n=!0},p(e,n){if(e.board_tiles_value||e.selected_flags||e.getTilePositionIndex||e.handleHexPress||e.handleHexOver){let r;for(l=n.board_tiles_value,r=0;r<l.length;r+=1){const o=Be(n,l,r);s[r]?(s[r].p(e,o),J(s[r],1)):(s[r]=We(o),s[r].c(),J(s[r],1),s[r].m(t,null))}for(z(),r=l.length;r<s.length;r+=1)i(r);G()}},i(e){if(!n){for(let e=0;e<l.length;e+=1)J(s[e]);n=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)K(s[e]);n=!1},d(e){e&&p(t),$(s,e),o(r)}}}function De(e,t,n){let{game:r}=t;const{score_card:o,board_tiles:l}=r;let s,i=[],c=!1,a=Array(ce*ae).fill(!1);l.subscribe(e=>{n("board_tiles_value",s=e)});function u(e){const[t,n]=_e(e);return s[n][t].value.toUpperCase()}function f(){for(const e of i)n("selected_flags",a[e]=!1,a);i=[]}function d(){c=!1,f()}function h(){if(c=!1,i.length<=2)return;const e=i.map(u).join("");r.isWord(e.toLowerCase())&&(l.remove(i),o.push(e)),f()}function m(e,t){c=!0,f(),i=[ge(e,t)],n("selected_flags",a[ge(e,t)]=!0,a)}function _(e,t){if(c){const r=ge(e,t),o=i.indexOf(r);if(-1===o){const o=ge(e,t);(0===i.length||function(e,t){const[n,r]=_e(e),[o,l]=_e(t);return r===l?1===Math.abs(n-o):(n===o||n-o==1-r%2*2)&&1===Math.abs(r-l)}(o,i[i.length-1]))&&(i.push(r),i=i,n("selected_flags",a[o]=!0,a))}else if(o===i.length-2){const e=i.pop();i=i,n("selected_flags",a[e]=!1,a)}}}return e.$set=e=>{"game"in e&&n("game",r=e.game)},{game:r,selected_flags:a,board_tiles_value:s,handleBoardLeave:d,handleMouseUp:h,handleHexPress:m,handleHexOver:_,mousedown_handler:({row_index:e,col_index:t})=>m(e,t),mouseover_handler:({row_index:e,col_index:t})=>_(e,t),mouseleave_handler:()=>d(),mouseup_handler:()=>h()}}class Le extends ne{constructor(e){super(),te(this,e,De,qe,s,{game:0})}}function Pe(t){let n,r,o,l,s,i,c,a;const u=new Le({props:{game:t.game}}),f=new ve({props:{timer:t.game.timer}}),d=new Me({props:{score_card:t.game.score_card}});return{c(){n=y("main"),(r=y("h1")).textContent="HexSpell",o=v(),l=y("div"),X(u.$$.fragment),s=v(),i=y("div"),X(f.$$.fragment),c=v(),X(d.$$.fragment),A(r,"class","page-title svelte-1y8l18b"),A(i,"class","right-pane svelte-1y8l18b"),A(l,"class","page-layout svelte-1y8l18b"),A(n,"class","page svelte-1y8l18b")},m(e,t){g(e,n,t),_(n,r),_(n,o),_(n,l),Y(u,l,null),_(l,s),_(l,i),Y(f,i,null),_(i,c),Y(d,i,null),a=!0},p:e,i(e){a||(J(u.$$.fragment,e),J(f.$$.fragment,e),J(d.$$.fragment,e),a=!0)},o(e){K(u.$$.fragment,e),K(f.$$.fragment,e),K(d.$$.fragment,e),a=!1},d(e){e&&p(n),Z(u),Z(f),Z(d)}}}function Ie(e){const t=$e();return t.board_tiles.subscribe(e=>{}),{game:t}}return new class extends ne{constructor(e){super(),te(this,e,Ie,Pe,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
