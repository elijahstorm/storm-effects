import{A as f,s as m}from"./index-0e0bfadc.js";const c=[];function d(t,e=f){let n;const r=new Set;function o(a){if(m(t,a)&&(t=a,n)){const u=!c.length;for(const i of r)i[1](),c.push(i,t);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function l(a){o(a(t))}function s(a,u=f){const i=[a,u];return r.add(i),r.size===1&&(n=e(o)||f),a(t),()=>{r.delete(i),r.size===0&&(n(),n=null)}}return{set:o,update:l,subscribe:s}}let p="",g="";function A(t){p=t.base,g=t.assets||p}let _="";function U(t){_=t}function y(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function E(){return{x:pageXOffset,y:pageYOffset}}function R(t){let e,n=null,r=null,o=null;for(const s of t.composedPath())s instanceof Element&&(!e&&s.nodeName.toUpperCase()==="A"&&(e=s),n===null&&(n=b(s,"data-sveltekit-noscroll")),r===null&&(r=b(s,"data-sveltekit-prefetch")),o===null&&(o=b(s,"data-sveltekit-reload")));const l=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:l,options:{noscroll:n,prefetch:r,reload:o},has:e?{rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)}:{}}}function b(t,e){const n=t.getAttribute(e);return n===null?n:n===""?!0:(n==="off",!1)}function h(t){const e=d(t);let n=!0;function r(){n=!0,e.update(s=>s)}function o(s){n=!1,e.set(s)}function l(s){let a;return e.subscribe(u=>{(a===void 0||n&&u!==a)&&s(a=u)})}return{notify:r,set:o,subscribe:l}}function k(){const{set:t,subscribe:e}=d(!1);let n;async function r(){clearTimeout(n);const o=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const s=(await o.json()).version!==_;return s&&(t(!0),clearTimeout(n)),s}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:e,check:r}}function V(t){t.client}const v={url:h({}),page:h({}),navigating:d(null),updated:k()};export{E as a,A as b,U as c,p as d,R as f,y as g,V as i,v as s};
