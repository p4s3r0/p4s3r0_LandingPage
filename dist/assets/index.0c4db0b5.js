(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function xo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Df="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xf=xo(Df);function Tl(t){return!!t||t===""}function No(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?Of(s):No(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Te(t))return t;if(Ce(t))return t}}const Nf=/;(?![^(]*\))/g,kf=/:(.+)/;function Of(t){const e={};return t.split(Nf).forEach(n=>{if(n){const s=n.split(kf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ko(t){let e="";if(Te(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=ko(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zn=t=>Te(t)?t:t==null?"":U(t)||Ce(t)&&(t.toString===Al||!H(t.toString))?JSON.stringify(t,Cl,2):String(t),Cl=(t,e)=>e&&e.__v_isRef?Cl(t,e.value):Tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Il(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!U(e)&&!Sl(e)?String(e):e,ae={},bn=[],lt=()=>{},Rf=()=>!1,Mf=/^on[^a-z]/,ki=t=>Mf.test(t),Oo=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lf=Object.prototype.hasOwnProperty,Q=(t,e)=>Lf.call(t,e),U=Array.isArray,Tn=t=>Oi(t)==="[object Map]",Il=t=>Oi(t)==="[object Set]",H=t=>typeof t=="function",Te=t=>typeof t=="string",Mo=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Lo=t=>Ce(t)&&H(t.then)&&H(t.catch),Al=Object.prototype.toString,Oi=t=>Al.call(t),Ff=t=>Oi(t).slice(8,-1),Sl=t=>Oi(t)==="[object Object]",Fo=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pf=/-(\w)/g,Nn=Ri(t=>t.replace(Pf,(e,n)=>n?n.toUpperCase():"")),Bf=/\B([A-Z])/g,$n=Ri(t=>t.replace(Bf,"-$1").toLowerCase()),Dl=Ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),pr=Ri(t=>t?`on${Dl(t)}`:""),ui=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ga;const $f=()=>Ga||(Ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class Vf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&gt&&(this.parent=gt,this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Uf(t,e=gt){e&&e.active&&e.effects.push(t)}const Po=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nl=t=>(t.w&Bt)>0,kl=t=>(t.n&Bt)>0,jf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bt},Hf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Nl(i)&&!kl(i)?i.delete(t):e[n++]=i,i.w&=~Bt,i.n&=~Bt}e.length=n}},Pr=new WeakMap;let es=0,Bt=1;const Br=30;let ct;const en=Symbol(""),$r=Symbol("");class Bo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uf(this,s)}run(){if(!this.active)return this.fn();let e=ct,n=Mt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,Mt=!0,Bt=1<<++es,es<=Br?jf(this):Qa(this),this.fn()}finally{es<=Br&&Hf(this),Bt=1<<--es,ct=this.parent,Mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(Qa(this),this.onStop&&this.onStop(),this.active=!1)}}function Qa(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mt=!0;const Ol=[];function Vn(){Ol.push(Mt),Mt=!1}function Un(){const t=Ol.pop();Mt=t===void 0?!0:t}function Ze(t,e,n){if(Mt&&ct){let s=Pr.get(t);s||Pr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Po()),Rl(i)}}function Rl(t,e){let n=!1;es<=Br?kl(t)||(t.n|=Bt,n=!Nl(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function Ct(t,e,n,s,i,r){const o=Pr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Fo(n)&&a.push(o.get("length")):(a.push(o.get(en)),Tn(t)&&a.push(o.get($r)));break;case"delete":U(t)||(a.push(o.get(en)),Tn(t)&&a.push(o.get($r)));break;case"set":Tn(t)&&a.push(o.get(en));break}if(a.length===1)a[0]&&Vr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vr(Po(c))}}function Vr(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&Xa(s);for(const s of n)s.computed||Xa(s)}function Xa(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kf=xo("__proto__,__v_isRef,__isVue"),Ml=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mo)),qf=$o(),zf=$o(!1,!0),Wf=$o(!0),Ya=Gf();function Gf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=se(this);for(let r=0,o=this.length;r<o;r++)Ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vn();const s=se(this)[e].apply(this,n);return Un(),s}}),t}function $o(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?ud:$l:e?Bl:Pl).get(s))return s;const o=U(s);if(!t&&o&&Q(Ya,i))return Reflect.get(Ya,i,r);const a=Reflect.get(s,i,r);return(Mo(i)?Ml.has(i):Kf(i))||(t||Ze(s,"get",i),e)?a:Ve(a)?o&&Fo(i)?a:a.value:Ce(a)?t?Vl(a):jo(a):a}}const Qf=Ll(),Xf=Ll(!0);function Ll(t=!1){return function(n,s,i,r){let o=n[s];if(ds(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&!ds(i)&&(Ur(i)||(i=se(i),o=se(o)),!U(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=U(n)&&Fo(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,i,r);return n===se(r)&&(a?ui(i,o)&&Ct(n,"set",s,i):Ct(n,"add",s,i)),c}}function Yf(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ct(t,"delete",e,void 0),s}function Jf(t,e){const n=Reflect.has(t,e);return(!Mo(e)||!Ml.has(e))&&Ze(t,"has",e),n}function Zf(t){return Ze(t,"iterate",U(t)?"length":en),Reflect.ownKeys(t)}const Fl={get:qf,set:Qf,deleteProperty:Yf,has:Jf,ownKeys:Zf},ed={get:Wf,set(t,e){return!0},deleteProperty(t,e){return!0}},td=Fe({},Fl,{get:zf,set:Xf}),Vo=t=>t,Mi=t=>Reflect.getPrototypeOf(t);function Ks(t,e,n=!1,s=!1){t=t.__v_raw;const i=se(t),r=se(e);n||(e!==r&&Ze(i,"get",e),Ze(i,"get",r));const{has:o}=Mi(i),a=s?Vo:n?qo:Ko;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function qs(t,e=!1){const n=this.__v_raw,s=se(n),i=se(t);return e||(t!==i&&Ze(s,"has",t),Ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function zs(t,e=!1){return t=t.__v_raw,!e&&Ze(se(t),"iterate",en),Reflect.get(t,"size",t)}function Ja(t){t=se(t);const e=se(this);return Mi(e).has.call(e,t)||(e.add(t),Ct(e,"add",t,t)),this}function Za(t,e){e=se(e);const n=se(this),{has:s,get:i}=Mi(n);let r=s.call(n,t);r||(t=se(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ui(e,o)&&Ct(n,"set",t,e):Ct(n,"add",t,e),this}function ec(t){const e=se(this),{has:n,get:s}=Mi(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ct(e,"delete",t,void 0),r}function tc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Ct(t,"clear",void 0,void 0),n}function Ws(t,e){return function(s,i){const r=this,o=r.__v_raw,a=se(o),c=e?Vo:t?qo:Ko;return!t&&Ze(a,"iterate",en),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Gs(t,e,n){return function(...s){const i=this.__v_raw,r=se(i),o=Tn(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Vo:e?qo:Ko;return!e&&Ze(r,"iterate",c?$r:en),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function kt(t){return function(...e){return t==="delete"?!1:this}}function nd(){const t={get(r){return Ks(this,r)},get size(){return zs(this)},has:qs,add:Ja,set:Za,delete:ec,clear:tc,forEach:Ws(!1,!1)},e={get(r){return Ks(this,r,!1,!0)},get size(){return zs(this)},has:qs,add:Ja,set:Za,delete:ec,clear:tc,forEach:Ws(!1,!0)},n={get(r){return Ks(this,r,!0)},get size(){return zs(this,!0)},has(r){return qs.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Ws(!0,!1)},s={get(r){return Ks(this,r,!0,!0)},get size(){return zs(this,!0)},has(r){return qs.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Ws(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gs(r,!1,!1),n[r]=Gs(r,!0,!1),e[r]=Gs(r,!1,!0),s[r]=Gs(r,!0,!0)}),[t,n,e,s]}const[sd,id,rd,od]=nd();function Uo(t,e){const n=e?t?od:rd:t?id:sd;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const ad={get:Uo(!1,!1)},cd={get:Uo(!1,!0)},ld={get:Uo(!0,!1)},Pl=new WeakMap,Bl=new WeakMap,$l=new WeakMap,ud=new WeakMap;function hd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fd(t){return t.__v_skip||!Object.isExtensible(t)?0:hd(Ff(t))}function jo(t){return ds(t)?t:Ho(t,!1,Fl,ad,Pl)}function dd(t){return Ho(t,!1,td,cd,Bl)}function Vl(t){return Ho(t,!0,ed,ld,$l)}function Ho(t,e,n,s,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=fd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Cn(t){return ds(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function ds(t){return!!(t&&t.__v_isReadonly)}function Ur(t){return!!(t&&t.__v_isShallow)}function Ul(t){return Cn(t)||ds(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function jl(t){return hi(t,"__v_skip",!0),t}const Ko=t=>Ce(t)?jo(t):t,qo=t=>Ce(t)?Vl(t):t;function pd(t){Mt&&ct&&(t=se(t),Rl(t.dep||(t.dep=Po())))}function gd(t,e){t=se(t),t.dep&&Vr(t.dep)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Hl(t){return Ve(t)?t.value:t}const md={get:(t,e,n)=>Hl(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Kl(t){return Cn(t)?t:new Proxy(t,md)}class yd{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Bo(e,()=>{this._dirty||(this._dirty=!0,gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=se(this);return pd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function vd(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=lt):(s=t.get,i=t.set),new yd(s,i,r||!i,n)}function Lt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){xs(r,e,n)}return i}function rt(t,e,n,s){if(H(t)){const r=Lt(t,e,n,s);return r&&Lo(r)&&r.catch(o=>{xs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(rt(t[r],e,n,s));return i}function xs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Lt(c,null,10,[t,o,a]);return}}wd(t,n,i,s)}function wd(t,e,n,s=!0){console.error(t)}let fi=!1,jr=!1;const Je=[];let bt=0;const is=[];let ts=null,yn=0;const rs=[];let Ot=null,vn=0;const ql=Promise.resolve();let zo=null,Hr=null;function _d(t){const e=zo||ql;return t?e.then(this?t.bind(this):t):e}function Ed(t){let e=bt+1,n=Je.length;for(;e<n;){const s=e+n>>>1;ps(Je[s])<t?e=s+1:n=s}return e}function zl(t){(!Je.length||!Je.includes(t,fi&&t.allowRecurse?bt+1:bt))&&t!==Hr&&(t.id==null?Je.push(t):Je.splice(Ed(t.id),0,t),Wl())}function Wl(){!fi&&!jr&&(jr=!0,zo=ql.then(Yl))}function bd(t){const e=Je.indexOf(t);e>bt&&Je.splice(e,1)}function Gl(t,e,n,s){U(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Wl()}function Td(t){Gl(t,ts,is,yn)}function Ql(t){Gl(t,Ot,rs,vn)}function Li(t,e=null){if(is.length){for(Hr=e,ts=[...new Set(is)],is.length=0,yn=0;yn<ts.length;yn++)ts[yn]();ts=null,yn=0,Hr=null,Li(t,e)}}function Xl(t){if(Li(),rs.length){const e=[...new Set(rs)];if(rs.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,s)=>ps(n)-ps(s)),vn=0;vn<Ot.length;vn++)Ot[vn]();Ot=null,vn=0}}const ps=t=>t.id==null?1/0:t.id;function Yl(t){jr=!1,fi=!0,Li(t),Je.sort((n,s)=>ps(n)-ps(s));const e=lt;try{for(bt=0;bt<Je.length;bt++){const n=Je[bt];n&&n.active!==!1&&Lt(n,null,14)}}finally{bt=0,Je.length=0,Xl(),fi=!1,zo=null,(Je.length||is.length||rs.length)&&Yl(t)}}function Cd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[u]||ae;p&&(i=n.map(m=>m.trim())),h&&(i=n.map(xl))}let a,c=s[a=pr(e)]||s[a=pr(Nn(e))];!c&&r&&(c=s[a=pr($n(e))]),c&&rt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(l,t,6,i)}}function Jl(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=Jl(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):Fe(o,r),s.set(t,o),o)}function Fi(t,e){return!t||!ki(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,$n(e))||Q(t,e))}let vt=null,Pi=null;function di(t){const e=vt;return vt=t,Pi=t&&t.type.__scopeId||null,e}function ht(t){Pi=t}function ft(){Pi=null}function Zl(t,e=vt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fc(-1);const r=di(e),o=t(...i);return di(r),s._d&&fc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function mr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:T,inheritAttrs:k}=t;let D,P;const x=di(t);try{if(n.shapeFlag&4){const z=i||s;D=at(u.call(z,z,h,r,m,p,T)),P=c}else{const z=e;D=at(z.length>1?z(r,{attrs:c,slots:a,emit:l}):z(r,null)),P=e.props?c:Ad(c)}}catch(z){os.length=0,xs(z,t,1),D=pe(ut)}let R=D;if(P&&k!==!1){const z=Object.keys(P),{shapeFlag:J}=R;z.length&&J&7&&(o&&z.some(Oo)&&(P=Sd(P,o)),R=$t(R,P))}return n.dirs&&(R=$t(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,di(x),D}function Id(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(_u(s)){if(s.type!==ut||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Ad=t=>{let e;for(const n in t)(n==="class"||n==="style"||ki(n))&&((e||(e={}))[n]=t[n]);return e},Sd=(t,e)=>{const n={};for(const s in t)(!Oo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Dd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?nc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==s[p]&&!Fi(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?nc(s,o,l):!0:!!o;return!1}function nc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Fi(n,r))return!0}return!1}function Wo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xd=t=>t.__isSuspense,Nd={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,c,l){t==null?Od(e,n,s,i,r,o,a,c,l):Rd(t,e,n,s,i,o,a,c,l)},hydrate:Md,create:Go,normalize:Ld},kd=Nd;function gs(t,e){const n=t.props&&t.props[e];H(n)&&n()}function Od(t,e,n,s,i,r,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),p=t.suspense=Go(t,i,s,e,h,n,r,o,a,c);l(null,p.pendingBranch=t.ssContent,h,null,s,p,r,o),p.deps>0?(gs(t,"onPending"),gs(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,r,o),In(p,t.ssFallback)):p.resolve()}function Rd(t,e,n,s,i,r,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:T,pendingBranch:k,isInFallback:D,isHydrating:P}=h;if(k)h.pendingBranch=p,mt(p,k)?(c(k,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():D&&(c(T,m,n,s,i,null,r,o,a),In(h,m))):(h.pendingId++,P?(h.isHydrating=!1,h.activeBranch=k):l(k,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),D?(c(null,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(c(T,m,n,s,i,null,r,o,a),In(h,m))):T&&mt(p,T)?(c(T,p,n,s,i,h,r,o,a),h.resolve(!0)):(c(null,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(T&&mt(p,T))c(T,p,n,s,i,h,r,o,a),In(h,p);else if(gs(e,"onPending"),h.pendingBranch=p,h.pendingId++,c(null,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:x,pendingId:R}=h;x>0?setTimeout(()=>{h.pendingId===R&&h.fallback(m)},x):x===0&&h.fallback(m)}}function Go(t,e,n,s,i,r,o,a,c,l,u=!1){const{p:h,m:p,um:m,n:T,o:{parentNode:k,remove:D}}=l,P=xl(t.props&&t.props.timeout),x={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof P=="number"?P:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1){const{vnode:z,activeBranch:J,pendingBranch:he,pendingId:Ee,effects:j,parentComponent:te,container:oe}=x;if(x.isHydrating)x.isHydrating=!1;else if(!R){const nt=J&&he.transition&&he.transition.mode==="out-in";nt&&(J.transition.afterLeave=()=>{Ee===x.pendingId&&p(he,oe,xt,0)});let{anchor:xt}=x;J&&(xt=T(J),m(J,te,x,!0)),nt||p(he,oe,xt,0)}In(x,he),x.pendingBranch=null,x.isInFallback=!1;let fe=x.parent,je=!1;for(;fe;){if(fe.pendingBranch){fe.effects.push(...j),je=!0;break}fe=fe.parent}je||Ql(j),x.effects=[],gs(z,"onResolve")},fallback(R){if(!x.pendingBranch)return;const{vnode:z,activeBranch:J,parentComponent:he,container:Ee,isSVG:j}=x;gs(z,"onFallback");const te=T(J),oe=()=>{!x.isInFallback||(h(null,R,Ee,te,he,null,j,a,c),In(x,R))},fe=R.transition&&R.transition.mode==="out-in";fe&&(J.transition.afterLeave=oe),x.isInFallback=!0,m(J,he,null,!0),fe||oe()},move(R,z,J){x.activeBranch&&p(x.activeBranch,R,z,J),x.container=R},next(){return x.activeBranch&&T(x.activeBranch)},registerDep(R,z){const J=!!x.pendingBranch;J&&x.deps++;const he=R.vnode.el;R.asyncDep.catch(Ee=>{xs(Ee,R,0)}).then(Ee=>{if(R.isUnmounted||x.isUnmounted||x.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:j}=R;Yr(R,Ee,!1),he&&(j.el=he);const te=!he&&R.subTree.el;z(R,j,k(he||R.subTree.el),he?null:T(R.subTree),x,o,c),te&&D(te),Wo(R,j.el),J&&--x.deps===0&&x.resolve()})},unmount(R,z){x.isUnmounted=!0,x.activeBranch&&m(x.activeBranch,n,R,z),x.pendingBranch&&m(x.pendingBranch,n,R,z)}};return x}function Md(t,e,n,s,i,r,o,a,c){const l=e.suspense=Go(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,r,o);return l.deps===0&&l.resolve(),u}function Ld(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=sc(s?n.default:n),t.ssFallback=s?sc(n.fallback):pe(ut)}function sc(t){let e;if(H(t)){const n=kn&&t._c;n&&(t._d=!1,Ne()),t=t(),n&&(t._d=!0,e=it,yu())}return U(t)&&(t=Id(t)),t=at(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Fd(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Ql(t)}function In(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,Wo(s,i))}function Pd(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function yr(t,e,n=!1){const s=xe||vt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const ic={};function vr(t,e,n){return eu(t,e,n)}function eu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){const a=xe;let c,l=!1,u=!1;if(Ve(t)?(c=()=>t.value,l=Ur(t)):Cn(t)?(c=()=>t,s=!0):U(t)?(u=!0,l=t.some(P=>Cn(P)||Ur(P)),c=()=>t.map(P=>{if(Ve(P))return P.value;if(Cn(P))return wn(P);if(H(P))return Lt(P,a,2)})):H(t)?e?c=()=>Lt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),rt(t,a,3,[p])}:c=lt,e&&s){const P=c;c=()=>wn(P())}let h,p=P=>{h=D.onStop=()=>{Lt(P,a,4)}};if(ms)return p=lt,e?n&&rt(e,a,3,[c(),u?[]:void 0,p]):c(),lt;let m=u?[]:ic;const T=()=>{if(!!D.active)if(e){const P=D.run();(s||l||(u?P.some((x,R)=>ui(x,m[R])):ui(P,m)))&&(h&&h(),rt(e,a,3,[P,m===ic?void 0:m,p]),m=P)}else D.run()};T.allowRecurse=!!e;let k;i==="sync"?k=T:i==="post"?k=()=>Ke(T,a&&a.suspense):k=()=>Td(T);const D=new Bo(c,k);return e?n?T():m=D.run():i==="post"?Ke(D.run.bind(D),a&&a.suspense):D.run(),()=>{D.stop(),a&&a.scope&&Ro(a.scope.effects,D)}}function Bd(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?tu(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=xe;Vt(this);const a=eu(i,r.bind(s),n);return o?Vt(o):Ft(),a}function tu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function wn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))wn(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)wn(t[n],e);else if(Il(t)||Tn(t))t.forEach(n=>{wn(n,e)});else if(Sl(t))for(const n in t)wn(t[n],e);return t}function $d(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ru(()=>{t.isMounted=!0}),ou(()=>{t.isUnmounting=!0}),t}const st=[Function,Array],Vd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:st,onEnter:st,onAfterEnter:st,onEnterCancelled:st,onBeforeLeave:st,onLeave:st,onAfterLeave:st,onLeaveCancelled:st,onBeforeAppear:st,onAppear:st,onAfterAppear:st,onAppearCancelled:st},setup(t,{slots:e}){const n=Tu(),s=$d();let i;return()=>{const r=e.default&&su(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const k of r)if(k.type!==ut){o=k;break}}const a=se(t),{mode:c}=a;if(s.isLeaving)return wr(o);const l=rc(o);if(!l)return wr(o);const u=Kr(l,a,s,n);qr(l,u);const h=n.subTree,p=h&&rc(h);let m=!1;const{getTransitionKey:T}=l.type;if(T){const k=T();i===void 0?i=k:k!==i&&(i=k,m=!0)}if(p&&p.type!==ut&&(!mt(l,p)||m)){const k=Kr(p,a,s,n);if(qr(p,k),c==="out-in")return s.isLeaving=!0,k.afterLeave=()=>{s.isLeaving=!1,n.update()},wr(o);c==="in-out"&&l.type!==ut&&(k.delayLeave=(D,P,x)=>{const R=nu(s,p);R[String(p.key)]=p,D._leaveCb=()=>{P(),D._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},Ud=Vd;function nu(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Kr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:T,onBeforeAppear:k,onAppear:D,onAfterAppear:P,onAppearCancelled:x}=e,R=String(t.key),z=nu(n,t),J=(j,te)=>{j&&rt(j,s,9,te)},he=(j,te)=>{const oe=te[1];J(j,te),U(j)?j.every(fe=>fe.length<=1)&&oe():j.length<=1&&oe()},Ee={mode:r,persisted:o,beforeEnter(j){let te=a;if(!n.isMounted)if(i)te=k||a;else return;j._leaveCb&&j._leaveCb(!0);const oe=z[R];oe&&mt(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),J(te,[j])},enter(j){let te=c,oe=l,fe=u;if(!n.isMounted)if(i)te=D||c,oe=P||l,fe=x||u;else return;let je=!1;const nt=j._enterCb=xt=>{je||(je=!0,xt?J(fe,[j]):J(oe,[j]),Ee.delayedLeave&&Ee.delayedLeave(),j._enterCb=void 0)};te?he(te,[j,nt]):nt()},leave(j,te){const oe=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return te();J(h,[j]);let fe=!1;const je=j._leaveCb=nt=>{fe||(fe=!0,te(),nt?J(T,[j]):J(m,[j]),j._leaveCb=void 0,z[oe]===t&&delete z[oe])};z[oe]=t,p?he(p,[j,je]):je()},clone(j){return Kr(j,e,n,s)}};return Ee}function wr(t){if(Bi(t))return t=$t(t),t.children=null,t}function rc(t){return Bi(t)?t.children?t.children[0]:void 0:t}function qr(t,e){t.shapeFlag&6&&t.component?qr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function su(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ze?(o.patchFlag&128&&i++,s=s.concat(su(o.children,e,a))):(e||o.type!==ut)&&s.push(a!=null?$t(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const si=t=>!!t.type.__asyncLoader,Bi=t=>t.type.__isKeepAlive;function jd(t,e){iu(t,"a",e)}function Hd(t,e){iu(t,"da",e)}function iu(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($i(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Bi(i.parent.vnode)&&Kd(s,e,n,i),i=i.parent}}function Kd(t,e,n,s){const i=$i(e,t,s,!0);au(()=>{Ro(s[e],i)},n)}function $i(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vn(),Vt(n);const a=rt(e,n,t,o);return Ft(),Un(),a});return s?i.unshift(r):i.push(r),r}}const Dt=t=>(e,n=xe)=>(!ms||t==="sp")&&$i(t,e,n),qd=Dt("bm"),ru=Dt("m"),zd=Dt("bu"),Wd=Dt("u"),ou=Dt("bum"),au=Dt("um"),Gd=Dt("sp"),Qd=Dt("rtg"),Xd=Dt("rtc");function Yd(t,e=xe){$i("ec",t,e)}function zt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Vn(),rt(c,n,8,[t.el,a,t,e]),Un())}}const Jd=Symbol();function Zd(t,e,n,s){let i;const r=n&&n[s];if(U(t)||Te(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const zr=t=>t?Cu(t)?Jo(t)||t.proxy:zr(t.parent):null,pi=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zr(t.parent),$root:t=>zr(t.root),$emit:t=>t.emit,$options:t=>lu(t),$forceUpdate:t=>t.f||(t.f=()=>zl(t.update)),$nextTick:t=>t.n||(t.n=_d.bind(t.proxy)),$watch:t=>Bd.bind(t)}),ep={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ae&&Q(s,e))return o[e]=1,s[e];if(i!==ae&&Q(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,r[e];if(n!==ae&&Q(n,e))return o[e]=4,n[e];Wr&&(o[e]=0)}}const u=pi[e];let h,p;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ae&&Q(i,e)?(i[e]=n,!0):s!==ae&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&Q(t,o)||e!==ae&&Q(e,o)||(a=r[0])&&Q(a,o)||Q(s,o)||Q(pi,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wr=!0;function tp(t){const e=lu(t),n=t.proxy,s=t.ctx;Wr=!1,e.beforeCreate&&oc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:T,activated:k,deactivated:D,beforeDestroy:P,beforeUnmount:x,destroyed:R,unmounted:z,render:J,renderTracked:he,renderTriggered:Ee,errorCaptured:j,serverPrefetch:te,expose:oe,inheritAttrs:fe,components:je,directives:nt,filters:xt}=e;if(l&&np(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const ce=o[de];H(ce)&&(s[de]=ce.bind(n))}if(i){const de=i.call(n,n);Ce(de)&&(t.data=jo(de))}if(Wr=!0,r)for(const de in r){const ce=r[de],_t=H(ce)?ce.bind(n,n):H(ce.get)?ce.get.bind(n,n):lt,hr=!H(ce)&&H(ce.set)?ce.set.bind(n):lt,Xn=Dp({get:_t,set:hr});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>Xn.value,set:dn=>Xn.value=dn})}if(a)for(const de in a)cu(a[de],s,n,de);if(c){const de=H(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ce=>{Pd(ce,de[ce])})}u&&oc(u,t,"c");function He(de,ce){U(ce)?ce.forEach(_t=>de(_t.bind(n))):ce&&de(ce.bind(n))}if(He(qd,h),He(ru,p),He(zd,m),He(Wd,T),He(jd,k),He(Hd,D),He(Yd,j),He(Xd,he),He(Qd,Ee),He(ou,x),He(au,z),He(Gd,te),U(oe))if(oe.length){const de=t.exposed||(t.exposed={});oe.forEach(ce=>{Object.defineProperty(de,ce,{get:()=>n[ce],set:_t=>n[ce]=_t})})}else t.exposed||(t.exposed={});J&&t.render===lt&&(t.render=J),fe!=null&&(t.inheritAttrs=fe),je&&(t.components=je),nt&&(t.directives=nt)}function np(t,e,n=lt,s=!1){U(t)&&(t=Gr(t));for(const i in t){const r=t[i];let o;Ce(r)?"default"in r?o=yr(r.from||i,r.default,!0):o=yr(r.from||i):o=yr(r),Ve(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function oc(t,e,n){rt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cu(t,e,n,s){const i=s.includes(".")?tu(n,s):()=>n[s];if(Te(t)){const r=e[t];H(r)&&vr(i,r)}else if(H(t))vr(i,t.bind(n));else if(Ce(t))if(U(t))t.forEach(r=>cu(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&vr(i,r,t)}}function lu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>gi(c,l,o,!0)),gi(c,e,o)),r.set(e,c),c}function gi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&gi(t,r,n,!0),i&&i.forEach(o=>gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=sp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sp={data:ac,props:Gt,emits:Gt,methods:Gt,computed:Gt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Gt,directives:Gt,watch:rp,provide:ac,inject:ip};function ac(t,e){return e?t?function(){return Fe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function ip(t,e){return Gt(Gr(t),Gr(e))}function Gr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Gt(t,e){return t?Fe(Fe(Object.create(null),t),e):e}function rp(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function op(t,e,n,s=!1){const i={},r={};hi(r,Vi,1),t.propsDefaults=Object.create(null),uu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:dd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function ap(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=se(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Fi(t.emitsOptions,p))continue;const m=e[p];if(c)if(Q(r,p))m!==r[p]&&(r[p]=m,l=!0);else{const T=Nn(p);i[T]=Qr(c,a,T,m,t,!1)}else m!==r[p]&&(r[p]=m,l=!0)}}}else{uu(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!Q(e,h)&&((u=$n(h))===h||!Q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Qr(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Q(e,h)&&!0)&&(delete r[h],l=!0)}l&&Ct(t,"set","$attrs")}function uu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ni(c))continue;const l=e[c];let u;i&&Q(i,u=Nn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Fi(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=se(n),l=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Qr(i,c,h,l[h],t,!Q(l,h))}}return o}function Qr(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Vt(i),s=l[n]=c.call(null,e),Ft())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function hu(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!H(t)){const u=h=>{c=!0;const[p,m]=hu(h,e,!0);Fe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,bn),bn;if(U(r))for(let u=0;u<r.length;u++){const h=Nn(r[u]);cc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=Nn(u);if(cc(h)){const p=r[u],m=o[h]=U(p)||H(p)?{type:p}:p;if(m){const T=hc(Boolean,m.type),k=hc(String,m.type);m[0]=T>-1,m[1]=k<0||T<k,(T>-1||Q(m,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function cc(t){return t[0]!=="$"}function lc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function uc(t,e){return lc(t)===lc(e)}function hc(t,e){return U(e)?e.findIndex(n=>uc(n,t)):H(e)&&uc(e,t)?0:-1}const fu=t=>t[0]==="_"||t==="$stable",Qo=t=>U(t)?t.map(at):[at(t)],cp=(t,e,n)=>{if(e._n)return e;const s=Zl((...i)=>Qo(e(...i)),n);return s._c=!1,s},du=(t,e,n)=>{const s=t._ctx;for(const i in t){if(fu(i))continue;const r=t[i];if(H(r))e[i]=cp(i,r,s);else if(r!=null){const o=Qo(r);e[i]=()=>o}}},pu=(t,e)=>{const n=Qo(e);t.slots.default=()=>n},lp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),hi(e,"_",n)):du(e,t.slots={})}else t.slots={},e&&pu(t,e);hi(t.slots,Vi,1)},up=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Fe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,du(e,i)),o=e}else e&&(pu(t,e),o={default:1});if(r)for(const a in i)!fu(a)&&!(a in o)&&delete i[a]};function gu(){return{app:null,config:{isNativeTag:Rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function fp(t,e){return function(s,i=null){H(s)||(s=Object.assign({},s)),i!=null&&!Ce(i)&&(i=null);const r=gu(),o=new Set;let a=!1;const c=r.app={_uid:hp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Np,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const p=pe(s,i);return p.appContext=r,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Jo(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Xr(t,e,n,s,i=!1){if(U(t)){t.forEach((p,m)=>Xr(p,e&&(U(e)?e[m]:e),n,s,i));return}if(si(s)&&!i)return;const r=s.shapeFlag&4?Jo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Te(l)?(u[l]=null,Q(h,l)&&(h[l]=null)):Ve(l)&&(l.value=null)),H(c))Lt(c,a,12,[o,u]);else{const p=Te(c),m=Ve(c);if(p||m){const T=()=>{if(t.f){const k=p?u[c]:c.value;i?U(k)&&Ro(k,r):U(k)?k.includes(r)||k.push(r):p?(u[c]=[r],Q(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Q(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,Ke(T,n)):T()}}}const Ke=Fd;function dp(t){return pp(t)}function pp(t,e){const n=$f();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=lt,cloneNode:T,insertStaticContent:k}=t,D=(f,d,g,v=null,y=null,b=null,I=!1,E=null,C=!!d.dynamicChildren)=>{if(f===d)return;f&&!mt(f,d)&&(v=Hs(f),Nt(f,y,b,!0),f=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=d;switch(w){case Xo:P(f,d,g,v);break;case ut:x(f,d,g,v);break;case ii:f==null&&R(d,g,v,I);break;case ze:nt(f,d,g,v,y,b,I,E,C);break;default:N&1?he(f,d,g,v,y,b,I,E,C):N&6?xt(f,d,g,v,y,b,I,E,C):(N&64||N&128)&&w.process(f,d,g,v,y,b,I,E,C,pn)}M!=null&&y&&Xr(M,f&&f.ref,b,d||f,!d)},P=(f,d,g,v)=>{if(f==null)s(d.el=a(d.children),g,v);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},x=(f,d,g,v)=>{f==null?s(d.el=c(d.children||""),g,v):d.el=f.el},R=(f,d,g,v)=>{[f.el,f.anchor]=k(f.children,d,g,v,f.el,f.anchor)},z=({el:f,anchor:d},g,v)=>{let y;for(;f&&f!==d;)y=p(f),s(f,g,v),f=y;s(d,g,v)},J=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),i(f),f=g;i(d)},he=(f,d,g,v,y,b,I,E,C)=>{I=I||d.type==="svg",f==null?Ee(d,g,v,y,b,I,E,C):oe(f,d,y,b,I,E,C)},Ee=(f,d,g,v,y,b,I,E)=>{let C,w;const{type:M,props:N,shapeFlag:L,transition:V,patchFlag:X,dirs:ie}=f;if(f.el&&T!==void 0&&X===-1)C=f.el=T(f.el);else{if(C=f.el=o(f.type,b,N&&N.is,N),L&8?u(C,f.children):L&16&&te(f.children,C,null,v,y,b&&M!=="foreignObject",I,E),ie&&zt(f,null,v,"created"),N){for(const le in N)le!=="value"&&!ni(le)&&r(C,le,null,N[le],b,f.children,v,y,Et);"value"in N&&r(C,"value",null,N.value),(w=N.onVnodeBeforeMount)&&pt(w,v,f)}j(C,f,f.scopeId,I,v)}ie&&zt(f,null,v,"beforeMount");const re=(!y||y&&!y.pendingBranch)&&V&&!V.persisted;re&&V.beforeEnter(C),s(C,d,g),((w=N&&N.onVnodeMounted)||re||ie)&&Ke(()=>{w&&pt(w,v,f),re&&V.enter(C),ie&&zt(f,null,v,"mounted")},y)},j=(f,d,g,v,y)=>{if(g&&m(f,g),v)for(let b=0;b<v.length;b++)m(f,v[b]);if(y){let b=y.subTree;if(d===b){const I=y.vnode;j(f,I,I.scopeId,I.slotScopeIds,y.parent)}}},te=(f,d,g,v,y,b,I,E,C=0)=>{for(let w=C;w<f.length;w++){const M=f[w]=E?Rt(f[w]):at(f[w]);D(null,M,d,g,v,y,b,I,E)}},oe=(f,d,g,v,y,b,I)=>{const E=d.el=f.el;let{patchFlag:C,dynamicChildren:w,dirs:M}=d;C|=f.patchFlag&16;const N=f.props||ae,L=d.props||ae;let V;g&&Wt(g,!1),(V=L.onVnodeBeforeUpdate)&&pt(V,g,d,f),M&&zt(d,f,g,"beforeUpdate"),g&&Wt(g,!0);const X=y&&d.type!=="foreignObject";if(w?fe(f.dynamicChildren,w,E,g,v,X,b):I||_t(f,d,E,null,g,v,X,b,!1),C>0){if(C&16)je(E,d,N,L,g,v,y);else if(C&2&&N.class!==L.class&&r(E,"class",null,L.class,y),C&4&&r(E,"style",N.style,L.style,y),C&8){const ie=d.dynamicProps;for(let re=0;re<ie.length;re++){const le=ie[re],ot=N[le],gn=L[le];(gn!==ot||le==="value")&&r(E,le,ot,gn,y,f.children,g,v,Et)}}C&1&&f.children!==d.children&&u(E,d.children)}else!I&&w==null&&je(E,d,N,L,g,v,y);((V=L.onVnodeUpdated)||M)&&Ke(()=>{V&&pt(V,g,d,f),M&&zt(d,f,g,"updated")},v)},fe=(f,d,g,v,y,b,I)=>{for(let E=0;E<d.length;E++){const C=f[E],w=d[E],M=C.el&&(C.type===ze||!mt(C,w)||C.shapeFlag&70)?h(C.el):g;D(C,w,M,null,v,y,b,I,!0)}},je=(f,d,g,v,y,b,I)=>{if(g!==v){for(const E in v){if(ni(E))continue;const C=v[E],w=g[E];C!==w&&E!=="value"&&r(f,E,w,C,I,d.children,y,b,Et)}if(g!==ae)for(const E in g)!ni(E)&&!(E in v)&&r(f,E,g[E],null,I,d.children,y,b,Et);"value"in v&&r(f,"value",g.value,v.value)}},nt=(f,d,g,v,y,b,I,E,C)=>{const w=d.el=f?f.el:a(""),M=d.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:V}=d;V&&(E=E?E.concat(V):V),f==null?(s(w,g,v),s(M,g,v),te(d.children,g,M,y,b,I,E,C)):N>0&&N&64&&L&&f.dynamicChildren?(fe(f.dynamicChildren,L,g,y,b,I,E),(d.key!=null||y&&d===y.subTree)&&mu(f,d,!0)):_t(f,d,g,M,y,b,I,E,C)},xt=(f,d,g,v,y,b,I,E,C)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?y.ctx.activate(d,g,v,I,C):ur(d,g,v,y,b,I,C):He(f,d,C)},ur=(f,d,g,v,y,b,I)=>{const E=f.component=bp(f,v,y);if(Bi(f)&&(E.ctx.renderer=pn),Tp(E),E.asyncDep){if(y&&y.registerDep(E,de),!f.el){const C=E.subTree=pe(ut);x(null,C,d,g)}return}de(E,f,d,g,y,b,I)},He=(f,d,g)=>{const v=d.component=f.component;if(Dd(f,d,g))if(v.asyncDep&&!v.asyncResolved){ce(v,d,g);return}else v.next=d,bd(v.update),v.update();else d.el=f.el,v.vnode=d},de=(f,d,g,v,y,b,I)=>{const E=()=>{if(f.isMounted){let{next:M,bu:N,u:L,parent:V,vnode:X}=f,ie=M,re;Wt(f,!1),M?(M.el=X.el,ce(f,M,I)):M=X,N&&gr(N),(re=M.props&&M.props.onVnodeBeforeUpdate)&&pt(re,V,M,X),Wt(f,!0);const le=mr(f),ot=f.subTree;f.subTree=le,D(ot,le,h(ot.el),Hs(ot),f,y,b),M.el=le.el,ie===null&&Wo(f,le.el),L&&Ke(L,y),(re=M.props&&M.props.onVnodeUpdated)&&Ke(()=>pt(re,V,M,X),y)}else{let M;const{el:N,props:L}=d,{bm:V,m:X,parent:ie}=f,re=si(d);if(Wt(f,!1),V&&gr(V),!re&&(M=L&&L.onVnodeBeforeMount)&&pt(M,ie,d),Wt(f,!0),N&&dr){const le=()=>{f.subTree=mr(f),dr(N,f.subTree,f,y,null)};re?d.type.__asyncLoader().then(()=>!f.isUnmounted&&le()):le()}else{const le=f.subTree=mr(f);D(null,le,g,v,f,y,b),d.el=le.el}if(X&&Ke(X,y),!re&&(M=L&&L.onVnodeMounted)){const le=d;Ke(()=>pt(M,ie,le),y)}(d.shapeFlag&256||ie&&si(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Ke(f.a,y),f.isMounted=!0,d=g=v=null}},C=f.effect=new Bo(E,()=>zl(w),f.scope),w=f.update=()=>C.run();w.id=f.uid,Wt(f,!0),w()},ce=(f,d,g)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,ap(f,d.props,v,g),up(f,d.children,g),Vn(),Li(void 0,f.update),Un()},_t=(f,d,g,v,y,b,I,E,C=!1)=>{const w=f&&f.children,M=f?f.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:V}=d;if(L>0){if(L&128){Xn(w,N,g,v,y,b,I,E,C);return}else if(L&256){hr(w,N,g,v,y,b,I,E,C);return}}V&8?(M&16&&Et(w,y,b),N!==w&&u(g,N)):M&16?V&16?Xn(w,N,g,v,y,b,I,E,C):Et(w,y,b,!0):(M&8&&u(g,""),V&16&&te(N,g,v,y,b,I,E,C))},hr=(f,d,g,v,y,b,I,E,C)=>{f=f||bn,d=d||bn;const w=f.length,M=d.length,N=Math.min(w,M);let L;for(L=0;L<N;L++){const V=d[L]=C?Rt(d[L]):at(d[L]);D(f[L],V,g,null,y,b,I,E,C)}w>M?Et(f,y,b,!0,!1,N):te(d,g,v,y,b,I,E,C,N)},Xn=(f,d,g,v,y,b,I,E,C)=>{let w=0;const M=d.length;let N=f.length-1,L=M-1;for(;w<=N&&w<=L;){const V=f[w],X=d[w]=C?Rt(d[w]):at(d[w]);if(mt(V,X))D(V,X,g,null,y,b,I,E,C);else break;w++}for(;w<=N&&w<=L;){const V=f[N],X=d[L]=C?Rt(d[L]):at(d[L]);if(mt(V,X))D(V,X,g,null,y,b,I,E,C);else break;N--,L--}if(w>N){if(w<=L){const V=L+1,X=V<M?d[V].el:v;for(;w<=L;)D(null,d[w]=C?Rt(d[w]):at(d[w]),g,X,y,b,I,E,C),w++}}else if(w>L)for(;w<=N;)Nt(f[w],y,b,!0),w++;else{const V=w,X=w,ie=new Map;for(w=X;w<=L;w++){const Ye=d[w]=C?Rt(d[w]):at(d[w]);Ye.key!=null&&ie.set(Ye.key,w)}let re,le=0;const ot=L-X+1;let gn=!1,qa=0;const Yn=new Array(ot);for(w=0;w<ot;w++)Yn[w]=0;for(w=V;w<=N;w++){const Ye=f[w];if(le>=ot){Nt(Ye,y,b,!0);continue}let dt;if(Ye.key!=null)dt=ie.get(Ye.key);else for(re=X;re<=L;re++)if(Yn[re-X]===0&&mt(Ye,d[re])){dt=re;break}dt===void 0?Nt(Ye,y,b,!0):(Yn[dt-X]=w+1,dt>=qa?qa=dt:gn=!0,D(Ye,d[dt],g,null,y,b,I,E,C),le++)}const za=gn?gp(Yn):bn;for(re=za.length-1,w=ot-1;w>=0;w--){const Ye=X+w,dt=d[Ye],Wa=Ye+1<M?d[Ye+1].el:v;Yn[w]===0?D(null,dt,g,Wa,y,b,I,E,C):gn&&(re<0||w!==za[re]?dn(dt,g,Wa,2):re--)}}},dn=(f,d,g,v,y=null)=>{const{el:b,type:I,transition:E,children:C,shapeFlag:w}=f;if(w&6){dn(f.component.subTree,d,g,v);return}if(w&128){f.suspense.move(d,g,v);return}if(w&64){I.move(f,d,g,pn);return}if(I===ze){s(b,d,g);for(let N=0;N<C.length;N++)dn(C[N],d,g,v);s(f.anchor,d,g);return}if(I===ii){z(f,d,g);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(b),s(b,d,g),Ke(()=>E.enter(b),y);else{const{leave:N,delayLeave:L,afterLeave:V}=E,X=()=>s(b,d,g),ie=()=>{N(b,()=>{X(),V&&V()})};L?L(b,X,ie):ie()}else s(b,d,g)},Nt=(f,d,g,v=!1,y=!1)=>{const{type:b,props:I,ref:E,children:C,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:L}=f;if(E!=null&&Xr(E,null,g,f,!0),M&256){d.ctx.deactivate(f);return}const V=M&1&&L,X=!si(f);let ie;if(X&&(ie=I&&I.onVnodeBeforeUnmount)&&pt(ie,d,f),M&6)Sf(f.component,g,v);else{if(M&128){f.suspense.unmount(g,v);return}V&&zt(f,null,d,"beforeUnmount"),M&64?f.type.remove(f,d,g,y,pn,v):w&&(b!==ze||N>0&&N&64)?Et(w,d,g,!1,!0):(b===ze&&N&384||!y&&M&16)&&Et(C,d,g),v&&Ha(f)}(X&&(ie=I&&I.onVnodeUnmounted)||V)&&Ke(()=>{ie&&pt(ie,d,f),V&&zt(f,null,d,"unmounted")},g)},Ha=f=>{const{type:d,el:g,anchor:v,transition:y}=f;if(d===ze){Af(g,v);return}if(d===ii){J(f);return}const b=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:E}=y,C=()=>I(g,b);E?E(f.el,b,C):C()}else b()},Af=(f,d)=>{let g;for(;f!==d;)g=p(f),i(f),f=g;i(d)},Sf=(f,d,g)=>{const{bum:v,scope:y,update:b,subTree:I,um:E}=f;v&&gr(v),y.stop(),b&&(b.active=!1,Nt(I,f,d,g)),E&&Ke(E,d),Ke(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Et=(f,d,g,v=!1,y=!1,b=0)=>{for(let I=b;I<f.length;I++)Nt(f[I],d,g,v,y)},Hs=f=>f.shapeFlag&6?Hs(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Ka=(f,d,g)=>{f==null?d._vnode&&Nt(d._vnode,null,null,!0):D(d._vnode||null,f,d,null,null,null,g),Xl(),d._vnode=f},pn={p:D,um:Nt,m:dn,r:Ha,mt:ur,mc:te,pc:_t,pbc:fe,n:Hs,o:t};let fr,dr;return e&&([fr,dr]=e(pn)),{render:Ka,hydrate:fr,createApp:fp(Ka,fr)}}function Wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mu(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Rt(i[r]),a.el=o.el),n||mu(o,a))}}function gp(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const mp=t=>t.__isTeleport,ze=Symbol(void 0),Xo=Symbol(void 0),ut=Symbol(void 0),ii=Symbol(void 0),os=[];let it=null;function Ne(t=!1){os.push(it=t?null:[])}function yu(){os.pop(),it=os[os.length-1]||null}let kn=1;function fc(t){kn+=t}function vu(t){return t.dynamicChildren=kn>0?it||bn:null,yu(),kn>0&&it&&it.push(t),t}function Xe(t,e,n,s,i,r){return vu(K(t,e,n,s,i,r,!0))}function wu(t,e,n,s,i){return vu(pe(t,e,n,s,i,!0))}function _u(t){return t?t.__v_isVNode===!0:!1}function mt(t,e){return t.type===e.type&&t.key===e.key}const Vi="__vInternal",Eu=({key:t})=>t!=null?t:null,ri=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||Ve(t)||H(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function K(t,e=null,n=null,s=0,i=null,r=t===ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Eu(e),ref:e&&ri(e),scopeId:Pi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Yo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Te(n)?8:16),kn>0&&!o&&it&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&it.push(c),c}const pe=yp;function yp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jd)&&(t=ut),_u(t)){const a=$t(t,e,!0);return n&&Yo(a,n),kn>0&&!r&&it&&(a.shapeFlag&6?it[it.indexOf(t)]=a:it.push(a)),a.patchFlag|=-2,a}if(Sp(t)&&(t=t.__vccOpts),e){e=vp(e);let{class:a,style:c}=e;a&&!Te(a)&&(e.class=ko(a)),Ce(c)&&(Ul(c)&&!U(c)&&(c=Fe({},c)),e.style=No(c))}const o=Te(t)?1:xd(t)?128:mp(t)?64:Ce(t)?4:H(t)?2:0;return K(t,e,n,s,i,o,r,!0)}function vp(t){return t?Ul(t)||Vi in t?Fe({},t):t:null}function $t(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?wp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Eu(a),ref:e&&e.ref?n&&i?U(i)?i.concat(ri(e)):[i,ri(e)]:ri(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor}}function oi(t=" ",e=0){return pe(Xo,null,t,e)}function bu(t,e){const n=pe(ii,null,t);return n.staticCount=e,n}function at(t){return t==null||typeof t=="boolean"?pe(ut):U(t)?pe(ze,null,t.slice()):typeof t=="object"?Rt(t):pe(Xo,null,String(t))}function Rt(t){return t.el===null||t.memo?t:$t(t)}function Yo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Yo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Vi in e)?e._ctx=vt:i===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),s&64?(n=16,e=[oi(e)]):n=8);t.children=e,t.shapeFlag|=n}function wp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ko([e.class,s.class]));else if(i==="style")e.style=No([e.style,s.style]);else if(ki(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function pt(t,e,n,s=null){rt(t,e,7,[n,s])}const _p=gu();let Ep=0;function bp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||_p,r={uid:Ep++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hu(s,i),emitsOptions:Jl(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cd.bind(null,r),t.ce&&t.ce(r),r}let xe=null;const Tu=()=>xe||vt,Vt=t=>{xe=t,t.scope.on()},Ft=()=>{xe&&xe.scope.off(),xe=null};function Cu(t){return t.vnode.shapeFlag&4}let ms=!1;function Tp(t,e=!1){ms=e;const{props:n,children:s}=t.vnode,i=Cu(t);op(t,n,i,e),lp(t,s);const r=i?Cp(t,e):void 0;return ms=!1,r}function Cp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jl(new Proxy(t.ctx,ep));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Ap(t):null;Vt(t),Vn();const r=Lt(s,t,0,[t.props,i]);if(Un(),Ft(),Lo(r)){if(r.then(Ft,Ft),e)return r.then(o=>{Yr(t,o,e)}).catch(o=>{xs(o,t,0)});t.asyncDep=r}else Yr(t,r,e)}else Iu(t,e)}function Yr(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Kl(e)),Iu(t,n)}let dc;function Iu(t,e,n){const s=t.type;if(!t.render){if(!e&&dc&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:r,delimiters:a},o),c);s.render=dc(i,l)}}t.render=s.render||lt}Vt(t),Vn(),tp(t),Un(),Ft()}function Ip(t){return new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}})}function Ap(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Ip(t))},slots:t.slots,emit:t.emit,expose:e}}function Jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kl(jl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)}}))}function Sp(t){return H(t)&&"__vccOpts"in t}const Dp=(t,e)=>vd(t,e,ms);function xp(t){const e=Tu();let n=t();return Ft(),Lo(n)&&(n=n.catch(s=>{throw Vt(e),s})),[n,()=>Vt(e)]}const Np="3.2.37",kp="http://www.w3.org/2000/svg",Xt=typeof document<"u"?document:null,pc=Xt&&Xt.createElement("template"),Op={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Xt.createElementNS(kp,t):Xt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{pc.innerHTML=s?`<svg>${t}</svg>`:t;const a=pc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Mp(t,e,n){const s=t.style,i=Te(n);if(n&&!i){for(const r in n)Jr(s,r,n[r]);if(e&&!Te(e))for(const r in e)n[r]==null&&Jr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const gc=/\s*!important$/;function Jr(t,e,n){if(U(n))n.forEach(s=>Jr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Lp(t,e);gc.test(n)?t.setProperty($n(s),n.replace(gc,""),"important"):t[s]=n}}const mc=["Webkit","Moz","ms"],_r={};function Lp(t,e){const n=_r[e];if(n)return n;let s=Nn(e);if(s!=="filter"&&s in t)return _r[e]=s;s=Dl(s);for(let i=0;i<mc.length;i++){const r=mc[i]+s;if(r in t)return _r[e]=r}return e}const yc="http://www.w3.org/1999/xlink";function Fp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yc,e.slice(6,e.length)):t.setAttributeNS(yc,e,n);else{const r=xf(e);n==null||r&&!Tl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Pp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Tl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Au,Bp]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Zr=0;const $p=Promise.resolve(),Vp=()=>{Zr=0},Up=()=>Zr||($p.then(Vp),Zr=Au());function jp(t,e,n,s){t.addEventListener(e,n,s)}function Hp(t,e,n,s){t.removeEventListener(e,n,s)}function Kp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=qp(e);if(s){const l=r[e]=zp(s,i);jp(t,a,l,c)}else o&&(Hp(t,a,o,c),r[e]=void 0)}}const vc=/(?:Once|Passive|Capture)$/;function qp(t){let e;if(vc.test(t)){e={};let n;for(;n=t.match(vc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[$n(t.slice(2)),e]}function zp(t,e){const n=s=>{const i=s.timeStamp||Au();(Bp||i>=n.attached-1)&&rt(Wp(s,n.value),e,5,[s])};return n.value=t,n.attached=Up(),n}function Wp(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wc=/^on[a-z]/,Gp=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?Rp(t,s,i):e==="style"?Mp(t,n,s):ki(e)?Oo(e)||Kp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qp(t,e,s,i))?Pp(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fp(t,e,s,i))};function Qp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&wc.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wc.test(e)&&Te(n)?!1:e in t}const Xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ud.props;const Yp=Fe({patchProp:Gp},Op);let _c;function Jp(){return _c||(_c=dp(Yp))}const Zp=(...t)=>{const e=Jp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=eg(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function eg(t){return Te(t)?document.querySelector(t):t}const tg="/assets/spotify.654ae58b.png";const tt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ng={},sg=t=>(ht("data-v-dbf22733"),t=t(),ft(),t),ig={onclick:"window.location.href='//open.spotify.com/user/chri.pasero?si=8dc08ab60bb8480b'"},rg=sg(()=>K("img",{src:tg},null,-1)),og=[rg];function ag(t,e){return Ne(),Xe("button",ig,og)}const cg=tt(ng,[["render",ag],["__scopeId","data-v-dbf22733"]]),lg="/assets/github.d83ddf4e.png";const ug={},hg=t=>(ht("data-v-1638d089"),t=t(),ft(),t),fg={onclick:"window.location.href='//github.com/p4s3r0'"},dg=hg(()=>K("img",{src:lg},null,-1)),pg=[dg];function gg(t,e){return Ne(),Xe("button",fg,pg)}const mg=tt(ug,[["render",gg],["__scopeId","data-v-1638d089"]]),yg="/assets/discord.a5d67942.png";const vg={},wg=t=>(ht("data-v-cd68d85e"),t=t(),ft(),t),_g={onclick:"window.location.href='//discordapp.com/users/257140712494202890'"},Eg=wg(()=>K("img",{src:yg},null,-1)),bg=[Eg];function Tg(t,e){return Ne(),Xe("button",_g,bg)}const Cg=tt(vg,[["render",Tg],["__scopeId","data-v-cd68d85e"]]),Ig="/assets/linkedin.9eb6ffcf.png";const Ag={},Sg=t=>(ht("data-v-33bb5122"),t=t(),ft(),t),Dg={onclick:"window.location.href='//linkedin.com/in/christian-pasero-b47911218'"},xg=Sg(()=>K("img",{src:Ig},null,-1)),Ng=[xg];function kg(t,e){return Ne(),Xe("button",Dg,Ng)}const Og=tt(Ag,[["render",kg],["__scopeId","data-v-33bb5122"]]),Rg="/assets/cloud.90138eb9.png";const Mg={},Lg=t=>(ht("data-v-03e854d6"),t=t(),ft(),t),Fg={onclick:"window.location.href='//p4s3r0.com/nextcloud'"},Pg=Lg(()=>K("img",{src:Rg},null,-1)),Bg=[Pg];function $g(t,e){return Ne(),Xe("button",Fg,Bg)}const Vg=tt(Mg,[["render",$g],["__scopeId","data-v-03e854d6"]]),Ug="/assets/youtube.70c22a07.png";const jg={},Hg=t=>(ht("data-v-e8865f6a"),t=t(),ft(),t),Kg={onclick:"window.location.href='//youtube.com'"},qg=Hg(()=>K("img",{src:Ug},null,-1)),zg=[qg];function Wg(t,e){return Ne(),Xe("button",Kg,zg)}const Gg=tt(jg,[["render",Wg],["__scopeId","data-v-e8865f6a"]]);const Qg={id:"containerDock"},Xg={__name:"Dock",setup(t){return(e,n)=>(Ne(),Xe("div",Qg,[pe(cg),pe(mg),pe(Gg),pe(Cg),pe(Og),pe(Vg)]))}},Yg=tt(Xg,[["__scopeId","data-v-8f99951e"]]);const Jg={methods:{currentDateTime(){const t=new Date;let e=t.getHours(),n=t.getMinutes(),s="AM";return e>12&&(e=e-12,s="PM"),n<10&&(n="0"+n),e+":"+n+" "+s}}},Zo=t=>(ht("data-v-48efc18b"),t=t(),ft(),t),Zg=Zo(()=>K("p",{id:"textMessage"},[oi(" Hi stranger \u{1F913} I'm an enthusiastic "),K("br"),oi(" Computer Science Student "),K("br"),oi(" interested in Security! \u{1F5A5} ")],-1)),em=Zo(()=>K("svg",{width:"12",height:"19",viewBox:"0 0 23 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[K("path",{d:"M22.783 18.2906C11.4878 20.3442 2.88798 14.4399 0 11.231L0.320887 1.60444C3.4228 2.24621 10.14 2.82381 12.1937 0C11.8728 11.5519 20.5368 17.3279 22.783 18.2906Z",fill:"#468CF7"})],-1)),tm={id:"textReadContainer"},nm={class:"textRead"},sm=Zo(()=>K("p",{class:"textRead",id:"thick"},"Read \xA0",-1));function im(t,e,n,s,i,r){return Ne(),Xe(ze,null,[Zg,em,K("div",tm,[K("p",nm,Zn(r.currentDateTime()),1),sm])],64)}const rm=tt(Jg,[["render",im],["__scopeId","data-v-48efc18b"]]),om="/assets/memoji_hi.50fef132.png";const Su=t=>(ht("data-v-cc0beebc"),t=t(),ft(),t),am=Su(()=>K("p",null,"\xA0",-1)),cm=Su(()=>K("div",{id:"container"},[K("div",{id:"pictureContainer"},[K("img",{src:om})])],-1)),lm={__name:"CenterMemoji",setup(t){return(e,n)=>(Ne(),Xe(ze,null,[am,cm],64))}},um=tt(lm,[["__scopeId","data-v-cc0beebc"]]);const Du=t=>(ht("data-v-e5ff03d9"),t=t(),ft(),t),hm={id:"container"},fm=Du(()=>K("p",{id:"name"},"Christian Pasero",-1)),dm=Du(()=>K("div",{id:"line"},null,-1)),pm={id:"messageBubble"},gm={id:"memoji"},mm=bu('<a href="//bachelor.p4s3r0.com" data-v-e5ff03d9><svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" data-v-e5ff03d9><path d="M4 13L24 8L44 13L24 18L4 13Z" stroke-linecap="round" stroke-linejoin="round" data-v-e5ff03d9></path><path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16" stroke-linecap="round" stroke-linejoin="round" data-v-e5ff03d9></path><path d="M7 14V36" stroke-linecap="round" stroke-linejoin="round" data-v-e5ff03d9></path><rect x="4" y="34" width="6" height="6" stroke-linecap="round" stroke-linejoin="round" data-v-e5ff03d9></rect></svg></a><p id="svgNameing" data-v-e5ff03d9> Bsc Thesis</p>',2),ym={__name:"CenterWidget",setup(t){return(e,n)=>(Ne(),Xe("div",hm,[fm,dm,K("div",pm,[pe(rm)]),K("div",gm,[pe(um)]),mm]))}},vm=tt(ym,[["__scopeId","data-v-e5ff03d9"]]);const wm=bu('<div id="container" data-v-c71cc008><p data-v-c71cc008>~ $</p></div><div id="topBar" data-v-c71cc008><div class="actionButton" style="background-color:#FF5E57;" data-v-c71cc008></div><div class="actionButton" style="background-color:#FFBB2E;" data-v-c71cc008></div><div class="actionButton" style="background-color:#38C149;" data-v-c71cc008></div><p data-v-c71cc008>About Me</p></div>',2),_m={__name:"Terminal",setup(t){return(e,n)=>wm}},Em=tt(_m,[["__scopeId","data-v-c71cc008"]]);const bm={props:["month","day","time","event"]},Tm=t=>(ht("data-v-44c2cd7b"),t=t(),ft(),t),Cm={id:"container"},Im=Tm(()=>K("svg",{version:"1.1",viewBox:"0 0 512 512"},[K("g",null,[K("g",null,[K("path",{d:"m256,51.8c-112.6,0-204.2,91.6-204.2,204.2s91.6,204.2 204.2,204.2 204.2-91.6 204.2-204.2-91.6-204.2-204.2-204.2v-1.42109e-14zm0,449.2c-135.1,0-245-109.9-245-245s109.9-245 245-245 245,109.9 245,245-109.9,245-245,245z"}),K("path",{d:"m344.1,276.4h-88.1c-11.3,0-20.4-9.1-20.4-20.4v-157.8c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v137.4h67.7c11.3,0 20.4,9.1 20.4,20.4 5.68434e-14,11.3-9.1,20.4-20.4,20.4z"})])])],-1));function Am(t,e,n,s,i,r){return Ne(),Xe("div",Cm,[K("h1",null,Zn(n.month),1),K("h2",null,Zn(n.day),1),Im,K("h3",null,Zn(n.time),1),K("p",null,Zn(n.event),1)])}const Sm=tt(bm,[["render",Am],["__scopeId","data-v-44c2cd7b"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[h],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const p=r<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const T=l<<6&192|h;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Nm=function(t){const e=xu(t);return xm.encodeByteArray(e,!0)},Nu=function(t){return Nm(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Om(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ui())}function Rm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lm(){return Ui().indexOf("Electron/")>=0}function Fm(){const t=Ui();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pm(){return Ui().indexOf("MSAppHost/")>=0}function Bm(){return typeof indexedDB=="object"}function $m(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="FirebaseError";class jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Vm,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ku.prototype.create)}}class ku{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Um(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,s)}}function Um(t,e){return t.replace(jm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const jm=/\{\$([^}]+)}/g;function eo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ec(r)&&Ec(o)){if(!eo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ec(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){return t&&t._delegate?t._delegate:t}class ys{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new km;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zm(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(t){return t===Qt?void 0:t}function zm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Km(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Gm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Qm=ee.INFO,Xm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ym=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Xm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=Qm,this._logHandler=Ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Jm=(t,e)=>e.some(n=>t instanceof n);let bc,Tc;function Zm(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ey(){return Tc||(Tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,to=new WeakMap,Mu=new WeakMap,Er=new WeakMap,ea=new WeakMap;function ty(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ru.set(n,t)}).catch(()=>{}),ea.set(e,t),e}function ny(t){if(to.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});to.set(t,e)}let no={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return to.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sy(t){no=t(no)}function iy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(br(this),e,...n);return Mu.set(s,e.sort?e.sort():[e]),Pt(s)}:ey().includes(t)?function(...e){return t.apply(br(this),e),Pt(Ru.get(this))}:function(...e){return Pt(t.apply(br(this),e))}}function ry(t){return typeof t=="function"?iy(t):(t instanceof IDBTransaction&&ny(t),Jm(t,Zm())?new Proxy(t,no):t)}function Pt(t){if(t instanceof IDBRequest)return ty(t);if(Er.has(t))return Er.get(t);const e=ry(t);return e!==t&&(Er.set(t,e),ea.set(e,t)),e}const br=t=>ea.get(t);function oy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ay=["get","getKey","getAll","getAllKeys","count"],cy=["put","add","delete","clear"],Tr=new Map;function Cc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tr.get(e))return Tr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=cy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ay.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Tr.set(e,r),r}sy(t=>({...t,get:(e,n,s)=>Cc(e,n)||t.get(e,n,s),has:(e,n)=>!!Cc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const so="@firebase/app",Ic="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Ou("@firebase/app"),hy="@firebase/app-compat",fy="@firebase/analytics-compat",dy="@firebase/analytics",py="@firebase/app-check-compat",gy="@firebase/app-check",my="@firebase/auth",yy="@firebase/auth-compat",vy="@firebase/database",wy="@firebase/database-compat",_y="@firebase/functions",Ey="@firebase/functions-compat",by="@firebase/installations",Ty="@firebase/installations-compat",Cy="@firebase/messaging",Iy="@firebase/messaging-compat",Ay="@firebase/performance",Sy="@firebase/performance-compat",Dy="@firebase/remote-config",xy="@firebase/remote-config-compat",Ny="@firebase/storage",ky="@firebase/storage-compat",Oy="@firebase/firestore",Ry="@firebase/firestore-compat",My="firebase",Ly="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="[DEFAULT]",Fy={[so]:"fire-core",[hy]:"fire-core-compat",[dy]:"fire-analytics",[fy]:"fire-analytics-compat",[gy]:"fire-app-check",[py]:"fire-app-check-compat",[my]:"fire-auth",[yy]:"fire-auth-compat",[vy]:"fire-rtdb",[wy]:"fire-rtdb-compat",[_y]:"fire-fn",[Ey]:"fire-fn-compat",[by]:"fire-iid",[Ty]:"fire-iid-compat",[Cy]:"fire-fcm",[Iy]:"fire-fcm-compat",[Ay]:"fire-perf",[Sy]:"fire-perf-compat",[Dy]:"fire-rc",[xy]:"fire-rc-compat",[Ny]:"fire-gcs",[ky]:"fire-gcs-compat",[Oy]:"fire-fst",[Ry]:"fire-fst-compat","fire-js":"fire-js",[My]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Map,io=new Map;function Py(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(io.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;io.set(e,t);for(const n of mi.values())Py(n,t);return!0}function By(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new ku("app","Firebase",$y);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=Ly;function jy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Lu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});const i=mi.get(s);if(i){if(eo(t,i.options)&&eo(n,i.config))return i;throw an.create("duplicate-app",{appName:s})}const r=new Wm(s);for(const a of io.values())r.addComponent(a);const o=new Vy(t,n,r);return mi.set(s,o),o}function Hy(t=Lu){const e=mi.get(t);if(!e)throw an.create("no-app",{appName:t});return e}function An(t,e,n){var s;let i=(s=Fy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}yi(new ys(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebase-heartbeat-database",qy=1,vs="firebase-heartbeat-store";let Cr=null;function Fu(){return Cr||(Cr=oy(Ky,qy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Cr}async function zy(t){var e;try{return(await Fu()).transaction(vs).objectStore(vs).get(Pu(t))}catch(n){if(n instanceof jn)on.warn(n.message);else{const s=an.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});on.warn(s.message)}}}async function Ac(t,e){var n;try{const i=(await Fu()).transaction(vs,"readwrite");return await i.objectStore(vs).put(e,Pu(t)),i.done}catch(s){if(s instanceof jn)on.warn(s.message);else{const i=an.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});on.warn(i.message)}}}function Pu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=1024,Gy=30*24*60*60*1e3;class Qy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Gy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sc(),{heartbeatsToSend:n,unsentEntries:s}=Xy(this._heartbeatsCache.heartbeats),i=Nu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sc(){return new Date().toISOString().substring(0,10)}function Xy(t,e=Wy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Dc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bm()?$m().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dc(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){yi(new ys("platform-logger",e=>new ly(e),"PRIVATE")),yi(new ys("heartbeat",e=>new Qy(e),"PRIVATE")),An(so,Ic,t),An(so,Ic,"esm2017"),An("fire-js","")}Jy("");var Zy="firebase",ev="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(Zy,ev,"app");var tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,ta=ta||{},$=tv||self;function vi(){}function ro(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nv(t){return Object.prototype.hasOwnProperty.call(t,Ir)&&t[Ir]||(t[Ir]=++sv)}var Ir="closure_uid_"+(1e9*Math.random()>>>0),sv=0;function iv(t,e,n){return t.call.apply(t.bind,arguments)}function rv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=iv:ke=rv,ke.apply(null,arguments)}function Qs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Kt(){this.s=this.s,this.o=this.o}var ov=0;Kt.prototype.s=!1;Kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ov!=0)&&nv(this)};Kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},$u=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function av(t){e:{var e=Jv;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function xc(t){return Array.prototype.concat.apply([],arguments)}function na(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wi(t){return/^[\s\xa0]*$/.test(t)}var Nc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Be(t,e){return t.indexOf(e)!=-1}function Ar(t,e){return t<e?-1:t>e?1:0}var $e;e:{var kc=$.navigator;if(kc){var Oc=kc.userAgent;if(Oc){$e=Oc;break e}}$e=""}function sa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Vu(t){const e={};for(const n in t)e[n]=t[n];return e}var Rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Rc.length;r++)n=Rc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ia(t){return ia[" "](t),t}ia[" "]=vi;function cv(t){var e=hv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lv=Be($e,"Opera"),On=Be($e,"Trident")||Be($e,"MSIE"),ju=Be($e,"Edge"),oo=ju||On,Hu=Be($e,"Gecko")&&!(Be($e.toLowerCase(),"webkit")&&!Be($e,"Edge"))&&!(Be($e,"Trident")||Be($e,"MSIE"))&&!Be($e,"Edge"),uv=Be($e.toLowerCase(),"webkit")&&!Be($e,"Edge");function Ku(){var t=$.document;return t?t.documentMode:void 0}var _i;e:{var Sr="",Dr=function(){var t=$e;if(Hu)return/rv:([^\);]+)(\)|;)/.exec(t);if(ju)return/Edge\/([\d\.]+)/.exec(t);if(On)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uv)return/WebKit\/(\S+)/.exec(t);if(lv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dr&&(Sr=Dr?Dr[1]:""),On){var xr=Ku();if(xr!=null&&xr>parseFloat(Sr)){_i=String(xr);break e}}_i=Sr}var hv={};function fv(){return cv(function(){let t=0;const e=Nc(String(_i)).split("."),n=Nc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ar(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ar(i[2].length==0,r[2].length==0)||Ar(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var ao;if($.document&&On){var Mc=Ku();ao=Mc||parseInt(_i,10)||void 0}else ao=void 0;var dv=ao,pv=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",vi,e),$.removeEventListener("test",vi,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function ws(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hu){e:{try{ia(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ws.Z.h.call(this)}}Me(ws,Le);var gv={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ks="closure_listenable_"+(1e6*Math.random()|0),mv=0;function yv(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++mv,this.ca=this.fa=!1}function ji(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Hi(t){this.src=t,this.g={},this.h=0}Hi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=lo(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new yv(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function co(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Bu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ji(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lo(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var ra="closure_lm_"+(1e6*Math.random()|0),Nr={};function qu(t,e,n,s,i){if(s&&s.once)return Wu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qu(t,e[r],n,s,i);return null}return n=ca(n),t&&t[ks]?t.N(e,n,Ns(s)?!!s.capture:!!s,i):zu(t,e,n,!1,s,i)}function zu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ns(i)?!!i.capture:!!i,a=aa(t);if(a||(t[ra]=a=new Hi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=vv(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)pv||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Qu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vv(){function t(n){return e.call(t.src,t.listener,n)}var e=wv;return t}function Wu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wu(t,e[r],n,s,i);return null}return n=ca(n),t&&t[ks]?t.O(e,n,Ns(s)?!!s.capture:!!s,i):zu(t,e,n,!0,s,i)}function Gu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Gu(t,e[r],n,s,i);else s=Ns(s)?!!s.capture:!!s,n=ca(n),t&&t[ks]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=lo(r,n,s,i),-1<n&&(ji(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=aa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lo(e,n,s,i)),(n=-1<t?e[t]:null)&&oa(n))}function oa(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ks])co(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Qu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=aa(e))?(co(n,t),n.h==0&&(n.src=null,e[ra]=null)):ji(t)}}}function Qu(t){return t in Nr?Nr[t]:Nr[t]="on"+t}function wv(t,e){if(t.ca)t=!0;else{e=new ws(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&oa(t),t=n.call(s,e)}return t}function aa(t){return t=t[ra],t instanceof Hi?t:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ca(t){return typeof t=="function"?t:(t[kr]||(t[kr]=function(e){return t.handleEvent(e)}),t[kr])}function Ie(){Kt.call(this),this.i=new Hi(this),this.P=this,this.I=null}Me(Ie,Kt);Ie.prototype[ks]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){Gu(this,t,e,n,s)};function Oe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var i=e;e=new Le(s,t),Uu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Xs(o,s,!0,e)&&i}if(o=e.g=t,i=Xs(o,s,!0,e)&&i,i=Xs(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Xs(o,s,!1,e)&&i}Ie.prototype.M=function(){if(Ie.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ji(n[s]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&co(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var la=$.JSON.stringify;function _v(){var t=Yu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ev{constructor(){this.h=this.g=null}add(e,n){const s=Xu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Xu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bv,t=>t.reset());class bv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Tv(t){$.setTimeout(()=>{throw t},0)}function ua(t,e){uo||Cv(),ho||(uo(),ho=!0),Yu.add(t,e)}var uo;function Cv(){var t=$.Promise.resolve(void 0);uo=function(){t.then(Iv)}}var ho=!1,Yu=new Ev;function Iv(){for(var t;t=_v();){try{t.h.call(t.g)}catch(n){Tv(n)}var e=Xu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ho=!1}function Ki(t,e){Ie.call(this),this.h=t||1,this.g=e||$,this.j=ke(this.kb,this),this.l=Date.now()}Me(Ki,Ie);S=Ki.prototype;S.da=!1;S.S=null;S.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(ha(this),this.start()))}};S.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ha(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}S.M=function(){Ki.Z.M.call(this),ha(this),delete this.g};function fa(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Ju(t){t.g=fa(()=>{t.g=null,t.i&&(t.i=!1,Ju(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Av extends Kt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ju(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(t){Kt.call(this),this.h=t,this.g={}}Me(_s,Kt);var Lc=[];function Zu(t,e,n,s){Array.isArray(n)||(n&&(Lc[0]=n.toString()),n=Lc);for(var i=0;i<n.length;i++){var r=qu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function eh(t){sa(t.g,function(e,n){this.g.hasOwnProperty(n)&&oa(e)},t),t.g={}}_s.prototype.M=function(){_s.Z.M.call(this),eh(this)};_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qi(){this.g=!0}qi.prototype.Aa=function(){this.g=!1};function Sv(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Dv(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function _n(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Nv(t,n)+(s?" "+s:"")})}function xv(t,e){t.info(function(){return"TIMEOUT: "+e})}qi.prototype.info=function(){};function Nv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return la(n)}catch{return e}}var fn={},Fc=null;function zi(){return Fc=Fc||new Ie}fn.Ma="serverreachability";function th(t){Le.call(this,fn.Ma,t)}Me(th,Le);function Es(t){const e=zi();Oe(e,new th(e))}fn.STAT_EVENT="statevent";function nh(t,e){Le.call(this,fn.STAT_EVENT,t),this.stat=e}Me(nh,Le);function Ue(t){const e=zi();Oe(e,new nh(e,t))}fn.Na="timingevent";function sh(t,e){Le.call(this,fn.Na,t),this.size=e}Me(sh,Le);function Os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Wi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ih={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function da(){}da.prototype.h=null;function Pc(t){return t.h||(t.h=t.i())}function rh(){}var Rs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pa(){Le.call(this,"d")}Me(pa,Le);function ga(){Le.call(this,"c")}Me(ga,Le);var fo;function Gi(){}Me(Gi,da);Gi.prototype.g=function(){return new XMLHttpRequest};Gi.prototype.i=function(){return{}};fo=new Gi;function Ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new _s(this),this.P=kv,t=oo?125:void 0,this.W=new Ki(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new oh}function oh(){this.i=null,this.g="",this.h=!1}var kv=45e3,po={},Ei={};S=Ms.prototype;S.setTimeout=function(t){this.P=t};function go(t,e,n){t.K=1,t.v=Xi(It(e)),t.s=n,t.U=!0,ah(t,null)}function ah(t,e){t.F=Date.now(),Ls(t),t.A=It(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),ph(n.h,"t",s),t.C=0,n=t.l.H,t.h=new oh,t.g=Mh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Av(ke(t.Ia,t,t.g),t.O)),Zu(t.V,t.g,"readystatechange",t.gb),e=t.H?Vu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Es(),Sv(t.j,t.u,t.A,t.m,t.X,t.s)}S.gb=function(t){t=t.target;const e=this.L;e&&Tt(t)==3?e.l():this.Ia(t)};S.Ia=function(t){try{if(t==this.g)e:{const u=Tt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||oo||this.g&&(this.h.h||this.g.ga()||Uc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Es(3):Es(2)),Qi(this);var n=this.g.ba();this.N=n;t:if(ch(this)){var s=Uc(this.g);t="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),as(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Dv(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var l=a;break t}}l=null}if(n=l)_n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mo(this,n);else{this.i=!1,this.o=3,Ue(12),Yt(this),as(this);break e}}this.U?(lh(this,u,o),oo&&this.i&&u==3&&(Zu(this.V,this.W,"tick",this.fb),this.W.start())):(_n(this.j,this.m,o,null),mo(this,o)),u==4&&Yt(this),this.i&&!this.I&&(u==4?Nh(this.l,this):(this.i=!1,Ls(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ue(12)):(this.o=0,Ue(13)),Yt(this),as(this)}}}catch{}finally{}};function ch(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function lh(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Ov(t,n),i==Ei){e==4&&(t.o=4,Ue(14),s=!1),_n(t.j,t.m,null,"[Incomplete Response]");break}else if(i==po){t.o=4,Ue(15),_n(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else _n(t.j,t.m,i,null),mo(t,i);ch(t)&&i!=Ei&&i!=po&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ue(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ca(e),e.L=!0,Ue(11))):(_n(t.j,t.m,n,"[Invalid Chunked Response]"),Yt(t),as(t))}S.fb=function(){if(this.g){var t=Tt(this.g),e=this.g.ga();this.C<e.length&&(Qi(this),lh(this,t,e),this.i&&t!=4&&Ls(this))}};function Ov(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ei:(n=Number(e.substring(n,s)),isNaN(n)?po:(s+=1,s+n>e.length?Ei:(e=e.substr(s,n),t.C=s+n,e)))}S.cancel=function(){this.I=!0,Yt(this)};function Ls(t){t.Y=Date.now()+t.P,uh(t,t.P)}function uh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Os(ke(t.eb,t),e)}function Qi(t){t.B&&($.clearTimeout(t.B),t.B=null)}S.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xv(this.j,this.A),this.K!=2&&(Es(),Ue(17)),Yt(this),this.o=2,as(this)):uh(this,this.Y-t)};function as(t){t.l.G==0||t.I||Nh(t.l,t)}function Yt(t){Qi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ha(t.W),eh(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yo(n.i,t))){if(n.I=t.N,!t.J&&yo(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ii(n),Zi(n);else break e;Ta(n),Ue(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Os(ke(n.ab,n),6e3));if(1>=yh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Jt(n,11)}else if((t.J||n.g==t)&&Ii(n),!wi(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.i;!r.g&&(Be(T,"spdy")||Be(T,"quic")||Be(T,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(va(r,r.h),r.h=null))}if(s.D){const k=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,ue(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Rh(s,s.H?s.la:null,s.W),o.J){vh(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Qi(a),Ls(a)),s.g=o}else Dh(s);0<n.l.length&&er(n)}else l[0]!="stop"&&l[0]!="close"||Jt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Jt(n,7):ba(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Es(4)}catch{}}function Rv(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ro(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ma(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ro(t)||typeof t=="string")$u(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ro(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Rv(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Hn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Hn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}S=Hn.prototype;S.R=function(){ya(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};S.T=function(){return ya(this),this.g.concat()};function ya(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];cn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],cn(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}S.get=function(t,e){return cn(this.h,t)?this.h[t]:e};S.set=function(t,e){cn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};S.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var hh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Mv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ln(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ln){this.g=e!==void 0?e:t.g,bi(this,t.j),this.s=t.s,Ti(this,t.i),Ci(this,t.m),this.l=t.l,e=t.h;var n=new bs;n.i=e.i,e.g&&(n.g=new Hn(e.g),n.h=e.h),Bc(this,n),this.o=t.o}else t&&(n=String(t).match(hh))?(this.g=!!e,bi(this,n[1]||"",!0),this.s=cs(n[2]||""),Ti(this,n[3]||"",!0),Ci(this,n[4]),this.l=cs(n[5]||"",!0),Bc(this,n[6]||"",!0),this.o=cs(n[7]||"")):(this.g=!!e,this.h=new bs(null,this.g))}ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,$c,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,$c,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?$v:Bv,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,Uv)),t.join("")};function It(t){return new ln(t)}function bi(t,e,n){t.j=n?cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ti(t,e,n){t.i=n?cs(e,!0):e}function Ci(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bc(t,e,n){e instanceof bs?(t.h=e,jv(t.h,t.g)):(n||(e=ns(e,Vv)),t.h=new bs(e,t.g))}function ue(t,e,n){t.h.set(e,n)}function Xi(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Lv(t){return t instanceof ln?It(t):new ln(t,void 0)}function Fv(t,e,n,s){var i=new ln(null,void 0);return t&&bi(i,t),e&&Ti(i,e),n&&Ci(i,n),s&&(i.l=s),i}function cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Pv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $c=/[#\/\?@]/g,Bv=/[#\?:]/g,$v=/[#\?]/g,Vv=/[#\?@]/g,Uv=/#/g;function bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qt(t){t.g||(t.g=new Hn,t.h=0,t.i&&Mv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=bs.prototype;S.add=function(t,e){qt(this),this.i=null,t=Kn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fh(t,e){qt(t),e=Kn(t,e),cn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,cn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ya(t)))}function dh(t,e){return qt(t),e=Kn(t,e),cn(t.g.h,e)}S.forEach=function(t,e){qt(this),this.g.forEach(function(n,s){$u(n,function(i){t.call(e,i,s,this)},this)},this)};S.T=function(){qt(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};S.R=function(t){qt(this);var e=[];if(typeof t=="string")dh(this,t)&&(e=xc(e,this.g.get(Kn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=xc(e,t[n])}return e};S.set=function(t,e){return qt(this),this.i=null,t=Kn(this,t),dh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ph(t,e,n){fh(t,e),0<n.length&&(t.i=null,t.g.set(Kn(t,e),na(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Kn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jv(t,e){e&&!t.j&&(qt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(fh(this,s),ph(this,i,n))},t)),t.j=e}var Hv=class{constructor(t,e){this.h=t,this.g=e}};function gh(t){this.l=t||Kv,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kv=10;function mh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yh(t){return t.h?1:t.g?t.g.size:0}function yo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function va(t,e){t.g?t.g.add(e):t.h=e}function vh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gh.prototype.cancel=function(){if(this.i=wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return na(t.i)}function wa(){}wa.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};wa.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function qv(){this.g=new wa}function zv(t,e,n){const s=n||"";try{ma(t,function(i,r){let o=i;Ns(i)&&(o=la(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Wv(t,e){const n=new qi;if($.Image){const s=new Image;s.onload=Qs(Ys,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qs(Ys,n,s,"TestLoadImage: error",!1,e),s.onabort=Qs(Ys,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qs(Ys,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ys(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Fs(t){this.l=t.$b||null,this.j=t.ib||!1}Me(Fs,da);Fs.prototype.g=function(){return new Yi(this.l,this.j)};Fs.prototype.i=function(t){return function(){return t}}({});function Yi(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_a,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Yi,Ie);var _a=0;S=Yi.prototype;S.open=function(t,e){if(this.readyState!=_a)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ts(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=_a};S.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_h(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function _h(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}S.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ps(this):Ts(this),this.readyState==3&&_h(this)}};S.Ua=function(t){this.g&&(this.response=this.responseText=t,Ps(this))};S.Ta=function(t){this.g&&(this.response=t,Ps(this))};S.ha=function(){this.g&&Ps(this)};function Ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ts(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Gv=$.JSON.parse;function we(t){Ie.call(this),this.headers=new Hn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Eh,this.K=this.L=!1}Me(we,Ie);var Eh="",Qv=/^https?$/i,Xv=["POST","PUT"];S=we.prototype;S.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fo.g(),this.C=this.u?Pc(this.u):Pc(fo),this.g.onreadystatechange=ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Vc(this,r);return}t=n||"";const i=new Hn(this.headers);s&&ma(s,function(r,o){i.set(o,r)}),s=av(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=Bu(Xv,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ch(this),0<this.B&&((this.K=Yv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.pa,this)):this.A=fa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Vc(this,r)}};function Yv(t){return On&&fv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Jv(t){return t.toLowerCase()=="content-type"}S.pa=function(){typeof ta<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Vc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bh(t),Ji(t)}function bh(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Ji(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ji(this,!0)),we.Z.M.call(this)};S.Fa=function(){this.s||(this.F||this.v||this.l?Th(this):this.cb())};S.cb=function(){Th(this)};function Th(t){if(t.h&&typeof ta<"u"&&(!t.C[1]||Tt(t)!=4||t.ba()!=2)){if(t.v&&Tt(t)==4)fa(t.Fa,0,t);else if(Oe(t,"readystatechange"),Tt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(hh)[1]||null;if(!i&&$.self&&$.self.location){var r=$.self.location.protocol;i=r.substr(0,r.length-1)}s=!Qv.test(i?i.toLowerCase():"")}n=s}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<Tt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",bh(t)}}finally{Ji(t)}}}}function Ji(t,e){if(t.g){Ch(t);const n=t.g,s=t.C[0]?vi:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ch(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Tt(t){return t.g?t.g.readyState:0}S.ba=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};S.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Gv(e)}};function Uc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Eh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}S.Da=function(){return this.m};S.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zv(t){let e="";return sa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ea(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Zv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ih(t){this.za=0,this.l=[],this.h=new qi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new gh(t&&t.concurrentRequestLimit),this.Ca=new qv,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}S=Ih.prototype;S.ma=8;S.G=1;function ba(t){if(Ah(t),t.G==3){var e=t.V++,n=It(t.F);ue(n,"SID",t.J),ue(n,"RID",e),ue(n,"TYPE","terminate"),Bs(t,n),e=new Ms(t,t.h,e,void 0),e.K=2,e.v=Xi(It(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ls(e)}Oh(t)}S.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Zi(t){t.g&&(Ca(t),t.g.cancel(),t.g=null)}function Ah(t){Zi(t),t.u&&($.clearTimeout(t.u),t.u=null),Ii(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Or(t,e){t.l.push(new Hv(t.Za++,e)),t.G==3&&er(t)}function er(t){mh(t.i)||t.m||(t.m=!0,ua(t.Ha,t),t.C=0)}function e0(t,e){return yh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Os(ke(t.Ha,t,e),kh(t,t.C)),t.C++,!0)}S.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ms(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Vu(r),Uu(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Sh(this,i,e),n=It(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Bs(this,n),this.o&&r&&Ea(n,this.o,r),va(this.i,i),this.Ra&&ue(n,"TYPE","init"),this.ja?(ue(n,"$req",e),ue(n,"SID","null"),i.$=!0,go(i,n,null)):go(i,n,e),this.G=2}}else this.G==3&&(t?jc(this,t):this.l.length==0||mh(this.i)||jc(this))};function jc(t,e){var n;e?n=e.m:n=t.V++;const s=It(t.F);ue(s,"SID",t.J),ue(s,"RID",n),ue(s,"AID",t.U),Bs(t,s),t.o&&t.s&&Ea(s,t.o,t.s),n=new Ms(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Sh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),va(t.i,n),go(n,s,e)}function Bs(t,e){t.j&&ma({},function(n,s){ue(e,s,n)})}function Sh(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ke(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{zv(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Dh(t){t.g||t.u||(t.Y=1,ua(t.Ga,t),t.A=0)}function Ta(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Os(ke(t.Ga,t),kh(t,t.A)),t.A++,!0)}S.Ga=function(){if(this.u=null,xh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Os(ke(this.bb,this),t)}};S.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ue(10),Zi(this),xh(this))};function Ca(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function xh(t){t.g=new Ms(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=It(t.oa);ue(e,"RID","rpc"),ue(e,"SID",t.J),ue(e,"CI",t.N?"0":"1"),ue(e,"AID",t.U),Bs(t,e),ue(e,"TYPE","xmlhttp"),t.o&&t.s&&Ea(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xi(It(e)),n.s=null,n.U=!0,ah(n,t)}S.ab=function(){this.v!=null&&(this.v=null,Zi(this),Ta(this),Ue(19))};function Ii(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function Nh(t,e){var n=null;if(t.g==e){Ii(t),Ca(t),t.g=null;var s=2}else if(yo(t.i,e))n=e.D,vh(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=zi(),Oe(s,new sh(s,n)),er(t)}else Dh(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&e0(t,e)||s==2&&Ta(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Jt(t,5);break;case 4:Jt(t,10);break;case 3:Jt(t,6);break;default:Jt(t,2)}}}function kh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Jt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=ke(t.jb,t);n||(n=new ln("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||bi(n,"https"),Xi(n)),Wv(n.toString(),s)}else Ue(2);t.G=0,t.j&&t.j.va(e),Oh(t),Ah(t)}S.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ue(2)):(this.h.info("Failed to ping google.com"),Ue(1))};function Oh(t){t.G=0,t.I=-1,t.j&&((wh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,na(t.l),t.l.length=0),t.j.ua())}function Rh(t,e,n){let s=Lv(n);if(s.i!="")e&&Ti(s,e+"."+s.i),Ci(s,s.m);else{const i=$.location;s=Fv(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&sa(t.aa,function(i,r){ue(s,r,i)}),e=t.D,n=t.sa,e&&n&&ue(s,e,n),ue(s,"VER",t.ma),Bs(t,s),s}function Mh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new we(new Fs({ib:!0})):new we(t.qa),e.L=t.H,e}function Lh(){}S=Lh.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Oa=function(){};function Ai(){if(On&&!(10<=Number(dv)))throw Error("Environmental error: no available transport.")}Ai.prototype.g=function(t,e){return new et(t,e)};function et(t,e){Ie.call(this),this.g=new Ih(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qn(this)}Me(et,Ie);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ua(ke(t.hb,t,e))),Ue(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Rh(t,null,t.W),er(t)};et.prototype.close=function(){ba(this.g)};et.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Or(this.g,e)}else this.v?(e={},e.__data__=la(t),Or(this.g,e)):Or(this.g,t)};et.prototype.M=function(){this.g.j=null,delete this.j,ba(this.g),delete this.g,et.Z.M.call(this)};function Fh(t){pa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Fh,pa);function Ph(){ga.call(this),this.status=1}Me(Ph,ga);function qn(t){this.g=t}Me(qn,Lh);qn.prototype.xa=function(){Oe(this.g,"a")};qn.prototype.wa=function(t){Oe(this.g,new Fh(t))};qn.prototype.va=function(t){Oe(this.g,new Ph)};qn.prototype.ua=function(){Oe(this.g,"b")};Ai.prototype.createWebChannel=Ai.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;Wi.NO_ERROR=0;Wi.TIMEOUT=8;Wi.HTTP_ERROR=6;ih.COMPLETE="complete";rh.EventType=Rs;Rs.OPEN="a";Rs.CLOSE="b";Rs.ERROR="c";Rs.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.La;we.prototype.getLastErrorCode=we.prototype.Da;we.prototype.getStatus=we.prototype.ba;we.prototype.getResponseJson=we.prototype.Qa;we.prototype.getResponseText=we.prototype.ga;we.prototype.send=we.prototype.ea;var t0=function(){return new Ai},n0=function(){return zi()},Rr=Wi,s0=ih,i0=fn,Hc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},r0=Fs,Js=rh,o0=we;const Kc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Ou("@firebase/firestore");function qc(){return un.logLevel}function O(t,...e){if(un.logLevel<=ee.DEBUG){const n=e.map(Ia);un.debug(`Firestore (${zn}): ${t}`,...n)}}function At(t,...e){if(un.logLevel<=ee.ERROR){const n=e.map(Ia);un.error(`Firestore (${zn}): ${t}`,...n)}}function zc(t,...e){if(un.logLevel<=ee.WARN){const n=e.map(Ia);un.warn(`Firestore (${zn}): ${t}`,...n)}}function Ia(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+t;throw At(e),new Error(e)}function ve(t,e){t||q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class l0{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new a0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new qe(e)}}class u0{constructor(e,n,s){this.type="FirstParty",this.user=qe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class h0{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new u0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d0{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new f0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=p0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ne(t,e){return t<e?-1:t>e?1:0}function Rn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Qe(0,0))}static max(){return new W(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Cs{construct(e,n,s){return new ge(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const m0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Cs{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return m0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new B(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new B(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ge.fromString(e))}static fromName(e){return new F(ge.fromString(e).popFirst(5))}static empty(){return new F(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ge(e.slice()))}}function y0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new Ut(i,F.empty(),e)}function v0(t){return new Ut(t.readTime,t.key,-1)}class Ut{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ut(W.min(),F.empty(),-1)}static max(){return new Ut(W.max(),F.empty(),-1)}}function w0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==_0)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(i=>i?_.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new _((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new _((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function $s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sa.ot=-1;class Ae{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Se.RED,this.left=i!=null?i:Se.EMPTY,this.right=r!=null?r:Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Se(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gc(this.data.getIterator())}getIteratorFrom(e){return new Gc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Gc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new nn([])}unionWith(e){let n=new _e(We.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const T0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(t){if(ve(!!t),typeof t=="string"){let e=0;const n=T0.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $h(t){const e=t.mapValue.fields.__previous_value__;return Bh(e)?$h(e):e}function Is(t){const e=jt(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ln{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){return t==null}function vo(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bh(t)?4:I0(t)?9007199254740991:10:q()}function wt(t,e){if(t===e)return!0;const n=hn(t);if(n!==hn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=jt(s.timestampValue),o=jt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ye(s.doubleValue),o=ye(i.doubleValue);return r===o?vo(r)===vo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Rn(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Wc(r)!==Wc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wt(r[a],o[a])))return!1;return!0}(t,e);default:return q()}}function As(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function Fn(t,e){if(t===e)return 0;const n=hn(t),s=hn(e);if(n!==s)return ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ye(i.integerValue||i.doubleValue),a=ye(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Qc(t.timestampValue,e.timestampValue);case 4:return Qc(Is(t),Is(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Mn(i),a=Mn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ne(ye(i.latitude),ye(r.latitude));return o!==0?o:ne(ye(i.longitude),ye(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Fn(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ei.mapValue&&r===ei.mapValue)return 0;if(i===ei.mapValue)return 1;if(r===ei.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const p=Fn(o[a[u]],c[l[u]]);if(p!==0)return p}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function Qc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=jt(t),s=jt(e),i=ne(n.seconds,s.seconds);return i!==0?i:ne(n.nanos,s.nanos)}function Sn(t){return wo(t)}function wo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=jt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=wo(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${wo(s.fields[a])}`;return r+"}"}(t.mapValue):q();var e,n}function _o(t){return!!t&&"integerValue"in t}function Da(t){return!!t&&"arrayValue"in t}function Xc(t){return!!t&&"nullValue"in t}function Yc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mr(t){return!!t&&"mapValue"in t}function ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ls(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function I0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Mr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ls(n)}setAll(e){let n=We.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ls(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Mr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Mr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){tr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new yt(ls(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new De(e,0,W.min(),W.min(),yt.empty(),0)}static newFoundDocument(e,n,s){return new De(e,1,n,W.min(),s,0)}static newNoDocument(e,n){return new De(e,2,n,W.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,W.min(),yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Jc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new A0(t,e,n,s,i,r,o)}function xa(t){const e=Z(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Sn(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),nr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Sn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Sn(s)).join(",")),e.ut=n}return e.ut}function S0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Sn(s.value)}`;var s}).join(", ")}]`),nr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Sn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Sn(n)).join(",")),`Target(${e})`}function Na(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!L0(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!wt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!el(t.startAt,e.startAt)&&el(t.endAt,e.endAt)}function Eo(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ge extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new D0(e,n,s):n==="array-contains"?new k0(e,s):n==="in"?new O0(e,s):n==="not-in"?new R0(e,s):n==="array-contains-any"?new M0(e,s):new Ge(e,n,s)}static ct(e,n,s){return n==="in"?new x0(e,s):new N0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Fn(n,this.value)):n!==null&&hn(this.value)===hn(n)&&this.at(Fn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class D0 extends Ge{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.at(n)}}class x0 extends Ge{constructor(e,n){super(e,"in",n),this.keys=Vh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N0 extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Vh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class k0 extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Da(n)&&As(n.arrayValue,this.value)}}class O0 extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class R0 extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class M0 extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Da(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}class Si{constructor(e,n){this.position=e,this.inclusive=n}}class us{constructor(e,n="asc"){this.field=e,this.dir=n}}function L0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Zc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=Fn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function el(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function F0(t,e,n,s,i,r,o,a){return new sr(t,e,n,s,i,r,o,a)}function Uh(t){return new sr(t)}function tl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function P0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function B0(t){for(const e of t.filters)if(e.ht())return e.field;return null}function $0(t){return t.collectionGroup!==null}function Ss(t){const e=Z(t);if(e.lt===null){e.lt=[];const n=B0(e),s=P0(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new us(n)),e.lt.push(new us(We.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new us(We.keyField(),r))}}}return e.lt}function St(t){const e=Z(t);if(!e.ft)if(e.limitType==="F")e.ft=Jc(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ss(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new us(r.field,o))}const s=e.endAt?new Si(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Si(e.startAt.position,e.startAt.inclusive):null;e.ft=Jc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.ft}function bo(t,e,n){return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ir(t,e){return Na(St(t),St(e))&&t.limitType===e.limitType}function jh(t){return`${xa(St(t))}|lt:${t.limitType}`}function To(t){return`Query(target=${S0(St(t))}; limitType=${t.limitType})`}function ka(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Zc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ss(n),s)||n.endAt&&!function(i,r,o){const a=Zc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ss(n),s))}(t,e)}function V0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hh(t){return(e,n)=>{let s=!1;for(const i of Ss(t)){const r=U0(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function U0(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Fn(a,c):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vo(e)?"-0":e}}function H0(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this._=void 0}}function K0(t,e,n){return t instanceof Co?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Di?Kh(t,e):t instanceof xi?qh(t,e):function(s,i){const r=z0(s,i),o=nl(r)+nl(s._t);return _o(r)&&_o(s._t)?H0(o):j0(s.wt,o)}(t,e)}function q0(t,e,n){return t instanceof Di?Kh(t,e):t instanceof xi?qh(t,e):n}function z0(t,e){return t instanceof Io?_o(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Co extends rr{}class Di extends rr{constructor(e){super(),this.elements=e}}function Kh(t,e){const n=zh(e);for(const s of t.elements)n.some(i=>wt(i,s))||n.push(s);return{arrayValue:{values:n}}}class xi extends rr{constructor(e){super(),this.elements=e}}function qh(t,e){let n=zh(e);for(const s of t.elements)n=n.filter(i=>!wt(i,s));return{arrayValue:{values:n}}}class Io extends rr{constructor(e,n){super(),this.wt=e,this._t=n}}function nl(t){return ye(t.integerValue||t.doubleValue)}function zh(t){return Da(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function W0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Di&&s instanceof Di||n instanceof xi&&s instanceof xi?Rn(n.elements,s.elements,wt):n instanceof Io&&s instanceof Io?wt(n._t,s._t):n instanceof Co&&s instanceof Co}(t.transform,e.transform)}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ai(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oa{}function Wh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Q0(t.key,sn.none()):new Ra(t.key,t.data,sn.none());{const n=t.data,s=yt.empty();let i=new _e(We.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new or(t.key,s,new nn(i.toArray()),sn.none())}}function G0(t,e,n){t instanceof Ra?function(s,i,r){const o=s.value.clone(),a=il(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof or?function(s,i,r){if(!ai(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=il(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Gh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function hs(t,e,n,s){return t instanceof Ra?function(i,r,o,a){if(!ai(i.precondition,r))return o;const c=i.value.clone(),l=rl(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof or?function(i,r,o,a){if(!ai(i.precondition,r))return o;const c=rl(i.fieldTransforms,a,r),l=r.data;return l.setAll(Gh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ai(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function sl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rn(n,s,(i,r)=>W0(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends Oa{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class or extends Oa{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Gh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function il(t,e,n){const s=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,q0(o,a,n[i]))}return s}function rl(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,K0(r,o,e))}return s}class Q0 extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,G;function Qh(t){if(t===void 0)return At("GRPC error has no .code"),A.UNKNOWN;switch(t){case me.OK:return A.OK;case me.CANCELLED:return A.CANCELLED;case me.UNKNOWN:return A.UNKNOWN;case me.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case me.INTERNAL:return A.INTERNAL;case me.UNAVAILABLE:return A.UNAVAILABLE;case me.UNAUTHENTICATED:return A.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case me.NOT_FOUND:return A.NOT_FOUND;case me.ALREADY_EXISTS:return A.ALREADY_EXISTS;case me.PERMISSION_DENIED:return A.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case me.ABORTED:return A.ABORTED;case me.OUT_OF_RANGE:return A.OUT_OF_RANGE;case me.UNIMPLEMENTED:return A.UNIMPLEMENTED;case me.DATA_LOSS:return A.DATA_LOSS;default:return q()}}(G=me||(me={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return b0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new Ae(F.comparator);function Ht(){return Y0}const Xh=new Ae(F.comparator);function ss(...t){let e=Xh;for(const n of t)e=e.insert(n.key,n);return e}function J0(t){let e=Xh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zt(){return fs()}function Yh(){return fs()}function fs(){return new Wn(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ae(F.comparator);const Z0=new _e(F.comparator);function Y(...t){let e=Z0;for(const n of t)e=e.add(n);return e}const ew=new _e(ne);function Jh(){return ew}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Vs.createSynthesizedTargetChangeForCurrentChange(e,n)),new ar(W.min(),s,Jh(),Ht(),Y())}}class Vs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Vs(Re.EMPTY_BYTE_STRING,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,s,i){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=i}}class Zh{constructor(e,n){this.targetId=e,this.It=n}}class ef{constructor(e,n,s=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ol{constructor(){this.Tt=0,this.Et=cl(),this.At=Re.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Y(),n=Y(),s=Y();return this.Et.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:q()}}),new Vs(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=cl()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class tw{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Ht(),this.Bt=al(),this.Lt=new _e(ne)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,s=e.It.count,i=this.Ht(n);if(i){const r=i.target;if(Eo(r))if(s===0){const o=new F(r.path);this.Kt(n,o,De.newNoDocument(o,W.min()))}else ve(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&Eo(a.target)){const c=new F(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,De.newNoDocument(c,e))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=Y();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const i=new ar(e,n,this.Lt,this.$t,s);return this.$t=Ht(),this.Bt=al(),this.Lt=new _e(ne),i}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ol,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new _e(ne),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new ol),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function al(){return new Ae(F.comparator)}function cl(){return new Ae(F.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class iw{constructor(e,n){this.databaseId=e,this.dt=n}}function rw(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ow(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ds(t){return ve(!!t),W.fromTimestamp(function(e){const n=jt(e);return new Qe(n.seconds,n.nanos)}(t))}function aw(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tf(t){const e=ge.fromString(t);return ve(rf(e)),e}function Lr(t,e){const n=tf(e);if(n.get(1)!==t.databaseId.projectId)throw new B(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(nf(n))}function Ao(t,e){return aw(t.databaseId,e)}function cw(t){const e=tf(t);return e.length===4?ge.emptyPath():nf(e)}function ll(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nf(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.dt?(ve(l===void 0||typeof l=="string"),Re.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),Re.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Qh(c.code);return new B(l,c.message||"")}(o);n=new ef(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Lr(t,s.document.name),r=Ds(s.document.updateTime),o=new yt({mapValue:{fields:s.document.fields}}),a=De.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ci(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Lr(t,s.document),r=s.readTime?Ds(s.readTime):W.min(),o=De.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ci([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Lr(t,s.document),r=s.removedTargetIds||[];n=new ci([],r,i,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new X0(i),o=s.targetId;n=new Zh(o,r)}}return n}function uw(t,e){return{documents:[Ao(t,e.path)]}}function hw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ao(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ao(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Yc(h.value))return{unaryFilter:{field:mn(h.field),op:"IS_NAN"}};if(Xc(h.value))return{unaryFilter:{field:mn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Yc(h.value))return{unaryFilter:{field:mn(h.field),op:"IS_NOT_NAN"}};if(Xc(h.value))return{unaryFilter:{field:mn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(h.field),op:gw(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:mn(u.field),direction:pw(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.dt||nr(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fw(t){let e=cw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=sf(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new us(En(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,nr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,p=u.values||[];return new Si(p,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,p=u.values||[];return new Si(p,h)}(n.endAt)),F0(e,i,o,r,a,"F",c,l)}function dw(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function sf(t){return t?t.unaryFilter!==void 0?[yw(t)]:t.fieldFilter!==void 0?[mw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>sf(e)).reduce((e,n)=>e.concat(n)):q():[]}function pw(t){return nw[t]}function gw(t){return sw[t]}function mn(t){return{fieldPath:t.canonicalString()}}function En(t){return We.fromServerFormat(t.fieldPath)}function mw(t){return Ge.create(En(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}function yw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=En(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=En(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=En(t.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=En(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}function rf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&G0(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Yh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Wh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(n,s)=>sl(n,s))&&Rn(this.baseMutations,e.baseMutations,(n,s)=>sl(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s,i,r=W.min(),o=W.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.ne=e}}function Ew(t){const e=fw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.ze=new Tw}addToCollectionParentIndex(e,n){return this.ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Ut.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class Tw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new _e(ge.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new _e(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Pn(0)}static Rn(){return new Pn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this.changes=new Wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&hs(s.mutation,i,nn.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const i=Zt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ss();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ht();const o=fs(),a=fs();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof or)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),hs(u.mutation,l,u.mutation.getFieldMask(),Qe.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Iw(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fs();let i=new Ae((o,a)=>o-a),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||nn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||Y()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Yh();u.forEach(p=>{if(!r.has(p)){const m=Wh(n.get(p),s.get(p));m!==null&&h.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):_.resolve(Zt());let a=-1,c=r;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?_.resolve():this.getBaseDocument(e,u,h).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,Y())).next(u=>({batchId:a,changes:J0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(s=>{let i=ss();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ss();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const c=function(l,u){return new sr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,De.newInvalidDocument(l)))});let o=ss();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&hs(l.mutation,c,nn.empty(),Qe.now()),ka(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(De.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return _.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ds(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Ew(s.bundledQuery),readTime:Ds(s.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.overlays=new Ae(F.comparator),this.Xn=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zt();return _.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ie(e,n,r)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const i=Zt(),r=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ae((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Zt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Zt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return _.resolve(a)}ie(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ww(n,s));let r=this.Xn.get(n);r===void 0&&(r=Y(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.Zn=new _e(be.ts),this.es=new _e(be.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new be(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new be(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new F(new ge([])),s=new be(n,e),i=new be(n,e+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new F(new ge([])),s=new be(n,e),i=new be(n,e+1);let r=Y();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new be(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return F.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new _e(be.ts)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vw(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return _.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),_.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(ne);return n.forEach(i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),_.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;F.isDocumentKey(r)||(r=r.child(""));const o=new be(new F(r),0);let a=new _e(ne);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),_.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return _.forEach(n.mutations,i=>{const r=new be(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new be(n,0),i=this.ds.firstAfterOrEqual(s);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.ps=e,this.docs=new Ae(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let s=Ht();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():De.newInvalidDocument(i))}),_.resolve(s)}getAllFromCollection(e,n,s){let i=Ht();const r=new F(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||w0(v0(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,s,i){q()}Is(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new kw(this)}getSize(e){return _.resolve(this.size)}}class kw extends Cw{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.persistence=e,this.Ts=new Wn(n=>xa(n),Na),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Es=0,this.As=new Ma,this.targetCount=0,this.Rs=Pn.An()}forEachTarget(e,n){return this.Ts.forEach((s,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),_.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Pn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.vn(n),_.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(r).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Sa(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new Ow(this),this.indexManager=new bw,this.remoteDocumentCache=function(s){return new Nw(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new _w(n),this.Ds=new Sw(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Dw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new xw(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const i=new Mw(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(e,n){return _.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class Mw extends E0{constructor(e){super(),this.currentSequenceNumber=e}}class La{constructor(e){this.persistence=e,this.ks=new Ma,this.Ms=null}static Os(e){return new La(e)}get Fs(){if(this.Ms)return this.Ms;throw q()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),_.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Fs,s=>{const i=F.fromPath(s);return this.$s(e,i).next(r=>{r||n.removeEntry(i,W.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return _.or([()=>_.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(e,n){let s=Y(),i=Y();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fa(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ci(e,n).next(r=>r||this.xi(e,n,i,s)).next(r=>r||this.Ni(e,n))}Ci(e,n){if(tl(n))return _.resolve(null);let s=St(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bo(n,null,"F"),s=St(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Y(...r);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,bo(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,s,i){return tl(n)||i.isEqual(W.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(r=>{const o=this.ki(n,r);return this.Mi(n,o,s,i)?this.Ni(e,n):(qc()<=ee.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),To(n)),this.Oi(e,o,n,y0(i,-1)))})}ki(e,n){let s=new _e(Hh(e));return n.forEach((i,r)=>{ka(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(e,n){return qc()<=ee.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",To(n)),this.Di.getDocumentsMatchingQuery(e,n,Ut.min())}Oi(e,n,s,i){return this.Di.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,s,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Ae(ne),this.Bi=new Wn(r=>xa(r),Na),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Aw(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function Pw(t,e,n,s){return new Fw(t,e,n,s)}async function of(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=Y();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function af(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function Bw(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Vs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(r,u.addedDocuments,h)));let m=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Re.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),i=i.insert(h,m),function(T,k,D){return T.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,m,u)&&a.push(n.Vs.updateTargetData(r,m))});let c=Ht(),l=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push($w(r,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(W.min())){const u=n.Vs.getLastRemoteSnapshotVersion(r).next(h=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.$i=i,r))}function $w(t,e,n){let s=Y(),i=Y();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ht();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function Vw(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,e).next(r=>r?(i=r,_.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new rn(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function So(t,e,n){const s=Z(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$s(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function ul(t,e,n){const s=Z(t);let i=W.min(),r=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Bi.get(l);return h!==void 0?_.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,St(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?r:Y())).next(a=>(Uw(s,V0(e),a),{documents:a,ji:r})))}function Uw(t,e,n){let s=W.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Li.set(e,s)}class hl{constructor(){this.activeTargetIds=Jh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jw{constructor(){this.Fr=new hl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new hl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,i,r){const o=this.oo(e,n);O("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(e,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw zc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,i,r,o){return this.ro(e,n,s,i,r)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}oo(e,n){const s=Kw[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,i){return new Promise((r,o)=>{const a=new o0;a.listenOnce(s0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Rr.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Rr.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new B(A.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const p=function(m){const T=m.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(T)>=0?T:A.UNKNOWN}(h.status);o(new B(p,h.message))}else o(new B(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(A.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(e,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=t0(),o=n0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new r0({})),this.uo(a.initMessageHeaders,n,s),Om()||Mm()||Lm()||Fm()||Pm()||Rm()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");O("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const p=new qw({jr:T=>{h?O("Connection","Not sending because WebChannel is closed:",T):(u||(O("Connection","Opening WebChannel transport."),l.open(),u=!0),O("Connection","WebChannel sending:",T),l.send(T))},Wr:()=>l.close()}),m=(T,k,D)=>{T.listen(k,P=>{try{D(P)}catch(x){setTimeout(()=>{throw x},0)}})};return m(l,Js.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),m(l,Js.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),p.eo())}),m(l,Js.EventType.ERROR,T=>{h||(h=!0,zc("Connection","WebChannel transport errored:",T),p.eo(new B(A.UNAVAILABLE,"The operation could not be completed")))}),m(l,Js.EventType.MESSAGE,T=>{var k;if(!h){const D=T.data[0];ve(!!D);const P=D,x=P.error||((k=P[0])===null||k===void 0?void 0:k.error);if(x){O("Connection","WebChannel received error:",x);const R=x.status;let z=function(he){const Ee=me[he];if(Ee!==void 0)return Qh(Ee)}(R),J=x.message;z===void 0&&(z=A.INTERNAL,J="Unknown error status: "+R+" with message "+x.message),h=!0,p.eo(new B(z,J)),l.close()}else O("Connection","WebChannel received:",D),p.no(D)}}),m(o,i0.STAT_EVENT,T=>{T.stat===Hc.PROXY?O("Connection","Detected buffering proxy"):T.stat===Hc.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){return new iw(t,!0)}class lf{constructor(e,n,s=1e3,i=1.5,r=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,s,i,r,o,a,c){this.js=e,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new lf(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{e(()=>{const i=new B(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gw extends Ww{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=lw(this.wt,e),s=function(i){if(!("targetChange"in i))return W.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?W.min():r.readTime?Ds(r.readTime):W.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=ll(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=Eo(a)?{documents:uw(i,a)}:{query:hw(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=ow(i,r.resumeToken):r.snapshotVersion.compareTo(W.min())>0&&(o.readTime=rw(i,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=dw(this.wt,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=ll(this.wt),n.removeTarget=e,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new B(A.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(A.UNKNOWN,i.toString())})}ao(e,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(A.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class Xw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(At(n),this.su=!1):O("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{js(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.lu.add(4),await Us(c),c._u.set("Unknown"),c.lu.delete(4),await cr(c)}(this))})}),this._u=new Xw(s,i)}}async function cr(t){if(js(t))for(const e of t.fu)await e(!0)}async function Us(t){for(const e of t.fu)await e(!1)}function uf(t,e){const n=Z(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),$a(n)?Ba(n):Gn(n).Co()&&Pa(n,e))}function hf(t,e){const n=Z(t),s=Gn(n);n.hu.delete(e),s.Co()&&ff(n,e),n.hu.size===0&&(s.Co()?s.ko():js(n)&&n._u.set("Unknown"))}function Pa(t,e){t.wu.Nt(e.targetId),Gn(t).Qo(e)}function ff(t,e){t.wu.Nt(e),Gn(t).jo(e)}function Ba(t){t.wu=new tw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Gn(t).start(),t._u.iu()}function $a(t){return js(t)&&!Gn(t).Do()&&t.hu.size>0}function js(t){return Z(t).lu.size===0}function df(t){t.wu=void 0}async function Jw(t){t.hu.forEach((e,n)=>{Pa(t,e)})}async function Zw(t,e){df(t),$a(t)?(t._u.uu(e),Ba(t)):t._u.set("Unknown")}async function e_(t,e,n){if(t._u.set("Online"),e instanceof ef&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await dl(t,s)}else if(e instanceof ci?t.wu.Ut(e):e instanceof Zh?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(W.min()))try{const s=await af(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(c);l&&i.hu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(Re.EMPTY_BYTE_STRING,c.snapshotVersion)),ff(i,a);const l=new rn(c.target,a,1,c.sequenceNumber);Pa(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await dl(t,s)}}async function dl(t,e,n){if(!$s(e))throw e;t.lu.add(1),await Us(t),t._u.set("Offline"),n||(n=()=>af(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await cr(t)})}async function pl(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=js(n);n.lu.add(3),await Us(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await cr(n)}async function t_(t,e){const n=Z(t);e?(n.lu.delete(2),await cr(n)):e||(n.lu.add(2),await Us(n),n._u.set("Unknown"))}function Gn(t){return t.mu||(t.mu=function(e,n,s){const i=Z(e);return i.tu(),new Gw(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:Jw.bind(null,t),Jr:Zw.bind(null,t),Go:e_.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),$a(t)?Ba(t):t._u.set("Unknown")):(await t.mu.stop(),df(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Va(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pf(t,e){if(At("AsyncQueue",`${e}: ${t}`),$s(t))return new B(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||F.comparator(n.key,s.key):(n,s)=>F.comparator(n.key,s.key),this.keyedMap=ss(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Dn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Dn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Dn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.yu=new Ae(F.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):q():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Bn{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Bn(e,n,Dn.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ir(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.Iu=void 0,this.listeners=[]}}class s_{constructor(){this.queries=new Wn(e=>jh(e),ir),this.onlineState="Unknown",this.Tu=new Set}}async function i_(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new n_),i)try{r.Iu=await n.onListen(s)}catch(o){const a=pf(o,`Initialization of query '${To(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Ua(n)}async function r_(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function o_(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Ua(n)}function a_(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ua(t){t.Tu.forEach(e=>{e.next()})}class c_{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Bn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.key=e}}class mf{constructor(e){this.key=e}}class l_{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Y(),this.mutatedKeys=Y(),this.Lu=Hh(e),this.Uu=new Dn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new gl,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=ka(this.query,h)?h:null,T=!!p&&this.mutatedKeys.has(p.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;p&&m?p.data.isEqual(m.data)?T!==k&&(s.track({type:3,doc:m}),D=!0):this.Qu(p,m)||(s.track({type:2,doc:m}),D=!0,(c&&this.Lu(m,c)>0||l&&this.Lu(m,l)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),D=!0):p&&!m&&(s.track({type:1,doc:p}),D=!0,(c||l)&&(a=!0)),D&&(m?(o=o.add(m),r=k?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:r}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((l,u)=>function(h,p){const m=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return m(h)-m(p)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new Bn(this.query,e.Uu,i,r,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new gl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Y(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new mf(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new gf(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=Y();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Bn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class u_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class h_{constructor(e){this.key=e,this.Xu=!1}}class f_{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Wn(a=>jh(a),ir),this.ec=new Map,this.nc=new Set,this.sc=new Ae(F.comparator),this.ic=new Map,this.rc=new Ma,this.oc={},this.uc=new Map,this.cc=Pn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function d_(t,e){const n=__(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await Vw(n.localStore,St(e));n.isPrimaryClient&&uf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await p_(n,e,s,a==="current")}return i}async function p_(t,e,n,s){t.hc=(u,h,p)=>async function(m,T,k,D){let P=T.view.Ku(k);P.Mi&&(P=await ul(m.localStore,T.query,!1).then(({documents:z})=>T.view.Ku(z,P)));const x=D&&D.targetChanges.get(T.targetId),R=T.view.applyChanges(P,m.isPrimaryClient,x);return yl(m,T.targetId,R.zu),R.snapshot}(t,u,h,p);const i=await ul(t.localStore,e,!0),r=new l_(e,i.ji),o=r.Ku(i.documents),a=Vs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);yl(t,n,c.zu);const l=new u_(e,n,r);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function g_(t,e){const n=Z(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!ir(r,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await So(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),hf(n.remoteStore,s.targetId),Do(n,s.targetId)}).catch(Aa)):(Do(n,s.targetId),await So(n.localStore,s.targetId,!0))}async function yf(t,e){const n=Z(t);try{const s=await Bw(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ve(o.Xu):i.removedDocuments.size>0&&(ve(o.Xu),o.Xu=!1))}),await wf(n,s,e)}catch(s){await Aa(s)}}function ml(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Z(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Ua(a)}(s.eventManager,e),i.length&&s.Zu.Go(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function m_(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let o=new Ae(F.comparator);o=o.insert(r,De.newNoDocument(r,W.min()));const a=Y().add(r),c=new ar(W.min(),new Map,new _e(ne),o,a);await yf(s,c),s.sc=s.sc.remove(r),s.ic.delete(e),ja(s)}else await So(s.localStore,e,!1).then(()=>Do(s,e,n)).catch(Aa)}function Do(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||vf(t,s)})}function vf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(hf(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),ja(t))}function yl(t,e,n){for(const s of n)s instanceof gf?(t.rc.addReference(s.key,e),y_(t,s)):s instanceof mf?(O("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||vf(t,s.key)):q()}function y_(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.nc.add(s),ja(t))}function ja(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new F(ge.fromString(e)),s=t.cc.next();t.ic.set(s,new h_(n)),t.sc=t.sc.insert(n,s),uf(t.remoteStore,new rn(St(Uh(n.path)),s,2,Sa.ot))}}async function wf(t,e,n){const s=Z(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=Fa.Vi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,h=>_.forEach(h.Pi,p=>l.persistence.referenceDelegate.addReference(u,h.targetId,p)).next(()=>_.forEach(h.vi,p=>l.persistence.referenceDelegate.removeReference(u,h.targetId,p)))))}catch(u){if(!$s(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const p=l.$i.get(h),m=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(m);l.$i=l.$i.insert(h,T)}}}(s.localStore,r))}async function v_(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await of(n.localStore,e);n.currentUser=e,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new B(A.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wf(n,s.Ki)}}function w_(t,e){const n=Z(t),s=n.ic.get(e);if(s&&s.Xu)return Y().add(s.key);{let i=Y();const r=n.ec.get(e);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function __(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=w_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=m_.bind(null,e),e.Zu.Go=o_.bind(null,e.eventManager),e.Zu.lc=a_.bind(null,e.eventManager),e}class E_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=cf(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return Pw(this.persistence,new Lw,e.initialUser,this.wt)}_c(e){return new Rw(La.Os,this.wt)}dc(e){return new jw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class b_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ml(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=v_.bind(null,this.syncEngine),await t_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s_}createDatastore(e){const n=cf(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new zw(i));var i;return function(r,o,a,c){return new Qw(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>ml(this.syncEngine,a,0),o=fl.V()?new fl:new Hw,new Yw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new f_(s,i,r,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);O("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Us(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):At("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=g0.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=pf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function I_(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await of(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function A_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await S_(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>pl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>pl(e.remoteStore,r)),t.onlineComponents=e}async function S_(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await I_(t,new E_)),t.offlineComponents}async function D_(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await A_(t,new b_)),t.onlineComponents}async function x_(t){const e=await D_(t),n=e.eventManager;return n.onListen=d_.bind(null,e.syncEngine),n.onUnlisten=g_.bind(null,e.syncEngine),n}function N_(t,e,n={}){const s=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new T_({next:h=>{r.enqueueAndForget(()=>r_(i,u)),h.fromCache&&a.source==="server"?c.reject(new B(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new c_(o,l,{includeMetadataChanges:!0,Du:!0});return i_(i,u)}(await x_(t),t.asyncQueue,e,n,s)),s.promise}const vl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e,n){if(!n)throw new B(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function O_(t,e,n,s){if(e===!0&&s===!0)throw new B(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wl(t){if(F.isDocumentKey(t))throw new B(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function R_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function _l(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=R_(t);throw new B(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,O_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,e instanceof Ln?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new B(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(i.options.projectId)}(e))}get app(){if(!this._app)throw new B(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new c0;switch(n.type){case"gapi":const s=n.client;return ve(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new h0(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vl.get(e);n&&(O("ComponentProvider","Removing Datastore"),vl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qn(this.firestore,e,this._key)}}class lr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class xn extends lr{constructor(e,n,s){super(e,n,Uh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qn(this.firestore,null,new F(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function M_(t,e,...n){if(t=Hm(t),k_("collection","path",e),t instanceof _f){const s=ge.fromString(e,...n);return wl(s),new xn(t,null,s)}{if(!(t instanceof Qn||t instanceof xn))throw new B(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ge.fromString(e,...n));return wl(s),new xn(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new lf(this,"async_queue_retry"),this.Kc=()=>{const n=Fr();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new tn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!$s(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Va.createAndSchedule(this,e,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ef extends _f{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new L_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||bf(this),this._firestoreClient.terminate()}}function F_(t=Hy()){return By(t,"firestore").getImmediate()}function P_(t){return t._firestoreClient||bf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bf(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new C0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new C_(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ni(Re.fromBase64String(e))}catch(n){throw new B(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ni(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}const $_=new RegExp("[~\\*/\\[\\]]");function V_(t,e,n){if(e.search($_)>=0)throw bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tf(...e.split("."))._internalPath}catch{throw bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new B(A.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(If("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U_ extends Cf{data(){return super.data()}}function If(t,e){return typeof e=="string"?V_(t,e):e instanceof Tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class j_ extends Cf{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(If("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class li extends j_{data(e={}){return super.data(e)}}class H_{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ti(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new li(this._firestore,this._userDataWriter,s.key,s,new ti(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new li(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new li(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:K_(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function K_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{convertValue(e,n="none"){switch(hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const s={};return tr(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new B_(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=$h(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=jt(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ge.fromString(e);ve(rf(s));const i=new Ln(s.get(1),s.get(3)),r=new F(s.popFirst(5));return i.isEqual(n)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class W_ extends z_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ni(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qn(this.firestore,null,n)}}function G_(t){t=_l(t,lr);const e=_l(t.firestore,Ef),n=P_(e),s=new W_(e);return q_(t._query),N_(n,t._query).then(i=>new H_(e,s,t,i))}(function(t,e=!0){(function(n){zn=n})(Uy),yi(new ys("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Ef(i,new l0(n.getProvider("auth-internal")),new d0(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),An(Kc,"3.4.14",t),An(Kc,"3.4.14","esm2017")})();const Q_=t=>(ht("data-v-eca5cdb6"),t=t(),ft(),t),X_={id:"containerEvents"},Y_=Q_(()=>K("div",{id:"topBar"},[K("div",{class:"actionButton",style:{"background-color":"#FF5E57"}}),K("div",{class:"actionButton",style:{"background-color":"#FFBB2E"}}),K("div",{class:"actionButton",style:{"background-color":"#38C149"}}),K("p",null,"Events")],-1)),J_={__name:"LeftEvents",async setup(t){let e,n;const i=jy({apiKey:"AIzaSyAYgohUcOtGwgtDhdXlec99BJQ92rveJhk",authDomain:"landingpage-d70d6.firebaseapp.com",projectId:"landingpage-d70d6",storageBucket:"landingpage-d70d6.appspot.com",messagingSenderId:"356778437957",appId:"1:356778437957:web:6fb2e70693bc256952622c",measurementId:"G-F39TDMTB7G"}),r=F_(i);async function o(c){const l=M_(c,"events");return(await G_(l)).docs.map(p=>p.data())}let a=([e,n]=xp(()=>o(r)),e=await e,n(),e);return(c,l)=>(Ne(),Xe("div",X_,[Y_,(Ne(!0),Xe(ze,null,Zd(Hl(a),u=>(Ne(),wu(Sm,{key:u.id,month:u.month,day:u.day,time:u.time,event:u.description},null,8,["month","day","time","event"]))),128))]))}},Z_=tt(J_,[["__scopeId","data-v-eca5cdb6"]]),eE={__name:"App",setup(t){return(e,n)=>(Ne(),Xe(ze,null,[pe(vm),(Ne(),wu(kd,null,{default:Zl(()=>[pe(Z_)]),_:1})),pe(Em),pe(Yg)],64))}};const tE=Zp(eE);tE.mount("#app");
