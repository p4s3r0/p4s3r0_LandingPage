(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function xo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nf=xo(xf);function Cl(t){return!!t||t===""}function No(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?Rf(s):No(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(Ie(t))return t}}const kf=/;(?![^(]*\))/g,Of=/:(.+)/;function Rf(t){const e={};return t.split(kf).forEach(n=>{if(n){const s=n.split(Of);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ko(t){let e="";if(Ce(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=ko(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zn=t=>Ce(t)?t:t==null?"":U(t)||Ie(t)&&(t.toString===Dl||!H(t.toString))?JSON.stringify(t,Il,2):String(t),Il=(t,e)=>e&&e.__v_isRef?Il(t,e.value):bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Al(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!U(e)&&!xl(e)?String(e):e,ae={},En=[],lt=()=>{},Mf=()=>!1,Lf=/^on[^a-z]/,ki=t=>Lf.test(t),Oo=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ff=Object.prototype.hasOwnProperty,Q=(t,e)=>Ff.call(t,e),U=Array.isArray,bn=t=>Oi(t)==="[object Map]",Al=t=>Oi(t)==="[object Set]",H=t=>typeof t=="function",Ce=t=>typeof t=="string",Mo=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Sl=t=>Ie(t)&&H(t.then)&&H(t.catch),Dl=Object.prototype.toString,Oi=t=>Dl.call(t),Pf=t=>Oi(t).slice(8,-1),xl=t=>Oi(t)==="[object Object]",Lo=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bf=/-(\w)/g,xn=Ri(t=>t.replace(Bf,(e,n)=>n?n.toUpperCase():"")),$f=/\B([A-Z])/g,$n=Ri(t=>t.replace($f,"-$1").toLowerCase()),Nl=Ri(t=>t.charAt(0).toUpperCase()+t.slice(1)),pr=Ri(t=>t?`on${Nl(t)}`:""),ui=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},kl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qa;const Vf=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class Uf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&gt&&(this.parent=gt,this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function jf(t,e=gt){e&&e.active&&e.effects.push(t)}const Fo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ol=t=>(t.w&Pt)>0,Rl=t=>(t.n&Pt)>0,Hf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},Kf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ol(i)&&!Rl(i)?i.delete(t):e[n++]=i,i.w&=~Pt,i.n&=~Pt}e.length=n}},Pr=new WeakMap;let es=0,Pt=1;const Br=30;let ct;const Jt=Symbol(""),$r=Symbol("");class Po{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jf(this,s)}run(){if(!this.active)return this.fn();let e=ct,n=Mt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,Mt=!0,Pt=1<<++es,es<=Br?Hf(this):Xa(this),this.fn()}finally{es<=Br&&Kf(this),Pt=1<<--es,ct=this.parent,Mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(Xa(this),this.onStop&&this.onStop(),this.active=!1)}}function Xa(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mt=!0;const Ml=[];function Vn(){Ml.push(Mt),Mt=!1}function Un(){const t=Ml.pop();Mt=t===void 0?!0:t}function Ze(t,e,n){if(Mt&&ct){let s=Pr.get(t);s||Pr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Fo()),Ll(i)}}function Ll(t,e){let n=!1;es<=Br?Rl(t)||(t.n|=Pt,n=!Ol(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function Ct(t,e,n,s,i,r){const o=Pr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Lo(n)&&a.push(o.get("length")):(a.push(o.get(Jt)),bn(t)&&a.push(o.get($r)));break;case"delete":U(t)||(a.push(o.get(Jt)),bn(t)&&a.push(o.get($r)));break;case"set":bn(t)&&a.push(o.get(Jt));break}if(a.length===1)a[0]&&Vr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vr(Fo(c))}}function Vr(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&Ya(s);for(const s of n)s.computed||Ya(s)}function Ya(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const qf=xo("__proto__,__v_isRef,__isVue"),Fl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mo)),zf=Bo(),Wf=Bo(!1,!0),Gf=Bo(!0),Ja=Qf();function Qf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=se(this);for(let r=0,o=this.length;r<o;r++)Ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vn();const s=se(this)[e].apply(this,n);return Un(),s}}),t}function Bo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?hd:Ul:e?Vl:$l).get(s))return s;const o=U(s);if(!t&&o&&Q(Ja,i))return Reflect.get(Ja,i,r);const a=Reflect.get(s,i,r);return(Mo(i)?Fl.has(i):qf(i))||(t||Ze(s,"get",i),e)?a:Ve(a)?o&&Lo(i)?a:a.value:Ie(a)?t?jl(a):Uo(a):a}}const Xf=Pl(),Yf=Pl(!0);function Pl(t=!1){return function(n,s,i,r){let o=n[s];if(ds(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&!ds(i)&&(Ur(i)||(i=se(i),o=se(o)),!U(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=U(n)&&Lo(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,i,r);return n===se(r)&&(a?ui(i,o)&&Ct(n,"set",s,i):Ct(n,"add",s,i)),c}}function Jf(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ct(t,"delete",e,void 0),s}function Zf(t,e){const n=Reflect.has(t,e);return(!Mo(e)||!Fl.has(e))&&Ze(t,"has",e),n}function ed(t){return Ze(t,"iterate",U(t)?"length":Jt),Reflect.ownKeys(t)}const Bl={get:zf,set:Xf,deleteProperty:Jf,has:Zf,ownKeys:ed},td={get:Gf,set(t,e){return!0},deleteProperty(t,e){return!0}},nd=Fe({},Bl,{get:Wf,set:Yf}),$o=t=>t,Mi=t=>Reflect.getPrototypeOf(t);function Ks(t,e,n=!1,s=!1){t=t.__v_raw;const i=se(t),r=se(e);n||(e!==r&&Ze(i,"get",e),Ze(i,"get",r));const{has:o}=Mi(i),a=s?$o:n?Ko:Ho;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function qs(t,e=!1){const n=this.__v_raw,s=se(n),i=se(t);return e||(t!==i&&Ze(s,"has",t),Ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function zs(t,e=!1){return t=t.__v_raw,!e&&Ze(se(t),"iterate",Jt),Reflect.get(t,"size",t)}function Za(t){t=se(t);const e=se(this);return Mi(e).has.call(e,t)||(e.add(t),Ct(e,"add",t,t)),this}function ec(t,e){e=se(e);const n=se(this),{has:s,get:i}=Mi(n);let r=s.call(n,t);r||(t=se(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ui(e,o)&&Ct(n,"set",t,e):Ct(n,"add",t,e),this}function tc(t){const e=se(this),{has:n,get:s}=Mi(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ct(e,"delete",t,void 0),r}function nc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Ct(t,"clear",void 0,void 0),n}function Ws(t,e){return function(s,i){const r=this,o=r.__v_raw,a=se(o),c=e?$o:t?Ko:Ho;return!t&&Ze(a,"iterate",Jt),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Gs(t,e,n){return function(...s){const i=this.__v_raw,r=se(i),o=bn(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?$o:e?Ko:Ho;return!e&&Ze(r,"iterate",c?$r:Jt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function kt(t){return function(...e){return t==="delete"?!1:this}}function sd(){const t={get(r){return Ks(this,r)},get size(){return zs(this)},has:qs,add:Za,set:ec,delete:tc,clear:nc,forEach:Ws(!1,!1)},e={get(r){return Ks(this,r,!1,!0)},get size(){return zs(this)},has:qs,add:Za,set:ec,delete:tc,clear:nc,forEach:Ws(!1,!0)},n={get(r){return Ks(this,r,!0)},get size(){return zs(this,!0)},has(r){return qs.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Ws(!0,!1)},s={get(r){return Ks(this,r,!0,!0)},get size(){return zs(this,!0)},has(r){return qs.call(this,r,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Ws(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gs(r,!1,!1),n[r]=Gs(r,!0,!1),e[r]=Gs(r,!1,!0),s[r]=Gs(r,!0,!0)}),[t,n,e,s]}const[id,rd,od,ad]=sd();function Vo(t,e){const n=e?t?ad:od:t?rd:id;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const cd={get:Vo(!1,!1)},ld={get:Vo(!1,!0)},ud={get:Vo(!0,!1)},$l=new WeakMap,Vl=new WeakMap,Ul=new WeakMap,hd=new WeakMap;function fd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dd(t){return t.__v_skip||!Object.isExtensible(t)?0:fd(Pf(t))}function Uo(t){return ds(t)?t:jo(t,!1,Bl,cd,$l)}function pd(t){return jo(t,!1,nd,ld,Vl)}function jl(t){return jo(t,!0,td,ud,Ul)}function jo(t,e,n,s,i){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=dd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Tn(t){return ds(t)?Tn(t.__v_raw):!!(t&&t.__v_isReactive)}function ds(t){return!!(t&&t.__v_isReadonly)}function Ur(t){return!!(t&&t.__v_isShallow)}function Hl(t){return Tn(t)||ds(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function Kl(t){return hi(t,"__v_skip",!0),t}const Ho=t=>Ie(t)?Uo(t):t,Ko=t=>Ie(t)?jl(t):t;function gd(t){Mt&&ct&&(t=se(t),Ll(t.dep||(t.dep=Fo())))}function md(t,e){t=se(t),t.dep&&Vr(t.dep)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function ql(t){return Ve(t)?t.value:t}const yd={get:(t,e,n)=>ql(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function zl(t){return Tn(t)?t:new Proxy(t,yd)}class vd{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Po(e,()=>{this._dirty||(this._dirty=!0,md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=se(this);return gd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wd(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=lt):(s=t.get,i=t.set),new vd(s,i,r||!i,n)}function Lt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){xs(r,e,n)}return i}function rt(t,e,n,s){if(H(t)){const r=Lt(t,e,n,s);return r&&Sl(r)&&r.catch(o=>{xs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(rt(t[r],e,n,s));return i}function xs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Lt(c,null,10,[t,o,a]);return}}_d(t,n,i,s)}function _d(t,e,n,s=!0){console.error(t)}let fi=!1,jr=!1;const Je=[];let bt=0;const is=[];let ts=null,mn=0;const rs=[];let Ot=null,yn=0;const Wl=Promise.resolve();let qo=null,Hr=null;function Ed(t){const e=qo||Wl;return t?e.then(this?t.bind(this):t):e}function bd(t){let e=bt+1,n=Je.length;for(;e<n;){const s=e+n>>>1;ps(Je[s])<t?e=s+1:n=s}return e}function Gl(t){(!Je.length||!Je.includes(t,fi&&t.allowRecurse?bt+1:bt))&&t!==Hr&&(t.id==null?Je.push(t):Je.splice(bd(t.id),0,t),Ql())}function Ql(){!fi&&!jr&&(jr=!0,qo=Wl.then(Zl))}function Td(t){const e=Je.indexOf(t);e>bt&&Je.splice(e,1)}function Xl(t,e,n,s){U(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Ql()}function Cd(t){Xl(t,ts,is,mn)}function Yl(t){Xl(t,Ot,rs,yn)}function Li(t,e=null){if(is.length){for(Hr=e,ts=[...new Set(is)],is.length=0,mn=0;mn<ts.length;mn++)ts[mn]();ts=null,mn=0,Hr=null,Li(t,e)}}function Jl(t){if(Li(),rs.length){const e=[...new Set(rs)];if(rs.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,s)=>ps(n)-ps(s)),yn=0;yn<Ot.length;yn++)Ot[yn]();Ot=null,yn=0}}const ps=t=>t.id==null?1/0:t.id;function Zl(t){jr=!1,fi=!0,Li(t),Je.sort((n,s)=>ps(n)-ps(s));const e=lt;try{for(bt=0;bt<Je.length;bt++){const n=Je[bt];n&&n.active!==!1&&Lt(n,null,14)}}finally{bt=0,Je.length=0,Jl(),fi=!1,qo=null,(Je.length||is.length||rs.length)&&Zl(t)}}function Id(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[u]||ae;p&&(i=n.map(m=>m.trim())),h&&(i=n.map(kl))}let a,c=s[a=pr(e)]||s[a=pr(xn(e))];!c&&r&&(c=s[a=pr($n(e))]),c&&rt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(l,t,6,i)}}function eu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=eu(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):Fe(o,r),s.set(t,o),o)}function Fi(t,e){return!t||!ki(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,$n(e))||Q(t,e))}let vt=null,Pi=null;function di(t){const e=vt;return vt=t,Pi=t&&t.type.__scopeId||null,e}function ht(t){Pi=t}function ft(){Pi=null}function tu(t,e=vt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&dc(-1);const r=di(e),o=t(...i);return di(r),s._d&&dc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function mr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:T,inheritAttrs:k}=t;let D,P;const x=di(t);try{if(n.shapeFlag&4){const z=i||s;D=at(u.call(z,z,h,r,m,p,T)),P=c}else{const z=e;D=at(z.length>1?z(r,{attrs:c,slots:a,emit:l}):z(r,null)),P=e.props?c:Sd(c)}}catch(z){os.length=0,xs(z,t,1),D=pe(ut)}let R=D;if(P&&k!==!1){const z=Object.keys(P),{shapeFlag:J}=R;z.length&&J&7&&(o&&z.some(Oo)&&(P=Dd(P,o)),R=Bt(R,P))}return n.dirs&&(R=Bt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,di(x),D}function Ad(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(bu(s)){if(s.type!==ut||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Sd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ki(n))&&((e||(e={}))[n]=t[n]);return e},Dd=(t,e)=>{const n={};for(const s in t)(!Oo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function xd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?sc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==s[p]&&!Fi(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?sc(s,o,l):!0:!!o;return!1}function sc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Fi(n,r))return!0}return!1}function zo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nd=t=>t.__isSuspense,kd={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,c,l){t==null?Rd(e,n,s,i,r,o,a,c,l):Md(t,e,n,s,i,o,a,c,l)},hydrate:Ld,create:Wo,normalize:Fd},Od=kd;function gs(t,e){const n=t.props&&t.props[e];H(n)&&n()}function Rd(t,e,n,s,i,r,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),p=t.suspense=Wo(t,i,s,e,h,n,r,o,a,c);l(null,p.pendingBranch=t.ssContent,h,null,s,p,r,o),p.deps>0?(gs(t,"onPending"),gs(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,r,o),Cn(p,t.ssFallback)):p.resolve()}function Md(t,e,n,s,i,r,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:T,pendingBranch:k,isInFallback:D,isHydrating:P}=h;if(k)h.pendingBranch=p,mt(p,k)?(c(k,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():D&&(c(T,m,n,s,i,null,r,o,a),Cn(h,m))):(h.pendingId++,P?(h.isHydrating=!1,h.activeBranch=k):l(k,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),D?(c(null,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(c(T,m,n,s,i,null,r,o,a),Cn(h,m))):T&&mt(p,T)?(c(T,p,n,s,i,h,r,o,a),h.resolve(!0)):(c(null,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(T&&mt(p,T))c(T,p,n,s,i,h,r,o,a),Cn(h,p);else if(gs(e,"onPending"),h.pendingBranch=p,h.pendingId++,c(null,p,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:x,pendingId:R}=h;x>0?setTimeout(()=>{h.pendingId===R&&h.fallback(m)},x):x===0&&h.fallback(m)}}function Wo(t,e,n,s,i,r,o,a,c,l,u=!1){const{p:h,m:p,um:m,n:T,o:{parentNode:k,remove:D}}=l,P=kl(t.props&&t.props.timeout),x={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof P=="number"?P:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1){const{vnode:z,activeBranch:J,pendingBranch:he,pendingId:Ee,effects:j,parentComponent:te,container:oe}=x;if(x.isHydrating)x.isHydrating=!1;else if(!R){const nt=J&&he.transition&&he.transition.mode==="out-in";nt&&(J.transition.afterLeave=()=>{Ee===x.pendingId&&p(he,oe,xt,0)});let{anchor:xt}=x;J&&(xt=T(J),m(J,te,x,!0)),nt||p(he,oe,xt,0)}Cn(x,he),x.pendingBranch=null,x.isInFallback=!1;let fe=x.parent,He=!1;for(;fe;){if(fe.pendingBranch){fe.effects.push(...j),He=!0;break}fe=fe.parent}He||Yl(j),x.effects=[],gs(z,"onResolve")},fallback(R){if(!x.pendingBranch)return;const{vnode:z,activeBranch:J,parentComponent:he,container:Ee,isSVG:j}=x;gs(z,"onFallback");const te=T(J),oe=()=>{!x.isInFallback||(h(null,R,Ee,te,he,null,j,a,c),Cn(x,R))},fe=R.transition&&R.transition.mode==="out-in";fe&&(J.transition.afterLeave=oe),x.isInFallback=!0,m(J,he,null,!0),fe||oe()},move(R,z,J){x.activeBranch&&p(x.activeBranch,R,z,J),x.container=R},next(){return x.activeBranch&&T(x.activeBranch)},registerDep(R,z){const J=!!x.pendingBranch;J&&x.deps++;const he=R.vnode.el;R.asyncDep.catch(Ee=>{xs(Ee,R,0)}).then(Ee=>{if(R.isUnmounted||x.isUnmounted||x.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:j}=R;Yr(R,Ee,!1),he&&(j.el=he);const te=!he&&R.subTree.el;z(R,j,k(he||R.subTree.el),he?null:T(R.subTree),x,o,c),te&&D(te),zo(R,j.el),J&&--x.deps===0&&x.resolve()})},unmount(R,z){x.isUnmounted=!0,x.activeBranch&&m(x.activeBranch,n,R,z),x.pendingBranch&&m(x.pendingBranch,n,R,z)}};return x}function Ld(t,e,n,s,i,r,o,a,c){const l=e.suspense=Wo(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,r,o);return l.deps===0&&l.resolve(),u}function Fd(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=ic(s?n.default:n),t.ssFallback=s?ic(n.fallback):pe(ut)}function ic(t){let e;if(H(t)){const n=Nn&&t._c;n&&(t._d=!1,Te()),t=t(),n&&(t._d=!0,e=it,wu())}return U(t)&&(t=Ad(t)),t=at(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Pd(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Yl(t)}function Cn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,zo(s,i))}function Bd(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function yr(t,e,n=!1){const s=Ne||vt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const rc={};function vr(t,e,n){return nu(t,e,n)}function nu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){const a=Ne;let c,l=!1,u=!1;if(Ve(t)?(c=()=>t.value,l=Ur(t)):Tn(t)?(c=()=>t,s=!0):U(t)?(u=!0,l=t.some(P=>Tn(P)||Ur(P)),c=()=>t.map(P=>{if(Ve(P))return P.value;if(Tn(P))return vn(P);if(H(P))return Lt(P,a,2)})):H(t)?e?c=()=>Lt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),rt(t,a,3,[p])}:c=lt,e&&s){const P=c;c=()=>vn(P())}let h,p=P=>{h=D.onStop=()=>{Lt(P,a,4)}};if(ms)return p=lt,e?n&&rt(e,a,3,[c(),u?[]:void 0,p]):c(),lt;let m=u?[]:rc;const T=()=>{if(!!D.active)if(e){const P=D.run();(s||l||(u?P.some((x,R)=>ui(x,m[R])):ui(P,m)))&&(h&&h(),rt(e,a,3,[P,m===rc?void 0:m,p]),m=P)}else D.run()};T.allowRecurse=!!e;let k;i==="sync"?k=T:i==="post"?k=()=>qe(T,a&&a.suspense):k=()=>Cd(T);const D=new Po(c,k);return e?n?T():m=D.run():i==="post"?qe(D.run.bind(D),a&&a.suspense):D.run(),()=>{D.stop(),a&&a.scope&&Ro(a.scope.effects,D)}}function $d(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?su(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=Ne;kn(this);const a=nu(i,r.bind(s),n);return o?kn(o):Zt(),a}function su(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function vn(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))vn(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)vn(t[n],e);else if(Al(t)||bn(t))t.forEach(n=>{vn(n,e)});else if(xl(t))for(const n in t)vn(t[n],e);return t}function Vd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return au(()=>{t.isMounted=!0}),cu(()=>{t.isUnmounting=!0}),t}const st=[Function,Array],Ud={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:st,onEnter:st,onAfterEnter:st,onEnterCancelled:st,onBeforeLeave:st,onLeave:st,onAfterLeave:st,onLeaveCancelled:st,onBeforeAppear:st,onAppear:st,onAfterAppear:st,onAppearCancelled:st},setup(t,{slots:e}){const n=Cp(),s=Vd();let i;return()=>{const r=e.default&&ru(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const k of r)if(k.type!==ut){o=k;break}}const a=se(t),{mode:c}=a;if(s.isLeaving)return wr(o);const l=oc(o);if(!l)return wr(o);const u=Kr(l,a,s,n);qr(l,u);const h=n.subTree,p=h&&oc(h);let m=!1;const{getTransitionKey:T}=l.type;if(T){const k=T();i===void 0?i=k:k!==i&&(i=k,m=!0)}if(p&&p.type!==ut&&(!mt(l,p)||m)){const k=Kr(p,a,s,n);if(qr(p,k),c==="out-in")return s.isLeaving=!0,k.afterLeave=()=>{s.isLeaving=!1,n.update()},wr(o);c==="in-out"&&l.type!==ut&&(k.delayLeave=(D,P,x)=>{const R=iu(s,p);R[String(p.key)]=p,D._leaveCb=()=>{P(),D._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},jd=Ud;function iu(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Kr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:T,onBeforeAppear:k,onAppear:D,onAfterAppear:P,onAppearCancelled:x}=e,R=String(t.key),z=iu(n,t),J=(j,te)=>{j&&rt(j,s,9,te)},he=(j,te)=>{const oe=te[1];J(j,te),U(j)?j.every(fe=>fe.length<=1)&&oe():j.length<=1&&oe()},Ee={mode:r,persisted:o,beforeEnter(j){let te=a;if(!n.isMounted)if(i)te=k||a;else return;j._leaveCb&&j._leaveCb(!0);const oe=z[R];oe&&mt(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),J(te,[j])},enter(j){let te=c,oe=l,fe=u;if(!n.isMounted)if(i)te=D||c,oe=P||l,fe=x||u;else return;let He=!1;const nt=j._enterCb=xt=>{He||(He=!0,xt?J(fe,[j]):J(oe,[j]),Ee.delayedLeave&&Ee.delayedLeave(),j._enterCb=void 0)};te?he(te,[j,nt]):nt()},leave(j,te){const oe=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return te();J(h,[j]);let fe=!1;const He=j._leaveCb=nt=>{fe||(fe=!0,te(),nt?J(T,[j]):J(m,[j]),j._leaveCb=void 0,z[oe]===t&&delete z[oe])};z[oe]=t,p?he(p,[j,He]):He()},clone(j){return Kr(j,e,n,s)}};return Ee}function wr(t){if(Bi(t))return t=Bt(t),t.children=null,t}function oc(t){return Bi(t)?t.children?t.children[0]:void 0:t}function qr(t,e){t.shapeFlag&6&&t.component?qr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ru(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===We?(o.patchFlag&128&&i++,s=s.concat(ru(o.children,e,a))):(e||o.type!==ut)&&s.push(a!=null?Bt(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const si=t=>!!t.type.__asyncLoader,Bi=t=>t.type.__isKeepAlive;function Hd(t,e){ou(t,"a",e)}function Kd(t,e){ou(t,"da",e)}function ou(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($i(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Bi(i.parent.vnode)&&qd(s,e,n,i),i=i.parent}}function qd(t,e,n,s){const i=$i(e,t,s,!0);lu(()=>{Ro(s[e],i)},n)}function $i(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vn(),kn(n);const a=rt(e,n,t,o);return Zt(),Un(),a});return s?i.unshift(r):i.push(r),r}}const Dt=t=>(e,n=Ne)=>(!ms||t==="sp")&&$i(t,e,n),zd=Dt("bm"),au=Dt("m"),Wd=Dt("bu"),Gd=Dt("u"),cu=Dt("bum"),lu=Dt("um"),Qd=Dt("sp"),Xd=Dt("rtg"),Yd=Dt("rtc");function Jd(t,e=Ne){$i("ec",t,e)}function Kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Vn(),rt(c,n,8,[t.el,a,t,e]),Un())}}const Zd=Symbol();function ep(t,e,n,s){let i;const r=n&&n[s];if(U(t)||Ce(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ie(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const zr=t=>t?Iu(t)?Yo(t)||t.proxy:zr(t.parent):null,pi=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zr(t.parent),$root:t=>zr(t.root),$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>Gl(t.update)),$nextTick:t=>t.n||(t.n=Ed.bind(t.proxy)),$watch:t=>$d.bind(t)}),tp={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ae&&Q(s,e))return o[e]=1,s[e];if(i!==ae&&Q(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,r[e];if(n!==ae&&Q(n,e))return o[e]=4,n[e];Wr&&(o[e]=0)}}const u=pi[e];let h,p;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ae&&Q(i,e)?(i[e]=n,!0):s!==ae&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&Q(t,o)||e!==ae&&Q(e,o)||(a=r[0])&&Q(a,o)||Q(s,o)||Q(pi,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wr=!0;function np(t){const e=hu(t),n=t.proxy,s=t.ctx;Wr=!1,e.beforeCreate&&ac(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:T,activated:k,deactivated:D,beforeDestroy:P,beforeUnmount:x,destroyed:R,unmounted:z,render:J,renderTracked:he,renderTriggered:Ee,errorCaptured:j,serverPrefetch:te,expose:oe,inheritAttrs:fe,components:He,directives:nt,filters:xt}=e;if(l&&sp(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const ce=o[de];H(ce)&&(s[de]=ce.bind(n))}if(i){const de=i.call(n,n);Ie(de)&&(t.data=Uo(de))}if(Wr=!0,r)for(const de in r){const ce=r[de],_t=H(ce)?ce.bind(n,n):H(ce.get)?ce.get.bind(n,n):lt,hr=!H(ce)&&H(ce.set)?ce.set.bind(n):lt,Xn=Np({get:_t,set:hr});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>Xn.value,set:fn=>Xn.value=fn})}if(a)for(const de in a)uu(a[de],s,n,de);if(c){const de=H(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ce=>{Bd(ce,de[ce])})}u&&ac(u,t,"c");function Ke(de,ce){U(ce)?ce.forEach(_t=>de(_t.bind(n))):ce&&de(ce.bind(n))}if(Ke(zd,h),Ke(au,p),Ke(Wd,m),Ke(Gd,T),Ke(Hd,k),Ke(Kd,D),Ke(Jd,j),Ke(Yd,he),Ke(Xd,Ee),Ke(cu,x),Ke(lu,z),Ke(Qd,te),U(oe))if(oe.length){const de=t.exposed||(t.exposed={});oe.forEach(ce=>{Object.defineProperty(de,ce,{get:()=>n[ce],set:_t=>n[ce]=_t})})}else t.exposed||(t.exposed={});J&&t.render===lt&&(t.render=J),fe!=null&&(t.inheritAttrs=fe),He&&(t.components=He),nt&&(t.directives=nt)}function sp(t,e,n=lt,s=!1){U(t)&&(t=Gr(t));for(const i in t){const r=t[i];let o;Ie(r)?"default"in r?o=yr(r.from||i,r.default,!0):o=yr(r.from||i):o=yr(r),Ve(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ac(t,e,n){rt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function uu(t,e,n,s){const i=s.includes(".")?su(n,s):()=>n[s];if(Ce(t)){const r=e[t];H(r)&&vr(i,r)}else if(H(t))vr(i,t.bind(n));else if(Ie(t))if(U(t))t.forEach(r=>uu(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&vr(i,r,t)}}function hu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>gi(c,l,o,!0)),gi(c,e,o)),r.set(e,c),c}function gi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&gi(t,r,n,!0),i&&i.forEach(o=>gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ip[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ip={data:cc,props:zt,emits:zt,methods:zt,computed:zt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:zt,directives:zt,watch:op,provide:cc,inject:rp};function cc(t,e){return e?t?function(){return Fe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function rp(t,e){return zt(Gr(t),Gr(e))}function Gr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function zt(t,e){return t?Fe(Fe(Object.create(null),t),e):e}function op(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function ap(t,e,n,s=!1){const i={},r={};hi(r,Vi,1),t.propsDefaults=Object.create(null),fu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:pd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function cp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=se(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Fi(t.emitsOptions,p))continue;const m=e[p];if(c)if(Q(r,p))m!==r[p]&&(r[p]=m,l=!0);else{const T=xn(p);i[T]=Qr(c,a,T,m,t,!1)}else m!==r[p]&&(r[p]=m,l=!0)}}}else{fu(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!Q(e,h)&&((u=$n(h))===h||!Q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Qr(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Q(e,h)&&!0)&&(delete r[h],l=!0)}l&&Ct(t,"set","$attrs")}function fu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ni(c))continue;const l=e[c];let u;i&&Q(i,u=xn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Fi(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=se(n),l=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Qr(i,c,h,l[h],t,!Q(l,h))}}return o}function Qr(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(kn(i),s=l[n]=c.call(null,e),Zt())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function du(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!H(t)){const u=h=>{c=!0;const[p,m]=du(h,e,!0);Fe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,En),En;if(U(r))for(let u=0;u<r.length;u++){const h=xn(r[u]);lc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=xn(u);if(lc(h)){const p=r[u],m=o[h]=U(p)||H(p)?{type:p}:p;if(m){const T=fc(Boolean,m.type),k=fc(String,m.type);m[0]=T>-1,m[1]=k<0||T<k,(T>-1||Q(m,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function lc(t){return t[0]!=="$"}function uc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function hc(t,e){return uc(t)===uc(e)}function fc(t,e){return U(e)?e.findIndex(n=>hc(n,t)):H(e)&&hc(e,t)?0:-1}const pu=t=>t[0]==="_"||t==="$stable",Go=t=>U(t)?t.map(at):[at(t)],lp=(t,e,n)=>{if(e._n)return e;const s=tu((...i)=>Go(e(...i)),n);return s._c=!1,s},gu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(pu(i))continue;const r=t[i];if(H(r))e[i]=lp(i,r,s);else if(r!=null){const o=Go(r);e[i]=()=>o}}},mu=(t,e)=>{const n=Go(e);t.slots.default=()=>n},up=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),hi(e,"_",n)):gu(e,t.slots={})}else t.slots={},e&&mu(t,e);hi(t.slots,Vi,1)},hp=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Fe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,gu(e,i)),o=e}else e&&(mu(t,e),o={default:1});if(r)for(const a in i)!pu(a)&&!(a in o)&&delete i[a]};function yu(){return{app:null,config:{isNativeTag:Mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fp=0;function dp(t,e){return function(s,i=null){H(s)||(s=Object.assign({},s)),i!=null&&!Ie(i)&&(i=null);const r=yu(),o=new Set;let a=!1;const c=r.app={_uid:fp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:kp,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const p=pe(s,i);return p.appContext=r,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Yo(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Xr(t,e,n,s,i=!1){if(U(t)){t.forEach((p,m)=>Xr(p,e&&(U(e)?e[m]:e),n,s,i));return}if(si(s)&&!i)return;const r=s.shapeFlag&4?Yo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ce(l)?(u[l]=null,Q(h,l)&&(h[l]=null)):Ve(l)&&(l.value=null)),H(c))Lt(c,a,12,[o,u]);else{const p=Ce(c),m=Ve(c);if(p||m){const T=()=>{if(t.f){const k=p?u[c]:c.value;i?U(k)&&Ro(k,r):U(k)?k.includes(r)||k.push(r):p?(u[c]=[r],Q(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Q(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,qe(T,n)):T()}}}const qe=Pd;function pp(t){return gp(t)}function gp(t,e){const n=Vf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=lt,cloneNode:T,insertStaticContent:k}=t,D=(f,d,g,v=null,y=null,b=null,I=!1,E=null,C=!!d.dynamicChildren)=>{if(f===d)return;f&&!mt(f,d)&&(v=Hs(f),Nt(f,y,b,!0),f=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=d;switch(w){case Qo:P(f,d,g,v);break;case ut:x(f,d,g,v);break;case ii:f==null&&R(d,g,v,I);break;case We:nt(f,d,g,v,y,b,I,E,C);break;default:N&1?he(f,d,g,v,y,b,I,E,C):N&6?xt(f,d,g,v,y,b,I,E,C):(N&64||N&128)&&w.process(f,d,g,v,y,b,I,E,C,dn)}M!=null&&y&&Xr(M,f&&f.ref,b,d||f,!d)},P=(f,d,g,v)=>{if(f==null)s(d.el=a(d.children),g,v);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},x=(f,d,g,v)=>{f==null?s(d.el=c(d.children||""),g,v):d.el=f.el},R=(f,d,g,v)=>{[f.el,f.anchor]=k(f.children,d,g,v,f.el,f.anchor)},z=({el:f,anchor:d},g,v)=>{let y;for(;f&&f!==d;)y=p(f),s(f,g,v),f=y;s(d,g,v)},J=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),i(f),f=g;i(d)},he=(f,d,g,v,y,b,I,E,C)=>{I=I||d.type==="svg",f==null?Ee(d,g,v,y,b,I,E,C):oe(f,d,y,b,I,E,C)},Ee=(f,d,g,v,y,b,I,E)=>{let C,w;const{type:M,props:N,shapeFlag:L,transition:V,patchFlag:X,dirs:ie}=f;if(f.el&&T!==void 0&&X===-1)C=f.el=T(f.el);else{if(C=f.el=o(f.type,b,N&&N.is,N),L&8?u(C,f.children):L&16&&te(f.children,C,null,v,y,b&&M!=="foreignObject",I,E),ie&&Kt(f,null,v,"created"),N){for(const le in N)le!=="value"&&!ni(le)&&r(C,le,null,N[le],b,f.children,v,y,Et);"value"in N&&r(C,"value",null,N.value),(w=N.onVnodeBeforeMount)&&pt(w,v,f)}j(C,f,f.scopeId,I,v)}ie&&Kt(f,null,v,"beforeMount");const re=(!y||y&&!y.pendingBranch)&&V&&!V.persisted;re&&V.beforeEnter(C),s(C,d,g),((w=N&&N.onVnodeMounted)||re||ie)&&qe(()=>{w&&pt(w,v,f),re&&V.enter(C),ie&&Kt(f,null,v,"mounted")},y)},j=(f,d,g,v,y)=>{if(g&&m(f,g),v)for(let b=0;b<v.length;b++)m(f,v[b]);if(y){let b=y.subTree;if(d===b){const I=y.vnode;j(f,I,I.scopeId,I.slotScopeIds,y.parent)}}},te=(f,d,g,v,y,b,I,E,C=0)=>{for(let w=C;w<f.length;w++){const M=f[w]=E?Rt(f[w]):at(f[w]);D(null,M,d,g,v,y,b,I,E)}},oe=(f,d,g,v,y,b,I)=>{const E=d.el=f.el;let{patchFlag:C,dynamicChildren:w,dirs:M}=d;C|=f.patchFlag&16;const N=f.props||ae,L=d.props||ae;let V;g&&qt(g,!1),(V=L.onVnodeBeforeUpdate)&&pt(V,g,d,f),M&&Kt(d,f,g,"beforeUpdate"),g&&qt(g,!0);const X=y&&d.type!=="foreignObject";if(w?fe(f.dynamicChildren,w,E,g,v,X,b):I||_t(f,d,E,null,g,v,X,b,!1),C>0){if(C&16)He(E,d,N,L,g,v,y);else if(C&2&&N.class!==L.class&&r(E,"class",null,L.class,y),C&4&&r(E,"style",N.style,L.style,y),C&8){const ie=d.dynamicProps;for(let re=0;re<ie.length;re++){const le=ie[re],ot=N[le],pn=L[le];(pn!==ot||le==="value")&&r(E,le,ot,pn,y,f.children,g,v,Et)}}C&1&&f.children!==d.children&&u(E,d.children)}else!I&&w==null&&He(E,d,N,L,g,v,y);((V=L.onVnodeUpdated)||M)&&qe(()=>{V&&pt(V,g,d,f),M&&Kt(d,f,g,"updated")},v)},fe=(f,d,g,v,y,b,I)=>{for(let E=0;E<d.length;E++){const C=f[E],w=d[E],M=C.el&&(C.type===We||!mt(C,w)||C.shapeFlag&70)?h(C.el):g;D(C,w,M,null,v,y,b,I,!0)}},He=(f,d,g,v,y,b,I)=>{if(g!==v){for(const E in v){if(ni(E))continue;const C=v[E],w=g[E];C!==w&&E!=="value"&&r(f,E,w,C,I,d.children,y,b,Et)}if(g!==ae)for(const E in g)!ni(E)&&!(E in v)&&r(f,E,g[E],null,I,d.children,y,b,Et);"value"in v&&r(f,"value",g.value,v.value)}},nt=(f,d,g,v,y,b,I,E,C)=>{const w=d.el=f?f.el:a(""),M=d.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:V}=d;V&&(E=E?E.concat(V):V),f==null?(s(w,g,v),s(M,g,v),te(d.children,g,M,y,b,I,E,C)):N>0&&N&64&&L&&f.dynamicChildren?(fe(f.dynamicChildren,L,g,y,b,I,E),(d.key!=null||y&&d===y.subTree)&&vu(f,d,!0)):_t(f,d,g,M,y,b,I,E,C)},xt=(f,d,g,v,y,b,I,E,C)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?y.ctx.activate(d,g,v,I,C):ur(d,g,v,y,b,I,C):Ke(f,d,C)},ur=(f,d,g,v,y,b,I)=>{const E=f.component=Tp(f,v,y);if(Bi(f)&&(E.ctx.renderer=dn),Ip(E),E.asyncDep){if(y&&y.registerDep(E,de),!f.el){const C=E.subTree=pe(ut);x(null,C,d,g)}return}de(E,f,d,g,y,b,I)},Ke=(f,d,g)=>{const v=d.component=f.component;if(xd(f,d,g))if(v.asyncDep&&!v.asyncResolved){ce(v,d,g);return}else v.next=d,Td(v.update),v.update();else d.el=f.el,v.vnode=d},de=(f,d,g,v,y,b,I)=>{const E=()=>{if(f.isMounted){let{next:M,bu:N,u:L,parent:V,vnode:X}=f,ie=M,re;qt(f,!1),M?(M.el=X.el,ce(f,M,I)):M=X,N&&gr(N),(re=M.props&&M.props.onVnodeBeforeUpdate)&&pt(re,V,M,X),qt(f,!0);const le=mr(f),ot=f.subTree;f.subTree=le,D(ot,le,h(ot.el),Hs(ot),f,y,b),M.el=le.el,ie===null&&zo(f,le.el),L&&qe(L,y),(re=M.props&&M.props.onVnodeUpdated)&&qe(()=>pt(re,V,M,X),y)}else{let M;const{el:N,props:L}=d,{bm:V,m:X,parent:ie}=f,re=si(d);if(qt(f,!1),V&&gr(V),!re&&(M=L&&L.onVnodeBeforeMount)&&pt(M,ie,d),qt(f,!0),N&&dr){const le=()=>{f.subTree=mr(f),dr(N,f.subTree,f,y,null)};re?d.type.__asyncLoader().then(()=>!f.isUnmounted&&le()):le()}else{const le=f.subTree=mr(f);D(null,le,g,v,f,y,b),d.el=le.el}if(X&&qe(X,y),!re&&(M=L&&L.onVnodeMounted)){const le=d;qe(()=>pt(M,ie,le),y)}(d.shapeFlag&256||ie&&si(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&qe(f.a,y),f.isMounted=!0,d=g=v=null}},C=f.effect=new Po(E,()=>Gl(w),f.scope),w=f.update=()=>C.run();w.id=f.uid,qt(f,!0),w()},ce=(f,d,g)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,cp(f,d.props,v,g),hp(f,d.children,g),Vn(),Li(void 0,f.update),Un()},_t=(f,d,g,v,y,b,I,E,C=!1)=>{const w=f&&f.children,M=f?f.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:V}=d;if(L>0){if(L&128){Xn(w,N,g,v,y,b,I,E,C);return}else if(L&256){hr(w,N,g,v,y,b,I,E,C);return}}V&8?(M&16&&Et(w,y,b),N!==w&&u(g,N)):M&16?V&16?Xn(w,N,g,v,y,b,I,E,C):Et(w,y,b,!0):(M&8&&u(g,""),V&16&&te(N,g,v,y,b,I,E,C))},hr=(f,d,g,v,y,b,I,E,C)=>{f=f||En,d=d||En;const w=f.length,M=d.length,N=Math.min(w,M);let L;for(L=0;L<N;L++){const V=d[L]=C?Rt(d[L]):at(d[L]);D(f[L],V,g,null,y,b,I,E,C)}w>M?Et(f,y,b,!0,!1,N):te(d,g,v,y,b,I,E,C,N)},Xn=(f,d,g,v,y,b,I,E,C)=>{let w=0;const M=d.length;let N=f.length-1,L=M-1;for(;w<=N&&w<=L;){const V=f[w],X=d[w]=C?Rt(d[w]):at(d[w]);if(mt(V,X))D(V,X,g,null,y,b,I,E,C);else break;w++}for(;w<=N&&w<=L;){const V=f[N],X=d[L]=C?Rt(d[L]):at(d[L]);if(mt(V,X))D(V,X,g,null,y,b,I,E,C);else break;N--,L--}if(w>N){if(w<=L){const V=L+1,X=V<M?d[V].el:v;for(;w<=L;)D(null,d[w]=C?Rt(d[w]):at(d[w]),g,X,y,b,I,E,C),w++}}else if(w>L)for(;w<=N;)Nt(f[w],y,b,!0),w++;else{const V=w,X=w,ie=new Map;for(w=X;w<=L;w++){const Ye=d[w]=C?Rt(d[w]):at(d[w]);Ye.key!=null&&ie.set(Ye.key,w)}let re,le=0;const ot=L-X+1;let pn=!1,za=0;const Yn=new Array(ot);for(w=0;w<ot;w++)Yn[w]=0;for(w=V;w<=N;w++){const Ye=f[w];if(le>=ot){Nt(Ye,y,b,!0);continue}let dt;if(Ye.key!=null)dt=ie.get(Ye.key);else for(re=X;re<=L;re++)if(Yn[re-X]===0&&mt(Ye,d[re])){dt=re;break}dt===void 0?Nt(Ye,y,b,!0):(Yn[dt-X]=w+1,dt>=za?za=dt:pn=!0,D(Ye,d[dt],g,null,y,b,I,E,C),le++)}const Wa=pn?mp(Yn):En;for(re=Wa.length-1,w=ot-1;w>=0;w--){const Ye=X+w,dt=d[Ye],Ga=Ye+1<M?d[Ye+1].el:v;Yn[w]===0?D(null,dt,g,Ga,y,b,I,E,C):pn&&(re<0||w!==Wa[re]?fn(dt,g,Ga,2):re--)}}},fn=(f,d,g,v,y=null)=>{const{el:b,type:I,transition:E,children:C,shapeFlag:w}=f;if(w&6){fn(f.component.subTree,d,g,v);return}if(w&128){f.suspense.move(d,g,v);return}if(w&64){I.move(f,d,g,dn);return}if(I===We){s(b,d,g);for(let N=0;N<C.length;N++)fn(C[N],d,g,v);s(f.anchor,d,g);return}if(I===ii){z(f,d,g);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(b),s(b,d,g),qe(()=>E.enter(b),y);else{const{leave:N,delayLeave:L,afterLeave:V}=E,X=()=>s(b,d,g),ie=()=>{N(b,()=>{X(),V&&V()})};L?L(b,X,ie):ie()}else s(b,d,g)},Nt=(f,d,g,v=!1,y=!1)=>{const{type:b,props:I,ref:E,children:C,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:L}=f;if(E!=null&&Xr(E,null,g,f,!0),M&256){d.ctx.deactivate(f);return}const V=M&1&&L,X=!si(f);let ie;if(X&&(ie=I&&I.onVnodeBeforeUnmount)&&pt(ie,d,f),M&6)Df(f.component,g,v);else{if(M&128){f.suspense.unmount(g,v);return}V&&Kt(f,null,d,"beforeUnmount"),M&64?f.type.remove(f,d,g,y,dn,v):w&&(b!==We||N>0&&N&64)?Et(w,d,g,!1,!0):(b===We&&N&384||!y&&M&16)&&Et(C,d,g),v&&Ka(f)}(X&&(ie=I&&I.onVnodeUnmounted)||V)&&qe(()=>{ie&&pt(ie,d,f),V&&Kt(f,null,d,"unmounted")},g)},Ka=f=>{const{type:d,el:g,anchor:v,transition:y}=f;if(d===We){Sf(g,v);return}if(d===ii){J(f);return}const b=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:E}=y,C=()=>I(g,b);E?E(f.el,b,C):C()}else b()},Sf=(f,d)=>{let g;for(;f!==d;)g=p(f),i(f),f=g;i(d)},Df=(f,d,g)=>{const{bum:v,scope:y,update:b,subTree:I,um:E}=f;v&&gr(v),y.stop(),b&&(b.active=!1,Nt(I,f,d,g)),E&&qe(E,d),qe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Et=(f,d,g,v=!1,y=!1,b=0)=>{for(let I=b;I<f.length;I++)Nt(f[I],d,g,v,y)},Hs=f=>f.shapeFlag&6?Hs(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),qa=(f,d,g)=>{f==null?d._vnode&&Nt(d._vnode,null,null,!0):D(d._vnode||null,f,d,null,null,null,g),Jl(),d._vnode=f},dn={p:D,um:Nt,m:fn,r:Ka,mt:ur,mc:te,pc:_t,pbc:fe,n:Hs,o:t};let fr,dr;return e&&([fr,dr]=e(dn)),{render:qa,hydrate:fr,createApp:dp(qa,fr)}}function qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vu(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Rt(i[r]),a.el=o.el),n||vu(o,a))}}function mp(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const yp=t=>t.__isTeleport,We=Symbol(void 0),Qo=Symbol(void 0),ut=Symbol(void 0),ii=Symbol(void 0),os=[];let it=null;function Te(t=!1){os.push(it=t?null:[])}function wu(){os.pop(),it=os[os.length-1]||null}let Nn=1;function dc(t){Nn+=t}function _u(t){return t.dynamicChildren=Nn>0?it||En:null,wu(),Nn>0&&it&&it.push(t),t}function je(t,e,n,s,i,r){return _u(K(t,e,n,s,i,r,!0))}function Eu(t,e,n,s,i){return _u(pe(t,e,n,s,i,!0))}function bu(t){return t?t.__v_isVNode===!0:!1}function mt(t,e){return t.type===e.type&&t.key===e.key}const Vi="__vInternal",Tu=({key:t})=>t??null,ri=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||Ve(t)||H(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function K(t,e=null,n=null,s=0,i=null,r=t===We?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tu(e),ref:e&&ri(e),scopeId:Pi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Xo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),Nn>0&&!o&&it&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&it.push(c),c}const pe=vp;function vp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Zd)&&(t=ut),bu(t)){const a=Bt(t,e,!0);return n&&Xo(a,n),Nn>0&&!r&&it&&(a.shapeFlag&6?it[it.indexOf(t)]=a:it.push(a)),a.patchFlag|=-2,a}if(xp(t)&&(t=t.__vccOpts),e){e=wp(e);let{class:a,style:c}=e;a&&!Ce(a)&&(e.class=ko(a)),Ie(c)&&(Hl(c)&&!U(c)&&(c=Fe({},c)),e.style=No(c))}const o=Ce(t)?1:Nd(t)?128:yp(t)?64:Ie(t)?4:H(t)?2:0;return K(t,e,n,s,i,o,r,!0)}function wp(t){return t?Hl(t)||Vi in t?Fe({},t):t:null}function Bt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?_p(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tu(a),ref:e&&e.ref?n&&i?U(i)?i.concat(ri(e)):[i,ri(e)]:ri(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bt(t.ssContent),ssFallback:t.ssFallback&&Bt(t.ssFallback),el:t.el,anchor:t.anchor}}function oi(t=" ",e=0){return pe(Qo,null,t,e)}function Cu(t,e){const n=pe(ii,null,t);return n.staticCount=e,n}function at(t){return t==null||typeof t=="boolean"?pe(ut):U(t)?pe(We,null,t.slice()):typeof t=="object"?Rt(t):pe(Qo,null,String(t))}function Rt(t){return t.el===null||t.memo?t:Bt(t)}function Xo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Xo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Vi in e)?e._ctx=vt:i===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),s&64?(n=16,e=[oi(e)]):n=8);t.children=e,t.shapeFlag|=n}function _p(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ko([e.class,s.class]));else if(i==="style")e.style=No([e.style,s.style]);else if(ki(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function pt(t,e,n,s=null){rt(t,e,7,[n,s])}const Ep=yu();let bp=0;function Tp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Ep,r={uid:bp++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:du(s,i),emitsOptions:eu(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Id.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const Cp=()=>Ne||vt,kn=t=>{Ne=t,t.scope.on()},Zt=()=>{Ne&&Ne.scope.off(),Ne=null};function Iu(t){return t.vnode.shapeFlag&4}let ms=!1;function Ip(t,e=!1){ms=e;const{props:n,children:s}=t.vnode,i=Iu(t);ap(t,n,i,e),up(t,s);const r=i?Ap(t,e):void 0;return ms=!1,r}function Ap(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kl(new Proxy(t.ctx,tp));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Dp(t):null;kn(t),Vn();const r=Lt(s,t,0,[t.props,i]);if(Un(),Zt(),Sl(r)){if(r.then(Zt,Zt),e)return r.then(o=>{Yr(t,o,e)}).catch(o=>{xs(o,t,0)});t.asyncDep=r}else Yr(t,r,e)}else Au(t,e)}function Yr(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=zl(e)),Au(t,n)}let pc;function Au(t,e,n){const s=t.type;if(!t.render){if(!e&&pc&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:r,delimiters:a},o),c);s.render=pc(i,l)}}t.render=s.render||lt}kn(t),Vn(),np(t),Un(),Zt()}function Sp(t){return new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}})}function Dp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Sp(t))},slots:t.slots,emit:t.emit,expose:e}}function Yo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zl(Kl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)}}))}function xp(t){return H(t)&&"__vccOpts"in t}const Np=(t,e)=>wd(t,e,ms),kp="3.2.37",Op="http://www.w3.org/2000/svg",Gt=typeof document<"u"?document:null,gc=Gt&&Gt.createElement("template"),Rp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Gt.createElementNS(Op,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gc.innerHTML=s?`<svg>${t}</svg>`:t;const a=gc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Mp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lp(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){for(const r in n)Jr(s,r,n[r]);if(e&&!Ce(e))for(const r in e)n[r]==null&&Jr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const mc=/\s*!important$/;function Jr(t,e,n){if(U(n))n.forEach(s=>Jr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Fp(t,e);mc.test(n)?t.setProperty($n(s),n.replace(mc,""),"important"):t[s]=n}}const yc=["Webkit","Moz","ms"],_r={};function Fp(t,e){const n=_r[e];if(n)return n;let s=xn(e);if(s!=="filter"&&s in t)return _r[e]=s;s=Nl(s);for(let i=0;i<yc.length;i++){const r=yc[i]+s;if(r in t)return _r[e]=r}return e}const vc="http://www.w3.org/1999/xlink";function Pp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vc,e.slice(6,e.length)):t.setAttributeNS(vc,e,n);else{const r=Nf(e);n==null||r&&!Cl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Bp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Cl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Su,$p]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Zr=0;const Vp=Promise.resolve(),Up=()=>{Zr=0},jp=()=>Zr||(Vp.then(Up),Zr=Su());function Hp(t,e,n,s){t.addEventListener(e,n,s)}function Kp(t,e,n,s){t.removeEventListener(e,n,s)}function qp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=zp(e);if(s){const l=r[e]=Wp(s,i);Hp(t,a,l,c)}else o&&(Kp(t,a,o,c),r[e]=void 0)}}const wc=/(?:Once|Passive|Capture)$/;function zp(t){let e;if(wc.test(t)){e={};let n;for(;n=t.match(wc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[$n(t.slice(2)),e]}function Wp(t,e){const n=s=>{const i=s.timeStamp||Su();($p||i>=n.attached-1)&&rt(Gp(s,n.value),e,5,[s])};return n.value=t,n.attached=jp(),n}function Gp(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const _c=/^on[a-z]/,Qp=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?Mp(t,s,i):e==="style"?Lp(t,n,s):ki(e)?Oo(e)||qp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xp(t,e,s,i))?Bp(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pp(t,e,s,i))};function Xp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&_c.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_c.test(e)&&Ce(n)?!1:e in t}const Yp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};jd.props;const Jp=Fe({patchProp:Qp},Rp);let Ec;function Zp(){return Ec||(Ec=pp(Jp))}const eg=(...t)=>{const e=Zp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=tg(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tg(t){return Ce(t)?document.querySelector(t):t}const ng="/assets/spotify.654ae58b.png";const tt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},sg={},ig=t=>(ht("data-v-dbf22733"),t=t(),ft(),t),rg={onclick:"window.location.href='//open.spotify.com/user/chri.pasero?si=8dc08ab60bb8480b'"},og=ig(()=>K("img",{src:ng},null,-1)),ag=[og];function cg(t,e){return Te(),je("button",rg,ag)}const lg=tt(sg,[["render",cg],["__scopeId","data-v-dbf22733"]]),ug="/assets/github.d83ddf4e.png";const hg={},fg=t=>(ht("data-v-1638d089"),t=t(),ft(),t),dg={onclick:"window.location.href='//github.com/p4s3r0'"},pg=fg(()=>K("img",{src:ug},null,-1)),gg=[pg];function mg(t,e){return Te(),je("button",dg,gg)}const yg=tt(hg,[["render",mg],["__scopeId","data-v-1638d089"]]),vg="/assets/discord.a5d67942.png";const wg={},_g=t=>(ht("data-v-cd68d85e"),t=t(),ft(),t),Eg={onclick:"window.location.href='//discordapp.com/users/257140712494202890'"},bg=_g(()=>K("img",{src:vg},null,-1)),Tg=[bg];function Cg(t,e){return Te(),je("button",Eg,Tg)}const Ig=tt(wg,[["render",Cg],["__scopeId","data-v-cd68d85e"]]),Ag="/assets/linkedin.9eb6ffcf.png";const Sg={},Dg=t=>(ht("data-v-33bb5122"),t=t(),ft(),t),xg={onclick:"window.location.href='//linkedin.com/in/christian-pasero-b47911218'"},Ng=Dg(()=>K("img",{src:Ag},null,-1)),kg=[Ng];function Og(t,e){return Te(),je("button",xg,kg)}const Rg=tt(Sg,[["render",Og],["__scopeId","data-v-33bb5122"]]),Mg="/assets/cloud.90138eb9.png";const Lg={},Fg=t=>(ht("data-v-03e854d6"),t=t(),ft(),t),Pg={onclick:"window.location.href='//p4s3r0.com/nextcloud'"},Bg=Fg(()=>K("img",{src:Mg},null,-1)),$g=[Bg];function Vg(t,e){return Te(),je("button",Pg,$g)}const Ug=tt(Lg,[["render",Vg],["__scopeId","data-v-03e854d6"]]),jg="/assets/youtube.70c22a07.png";const Hg={},Kg=t=>(ht("data-v-e8865f6a"),t=t(),ft(),t),qg={onclick:"window.location.href='//youtube.com'"},zg=Kg(()=>K("img",{src:jg},null,-1)),Wg=[zg];function Gg(t,e){return Te(),je("button",qg,Wg)}const Qg=tt(Hg,[["render",Gg],["__scopeId","data-v-e8865f6a"]]);const Xg={id:"containerDock"},Yg={__name:"Dock",setup(t){return(e,n)=>(Te(),je("div",Xg,[pe(lg),pe(yg),pe(Qg),pe(Ig),pe(Rg),pe(Ug)]))}},Jg=tt(Yg,[["__scopeId","data-v-0a207d2f"]]);const Zg={methods:{currentDateTime(){const t=new Date;let e=t.getHours(),n=t.getMinutes(),s="AM";return e>12&&(e=e-12,s="PM"),n<10&&(n="0"+n),e+":"+n+" "+s}}},Jo=t=>(ht("data-v-48efc18b"),t=t(),ft(),t),em=Jo(()=>K("p",{id:"textMessage"},[oi(" Hi stranger \u{1F913} I'm an enthusiastic "),K("br"),oi(" Computer Science Student "),K("br"),oi(" interested in Security! \u{1F5A5} ")],-1)),tm=Jo(()=>K("svg",{width:"12",height:"19",viewBox:"0 0 23 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[K("path",{d:"M22.783 18.2906C11.4878 20.3442 2.88798 14.4399 0 11.231L0.320887 1.60444C3.4228 2.24621 10.14 2.82381 12.1937 0C11.8728 11.5519 20.5368 17.3279 22.783 18.2906Z",fill:"#468CF7"})],-1)),nm={id:"textReadContainer"},sm={class:"textRead"},im=Jo(()=>K("p",{class:"textRead",id:"thick"},"Read \xA0",-1));function rm(t,e,n,s,i,r){return Te(),je(We,null,[em,tm,K("div",nm,[K("p",sm,Zn(r.currentDateTime()),1),im])],64)}const om=tt(Zg,[["render",rm],["__scopeId","data-v-48efc18b"]]),am="/assets/memoji_hi.50fef132.png";const Du=t=>(ht("data-v-cc0beebc"),t=t(),ft(),t),cm=Du(()=>K("p",null,"\xA0",-1)),lm=Du(()=>K("div",{id:"container"},[K("div",{id:"pictureContainer"},[K("img",{src:am})])],-1)),um={__name:"CenterMemoji",setup(t){return(e,n)=>(Te(),je(We,null,[cm,lm],64))}},hm=tt(um,[["__scopeId","data-v-cc0beebc"]]);const xu=t=>(ht("data-v-ec905b6e"),t=t(),ft(),t),fm={id:"container"},dm=xu(()=>K("p",{id:"name"},"Christian Pasero",-1)),pm=xu(()=>K("div",{id:"line"},null,-1)),gm={id:"messageBubble"},mm={id:"memoji"},ym=Cu('<a href="https://docs.google.com/viewer?url=https://p4s3r0.com/bac/thesis_final.pdf" data-v-ec905b6e><svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" data-v-ec905b6e><path d="M4 13L24 8L44 13L24 18L4 13Z" stroke-linecap="round" stroke-linejoin="round" data-v-ec905b6e></path><path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16" stroke-linecap="round" stroke-linejoin="round" data-v-ec905b6e></path><path d="M7 14V36" stroke-linecap="round" stroke-linejoin="round" data-v-ec905b6e></path><rect x="4" y="34" width="6" height="6" stroke-linecap="round" stroke-linejoin="round" data-v-ec905b6e></rect></svg></a><p id="svgNameing" data-v-ec905b6e> Bsc Thesis</p>',2),vm={__name:"CenterWidget",setup(t){return(e,n)=>(Te(),je("div",fm,[dm,pm,K("div",gm,[pe(om)]),K("div",mm,[pe(hm)]),ym]))}},wm=tt(vm,[["__scopeId","data-v-ec905b6e"]]);const _m={id:"container"},Em=Cu('<div id="topBar" data-v-3e96575f><div class="actionButton" style="background-color:#FF5E57;" data-v-3e96575f></div><div class="actionButton" style="background-color:#FFBB2E;" data-v-3e96575f></div><div class="actionButton" style="background-color:#38C149;" data-v-3e96575f></div><p data-v-3e96575f>About Me</p></div><span style="color:#38C149;" data-v-3e96575f>~ $ </span><span data-v-3e96575f>\xA0 \xA0 Hey \u{1F44B}\u{1F3FB}, this is my homepage, so I have to say something about myself \u{1F647}\u{1F3FB}\u200D\u2642\uFE0F. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with \u{1F4AC}. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes: <br data-v-3e96575f><br data-v-3e96575f> My PP big \u{1F346}. </span>',3),bm=[Em],Tm={__name:"Terminal",setup(t){return(e,n)=>(Te(),je("div",_m,bm))}},Cm=tt(Tm,[["__scopeId","data-v-3e96575f"]]);const Im={props:["month","day","time","event"]},Am=t=>(ht("data-v-44c2cd7b"),t=t(),ft(),t),Sm={id:"container"},Dm=Am(()=>K("svg",{version:"1.1",viewBox:"0 0 512 512"},[K("g",null,[K("g",null,[K("path",{d:"m256,51.8c-112.6,0-204.2,91.6-204.2,204.2s91.6,204.2 204.2,204.2 204.2-91.6 204.2-204.2-91.6-204.2-204.2-204.2v-1.42109e-14zm0,449.2c-135.1,0-245-109.9-245-245s109.9-245 245-245 245,109.9 245,245-109.9,245-245,245z"}),K("path",{d:"m344.1,276.4h-88.1c-11.3,0-20.4-9.1-20.4-20.4v-157.8c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v137.4h67.7c11.3,0 20.4,9.1 20.4,20.4 5.68434e-14,11.3-9.1,20.4-20.4,20.4z"})])])],-1));function xm(t,e,n,s,i,r){return Te(),je("div",Sm,[K("h1",null,Zn(n.month),1),K("h2",null,Zn(n.day),1),Dm,K("h3",null,Zn(n.time),1),K("p",null,Zn(n.event),1)])}const Nm=tt(Im,[["render",xm],["__scopeId","data-v-44c2cd7b"]]);/**
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
 */const Nu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},km=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Om={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[h],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):km(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const p=r<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const T=l<<6&192|h;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Rm=function(t){const e=Nu(t);return Om.encodeByteArray(e,!0)},ku=function(t){return Rm(t).replace(/\./g,"")};/**
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
 */class Mm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ui(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ui())}function Fm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bm(){return Ui().indexOf("Electron/")>=0}function $m(){const t=Ui();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vm(){return Ui().indexOf("MSAppHost/")>=0}function Um(){return typeof indexedDB=="object"}function jm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hm="FirebaseError";class jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Hm,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ou.prototype.create)}}class Ou{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Km(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,s)}}function Km(t,e){return t.replace(qm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qm=/\{\$([^}]+)}/g;function eo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(bc(r)&&bc(o)){if(!eo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function bc(t){return t!==null&&typeof t=="object"}/**
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
 */function zm(t){return t&&t._delegate?t._delegate:t}class ys{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Wm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qm(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gm(t){return t===Wt?void 0:t}function Qm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Ym={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Jm=ee.INFO,Zm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ey=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Zm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ru{constructor(e){this.name=e,this._logLevel=Jm,this._logHandler=ey,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ym[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const ty=(t,e)=>e.some(n=>t instanceof n);let Tc,Cc;function ny(){return Tc||(Tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sy(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mu=new WeakMap,to=new WeakMap,Lu=new WeakMap,Er=new WeakMap,Zo=new WeakMap;function iy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ft(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mu.set(n,t)}).catch(()=>{}),Zo.set(e,t),e}function ry(t){if(to.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});to.set(t,e)}let no={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return to.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oy(t){no=t(no)}function ay(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(br(this),e,...n);return Lu.set(s,e.sort?e.sort():[e]),Ft(s)}:sy().includes(t)?function(...e){return t.apply(br(this),e),Ft(Mu.get(this))}:function(...e){return Ft(t.apply(br(this),e))}}function cy(t){return typeof t=="function"?ay(t):(t instanceof IDBTransaction&&ry(t),ty(t,ny())?new Proxy(t,no):t)}function Ft(t){if(t instanceof IDBRequest)return iy(t);if(Er.has(t))return Er.get(t);const e=cy(t);return e!==t&&(Er.set(t,e),Zo.set(e,t)),e}const br=t=>Zo.get(t);function ly(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ft(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const uy=["get","getKey","getAll","getAllKeys","count"],hy=["put","add","delete","clear"],Tr=new Map;function Ic(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tr.get(e))return Tr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=hy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||uy.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Tr.set(e,r),r}oy(t=>({...t,get:(e,n,s)=>Ic(e,n)||t.get(e,n,s),has:(e,n)=>!!Ic(e,n)||t.has(e,n)}));/**
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
 */class fy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dy(t){const e=t.getComponent();return e?.type==="VERSION"}const so="@firebase/app",Ac="0.7.31";/**
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
 */const rn=new Ru("@firebase/app"),py="@firebase/app-compat",gy="@firebase/analytics-compat",my="@firebase/analytics",yy="@firebase/app-check-compat",vy="@firebase/app-check",wy="@firebase/auth",_y="@firebase/auth-compat",Ey="@firebase/database",by="@firebase/database-compat",Ty="@firebase/functions",Cy="@firebase/functions-compat",Iy="@firebase/installations",Ay="@firebase/installations-compat",Sy="@firebase/messaging",Dy="@firebase/messaging-compat",xy="@firebase/performance",Ny="@firebase/performance-compat",ky="@firebase/remote-config",Oy="@firebase/remote-config-compat",Ry="@firebase/storage",My="@firebase/storage-compat",Ly="@firebase/firestore",Fy="@firebase/firestore-compat",Py="firebase",By="9.9.3";/**
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
 */const Fu="[DEFAULT]",$y={[so]:"fire-core",[py]:"fire-core-compat",[my]:"fire-analytics",[gy]:"fire-analytics-compat",[vy]:"fire-app-check",[yy]:"fire-app-check-compat",[wy]:"fire-auth",[_y]:"fire-auth-compat",[Ey]:"fire-rtdb",[by]:"fire-rtdb-compat",[Ty]:"fire-fn",[Cy]:"fire-fn-compat",[Iy]:"fire-iid",[Ay]:"fire-iid-compat",[Sy]:"fire-fcm",[Dy]:"fire-fcm-compat",[xy]:"fire-perf",[Ny]:"fire-perf-compat",[ky]:"fire-rc",[Oy]:"fire-rc-compat",[Ry]:"fire-gcs",[My]:"fire-gcs-compat",[Ly]:"fire-fst",[Fy]:"fire-fst-compat","fire-js":"fire-js",[Py]:"fire-js-all"};/**
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
 */const mi=new Map,io=new Map;function Vy(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(io.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;io.set(e,t);for(const n of mi.values())Vy(n,t);return!0}function Uy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Ou("app","Firebase",jy);/**
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
 */class Hy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const Ky=By;function qy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Fu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});const i=mi.get(s);if(i){if(eo(t,i.options)&&eo(n,i.config))return i;throw on.create("duplicate-app",{appName:s})}const r=new Xm(s);for(const a of io.values())r.addComponent(a);const o=new Hy(t,n,r);return mi.set(s,o),o}function zy(t=Fu){const e=mi.get(t);if(!e)throw on.create("no-app",{appName:t});return e}function In(t,e,n){var s;let i=(s=$y[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}yi(new ys(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wy="firebase-heartbeat-database",Gy=1,vs="firebase-heartbeat-store";let Cr=null;function Pu(){return Cr||(Cr=ly(Wy,Gy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Cr}async function Qy(t){var e;try{return(await Pu()).transaction(vs).objectStore(vs).get(Bu(t))}catch(n){if(n instanceof jn)rn.warn(n.message);else{const s=on.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});rn.warn(s.message)}}}async function Sc(t,e){var n;try{const i=(await Pu()).transaction(vs,"readwrite");return await i.objectStore(vs).put(e,Bu(t)),i.done}catch(s){if(s instanceof jn)rn.warn(s.message);else{const i=on.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});rn.warn(i.message)}}}function Bu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xy=1024,Yy=30*24*60*60*1e3;class Jy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ev(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Yy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dc(),{heartbeatsToSend:n,unsentEntries:s}=Zy(this._heartbeatsCache.heartbeats),i=ku(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dc(){return new Date().toISOString().substring(0,10)}function Zy(t,e=Xy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),xc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ev{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Um()?jm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xc(t){return ku(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tv(t){yi(new ys("platform-logger",e=>new fy(e),"PRIVATE")),yi(new ys("heartbeat",e=>new Jy(e),"PRIVATE")),In(so,Ac,t),In(so,Ac,"esm2017"),In("fire-js","")}tv("");var nv="firebase",sv="9.9.3";/**
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
 */In(nv,sv,"app");var iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,ea=ea||{},$=iv||self;function vi(){}function ro(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rv(t){return Object.prototype.hasOwnProperty.call(t,Ir)&&t[Ir]||(t[Ir]=++ov)}var Ir="closure_uid_"+(1e9*Math.random()>>>0),ov=0;function av(t,e,n){return t.call.apply(t.bind,arguments)}function cv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=av:ke=cv,ke.apply(null,arguments)}function Qs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function jt(){this.s=this.s,this.o=this.o}var lv=0;jt.prototype.s=!1;jt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lv!=0)&&rv(this)};jt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $u=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Vu=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function uv(t){e:{var e=tw;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Nc(t){return Array.prototype.concat.apply([],arguments)}function ta(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wi(t){return/^[\s\xa0]*$/.test(t)}var kc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Be(t,e){return t.indexOf(e)!=-1}function Ar(t,e){return t<e?-1:t>e?1:0}var $e;e:{var Oc=$.navigator;if(Oc){var Rc=Oc.userAgent;if(Rc){$e=Rc;break e}}$e=""}function na(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Uu(t){const e={};for(const n in t)e[n]=t[n];return e}var Mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ju(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Mc.length;r++)n=Mc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function sa(t){return sa[" "](t),t}sa[" "]=vi;function hv(t){var e=pv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var fv=Be($e,"Opera"),On=Be($e,"Trident")||Be($e,"MSIE"),Hu=Be($e,"Edge"),oo=Hu||On,Ku=Be($e,"Gecko")&&!(Be($e.toLowerCase(),"webkit")&&!Be($e,"Edge"))&&!(Be($e,"Trident")||Be($e,"MSIE"))&&!Be($e,"Edge"),dv=Be($e.toLowerCase(),"webkit")&&!Be($e,"Edge");function qu(){var t=$.document;return t?t.documentMode:void 0}var _i;e:{var Sr="",Dr=function(){var t=$e;if(Ku)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hu)return/Edge\/([\d\.]+)/.exec(t);if(On)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dv)return/WebKit\/(\S+)/.exec(t);if(fv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dr&&(Sr=Dr?Dr[1]:""),On){var xr=qu();if(xr!=null&&xr>parseFloat(Sr)){_i=String(xr);break e}}_i=Sr}var pv={};function gv(){return hv(function(){let t=0;const e=kc(String(_i)).split("."),n=kc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ar(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ar(i[2].length==0,r[2].length==0)||Ar(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var ao;if($.document&&On){var Lc=qu();ao=Lc||parseInt(_i,10)||void 0}else ao=void 0;var mv=ao,yv=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",vi,e),$.removeEventListener("test",vi,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function ws(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ku){e:{try{sa(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ws.Z.h.call(this)}}Me(ws,Le);var vv={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ks="closure_listenable_"+(1e6*Math.random()|0),wv=0;function _v(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++wv,this.ca=this.fa=!1}function ji(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Hi(t){this.src=t,this.g={},this.h=0}Hi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=lo(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new _v(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function co(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=$u(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ji(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lo(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var ia="closure_lm_"+(1e6*Math.random()|0),Nr={};function zu(t,e,n,s,i){if(s&&s.once)return Gu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)zu(t,e[r],n,s,i);return null}return n=aa(n),t&&t[ks]?t.N(e,n,Ns(s)?!!s.capture:!!s,i):Wu(t,e,n,!1,s,i)}function Wu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ns(i)?!!i.capture:!!i,a=oa(t);if(a||(t[ia]=a=new Hi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Ev(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)yv||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Xu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ev(){function t(n){return e.call(t.src,t.listener,n)}var e=bv;return t}function Gu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gu(t,e[r],n,s,i);return null}return n=aa(n),t&&t[ks]?t.O(e,n,Ns(s)?!!s.capture:!!s,i):Wu(t,e,n,!0,s,i)}function Qu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Qu(t,e[r],n,s,i);else s=Ns(s)?!!s.capture:!!s,n=aa(n),t&&t[ks]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=lo(r,n,s,i),-1<n&&(ji(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=oa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lo(e,n,s,i)),(n=-1<t?e[t]:null)&&ra(n))}function ra(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ks])co(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=oa(e))?(co(n,t),n.h==0&&(n.src=null,e[ia]=null)):ji(t)}}}function Xu(t){return t in Nr?Nr[t]:Nr[t]="on"+t}function bv(t,e){if(t.ca)t=!0;else{e=new ws(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ra(t),t=n.call(s,e)}return t}function oa(t){return t=t[ia],t instanceof Hi?t:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function aa(t){return typeof t=="function"?t:(t[kr]||(t[kr]=function(e){return t.handleEvent(e)}),t[kr])}function Ae(){jt.call(this),this.i=new Hi(this),this.P=this,this.I=null}Me(Ae,jt);Ae.prototype[ks]=!0;Ae.prototype.removeEventListener=function(t,e,n,s){Qu(this,t,e,n,s)};function Oe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var i=e;e=new Le(s,t),ju(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Xs(o,s,!0,e)&&i}if(o=e.g=t,i=Xs(o,s,!0,e)&&i,i=Xs(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Xs(o,s,!1,e)&&i}Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ji(n[s]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ae.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&co(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ca=$.JSON.stringify;function Tv(){var t=Ju;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Cv{constructor(){this.h=this.g=null}add(e,n){const s=Yu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Yu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Iv,t=>t.reset());class Iv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Av(t){$.setTimeout(()=>{throw t},0)}function la(t,e){uo||Sv(),ho||(uo(),ho=!0),Ju.add(t,e)}var uo;function Sv(){var t=$.Promise.resolve(void 0);uo=function(){t.then(Dv)}}var ho=!1,Ju=new Cv;function Dv(){for(var t;t=Tv();){try{t.h.call(t.g)}catch(n){Av(n)}var e=Yu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ho=!1}function Ki(t,e){Ae.call(this),this.h=t||1,this.g=e||$,this.j=ke(this.kb,this),this.l=Date.now()}Me(Ki,Ae);S=Ki.prototype;S.da=!1;S.S=null;S.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(ua(this),this.start()))}};S.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ua(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}S.M=function(){Ki.Z.M.call(this),ua(this),delete this.g};function ha(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Zu(t){t.g=ha(()=>{t.g=null,t.i&&(t.i=!1,Zu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xv extends jt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zu(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(t){jt.call(this),this.h=t,this.g={}}Me(_s,jt);var Fc=[];function eh(t,e,n,s){Array.isArray(n)||(n&&(Fc[0]=n.toString()),n=Fc);for(var i=0;i<n.length;i++){var r=zu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function th(t){na(t.g,function(e,n){this.g.hasOwnProperty(n)&&ra(e)},t),t.g={}}_s.prototype.M=function(){_s.Z.M.call(this),th(this)};_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qi(){this.g=!0}qi.prototype.Aa=function(){this.g=!1};function Nv(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kv(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function wn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Rv(t,n)+(s?" "+s:"")})}function Ov(t,e){t.info(function(){return"TIMEOUT: "+e})}qi.prototype.info=function(){};function Rv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ca(n)}catch{return e}}var hn={},Pc=null;function zi(){return Pc=Pc||new Ae}hn.Ma="serverreachability";function nh(t){Le.call(this,hn.Ma,t)}Me(nh,Le);function Es(t){const e=zi();Oe(e,new nh(e))}hn.STAT_EVENT="statevent";function sh(t,e){Le.call(this,hn.STAT_EVENT,t),this.stat=e}Me(sh,Le);function Ue(t){const e=zi();Oe(e,new sh(e,t))}hn.Na="timingevent";function ih(t,e){Le.call(this,hn.Na,t),this.size=e}Me(ih,Le);function Os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Wi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},rh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fa(){}fa.prototype.h=null;function Bc(t){return t.h||(t.h=t.i())}function oh(){}var Rs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function da(){Le.call(this,"d")}Me(da,Le);function pa(){Le.call(this,"c")}Me(pa,Le);var fo;function Gi(){}Me(Gi,fa);Gi.prototype.g=function(){return new XMLHttpRequest};Gi.prototype.i=function(){return{}};fo=new Gi;function Ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new _s(this),this.P=Mv,t=oo?125:void 0,this.W=new Ki(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var Mv=45e3,po={},Ei={};S=Ms.prototype;S.setTimeout=function(t){this.P=t};function go(t,e,n){t.K=1,t.v=Xi(It(e)),t.s=n,t.U=!0,ch(t,null)}function ch(t,e){t.F=Date.now(),Ls(t),t.A=It(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),gh(n.h,"t",s),t.C=0,n=t.l.H,t.h=new ah,t.g=Lh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new xv(ke(t.Ia,t,t.g),t.O)),eh(t.V,t.g,"readystatechange",t.gb),e=t.H?Uu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Es(),Nv(t.j,t.u,t.A,t.m,t.X,t.s)}S.gb=function(t){t=t.target;const e=this.L;e&&Tt(t)==3?e.l():this.Ia(t)};S.Ia=function(t){try{if(t==this.g)e:{const u=Tt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||oo||this.g&&(this.h.h||this.g.ga()||jc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Es(3):Es(2)),Qi(this);var n=this.g.ba();this.N=n;t:if(lh(this)){var s=jc(this.g);t="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),as(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,kv(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var l=a;break t}}l=null}if(n=l)wn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mo(this,n);else{this.i=!1,this.o=3,Ue(12),Qt(this),as(this);break e}}this.U?(uh(this,u,o),oo&&this.i&&u==3&&(eh(this.V,this.W,"tick",this.fb),this.W.start())):(wn(this.j,this.m,o,null),mo(this,o)),u==4&&Qt(this),this.i&&!this.I&&(u==4?kh(this.l,this):(this.i=!1,Ls(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ue(12)):(this.o=0,Ue(13)),Qt(this),as(this)}}}catch{}finally{}};function lh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function uh(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Lv(t,n),i==Ei){e==4&&(t.o=4,Ue(14),s=!1),wn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==po){t.o=4,Ue(15),wn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else wn(t.j,t.m,i,null),mo(t,i);lh(t)&&i!=Ei&&i!=po&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ue(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ta(e),e.L=!0,Ue(11))):(wn(t.j,t.m,n,"[Invalid Chunked Response]"),Qt(t),as(t))}S.fb=function(){if(this.g){var t=Tt(this.g),e=this.g.ga();this.C<e.length&&(Qi(this),uh(this,t,e),this.i&&t!=4&&Ls(this))}};function Lv(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ei:(n=Number(e.substring(n,s)),isNaN(n)?po:(s+=1,s+n>e.length?Ei:(e=e.substr(s,n),t.C=s+n,e)))}S.cancel=function(){this.I=!0,Qt(this)};function Ls(t){t.Y=Date.now()+t.P,hh(t,t.P)}function hh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Os(ke(t.eb,t),e)}function Qi(t){t.B&&($.clearTimeout(t.B),t.B=null)}S.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ov(this.j,this.A),this.K!=2&&(Es(),Ue(17)),Qt(this),this.o=2,as(this)):hh(this,this.Y-t)};function as(t){t.l.G==0||t.I||kh(t.l,t)}function Qt(t){Qi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ua(t.W),th(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yo(n.i,t))){if(n.I=t.N,!t.J&&yo(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ii(n),Zi(n);else break e;ba(n),Ue(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Os(ke(n.ab,n),6e3));if(1>=vh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Xt(n,11)}else if((t.J||n.g==t)&&Ii(n),!wi(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.i;!r.g&&(Be(T,"spdy")||Be(T,"quic")||Be(T,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ya(r,r.h),r.h=null))}if(s.D){const k=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,ue(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Mh(s,s.H?s.la:null,s.W),o.J){wh(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Qi(a),Ls(a)),s.g=o}else xh(s);0<n.l.length&&er(n)}else l[0]!="stop"&&l[0]!="close"||Xt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Xt(n,7):Ea(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Es(4)}catch{}}function Fv(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ro(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ga(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ro(t)||typeof t=="string")Vu(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ro(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Fv(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Hn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Hn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}S=Hn.prototype;S.R=function(){ma(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};S.T=function(){return ma(this),this.g.concat()};function ma(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];an(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],an(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}S.get=function(t,e){return an(this.h,t)?this.h[t]:e};S.set=function(t,e){an(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};S.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function an(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var fh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Pv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function cn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof cn){this.g=e!==void 0?e:t.g,bi(this,t.j),this.s=t.s,Ti(this,t.i),Ci(this,t.m),this.l=t.l,e=t.h;var n=new bs;n.i=e.i,e.g&&(n.g=new Hn(e.g),n.h=e.h),$c(this,n),this.o=t.o}else t&&(n=String(t).match(fh))?(this.g=!!e,bi(this,n[1]||"",!0),this.s=cs(n[2]||""),Ti(this,n[3]||"",!0),Ci(this,n[4]),this.l=cs(n[5]||"",!0),$c(this,n[6]||"",!0),this.o=cs(n[7]||"")):(this.g=!!e,this.h=new bs(null,this.g))}cn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,Vc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,Vc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?jv:Uv,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,Kv)),t.join("")};function It(t){return new cn(t)}function bi(t,e,n){t.j=n?cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ti(t,e,n){t.i=n?cs(e,!0):e}function Ci(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $c(t,e,n){e instanceof bs?(t.h=e,qv(t.h,t.g)):(n||(e=ns(e,Hv)),t.h=new bs(e,t.g))}function ue(t,e,n){t.h.set(e,n)}function Xi(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bv(t){return t instanceof cn?It(t):new cn(t,void 0)}function $v(t,e,n,s){var i=new cn(null,void 0);return t&&bi(i,t),e&&Ti(i,e),n&&Ci(i,n),s&&(i.l=s),i}function cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Vv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Vv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vc=/[#\/\?@]/g,Uv=/[#\?:]/g,jv=/[#\?]/g,Hv=/[#\?@]/g,Kv=/#/g;function bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ht(t){t.g||(t.g=new Hn,t.h=0,t.i&&Pv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=bs.prototype;S.add=function(t,e){Ht(this),this.i=null,t=Kn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dh(t,e){Ht(t),e=Kn(t,e),an(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,an(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ma(t)))}function ph(t,e){return Ht(t),e=Kn(t,e),an(t.g.h,e)}S.forEach=function(t,e){Ht(this),this.g.forEach(function(n,s){Vu(n,function(i){t.call(e,i,s,this)},this)},this)};S.T=function(){Ht(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};S.R=function(t){Ht(this);var e=[];if(typeof t=="string")ph(this,t)&&(e=Nc(e,this.g.get(Kn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Nc(e,t[n])}return e};S.set=function(t,e){return Ht(this),this.i=null,t=Kn(this,t),ph(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function gh(t,e,n){dh(t,e),0<n.length&&(t.i=null,t.g.set(Kn(t,e),ta(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Kn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qv(t,e){e&&!t.j&&(Ht(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(dh(this,s),gh(this,i,n))},t)),t.j=e}var zv=class{constructor(t,e){this.h=t,this.g=e}};function mh(t){this.l=t||Wv,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wv=10;function yh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vh(t){return t.h?1:t.g?t.g.size:0}function yo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ya(t,e){t.g?t.g.add(e):t.h=e}function wh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mh.prototype.cancel=function(){if(this.i=_h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _h(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ta(t.i)}function va(){}va.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};va.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function Gv(){this.g=new va}function Qv(t,e,n){const s=n||"";try{ga(t,function(i,r){let o=i;Ns(i)&&(o=ca(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Xv(t,e){const n=new qi;if($.Image){const s=new Image;s.onload=Qs(Ys,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qs(Ys,n,s,"TestLoadImage: error",!1,e),s.onabort=Qs(Ys,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qs(Ys,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ys(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Fs(t){this.l=t.$b||null,this.j=t.ib||!1}Me(Fs,fa);Fs.prototype.g=function(){return new Yi(this.l,this.j)};Fs.prototype.i=function(t){return function(){return t}}({});function Yi(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Yi,Ae);var wa=0;S=Yi.prototype;S.open=function(t,e){if(this.readyState!=wa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ts(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=wa};S.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eh(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Eh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}S.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ps(this):Ts(this),this.readyState==3&&Eh(this)}};S.Ua=function(t){this.g&&(this.response=this.responseText=t,Ps(this))};S.Ta=function(t){this.g&&(this.response=t,Ps(this))};S.ha=function(){this.g&&Ps(this)};function Ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ts(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Yv=$.JSON.parse;function we(t){Ae.call(this),this.headers=new Hn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bh,this.K=this.L=!1}Me(we,Ae);var bh="",Jv=/^https?$/i,Zv=["POST","PUT"];S=we.prototype;S.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fo.g(),this.C=this.u?Bc(this.u):Bc(fo),this.g.onreadystatechange=ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Uc(this,r);return}t=n||"";const i=new Hn(this.headers);s&&ga(s,function(r,o){i.set(o,r)}),s=uv(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=$u(Zv,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ih(this),0<this.B&&((this.K=ew(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.pa,this)):this.A=ha(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Uc(this,r)}};function ew(t){return On&&gv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function tw(t){return t.toLowerCase()=="content-type"}S.pa=function(){typeof ea<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Uc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Th(t),Ji(t)}function Th(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),Ji(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ji(this,!0)),we.Z.M.call(this)};S.Fa=function(){this.s||(this.F||this.v||this.l?Ch(this):this.cb())};S.cb=function(){Ch(this)};function Ch(t){if(t.h&&typeof ea<"u"&&(!t.C[1]||Tt(t)!=4||t.ba()!=2)){if(t.v&&Tt(t)==4)ha(t.Fa,0,t);else if(Oe(t,"readystatechange"),Tt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(fh)[1]||null;if(!i&&$.self&&$.self.location){var r=$.self.location.protocol;i=r.substr(0,r.length-1)}s=!Jv.test(i?i.toLowerCase():"")}n=s}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<Tt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Th(t)}}finally{Ji(t)}}}}function Ji(t,e){if(t.g){Ih(t);const n=t.g,s=t.C[0]?vi:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ih(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Tt(t){return t.g?t.g.readyState:0}S.ba=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};S.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Yv(e)}};function jc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case bh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}S.Da=function(){return this.m};S.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function nw(t){let e="";return na(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function _a(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=nw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ah(t){this.za=0,this.l=[],this.h=new qi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new mh(t&&t.concurrentRequestLimit),this.Ca=new Gv,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}S=Ah.prototype;S.ma=8;S.G=1;function Ea(t){if(Sh(t),t.G==3){var e=t.V++,n=It(t.F);ue(n,"SID",t.J),ue(n,"RID",e),ue(n,"TYPE","terminate"),Bs(t,n),e=new Ms(t,t.h,e,void 0),e.K=2,e.v=Xi(It(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ls(e)}Rh(t)}S.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Zi(t){t.g&&(Ta(t),t.g.cancel(),t.g=null)}function Sh(t){Zi(t),t.u&&($.clearTimeout(t.u),t.u=null),Ii(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Or(t,e){t.l.push(new zv(t.Za++,e)),t.G==3&&er(t)}function er(t){yh(t.i)||t.m||(t.m=!0,la(t.Ha,t),t.C=0)}function sw(t,e){return vh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Os(ke(t.Ha,t,e),Oh(t,t.C)),t.C++,!0)}S.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ms(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Uu(r),ju(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Dh(this,i,e),n=It(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Bs(this,n),this.o&&r&&_a(n,this.o,r),ya(this.i,i),this.Ra&&ue(n,"TYPE","init"),this.ja?(ue(n,"$req",e),ue(n,"SID","null"),i.$=!0,go(i,n,null)):go(i,n,e),this.G=2}}else this.G==3&&(t?Hc(this,t):this.l.length==0||yh(this.i)||Hc(this))};function Hc(t,e){var n;e?n=e.m:n=t.V++;const s=It(t.F);ue(s,"SID",t.J),ue(s,"RID",n),ue(s,"AID",t.U),Bs(t,s),t.o&&t.s&&_a(s,t.o,t.s),n=new Ms(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Dh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ya(t.i,n),go(n,s,e)}function Bs(t,e){t.j&&ga({},function(n,s){ue(e,s,n)})}function Dh(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ke(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Qv(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function xh(t){t.g||t.u||(t.Y=1,la(t.Ga,t),t.A=0)}function ba(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Os(ke(t.Ga,t),Oh(t,t.A)),t.A++,!0)}S.Ga=function(){if(this.u=null,Nh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Os(ke(this.bb,this),t)}};S.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ue(10),Zi(this),Nh(this))};function Ta(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function Nh(t){t.g=new Ms(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=It(t.oa);ue(e,"RID","rpc"),ue(e,"SID",t.J),ue(e,"CI",t.N?"0":"1"),ue(e,"AID",t.U),Bs(t,e),ue(e,"TYPE","xmlhttp"),t.o&&t.s&&_a(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xi(It(e)),n.s=null,n.U=!0,ch(n,t)}S.ab=function(){this.v!=null&&(this.v=null,Zi(this),ba(this),Ue(19))};function Ii(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function kh(t,e){var n=null;if(t.g==e){Ii(t),Ta(t),t.g=null;var s=2}else if(yo(t.i,e))n=e.D,wh(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=zi(),Oe(s,new ih(s,n)),er(t)}else xh(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&sw(t,e)||s==2&&ba(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Xt(t,5);break;case 4:Xt(t,10);break;case 3:Xt(t,6);break;default:Xt(t,2)}}}function Oh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Xt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=ke(t.jb,t);n||(n=new cn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||bi(n,"https"),Xi(n)),Xv(n.toString(),s)}else Ue(2);t.G=0,t.j&&t.j.va(e),Rh(t),Sh(t)}S.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ue(2)):(this.h.info("Failed to ping google.com"),Ue(1))};function Rh(t){t.G=0,t.I=-1,t.j&&((_h(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ta(t.l),t.l.length=0),t.j.ua())}function Mh(t,e,n){let s=Bv(n);if(s.i!="")e&&Ti(s,e+"."+s.i),Ci(s,s.m);else{const i=$.location;s=$v(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&na(t.aa,function(i,r){ue(s,r,i)}),e=t.D,n=t.sa,e&&n&&ue(s,e,n),ue(s,"VER",t.ma),Bs(t,s),s}function Lh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new we(new Fs({ib:!0})):new we(t.qa),e.L=t.H,e}function Fh(){}S=Fh.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Oa=function(){};function Ai(){if(On&&!(10<=Number(mv)))throw Error("Environmental error: no available transport.")}Ai.prototype.g=function(t,e){return new et(t,e)};function et(t,e){Ae.call(this),this.g=new Ah(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qn(this)}Me(et,Ae);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),la(ke(t.hb,t,e))),Ue(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Mh(t,null,t.W),er(t)};et.prototype.close=function(){Ea(this.g)};et.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Or(this.g,e)}else this.v?(e={},e.__data__=ca(t),Or(this.g,e)):Or(this.g,t)};et.prototype.M=function(){this.g.j=null,delete this.j,Ea(this.g),delete this.g,et.Z.M.call(this)};function Ph(t){da.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Ph,da);function Bh(){pa.call(this),this.status=1}Me(Bh,pa);function qn(t){this.g=t}Me(qn,Fh);qn.prototype.xa=function(){Oe(this.g,"a")};qn.prototype.wa=function(t){Oe(this.g,new Ph(t))};qn.prototype.va=function(t){Oe(this.g,new Bh)};qn.prototype.ua=function(){Oe(this.g,"b")};Ai.prototype.createWebChannel=Ai.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;Wi.NO_ERROR=0;Wi.TIMEOUT=8;Wi.HTTP_ERROR=6;rh.COMPLETE="complete";oh.EventType=Rs;Rs.OPEN="a";Rs.CLOSE="b";Rs.ERROR="c";Rs.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.La;we.prototype.getLastErrorCode=we.prototype.Da;we.prototype.getStatus=we.prototype.ba;we.prototype.getResponseJson=we.prototype.Qa;we.prototype.getResponseText=we.prototype.ga;we.prototype.send=we.prototype.ea;var iw=function(){return new Ai},rw=function(){return zi()},Rr=Wi,ow=rh,aw=hn,Kc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},cw=Fs,Js=oh,lw=we;const qc="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */const ln=new Ru("@firebase/firestore");function zc(){return ln.logLevel}function O(t,...e){if(ln.logLevel<=ee.DEBUG){const n=e.map(Ca);ln.debug(`Firestore (${zn}): ${t}`,...n)}}function At(t,...e){if(ln.logLevel<=ee.ERROR){const n=e.map(Ca);ln.error(`Firestore (${zn}): ${t}`,...n)}}function Wc(t,...e){if(ln.logLevel<=ee.WARN){const n=e.map(Ca);ln.warn(`Firestore (${zn}): ${t}`,...n)}}function Ca(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */class en{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class uw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class fw{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new en;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new en,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new en)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new uw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new ze(e)}}class dw{constructor(e,n,s){this.type="FirstParty",this.user=ze.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class pw{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new dw(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mw{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new gw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class vw{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=yw(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ne(t,e){return t<e?-1:t>e?1:0}function Rn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Xe(0,0))}static max(){return new W(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Cs{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Cs{construct(e,n,s){return new ge(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const ww=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Cs{construct(e,n,s){return new Ge(e,n,s)}static isValidIdentifier(e){return ww.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new B(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new B(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ge.fromString(e))}static fromName(e){return new F(ge.fromString(e).popFirst(5))}static empty(){return new F(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ge(e.slice()))}}function _w(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(s===1e9?new Xe(n+1,0):new Xe(n,s));return new $t(i,F.empty(),e)}function Ew(t){return new $t(t.readTime,t.key,-1)}class $t{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new $t(W.min(),F.empty(),-1)}static max(){return new $t(W.max(),F.empty(),-1)}}function bw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const Tw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ia(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Tw)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Aa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Gc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Aa.ot=-1;class Se{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??De.RED,this.left=i??De.EMPTY,this.right=r??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new De(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return De.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,s,i){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(e){return new Qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new tn([])}unionWith(e){let n=new _e(Ge.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Aw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(t){if(ve(!!t),typeof t=="string"){let e=0;const n=Aw.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
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
 */function $h(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vh(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?Vh(e):e}function Is(t){const e=Vt(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class Sw{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ln{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:Dw(t)?9007199254740991:10:q()}function wt(t,e){if(t===e)return!0;const n=un(t);if(n!==un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Vt(s.timestampValue),o=Vt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ye(s.doubleValue),o=ye(i.doubleValue);return r===o?vo(r)===vo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Rn(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Gc(r)!==Gc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wt(r[a],o[a])))return!1;return!0}(t,e);default:return q()}}function As(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function Fn(t,e){if(t===e)return 0;const n=un(t),s=un(e);if(n!==s)return ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ye(i.integerValue||i.doubleValue),a=ye(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xc(t.timestampValue,e.timestampValue);case 4:return Xc(Is(t),Is(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Mn(i),a=Mn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ne(ye(i.latitude),ye(r.latitude));return o!==0?o:ne(ye(i.longitude),ye(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Fn(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ei.mapValue&&r===ei.mapValue)return 0;if(i===ei.mapValue)return 1;if(r===ei.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const p=Fn(o[a[u]],c[l[u]]);if(p!==0)return p}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function Xc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Vt(t),s=Vt(e),i=ne(n.seconds,s.seconds);return i!==0?i:ne(n.nanos,s.nanos)}function An(t){return wo(t)}function wo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Vt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=wo(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${wo(s.fields[a])}`;return r+"}"}(t.mapValue):q();var e,n}function _o(t){return!!t&&"integerValue"in t}function Sa(t){return!!t&&"arrayValue"in t}function Yc(t){return!!t&&"nullValue"in t}function Jc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mr(t){return!!t&&"mapValue"in t}function ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ls(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Dw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Mr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ls(n)}setAll(e){let n=Ge.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ls(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Mr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Mr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){tr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new yt(ls(this.value))}}/**
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
 */class xe{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new xe(e,0,W.min(),W.min(),yt.empty(),0)}static newFoundDocument(e,n,s){return new xe(e,1,n,W.min(),s,0)}static newNoDocument(e,n){return new xe(e,2,n,W.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,W.min(),yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xw{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Zc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new xw(t,e,n,s,i,r,o)}function Da(t){const e=Z(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+An(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),nr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>An(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>An(s)).join(",")),e.ut=n}return e.ut}function Nw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${An(s.value)}`;var s}).join(", ")}]`),nr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>An(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>An(n)).join(",")),`Target(${e})`}function xa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Bw(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!wt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tl(t.startAt,e.startAt)&&tl(t.endAt,e.endAt)}function Eo(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Qe extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new kw(e,n,s):n==="array-contains"?new Mw(e,s):n==="in"?new Lw(e,s):n==="not-in"?new Fw(e,s):n==="array-contains-any"?new Pw(e,s):new Qe(e,n,s)}static ct(e,n,s){return n==="in"?new Ow(e,s):new Rw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Fn(n,this.value)):n!==null&&un(this.value)===un(n)&&this.at(Fn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class kw extends Qe{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.at(n)}}class Ow extends Qe{constructor(e,n){super(e,"in",n),this.keys=Uh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Rw extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Uh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Uh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class Mw extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sa(n)&&As(n.arrayValue,this.value)}}class Lw extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class Fw extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class Pw extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}class Si{constructor(e,n){this.position=e,this.inclusive=n}}class us{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function el(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=Fn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function tl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sr{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function $w(t,e,n,s,i,r,o,a){return new sr(t,e,n,s,i,r,o,a)}function jh(t){return new sr(t)}function nl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Uw(t){for(const e of t.filters)if(e.ht())return e.field;return null}function jw(t){return t.collectionGroup!==null}function Ss(t){const e=Z(t);if(e.lt===null){e.lt=[];const n=Uw(e),s=Vw(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new us(n)),e.lt.push(new us(Ge.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new us(Ge.keyField(),r))}}}return e.lt}function St(t){const e=Z(t);if(!e.ft)if(e.limitType==="F")e.ft=Zc(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ss(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new us(r.field,o))}const s=e.endAt?new Si(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Si(e.startAt.position,e.startAt.inclusive):null;e.ft=Zc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.ft}function bo(t,e,n){return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ir(t,e){return xa(St(t),St(e))&&t.limitType===e.limitType}function Hh(t){return`${Da(St(t))}|lt:${t.limitType}`}function To(t){return`Query(target=${Nw(St(t))}; limitType=${t.limitType})`}function Na(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=el(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ss(n),s)||n.endAt&&!function(i,r,o){const a=el(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ss(n),s))}(t,e)}function Hw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Kh(t){return(e,n)=>{let s=!1;for(const i of Ss(t)){const r=Kw(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Kw(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Fn(a,c):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
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
 */function qw(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vo(e)?"-0":e}}function zw(t){return{integerValue:""+t}}/**
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
 */class rr{constructor(){this._=void 0}}function Ww(t,e,n){return t instanceof Co?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Di?qh(t,e):t instanceof xi?zh(t,e):function(s,i){const r=Qw(s,i),o=sl(r)+sl(s._t);return _o(r)&&_o(s._t)?zw(o):qw(s.wt,o)}(t,e)}function Gw(t,e,n){return t instanceof Di?qh(t,e):t instanceof xi?zh(t,e):n}function Qw(t,e){return t instanceof Io?_o(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Co extends rr{}class Di extends rr{constructor(e){super(),this.elements=e}}function qh(t,e){const n=Wh(e);for(const s of t.elements)n.some(i=>wt(i,s))||n.push(s);return{arrayValue:{values:n}}}class xi extends rr{constructor(e){super(),this.elements=e}}function zh(t,e){let n=Wh(e);for(const s of t.elements)n=n.filter(i=>!wt(i,s));return{arrayValue:{values:n}}}class Io extends rr{constructor(e,n){super(),this.wt=e,this._t=n}}function sl(t){return ye(t.integerValue||t.doubleValue)}function Wh(t){return Sa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Xw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Di&&s instanceof Di||n instanceof xi&&s instanceof xi?Rn(n.elements,s.elements,wt):n instanceof Io&&s instanceof Io?wt(n._t,s._t):n instanceof Co&&s instanceof Co}(t.transform,e.transform)}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ai(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ka{}function Gh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jw(t.key,nn.none()):new Oa(t.key,t.data,nn.none());{const n=t.data,s=yt.empty();let i=new _e(Ge.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new or(t.key,s,new tn(i.toArray()),nn.none())}}function Yw(t,e,n){t instanceof Oa?function(s,i,r){const o=s.value.clone(),a=rl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof or?function(s,i,r){if(!ai(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=rl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Qh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function hs(t,e,n,s){return t instanceof Oa?function(i,r,o,a){if(!ai(i.precondition,r))return o;const c=i.value.clone(),l=ol(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof or?function(i,r,o,a){if(!ai(i.precondition,r))return o;const c=ol(i.fieldTransforms,a,r),l=r.data;return l.setAll(Qh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ai(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function il(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rn(n,s,(i,r)=>Xw(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends ka{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class or extends ka{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Qh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function rl(t,e,n){const s=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Gw(o,a,n[i]))}return s}function ol(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ww(r,o,e))}return s}class Jw extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zw{constructor(e){this.count=e}}/**
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
 */var me,G;function Xh(t){if(t===void 0)return At("GRPC error has no .code"),A.UNKNOWN;switch(t){case me.OK:return A.OK;case me.CANCELLED:return A.CANCELLED;case me.UNKNOWN:return A.UNKNOWN;case me.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case me.INTERNAL:return A.INTERNAL;case me.UNAVAILABLE:return A.UNAVAILABLE;case me.UNAUTHENTICATED:return A.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case me.NOT_FOUND:return A.NOT_FOUND;case me.ALREADY_EXISTS:return A.ALREADY_EXISTS;case me.PERMISSION_DENIED:return A.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case me.ABORTED:return A.ABORTED;case me.OUT_OF_RANGE:return A.OUT_OF_RANGE;case me.UNIMPLEMENTED:return A.UNIMPLEMENTED;case me.DATA_LOSS:return A.DATA_LOSS;default:return q()}}(G=me||(me={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Iw(this.inner)}size(){return this.innerSize}}/**
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
 */const e0=new Se(F.comparator);function Ut(){return e0}const Yh=new Se(F.comparator);function ss(...t){let e=Yh;for(const n of t)e=e.insert(n.key,n);return e}function t0(t){let e=Yh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Yt(){return fs()}function Jh(){return fs()}function fs(){return new Wn(t=>t.toString(),(t,e)=>t.isEqual(e))}new Se(F.comparator);const n0=new _e(F.comparator);function Y(...t){let e=n0;for(const n of t)e=e.add(n);return e}const s0=new _e(ne);function Zh(){return s0}/**
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
 */class ar{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Vs.createSynthesizedTargetChangeForCurrentChange(e,n)),new ar(W.min(),s,Zh(),Ut(),Y())}}class Vs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Vs(Re.EMPTY_BYTE_STRING,n,Y(),Y(),Y())}}/**
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
 */class ci{constructor(e,n,s,i){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=i}}class ef{constructor(e,n){this.targetId=e,this.It=n}}class tf{constructor(e,n,s=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class al{constructor(){this.Tt=0,this.Et=ll(),this.At=Re.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Y(),n=Y(),s=Y();return this.Et.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:q()}}),new Vs(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=ll()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class i0{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Ut(),this.Bt=cl(),this.Lt=new _e(ne)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,s=e.It.count,i=this.Ht(n);if(i){const r=i.target;if(Eo(r))if(s===0){const o=new F(r.path);this.Kt(n,o,xe.newNoDocument(o,W.min()))}else ve(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&Eo(a.target)){const c=new F(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,xe.newNoDocument(c,e))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=Y();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const i=new ar(e,n,this.Lt,this.$t,s);return this.$t=Ut(),this.Bt=cl(),this.Lt=new _e(ne),i}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new al,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new _e(ne),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new al),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function cl(){return new Se(F.comparator)}function ll(){return new Se(F.comparator)}/**
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
 */const r0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),o0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class a0{constructor(e,n){this.databaseId=e,this.dt=n}}function c0(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function l0(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ds(t){return ve(!!t),W.fromTimestamp(function(e){const n=Vt(e);return new Xe(n.seconds,n.nanos)}(t))}function u0(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nf(t){const e=ge.fromString(t);return ve(of(e)),e}function Lr(t,e){const n=nf(e);if(n.get(1)!==t.databaseId.projectId)throw new B(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(sf(n))}function Ao(t,e){return u0(t.databaseId,e)}function h0(t){const e=nf(t);return e.length===4?ge.emptyPath():sf(e)}function ul(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sf(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function f0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.dt?(ve(l===void 0||typeof l=="string"),Re.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),Re.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Xh(c.code);return new B(l,c.message||"")}(o);n=new tf(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Lr(t,s.document.name),r=Ds(s.document.updateTime),o=new yt({mapValue:{fields:s.document.fields}}),a=xe.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ci(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Lr(t,s.document),r=s.readTime?Ds(s.readTime):W.min(),o=xe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ci([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Lr(t,s.document),r=s.removedTargetIds||[];n=new ci([],r,i,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Zw(i),o=s.targetId;n=new ef(o,r)}}return n}function d0(t,e){return{documents:[Ao(t,e.path)]}}function p0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ao(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ao(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Jc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NAN"}};if(Yc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Jc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NOT_NAN"}};if(Yc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(h.field),op:v0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:gn(u.field),direction:y0(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.dt||nr(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function g0(t){let e=h0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=rf(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new us(_n(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,nr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,p=u.values||[];return new Si(p,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,p=u.values||[];return new Si(p,h)}(n.endAt)),$w(e,i,o,r,a,"F",c,l)}function m0(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function rf(t){return t?t.unaryFilter!==void 0?[_0(t)]:t.fieldFilter!==void 0?[w0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>rf(e)).reduce((e,n)=>e.concat(n)):q():[]}function y0(t){return r0[t]}function v0(t){return o0[t]}function gn(t){return{fieldPath:t.canonicalString()}}function _n(t){return Ge.fromServerFormat(t.fieldPath)}function w0(t){return Qe.create(_n(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}function _0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_n(t.unaryFilter.field);return Qe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_n(t.unaryFilter.field);return Qe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_n(t.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_n(t.unaryFilter.field);return Qe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}function of(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class E0{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Yw(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Jh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Gh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(n,s)=>il(n,s))&&Rn(this.baseMutations,e.baseMutations,(n,s)=>il(n,s))}}/**
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
 */class b0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sn{constructor(e,n,s,i,r=W.min(),o=W.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class T0{constructor(e){this.ne=e}}function C0(t){const e=g0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bo(e,e.limit,"L"):e}/**
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
 */class I0{constructor(){this.ze=new A0}addToCollectionParentIndex(e,n){return this.ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve($t.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve($t.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class A0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new _e(ge.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new _e(ge.comparator)).toArray()}}/**
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
 */class S0{constructor(){this.changes=new Wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class D0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class x0{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&hs(s.mutation,i,tn.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const i=Yt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ss();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Yt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ut();const o=fs(),a=fs();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof or)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),hs(u.mutation,l,u.mutation.getFieldMask(),Xe.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new D0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fs();let i=new Se((o,a)=>o-a),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||tn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||Y()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Jh();u.forEach(p=>{if(!r.has(p)){const m=Gh(n.get(p),s.get(p));m!==null&&h.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):_.resolve(Yt());let a=-1,c=r;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?_.resolve():this.getBaseDocument(e,u,h).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,Y())).next(u=>({batchId:a,changes:t0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(s=>{let i=ss();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ss();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const c=function(l,u){return new sr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,xe.newInvalidDocument(l)))});let o=ss();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&hs(l.mutation,c,tn.empty(),Xe.now()),Na(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(xe.newInvalidDocument(n))}}/**
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
 */class N0{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return _.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ds(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:C0(s.bundledQuery),readTime:Ds(s.readTime)}}(n)),_.resolve()}}/**
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
 */class k0{constructor(){this.overlays=new Se(F.comparator),this.Xn=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Yt();return _.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ie(e,n,r)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const i=Yt(),r=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Yt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Yt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return _.resolve(a)}ie(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new b0(n,s));let r=this.Xn.get(n);r===void 0&&(r=Y(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
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
 */class Ra{constructor(){this.Zn=new _e(be.ts),this.es=new _e(be.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new be(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new be(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new F(new ge([])),s=new be(n,e),i=new be(n,e+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new F(new ge([])),s=new be(n,e),i=new be(n,e+1);let r=Y();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new be(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return F.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||F.comparator(e.key,n.key)}}/**
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
 */class O0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new _e(be.ts)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new E0(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return _.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),_.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(ne);return n.forEach(i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),_.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;F.isDocumentKey(r)||(r=r.child(""));const o=new be(new F(r),0);let a=new _e(ne);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),_.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return _.forEach(n.mutations,i=>{const r=new be(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new be(n,0),i=this.ds.firstAfterOrEqual(s);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class R0{constructor(e){this.ps=e,this.docs=new Se(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let s=Ut();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():xe.newInvalidDocument(i))}),_.resolve(s)}getAllFromCollection(e,n,s){let i=Ut();const r=new F(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||bw(Ew(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,s,i){q()}Is(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new M0(this)}getSize(e){return _.resolve(this.size)}}class M0 extends S0{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class L0{constructor(e){this.persistence=e,this.Ts=new Wn(n=>Da(n),xa),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Es=0,this.As=new Ra,this.targetCount=0,this.Rs=Pn.An()}forEachTarget(e,n){return this.Ts.forEach((s,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),_.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Pn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.vn(n),_.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(r).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.As.containsKey(n))}}/**
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
 */class F0{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Aa(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new L0(this),this.indexManager=new I0,this.remoteDocumentCache=function(s){return new R0(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new T0(n),this.Ds=new N0(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new k0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new O0(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const i=new P0(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(e,n){return _.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class P0 extends Cw{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.ks=new Ra,this.Ms=null}static Os(e){return new Ma(e)}get Fs(){if(this.Ms)return this.Ms;throw q()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),_.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Fs,s=>{const i=F.fromPath(s);return this.$s(e,i).next(r=>{r||n.removeEntry(i,W.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return _.or([()=>_.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class La{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(e,n){let s=Y(),i=Y();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new La(e,n.fromCache,s,i)}}/**
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
 */class B0{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ci(e,n).next(r=>r||this.xi(e,n,i,s)).next(r=>r||this.Ni(e,n))}Ci(e,n){if(nl(n))return _.resolve(null);let s=St(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bo(n,null,"F"),s=St(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Y(...r);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,bo(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,s,i){return nl(n)||i.isEqual(W.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(r=>{const o=this.ki(n,r);return this.Mi(n,o,s,i)?this.Ni(e,n):(zc()<=ee.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),To(n)),this.Oi(e,o,n,_w(i,-1)))})}ki(e,n){let s=new _e(Kh(e));return n.forEach((i,r)=>{Na(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(e,n){return zc()<=ee.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",To(n)),this.Di.getDocumentsMatchingQuery(e,n,$t.min())}Oi(e,n,s,i){return this.Di.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class $0{constructor(e,n,s,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Se(ne),this.Bi=new Wn(r=>Da(r),xa),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x0(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function V0(t,e,n,s){return new $0(t,e,n,s)}async function af(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=Y();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function cf(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function U0(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Vs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(r,u.addedDocuments,h)));let m=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Re.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),i=i.insert(h,m),function(T,k,D){return T.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,m,u)&&a.push(n.Vs.updateTargetData(r,m))});let c=Ut(),l=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(j0(r,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(W.min())){const u=n.Vs.getLastRemoteSnapshotVersion(r).next(h=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.$i=i,r))}function j0(t,e,n){let s=Y(),i=Y();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ut();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function H0(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,e).next(r=>r?(i=r,_.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new sn(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function So(t,e,n){const s=Z(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$s(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function hl(t,e,n){const s=Z(t);let i=W.min(),r=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Bi.get(l);return h!==void 0?_.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,St(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?r:Y())).next(a=>(K0(s,Hw(e),a),{documents:a,ji:r})))}function K0(t,e,n){let s=W.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Li.set(e,s)}class fl{constructor(){this.activeTargetIds=Zh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q0{constructor(){this.Fr=new fl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new fl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class z0{Br(e){}shutdown(){}}/**
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
 */class dl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const W0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class G0{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class Q0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,i,r){const o=this.oo(e,n);O("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(e,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw Wc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,i,r,o){return this.ro(e,n,s,i,r)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}oo(e,n){const s=W0[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,i){return new Promise((r,o)=>{const a=new lw;a.listenOnce(ow.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Rr.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Rr.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new B(A.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const p=function(m){const T=m.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(T)>=0?T:A.UNKNOWN}(h.status);o(new B(p,h.message))}else o(new B(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(A.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(e,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=iw(),o=rw(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new cw({})),this.uo(a.initMessageHeaders,n,s),Lm()||Pm()||Bm()||$m()||Vm()||Fm()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");O("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const p=new G0({jr:T=>{h?O("Connection","Not sending because WebChannel is closed:",T):(u||(O("Connection","Opening WebChannel transport."),l.open(),u=!0),O("Connection","WebChannel sending:",T),l.send(T))},Wr:()=>l.close()}),m=(T,k,D)=>{T.listen(k,P=>{try{D(P)}catch(x){setTimeout(()=>{throw x},0)}})};return m(l,Js.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),m(l,Js.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),p.eo())}),m(l,Js.EventType.ERROR,T=>{h||(h=!0,Wc("Connection","WebChannel transport errored:",T),p.eo(new B(A.UNAVAILABLE,"The operation could not be completed")))}),m(l,Js.EventType.MESSAGE,T=>{var k;if(!h){const D=T.data[0];ve(!!D);const P=D,x=P.error||((k=P[0])===null||k===void 0?void 0:k.error);if(x){O("Connection","WebChannel received error:",x);const R=x.status;let z=function(he){const Ee=me[he];if(Ee!==void 0)return Xh(Ee)}(R),J=x.message;z===void 0&&(z=A.INTERNAL,J="Unknown error status: "+R+" with message "+x.message),h=!0,p.eo(new B(z,J)),l.close()}else O("Connection","WebChannel received:",D),p.no(D)}}),m(o,aw.STAT_EVENT,T=>{T.stat===Kc.PROXY?O("Connection","Detected buffering proxy"):T.stat===Kc.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function Fr(){return typeof document<"u"?document:null}/**
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
 */function lf(t){return new a0(t,!0)}class uf{constructor(e,n,s=1e3,i=1.5,r=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class X0{constructor(e,n,s,i,r,o,a,c){this.js=e,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new uf(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{e(()=>{const i=new B(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y0 extends X0{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=f0(this.wt,e),s=function(i){if(!("targetChange"in i))return W.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?W.min():r.readTime?Ds(r.readTime):W.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=ul(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=Eo(a)?{documents:d0(i,a)}:{query:p0(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=l0(i,r.resumeToken):r.snapshotVersion.compareTo(W.min())>0&&(o.readTime=c0(i,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=m0(this.wt,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=ul(this.wt),n.removeTarget=e,this.Oo(n)}}/**
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
 */class J0 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new B(A.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(A.UNKNOWN,i.toString())})}ao(e,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(A.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class Z0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class e_{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{js(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.lu.add(4),await Us(c),c._u.set("Unknown"),c.lu.delete(4),await cr(c)}(this))})}),this._u=new Z0(s,i)}}async function cr(t){if(js(t))for(const e of t.fu)await e(!0)}async function Us(t){for(const e of t.fu)await e(!1)}function hf(t,e){const n=Z(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ba(n)?Pa(n):Gn(n).Co()&&Fa(n,e))}function ff(t,e){const n=Z(t),s=Gn(n);n.hu.delete(e),s.Co()&&df(n,e),n.hu.size===0&&(s.Co()?s.ko():js(n)&&n._u.set("Unknown"))}function Fa(t,e){t.wu.Nt(e.targetId),Gn(t).Qo(e)}function df(t,e){t.wu.Nt(e),Gn(t).jo(e)}function Pa(t){t.wu=new i0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Gn(t).start(),t._u.iu()}function Ba(t){return js(t)&&!Gn(t).Do()&&t.hu.size>0}function js(t){return Z(t).lu.size===0}function pf(t){t.wu=void 0}async function t_(t){t.hu.forEach((e,n)=>{Fa(t,e)})}async function n_(t,e){pf(t),Ba(t)?(t._u.uu(e),Pa(t)):t._u.set("Unknown")}async function s_(t,e,n){if(t._u.set("Online"),e instanceof tf&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await pl(t,s)}else if(e instanceof ci?t.wu.Ut(e):e instanceof ef?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(W.min()))try{const s=await cf(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(c);l&&i.hu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(Re.EMPTY_BYTE_STRING,c.snapshotVersion)),df(i,a);const l=new sn(c.target,a,1,c.sequenceNumber);Fa(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await pl(t,s)}}async function pl(t,e,n){if(!$s(e))throw e;t.lu.add(1),await Us(t),t._u.set("Offline"),n||(n=()=>cf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await cr(t)})}async function gl(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=js(n);n.lu.add(3),await Us(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await cr(n)}async function i_(t,e){const n=Z(t);e?(n.lu.delete(2),await cr(n)):e||(n.lu.add(2),await Us(n),n._u.set("Unknown"))}function Gn(t){return t.mu||(t.mu=function(e,n,s){const i=Z(e);return i.tu(),new Y0(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:t_.bind(null,t),Jr:n_.bind(null,t),Go:s_.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ba(t)?Pa(t):t._u.set("Unknown")):(await t.mu.stop(),pf(t))})),t.mu}/**
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
 */class $a{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new $a(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gf(t,e){if(At("AsyncQueue",`${e}: ${t}`),$s(t))return new B(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Sn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||F.comparator(n.key,s.key):(n,s)=>F.comparator(n.key,s.key),this.keyedMap=ss(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Sn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Sn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ml{constructor(){this.yu=new Se(F.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):q():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Bn{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Bn(e,n,Sn.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ir(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class r_{constructor(){this.Iu=void 0,this.listeners=[]}}class o_{constructor(){this.queries=new Wn(e=>Hh(e),ir),this.onlineState="Unknown",this.Tu=new Set}}async function a_(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new r_),i)try{r.Iu=await n.onListen(s)}catch(o){const a=gf(o,`Initialization of query '${To(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Va(n)}async function c_(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function l_(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Va(n)}function u_(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Va(t){t.Tu.forEach(e=>{e.next()})}class h_{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Bn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class mf{constructor(e){this.key=e}}class yf{constructor(e){this.key=e}}class f_{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Y(),this.mutatedKeys=Y(),this.Lu=Kh(e),this.Uu=new Sn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new ml,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=Na(this.query,h)?h:null,T=!!p&&this.mutatedKeys.has(p.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;p&&m?p.data.isEqual(m.data)?T!==k&&(s.track({type:3,doc:m}),D=!0):this.Qu(p,m)||(s.track({type:2,doc:m}),D=!0,(c&&this.Lu(m,c)>0||l&&this.Lu(m,l)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),D=!0):p&&!m&&(s.track({type:1,doc:p}),D=!0,(c||l)&&(a=!0)),D&&(m?(o=o.add(m),r=k?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:r}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((l,u)=>function(h,p){const m=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return m(h)-m(p)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new Bn(this.query,e.Uu,i,r,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new ml,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Y(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new yf(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new mf(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=Y();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Bn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class d_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class p_{constructor(e){this.key=e,this.Xu=!1}}class g_{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Wn(a=>Hh(a),ir),this.ec=new Map,this.nc=new Set,this.sc=new Se(F.comparator),this.ic=new Map,this.rc=new Ra,this.oc={},this.uc=new Map,this.cc=Pn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function m_(t,e){const n=T_(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await H0(n.localStore,St(e));n.isPrimaryClient&&hf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await y_(n,e,s,a==="current")}return i}async function y_(t,e,n,s){t.hc=(u,h,p)=>async function(m,T,k,D){let P=T.view.Ku(k);P.Mi&&(P=await hl(m.localStore,T.query,!1).then(({documents:z})=>T.view.Ku(z,P)));const x=D&&D.targetChanges.get(T.targetId),R=T.view.applyChanges(P,m.isPrimaryClient,x);return vl(m,T.targetId,R.zu),R.snapshot}(t,u,h,p);const i=await hl(t.localStore,e,!0),r=new f_(e,i.ji),o=r.Ku(i.documents),a=Vs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);vl(t,n,c.zu);const l=new d_(e,n,r);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function v_(t,e){const n=Z(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!ir(r,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await So(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ff(n.remoteStore,s.targetId),Do(n,s.targetId)}).catch(Ia)):(Do(n,s.targetId),await So(n.localStore,s.targetId,!0))}async function vf(t,e){const n=Z(t);try{const s=await U0(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ve(o.Xu):i.removedDocuments.size>0&&(ve(o.Xu),o.Xu=!1))}),await _f(n,s,e)}catch(s){await Ia(s)}}function yl(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Z(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Va(a)}(s.eventManager,e),i.length&&s.Zu.Go(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function w_(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let o=new Se(F.comparator);o=o.insert(r,xe.newNoDocument(r,W.min()));const a=Y().add(r),c=new ar(W.min(),new Map,new _e(ne),o,a);await vf(s,c),s.sc=s.sc.remove(r),s.ic.delete(e),Ua(s)}else await So(s.localStore,e,!1).then(()=>Do(s,e,n)).catch(Ia)}function Do(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||wf(t,s)})}function wf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(ff(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ua(t))}function vl(t,e,n){for(const s of n)s instanceof mf?(t.rc.addReference(s.key,e),__(t,s)):s instanceof yf?(O("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||wf(t,s.key)):q()}function __(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.nc.add(s),Ua(t))}function Ua(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new F(ge.fromString(e)),s=t.cc.next();t.ic.set(s,new p_(n)),t.sc=t.sc.insert(n,s),hf(t.remoteStore,new sn(St(jh(n.path)),s,2,Aa.ot))}}async function _f(t,e,n){const s=Z(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=La.Vi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,h=>_.forEach(h.Pi,p=>l.persistence.referenceDelegate.addReference(u,h.targetId,p)).next(()=>_.forEach(h.vi,p=>l.persistence.referenceDelegate.removeReference(u,h.targetId,p)))))}catch(u){if(!$s(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const p=l.$i.get(h),m=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(m);l.$i=l.$i.insert(h,T)}}}(s.localStore,r))}async function E_(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await af(n.localStore,e);n.currentUser=e,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new B(A.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await _f(n,s.Ki)}}function b_(t,e){const n=Z(t),s=n.ic.get(e);if(s&&s.Xu)return Y().add(s.key);{let i=Y();const r=n.ec.get(e);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function T_(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w_.bind(null,e),e.Zu.Go=l_.bind(null,e.eventManager),e.Zu.lc=u_.bind(null,e.eventManager),e}class C_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=lf(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return V0(this.persistence,new B0,e.initialUser,this.wt)}_c(e){return new F0(Ma.Os,this.wt)}dc(e){return new q0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class I_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=E_.bind(null,this.syncEngine),await i_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new o_}createDatastore(e){const n=lf(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Q0(i));var i;return function(r,o,a,c){return new J0(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>yl(this.syncEngine,a,0),o=dl.V()?new dl:new z0,new e_(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new g_(s,i,r,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);O("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Us(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class A_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):At("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class S_{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=vw.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=gf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function D_(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await af(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function x_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await N_(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>gl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>gl(e.remoteStore,r)),t.onlineComponents=e}async function N_(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await D_(t,new C_)),t.offlineComponents}async function k_(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await x_(t,new I_)),t.onlineComponents}async function O_(t){const e=await k_(t),n=e.eventManager;return n.onListen=m_.bind(null,e.syncEngine),n.onUnlisten=v_.bind(null,e.syncEngine),n}function R_(t,e,n={}){const s=new en;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new A_({next:h=>{r.enqueueAndForget(()=>c_(i,u)),h.fromCache&&a.source==="server"?c.reject(new B(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new h_(o,l,{includeMetadataChanges:!0,Du:!0});return a_(i,u)}(await O_(t),t.asyncQueue,e,n,s)),s.promise}const wl=new Map;/**
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
 */function M_(t,e,n){if(!n)throw new B(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function L_(t,e,n,s){if(e===!0&&s===!0)throw new B(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _l(t){if(F.isDocumentKey(t))throw new B(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function F_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function El(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=F_(t);throw new B(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class bl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,L_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ef{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bl({}),this._settingsFrozen=!1,e instanceof Ln?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new B(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(i.options.projectId)}(e))}get app(){if(!this._app)throw new B(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hw;switch(n.type){case"gapi":const s=n.client;return ve(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new pw(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wl.get(e);n&&(O("ComponentProvider","Removing Datastore"),wl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Qn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qn(this.firestore,e,this._key)}}class lr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class Dn extends lr{constructor(e,n,s){super(e,n,jh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qn(this.firestore,null,new F(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function P_(t,e,...n){if(t=zm(t),M_("collection","path",e),t instanceof Ef){const s=ge.fromString(e,...n);return _l(s),new Dn(t,null,s)}{if(!(t instanceof Qn||t instanceof Dn))throw new B(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ge.fromString(e,...n));return _l(s),new Dn(t.firestore,null,s)}}/**
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
 */class B_{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new uf(this,"async_queue_retry"),this.Kc=()=>{const n=Fr();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new en;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!$s(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=$a.createAndSchedule(this,e,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class bf extends Ef{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new B_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Tf(this),this._firestoreClient.terminate()}}function $_(t=zy()){return Uy(t,"firestore").getImmediate()}function V_(t){return t._firestoreClient||Tf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tf(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Sw(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new S_(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Cf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class U_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}const j_=new RegExp("[~\\*/\\[\\]]");function H_(t,e,n){if(e.search(j_)>=0)throw Tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cf(...e.split("."))._internalPath}catch{throw Tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new B(A.INVALID_ARGUMENT,a+t+c)}/**
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
 */class If{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new K_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Af("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class K_ extends If{data(){return super.data()}}function Af(t,e){return typeof e=="string"?H_(t,e):e instanceof Cf?e._internalPath:e._delegate._internalPath}/**
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
 */class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class q_ extends If{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Af("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class li extends q_{data(e={}){return super.data(e)}}class z_{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ti(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new li(this._firestore,this._userDataWriter,s.key,s,new ti(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new li(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new li(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ti(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:W_(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function W_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function G_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Q_{convertValue(e,n="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const s={};return tr(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new U_(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=Vt(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ge.fromString(e);ve(of(s));const i=new Ln(s.get(1),s.get(3)),r=new F(s.popFirst(5));return i.isEqual(n)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class X_ extends Q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ni(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qn(this.firestore,null,n)}}function Y_(t){t=El(t,lr);const e=El(t.firestore,bf),n=V_(e),s=new X_(e);return G_(t._query),R_(n,t._query).then(i=>new z_(e,s,t,i))}(function(t,e=!0){(function(n){zn=n})(Ky),yi(new ys("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new bf(i,new fw(n.getProvider("auth-internal")),new mw(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),In(qc,"3.4.14",t),In(qc,"3.4.14","esm2017")})();const J_={apiKey:"AIzaSyAYgohUcOtGwgtDhdXlec99BJQ92rveJhk",authDomain:"landingpage-d70d6.firebaseapp.com",projectId:"landingpage-d70d6",storageBucket:"landingpage-d70d6.appspot.com",messagingSenderId:"356778437957",appId:"1:356778437957:web:6fb2e70693bc256952622c",measurementId:"G-F39TDMTB7G"},Z_=qy(J_),eE=$_(Z_);let tE=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];async function nE(t){const e=P_(t,"events");return(await Y_(e)).docs.map(i=>i.data())}let ja=await nE(eE);ja.forEach(t=>{t.sortValue=t.year*1e4+t.month*100+t.day,t.month=tE[t.month-1]});ja.sort(function(t,e){return e.sortValue-t.sortValue});const sE=ja.reverse();const Ha=t=>(ht("data-v-1e5a4cbc"),t=t(),ft(),t),iE={id:"containerEvents"},rE=Ha(()=>K("div",{class:"actionButton",style:{"background-color":"#FF5E57"}},null,-1)),oE=Ha(()=>K("div",{class:"actionButton",style:{"background-color":"#FFBB2E"}},null,-1)),aE=Ha(()=>K("p",null,"Events",-1)),cE={__name:"LeftEvents",setup(t){function e(){window.location.reload()}return(n,s)=>(Te(),je("div",iE,[K("div",{id:"topBar"},[rE,oE,K("div",{onClick:e,class:"actionButton",style:{"background-color":"#38C149"}}),aE]),(Te(!0),je(We,null,ep(ql(sE),i=>(Te(),Eu(Nm,{key:i.id,month:i.month,day:i.day,time:i.time,event:i.description},null,8,["month","day","time","event"]))),128))]))}},lE=tt(cE,[["__scopeId","data-v-1e5a4cbc"]]),uE={__name:"App",setup(t){return(e,n)=>(Te(),je(We,null,[pe(wm),(Te(),Eu(Od,null,{default:tu(()=>[pe(lE)]),_:1})),pe(Cm),pe(Jg)],64))}};const hE=eg(uE);hE.mount("#app");
