import{S as R,i as V,s as j,k as M,l as E,m as z,h as g,n as b,p as d,b as $,V as X,W as ne,A as _e,o as Y,C as Z,F as J,G as K,H as Q,f as y,t as k,a as T,c as N,E as C,X as pe,T as O,Y as de,Z as le,v as F,w as W,x as q,y as L,e as S,g as oe,_ as me,d as ae,$ as ge,q as ve,r as we,u as be}from"../../chunks/index-0e0bfadc.js";function re(t){const e=t-1;return e*e*e+1}function $e(t,{delay:e=0,duration:n=400,easing:l=re,x:s=0,y:a=0,opacity:i=0}={}){const r=getComputedStyle(t),o=+r.opacity,u=r.transform==="none"?"":r.transform,c=o*(1-i);return{delay:e,duration:n,easing:l,css:(p,h)=>`
			transform: ${u} translate(${(1-p)*s}px, ${(1-p)*a}px);
			opacity: ${o-c*h}`}}function x(t,{delay:e=0,duration:n=400,easing:l=re,start:s=0,opacity:a=0}={}){const i=getComputedStyle(t),r=+i.opacity,o=i.transform==="none"?"":i.transform,u=1-s,c=r*(1-a);return{delay:e,duration:n,easing:l,css:(p,h)=>`
			transform: ${o} scale(${1-u*h});
			opacity: ${r-c*h}
		`}}function ye(t){let e,n;return{c(){e=M("div"),this.h()},l(l){e=E(l,"DIV",{class:!0,style:!0}),z(e).forEach(g),this.h()},h(){b(e,"class","rain-drop svelte-1k3ayai"),d(e,"translate",t[1]+t[0]/2+"px "+(t[2]+t[0]/2)+"px")},m(l,s){$(l,e,s)},p(l,[s]){t=l,s&7&&d(e,"translate",t[1]+t[0]/2+"px "+(t[2]+t[0]/2)+"px")},i(l){n||X(()=>{n=ne(e,$e,{opacity:0,y:-500,duration:ie,easing:t[3]}),n.start()})},o:_e,d(l){l&&g(e)}}}const ie=800;function ke(t,e,n){let{size:l}=e,{left:s}=e,{top:a}=e,{splash:i}=e;Y(()=>{setTimeout(i,ie)});const r=o=>o*o*o;return t.$$set=o=>{"size"in o&&n(0,l=o.size),"left"in o&&n(1,s=o.left),"top"in o&&n(2,a=o.top),"splash"in o&&n(4,i=o.splash)},[l,s,a,r,i]}class Me extends R{constructor(e){super(),V(this,e,ke,ye,j,{size:0,left:1,top:2,splash:4})}}function Ee(t){let e,n;const l=t[1].default,s=Z(l,t,t[0],null);return{c(){e=M("section"),s&&s.c(),this.h()},l(a){e=E(a,"SECTION",{class:!0});var i=z(e);s&&s.l(i),i.forEach(g),this.h()},h(){b(e,"class","svelte-1g0cl02")},m(a,i){$(a,e,i),s&&s.m(e,null),n=!0},p(a,[i]){s&&s.p&&(!n||i&1)&&J(s,l,a,a[0],n?Q(l,a[0],i,null):K(a[0]),null)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&g(e),s&&s.d(a)}}}function ze(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=a=>{"$$scope"in a&&n(0,s=a.$$scope)},[s,l]}class Ce extends R{constructor(e){super(),V(this,e,ze,Ee,j,{})}}function Ie(t){let e,n,l,s,a;const i=t[2].default,r=Z(i,t,t[1],null);return{c(){e=M("section"),n=M("canvas"),l=T(),s=M("div"),r&&r.c(),this.h()},l(o){e=E(o,"SECTION",{class:!0});var u=z(e);n=E(u,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(n).forEach(g),l=N(u),s=E(u,"DIV",{class:!0});var c=z(s);r&&r.l(c),c.forEach(g),u.forEach(g),this.h()},h(){b(n,"id","rainbow-bg"),b(n,"width","32"),b(n,"height","32"),b(n,"class","svelte-v6ivlj"),b(s,"class","content svelte-v6ivlj"),b(e,"class","svelte-v6ivlj")},m(o,u){$(o,e,u),C(e,n),t[3](n),C(e,l),C(e,s),r&&r.m(s,null),a=!0},p(o,[u]){r&&r.p&&(!a||u&2)&&J(r,i,o,o[1],a?Q(i,o[1],u,null):K(o[1]),null)},i(o){a||(y(r,o),a=!0)},o(o){k(r,o),a=!1},d(o){o&&g(e),t[3](null),r&&r.d(o)}}}function Se(t,e,n){let{$$slots:l={},$$scope:s}=e,a,i,r=0;Y(()=>{i=a.getContext("2d"),i!==null&&h()});const o=(f,m,w,P,A)=>{i.fillStyle="rgb("+w+","+P+","+A+")",i.fillRect(f,m,1,1)},u=(f,m,w)=>Math.floor(192+64*Math.cos((f*f-m*m)/300+w)),c=(f,m,w)=>Math.floor(192+64*Math.sin((f*f*Math.cos(w/4)+m*m*Math.sin(w/3))/300)),p=(f,m,w)=>Math.floor(192+64*Math.sin(5*Math.sin(w/9)+((f-100)*(f-100)+(m-100)*(m-100))/1100)),h=()=>{for(let f=0;f<=35;f++)for(let m=0;m<=35;m++)o(f,m,u(f,m,r),c(f,m,r),p(f,m,r));r=r+.012,window.requestAnimationFrame(h)};function v(f){pe[f?"unshift":"push"](()=>{a=f,n(0,a)})}return t.$$set=f=>{"$$scope"in f&&n(1,s=f.$$scope)},[a,s,l,v]}class De extends R{constructor(e){super(),V(this,e,Se,Ie,j,{})}}function Re(t){let e,n,l,s,a,i,r,o,u,c;const p=t[12].default,h=Z(p,t,t[11],null);return{c(){e=M("div"),n=M("div"),l=T(),s=M("div"),a=T(),h&&h.c(),this.h()},l(v){e=E(v,"DIV",{class:!0,style:!0});var f=z(e);n=E(f,"DIV",{class:!0,style:!0}),z(n).forEach(g),l=N(f),s=E(f,"DIV",{class:!0,style:!0}),z(s).forEach(g),a=N(f),h&&h.l(f),f.forEach(g),this.h()},h(){b(n,"class","shine svelte-t1hp4"),d(n,"width",t[0]/10+"px"),d(n,"height",t[0]/10+"px"),d(n,"translate",t[5]-t[0]/4+"px "+(t[4]-t[0]/4)+"px"),b(s,"class","shine svelte-t1hp4"),d(s,"width",t[0]/25+"px"),d(s,"height",t[0]/25+"px"),d(s,"translate",t[5]+25*t[0]/350-t[0]/4+"px "+(t[4]+30*t[0]/350-t[0]/4)+"px "),b(e,"class","water-drop svelte-t1hp4"),d(e,"width",t[0]+"px"),d(e,"height",t[0]+"px"),d(e,"translate",t[2]+"px "+t[1]+"px"),d(e,"border-radius",t[3])},m(v,f){$(v,e,f),C(e,n),C(e,l),C(e,s),C(e,a),h&&h.m(e,null),o=!0,u||(c=[O(e,"mouseenter",t[6]),O(e,"click",t[7])],u=!0)},p(v,[f]){t=v,(!o||f&1)&&d(n,"width",t[0]/10+"px"),(!o||f&1)&&d(n,"height",t[0]/10+"px"),(!o||f&49)&&d(n,"translate",t[5]-t[0]/4+"px "+(t[4]-t[0]/4)+"px"),(!o||f&1)&&d(s,"width",t[0]/25+"px"),(!o||f&1)&&d(s,"height",t[0]/25+"px"),(!o||f&49)&&d(s,"translate",t[5]+25*t[0]/350-t[0]/4+"px "+(t[4]+30*t[0]/350-t[0]/4)+"px "),h&&h.p&&(!o||f&2048)&&J(h,p,t,t[11],o?Q(p,t[11],f,null):K(t[11]),null),(!o||f&1)&&d(e,"width",t[0]+"px"),(!o||f&1)&&d(e,"height",t[0]+"px"),(!o||f&6)&&d(e,"translate",t[2]+"px "+t[1]+"px"),(!o||f&8)&&d(e,"border-radius",t[3])},i(v){o||(y(h,v),X(()=>{r&&r.end(1),i=ne(e,x,{opacity:0,duration:1600,easing:t[8]}),i.start()}),o=!0)},o(v){k(h,v),i&&i.invalidate(),r=de(e,x,{opacity:0,duration:800,easing:t[9]}),o=!1},d(v){v&&g(e),h&&h.d(v),v&&r&&r.end(),u=!1,le(c)}}}const ee=.012,G=3;function Ve(t,e,n){let{$$slots:l={},$$scope:s}=e,{size:a=350}=e,{top:i=0}=e,{left:r=0}=e;const o=[[41,59,45,55],[54,42,58,46]];let u=new Array(o.length).fill(new Array(o[0].length).fill(0)),c=0,p="41% 59% 45% 55% / 54% 42% 58% 46%",h=50,v=85;Y(()=>{m()});let f=10;const m=()=>{n(10,u=o.map(_=>_.map((I,D)=>w(0,G,c,D%2===0?U:A)))),n(4,h=w(0,G*a/350,c,U)),n(5,v=w(0,G*a/350,c,A)),c=c+ee*f,f=Math.max(f-ee*5,1),window.requestAnimationFrame(m)},w=(_,I,D,B=P)=>_+(I-_)*B(D),P=_=>_,A=_=>Math.cos(_),U=_=>Math.sin(_),fe=()=>f=Math.min(f+5,30),ue=()=>f=Math.min(f+10,30),ce=_=>{const I=2*Math.PI/3;return _===0?0:_===1?1:Math.pow(2,-10*_)*Math.sin((_*10-.75)*I)+1},he=_=>Math.sin(_*Math.PI/2);return t.$$set=_=>{"size"in _&&n(0,a=_.size),"top"in _&&n(1,i=_.top),"left"in _&&n(2,r=_.left),"$$scope"in _&&n(11,s=_.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(3,p=u.map((_,I)=>_.map((D,B)=>`${D+o[I][B]}%`).join(" ")).join(" / "))},[a,i,r,p,h,v,fe,ue,ce,he,u,s,l]}class je extends R{constructor(e){super(),V(this,e,Ve,Re,j,{size:0,top:1,left:2})}}function te(t,e,n){const l=t.slice();return l[6]=e[n],l[7]=e,l[8]=n,l}function Ae(t){let e,n;return e=new je({props:{size:t[6].radius+100,left:t[6].x,top:t[6].y,$$slots:{default:[Te]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,s){q(e,l,s),n=!0},p(l,s){const a={};s&4&&(a.size=l[6].radius+100),s&4&&(a.left=l[6].x),s&4&&(a.top=l[6].y),s&516&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function He(t){let e,n;function l(){return t[5](t[6],t[7],t[8])}return e=new Me({props:{size:t[6].radius+100,left:t[6].x,top:t[6].y,splash:l}}),{c(){F(e.$$.fragment)},l(s){W(e.$$.fragment,s)},m(s,a){q(e,s,a),n=!0},p(s,a){t=s;const i={};a&4&&(i.size=t[6].radius+100),a&4&&(i.left=t[6].x),a&4&&(i.top=t[6].y),a&4&&(i.splash=l),e.$set(i)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){L(e,s)}}}function Te(t){let e=t[6].content+"",n,l;return{c(){n=ve(e),l=T()},l(s){n=we(s,e),l=N(s)},m(s,a){$(s,n,a),$(s,l,a)},p(s,a){a&4&&e!==(e=s[6].content+"")&&be(n,e)},d(s){s&&g(n),s&&g(l)}}}function se(t,e){let n,l,s,a,i;const r=[He,Ae],o=[];function u(c,p){return c[6].dropping?0:1}return l=u(e),s=o[l]=r[l](e),{key:t,first:null,c(){n=S(),s.c(),a=S(),this.h()},l(c){n=S(),s.l(c),a=S(),this.h()},h(){this.first=n},m(c,p){$(c,n,p),o[l].m(c,p),$(c,a,p),i=!0},p(c,p){e=c;let h=l;l=u(e),l===h?o[l].p(e,p):(oe(),k(o[h],1,1,()=>{o[h]=null}),ae(),s=o[l],s?s.p(e,p):(s=o[l]=r[l](e),s.c()),y(s,1),s.m(a.parentNode,a))},i(c){i||(y(s),i=!0)},o(c){k(s),i=!1},d(c){c&&g(n),o[l].d(c),c&&g(a)}}}function Ne(t){let e=[],n=new Map,l,s,a=t[2];const i=r=>r[6];for(let r=0;r<a.length;r+=1){let o=te(t,a,r),u=i(o);n.set(u,e[r]=se(u,o))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();l=S()},l(r){for(let o=0;o<e.length;o+=1)e[o].l(r);l=S()},m(r,o){for(let u=0;u<e.length;u+=1)e[u].m(r,o);$(r,l,o),s=!0},p(r,o){o&4&&(a=r[2],oe(),e=me(e,o,i,1,r,a,n,l.parentNode,ge,se,l,te),ae())},i(r){if(!s){for(let o=0;o<a.length;o+=1)y(e[o]);s=!0}},o(r){for(let o=0;o<e.length;o+=1)k(e[o]);s=!1},d(r){for(let o=0;o<e.length;o+=1)e[o].d(r);r&&g(l)}}}function Oe(t){let e,n;return e=new Ce({props:{$$slots:{default:[Ne]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,s){q(e,l,s),n=!0},p(l,s){const a={};s&516&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Fe(t){let e,n,l,s,a;return X(t[4]),n=new De({props:{$$slots:{default:[Oe]},$$scope:{ctx:t}}}),{c(){e=M("section"),F(n.$$.fragment),this.h()},l(i){e=E(i,"SECTION",{class:!0});var r=z(e);W(n.$$.fragment,r),r.forEach(g),this.h()},h(){b(e,"class","svelte-126spjj")},m(i,r){$(i,e,r),q(n,e,null),l=!0,s||(a=[O(window,"keypress",t[3]),O(window,"resize",t[4])],s=!0)},p(i,[r]){const o={};r&516&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){l||(y(n.$$.fragment,i),l=!0)},o(i){k(n.$$.fragment,i),l=!1},d(i){i&&g(e),L(n),s=!1,le(a)}}}const H=100;function We(t,e,n){let l,s,a=[];const i=u=>{a.length>10&&a.shift(),n(2,a=[...a,{dropping:!0,radius:Math.random()*100+70,x:Math.random()*(l-H*2)-H,y:Math.random()*(s-H*2)-H,content:u.key}])};function r(){n(0,l=window.innerWidth),n(1,s=window.innerHeight)}return[l,s,a,i,r,(u,c,p)=>n(2,c[p].dropping=!1,a)]}class Le extends R{constructor(e){super(),V(this,e,We,Fe,j,{})}}export{Le as default};
