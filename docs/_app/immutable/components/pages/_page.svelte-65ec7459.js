import{S as R,i as V,s as j,k as M,l as E,m as z,h as g,n as b,p,b as y,V as te,W as se,A as ce,o as O,C as X,F as Y,G as Z,H as J,f as w,t as k,a as T,c as N,E as C,X as he,T as G,Y as _e,Z as pe,v as F,w as H,x as q,y as L,e as S,g as ne,_ as de,d as le,$ as me,q as ge,r as ve,u as $e}from"../../chunks/index-0e0bfadc.js";function ae(t){const e=t-1;return e*e*e+1}function be(t,{delay:e=0,duration:l=400,easing:n=ae,x:s=0,y:o=0,opacity:i=0}={}){const r=getComputedStyle(t),a=+r.opacity,u=r.transform==="none"?"":r.transform,c=a*(1-i);return{delay:e,duration:l,easing:n,css:(d,h)=>`
			transform: ${u} translate(${(1-d)*s}px, ${(1-d)*o}px);
			opacity: ${a-c*h}`}}function Q(t,{delay:e=0,duration:l=400,easing:n=ae,start:s=0,opacity:o=0}={}){const i=getComputedStyle(t),r=+i.opacity,a=i.transform==="none"?"":i.transform,u=1-s,c=r*(1-o);return{delay:e,duration:l,easing:n,css:(d,h)=>`
			transform: ${a} scale(${1-u*h});
			opacity: ${r-c*h}
		`}}function ye(t){let e,l;return{c(){e=M("div"),this.h()},l(n){e=E(n,"DIV",{class:!0,style:!0}),z(e).forEach(g),this.h()},h(){b(e,"class","rain-drop svelte-1k3ayai"),p(e,"translate",t[1]+t[0]/2+"px "+(t[2]+t[0]/2)+"px")},m(n,s){y(n,e,s)},p(n,[s]){t=n,s&7&&p(e,"translate",t[1]+t[0]/2+"px "+(t[2]+t[0]/2)+"px")},i(n){l||te(()=>{l=se(e,be,{opacity:0,y:-500,duration:oe,easing:t[3]}),l.start()})},o:ce,d(n){n&&g(e)}}}const oe=800;function we(t,e,l){let{size:n}=e,{left:s}=e,{top:o}=e,{splash:i}=e;O(()=>{setTimeout(i,oe)});const r=a=>a*a*a;return t.$$set=a=>{"size"in a&&l(0,n=a.size),"left"in a&&l(1,s=a.left),"top"in a&&l(2,o=a.top),"splash"in a&&l(4,i=a.splash)},[n,s,o,r,i]}class ke extends R{constructor(e){super(),V(this,e,we,ye,j,{size:0,left:1,top:2,splash:4})}}function Me(t){let e,l;const n=t[1].default,s=X(n,t,t[0],null);return{c(){e=M("section"),s&&s.c(),this.h()},l(o){e=E(o,"SECTION",{class:!0});var i=z(e);s&&s.l(i),i.forEach(g),this.h()},h(){b(e,"class","svelte-ihop7p")},m(o,i){y(o,e,i),s&&s.m(e,null),l=!0},p(o,[i]){s&&s.p&&(!l||i&1)&&Y(s,n,o,o[0],l?J(n,o[0],i,null):Z(o[0]),null)},i(o){l||(w(s,o),l=!0)},o(o){k(s,o),l=!1},d(o){o&&g(e),s&&s.d(o)}}}function Ee(t,e,l){let{$$slots:n={},$$scope:s}=e;return t.$$set=o=>{"$$scope"in o&&l(0,s=o.$$scope)},[s,n]}class ze extends R{constructor(e){super(),V(this,e,Ee,Me,j,{})}}function Ce(t){let e,l,n,s,o;const i=t[2].default,r=X(i,t,t[1],null);return{c(){e=M("section"),l=M("canvas"),n=T(),s=M("div"),r&&r.c(),this.h()},l(a){e=E(a,"SECTION",{class:!0});var u=z(e);l=E(u,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),z(l).forEach(g),n=N(u),s=E(u,"DIV",{class:!0});var c=z(s);r&&r.l(c),c.forEach(g),u.forEach(g),this.h()},h(){b(l,"id","rainbow-bg"),b(l,"width","32"),b(l,"height","32"),b(l,"class","svelte-v6ivlj"),b(s,"class","content svelte-v6ivlj"),b(e,"class","svelte-v6ivlj")},m(a,u){y(a,e,u),C(e,l),t[3](l),C(e,n),C(e,s),r&&r.m(s,null),o=!0},p(a,[u]){r&&r.p&&(!o||u&2)&&Y(r,i,a,a[1],o?J(i,a[1],u,null):Z(a[1]),null)},i(a){o||(w(r,a),o=!0)},o(a){k(r,a),o=!1},d(a){a&&g(e),t[3](null),r&&r.d(a)}}}function Ie(t,e,l){let{$$slots:n={},$$scope:s}=e,o,i,r=0;O(()=>{i=o.getContext("2d"),i!==null&&h()});const a=(f,m,$,P,A)=>{i.fillStyle="rgb("+$+","+P+","+A+")",i.fillRect(f,m,1,1)},u=(f,m,$)=>Math.floor(192+64*Math.cos((f*f-m*m)/300+$)),c=(f,m,$)=>Math.floor(192+64*Math.sin((f*f*Math.cos($/4)+m*m*Math.sin($/3))/300)),d=(f,m,$)=>Math.floor(192+64*Math.sin(5*Math.sin($/9)+((f-100)*(f-100)+(m-100)*(m-100))/1100)),h=()=>{for(let f=0;f<=35;f++)for(let m=0;m<=35;m++)a(f,m,u(f,m,r),c(f,m,r),d(f,m,r));r=r+.012,window.requestAnimationFrame(h)};function v(f){he[f?"unshift":"push"](()=>{o=f,l(0,o)})}return t.$$set=f=>{"$$scope"in f&&l(1,s=f.$$scope)},[o,s,n,v]}class Se extends R{constructor(e){super(),V(this,e,Ie,Ce,j,{})}}function De(t){let e,l,n,s,o,i,r,a,u,c;const d=t[12].default,h=X(d,t,t[11],null);return{c(){e=M("div"),l=M("div"),n=T(),s=M("div"),o=T(),h&&h.c(),this.h()},l(v){e=E(v,"DIV",{class:!0,style:!0});var f=z(e);l=E(f,"DIV",{class:!0,style:!0}),z(l).forEach(g),n=N(f),s=E(f,"DIV",{class:!0,style:!0}),z(s).forEach(g),o=N(f),h&&h.l(f),f.forEach(g),this.h()},h(){b(l,"class","shine svelte-t1hp4"),p(l,"width",t[0]/10+"px"),p(l,"height",t[0]/10+"px"),p(l,"translate",t[5]-t[0]/4+"px "+(t[4]-t[0]/4)+"px"),b(s,"class","shine svelte-t1hp4"),p(s,"width",t[0]/25+"px"),p(s,"height",t[0]/25+"px"),p(s,"translate",t[5]+25*t[0]/350-t[0]/4+"px "+(t[4]+30*t[0]/350-t[0]/4)+"px "),b(e,"class","water-drop svelte-t1hp4"),p(e,"width",t[0]+"px"),p(e,"height",t[0]+"px"),p(e,"translate",t[2]+"px "+t[1]+"px"),p(e,"border-radius",t[3])},m(v,f){y(v,e,f),C(e,l),C(e,n),C(e,s),C(e,o),h&&h.m(e,null),a=!0,u||(c=[G(e,"mouseenter",t[6]),G(e,"click",t[7])],u=!0)},p(v,[f]){t=v,(!a||f&1)&&p(l,"width",t[0]/10+"px"),(!a||f&1)&&p(l,"height",t[0]/10+"px"),(!a||f&49)&&p(l,"translate",t[5]-t[0]/4+"px "+(t[4]-t[0]/4)+"px"),(!a||f&1)&&p(s,"width",t[0]/25+"px"),(!a||f&1)&&p(s,"height",t[0]/25+"px"),(!a||f&49)&&p(s,"translate",t[5]+25*t[0]/350-t[0]/4+"px "+(t[4]+30*t[0]/350-t[0]/4)+"px "),h&&h.p&&(!a||f&2048)&&Y(h,d,t,t[11],a?J(d,t[11],f,null):Z(t[11]),null),(!a||f&1)&&p(e,"width",t[0]+"px"),(!a||f&1)&&p(e,"height",t[0]+"px"),(!a||f&6)&&p(e,"translate",t[2]+"px "+t[1]+"px"),(!a||f&8)&&p(e,"border-radius",t[3])},i(v){a||(w(h,v),te(()=>{r&&r.end(1),i=se(e,Q,{opacity:0,duration:1600,easing:t[8]}),i.start()}),a=!0)},o(v){k(h,v),i&&i.invalidate(),r=_e(e,Q,{opacity:0,duration:800,easing:t[9]}),a=!1},d(v){v&&g(e),h&&h.d(v),v&&r&&r.end(),u=!1,pe(c)}}}const U=.012,W=3;function Re(t,e,l){let{$$slots:n={},$$scope:s}=e,{size:o=350}=e,{top:i=0}=e,{left:r=0}=e;const a=[[41,59,45,55],[54,42,58,46]];let u=new Array(a.length).fill(new Array(a[0].length).fill(0)),c=0,d="41% 59% 45% 55% / 54% 42% 58% 46%",h=50,v=85;O(()=>{m()});let f=10;const m=()=>{l(10,u=a.map(_=>_.map((I,D)=>$(0,W,c,D%2===0?K:A)))),l(4,h=$(0,W*o/350,c,K)),l(5,v=$(0,W*o/350,c,A)),c=c+U*f,f=Math.max(f-U*5,1),window.requestAnimationFrame(m)},$=(_,I,D,B=P)=>_+(I-_)*B(D),P=_=>_,A=_=>Math.cos(_),K=_=>Math.sin(_),re=()=>f=Math.min(f+5,30),ie=()=>f=Math.min(f+10,30),fe=_=>{const I=2*Math.PI/3;return _===0?0:_===1?1:Math.pow(2,-10*_)*Math.sin((_*10-.75)*I)+1},ue=_=>Math.sin(_*Math.PI/2);return t.$$set=_=>{"size"in _&&l(0,o=_.size),"top"in _&&l(1,i=_.top),"left"in _&&l(2,r=_.left),"$$scope"in _&&l(11,s=_.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&l(3,d=u.map((_,I)=>_.map((D,B)=>`${D+a[I][B]}%`).join(" ")).join(" / "))},[o,i,r,d,h,v,re,ie,fe,ue,u,s,n]}class Ve extends R{constructor(e){super(),V(this,e,Re,De,j,{size:0,top:1,left:2})}}function x(t,e,l){const n=t.slice();return n[4]=e[l],n[5]=e,n[6]=l,n}function je(t){let e,l;return e=new Ve({props:{size:t[4].radius+100,left:t[4].x,top:t[4].y,$$slots:{default:[Te]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){q(e,n,s),l=!0},p(n,s){const o={};s&1&&(o.size=n[4].radius+100),s&1&&(o.left=n[4].x),s&1&&(o.top=n[4].y),s&129&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){k(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Ae(t){let e,l;function n(){return t[2](t[4],t[5],t[6])}return e=new ke({props:{size:t[4].radius+100,left:t[4].x,top:t[4].y,splash:n}}),{c(){F(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,o){q(e,s,o),l=!0},p(s,o){t=s;const i={};o&1&&(i.size=t[4].radius+100),o&1&&(i.left=t[4].x),o&1&&(i.top=t[4].y),o&1&&(i.splash=n),e.$set(i)},i(s){l||(w(e.$$.fragment,s),l=!0)},o(s){k(e.$$.fragment,s),l=!1},d(s){L(e,s)}}}function Te(t){let e=t[4].content+"",l,n;return{c(){l=ge(e),n=T()},l(s){l=ve(s,e),n=N(s)},m(s,o){y(s,l,o),y(s,n,o)},p(s,o){o&1&&e!==(e=s[4].content+"")&&$e(l,e)},d(s){s&&g(l),s&&g(n)}}}function ee(t,e){let l,n,s,o,i;const r=[Ae,je],a=[];function u(c,d){return c[4].dropping?0:1}return n=u(e),s=a[n]=r[n](e),{key:t,first:null,c(){l=S(),s.c(),o=S(),this.h()},l(c){l=S(),s.l(c),o=S(),this.h()},h(){this.first=l},m(c,d){y(c,l,d),a[n].m(c,d),y(c,o,d),i=!0},p(c,d){e=c;let h=n;n=u(e),n===h?a[n].p(e,d):(ne(),k(a[h],1,1,()=>{a[h]=null}),le(),s=a[n],s?s.p(e,d):(s=a[n]=r[n](e),s.c()),w(s,1),s.m(o.parentNode,o))},i(c){i||(w(s),i=!0)},o(c){k(s),i=!1},d(c){c&&g(l),a[n].d(c),c&&g(o)}}}function Ne(t){let e=[],l=new Map,n,s,o=t[0];const i=r=>r[4];for(let r=0;r<o.length;r+=1){let a=x(t,o,r),u=i(a);l.set(u,e[r]=ee(u,a))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();n=S()},l(r){for(let a=0;a<e.length;a+=1)e[a].l(r);n=S()},m(r,a){for(let u=0;u<e.length;u+=1)e[u].m(r,a);y(r,n,a),s=!0},p(r,a){a&1&&(o=r[0],ne(),e=de(e,a,i,1,r,o,l,n.parentNode,me,ee,n,x),le())},i(r){if(!s){for(let a=0;a<o.length;a+=1)w(e[a]);s=!0}},o(r){for(let a=0;a<e.length;a+=1)k(e[a]);s=!1},d(r){for(let a=0;a<e.length;a+=1)e[a].d(r);r&&g(n)}}}function Oe(t){let e,l;return e=new ze({props:{$$slots:{default:[Ne]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){q(e,n,s),l=!0},p(n,s){const o={};s&129&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){k(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Fe(t){let e,l,n,s,o;return l=new Se({props:{$$slots:{default:[Oe]},$$scope:{ctx:t}}}),{c(){e=M("section"),F(l.$$.fragment),this.h()},l(i){e=E(i,"SECTION",{class:!0});var r=z(e);H(l.$$.fragment,r),r.forEach(g),this.h()},h(){b(e,"class","svelte-126spjj")},m(i,r){y(i,e,r),q(l,e,null),n=!0,s||(o=G(window,"keypress",t[1]),s=!0)},p(i,[r]){const a={};r&129&&(a.$$scope={dirty:r,ctx:i}),l.$set(a)},i(i){n||(w(l.$$.fragment,i),n=!0)},o(i){k(l.$$.fragment,i),n=!1},d(i){i&&g(e),L(l),s=!1,o()}}}function He(t,e,l){O(()=>{});let n=[];return[n,i=>{n.length>10&&n.shift(),l(0,n=[...n,{dropping:!0,radius:Math.random()*100+70,x:Math.random()*1600+60,y:Math.random()*600+60,content:i.key}])},(i,r,a)=>l(0,r[a].dropping=!1,n)]}class Le extends R{constructor(e){super(),V(this,e,He,Fe,j,{})}}export{Le as default};
