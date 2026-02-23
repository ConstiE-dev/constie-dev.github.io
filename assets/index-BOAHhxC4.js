(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function cl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const tt={},ir=[],mn=()=>{},Cu=()=>!1,oo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ul=n=>n.startsWith("onUpdate:"),_t=Object.assign,fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Id=Object.prototype.hasOwnProperty,Ze=(n,e)=>Id.call(n,e),Be=Array.isArray,rr=n=>ao(n)==="[object Map]",Ru=n=>ao(n)==="[object Set]",He=n=>typeof n=="function",dt=n=>typeof n=="string",ai=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Pu=n=>(st(n)||He(n))&&He(n.then)&&He(n.catch),Lu=Object.prototype.toString,ao=n=>Lu.call(n),Ud=n=>ao(n).slice(8,-1),Du=n=>ao(n)==="[object Object]",dl=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cr=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Nd=/-\w/g,ni=lo(n=>n.replace(Nd,e=>e.slice(1).toUpperCase())),Fd=/\B([A-Z])/g,Ii=lo(n=>n.replace(Fd,"-$1").toLowerCase()),Iu=lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ao=lo(n=>n?`on${Iu(n)}`:""),Qn=(n,e)=>!Object.is(n,e),Is=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Uu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},hl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Od=n=>{const e=dt(n)?Number(n):NaN;return isNaN(e)?n:e};let ql;const co=()=>ql||(ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Vd(i):pl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||st(n))return n}const Bd=/;(?![^(]*\))/g,zd=/:([^]+)/,Hd=/\/\*[^]*?\*\//g;function Vd(n){const e={};return n.replace(Hd,"").split(Bd).forEach(t=>{if(t){const i=t.split(zd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(n){let e="";if(dt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Dt(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kd=cl(Gd);function Nu(n){return!!n||n===""}const Fu=n=>!!(n&&n.__v_isRef===!0),Us=n=>dt(n)?n:n==null?"":Be(n)||st(n)&&(n.toString===Lu||!He(n.toString))?Fu(n)?Us(n.value):JSON.stringify(n,Ou,2):String(n),Ou=(n,e)=>Fu(e)?Ou(n,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[wo(i,s)+" =>"]=r,t),{})}:Ru(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>wo(t))}:ai(e)?wo(e):st(e)&&!Be(e)&&!Du(e)?String(e):e,wo=(n,e="")=>{var t;return ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let It;class Wd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Xd(){return It}let it;const Co=new WeakSet;class Bu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Co.has(this)&&(Co.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yl(this),Vu(this);const e=it,t=sn;it=this,sn=!0;try{return this.fn()}finally{Gu(this),it=e,sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_l(e);this.deps=this.depsTail=void 0,Yl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Co.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let zu=0,Rr,Pr;function Hu(n,e=!1){if(n.flags|=8,e){n.next=Pr,Pr=n;return}n.next=Rr,Rr=n}function ml(){zu++}function gl(){if(--zu>0)return;if(Pr){let e=Pr;for(Pr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Rr;){let e=Rr;for(Rr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Vu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),_l(i),qd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ga(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ku(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ku(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Fr)||(n.globalVersion=Fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ga(n))))return;n.flags|=2;const e=n.dep,t=it,i=sn;it=n,sn=!0;try{Vu(n);const r=n.fn(n._value);(e.version===0||Qn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,sn=i,Gu(n),n.flags&=-3}}function _l(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)_l(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function qd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let sn=!0;const Wu=[];function In(){Wu.push(sn),sn=!1}function Un(){const n=Wu.pop();sn=n===void 0?!0:n}function Yl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Fr=0;class Yd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!sn||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Yd(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Xu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Fr++,this.notify(e)}notify(e){ml();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gl()}}}function Xu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _a=new WeakMap,Ri=Symbol(""),va=Symbol(""),Or=Symbol("");function Et(n,e,t){if(sn&&it){let i=_a.get(n);i||_a.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new vl),r.map=i,r.key=t),r.track()}}function wn(n,e,t,i,r,s){const o=_a.get(n);if(!o){Fr++;return}const a=l=>{l&&l.trigger()};if(ml(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&dl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Or||!ai(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Or)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ri)),rr(n)&&a(o.get(va)));break;case"delete":l||(a(o.get(Ri)),rr(n)&&a(o.get(va)));break;case"set":rr(n)&&a(o.get(Ri));break}}gl()}function Ni(n){const e=qe(n);return e===n?e:(Et(e,"iterate",Or),on(n)?e:e.map(Nn))}function xl(n){return Et(n=qe(n),"iterate",Or),n}function Kn(n,e){return ii(n)?Br(sr(n)?Nn(e):e):Nn(e)}const jd={__proto__:null,[Symbol.iterator](){return Ro(this,Symbol.iterator,n=>Kn(this,n))},concat(...n){return Ni(this).concat(...n.map(e=>Be(e)?Ni(e):e))},entries(){return Ro(this,"entries",n=>(n[1]=Kn(this,n[1]),n))},every(n,e){return _n(this,"every",n,e,void 0,arguments)},filter(n,e){return _n(this,"filter",n,e,t=>t.map(i=>Kn(this,i)),arguments)},find(n,e){return _n(this,"find",n,e,t=>Kn(this,t),arguments)},findIndex(n,e){return _n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _n(this,"findLast",n,e,t=>Kn(this,t),arguments)},findLastIndex(n,e){return _n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _n(this,"forEach",n,e,void 0,arguments)},includes(...n){return Po(this,"includes",n)},indexOf(...n){return Po(this,"indexOf",n)},join(n){return Ni(this).join(n)},lastIndexOf(...n){return Po(this,"lastIndexOf",n)},map(n,e){return _n(this,"map",n,e,void 0,arguments)},pop(){return vr(this,"pop")},push(...n){return vr(this,"push",n)},reduce(n,...e){return jl(this,"reduce",n,e)},reduceRight(n,...e){return jl(this,"reduceRight",n,e)},shift(){return vr(this,"shift")},some(n,e){return _n(this,"some",n,e,void 0,arguments)},splice(...n){return vr(this,"splice",n)},toReversed(){return Ni(this).toReversed()},toSorted(n){return Ni(this).toSorted(n)},toSpliced(...n){return Ni(this).toSpliced(...n)},unshift(...n){return vr(this,"unshift",n)},values(){return Ro(this,"values",n=>Kn(this,n))}};function Ro(n,e,t){const i=xl(n),r=i[e]();return i!==n&&!on(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Kd=Array.prototype;function _n(n,e,t,i,r,s){const o=xl(n),a=o!==n&&!on(n),l=o[e];if(l!==Kd[e]){const f=l.apply(n,s);return a?Nn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Kn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function jl(n,e,t,i){const r=xl(n);let s=t;return r!==n&&(on(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Kn(n,a),l,n)}),r[e](s,...i)}function Po(n,e,t){const i=qe(n);Et(i,"iterate",Or);const r=i[e](...t);return(r===-1||r===!1)&&El(t[0])?(t[0]=qe(t[0]),i[e](...t)):r}function vr(n,e,t=[]){In(),ml();const i=qe(n)[e].apply(n,t);return gl(),Un(),i}const $d=cl("__proto__,__v_isRef,__isVue"),qu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ai));function Zd(n){ai(n)||(n=String(n));const e=qe(this);return Et(e,"has",n),e.hasOwnProperty(n)}class Yu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?ah:Zu:s?$u:Ku).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){let l;if(o&&(l=jd[t]))return l;if(t==="hasOwnProperty")return Zd}const a=Reflect.get(e,t,bt(e)?e:i);if((ai(t)?qu.has(t):$d(t))||(r||Et(e,"get",t),s))return a;if(bt(a)){const l=o&&dl(t)?a:a.value;return r&&st(l)?Ma(l):l}return st(a)?r?Ma(a):Sl(a):a}}class ju extends Yu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Be(e)&&dl(t);if(!this._isShallow){const c=ii(s);if(!on(i)&&!ii(i)&&(s=qe(s),i=qe(i)),!o&&bt(s)&&!bt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Ze(e,t),l=Reflect.set(e,t,i,bt(e)?e:r);return e===qe(r)&&(a?Qn(i,s)&&wn(e,"set",t,i):wn(e,"add",t,i)),l}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&wn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ai(t)||!qu.has(t))&&Et(e,"has",t),i}ownKeys(e){return Et(e,"iterate",Be(e)?"length":Ri),Reflect.ownKeys(e)}}class Jd extends Yu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qd=new ju,eh=new Jd,th=new ju(!0);const xa=n=>n,ns=n=>Reflect.getPrototypeOf(n);function nh(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),o=rr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?xa:e?Br:Nn;return!e&&Et(s,"iterate",l?va:Ri),_t(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function is(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ih(n,e){const t={get(r){const s=this.__v_raw,o=qe(s),a=qe(r);n||(Qn(r,a)&&Et(o,"get",r),Et(o,"get",a));const{has:l}=ns(o),c=e?xa:n?Br:Nn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Et(qe(r),"iterate",Ri),r.size},has(r){const s=this.__v_raw,o=qe(s),a=qe(r);return n||(Qn(r,a)&&Et(o,"has",r),Et(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=qe(a),c=e?xa:n?Br:Nn;return!n&&Et(l,"iterate",Ri),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return _t(t,n?{add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear")}:{add(r){!e&&!on(r)&&!ii(r)&&(r=qe(r));const s=qe(this);return ns(s).has.call(s,r)||(s.add(r),wn(s,"add",r,r)),this},set(r,s){!e&&!on(s)&&!ii(s)&&(s=qe(s));const o=qe(this),{has:a,get:l}=ns(o);let c=a.call(o,r);c||(r=qe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Qn(s,u)&&wn(o,"set",r,s):wn(o,"add",r,s),this},delete(r){const s=qe(this),{has:o,get:a}=ns(s);let l=o.call(s,r);l||(r=qe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&wn(s,"delete",r,void 0),c},clear(){const r=qe(this),s=r.size!==0,o=r.clear();return s&&wn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=nh(r,n,e)}),t}function Ml(n,e){const t=ih(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const rh={get:Ml(!1,!1)},sh={get:Ml(!1,!0)},oh={get:Ml(!0,!1)};const Ku=new WeakMap,$u=new WeakMap,Zu=new WeakMap,ah=new WeakMap;function lh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ch(n){return n.__v_skip||!Object.isExtensible(n)?0:lh(Ud(n))}function Sl(n){return ii(n)?n:yl(n,!1,Qd,rh,Ku)}function uh(n){return yl(n,!1,th,sh,$u)}function Ma(n){return yl(n,!0,eh,oh,Zu)}function yl(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=ch(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function sr(n){return ii(n)?sr(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function El(n){return n?!!n.__v_raw:!1}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function fh(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&Uu(n,"__v_skip",!0),n}const Nn=n=>st(n)?Sl(n):n,Br=n=>st(n)?Ma(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function Vn(n){return dh(n,!1)}function dh(n,e){return bt(n)?n:new hh(n,e)}class hh{constructor(e,t){this.dep=new vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:qe(e),this._value=t?e:Nn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||on(e)||ii(e);e=i?e:qe(e),Qn(e,t)&&(this._rawValue=e,this._value=i?e:Nn(e),this.dep.trigger())}}function ph(n){return bt(n)?n.value:n}const mh={get:(n,e,t)=>e==="__v_raw"?n:ph(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return bt(r)&&!bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ju(n){return sr(n)?n:new Proxy(n,mh)}class gh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Hu(this,!0),!0}get value(){const e=this.dep.track();return ku(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _h(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new gh(i,r,t)}const rs={},Xs=new WeakMap;let Mi;function vh(n,e=!1,t=Mi){if(t){let i=Xs.get(t);i||Xs.set(t,i=[]),i.push(n)}}function xh(n,e,t=tt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=T=>r?T:on(T)||r===!1||r===0?Cn(T,1):Cn(T);let u,f,d,p,x=!1,S=!1;if(bt(n)?(f=()=>n.value,x=on(n)):sr(n)?(f=()=>c(n),x=!0):Be(n)?(S=!0,x=n.some(T=>sr(T)||on(T)),f=()=>n.map(T=>{if(bt(T))return T.value;if(sr(T))return c(T);if(He(T))return l?l(T,2):T()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){In();try{d()}finally{Un()}}const T=Mi;Mi=u;try{return l?l(n,3,[p]):n(p)}finally{Mi=T}}:f=mn,e&&r){const T=f,U=r===!0?1/0:r;f=()=>Cn(T(),U)}const m=Xd(),h=()=>{u.stop(),m&&m.active&&fl(m.effects,u)};if(s&&e){const T=e;e=(...U)=>{T(...U),h()}}let A=S?new Array(n.length).fill(rs):rs;const v=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const U=u.run();if(r||x||(S?U.some((R,C)=>Qn(R,A[C])):Qn(U,A))){d&&d();const R=Mi;Mi=u;try{const C=[U,A===rs?void 0:S&&A[0]===rs?[]:A,p];A=U,l?l(e,3,C):e(...C)}finally{Mi=R}}}else u.run()};return a&&a(v),u=new Bu(f),u.scheduler=o?()=>o(v,!1):v,p=T=>vh(T,!1,u),d=u.onStop=()=>{const T=Xs.get(u);if(T){if(l)l(T,4);else for(const U of T)U();Xs.delete(u)}},e?i?v(!0):A=u.run():o?o(v.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Cn(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,bt(n))Cn(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Cn(n[i],e,t);else if(Ru(n)||rr(n))n.forEach(i=>{Cn(i,e,t)});else if(Du(n)){for(const i in n)Cn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Cn(n[i],e,t)}return n}function Xr(n,e,t,i){try{return i?n(...i):n()}catch(r){uo(r,e,t)}}function an(n,e,t,i){if(He(n)){const r=Xr(n,e,t,i);return r&&Pu(r)&&r.catch(s=>{uo(s,e,t)}),r}if(Be(n)){const r=[];for(let s=0;s<n.length;s++)r.push(an(n[s],e,t,i));return r}}function uo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){In(),Xr(s,null,10,[n,l,c]),Un();return}}Mh(n,t,r,i,o)}function Mh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const wt=[];let un=-1;const or=[];let $n=null,er=0;const Qu=Promise.resolve();let qs=null;function Sh(n){const e=qs||Qu;return n?e.then(this?n.bind(this):n):e}function yh(n){let e=un+1,t=wt.length;for(;e<t;){const i=e+t>>>1,r=wt[i],s=zr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function bl(n){if(!(n.flags&1)){const e=zr(n),t=wt[wt.length-1];!t||!(n.flags&2)&&e>=zr(t)?wt.push(n):wt.splice(yh(e),0,n),n.flags|=1,ef()}}function ef(){qs||(qs=Qu.then(nf))}function Eh(n){Be(n)?or.push(...n):$n&&n.id===-1?$n.splice(er+1,0,n):n.flags&1||(or.push(n),n.flags|=1),ef()}function Kl(n,e,t=un+1){for(;t<wt.length;t++){const i=wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function tf(n){if(or.length){const e=[...new Set(or)].sort((t,i)=>zr(t)-zr(i));if(or.length=0,$n){$n.push(...e);return}for($n=e,er=0;er<$n.length;er++){const t=$n[er];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$n=null,er=0}}const zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nf(n){try{for(un=0;un<wt.length;un++){const e=wt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<wt.length;un++){const e=wt[un];e&&(e.flags&=-2)}un=-1,wt.length=0,tf(),qs=null,(wt.length||or.length)&&nf()}}let Yt=null,rf=null;function Ys(n){const e=Yt;return Yt=n,rf=n&&n.type.__scopeId||null,e}function sf(n,e=Yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Zs(-1);const s=Ys(e);let o;try{o=n(...r)}finally{Ys(s),i._d&&Zs(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ss(n,e){if(Yt===null)return n;const t=go(Yt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=tt]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&Cn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ui(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(In(),an(l,t,8,[n.el,a,n,e]),Un())}}function bh(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function Ns(n,e,t=!1){const i=Nf();if(i||ar){let r=ar?ar._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const Th=Symbol.for("v-scx"),Ah=()=>Ns(Th);function Lo(n,e,t){return of(n,e,t)}function of(n,e,t=tt){const{immediate:i,deep:r,flush:s,once:o}=t,a=_t({},t),l=e&&i||!e&&s!=="post";let c;if(Gr){if(s==="sync"){const p=Ah();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=mn,p.resume=mn,p.pause=mn,p}}const u=Rt;a.call=(p,x,S)=>an(p,u,x,S);let f=!1;s==="post"?a.scheduler=p=>{Gt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,x)=>{x?p():bl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=xh(n,e,a);return Gr&&(c?c.push(d):l&&d()),d}function wh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?af(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=qr(this),a=of(r,s.bind(i),t);return o(),a}function af(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ch=Symbol("_vte"),lf=n=>n.__isTeleport,An=Symbol("_leaveCb"),os=Symbol("_enterCb");function Rh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ks(()=>{n.isMounted=!0}),Tl(()=>{n.isUnmounting=!0}),n}const Xt=[Function,Array],cf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},uf=n=>{const e=n.subTree;return e.component?uf(e.component):e},Ph={name:"BaseTransition",props:cf,setup(n,{slots:e}){const t=Nf(),i=Rh();return()=>{const r=e.default&&hf(e.default(),!0);if(!r||!r.length)return;const s=ff(r),o=qe(n),{mode:a}=o;if(i.isLeaving)return Do(s);const l=$l(s);if(!l)return Do(s);let c=Sa(l,o,i,t,f=>c=f);l.type!==Ct&&Hr(l,c);let u=t.subTree&&$l(t.subTree);if(u&&u.type!==Ct&&!bi(u,l)&&uf(t).type!==Ct){let f=Sa(u,o,i,t);if(Hr(u,f),a==="out-in"&&l.type!==Ct)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Do(s);a==="in-out"&&l.type!==Ct?f.delayLeave=(d,p,x)=>{const S=df(i,u);S[String(u.key)]=u,d[An]=()=>{p(),d[An]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function ff(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ct){e=t;break}}return e}const Lh=Ph;function df(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Sa(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:x,onLeaveCancelled:S,onBeforeAppear:m,onAppear:h,onAfterAppear:A,onAppearCancelled:v}=e,T=String(n.key),U=df(t,n),R=(y,M)=>{y&&an(y,i,9,M)},C=(y,M)=>{const P=M[1];R(y,M),Be(y)?y.every(D=>D.length<=1)&&P():y.length<=1&&P()},B={mode:o,persisted:a,beforeEnter(y){let M=l;if(!t.isMounted)if(s)M=m||l;else return;y[An]&&y[An](!0);const P=U[T];P&&bi(n,P)&&P.el[An]&&P.el[An](),R(M,[y])},enter(y){let M=c,P=u,D=f;if(!t.isMounted)if(s)M=h||c,P=A||u,D=v||f;else return;let V=!1;const te=y[os]=ne=>{V||(V=!0,ne?R(D,[y]):R(P,[y]),B.delayedLeave&&B.delayedLeave(),y[os]=void 0)};M?C(M,[y,te]):te()},leave(y,M){const P=String(n.key);if(y[os]&&y[os](!0),t.isUnmounting)return M();R(d,[y]);let D=!1;const V=y[An]=te=>{D||(D=!0,M(),te?R(S,[y]):R(x,[y]),y[An]=void 0,U[P]===n&&delete U[P])};U[P]=n,p?C(p,[y,V]):V()},clone(y){const M=Sa(y,e,t,i,r);return r&&r(M),M}};return B}function Do(n){if(fo(n))return n=ri(n),n.children=null,n}function $l(n){if(!fo(n))return lf(n.type)&&n.children?ff(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function Hr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===en?(o.patchFlag&128&&r++,i=i.concat(hf(o.children,e,a))):(e||o.type!==Ct)&&i.push(a!=null?ri(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function pf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const js=new WeakMap;function Lr(n,e,t,i,r=!1){if(Be(n)){n.forEach((x,S)=>Lr(x,e&&(Be(e)?e[S]:e),t,i,r));return}if(Dr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Lr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?go(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,f=a.setupState,d=qe(f),p=f===tt?Cu:x=>Ze(d,x);if(c!=null&&c!==l){if(Zl(e),dt(c))u[c]=null,p(c)&&(f[c]=null);else if(bt(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(He(l))Xr(l,a,12,[o,u]);else{const x=dt(l),S=bt(l);if(x||S){const m=()=>{if(n.f){const h=x?p(l)?f[l]:u[l]:l.value;if(r)Be(h)&&fl(h,s);else if(Be(h))h.includes(s)||h.push(s);else if(x)u[l]=[s],p(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,n.k&&(u[n.k]=A)}}else x?(u[l]=o,p(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{m(),js.delete(n)};h.id=-1,js.set(n,h),Gt(h,t)}else Zl(n),m()}}}function Zl(n){const e=js.get(n);e&&(e.flags|=8,js.delete(n))}co().requestIdleCallback;co().cancelIdleCallback;const Dr=n=>!!n.type.__asyncLoader,fo=n=>n.type.__isKeepAlive;function Dh(n,e){mf(n,"a",e)}function Ih(n,e){mf(n,"da",e)}function mf(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ho(e,i,t),t){let r=t.parent;for(;r&&r.parent;)fo(r.parent.vnode)&&Uh(i,e,t,r),r=r.parent}}function Uh(n,e,t,i){const r=ho(e,n,i,!0);gf(()=>{fl(i[e],r)},t)}function ho(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{In();const a=qr(t),l=an(e,t,n,o);return a(),Un(),l});return i?r.unshift(s):r.push(s),s}}const Bn=n=>(e,t=Rt)=>{(!Gr||n==="sp")&&ho(n,(...i)=>e(...i),t)},Nh=Bn("bm"),Ks=Bn("m"),Fh=Bn("bu"),Oh=Bn("u"),Tl=Bn("bum"),gf=Bn("um"),Bh=Bn("sp"),zh=Bn("rtg"),Hh=Bn("rtc");function Vh(n,e=Rt){ho("ec",n,e)}const Gh=Symbol.for("v-ndc"),ya=n=>n?Ff(n)?go(n):ya(n.parent):null,Ir=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ya(n.parent),$root:n=>ya(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>vf(n),$forceUpdate:n=>n.f||(n.f=()=>{bl(n.update)}),$nextTick:n=>n.n||(n.n=Sh.bind(n.proxy)),$watch:n=>wh.bind(n)}),Io=(n,e)=>n!==tt&&!n.__isScriptSetup&&Ze(n,e),kh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Io(i,e))return o[e]=1,i[e];if(r!==tt&&Ze(r,e))return o[e]=2,r[e];if(Ze(s,e))return o[e]=3,s[e];if(t!==tt&&Ze(t,e))return o[e]=4,t[e];Ea&&(o[e]=0)}}const c=Ir[e];let u,f;if(c)return e==="$attrs"&&Et(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==tt&&Ze(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ze(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Io(r,e)?(r[e]=t,!0):i!==tt&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==tt&&a[0]!=="$"&&Ze(n,a)||Io(e,a)||Ze(s,a)||Ze(i,a)||Ze(Ir,a)||Ze(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Jl(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ea=!0;function Wh(n){const e=vf(n),t=n.proxy,i=n.ctx;Ea=!1,e.beforeCreate&&Ql(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:x,activated:S,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:v,unmounted:T,render:U,renderTracked:R,renderTriggered:C,errorCaptured:B,serverPrefetch:y,expose:M,inheritAttrs:P,components:D,directives:V,filters:te}=e;if(c&&Xh(c,i,null),o)for(const J in o){const G=o[J];He(G)&&(i[J]=G.bind(t))}if(r){const J=r.call(t,t);st(J)&&(n.data=Sl(J))}if(Ea=!0,s)for(const J in s){const G=s[J],ge=He(G)?G.bind(t,t):He(G.get)?G.get.bind(t,t):mn,xe=!He(G)&&He(G.set)?G.set.bind(t):mn,Se=Rp({get:ge,set:xe});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ue=>Se.value=Ue})}if(a)for(const J in a)_f(a[J],i,t,J);if(l){const J=He(l)?l.call(t):l;Reflect.ownKeys(J).forEach(G=>{bh(G,J[G])})}u&&Ql(u,n,"c");function K(J,G){Be(G)?G.forEach(ge=>J(ge.bind(t))):G&&J(G.bind(t))}if(K(Nh,f),K(Ks,d),K(Fh,p),K(Oh,x),K(Dh,S),K(Ih,m),K(Vh,B),K(Hh,R),K(zh,C),K(Tl,A),K(gf,T),K(Bh,y),Be(M))if(M.length){const J=n.exposed||(n.exposed={});M.forEach(G=>{Object.defineProperty(J,G,{get:()=>t[G],set:ge=>t[G]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===mn&&(n.render=U),P!=null&&(n.inheritAttrs=P),D&&(n.components=D),V&&(n.directives=V),y&&pf(n)}function Xh(n,e,t=mn){Be(n)&&(n=ba(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=Ns(r.from||i,r.default,!0):s=Ns(r.from||i):s=Ns(r),bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ql(n,e,t){an(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _f(n,e,t,i){let r=i.includes(".")?af(t,i):()=>t[i];if(dt(n)){const s=e[n];He(s)&&Lo(r,s)}else if(He(n))Lo(r,n.bind(t));else if(st(n))if(Be(n))n.forEach(s=>_f(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Lo(r,s,n)}}function vf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>$s(l,c,o,!0)),$s(l,e,o)),st(e)&&s.set(e,l),l}function $s(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&$s(n,s,t,!0),r&&r.forEach(o=>$s(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=qh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const qh={data:ec,props:tc,emits:tc,methods:Ar,computed:Ar,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Ar,directives:Ar,watch:jh,provide:ec,inject:Yh};function ec(n,e){return e?n?function(){return _t(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Yh(n,e){return Ar(ba(n),ba(e))}function ba(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ar(n,e){return n?_t(Object.create(null),n,e):e}function tc(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:_t(Object.create(null),Jl(n),Jl(e??{})):e}function jh(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function xf(){return{app:null,config:{isNativeTag:Cu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kh=0;function $h(n,e){return function(i,r=null){He(i)||(i=_t({},i)),r!=null&&!st(r)&&(r=null);const s=xf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Kh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Lp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Pt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,go(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(an(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ar;ar=c;try{return u()}finally{ar=f}}};return c}}let ar=null;const Zh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ni(e)}Modifiers`]||n[`${Ii(e)}Modifiers`];function Jh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let r=t;const s=e.startsWith("update:"),o=s&&Zh(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>dt(u)?u.trim():u)),o.number&&(r=t.map(hl)));let a,l=i[a=Ao(e)]||i[a=Ao(ni(e))];!l&&s&&(l=i[a=Ao(Ii(e))]),l&&an(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,an(c,n,6,r)}}const Qh=new WeakMap;function Mf(n,e,t=!1){const i=t?Qh:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=Mf(c,e,!0);u&&(a=!0,_t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>o[l]=null):_t(o,s),st(n)&&i.set(n,o),o)}function po(n,e){return!n||!oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,Ii(e))||Ze(n,e))}function nc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:x,inheritAttrs:S}=n,m=Ys(n);let h,A;try{if(t.shapeFlag&4){const T=r||i,U=T;h=dn(c.call(U,T,u,f,p,d,x)),A=a}else{const T=e;h=dn(T.length>1?T(f,{attrs:a,slots:o,emit:l}):T(f,null)),A=e.props?a:ep(a)}}catch(T){Ur.length=0,uo(T,n,1),h=Pt(Ct)}let v=h;if(A&&S!==!1){const T=Object.keys(A),{shapeFlag:U}=v;T.length&&U&7&&(s&&T.some(ul)&&(A=tp(A,s)),v=ri(v,A,!1,!0))}return t.dirs&&(v=ri(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&Hr(v,t.transition),h=v,Ys(m),h}const ep=n=>{let e;for(const t in n)(t==="class"||t==="style"||oo(t))&&((e||(e={}))[t]=n[t]);return e},tp=(n,e)=>{const t={};for(const i in n)(!ul(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function np(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ic(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!po(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ic(i,o,c):!0:!!o;return!1}function ic(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!po(t,s))return!0}return!1}function ip({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Sf={},yf=()=>Object.create(Sf),Ef=n=>Object.getPrototypeOf(n)===Sf;function rp(n,e,t,i=!1){const r={},s=yf();n.propsDefaults=Object.create(null),bf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:uh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function sp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(po(n.emitsOptions,d))continue;const p=e[d];if(l)if(Ze(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const x=ni(d);r[x]=Ta(l,a,x,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{bf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ze(e,f)&&((u=Ii(f))===f||!Ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ta(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&wn(n.attrs,"set","")}function bf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Cr(l))continue;const c=e[l];let u;r&&Ze(r,u=ni(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:po(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=qe(t),c=a||tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ta(r,l,f,c[f],n,!Ze(c,f))}}return o}function Ta(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=qr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ii(t))&&(i=!0))}return i}const op=new WeakMap;function Tf(n,e,t=!1){const i=t?op:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[d,p]=Tf(f,e,!0);_t(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,ir),ir;if(Be(s))for(let u=0;u<s.length;u++){const f=ni(s[u]);rc(f)&&(o[f]=tt)}else if(s)for(const u in s){const f=ni(u);if(rc(f)){const d=s[u],p=o[f]=Be(d)||He(d)?{type:d}:_t({},d),x=p.type;let S=!1,m=!0;if(Be(x))for(let h=0;h<x.length;++h){const A=x[h],v=He(A)&&A.name;if(v==="Boolean"){S=!0;break}else v==="String"&&(m=!1)}else S=He(x)&&x.name==="Boolean";p[0]=S,p[1]=m,(S||Ze(p,"default"))&&a.push(f)}}const c=[o,a];return st(n)&&i.set(n,c),c}function rc(n){return n[0]!=="$"&&!Cr(n)}const Al=n=>n==="_"||n==="_ctx"||n==="$stable",wl=n=>Be(n)?n.map(dn):[dn(n)],ap=(n,e,t)=>{if(e._n)return e;const i=sf((...r)=>wl(e(...r)),t);return i._c=!1,i},Af=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Al(r))continue;const s=n[r];if(He(s))e[r]=ap(r,s,i);else if(s!=null){const o=wl(s);e[r]=()=>o}}},wf=(n,e)=>{const t=wl(e);n.slots.default=()=>t},Cf=(n,e,t)=>{for(const i in e)(t||!Al(i))&&(n[i]=e[i])},lp=(n,e,t)=>{const i=n.slots=yf();if(n.vnode.shapeFlag&32){const r=e._;r?(Cf(i,e,t),t&&Uu(i,"_",r,!0)):Af(e,i)}else e&&wf(n,e)},cp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Cf(r,e,t):(s=!e.$stable,Af(e,r)),o=e}else e&&(wf(n,e),o={default:1});if(s)for(const a in r)!Al(a)&&o[a]==null&&delete r[a]},Gt=pp;function up(n){return fp(n)}function fp(n,e){const t=co();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=mn,insertStaticContent:x}=n,S=(g,w,F,j=null,H=null,Z=null,ee=void 0,Q=null,E=!!w.dynamicChildren)=>{if(g===w)return;g&&!bi(g,w)&&(j=fe(g),Ue(g,H,Z,!0),g=null),w.patchFlag===-2&&(E=!1,w.dynamicChildren=null);const{type:_,ref:L,shapeFlag:O}=w;switch(_){case mo:m(g,w,F,j);break;case Ct:h(g,w,F,j);break;case Fs:g==null&&A(w,F,j,ee);break;case en:D(g,w,F,j,H,Z,ee,Q,E);break;default:O&1?U(g,w,F,j,H,Z,ee,Q,E):O&6?V(g,w,F,j,H,Z,ee,Q,E):(O&64||O&128)&&_.process(g,w,F,j,H,Z,ee,Q,E,be)}L!=null&&H?Lr(L,g&&g.ref,Z,w||g,!w):L==null&&g&&g.ref!=null&&Lr(g.ref,null,Z,g,!0)},m=(g,w,F,j)=>{if(g==null)i(w.el=a(w.children),F,j);else{const H=w.el=g.el;w.children!==g.children&&c(H,w.children)}},h=(g,w,F,j)=>{g==null?i(w.el=l(w.children||""),F,j):w.el=g.el},A=(g,w,F,j)=>{[g.el,g.anchor]=x(g.children,w,F,j,g.el,g.anchor)},v=({el:g,anchor:w},F,j)=>{let H;for(;g&&g!==w;)H=d(g),i(g,F,j),g=H;i(w,F,j)},T=({el:g,anchor:w})=>{let F;for(;g&&g!==w;)F=d(g),r(g),g=F;r(w)},U=(g,w,F,j,H,Z,ee,Q,E)=>{if(w.type==="svg"?ee="svg":w.type==="math"&&(ee="mathml"),g==null)R(w,F,j,H,Z,ee,Q,E);else{const _=g.el&&g.el._isVueCE?g.el:null;try{_&&_._beginPatch(),y(g,w,H,Z,ee,Q,E)}finally{_&&_._endPatch()}}},R=(g,w,F,j,H,Z,ee,Q)=>{let E,_;const{props:L,shapeFlag:O,transition:W,dirs:k}=g;if(E=g.el=o(g.type,Z,L&&L.is,L),O&8?u(E,g.children):O&16&&B(g.children,E,null,j,H,Uo(g,Z),ee,Q),k&&ui(g,null,j,"created"),C(E,g,g.scopeId,ee,j),L){for(const oe in L)oe!=="value"&&!Cr(oe)&&s(E,oe,null,L[oe],Z,j);"value"in L&&s(E,"value",null,L.value,Z),(_=L.onVnodeBeforeMount)&&cn(_,j,g)}k&&ui(g,null,j,"beforeMount");const ce=dp(H,W);ce&&W.beforeEnter(E),i(E,w,F),((_=L&&L.onVnodeMounted)||ce||k)&&Gt(()=>{_&&cn(_,j,g),ce&&W.enter(E),k&&ui(g,null,j,"mounted")},H)},C=(g,w,F,j,H)=>{if(F&&p(g,F),j)for(let Z=0;Z<j.length;Z++)p(g,j[Z]);if(H){let Z=H.subTree;if(w===Z||Df(Z.type)&&(Z.ssContent===w||Z.ssFallback===w)){const ee=H.vnode;C(g,ee,ee.scopeId,ee.slotScopeIds,H.parent)}}},B=(g,w,F,j,H,Z,ee,Q,E=0)=>{for(let _=E;_<g.length;_++){const L=g[_]=Q?Zn(g[_]):dn(g[_]);S(null,L,w,F,j,H,Z,ee,Q)}},y=(g,w,F,j,H,Z,ee)=>{const Q=w.el=g.el;let{patchFlag:E,dynamicChildren:_,dirs:L}=w;E|=g.patchFlag&16;const O=g.props||tt,W=w.props||tt;let k;if(F&&fi(F,!1),(k=W.onVnodeBeforeUpdate)&&cn(k,F,w,g),L&&ui(w,g,F,"beforeUpdate"),F&&fi(F,!0),(O.innerHTML&&W.innerHTML==null||O.textContent&&W.textContent==null)&&u(Q,""),_?M(g.dynamicChildren,_,Q,F,j,Uo(w,H),Z):ee||G(g,w,Q,null,F,j,Uo(w,H),Z,!1),E>0){if(E&16)P(Q,O,W,F,H);else if(E&2&&O.class!==W.class&&s(Q,"class",null,W.class,H),E&4&&s(Q,"style",O.style,W.style,H),E&8){const ce=w.dynamicProps;for(let oe=0;oe<ce.length;oe++){const le=ce[oe],Re=O[le],ae=W[le];(ae!==Re||le==="value")&&s(Q,le,Re,ae,H,F)}}E&1&&g.children!==w.children&&u(Q,w.children)}else!ee&&_==null&&P(Q,O,W,F,H);((k=W.onVnodeUpdated)||L)&&Gt(()=>{k&&cn(k,F,w,g),L&&ui(w,g,F,"updated")},j)},M=(g,w,F,j,H,Z,ee)=>{for(let Q=0;Q<w.length;Q++){const E=g[Q],_=w[Q],L=E.el&&(E.type===en||!bi(E,_)||E.shapeFlag&198)?f(E.el):F;S(E,_,L,null,j,H,Z,ee,!0)}},P=(g,w,F,j,H)=>{if(w!==F){if(w!==tt)for(const Z in w)!Cr(Z)&&!(Z in F)&&s(g,Z,w[Z],null,H,j);for(const Z in F){if(Cr(Z))continue;const ee=F[Z],Q=w[Z];ee!==Q&&Z!=="value"&&s(g,Z,Q,ee,H,j)}"value"in F&&s(g,"value",w.value,F.value,H)}},D=(g,w,F,j,H,Z,ee,Q,E)=>{const _=w.el=g?g.el:a(""),L=w.anchor=g?g.anchor:a("");let{patchFlag:O,dynamicChildren:W,slotScopeIds:k}=w;k&&(Q=Q?Q.concat(k):k),g==null?(i(_,F,j),i(L,F,j),B(w.children||[],F,L,H,Z,ee,Q,E)):O>0&&O&64&&W&&g.dynamicChildren&&g.dynamicChildren.length===W.length?(M(g.dynamicChildren,W,F,H,Z,ee,Q),(w.key!=null||H&&w===H.subTree)&&Rf(g,w,!0)):G(g,w,F,L,H,Z,ee,Q,E)},V=(g,w,F,j,H,Z,ee,Q,E)=>{w.slotScopeIds=Q,g==null?w.shapeFlag&512?H.ctx.activate(w,F,j,ee,E):te(w,F,j,H,Z,ee,E):ne(g,w,E)},te=(g,w,F,j,H,Z,ee)=>{const Q=g.component=Ep(g,j,H);if(fo(g)&&(Q.ctx.renderer=be),bp(Q,!1,ee),Q.asyncDep){if(H&&H.registerDep(Q,K,ee),!g.el){const E=Q.subTree=Pt(Ct);h(null,E,w,F),g.placeholder=E.el}}else K(Q,g,w,F,H,Z,ee)},ne=(g,w,F)=>{const j=w.component=g.component;if(np(g,w,F))if(j.asyncDep&&!j.asyncResolved){J(j,w,F);return}else j.next=w,j.update();else w.el=g.el,j.vnode=w},K=(g,w,F,j,H,Z,ee)=>{const Q=()=>{if(g.isMounted){let{next:O,bu:W,u:k,parent:ce,vnode:oe}=g;{const ze=Pf(g);if(ze){O&&(O.el=oe.el,J(g,O,ee)),ze.asyncDep.then(()=>{g.isUnmounted||Q()});return}}let le=O,Re;fi(g,!1),O?(O.el=oe.el,J(g,O,ee)):O=oe,W&&Is(W),(Re=O.props&&O.props.onVnodeBeforeUpdate)&&cn(Re,ce,O,oe),fi(g,!0);const ae=nc(g),_e=g.subTree;g.subTree=ae,S(_e,ae,f(_e.el),fe(_e),g,H,Z),O.el=ae.el,le===null&&ip(g,ae.el),k&&Gt(k,H),(Re=O.props&&O.props.onVnodeUpdated)&&Gt(()=>cn(Re,ce,O,oe),H)}else{let O;const{el:W,props:k}=w,{bm:ce,m:oe,parent:le,root:Re,type:ae}=g,_e=Dr(w);fi(g,!1),ce&&Is(ce),!_e&&(O=k&&k.onVnodeBeforeMount)&&cn(O,le,w),fi(g,!0);{Re.ce&&Re.ce._def.shadowRoot!==!1&&Re.ce._injectChildStyle(ae);const ze=g.subTree=nc(g);S(null,ze,F,j,g,H,Z),w.el=ze.el}if(oe&&Gt(oe,H),!_e&&(O=k&&k.onVnodeMounted)){const ze=w;Gt(()=>cn(O,le,ze),H)}(w.shapeFlag&256||le&&Dr(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&Gt(g.a,H),g.isMounted=!0,w=F=j=null}};g.scope.on();const E=g.effect=new Bu(Q);g.scope.off();const _=g.update=E.run.bind(E),L=g.job=E.runIfDirty.bind(E);L.i=g,L.id=g.uid,E.scheduler=()=>bl(L),fi(g,!0),_()},J=(g,w,F)=>{w.component=g;const j=g.vnode.props;g.vnode=w,g.next=null,sp(g,w.props,j,F),cp(g,w.children,F),In(),Kl(g),Un()},G=(g,w,F,j,H,Z,ee,Q,E=!1)=>{const _=g&&g.children,L=g?g.shapeFlag:0,O=w.children,{patchFlag:W,shapeFlag:k}=w;if(W>0){if(W&128){xe(_,O,F,j,H,Z,ee,Q,E);return}else if(W&256){ge(_,O,F,j,H,Z,ee,Q,E);return}}k&8?(L&16&&pe(_,H,Z),O!==_&&u(F,O)):L&16?k&16?xe(_,O,F,j,H,Z,ee,Q,E):pe(_,H,Z,!0):(L&8&&u(F,""),k&16&&B(O,F,j,H,Z,ee,Q,E))},ge=(g,w,F,j,H,Z,ee,Q,E)=>{g=g||ir,w=w||ir;const _=g.length,L=w.length,O=Math.min(_,L);let W;for(W=0;W<O;W++){const k=w[W]=E?Zn(w[W]):dn(w[W]);S(g[W],k,F,null,H,Z,ee,Q,E)}_>L?pe(g,H,Z,!0,!1,O):B(w,F,j,H,Z,ee,Q,E,O)},xe=(g,w,F,j,H,Z,ee,Q,E)=>{let _=0;const L=w.length;let O=g.length-1,W=L-1;for(;_<=O&&_<=W;){const k=g[_],ce=w[_]=E?Zn(w[_]):dn(w[_]);if(bi(k,ce))S(k,ce,F,null,H,Z,ee,Q,E);else break;_++}for(;_<=O&&_<=W;){const k=g[O],ce=w[W]=E?Zn(w[W]):dn(w[W]);if(bi(k,ce))S(k,ce,F,null,H,Z,ee,Q,E);else break;O--,W--}if(_>O){if(_<=W){const k=W+1,ce=k<L?w[k].el:j;for(;_<=W;)S(null,w[_]=E?Zn(w[_]):dn(w[_]),F,ce,H,Z,ee,Q,E),_++}}else if(_>W)for(;_<=O;)Ue(g[_],H,Z,!0),_++;else{const k=_,ce=_,oe=new Map;for(_=ce;_<=W;_++){const Ce=w[_]=E?Zn(w[_]):dn(w[_]);Ce.key!=null&&oe.set(Ce.key,_)}let le,Re=0;const ae=W-ce+1;let _e=!1,ze=0;const Le=new Array(ae);for(_=0;_<ae;_++)Le[_]=0;for(_=k;_<=O;_++){const Ce=g[_];if(Re>=ae){Ue(Ce,H,Z,!0);continue}let Ie;if(Ce.key!=null)Ie=oe.get(Ce.key);else for(le=ce;le<=W;le++)if(Le[le-ce]===0&&bi(Ce,w[le])){Ie=le;break}Ie===void 0?Ue(Ce,H,Z,!0):(Le[Ie-ce]=_+1,Ie>=ze?ze=Ie:_e=!0,S(Ce,w[Ie],F,null,H,Z,ee,Q,E),Re++)}const Ee=_e?hp(Le):ir;for(le=Ee.length-1,_=ae-1;_>=0;_--){const Ce=ce+_,Ie=w[Ce],nt=w[Ce+1],I=Ce+1<L?nt.el||Lf(nt):j;Le[_]===0?S(null,Ie,F,I,H,Z,ee,Q,E):_e&&(le<0||_!==Ee[le]?Se(Ie,F,I,2):le--)}}},Se=(g,w,F,j,H=null)=>{const{el:Z,type:ee,transition:Q,children:E,shapeFlag:_}=g;if(_&6){Se(g.component.subTree,w,F,j);return}if(_&128){g.suspense.move(w,F,j);return}if(_&64){ee.move(g,w,F,be);return}if(ee===en){i(Z,w,F);for(let O=0;O<E.length;O++)Se(E[O],w,F,j);i(g.anchor,w,F);return}if(ee===Fs){v(g,w,F);return}if(j!==2&&_&1&&Q)if(j===0)Q.beforeEnter(Z),i(Z,w,F),Gt(()=>Q.enter(Z),H);else{const{leave:O,delayLeave:W,afterLeave:k}=Q,ce=()=>{g.ctx.isUnmounted?r(Z):i(Z,w,F)},oe=()=>{Z._isLeaving&&Z[An](!0),O(Z,()=>{ce(),k&&k()})};W?W(Z,ce,oe):oe()}else i(Z,w,F)},Ue=(g,w,F,j=!1,H=!1)=>{const{type:Z,props:ee,ref:Q,children:E,dynamicChildren:_,shapeFlag:L,patchFlag:O,dirs:W,cacheIndex:k}=g;if(O===-2&&(H=!1),Q!=null&&(In(),Lr(Q,null,F,g,!0),Un()),k!=null&&(w.renderCache[k]=void 0),L&256){w.ctx.deactivate(g);return}const ce=L&1&&W,oe=!Dr(g);let le;if(oe&&(le=ee&&ee.onVnodeBeforeUnmount)&&cn(le,w,g),L&6)re(g.component,F,j);else{if(L&128){g.suspense.unmount(F,j);return}ce&&ui(g,null,w,"beforeUnmount"),L&64?g.type.remove(g,w,F,be,j):_&&!_.hasOnce&&(Z!==en||O>0&&O&64)?pe(_,w,F,!1,!0):(Z===en&&O&384||!H&&L&16)&&pe(E,w,F),j&&ke(g)}(oe&&(le=ee&&ee.onVnodeUnmounted)||ce)&&Gt(()=>{le&&cn(le,w,g),ce&&ui(g,null,w,"unmounted")},F)},ke=g=>{const{type:w,el:F,anchor:j,transition:H}=g;if(w===en){$(F,j);return}if(w===Fs){T(g);return}const Z=()=>{r(F),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(g.shapeFlag&1&&H&&!H.persisted){const{leave:ee,delayLeave:Q}=H,E=()=>ee(F,Z);Q?Q(g.el,Z,E):E()}else Z()},$=(g,w)=>{let F;for(;g!==w;)F=d(g),r(g),g=F;r(w)},re=(g,w,F)=>{const{bum:j,scope:H,job:Z,subTree:ee,um:Q,m:E,a:_}=g;sc(E),sc(_),j&&Is(j),H.stop(),Z&&(Z.flags|=8,Ue(ee,g,w,F)),Q&&Gt(Q,w),Gt(()=>{g.isUnmounted=!0},w)},pe=(g,w,F,j=!1,H=!1,Z=0)=>{for(let ee=Z;ee<g.length;ee++)Ue(g[ee],w,F,j,H)},fe=g=>{if(g.shapeFlag&6)return fe(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const w=d(g.anchor||g.el),F=w&&w[Ch];return F?d(F):w};let Ae=!1;const ye=(g,w,F)=>{let j;g==null?w._vnode&&(Ue(w._vnode,null,null,!0),j=w._vnode.component):S(w._vnode||null,g,w,null,null,null,F),w._vnode=g,Ae||(Ae=!0,Kl(j),tf(),Ae=!1)},be={p:S,um:Ue,m:Se,r:ke,mt:te,mc:B,pc:G,pbc:M,n:fe,o:n};return{render:ye,hydrate:void 0,createApp:$h(ye)}}function Uo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function dp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Rf(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Rf(o,a)),a.type===mo&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===en?1:0)),a.type===Ct&&!a.el&&(a.el=o.el)}}function hp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Pf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pf(e)}function sc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Lf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Lf(e.subTree):null}const Df=n=>n.__isSuspense;function pp(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Eh(n)}const en=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),Ur=[];let kt=null;function Si(n=!1){Ur.push(kt=n?null:[])}function mp(){Ur.pop(),kt=Ur[Ur.length-1]||null}let Vr=1;function Zs(n,e=!1){Vr+=n,n<0&&kt&&e&&(kt.hasOnce=!0)}function If(n){return n.dynamicChildren=Vr>0?kt||ir:null,mp(),Vr>0&&kt&&kt.push(n),n}function Fi(n,e,t,i,r,s){return If(ue(n,e,t,i,r,s,!0))}function gp(n,e,t,i,r){return If(Pt(n,e,t,i,r,!0))}function Js(n){return n?n.__v_isVNode===!0:!1}function bi(n,e){return n.type===e.type&&n.key===e.key}const Uf=({key:n})=>n??null,Os=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||bt(n)||He(n)?{i:Yt,r:n,k:e,f:!!t}:n:null);function ue(n,e=null,t=null,i=0,r=null,s=n===en?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Uf(e),ref:e&&Os(e),scopeId:rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return a?(Cl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Vr>0&&!o&&kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&kt.push(l),l}const Pt=_p;function _p(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Gh)&&(n=Ct),Js(n)){const a=ri(n,e,!0);return t&&Cl(a,t),Vr>0&&!s&&kt&&(a.shapeFlag&6?kt[kt.indexOf(n)]=a:kt.push(a)),a.patchFlag=-2,a}if(Cp(n)&&(n=n.__vccOpts),e){e=vp(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=Dt(a)),st(l)&&(El(l)&&!Be(l)&&(l=_t({},l)),e.style=pl(l))}const o=dt(n)?1:Df(n)?128:lf(n)?64:st(n)?4:He(n)?2:0;return ue(n,e,t,i,r,o,s,!0)}function vp(n){return n?El(n)||Ef(n)?_t({},n):n:null}function ri(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Mp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Uf(c),ref:e&&e.ref?t&&s?Be(s)?s.concat(Os(e)):[s,Os(e)]:Os(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==en?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ri(n.ssContent),ssFallback:n.ssFallback&&ri(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hr(u,l.clone(u)),u}function xp(n=" ",e=0){return Pt(mo,null,n,e)}function No(n,e){const t=Pt(Fs,null,n);return t.staticCount=e,t}function Fo(n="",e=!1){return e?(Si(),gp(Ct,null,n)):Pt(Ct,null,n)}function dn(n){return n==null||typeof n=="boolean"?Pt(Ct):Be(n)?Pt(en,null,n.slice()):Js(n)?Zn(n):Pt(mo,null,String(n))}function Zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ri(n)}function Cl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Cl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ef(e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[xp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Mp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(r==="style")e.style=pl([e.style,i.style]);else if(oo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function cn(n,e,t,i=null){an(n,e,7,[t,i])}const Sp=xf();let yp=0;function Ep(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Sp,s={uid:yp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tf(i,r),emitsOptions:Mf(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Jh.bind(null,s),n.ce&&n.ce(s),s}let Rt=null;const Nf=()=>Rt||Yt;let Qs,Aa;{const n=co(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Qs=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),Aa=e("__VUE_SSR_SETTERS__",t=>Gr=t)}const qr=n=>{const e=Rt;return Qs(n),n.scope.on(),()=>{n.scope.off(),Qs(e)}},oc=()=>{Rt&&Rt.scope.off(),Qs(null)};function Ff(n){return n.vnode.shapeFlag&4}let Gr=!1;function bp(n,e=!1,t=!1){e&&Aa(e);const{props:i,children:r}=n.vnode,s=Ff(n);rp(n,i,s,e),lp(n,r,t||e);const o=s?Tp(n,e):void 0;return e&&Aa(!1),o}function Tp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,kh);const{setup:i}=t;if(i){In();const r=n.setupContext=i.length>1?wp(n):null,s=qr(n),o=Xr(i,n,0,[n.props,r]),a=Pu(o);if(Un(),s(),(a||n.sp)&&!Dr(n)&&pf(n),a){if(o.then(oc,oc),e)return o.then(l=>{ac(n,l)}).catch(l=>{uo(l,n,0)});n.asyncDep=o}else ac(n,o)}else Of(n)}function ac(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=Ju(e)),Of(n)}function Of(n,e,t){const i=n.type;n.render||(n.render=i.render||mn);{const r=qr(n);In();try{Wh(n)}finally{Un(),r()}}}const Ap={get(n,e){return Et(n,"get",""),n[e]}};function wp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ap),slots:n.slots,emit:n.emit,expose:e}}function go(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ju(fh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ir)return Ir[t](n)},has(e,t){return t in e||t in Ir}})):n.proxy}function Cp(n){return He(n)&&"__vccOpts"in n}const Rp=(n,e)=>_h(n,e,Gr);function Pp(n,e,t){try{Zs(-1);const i=arguments.length;return i===2?st(e)&&!Be(e)?Js(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Js(t)&&(t=[t]),Pt(n,e,t))}finally{Zs(1)}}const Lp="3.5.27";let wa;const lc=typeof window<"u"&&window.trustedTypes;if(lc)try{wa=lc.createPolicy("vue",{createHTML:n=>n})}catch{}const Bf=wa?n=>wa.createHTML(n):n=>n,Dp="http://www.w3.org/2000/svg",Ip="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,cc=Tn&&Tn.createElement("template"),Up={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Tn.createElementNS(Dp,n):e==="mathml"?Tn.createElementNS(Ip,n):t?Tn.createElement(n,{is:t}):Tn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Tn.createTextNode(n),createComment:n=>Tn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Tn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{cc.innerHTML=Bf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=cc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gn="transition",xr="animation",kr=Symbol("_vtc"),zf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Np=_t({},cf,zf),Fp=n=>(n.displayName="Transition",n.props=Np,n),Op=Fp((n,{slots:e})=>Pp(Lh,Bp(n),e)),di=(n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},uc=n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1;function Bp(n){const e={};for(const D in n)D in zf||(e[D]=n[D]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,x=zp(r),S=x&&x[0],m=x&&x[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:v,onLeave:T,onLeaveCancelled:U,onBeforeAppear:R=h,onAppear:C=A,onAppearCancelled:B=v}=e,y=(D,V,te,ne)=>{D._enterCancelled=ne,hi(D,V?u:a),hi(D,V?c:o),te&&te()},M=(D,V)=>{D._isLeaving=!1,hi(D,f),hi(D,p),hi(D,d),V&&V()},P=D=>(V,te)=>{const ne=D?C:A,K=()=>y(V,D,te);di(ne,[V,K]),fc(()=>{hi(V,D?l:s),vn(V,D?u:a),uc(ne)||dc(V,i,S,K)})};return _t(e,{onBeforeEnter(D){di(h,[D]),vn(D,s),vn(D,o)},onBeforeAppear(D){di(R,[D]),vn(D,l),vn(D,c)},onEnter:P(!1),onAppear:P(!0),onLeave(D,V){D._isLeaving=!0;const te=()=>M(D,V);vn(D,f),D._enterCancelled?(vn(D,d),mc(D)):(mc(D),vn(D,d)),fc(()=>{D._isLeaving&&(hi(D,f),vn(D,p),uc(T)||dc(D,i,m,te))}),di(T,[D,te])},onEnterCancelled(D){y(D,!1,void 0,!0),di(v,[D])},onAppearCancelled(D){y(D,!0,void 0,!0),di(B,[D])},onLeaveCancelled(D){M(D),di(U,[D])}})}function zp(n){if(n==null)return null;if(st(n))return[Oo(n.enter),Oo(n.leave)];{const e=Oo(n);return[e,e]}}function Oo(n){return Od(n)}function vn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[kr]||(n[kr]=new Set)).add(e)}function hi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[kr];t&&(t.delete(e),t.size||(n[kr]=void 0))}function fc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Hp=0;function dc(n,e,t,i){const r=n._endId=++Hp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Vp(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function Vp(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${Gn}Delay`),s=i(`${Gn}Duration`),o=hc(r,s),a=i(`${xr}Delay`),l=i(`${xr}Duration`),c=hc(a,l);let u=null,f=0,d=0;e===Gn?o>0&&(u=Gn,f=o,d=s.length):e===xr?c>0&&(u=xr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Gn:xr:null,d=u?u===Gn?s.length:l.length:0);const p=u===Gn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Gn}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function hc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>pc(t)+pc(n[i])))}function pc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function mc(n){return(n?n.ownerDocument:document).body.offsetHeight}function Gp(n,e,t){const i=n[kr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const gc=Symbol("_vod"),kp=Symbol("_vsh"),Wp=Symbol(""),Xp=/(?:^|;)\s*display\s*:/;function qp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Bs(i,a,"")}else for(const o in e)t[o]==null&&Bs(i,o,"");for(const o in t)o==="display"&&(s=!0),Bs(i,o,t[o])}else if(r){if(e!==t){const o=i[Wp];o&&(t+=";"+o),i.cssText=t,s=Xp.test(t)}}else e&&n.removeAttribute("style");gc in n&&(n[gc]=s?i.display:"",n[kp]&&(i.display="none"))}const _c=/\s*!important$/;function Bs(n,e,t){if(Be(t))t.forEach(i=>Bs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Yp(n,e);_c.test(t)?n.setProperty(Ii(i),t.replace(_c,""),"important"):n[i]=t}}const vc=["Webkit","Moz","ms"],Bo={};function Yp(n,e){const t=Bo[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return Bo[e]=i;i=Iu(i);for(let r=0;r<vc.length;r++){const s=vc[r]+i;if(s in n)return Bo[e]=s}return e}const xc="http://www.w3.org/1999/xlink";function Mc(n,e,t,i,r,s=kd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(xc,e.slice(6,e.length)):n.setAttributeNS(xc,e,t):t==null||s&&!Nu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ai(t)?String(t):t)}function Sc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Bf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Nu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function tr(n,e,t,i){n.addEventListener(e,t,i)}function jp(n,e,t,i){n.removeEventListener(e,t,i)}const yc=Symbol("_vei");function Kp(n,e,t,i,r=null){const s=n[yc]||(n[yc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=$p(e);if(i){const c=s[e]=Qp(i,r);tr(n,a,c,l)}else o&&(jp(n,a,o,l),s[e]=void 0)}}const Ec=/(?:Once|Passive|Capture)$/;function $p(n){let e;if(Ec.test(n)){e={};let i;for(;i=n.match(Ec);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ii(n.slice(2)),e]}let zo=0;const Zp=Promise.resolve(),Jp=()=>zo||(Zp.then(()=>zo=0),zo=Date.now());function Qp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(em(i,t.value),e,5,[i])};return t.value=n,t.attached=Jp(),t}function em(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const bc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,tm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Gp(n,i,o):e==="style"?qp(n,t,i):oo(e)?ul(e)||Kp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nm(n,e,i,o))?(Sc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!dt(i))?Sc(n,ni(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mc(n,e,i,o))};function nm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bc(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return bc(e)&&dt(t)?!1:e in n}const Tc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>Is(e,t):e};function im(n){n.target.composing=!0}function Ac(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ho=Symbol("_assign");function wc(n,e,t){return e&&(n=n.trim()),t&&(n=hl(n)),n}const as={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Ho]=Tc(r);const s=i||r.props&&r.props.type==="number";tr(n,e?"change":"input",o=>{o.target.composing||n[Ho](wc(n.value,t,s))}),(t||s)&&tr(n,"change",()=>{n.value=wc(n.value,t,s)}),e||(tr(n,"compositionstart",im),tr(n,"compositionend",Ac),tr(n,"change",Ac))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ho]=Tc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?hl(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},rm=["ctrl","shift","alt","meta"],sm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>rm.some(t=>n[`${t}Key`]&&!e.includes(t))},Vo=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=sm[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},om=_t({patchProp:tm},Up);let Cc;function am(){return Cc||(Cc=up(om))}const lm=((...n)=>{const e=am().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=um(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,cm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function cm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function um(n){return dt(n)?document.querySelector(n):n}const fm="/portrait_ascii.png",dm="/neural.png",hm="/cloud.png",pm="/infineon.png",mm="/tgw.png",gm="/data.png",_m="/tower-defense-game.gif",vm="/MAP.png",xm="/RNA.png",Mm="/backpack.png",Sm="/game_preview.mp4";const Rl="167",ym=0,Rc=1,Em=2,Hf=1,bm=2,bn=3,si=0,Nt=1,Rn=2,ei=0,lr=1,Pc=2,Lc=3,Dc=4,Tm=5,Ti=100,Am=101,wm=102,Cm=103,Rm=104,Pm=200,Lm=201,Dm=202,Im=203,Ca=204,Ra=205,Um=206,Nm=207,Fm=208,Om=209,Bm=210,zm=211,Hm=212,Vm=213,Gm=214,km=0,Wm=1,Xm=2,eo=3,qm=4,Ym=5,jm=6,Km=7,Vf=0,$m=1,Zm=2,ti=0,Jm=1,Qm=2,eg=3,tg=4,ng=5,ig=6,rg=7,Gf=300,fr=301,dr=302,Pa=303,La=304,_o=306,Da=1e3,wi=1001,Ia=1002,jt=1003,sg=1004,ls=1005,nn=1006,Go=1007,Ci=1008,Fn=1009,kf=1010,Wf=1011,Wr=1012,Pl=1013,Li=1014,Pn=1015,Yr=1016,Ll=1017,Dl=1018,hr=1020,Xf=35902,qf=1021,Yf=1022,rn=1023,jf=1024,Kf=1025,cr=1026,pr=1027,$f=1028,Il=1029,Zf=1030,Ul=1031,Nl=1033,zs=33776,Hs=33777,Vs=33778,Gs=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,Ha=37496,Va=37808,Ga=37809,ka=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,ja=37815,Ka=37816,$a=37817,Za=37818,Ja=37819,Qa=37820,el=37821,ks=36492,tl=36494,nl=36495,Jf=36283,il=36284,rl=36285,sl=36286,og=3200,ag=3201,lg=0,cg=1,Jn="",fn="srgb",li="srgb-linear",Fl="display-p3",vo="display-p3-linear",to="linear",rt="srgb",no="rec709",io="p3",Oi=7680,Ic=519,ug=512,fg=513,dg=514,Qf=515,hg=516,pg=517,mg=518,gg=519,Uc=35044,Nc="300 es",Ln=2e3,ro=2001;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=Math.PI/180,ol=180/Math.PI;function jr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function _g(n,e){return(n%e+e)%e}function Wo(n,e,t){return(1-t)*n+t*e}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],S=r[0],m=r[3],h=r[6],A=r[1],v=r[4],T=r[7],U=r[2],R=r[5],C=r[8];return s[0]=o*S+a*A+l*U,s[3]=o*m+a*v+l*R,s[6]=o*h+a*T+l*C,s[1]=c*S+u*A+f*U,s[4]=c*m+u*v+f*R,s[7]=c*h+u*T+f*C,s[2]=d*S+p*A+x*U,s[5]=d*m+p*v+x*R,s[8]=d*h+p*T+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,x=t*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Ge;function ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vg(){const n=so("canvas");return n.style.display="block",n}const Fc={};function Nr(n){n in Fc||(Fc[n]=!0,console.warn(n))}function xg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Oc=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bc=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[li]:{transfer:to,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[fn]:{transfer:rt,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vo]:{transfer:to,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Bc),fromReference:n=>n.applyMatrix3(Oc)},[Fl]:{transfer:rt,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Bc),fromReference:n=>n.applyMatrix3(Oc).convertLinearToSRGB()}},Mg=new Set([li,vo]),Je={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sr[e].toReference,r=Sr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sr[n].primaries},getTransfer:function(n){return n===Jn?to:Sr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Sr[e].luminanceCoefficients)}};function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class Sg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=so("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yo(r[o].image)):s.push(Yo(r[o]))}else s=Yo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;class Ft extends gr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=wi,r=wi,s=nn,o=Ci,a=rn,l=Fn,c=Ft.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=jr(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Gf;Ft.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(p+1)/2,U=(h+1)/2,R=(u+d)/4,C=(f+S)/4,B=(x+m)/4;return v>T&&v>U?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=C/i):T>U?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=B/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=B/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-x)*(m-x)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(f-S)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bg extends gr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends bg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nd extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tg extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],x=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=S;return}if(f!==S||l!==d||c!==p||u!==x){let m=1-a;const h=l*d+c*p+u*x+f*S,A=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const U=Math.sqrt(v),R=Math.atan2(U,h*A);m=Math.sin(m*R)/U,a=Math.sin(a*R)/U}const T=a*A;if(l=l*m+d*T,c=c*m+p*T,u=u*m+x*T,f=f*m+S*T,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*f+l*p-c*d,e[t+1]=l*x+u*d+c*f-a*p,e[t+2]=c*x+u*p+a*d-l*f,e[t+3]=u*x-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new Y,zc=new Kr;class $r{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(s,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),us.subVectors(this.max,yr),zi.subVectors(e.a,yr),Hi.subVectors(e.b,yr),Vi.subVectors(e.c,yr),kn.subVectors(Hi,zi),Wn.subVectors(Vi,Hi),pi.subVectors(zi,Vi);let t=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-pi.z,pi.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,pi.z,0,-pi.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-pi.y,pi.x,0];return!Ko(t,zi,Hi,Vi,us)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,zi,Hi,Vi,us))?!1:(fs.crossVectors(kn,Wn),t=[fs.x,fs.y,fs.z],Ko(t,zi,Hi,Vi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Zt=new Y,cs=new $r,zi=new Y,Hi=new Y,Vi=new Y,kn=new Y,Wn=new Y,pi=new Y,yr=new Y,us=new Y,fs=new Y,mi=new Y;function Ko(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mi.fromArray(n,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ag=new $r,Er=new Y,$o=new Y;class xo{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ag.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add($o)),this.expandByPoint(Er.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new Y,Zo=new Y,ds=new Y,Xn=new Y,Jo=new Y,hs=new Y,Qo=new Y;class id{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zo.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ds),a=Xn.dot(this.direction),l=-Xn.dot(ds),c=Xn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,x;if(u>0)if(f=o*l-a,d=o*a-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const S=1/u;f*=S,d*=S,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zo).addScaledVector(ds,d),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){Jo.subVectors(t,e),hs.subVectors(i,e),Qo.crossVectors(Jo,hs);let o=this.direction.dot(Qo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(hs.crossVectors(Xn,hs));if(l<0)return null;const c=a*this.direction.dot(Jo.cross(Xn));if(c<0||l+c>o)return null;const u=-a*Xn.dot(Qo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,x,S,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,x,S,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,x,S,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,x=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,x=c*u,S=c*f;t[0]=d+S*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,x=c*u,S=c*f;t[0]=d-S*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,x=a*u,S=a*f;t[0]=l*u,t[4]=x*c-p,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=S-d*f,t[8]=x*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+x,t[10]=d-S*f}else if(e.order==="XZY"){const d=o*l,p=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=o*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Cg)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),qn.crossVectors(i,Ht),qn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),qn.crossVectors(i,Ht)),qn.normalize(),ps.crossVectors(Ht,qn),r[0]=qn.x,r[4]=ps.x,r[8]=Ht.x,r[1]=qn.y,r[5]=ps.y,r[9]=Ht.y,r[2]=qn.z,r[6]=ps.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],S=i[6],m=i[10],h=i[14],A=i[3],v=i[7],T=i[11],U=i[15],R=r[0],C=r[4],B=r[8],y=r[12],M=r[1],P=r[5],D=r[9],V=r[13],te=r[2],ne=r[6],K=r[10],J=r[14],G=r[3],ge=r[7],xe=r[11],Se=r[15];return s[0]=o*R+a*M+l*te+c*G,s[4]=o*C+a*P+l*ne+c*ge,s[8]=o*B+a*D+l*K+c*xe,s[12]=o*y+a*V+l*J+c*Se,s[1]=u*R+f*M+d*te+p*G,s[5]=u*C+f*P+d*ne+p*ge,s[9]=u*B+f*D+d*K+p*xe,s[13]=u*y+f*V+d*J+p*Se,s[2]=x*R+S*M+m*te+h*G,s[6]=x*C+S*P+m*ne+h*ge,s[10]=x*B+S*D+m*K+h*xe,s[14]=x*y+S*V+m*J+h*Se,s[3]=A*R+v*M+T*te+U*G,s[7]=A*C+v*P+T*ne+U*ge,s[11]=A*B+v*D+T*K+U*xe,s[15]=A*y+v*V+T*J+U*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],x=e[3],S=e[7],m=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+S*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],x=e[12],S=e[13],m=e[14],h=e[15],A=f*m*c-S*d*c+S*l*p-a*m*p-f*l*h+a*d*h,v=x*d*c-u*m*c-x*l*p+o*m*p+u*l*h-o*d*h,T=u*S*c-x*f*c+x*a*p-o*S*p-u*a*h+o*f*h,U=x*f*l-u*S*l-x*a*d+o*S*d+u*a*m-o*f*m,R=t*A+i*v+r*T+s*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=A*C,e[1]=(S*d*s-f*m*s-S*r*p+i*m*p+f*r*h-i*d*h)*C,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(u*m*s-x*d*s+x*r*p-t*m*p-u*r*h+t*d*h)*C,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*h-t*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*C,e[8]=T*C,e[9]=(x*f*s-u*S*s-x*i*p+t*S*p+u*i*h-t*f*h)*C,e[10]=(o*S*s-x*a*s+x*i*c-t*S*c-o*i*h+t*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*C,e[12]=U*C,e[13]=(u*S*r-x*f*r+x*i*d-t*S*d-u*i*m+t*f*m)*C,e[14]=(x*a*r-o*S*r-x*i*l+t*S*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,x=s*f,S=o*u,m=o*f,h=a*f,A=l*c,v=l*u,T=l*f,U=i.x,R=i.y,C=i.z;return r[0]=(1-(S+h))*U,r[1]=(p+T)*U,r[2]=(x-v)*U,r[3]=0,r[4]=(p-T)*R,r[5]=(1-(d+h))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(x+v)*C,r[9]=(m-A)*C,r[10]=(1-(d+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/o,f=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ln){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,x;if(a===Ln)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ro)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ln){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let x,S;if(a===Ln)x=(o+s)*f,S=-2*f;else if(a===ro)x=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new Y,Jt=new ft,wg=new Y(0,0,0),Cg=new Y(1,1,1),qn=new Y,ps=new Y,Ht=new Y,Hc=new ft,Vc=new Kr;class On{constructor(e=0,t=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rg=0;const Gc=new Y,ki=new Kr,Sn=new ft,ms=new Y,br=new Y,Pg=new Y,Lg=new Kr,kc=new Y(1,0,0),Wc=new Y(0,1,0),Xc=new Y(0,0,1),qc={type:"added"},Dg={type:"removed"},Wi={type:"childadded",child:null},ea={type:"childremoved",child:null};class Ot extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new Y,t=new On,i=new Kr,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ge}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ms.copy(e):ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(br,ms,this.up):Sn.lookAt(ms,br,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Sn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dg),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new Y(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new Y,yn=new Y,ta=new Y,En=new Y,Xi=new Y,qi=new Y,Yc=new Y,na=new Y,ia=new Y,ra=new Y;class pn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),yn.subVectors(i,t),ta.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(yn),l=Qt.dot(ta),c=yn.dot(yn),u=yn.dot(ta),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,x=(o*u-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),yn.subVectors(e,t),Qt.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Xi.subVectors(r,i),qi.subVectors(s,i),na.subVectors(e,i);const l=Xi.dot(na),c=qi.dot(na);if(l<=0&&c<=0)return t.copy(i);ia.subVectors(e,r);const u=Xi.dot(ia),f=qi.dot(ia);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Xi,o);ra.subVectors(e,s);const p=Xi.dot(ra),x=qi.dot(ra);if(x>=0&&p<=x)return t.copy(s);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(qi,a);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return Yc.subVectors(s,r),a=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(Yc,a);const h=1/(m+S+d);return o=S*h,a=d*h,t.copy(i).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=_g(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sa(o,s,e+1/3),this.g=sa(o,s,e),this.b=sa(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Je.fromWorkingColorSpace(yt.copy(this),e),Math.round(Ut(yt.r*255,0,255))*65536+Math.round(Ut(yt.g*255,0,255))*256+Math.round(Ut(yt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=fn){Je.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(gs);const i=Wo(Yn.h,gs.h,t),r=Wo(Yn.s,gs.s,t),s=Wo(Yn.l,gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new et;et.NAMES=sd;let Ig=0;class Zr extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=lr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Ra&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class od extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Y,_s=new Qe;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Nr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}}class ad extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ld extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pi extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ug=0;const qt=new ft,oa=new Ot,Yi=new Y,Vt=new $r,Tr=new $r,mt=new Y;class zn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?ld:ad)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Vt.min,Tr.min),Vt.expandByPoint(mt),mt.addVectors(Vt.max,Tr.max),Vt.expandByPoint(mt)):(Vt.expandByPoint(Tr.min),Vt.expandByPoint(Tr.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),mt.add(Yi)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new Y,l[B]=new Y;const c=new Y,u=new Y,f=new Y,d=new Qe,p=new Qe,x=new Qe,S=new Y,m=new Y;function h(B,y,M){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,B),p.fromBufferAttribute(s,y),x.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(d),x.sub(d);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),a[B].add(S),a[y].add(S),a[M].add(S),l[B].add(m),l[y].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,y=A.length;B<y;++B){const M=A[B],P=M.start,D=M.count;for(let V=P,te=P+D;V<te;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new Y,T=new Y,U=new Y,R=new Y;function C(B){U.fromBufferAttribute(r,B),R.copy(U);const y=a[B];v.copy(y),v.sub(U.multiplyScalar(U.dot(y))).normalize(),T.crossVectors(R,y);const P=T.dot(l[B])<0?-1:1;o.setXYZW(B,v.x,v.y,v.z,P)}for(let B=0,y=A.length;B<y;++B){const M=A[B],P=M.start,D=M.count;for(let V=P,te=P+D;V<te;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new Kt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jc=new ft,gi=new id,vs=new xo,Kc=new Y,ji=new Y,Ki=new Y,$i=new Y,aa=new Y,xs=new Y,Ms=new Qe,Ss=new Qe,ys=new Qe,$c=new Y,Zc=new Y,Jc=new Y,Es=new Y,bs=new Y;class Dn extends Ot{constructor(e=new zn,t=new od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(aa.fromBufferAttribute(f,e),o?xs.addScaledVector(aa,u):xs.addScaledVector(aa.sub(t),u))}t.add(xs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(vs.containsPoint(gi.origin)===!1&&(gi.intersectSphere(vs,Kc)===null||gi.origin.distanceToSquared(Kc)>(e.far-e.near)**2))&&(jc.copy(s).invert(),gi.copy(e.ray).applyMatrix4(jc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],h=o[m.materialIndex],A=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,U=v;T<U;T+=3){const R=a.getX(T),C=a.getX(T+1),B=a.getX(T+2);r=Ts(this,h,e,i,c,u,f,R,C,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=x,h=S;m<h;m+=3){const A=a.getX(m),v=a.getX(m+1),T=a.getX(m+2);r=Ts(this,o,e,i,c,u,f,A,v,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const m=d[x],h=o[m.materialIndex],A=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,U=v;T<U;T+=3){const R=T,C=T+1,B=T+2;r=Ts(this,h,e,i,c,u,f,R,C,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,h=S;m<h;m+=3){const A=m,v=m+1,T=m+2;r=Ts(this,o,e,i,c,u,f,A,v,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ng(n,e,t,i,r,s,o,a){let l;if(e.side===Nt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===si,a),l===null)return null;bs.copy(a),bs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:n}}function Ts(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ji),n.getVertexPosition(l,Ki),n.getVertexPosition(c,$i);const u=Ng(n,e,t,i,ji,Ki,$i,Es);if(u){r&&(Ms.fromBufferAttribute(r,a),Ss.fromBufferAttribute(r,l),ys.fromBufferAttribute(r,c),u.uv=pn.getInterpolation(Es,ji,Ki,$i,Ms,Ss,ys,new Qe)),s&&(Ms.fromBufferAttribute(s,a),Ss.fromBufferAttribute(s,l),ys.fromBufferAttribute(s,c),u.uv1=pn.getInterpolation(Es,ji,Ki,$i,Ms,Ss,ys,new Qe)),o&&($c.fromBufferAttribute(o,a),Zc.fromBufferAttribute(o,l),Jc.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(Es,ji,Ki,$i,$c,Zc,Jc,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};pn.getNormal(ji,Ki,$i,f.normal),u.face=f}return u}class Jr extends zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(u,3)),this.setAttribute("uv",new Pi(f,2));function x(S,m,h,A,v,T,U,R,C,B,y){const M=T/C,P=U/B,D=T/2,V=U/2,te=R/2,ne=C+1,K=B+1;let J=0,G=0;const ge=new Y;for(let xe=0;xe<K;xe++){const Se=xe*P-V;for(let Ue=0;Ue<ne;Ue++){const ke=Ue*M-D;ge[S]=ke*A,ge[m]=Se*v,ge[h]=te,c.push(ge.x,ge.y,ge.z),ge[S]=0,ge[m]=0,ge[h]=R>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ue/C),f.push(1-xe/B),J+=1}}for(let xe=0;xe<B;xe++)for(let Se=0;Se<C;Se++){const Ue=d+Se+ne*xe,ke=d+Se+ne*(xe+1),$=d+(Se+1)+ne*(xe+1),re=d+(Se+1)+ne*xe;l.push(Ue,ke,re),l.push(ke,$,re),G+=6}a.addGroup(p,G,y),p+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function Fg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Og={clone:mr,merge:At};var Bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ud extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new Y,Qc=new Qe,eu=new Qe;class tn extends ud{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Qc,eu),t.subVectors(eu,Qc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class Hg extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const s=new tn(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const o=new tn(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const a=new tn(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const l=new tn(Zi,Ji,e,t);l.layers=this.layers,this.add(l);const c=new tn(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class fd extends Ft{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vg extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:ei});s.uniforms.tEquirect.value=t;const o=new Dn(r,s),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=nn),new Hg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const la=new Y,Gg=new Y,kg=new Ge;class yi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=la.subVectors(i,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(la),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kg.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new xo,As=new Y;class dd{constructor(e=new yi,t=new yi,i=new yi,r=new yi,s=new yi,o=new yi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],S=r[10],m=r[11],h=r[12],A=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,m-p,T-h).normalize(),i[1].setComponents(l+s,d+c,m+p,T+h).normalize(),i[2].setComponents(l+o,d+u,m+x,T+A).normalize(),i[3].setComponents(l-o,d-u,m-x,T-A).normalize(),i[4].setComponents(l-a,d-f,m-S,T-v).normalize(),t===Ln)i[5].setComponents(l+a,d+f,m+S,T+v).normalize();else if(t===ro)i[5].setComponents(a,f,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let p=0,x=d.length;p<x;p++){const S=d[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Mo extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],x=[],S=[],m=[];for(let h=0;h<u;h++){const A=h*d-o;for(let v=0;v<c;v++){const T=v*f-s;x.push(T,-A,0),S.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const v=A+c*h,T=A+c*(h+1),U=A+1+c*(h+1),R=A+1+c*h;p.push(v,T,R),p.push(T,U,R)}this.setIndex(p),this.setAttribute("position",new Pi(x,3)),this.setAttribute("normal",new Pi(S,3)),this.setAttribute("uv",new Pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,e_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,p_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,O_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ev=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ov=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Xg,alphahash_pars_fragment:qg,alphamap_fragment:Yg,alphamap_pars_fragment:jg,alphatest_fragment:Kg,alphatest_pars_fragment:$g,aomap_fragment:Zg,aomap_pars_fragment:Jg,batching_pars_vertex:Qg,batching_vertex:e_,begin_vertex:t_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:r_,bumpmap_pars_fragment:s_,clipping_planes_fragment:o_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:c_,color_fragment:u_,color_pars_fragment:f_,color_pars_vertex:d_,color_vertex:h_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:__,displacementmap_vertex:v_,emissivemap_fragment:x_,emissivemap_pars_fragment:M_,colorspace_fragment:S_,colorspace_pars_fragment:y_,envmap_fragment:E_,envmap_common_pars_fragment:b_,envmap_pars_fragment:T_,envmap_pars_vertex:A_,envmap_physical_pars_fragment:O_,envmap_vertex:w_,fog_vertex:C_,fog_pars_vertex:R_,fog_fragment:P_,fog_pars_fragment:L_,gradientmap_pars_fragment:D_,lightmap_pars_fragment:I_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:N_,lights_pars_begin:F_,lights_toon_fragment:B_,lights_toon_pars_fragment:z_,lights_phong_fragment:H_,lights_phong_pars_fragment:V_,lights_physical_fragment:G_,lights_physical_pars_fragment:k_,lights_fragment_begin:W_,lights_fragment_maps:X_,lights_fragment_end:q_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:$_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:Q_,map_particle_pars_fragment:ev,metalnessmap_fragment:tv,metalnessmap_pars_fragment:nv,morphinstance_vertex:iv,morphcolor_vertex:rv,morphnormal_vertex:sv,morphtarget_pars_vertex:ov,morphtarget_vertex:av,normal_fragment_begin:lv,normal_fragment_maps:cv,normal_pars_fragment:uv,normal_pars_vertex:fv,normal_vertex:dv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:pv,clearcoat_normal_fragment_maps:mv,clearcoat_pars_fragment:gv,iridescence_pars_fragment:_v,opaque_fragment:vv,packing:xv,premultiplied_alpha_fragment:Mv,project_vertex:Sv,dithering_fragment:yv,dithering_pars_fragment:Ev,roughnessmap_fragment:bv,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:wv,shadowmap_vertex:Cv,shadowmask_pars_fragment:Rv,skinbase_vertex:Pv,skinning_pars_vertex:Lv,skinning_vertex:Dv,skinnormal_vertex:Iv,specularmap_fragment:Uv,specularmap_pars_fragment:Nv,tonemapping_fragment:Fv,tonemapping_pars_fragment:Ov,transmission_fragment:Bv,transmission_pars_fragment:zv,uv_pars_fragment:Hv,uv_pars_vertex:Vv,uv_vertex:Gv,worldpos_vertex:kv,background_vert:Wv,background_frag:Xv,backgroundCube_vert:qv,backgroundCube_frag:Yv,cube_vert:jv,cube_frag:Kv,depth_vert:$v,depth_frag:Zv,distanceRGBA_vert:Jv,distanceRGBA_frag:Qv,equirect_vert:e0,equirect_frag:t0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:r0,meshbasic_frag:s0,meshlambert_vert:o0,meshlambert_frag:a0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:u0,meshnormal_frag:f0,meshphong_vert:d0,meshphong_frag:h0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:v0,points_frag:x0,shadow_vert:M0,shadow_frag:S0,sprite_vert:y0,sprite_frag:E0},ve={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},hn={basic:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([ve.lights,ve.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};hn.physical={uniforms:At([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ws={r:0,b:0,g:0},vi=new On,b0=new ft;function T0(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function x(A){let v=A.isScene===!0?A.background:null;return v&&v.isTexture&&(v=(A.backgroundBlurriness>0?t:e).get(v)),v}function S(A){let v=!1;const T=x(A);T===null?h(a,l):T&&T.isColor&&(h(T,1),v=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,v){const T=x(v);T&&(T.isCubeTexture||T.mapping===_o)?(u===void 0&&(u=new Dn(new Jr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:mr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(v.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(vi)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==rt,(f!==T||d!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Dn(new Mo(2,2),new oi({name:"BackgroundMaterial",uniforms:mr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,v){A.getRGB(ws,cd(n)),i.buffers.color.setClear(ws.r,ws.g,ws.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(A,v=1){a.set(A),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:S,addToRenderList:m}}function A0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,P,D,V,te){let ne=!1;const K=f(V,D,P);s!==K&&(s=K,c(s.object)),ne=p(M,V,D,te),ne&&x(M,V,D,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,T(M,P,D,V),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,P,D){const V=D.wireframe===!0;let te=i[M.id];te===void 0&&(te={},i[M.id]=te);let ne=te[P.id];ne===void 0&&(ne={},te[P.id]=ne);let K=ne[V];return K===void 0&&(K=d(l()),ne[V]=K),K}function d(M){const P=[],D=[],V=[];for(let te=0;te<t;te++)P[te]=0,D[te]=0,V[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,P,D,V){const te=s.attributes,ne=P.attributes;let K=0;const J=D.getAttributes();for(const G in J)if(J[G].location>=0){const xe=te[G];let Se=ne[G];if(Se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),xe===void 0||xe.attribute!==Se||Se&&xe.data!==Se.data)return!0;K++}return s.attributesNum!==K||s.index!==V}function x(M,P,D,V){const te={},ne=P.attributes;let K=0;const J=D.getAttributes();for(const G in J)if(J[G].location>=0){let xe=ne[G];xe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const Se={};Se.attribute=xe,xe&&xe.data&&(Se.data=xe.data),te[G]=Se,K++}s.attributes=te,s.attributesNum=K,s.index=V}function S(){const M=s.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function m(M){h(M,0)}function h(M,P){const D=s.newAttributes,V=s.enabledAttributes,te=s.attributeDivisors;D[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),te[M]!==P&&(n.vertexAttribDivisor(M,P),te[M]=P)}function A(){const M=s.newAttributes,P=s.enabledAttributes;for(let D=0,V=P.length;D<V;D++)P[D]!==M[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function v(M,P,D,V,te,ne,K){K===!0?n.vertexAttribIPointer(M,P,D,te,ne):n.vertexAttribPointer(M,P,D,V,te,ne)}function T(M,P,D,V){S();const te=V.attributes,ne=D.getAttributes(),K=P.defaultAttributeValues;for(const J in ne){const G=ne[J];if(G.location>=0){let ge=te[J];if(ge===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const xe=ge.normalized,Se=ge.itemSize,Ue=e.get(ge);if(Ue===void 0)continue;const ke=Ue.buffer,$=Ue.type,re=Ue.bytesPerElement,pe=$===n.INT||$===n.UNSIGNED_INT||ge.gpuType===Pl;if(ge.isInterleavedBufferAttribute){const fe=ge.data,Ae=fe.stride,ye=ge.offset;if(fe.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)h(G.location+be,fe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let be=0;be<G.locationSize;be++)m(G.location+be);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let be=0;be<G.locationSize;be++)v(G.location+be,Se/G.locationSize,$,xe,Ae*re,(ye+Se/G.locationSize*be)*re,pe)}else{if(ge.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)h(G.location+fe,ge.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let fe=0;fe<G.locationSize;fe++)v(G.location+fe,Se/G.locationSize,$,xe,Se*re,Se/G.locationSize*fe*re,pe)}}else if(K!==void 0){const xe=K[J];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(G.location,xe);break;case 3:n.vertexAttrib3fv(G.location,xe);break;case 4:n.vertexAttrib4fv(G.location,xe);break;default:n.vertexAttrib1fv(G.location,xe)}}}}A()}function U(){B();for(const M in i){const P=i[M];for(const D in P){const V=P[D];for(const te in V)u(V[te].object),delete V[te];delete P[D]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const D in P){const V=P[D];for(const te in V)u(V[te].object),delete V[te];delete P[D]}delete i[M.id]}function C(M){for(const P in i){const D=i[P];if(D[M.id]===void 0)continue;const V=D[M.id];for(const te in V)u(V[te].object),delete V[te];delete D[M.id]}}function B(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function w0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let S=0;S<f;S++)x+=u[S];for(let S=0;S<d.length;S++)t.update(x,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:S,maxAttributes:m,maxVertexUniforms:h,maxVaryings:A,maxFragmentUniforms:v,vertexTextures:T,maxSamples:U}}function R0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new yi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,v=A*4;let T=h.clippingState||null;l.value=T,T=u(x,d,v,p);for(let U=0;U!==v;++U)T[U]=t[U];h.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,x){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const h=p+S*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,T=p;v!==S;++v,T+=4)o.copy(f[v]).applyMatrix4(A,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function P0(n){let e=new WeakMap;function t(o,a){return a===Pa?o.mapping=fr:a===La&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===La)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pd extends ud{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=4,tu=[.125,.215,.35,.446,.526,.582],Ai=20,ca=new pd,nu=new et;let ua=null,fa=0,da=0,ha=!1;const Ei=(1+Math.sqrt(5))/2,Qi=1/Ei,iu=[new Y(-Ei,Qi,0),new Y(Ei,Qi,0),new Y(-Qi,0,Ei),new Y(Qi,0,Ei),new Y(0,Ei,-Qi),new Y(0,Ei,Qi),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua,fa,da),this._renderer.xr.enabled=ha,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Yr,format:rn,colorSpace:li,depthBuffer:!1},r=su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(s)),this._blurMaterial=D0(s,e,t)}return r}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,i,r){const a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(nu),u.toneMapping=ti,u.autoClear=!1;const p=new od({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),x=new Dn(new Jr,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(nu),S=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):A===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Cs(r,A*v,h>2?v:0,v,v),u.setRenderTarget(r),S&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ca)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iu[(r-s-1)%iu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),S=s/x,m=isFinite(s)?1+Math.floor(u*S):Ai;m>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const h=[];let A=0;for(let C=0;C<Ai;++C){const B=C/S,y=Math.exp(-B*B/2);h.push(y),C===0?A+=y:C<m&&(A+=2*y)}for(let C=0;C<h.length;C++)h[C]=h[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const T=this._sizeLods[r],U=3*T*(r>v-nr?r-v+nr:0),R=4*(this._cubeSize-T);Cs(t,U,R,3*T,2*T),l.setRenderTarget(t),l.render(f,ca)}}function L0(n){const e=[],t=[],i=[];let r=n;const s=n-nr+1+tu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-nr?l=tu[o-n+nr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,S=3,m=2,h=1,A=new Float32Array(S*x*p),v=new Float32Array(m*x*p),T=new Float32Array(h*x*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,B=R>2?0:-1,y=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];A.set(y,S*x*R),v.set(d,m*x*R);const M=[R,R,R,R,R,R];T.set(M,h*x*R)}const U=new zn;U.setAttribute("position",new Kt(A,S)),U.setAttribute("uv",new Kt(v,m)),U.setAttribute("faceIndex",new Kt(T,h)),e.push(U),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function su(n,e,t){const i=new Di(n,e,t);return i.texture.mapping=_o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function D0(n,e,t){const i=new Float32Array(Ai),r=new Y(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ou(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function au(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===La,u=l===fr||l===dr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ru(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new ru(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function U0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Nr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function N0(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const S=d.morphAttributes[x];for(let m=0,h=S.length;m<h;m++)e.remove(S[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const S=p[x];for(let m=0,h=S.length;m<h;m++)e.update(S[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,x=f.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let v=0,T=A.length;v<T;v+=3){const U=A[v+0],R=A[v+1],C=A[v+2];d.push(U,R,R,C,C,U)}}else if(x!==void 0){const A=x.array;S=x.version;for(let v=0,T=A.length/3-1;v<T;v+=3){const U=v+0,R=v+1,C=v+2;d.push(U,R,R,C,C,U)}}else return;const m=new(ed(d)?ld:ad)(d,1);m.version=S;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function F0(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,d*o,x),t.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];t.update(m,i,1)}function f(d,p,x,S){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],S[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,x);let h=0;for(let A=0;A<x;A++)h+=p[A];for(let A=0;A<S.length;A++)t.update(h,i,S[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function O0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function B0(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let T=0;x===!0&&(T=1),S===!0&&(T=2),m===!0&&(T=3);let U=a.attributes.position.count*T,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*R*4*f),B=new nd(C,U,R,f);B.type=Pn,B.needsUpdate=!0;const y=T*4;for(let P=0;P<f;P++){const D=h[P],V=A[P],te=v[P],ne=U*R*4*P;for(let K=0;K<D.count;K++){const J=K*y;x===!0&&(r.fromBufferAttribute(D,K),C[ne+J+0]=r.x,C[ne+J+1]=r.y,C[ne+J+2]=r.z,C[ne+J+3]=0),S===!0&&(r.fromBufferAttribute(V,K),C[ne+J+4]=r.x,C[ne+J+5]=r.y,C[ne+J+6]=r.z,C[ne+J+7]=0),m===!0&&(r.fromBufferAttribute(te,K),C[ne+J+8]=r.x,C[ne+J+9]=r.y,C[ne+J+10]=r.z,C[ne+J+11]=te.itemSize===4?r.w:1)}}d={count:f,texture:B,size:new Qe(U,R)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function z0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class md extends Ft{constructor(e,t,i,r,s,o,a,l,c,u=cr){if(u!==cr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=Li),i===void 0&&u===pr&&(i=hr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gd=new Ft,lu=new md(1,1),_d=new nd,vd=new Tg,xd=new fd,cu=[],uu=[],fu=new Float32Array(16),du=new Float32Array(9),hu=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=cu[r];if(s===void 0&&(s=new Float32Array(r),cu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function So(n,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function V0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function W0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;hu.set(i),n.uniformMatrix2fv(this.addr,!1,hu),pt(t,i)}}function X0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;du.set(i),n.uniformMatrix3fv(this.addr,!1,du),pt(t,i)}}function q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;fu.set(i),n.uniformMatrix4fv(this.addr,!1,fu),pt(t,i)}}function Y0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function $0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Z0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lu.compareFunction=Qf,s=lu):s=gd,t.setTexture2D(e||s,r)}function nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vd,r)}function ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xd,r)}function rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_d,r)}function sx(n){switch(n){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return k0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return j0;case 35668:case 35672:return K0;case 35669:case 35673:return $0;case 5125:return Z0;case 36294:return J0;case 36295:return Q0;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(n,e){n.uniform1fv(this.addr,e)}function ax(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function lx(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function cx(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function ux(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fx(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dx(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hx(n,e){n.uniform1iv(this.addr,e)}function px(n,e){n.uniform2iv(this.addr,e)}function mx(n,e){n.uniform3iv(this.addr,e)}function gx(n,e){n.uniform4iv(this.addr,e)}function _x(n,e){n.uniform1uiv(this.addr,e)}function vx(n,e){n.uniform2uiv(this.addr,e)}function xx(n,e){n.uniform3uiv(this.addr,e)}function Mx(n,e){n.uniform4uiv(this.addr,e)}function Sx(n,e,t){const i=this.cache,r=e.length,s=So(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gd,s[o])}function yx(n,e,t){const i=this.cache,r=e.length,s=So(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vd,s[o])}function Ex(n,e,t){const i=this.cache,r=e.length,s=So(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xd,s[o])}function bx(n,e,t){const i=this.cache,r=e.length,s=So(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_d,s[o])}function Tx(n){switch(n){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return hx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return vx;case 36295:return xx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return bx}}class Ax{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sx(t.type)}}class wx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tx(t.type)}}class Cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function pu(n,e){n.seq.push(e),n.map[e.id]=e}function Rx(n,e,t){const i=n.name,r=i.length;for(pa.lastIndex=0;;){const s=pa.exec(i),o=pa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pu(t,c===void 0?new Ax(a,n,e):new wx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Cx(a),pu(t,f)),t=f}}}class Ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function mu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Px=37297;let Lx=0;function Dx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Ix(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===io&&t===no?i="LinearDisplayP3ToLinearSRGB":e===no&&t===io&&(i="LinearSRGBToLinearDisplayP3"),n){case li:case vo:return[i,"LinearTransferOETF"];case fn:case Fl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dx(n.getShaderSource(e),o)}else return r}function Ux(n,e){const t=Ix(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nx(n,e){let t;switch(e){case Jm:t="Linear";break;case Qm:t="Reinhard";break;case eg:t="OptimizedCineon";break;case tg:t="ACESFilmic";break;case ig:t="AgX";break;case rg:t="Neutral";break;case ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new Y;function Fx(){Je.getLuminanceCoefficients(Rs);const n=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Bx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function _u(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(Hx,Gx)}const Vx=new Map;function Gx(n,e){let t=Ve[e];if(t===void 0){const i=Vx.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(kx,Wx)}function Wx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function qx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===dr&&(e="ENVMAP_MODE_REFRACTION"),e}function jx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vf:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case Zm:e="ENVMAP_BLENDING_ADD";break}return e}function Kx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $x(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xx(t),c=qx(t),u=Yx(t),f=jx(t),d=Kx(t),p=Ox(t),x=Bx(s),S=r.createProgram();let m,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),h.length>0&&(h+=`
`)):(m=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),h=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ti?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=al(o),o=_u(o,t),o=vu(o,t),a=al(a),a=_u(a,t),a=vu(a,t),o=xu(o),a=xu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=A+m+o,T=A+h+a,U=mu(r,r.VERTEX_SHADER,v),R=mu(r,r.FRAGMENT_SHADER,T);r.attachShader(S,U),r.attachShader(S,R),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(S).trim(),V=r.getShaderInfoLog(U).trim(),te=r.getShaderInfoLog(R).trim();let ne=!0,K=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,U,R);else{const J=gu(r,U,"vertex"),G=gu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+J+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(V===""||te==="")&&(K=!1);K&&(P.diagnostics={runnable:ne,programLog:D,vertexShader:{log:V,prefix:m},fragmentShader:{log:te,prefix:h}})}r.deleteShader(U),r.deleteShader(R),B=new Ws(r,S),y=zx(r,S)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,Px)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=R,this}let Zx=0;class Jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qx(e),t.set(e,i)),i}}class Qx{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function eM(n,e,t,i,r,s,o){const a=new rd,l=new Jx,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,D,V){const te=D.fog,ne=V.geometry,K=y.isMeshStandardMaterial?D.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),G=J&&J.mapping===_o?J.image.height:null,ge=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const xe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Se=xe!==void 0?xe.length:0;let Ue=0;ne.morphAttributes.position!==void 0&&(Ue=1),ne.morphAttributes.normal!==void 0&&(Ue=2),ne.morphAttributes.color!==void 0&&(Ue=3);let ke,$,re,pe;if(ge){const Ye=hn[ge];ke=Ye.vertexShader,$=Ye.fragmentShader}else ke=y.vertexShader,$=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const fe=n.getRenderTarget(),Ae=V.isInstancedMesh===!0,ye=V.isBatchedMesh===!0,be=!!y.map,We=!!y.matcap,g=!!J,w=!!y.aoMap,F=!!y.lightMap,j=!!y.bumpMap,H=!!y.normalMap,Z=!!y.displacementMap,ee=!!y.emissiveMap,Q=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,L=y.clearcoat>0,O=y.dispersion>0,W=y.iridescence>0,k=y.sheen>0,ce=y.transmission>0,oe=_&&!!y.anisotropyMap,le=L&&!!y.clearcoatMap,Re=L&&!!y.clearcoatNormalMap,ae=L&&!!y.clearcoatRoughnessMap,_e=W&&!!y.iridescenceMap,ze=W&&!!y.iridescenceThicknessMap,Le=k&&!!y.sheenColorMap,Ee=k&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Ie=!!y.specularColorMap,nt=!!y.specularIntensityMap,I=ce&&!!y.transmissionMap,de=ce&&!!y.thicknessMap,ie=!!y.gradientMap,se=!!y.alphaMap,me=y.alphaTest>0,Ne=!!y.alphaHash,Xe=!!y.extensions;let lt=ti;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(lt=n.toneMapping);const vt={shaderID:ge,shaderType:y.type,shaderName:y.name,vertexShader:ke,fragmentShader:$,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ye,batchingColor:ye&&V._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&V.instanceColor!==null,instancingMorph:Ae&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:li,alphaToCoverage:!!y.alphaToCoverage,map:be,matcap:We,envMap:g,envMapMode:g&&J.mapping,envMapCubeUVHeight:G,aoMap:w,lightMap:F,bumpMap:j,normalMap:H,displacementMap:d&&Z,emissiveMap:ee,normalMapObjectSpace:H&&y.normalMapType===cg,normalMapTangentSpace:H&&y.normalMapType===lg,metalnessMap:Q,roughnessMap:E,anisotropy:_,anisotropyMap:oe,clearcoat:L,clearcoatMap:le,clearcoatNormalMap:Re,clearcoatRoughnessMap:ae,dispersion:O,iridescence:W,iridescenceMap:_e,iridescenceThicknessMap:ze,sheen:k,sheenColorMap:Le,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:Ie,specularIntensityMap:nt,transmission:ce,transmissionMap:I,thicknessMap:de,gradientMap:ie,opaque:y.transparent===!1&&y.blending===lr&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:Ne,combine:y.combine,mapUv:be&&S(y.map.channel),aoMapUv:w&&S(y.aoMap.channel),lightMapUv:F&&S(y.lightMap.channel),bumpMapUv:j&&S(y.bumpMap.channel),normalMapUv:H&&S(y.normalMap.channel),displacementMapUv:Z&&S(y.displacementMap.channel),emissiveMapUv:ee&&S(y.emissiveMap.channel),metalnessMapUv:Q&&S(y.metalnessMap.channel),roughnessMapUv:E&&S(y.roughnessMap.channel),anisotropyMapUv:oe&&S(y.anisotropyMap.channel),clearcoatMapUv:le&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&S(y.sheenRoughnessMap.channel),specularMapUv:Ce&&S(y.specularMap.channel),specularColorMapUv:Ie&&S(y.specularColorMap.channel),specularIntensityMapUv:nt&&S(y.specularIntensityMap.channel),transmissionMapUv:I&&S(y.transmissionMap.channel),thicknessMapUv:de&&S(y.thicknessMap.channel),alphaMapUv:se&&S(y.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(H||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ne.attributes.uv&&(be||se),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:be&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&y.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(A(M,y),v(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),y.push(a.mask)}function T(y){const M=x[y.type];let P;if(M){const D=hn[M];P=Og.clone(D.uniforms)}else P=y.uniforms;return P}function U(y,M){let P;for(let D=0,V=u.length;D<V;D++){const te=u[D];if(te.cacheKey===M){P=te,++P.usedTimes;break}}return P===void 0&&(P=new $x(n,M,y,s),u.push(P)),P}function R(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:T,acquireProgram:U,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:B}}function tM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Su(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,x,S,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:S,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=S,h.group=m),e++,h}function a(f,d,p,x,S,m){const h=o(f,d,p,x,S,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,x,S,m){const h=o(f,d,p,x,S,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||nM),i.length>1&&i.sort(d||Su),r.length>1&&r.sort(d||Su)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function iM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new yu,n.set(i,[o])):r>=s.length?(o=new yu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new et};break;case"SpotLight":t={position:new Y,direction:new Y,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function sM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oM=0;function aM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lM(n){const e=new rM,t=sM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new ft,o=new ft;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,x=0,S=0,m=0,h=0,A=0,v=0,T=0,U=0,R=0,C=0;c.sort(aM);for(let y=0,M=c.length;y<M;y++){const P=c[y],D=P.color,V=P.intensity,te=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*V,f+=D.g*V,d+=D.b*V;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],V);C++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,G=t.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=K,p++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(D).multiplyScalar(V),K.distance=te,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[S]=K;const J=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,J.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[S]=J.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[S]=G,i.spotShadowMap[S]=ne,T++}S++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(D).multiplyScalar(V),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=K,m++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const J=P.shadow,G=t.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=ne,i.pointShadowMatrix[x]=P.shadow.matrix,v++}i.point[x]=K,x++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(V),K.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[h]=K,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==p||B.pointLength!==x||B.spotLength!==S||B.rectAreaLength!==m||B.hemiLength!==h||B.numDirectionalShadows!==A||B.numPointShadows!==v||B.numSpotShadows!==T||B.numSpotMaps!==U||B.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=T+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,B.directionalLength=p,B.pointLength=x,B.spotLength=S,B.rectAreaLength=m,B.hemiLength=h,B.numDirectionalShadows=A,B.numPointShadows=v,B.numSpotShadows=T,B.numSpotMaps=U,B.numLightProbes=C,i.version=oM++)}function l(c,u){let f=0,d=0,p=0,x=0,S=0;const m=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const v=c[h];if(v.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(v.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Eu(n){const e=new lM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Eu(n),e.set(r,[a])):s>=o.length?(a=new Eu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class uM extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fM extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pM(n,e,t){let i=new dd;const r=new Qe,s=new Qe,o=new gt,a=new uM({depthPacking:ag}),l=new fM,c={},u=t.maxTextureSize,f={[si]:Nt,[Nt]:si,[Rn]:Rn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:dM,fragmentShader:hM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new zn;x.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Dn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let h=this.type;this.render=function(R,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ei),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const V=h!==bn&&this.type===bn,te=h===bn&&this.type!==bn;for(let ne=0,K=R.length;ne<K;ne++){const J=R[ne],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ge=G.getFrameExtents();if(r.multiply(ge),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,G.mapSize.y=s.y)),G.map===null||V===!0||te===!0){const Se=this.type!==bn?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new Di(r.x,r.y,Se),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const xe=G.getViewportCount();for(let Se=0;Se<xe;Se++){const Ue=G.getViewport(Se);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),D.viewport(o),G.updateMatrices(J,Se),i=G.getFrustum(),T(C,B,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===bn&&A(G,B),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,P)};function A(R,C){const B=e.update(S);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Di(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,B,d,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,B,p,S,null)}function v(R,C,B,y){let M=null;const P=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=B.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=M.uuid,V=C.uuid;let te=c[D];te===void 0&&(te={},c[D]=te);let ne=te[V];ne===void 0&&(ne=M.clone(),te[V]=ne,C.addEventListener("dispose",U)),M=ne}if(M.visible=C.visible,M.wireframe=C.wireframe,y===bn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=B}return M}function T(R,C,B,y,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===bn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const V=e.update(R),te=R.material;if(Array.isArray(te)){const ne=V.groups;for(let K=0,J=ne.length;K<J;K++){const G=ne[K],ge=te[G.materialIndex];if(ge&&ge.visible){const xe=v(R,ge,y,M);R.onBeforeShadow(n,R,C,B,V,xe,G),n.renderBufferDirect(B,null,V,xe,R,G),R.onAfterShadow(n,R,C,B,V,xe,G)}}}else if(te.visible){const ne=v(R,te,y,M);R.onBeforeShadow(n,R,C,B,V,ne,null),n.renderBufferDirect(B,null,V,ne,R,null),R.onAfterShadow(n,R,C,B,V,ne,null)}}const D=R.children;for(let V=0,te=D.length;V<te;V++)T(D[V],C,B,y,M)}function U(R){R.target.removeEventListener("dispose",U);for(const B in c){const y=c[B],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function mM(n){function e(){let I=!1;const de=new gt;let ie=null;const se=new gt(0,0,0,0);return{setMask:function(me){ie!==me&&!I&&(n.colorMask(me,me,me,me),ie=me)},setLocked:function(me){I=me},setClear:function(me,Ne,Xe,lt,vt){vt===!0&&(me*=lt,Ne*=lt,Xe*=lt),de.set(me,Ne,Xe,lt),se.equals(de)===!1&&(n.clearColor(me,Ne,Xe,lt),se.copy(de))},reset:function(){I=!1,ie=null,se.set(-1,0,0,0)}}}function t(){let I=!1,de=null,ie=null,se=null;return{setTest:function(me){me?pe(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(me){de!==me&&!I&&(n.depthMask(me),de=me)},setFunc:function(me){if(ie!==me){switch(me){case km:n.depthFunc(n.NEVER);break;case Wm:n.depthFunc(n.ALWAYS);break;case Xm:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case qm:n.depthFunc(n.EQUAL);break;case Ym:n.depthFunc(n.GEQUAL);break;case jm:n.depthFunc(n.GREATER);break;case Km:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=me}},setLocked:function(me){I=me},setClear:function(me){se!==me&&(n.clearDepth(me),se=me)},reset:function(){I=!1,de=null,ie=null,se=null}}}function i(){let I=!1,de=null,ie=null,se=null,me=null,Ne=null,Xe=null,lt=null,vt=null;return{setTest:function(Ye){I||(Ye?pe(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ye){de!==Ye&&!I&&(n.stencilMask(Ye),de=Ye)},setFunc:function(Ye,gn,ln){(ie!==Ye||se!==gn||me!==ln)&&(n.stencilFunc(Ye,gn,ln),ie=Ye,se=gn,me=ln)},setOp:function(Ye,gn,ln){(Ne!==Ye||Xe!==gn||lt!==ln)&&(n.stencilOp(Ye,gn,ln),Ne=Ye,Xe=gn,lt=ln)},setLocked:function(Ye){I=Ye},setClear:function(Ye){vt!==Ye&&(n.clearStencil(Ye),vt=Ye)},reset:function(){I=!1,de=null,ie=null,se=null,me=null,Ne=null,Xe=null,lt=null,vt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,x=!1,S=null,m=null,h=null,A=null,v=null,T=null,U=null,R=new et(0,0,0),C=0,B=!1,y=null,M=null,P=null,D=null,V=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),ne=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ne=K>=2);let G=null,ge={};const xe=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ue=new gt().fromArray(xe),ke=new gt().fromArray(Se);function $(I,de,ie,se){const me=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(I,Ne),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ie;Xe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(de+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ne}const re={};re[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),s.setFunc(eo),j(!1),H(Rc),pe(n.CULL_FACE),w(ei);function pe(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function fe(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Ae(I,de){return u[I]!==de?(n.bindFramebuffer(I,de),u[I]=de,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(I,de){let ie=d,se=!1;if(I){ie=f.get(de),ie===void 0&&(ie=[],f.set(de,ie));const me=I.textures;if(ie.length!==me.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,Xe=me.length;Ne<Xe;Ne++)ie[Ne]=n.COLOR_ATTACHMENT0+Ne;ie.length=me.length,se=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,se=!0);se&&n.drawBuffers(ie)}function be(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const We={[Ti]:n.FUNC_ADD,[Am]:n.FUNC_SUBTRACT,[wm]:n.FUNC_REVERSE_SUBTRACT};We[Cm]=n.MIN,We[Rm]=n.MAX;const g={[Pm]:n.ZERO,[Lm]:n.ONE,[Dm]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[Bm]:n.SRC_ALPHA_SATURATE,[Fm]:n.DST_COLOR,[Um]:n.DST_ALPHA,[Im]:n.ONE_MINUS_SRC_COLOR,[Ra]:n.ONE_MINUS_SRC_ALPHA,[Om]:n.ONE_MINUS_DST_COLOR,[Nm]:n.ONE_MINUS_DST_ALPHA,[zm]:n.CONSTANT_COLOR,[Hm]:n.ONE_MINUS_CONSTANT_COLOR,[Vm]:n.CONSTANT_ALPHA,[Gm]:n.ONE_MINUS_CONSTANT_ALPHA};function w(I,de,ie,se,me,Ne,Xe,lt,vt,Ye){if(I===ei){x===!0&&(fe(n.BLEND),x=!1);return}if(x===!1&&(pe(n.BLEND),x=!0),I!==Tm){if(I!==S||Ye!==B){if((m!==Ti||v!==Ti)&&(n.blendEquation(n.FUNC_ADD),m=Ti,v=Ti),Ye)switch(I){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFunc(n.ONE,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,A=null,T=null,U=null,R.set(0,0,0),C=0,S=I,B=Ye}return}me=me||de,Ne=Ne||ie,Xe=Xe||se,(de!==m||me!==v)&&(n.blendEquationSeparate(We[de],We[me]),m=de,v=me),(ie!==h||se!==A||Ne!==T||Xe!==U)&&(n.blendFuncSeparate(g[ie],g[se],g[Ne],g[Xe]),h=ie,A=se,T=Ne,U=Xe),(lt.equals(R)===!1||vt!==C)&&(n.blendColor(lt.r,lt.g,lt.b,vt),R.copy(lt),C=vt),S=I,B=!1}function F(I,de){I.side===Rn?fe(n.CULL_FACE):pe(n.CULL_FACE);let ie=I.side===Nt;de&&(ie=!ie),j(ie),I.blending===lr&&I.transparent===!1?w(ei):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const se=I.stencilWrite;o.setTest(se),se&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function H(I){I!==ym?(pe(n.CULL_FACE),I!==M&&(I===Rc?n.cullFace(n.BACK):I===Em?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),M=I}function Z(I){I!==P&&(ne&&n.lineWidth(I),P=I)}function ee(I,de,ie){I?(pe(n.POLYGON_OFFSET_FILL),(D!==de||V!==ie)&&(n.polygonOffset(de,ie),D=de,V=ie)):fe(n.POLYGON_OFFSET_FILL)}function Q(I){I?pe(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function E(I){I===void 0&&(I=n.TEXTURE0+te-1),G!==I&&(n.activeTexture(I),G=I)}function _(I,de,ie){ie===void 0&&(G===null?ie=n.TEXTURE0+te-1:ie=G);let se=ge[ie];se===void 0&&(se={type:void 0,texture:void 0},ge[ie]=se),(se.type!==I||se.texture!==de)&&(G!==ie&&(n.activeTexture(ie),G=ie),n.bindTexture(I,de||re[I]),se.type=I,se.texture=de)}function L(){const I=ge[G];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ue.copy(I))}function Ee(I){ke.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ke.copy(I))}function Ce(I,de){let ie=l.get(de);ie===void 0&&(ie=new WeakMap,l.set(de,ie));let se=ie.get(I);se===void 0&&(se=n.getUniformBlockIndex(de,I.name),ie.set(I,se))}function Ie(I,de){const se=l.get(de).get(I);a.get(de)!==se&&(n.uniformBlockBinding(de,se,I.__bindingPointIndex),a.set(de,se))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ge={},u={},f=new WeakMap,d=[],p=null,x=!1,S=null,m=null,h=null,A=null,v=null,T=null,U=null,R=new et(0,0,0),C=0,B=!1,y=null,M=null,P=null,D=null,V=null,Ue.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:fe,bindFramebuffer:Ae,drawBuffers:ye,useProgram:be,setBlending:w,setMaterial:F,setFlipSided:j,setCullFace:H,setLineWidth:Z,setPolygonOffset:ee,setScissorTest:Q,activeTexture:E,bindTexture:_,unbindTexture:L,compressedTexImage2D:O,compressedTexImage3D:W,texImage2D:_e,texImage3D:ze,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:Re,texStorage3D:ae,texSubImage2D:k,texSubImage3D:ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Le,viewport:Ee,reset:nt}}function bu(n,e,t,i){const r=gM(i);switch(t){case qf:return n*e;case jf:return n*e;case Kf:return n*e*2;case $f:return n*e/r.components*r.byteLength;case Il:return n*e/r.components*r.byteLength;case Zf:return n*e*2/r.components*r.byteLength;case Ul:return n*e*2/r.components*r.byteLength;case Yf:return n*e*3/r.components*r.byteLength;case rn:return n*e*4/r.components*r.byteLength;case Nl:return n*e*4/r.components*r.byteLength;case zs:case Hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:case Oa:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(n,8)*Math.max(e,8)/2;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ks:case tl:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jf:case il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rl:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gM(n){switch(n){case Fn:case kf:return{byteLength:1,components:1};case Wr:case Wf:case Yr:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Li:case Pl:case Pn:return{byteLength:4,components:1};case Xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function _M(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return p?new OffscreenCanvas(E,_):so("canvas")}function S(E,_,L){let O=1;const W=Q(E);if((W.width>L||W.height>L)&&(O=L/Math.max(W.width,W.height)),O<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const k=Math.floor(O*W.width),ce=Math.floor(O*W.height);f===void 0&&(f=x(k,ce));const oe=_?x(k,ce):f;return oe.width=k,oe.height=ce,oe.getContext("2d").drawImage(E,0,0,k,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+ce+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==jt&&E.minFilter!==nn}function h(E){n.generateMipmap(E)}function A(E,_,L,O,W=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=_;if(_===n.RED&&(L===n.FLOAT&&(k=n.R32F),L===n.HALF_FLOAT&&(k=n.R16F),L===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.R8UI),L===n.UNSIGNED_SHORT&&(k=n.R16UI),L===n.UNSIGNED_INT&&(k=n.R32UI),L===n.BYTE&&(k=n.R8I),L===n.SHORT&&(k=n.R16I),L===n.INT&&(k=n.R32I)),_===n.RG&&(L===n.FLOAT&&(k=n.RG32F),L===n.HALF_FLOAT&&(k=n.RG16F),L===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RG8UI),L===n.UNSIGNED_SHORT&&(k=n.RG16UI),L===n.UNSIGNED_INT&&(k=n.RG32UI),L===n.BYTE&&(k=n.RG8I),L===n.SHORT&&(k=n.RG16I),L===n.INT&&(k=n.RG32I)),_===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),_===n.RGBA){const ce=W?to:Je.getTransfer(O);L===n.FLOAT&&(k=n.RGBA32F),L===n.HALF_FLOAT&&(k=n.RGBA16F),L===n.UNSIGNED_BYTE&&(k=ce===rt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function v(E,_){let L;return E?_===null||_===Li||_===hr?L=n.DEPTH24_STENCIL8:_===Pn?L=n.DEPTH32F_STENCIL8:_===Wr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Li||_===hr?L=n.DEPTH_COMPONENT24:_===Pn?L=n.DEPTH_COMPONENT32F:_===Wr&&(L=n.DEPTH_COMPONENT16),L}function T(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==jt&&E.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function U(E){const _=E.target;_.removeEventListener("dispose",U),C(_),_.isVideoTexture&&u.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),y(_)}function C(E){const _=i.get(E);if(_.__webglInit===void 0)return;const L=E.source,O=d.get(L);if(O){const W=O[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&B(E),Object.keys(O).length===0&&d.delete(L)}i.remove(E)}function B(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const L=E.source,O=d.get(L);delete O[_.__cacheKey],o.memory.textures--}function y(E){const _=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let W=0;W<_.__webglFramebuffer[O].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[O][W]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=E.textures;for(let O=0,W=L.length;O<W;O++){const k=i.get(L[O]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(L[O])}i.remove(E)}let M=0;function P(){M=0}function D(){const E=M;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),M+=1,E}function V(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function te(E,_){const L=i.get(E);if(E.isVideoTexture&&Z(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const O=E.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(L,E,_);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function ne(E,_){const L=i.get(E);if(E.version>0&&L.__version!==E.version){ke(L,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function K(E,_){const L=i.get(E);if(E.version>0&&L.__version!==E.version){ke(L,E,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function J(E,_){const L=i.get(E);if(E.version>0&&L.__version!==E.version){$(L,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const G={[Da]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[Ia]:n.MIRRORED_REPEAT},ge={[jt]:n.NEAREST,[sg]:n.NEAREST_MIPMAP_NEAREST,[ls]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},xe={[ug]:n.NEVER,[gg]:n.ALWAYS,[fg]:n.LESS,[Qf]:n.LEQUAL,[dg]:n.EQUAL,[mg]:n.GEQUAL,[hg]:n.GREATER,[pg]:n.NOTEQUAL};function Se(E,_){if(_.type===Pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Go||_.magFilter===ls||_.magFilter===Ci||_.minFilter===nn||_.minFilter===Go||_.minFilter===ls||_.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,G[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,G[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,G[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ge[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==ls&&_.minFilter!==Ci||_.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ue(E,_){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",U));const O=_.source;let W=d.get(O);W===void 0&&(W={},d.set(O,W));const k=V(_);if(k!==E.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),W[k].usedTimes++;const ce=W[E.__cacheKey];ce!==void 0&&(W[E.__cacheKey].usedTimes--,ce.usedTimes===0&&B(_)),E.__cacheKey=k,E.__webglTexture=W[k].texture}return L}function ke(E,_,L){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const W=Ue(E,_),k=_.source;t.bindTexture(O,E.__webglTexture,n.TEXTURE0+L);const ce=i.get(k);if(k.version!==ce.__version||W===!0){t.activeTexture(n.TEXTURE0+L);const oe=Je.getPrimaries(Je.workingColorSpace),le=_.colorSpace===Jn?null:Je.getPrimaries(_.colorSpace),Re=_.colorSpace===Jn||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ae=S(_.image,!1,r.maxTextureSize);ae=ee(_,ae);const _e=s.convert(_.format,_.colorSpace),ze=s.convert(_.type);let Le=A(_.internalFormat,_e,ze,_.colorSpace,_.isVideoTexture);Se(O,_);let Ee;const Ce=_.mipmaps,Ie=_.isVideoTexture!==!0,nt=ce.__version===void 0||W===!0,I=k.dataReady,de=T(_,ae);if(_.isDepthTexture)Le=v(_.format===pr,_.type),nt&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,_e,ze,null));else if(_.isDataTexture)if(Ce.length>0){Ie&&nt&&t.texStorage2D(n.TEXTURE_2D,de,Le,Ce[0].width,Ce[0].height);for(let ie=0,se=Ce.length;ie<se;ie++)Ee=Ce[ie],Ie?I&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ee.width,Ee.height,_e,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,ie,Le,Ee.width,Ee.height,0,_e,ze,Ee.data);_.generateMipmaps=!1}else Ie?(nt&&t.texStorage2D(n.TEXTURE_2D,de,Le,ae.width,ae.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,ze,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,_e,ze,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Le,Ce[0].width,Ce[0].height,ae.depth);for(let ie=0,se=Ce.length;ie<se;ie++)if(Ee=Ce[ie],_.format!==rn)if(_e!==null)if(Ie){if(I)if(_.layerUpdates.size>0){const me=bu(Ee.width,Ee.height,_.format,_.type);for(const Ne of _.layerUpdates){const Xe=Ee.data.subarray(Ne*me/Ee.data.BYTES_PER_ELEMENT,(Ne+1)*me/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ne,Ee.width,Ee.height,1,_e,Xe,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Ee.width,Ee.height,ae.depth,_e,Ee.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Le,Ee.width,Ee.height,ae.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Ee.width,Ee.height,ae.depth,_e,ze,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Le,Ee.width,Ee.height,ae.depth,0,_e,ze,Ee.data)}else{Ie&&nt&&t.texStorage2D(n.TEXTURE_2D,de,Le,Ce[0].width,Ce[0].height);for(let ie=0,se=Ce.length;ie<se;ie++)Ee=Ce[ie],_.format!==rn?_e!==null?Ie?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Ee.width,Ee.height,_e,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ee.width,Ee.height,_e,ze,Ee.data):t.texImage2D(n.TEXTURE_2D,ie,Le,Ee.width,Ee.height,0,_e,ze,Ee.data)}else if(_.isDataArrayTexture)if(Ie){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Le,ae.width,ae.height,ae.depth),I)if(_.layerUpdates.size>0){const ie=bu(ae.width,ae.height,_.format,_.type);for(const se of _.layerUpdates){const me=ae.data.subarray(se*ie/ae.data.BYTES_PER_ELEMENT,(se+1)*ie/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ae.width,ae.height,1,_e,ze,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,ze,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,_e,ze,ae.data);else if(_.isData3DTexture)Ie?(nt&&t.texStorage3D(n.TEXTURE_3D,de,Le,ae.width,ae.height,ae.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,ze,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,_e,ze,ae.data);else if(_.isFramebufferTexture){if(nt)if(Ie)t.texStorage2D(n.TEXTURE_2D,de,Le,ae.width,ae.height);else{let ie=ae.width,se=ae.height;for(let me=0;me<de;me++)t.texImage2D(n.TEXTURE_2D,me,Le,ie,se,0,_e,ze,null),ie>>=1,se>>=1}}else if(Ce.length>0){if(Ie&&nt){const ie=Q(Ce[0]);t.texStorage2D(n.TEXTURE_2D,de,Le,ie.width,ie.height)}for(let ie=0,se=Ce.length;ie<se;ie++)Ee=Ce[ie],Ie?I&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,_e,ze,Ee):t.texImage2D(n.TEXTURE_2D,ie,Le,_e,ze,Ee);_.generateMipmaps=!1}else if(Ie){if(nt){const ie=Q(ae);t.texStorage2D(n.TEXTURE_2D,de,Le,ie.width,ie.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,ze,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,_e,ze,ae);m(_)&&h(O),ce.__version=k.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function $(E,_,L){if(_.image.length!==6)return;const O=Ue(E,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const k=i.get(W);if(W.version!==k.__version||O===!0){t.activeTexture(n.TEXTURE0+L);const ce=Je.getPrimaries(Je.workingColorSpace),oe=_.colorSpace===Jn?null:Je.getPrimaries(_.colorSpace),le=_.colorSpace===Jn||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Re=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!Re&&!ae?_e[se]=S(_.image[se],!0,r.maxCubemapSize):_e[se]=ae?_.image[se].image:_.image[se],_e[se]=ee(_,_e[se]);const ze=_e[0],Le=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type),Ce=A(_.internalFormat,Le,Ee,_.colorSpace),Ie=_.isVideoTexture!==!0,nt=k.__version===void 0||O===!0,I=W.dataReady;let de=T(_,ze);Se(n.TEXTURE_CUBE_MAP,_);let ie;if(Re){Ie&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ce,ze.width,ze.height);for(let se=0;se<6;se++){ie=_e[se].mipmaps;for(let me=0;me<ie.length;me++){const Ne=ie[me];_.format!==rn?Le!==null?Ie?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Ne.width,Ne.height,Le,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ce,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Ne.width,Ne.height,Le,Ee,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ce,Ne.width,Ne.height,0,Le,Ee,Ne.data)}}}else{if(ie=_.mipmaps,Ie&&nt){ie.length>0&&de++;const se=Q(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ce,se.width,se.height)}for(let se=0;se<6;se++)if(ae){Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,Le,Ee,_e[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ce,_e[se].width,_e[se].height,0,Le,Ee,_e[se].data);for(let me=0;me<ie.length;me++){const Xe=ie[me].image[se].image;Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Xe.width,Xe.height,Le,Ee,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ce,Xe.width,Xe.height,0,Le,Ee,Xe.data)}}else{Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Ee,_e[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ce,Le,Ee,_e[se]);for(let me=0;me<ie.length;me++){const Ne=ie[me];Ie?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Le,Ee,Ne.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ce,Le,Ee,Ne.image[se])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),k.__version=W.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function re(E,_,L,O,W,k){const ce=s.convert(L.format,L.colorSpace),oe=s.convert(L.type),le=A(L.internalFormat,ce,oe,L.colorSpace);if(!i.get(_).__hasExternalTextures){const ae=Math.max(1,_.width>>k),_e=Math.max(1,_.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,k,le,ae,_e,_.depth,0,ce,oe,null):t.texImage2D(W,k,le,ae,_e,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),H(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,W,i.get(L).__webglTexture,0,j(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,W,i.get(L).__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(E,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const O=_.depthTexture,W=O&&O.isDepthTexture?O.type:null,k=v(_.stencilBuffer,W),ce=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=j(_);H(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,k,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,E)}else{const O=_.textures;for(let W=0;W<O.length;W++){const k=O[W],ce=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),le=A(k.internalFormat,ce,oe,k.colorSpace),Re=j(_);L&&H(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,le,_.width,_.height):H(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,le,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,le,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),te(_.depthTexture,0);const O=i.get(_.depthTexture).__webglTexture,W=j(_);if(_.depthTexture.format===cr)H(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(_.depthTexture.format===pr)H(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Ae(E){const _=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");fe(_.__webglFramebuffer,E)}else if(L){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]=n.createRenderbuffer(),pe(_.__webglDepthbuffer[O],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),pe(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(E,_,L){const O=i.get(E);_!==void 0&&re(O.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ae(E)}function be(E){const _=E.texture,L=i.get(E),O=i.get(_);E.addEventListener("dispose",R);const W=E.textures,k=E.isWebGLCubeRenderTarget===!0,ce=W.length>1;if(ce||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,o.memory.textures++),k){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let le=0;le<_.mipmaps.length;le++)L.__webglFramebuffer[oe][le]=n.createFramebuffer()}else L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,le=W.length;oe<le;oe++){const Re=i.get(W[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&H(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<W.length;oe++){const le=W[oe];L.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);const Re=s.convert(le.format,le.colorSpace),ae=s.convert(le.type),_e=A(le.internalFormat,Re,ae,le.colorSpace,E.isXRRenderTarget===!0),ze=j(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,_e,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Se(n.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)re(L.__webglFramebuffer[oe][le],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else re(L.__webglFramebuffer[oe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,le=W.length;oe<le;oe++){const Re=W[oe],ae=i.get(Re);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Se(n.TEXTURE_2D,Re),re(L.__webglFramebuffer,E,Re,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Re)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,O.__webglTexture),Se(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)re(L.__webglFramebuffer[le],E,_,n.COLOR_ATTACHMENT0,oe,le);else re(L.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,oe,0);m(_)&&h(oe),t.unbindTexture()}E.depthBuffer&&Ae(E)}function We(E){const _=E.textures;for(let L=0,O=_.length;L<O;L++){const W=_[L];if(m(W)){const k=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(W).__webglTexture;t.bindTexture(k,ce),h(k),t.unbindTexture()}}}const g=[],w=[];function F(E){if(E.samples>0){if(H(E)===!1){const _=E.textures,L=E.width,O=E.height;let W=n.COLOR_BUFFER_BIT;const k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(E),oe=_.length>1;if(oe)for(let le=0;le<_.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<_.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Re=i.get(_[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,L,O,0,0,L,O,W,n.NEAREST),l===!0&&(g.length=0,w.length=0,g.push(n.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(g.push(k),w.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,g))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<_.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const Re=i.get(_[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function j(E){return Math.min(r.maxSamples,E.samples)}function H(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function ee(E,_){const L=E.colorSpace,O=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==li&&L!==Jn&&(Je.getTransfer(L)===rt?(O!==rn||W!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function Q(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=re,this.useMultisampledRTT=H}function vM(n,e){function t(i,r=Jn){let s;const o=Je.getTransfer(r);if(i===Fn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kf)return n.BYTE;if(i===Wf)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Yr)return n.HALF_FLOAT;if(i===qf)return n.ALPHA;if(i===Yf)return n.RGB;if(i===rn)return n.RGBA;if(i===jf)return n.LUMINANCE;if(i===Kf)return n.LUMINANCE_ALPHA;if(i===cr)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===$f)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===Zf)return n.RG;if(i===Ul)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===zs||i===Hs||i===Vs||i===Gs)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Na||i===Fa||i===Oa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ba||i===za||i===Ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ba||i===za)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ha)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Va||i===Ga||i===ka||i===Wa||i===Xa||i===qa||i===Ya||i===ja||i===Ka||i===$a||i===Za||i===Ja||i===Qa||i===el)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Va)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ga)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ya)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$a)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Za)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ks||i===tl||i===nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ks)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jf||i===il||i===rl||i===sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(i===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class xM extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ps extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:SM,fragmentShader:yM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bM extends gr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const S=new EM,m=t.getContextAttributes();let h=null,A=null;const v=[],T=[],U=new Qe;let R=null;const C=new tn;C.layers.enable(1),C.viewport=new gt;const B=new tn;B.layers.enable(2),B.viewport=new gt;const y=[C,B],M=new xM;M.layers.enable(1),M.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=v[$];return re===void 0&&(re=new ma,v[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=v[$];return re===void 0&&(re=new ma,v[$]=re),re.getGripSpace()},this.getHand=function($){let re=v[$];return re===void 0&&(re=new ma,v[$]=re),re.getHandSpace()};function V($){const re=T.indexOf($.inputSource);if(re===-1)return;const pe=v[re];pe!==void 0&&(pe.update($.inputSource,$.frame,c||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function te(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ne);for(let $=0;$<v.length;$++){const re=T[$];re!==null&&(T[$]=null,v[$].disconnect(re))}P=null,D=null,S.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,A=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Di(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,pe=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?pr:cr,pe=m.stencil?hr:Li);const Ae={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Di(d.textureWidth,d.textureHeight,{format:rn,type:Fn,depthTexture:new md(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ne($){for(let re=0;re<$.removed.length;re++){const pe=$.removed[re],fe=T.indexOf(pe);fe>=0&&(T[fe]=null,v[fe].disconnect(pe))}for(let re=0;re<$.added.length;re++){const pe=$.added[re];let fe=T.indexOf(pe);if(fe===-1){for(let ye=0;ye<v.length;ye++)if(ye>=T.length){T.push(pe),fe=ye;break}else if(T[ye]===null){T[ye]=pe,fe=ye;break}if(fe===-1)break}const Ae=v[fe];Ae&&Ae.connect(pe)}}const K=new Y,J=new Y;function G($,re,pe){K.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const fe=K.distanceTo(J),Ae=re.projectionMatrix.elements,ye=pe.projectionMatrix.elements,be=Ae[14]/(Ae[10]-1),We=Ae[14]/(Ae[10]+1),g=(Ae[9]+1)/Ae[5],w=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],j=(ye[8]+1)/ye[0],H=be*F,Z=be*j,ee=fe/(-F+j),Q=ee*-F;re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Q),$.translateZ(ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const E=be+ee,_=We+ee,L=H-Q,O=Z+(fe-Q),W=g*We/_*E,k=w*We/_*E;$.projectionMatrix.makePerspective(L,O,W,k,E,_),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ge($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;S.texture!==null&&($.near=S.depthNear,$.far=S.depthFar),M.near=B.near=C.near=$.near,M.far=B.far=C.far=$.far,(P!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far,C.near=P,C.far=D,B.near=P,B.far=D,C.updateProjectionMatrix(),B.updateProjectionMatrix(),$.updateProjectionMatrix());const re=$.parent,pe=M.cameras;ge(M,re);for(let fe=0;fe<pe.length;fe++)ge(pe[fe],re);pe.length===2?G(M,C,B):M.projectionMatrix.copy(C.projectionMatrix),xe($,M,re)};function xe($,re,pe){pe===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ol*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let Se=null;function Ue($,re){if(u=re.getViewerPose(c||o),x=re,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let fe=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let ye=0;ye<pe.length;ye++){const be=pe[ye];let We=null;if(p!==null)We=p.getViewport(be);else{const w=f.getViewSubImage(d,be);We=w.viewport,ye===0&&(e.setRenderTargetTextures(A,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(A))}let g=y[ye];g===void 0&&(g=new tn,g.layers.enable(ye),g.viewport=new gt,y[ye]=g),g.matrix.fromArray(be.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.projectionMatrix.fromArray(be.projectionMatrix),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),g.viewport.set(We.x,We.y,We.width,We.height),ye===0&&(M.matrix.copy(g.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(g)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const ye=f.getDepthInformation(pe[0]);ye&&ye.isValid&&ye.texture&&S.init(e,ye,r.renderState)}}for(let pe=0;pe<v.length;pe++){const fe=T[pe],Ae=v[pe];fe!==null&&Ae!==void 0&&Ae.update(fe,re,c||o)}Se&&Se($,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}const ke=new hd;ke.setAnimationLoop(Ue),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}}const xi=new On,TM=new ft;function AM(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,cd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,A,v,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,T)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),S(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,A,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Nt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Nt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),v=A.envMap,T=A.envMapRotation;v&&(m.envMap.value=v,xi.copy(T),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(TM.makeRotationFromEuler(xi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,v){const T=v.program;i.uniformBlockBinding(A,T)}function c(A,v){let T=r[A.id];T===void 0&&(x(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",m));const U=v.program;i.updateUBOMapping(A,U);const R=e.render.frame;s[A.id]!==R&&(d(A),s[A.id]=R)}function u(A){const v=f();A.__bindingPointIndex=v;const T=n.createBuffer(),U=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const v=r[A.id],T=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,C=T.length;R<C;R++){const B=Array.isArray(T[R])?T[R]:[T[R]];for(let y=0,M=B.length;y<M;y++){const P=B[y];if(p(P,R,y,U)===!0){const D=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let te=0;for(let ne=0;ne<V.length;ne++){const K=V[ne],J=S(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,D+te,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,te),te+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,v,T,U){const R=A.value,C=v+"_"+T;if(U[C]===void 0)return typeof R=="number"||typeof R=="boolean"?U[C]=R:U[C]=R.clone(),!0;{const B=U[C];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return U[C]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function x(A){const v=A.uniforms;let T=0;const U=16;for(let C=0,B=v.length;C<B;C++){const y=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,P=y.length;M<P;M++){const D=y[M],V=Array.isArray(D.value)?D.value:[D.value];for(let te=0,ne=V.length;te<ne;te++){const K=V[te],J=S(K),G=T%U,ge=G%J.boundary,xe=G+ge;T+=ge,xe!==0&&U-xe<J.storage&&(T+=U-xe),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=J.storage}}}const R=T%U;return R>0&&(T+=U-R),A.__size=T,A.__cache={},this}function S(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function m(A){const v=A.target;v.removeEventListener("dispose",m);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class CM{constructor(e={}){const{canvas:t=vg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),x=new Int32Array(4);let S=null,m=null;const h=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=ti,this.toneMappingExposure=1;const v=this;let T=!1,U=0,R=0,C=null,B=-1,y=null;const M=new gt,P=new gt;let D=null;const V=new et(0);let te=0,ne=t.width,K=t.height,J=1,G=null,ge=null;const xe=new gt(0,0,ne,K),Se=new gt(0,0,ne,K);let Ue=!1;const ke=new dd;let $=!1,re=!1;const pe=new ft,fe=new Y,Ae=new gt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function We(){return C===null?J:1}let g=i;function w(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",me,!1),g===null){const N="webgl2";if(g=w(N,b),g===null)throw w(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let F,j,H,Z,ee,Q,E,_,L,O,W,k,ce,oe,le,Re,ae,_e,ze,Le,Ee,Ce,Ie,nt;function I(){F=new U0(g),F.init(),Ce=new vM(g,F),j=new C0(g,F,e,Ce),H=new mM(g),Z=new O0(g),ee=new tM,Q=new _M(g,F,H,ee,j,Ce,Z),E=new P0(v),_=new I0(v),L=new Wg(g),Ie=new A0(g,L),O=new N0(g,L,Z,Ie),W=new z0(g,O,L,Z),ze=new B0(g,j,Q),Re=new R0(ee),k=new eM(v,E,_,F,j,Ie,Re),ce=new AM(v,ee),oe=new iM,le=new cM(F),_e=new T0(v,E,_,H,W,d,l),ae=new pM(v,W,j),nt=new wM(g,Z,j,H),Le=new w0(g,F,Z),Ee=new F0(g,F,Z),Z.programs=k.programs,v.capabilities=j,v.extensions=F,v.properties=ee,v.renderLists=oe,v.shadowMap=ae,v.state=H,v.info=Z}I();const de=new bM(v,g);this.xr=de,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const b=F.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=F.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(ne,K,!1))},this.getSize=function(b){return b.set(ne,K)},this.setSize=function(b,N,X=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,K=N,t.width=Math.floor(b*J),t.height=Math.floor(N*J),X===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(ne*J,K*J).floor()},this.setDrawingBufferSize=function(b,N,X){ne=b,K=N,J=X,t.width=Math.floor(b*X),t.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,N,X,q){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,N,X,q),H.viewport(M.copy(xe).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(Se)},this.setScissor=function(b,N,X,q){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,N,X,q),H.scissor(P.copy(Se).multiplyScalar(J).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(b){H.setScissorTest(Ue=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(b=!0,N=!0,X=!0){let q=0;if(b){let z=!1;if(C!==null){const he=C.texture.format;z=he===Nl||he===Ul||he===Il}if(z){const he=C.texture.type,Me=he===Fn||he===Li||he===Wr||he===hr||he===Ll||he===Dl,Te=_e.getClearColor(),we=_e.getClearAlpha(),Fe=Te.r,Oe=Te.g,De=Te.b;Me?(p[0]=Fe,p[1]=Oe,p[2]=De,p[3]=we,g.clearBufferuiv(g.COLOR,0,p)):(x[0]=Fe,x[1]=Oe,x[2]=De,x[3]=we,g.clearBufferiv(g.COLOR,0,x))}else q|=g.COLOR_BUFFER_BIT}N&&(q|=g.DEPTH_BUFFER_BIT),X&&(q|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",me,!1),oe.dispose(),le.dispose(),ee.dispose(),E.dispose(),_.dispose(),W.dispose(),Ie.dispose(),nt.dispose(),k.dispose(),de.dispose(),de.removeEventListener("sessionstart",ln),de.removeEventListener("sessionend",zl),ci.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Z.autoReset,N=ae.enabled,X=ae.autoUpdate,q=ae.needsUpdate,z=ae.type;I(),Z.autoReset=b,ae.enabled=N,ae.autoUpdate=X,ae.needsUpdate=q,ae.type=z}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const N=b.target;N.removeEventListener("dispose",Ne),Xe(N)}function Xe(b){lt(b),ee.remove(b)}function lt(b){const N=ee.get(b).programs;N!==void 0&&(N.forEach(function(X){k.releaseProgram(X)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,q,z,he){N===null&&(N=ye);const Me=z.isMesh&&z.matrixWorld.determinant()<0,Te=Rd(b,N,X,q,z);H.setMaterial(q,Me);let we=X.index,Fe=1;if(q.wireframe===!0){if(we=O.getWireframeAttribute(X),we===void 0)return;Fe=2}const Oe=X.drawRange,De=X.attributes.position;let je=Oe.start*Fe,ot=(Oe.start+Oe.count)*Fe;he!==null&&(je=Math.max(je,he.start*Fe),ot=Math.min(ot,(he.start+he.count)*Fe)),we!==null?(je=Math.max(je,0),ot=Math.min(ot,we.count)):De!=null&&(je=Math.max(je,0),ot=Math.min(ot,De.count));const at=ot-je;if(at<0||at===1/0)return;Ie.setup(z,q,Te,X,we);let Bt,Ke=Le;if(we!==null&&(Bt=L.get(we),Ke=Ee,Ke.setIndex(Bt)),z.isMesh)q.wireframe===!0?(H.setLineWidth(q.wireframeLinewidth*We()),Ke.setMode(g.LINES)):Ke.setMode(g.TRIANGLES);else if(z.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),H.setLineWidth(Pe*We()),z.isLineSegments?Ke.setMode(g.LINES):z.isLineLoop?Ke.setMode(g.LINE_LOOP):Ke.setMode(g.LINE_STRIP)}else z.isPoints?Ke.setMode(g.POINTS):z.isSprite&&Ke.setMode(g.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ke.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))Ke.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pe=z._multiDrawStarts,xt=z._multiDrawCounts,$e=z._multiDrawCount,$t=we?L.get(we).bytesPerElement:1,Ui=ee.get(q).currentProgram.getUniforms();for(let zt=0;zt<$e;zt++)Ui.setValue(g,"_gl_DrawID",zt),Ke.render(Pe[zt]/$t,xt[zt])}else if(z.isInstancedMesh)Ke.renderInstances(je,at,z.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xt=Math.min(X.instanceCount,Pe);Ke.renderInstances(je,at,xt)}else Ke.render(je,at)};function vt(b,N,X){b.transparent===!0&&b.side===Rn&&b.forceSinglePass===!1?(b.side=Nt,b.needsUpdate=!0,ts(b,N,X),b.side=si,b.needsUpdate=!0,ts(b,N,X),b.side=Rn):ts(b,N,X)}this.compile=function(b,N,X=null){X===null&&(X=b),m=le.get(X),m.init(N),A.push(m),X.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),b!==X&&b.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const q=new Set;return b.traverse(function(z){const he=z.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Te=he[Me];vt(Te,X,z),q.add(Te)}else vt(he,X,z),q.add(he)}),A.pop(),m=null,q},this.compileAsync=function(b,N,X=null){const q=this.compile(b,N,X);return new Promise(z=>{function he(){if(q.forEach(function(Me){ee.get(Me).currentProgram.isReady()&&q.delete(Me)}),q.size===0){z(b);return}setTimeout(he,10)}F.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ye=null;function gn(b){Ye&&Ye(b)}function ln(){ci.stop()}function zl(){ci.start()}const ci=new hd;ci.setAnimationLoop(gn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(b){Ye=b,de.setAnimationLoop(b),b===null?ci.stop():ci.start()},de.addEventListener("sessionstart",ln),de.addEventListener("sessionend",zl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,C),m=le.get(b,A.length),m.init(N),A.push(m),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ke.setFromProjectionMatrix(pe),re=this.localClippingEnabled,$=Re.init(this.clippingPlanes,re),S=oe.get(b,h.length),S.init(),h.push(S),de.enabled===!0&&de.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&yo(he,N,-1/0,v.sortObjects)}yo(b,N,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(G,ge),be=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,be&&_e.addToRenderList(S,b),this.info.render.frame++,$===!0&&Re.beginShadows();const X=m.state.shadowsArray;ae.render(X,b,N),$===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,z=S.transmissive;if(m.setupLights(),N.isArrayCamera){const he=N.cameras;if(z.length>0)for(let Me=0,Te=he.length;Me<Te;Me++){const we=he[Me];Vl(q,z,b,we)}be&&_e.render(b);for(let Me=0,Te=he.length;Me<Te;Me++){const we=he[Me];Hl(S,b,we,we.viewport)}}else z.length>0&&Vl(q,z,b,N),be&&_e.render(b),Hl(S,b,N);C!==null&&(Q.updateMultisampleRenderTarget(C),Q.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,N),Ie.resetDefaultState(),B=-1,y=null,A.pop(),A.length>0?(m=A[A.length-1],$===!0&&Re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function yo(b,N,X,q){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){q&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const Me=W.update(b),Te=b.material;Te.visible&&S.push(b,Me,Te,X,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const Me=W.update(b),Te=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ae.copy(Me.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(Te)){const we=Me.groups;for(let Fe=0,Oe=we.length;Fe<Oe;Fe++){const De=we[Fe],je=Te[De.materialIndex];je&&je.visible&&S.push(b,Me,je,X,Ae.z,De)}}else Te.visible&&S.push(b,Me,Te,X,Ae.z,null)}}const he=b.children;for(let Me=0,Te=he.length;Me<Te;Me++)yo(he[Me],N,X,q)}function Hl(b,N,X,q){const z=b.opaque,he=b.transmissive,Me=b.transparent;m.setupLightsView(X),$===!0&&Re.setGlobalState(v.clippingPlanes,X),q&&H.viewport(M.copy(q)),z.length>0&&es(z,N,X),he.length>0&&es(he,N,X),Me.length>0&&es(Me,N,X),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Vl(b,N,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Di(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Yr:Fn,minFilter:Ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const he=m.state.transmissionRenderTarget[q.id],Me=q.viewport||M;he.setSize(Me.z,Me.w);const Te=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(V),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),be&&_e.render(X);const we=v.toneMapping;v.toneMapping=ti;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),$===!0&&Re.setGlobalState(v.clippingPlanes,q),es(b,X,q),Q.updateMultisampleRenderTarget(he),Q.updateRenderTargetMipmap(he),F.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let De=0,je=N.length;De<je;De++){const ot=N[De],at=ot.object,Bt=ot.geometry,Ke=ot.material,Pe=ot.group;if(Ke.side===Rn&&at.layers.test(q.layers)){const xt=Ke.side;Ke.side=Nt,Ke.needsUpdate=!0,Gl(at,X,q,Bt,Ke,Pe),Ke.side=xt,Ke.needsUpdate=!0,Oe=!0}}Oe===!0&&(Q.updateMultisampleRenderTarget(he),Q.updateRenderTargetMipmap(he))}v.setRenderTarget(Te),v.setClearColor(V,te),Fe!==void 0&&(q.viewport=Fe),v.toneMapping=we}function es(b,N,X){const q=N.isScene===!0?N.overrideMaterial:null;for(let z=0,he=b.length;z<he;z++){const Me=b[z],Te=Me.object,we=Me.geometry,Fe=q===null?Me.material:q,Oe=Me.group;Te.layers.test(X.layers)&&Gl(Te,N,X,we,Fe,Oe)}}function Gl(b,N,X,q,z,he){b.onBeforeRender(v,N,X,q,z,he),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.transparent===!0&&z.side===Rn&&z.forceSinglePass===!1?(z.side=Nt,z.needsUpdate=!0,v.renderBufferDirect(X,N,q,z,b,he),z.side=si,z.needsUpdate=!0,v.renderBufferDirect(X,N,q,z,b,he),z.side=Rn):v.renderBufferDirect(X,N,q,z,b,he),b.onAfterRender(v,N,X,q,z,he)}function ts(b,N,X){N.isScene!==!0&&(N=ye);const q=ee.get(b),z=m.state.lights,he=m.state.shadowsArray,Me=z.state.version,Te=k.getParameters(b,z.state,he,N,X),we=k.getProgramCacheKey(Te);let Fe=q.programs;q.environment=b.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(b.isMeshStandardMaterial?_:E).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Ne),Fe=new Map,q.programs=Fe);let Oe=Fe.get(we);if(Oe!==void 0){if(q.currentProgram===Oe&&q.lightsStateVersion===Me)return Wl(b,Te),Oe}else Te.uniforms=k.getUniforms(b),b.onBeforeCompile(Te,v),Oe=k.acquireProgram(Te,we),Fe.set(we,Oe),q.uniforms=Te.uniforms;const De=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=Re.uniform),Wl(b,Te),q.needsLights=Ld(b),q.lightsStateVersion=Me,q.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Oe,q.uniformsList=null,Oe}function kl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Ws.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Wl(b,N){const X=ee.get(b);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Rd(b,N,X,q,z){N.isScene!==!0&&(N=ye),Q.resetTextureUnits();const he=N.fog,Me=q.isMeshStandardMaterial?N.environment:null,Te=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:li,we=(q.isMeshStandardMaterial?_:E).get(q.envMap||Me),Fe=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,ot=!!X.morphAttributes.color;let at=ti;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(at=v.toneMapping);const Bt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ke=Bt!==void 0?Bt.length:0,Pe=ee.get(q),xt=m.state.lights;if($===!0&&(re===!0||b!==y)){const Wt=b===y&&q.id===B;Re.setState(q,b,Wt)}let $e=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xt.state.version||Pe.outputColorSpace!==Te||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==we||q.fog===!0&&Pe.fog!==he||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Re.numPlanes||Pe.numIntersection!==Re.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Oe||Pe.morphTargets!==De||Pe.morphNormals!==je||Pe.morphColors!==ot||Pe.toneMapping!==at||Pe.morphTargetsCount!==Ke)&&($e=!0):($e=!0,Pe.__version=q.version);let $t=Pe.currentProgram;$e===!0&&($t=ts(q,N,z));let Ui=!1,zt=!1,Eo=!1;const ct=$t.getUniforms(),Hn=Pe.uniforms;if(H.useProgram($t.program)&&(Ui=!0,zt=!0,Eo=!0),q.id!==B&&(B=q.id,zt=!0),Ui||y!==b){ct.setValue(g,"projectionMatrix",b.projectionMatrix),ct.setValue(g,"viewMatrix",b.matrixWorldInverse);const Wt=ct.map.cameraPosition;Wt!==void 0&&Wt.setValue(g,fe.setFromMatrixPosition(b.matrixWorld)),j.logarithmicDepthBuffer&&ct.setValue(g,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ct.setValue(g,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,zt=!0,Eo=!0)}if(z.isSkinnedMesh){ct.setOptional(g,z,"bindMatrix"),ct.setOptional(g,z,"bindMatrixInverse");const Wt=z.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(g,"boneTexture",Wt.boneTexture,Q))}z.isBatchedMesh&&(ct.setOptional(g,z,"batchingTexture"),ct.setValue(g,"batchingTexture",z._matricesTexture,Q),ct.setOptional(g,z,"batchingIdTexture"),ct.setValue(g,"batchingIdTexture",z._indirectTexture,Q),ct.setOptional(g,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(g,"batchingColorTexture",z._colorsTexture,Q));const bo=X.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0)&&ze.update(z,X,$t),(zt||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,ct.setValue(g,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Hn.envMap.value=we,Hn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(Hn.envMapIntensity.value=N.environmentIntensity),zt&&(ct.setValue(g,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Pd(Hn,Eo),he&&q.fog===!0&&ce.refreshFogUniforms(Hn,he),ce.refreshMaterialUniforms(Hn,q,J,K,m.state.transmissionRenderTarget[b.id]),Ws.upload(g,kl(Pe),Hn,Q)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ws.upload(g,kl(Pe),Hn,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ct.setValue(g,"center",z.center),ct.setValue(g,"modelViewMatrix",z.modelViewMatrix),ct.setValue(g,"normalMatrix",z.normalMatrix),ct.setValue(g,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Wt=q.uniformsGroups;for(let To=0,Dd=Wt.length;To<Dd;To++){const Xl=Wt[To];nt.update(Xl,$t),nt.bind(Xl,$t)}}return $t}function Pd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Ld(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,X){ee.get(b.texture).__webglTexture=N,ee.get(b.depthTexture).__webglTexture=X;const q=ee.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const X=ee.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,X=0){C=b,U=N,R=X;let q=!0,z=null,he=!1,Me=!1;if(b){const we=ee.get(b);we.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(g.FRAMEBUFFER,null),q=!1):we.__webglFramebuffer===void 0?Q.setupRenderTarget(b):we.__hasExternalTextures&&Q.rebindTextures(b,ee.get(b.texture).__webglTexture,ee.get(b.depthTexture).__webglTexture);const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Oe=ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?z=Oe[N][X]:z=Oe[N],he=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?z=ee.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[X]:z=Oe,M.copy(b.viewport),P.copy(b.scissor),D=b.scissorTest}else M.copy(xe).multiplyScalar(J).floor(),P.copy(Se).multiplyScalar(J).floor(),D=Ue;if(H.bindFramebuffer(g.FRAMEBUFFER,z)&&q&&H.drawBuffers(b,z),H.viewport(M),H.scissor(P),H.setScissorTest(D),he){const we=ee.get(b.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,X)}else if(Me){const we=ee.get(b.texture),Fe=N||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Fe)}B=-1},this.readRenderTargetPixels=function(b,N,X,q,z,he,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){H.bindFramebuffer(g.FRAMEBUFFER,Te);try{const we=b.texture,Fe=we.format,Oe=we.type;if(!j.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-q&&X>=0&&X<=b.height-z&&g.readPixels(N,X,q,z,Ce.convert(Fe),Ce.convert(Oe),he)}finally{const we=C!==null?ee.get(C).__webglFramebuffer:null;H.bindFramebuffer(g.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,N,X,q,z,he,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){H.bindFramebuffer(g.FRAMEBUFFER,Te);try{const we=b.texture,Fe=we.format,Oe=we.type;if(!j.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-q&&X>=0&&X<=b.height-z){const De=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,De),g.bufferData(g.PIXEL_PACK_BUFFER,he.byteLength,g.STREAM_READ),g.readPixels(N,X,q,z,Ce.convert(Fe),Ce.convert(Oe),0),g.flush();const je=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);await xg(g,je,4);try{g.bindBuffer(g.PIXEL_PACK_BUFFER,De),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,he)}finally{g.deleteBuffer(De),g.deleteSync(je)}return he}}finally{const we=C!==null?ee.get(C).__webglFramebuffer:null;H.bindFramebuffer(g.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(b,N=null,X=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(b.image.width*q),he=Math.floor(b.image.height*q),Me=N!==null?N.x:0,Te=N!==null?N.y:0;Q.setTexture2D(b,0),g.copyTexSubImage2D(g.TEXTURE_2D,X,0,0,Me,Te,z,he),H.unbindTexture()},this.copyTextureToTexture=function(b,N,X=null,q=null,z=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],N=arguments[2],z=arguments[3]||0,X=null);let he,Me,Te,we,Fe,Oe;X!==null?(he=X.max.x-X.min.x,Me=X.max.y-X.min.y,Te=X.min.x,we=X.min.y):(he=b.image.width,Me=b.image.height,Te=0,we=0),q!==null?(Fe=q.x,Oe=q.y):(Fe=0,Oe=0);const De=Ce.convert(N.format),je=Ce.convert(N.type);Q.setTexture2D(N,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,N.unpackAlignment);const ot=g.getParameter(g.UNPACK_ROW_LENGTH),at=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Bt=g.getParameter(g.UNPACK_SKIP_PIXELS),Ke=g.getParameter(g.UNPACK_SKIP_ROWS),Pe=g.getParameter(g.UNPACK_SKIP_IMAGES),xt=b.isCompressedTexture?b.mipmaps[z]:b.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,xt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(g.UNPACK_SKIP_ROWS,we),b.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,z,Fe,Oe,he,Me,De,je,xt.data):b.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,z,Fe,Oe,xt.width,xt.height,De,xt.data):g.texSubImage2D(g.TEXTURE_2D,z,Fe,Oe,he,Me,De,je,xt),g.pixelStorei(g.UNPACK_ROW_LENGTH,ot),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ke),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Pe),z===0&&N.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(b,N,X=null,q=null,z=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,b=arguments[2],N=arguments[3],z=arguments[4]||0);let he,Me,Te,we,Fe,Oe,De,je,ot;const at=b.isCompressedTexture?b.mipmaps[z]:b.image;X!==null?(he=X.max.x-X.min.x,Me=X.max.y-X.min.y,Te=X.max.z-X.min.z,we=X.min.x,Fe=X.min.y,Oe=X.min.z):(he=at.width,Me=at.height,Te=at.depth,we=0,Fe=0,Oe=0),q!==null?(De=q.x,je=q.y,ot=q.z):(De=0,je=0,ot=0);const Bt=Ce.convert(N.format),Ke=Ce.convert(N.type);let Pe;if(N.isData3DTexture)Q.setTexture3D(N,0),Pe=g.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Q.setTexture2DArray(N,0),Pe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,N.unpackAlignment);const xt=g.getParameter(g.UNPACK_ROW_LENGTH),$e=g.getParameter(g.UNPACK_IMAGE_HEIGHT),$t=g.getParameter(g.UNPACK_SKIP_PIXELS),Ui=g.getParameter(g.UNPACK_SKIP_ROWS),zt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,at.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,at.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,we),g.pixelStorei(g.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Oe),b.isDataTexture||b.isData3DTexture?g.texSubImage3D(Pe,z,De,je,ot,he,Me,Te,Bt,Ke,at.data):N.isCompressedArrayTexture?g.compressedTexSubImage3D(Pe,z,De,je,ot,he,Me,Te,Bt,at.data):g.texSubImage3D(Pe,z,De,je,ot,he,Me,Te,Bt,Ke,at),g.pixelStorei(g.UNPACK_ROW_LENGTH,xt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,$e),g.pixelStorei(g.UNPACK_SKIP_PIXELS,$t),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ui),g.pixelStorei(g.UNPACK_SKIP_IMAGES,zt),z===0&&N.generateMipmaps&&g.generateMipmap(Pe),H.unbindTexture()},this.initRenderTarget=function(b){ee.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),H.unbindTexture()},this.resetState=function(){U=0,R=0,C=null,H.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fl?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===vo?"display-p3":"srgb"}}class RM extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Md extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tu=new ft,ll=new id,Ls=new xo,Ds=new Y;class PM extends Ot{constructor(e=new zn,t=new Md){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;Tu.copy(r).invert(),ll.copy(e.ray).applyMatrix4(Tu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=d,S=p;x<S;x++){const m=c.getX(x);Ds.fromBufferAttribute(f,m),Au(Ds,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,S=p;x<S;x++)Ds.fromBufferAttribute(f,x),Au(Ds,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Au(n,e,t,i,r,s,o){const a=ll.distanceSqToPoint(n);if(a<t){const l=new Y;ll.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);class Qr{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const LM=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Mt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:LM()},Bl=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},DM=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Bl(n);Mt.publicKey=t.publicKey,Mt.blockHeadless=t.blockHeadless,Mt.storageProvider=t.storageProvider,Mt.blockList=t.blockList,Mt.limitRate=t.limitRate,Mt.origin=t.origin||e},Sd=async(n,e,t={})=>{const i=await fetch(Mt.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new Qr(i.status,r);if(i.ok)return s;throw s},yd=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},IM=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Ed=n=>n.webdriver||!n.languages||n.languages.length===0,bd=()=>new Qr(451,"Unavailable For Headless Browser"),UM=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},NM=n=>!n.list?.length||!n.watchVariable,FM=(n,e)=>n instanceof FormData?n.get(e):n[e],Td=(n,e)=>{if(NM(n))return!1;UM(n.list,n.watchVariable);const t=FM(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},Ad=()=>new Qr(403,"Forbidden"),OM=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},BM=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},wd=async(n,e,t)=>{if(!e.throttle||!t)return!1;OM(e.throttle,e.id);const i=e.id||n;return await BM(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},Cd=()=>new Qr(429,"Too Many Requests"),zM=async(n,e,t,i)=>{const r=Bl(i),s=r.publicKey||Mt.publicKey,o=r.blockHeadless||Mt.blockHeadless,a=r.storageProvider||Mt.storageProvider,l={...Mt.blockList,...r.blockList},c={...Mt.limitRate,...r.limitRate};return o&&Ed(navigator)?Promise.reject(bd()):(yd(s,n,e),IM(t),t&&Td(l,t)?Promise.reject(Ad()):await wd(location.pathname,c,a)?Promise.reject(Cd()):Sd("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},HM=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},VM=n=>typeof n=="string"?document.querySelector(n):n,GM=async(n,e,t,i)=>{const r=Bl(i),s=r.publicKey||Mt.publicKey,o=r.blockHeadless||Mt.blockHeadless,a=Mt.storageProvider||r.storageProvider,l={...Mt.blockList,...r.blockList},c={...Mt.limitRate,...r.limitRate};if(o&&Ed(navigator))return Promise.reject(bd());const u=VM(t);yd(s,n,e),HM(u);const f=new FormData(u);return Td(l,f)?Promise.reject(Ad()):await wd(location.pathname,c,a)?Promise.reject(Cd()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),Sd("/api/v1.0/email/send-form",f))},kM={init:DM,send:zM,sendForm:GM,EmailJSResponseStatus:Qr},WM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},XM={id:"app",class:"terminal-theme"},qM={class:"fixed top-0 w-full bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-600 backdrop-blur-md shadow-lg z-10"},YM={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},jM={class:"flex items-center justify-center py-4 relative"},KM={class:"absolute left-0 flex md:hidden"},$M={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ZM={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},JM={class:"hidden md:flex space-x-8"},QM={key:0,class:"md:hidden flex flex-col items-center space-y-4 py-4 bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-600 rounded-b-lg shadow-lg animate-fade-in"},eS={id:"about",class:"min-h-screen flex items-center justify-center bg-black text-green-300 relative overflow-hidden pt-14 md:pt-8"},tS={class:"text-center max-w-4xl md:max-w-5xl lg:max-w-6xl px-6 md:px-4 py-6 md:py-8 relative"},nS={class:"relative w-full h-64 md:h-52 mb-4"},iS={class:"flex justify-center space-x-4"},rS={id:"projects",class:"min-h-screen flex items-center justify-center"},sS={class:"max-w-6xl px-4 py-12"},oS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"},aS={class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer",role:"region","aria-label":"Tower Defense Game Card"},lS={class:"flex w-full"},cS={id:"contact",class:"min-h-screen flex items-center justify-center"},uS={class:"max-w-6xl px-4 py-12"},fS={class:"flex flex-col gap-6"},dS={class:"flex-1 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col justify-center min-w-0"},hS={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},pS={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0"},mS=["disabled"],wu="Hello, I'm Constantin",gS={__name:"App",setup(n){const e=Vn(!1),t=Vn("about"),i=Vn(!1),r=Vn(null),s=Vn(null);let o=null,a=null;Ks(()=>{const A=["about","experience","projects","education","contact"],v=[];return A.forEach(T=>{const U=document.getElementById(T);if(U){const R=new IntersectionObserver(C=>{C.forEach(B=>{B.isIntersecting&&(t.value=T)})},{root:null,rootMargin:"0px",threshold:.15});R.observe(U),v.push(R)}}),()=>{v.forEach(T=>T.disconnect())}});const l=()=>{const A=r.value;if(!A)return null;let v=null,T=null,U=null,R=null,C=null,B=null,y=null,M=null,P=null;const D={x:0,y:0,active:!1,isTouch:!1};let V=0,te=!0;const ne=60;let K=null;const J=($,re)=>{const pe=document.createElement("canvas"),fe=pe.getContext("2d");if(!fe)return{positions:new Float32Array,basePositions:new Float32Array};const ye=(typeof window<"u"?window.innerWidth:$)<768,be=ye?["Hello, I'm","Constantin"]:[wu],We=130,g=Math.round(We*1.15),w=ye?1100:1300,F=ye?420:320;pe.width=w,pe.height=F,fe.clearRect(0,0,w,F),fe.fillStyle="#111827",fe.textAlign="center",fe.textBaseline="middle",fe.font=`700 ${We}px "Avenir Next", "Segoe UI", sans-serif`;const j=g*(be.length-1),H=F/2-j/2;be.forEach((L,O)=>{fe.fillText(L,w/2,H+O*g)});const Z=fe.getImageData(0,0,w,F).data,ee=6,Q=Math.min($/w,re/F)*(ye?1.38:.82),E=[];for(let L=0;L<F;L+=ee)for(let O=0;O<w;O+=ee)if(Z[(L*w+O)*4+3]>10){const k=(O-w/2)*Q,ce=(F/2-L)*Q,oe=(Math.random()-.5)*50;E.push(k,ce,oe)}const _=new Float32Array(E);return{positions:new Float32Array(_),basePositions:_}},G=()=>{const $=A.clientWidth,re=A.clientHeight;v=new RM,T=new pd(-$/2,$/2,re/2,-re/2,1,1e3),T.position.z=400,U=new CM({antialias:!0,alpha:!0}),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.setSize($,re),U.setClearColor(0,0),A.innerHTML="",A.appendChild(U.domElement);const pe=J($,re);y=pe.positions,M=pe.basePositions,K=new Float32Array(M.length);for(let Ae=0;Ae<M.length;Ae+=3){const ye=M[Ae],be=M[Ae+1],We=M[Ae+2],g=Math.floor(Math.random()*4);let w=ye,F=be;const j=Math.max($,re)*1.2;g===0?w=ye-j:g===1?w=ye+j:g===2?F=be-j:F=be+j,K[Ae]=w,K[Ae+1]=F,K[Ae+2]=We+j*.2*(Math.random()-.5),y[Ae]=w,y[Ae+1]=F,y[Ae+2]=We+j*.2*(Math.random()-.5)}R=new zn,R.setAttribute("position",new Kt(y,3));const fe=new Md({color:2278750,size:2.4,transparent:!0,opacity:.95});C=new PM(R,fe),v.add(C)},ge=()=>{if(!R||!y||!M)return;const $=A.clientWidth,re=A.clientHeight,pe=Math.min($,re)*.22,fe=.08,Ae=18;if(te&&V<ne){const ye=V/ne;for(let be=0;be<y.length;be+=3){const We=K[be],g=K[be+1],w=K[be+2],F=M[be],j=M[be+1],H=M[be+2],Z=1-Math.pow(1-ye,3);y[be]=We+(F-We)*Z,y[be+1]=g+(j-g)*Z,y[be+2]=w+(H-w)*Z}V++,V>=ne&&(te=!1),R.attributes.position.needsUpdate=!0;return}for(let ye=0;ye<y.length;ye+=3){const be=M[ye],We=M[ye+1],g=M[ye+2];let w=y[ye]+(be-y[ye])*fe,F=y[ye+1]+(We-y[ye+1])*fe,j=y[ye+2]+(g-y[ye+2])*fe;if(D.active){const H=w-D.x,Z=F-D.y,ee=Math.sqrt(H*H+Z*Z);if(ee<pe&&ee>.001){const Q=(1-ee/pe)*Ae;w+=H/ee*Q,F+=Z/ee*Q,j+=Q*.15}}y[ye]=w,y[ye+1]=F,y[ye+2]=j}R.attributes.position.needsUpdate=!0},xe=()=>{B=window.requestAnimationFrame(xe),ge(),U.render(v,T)},Se=$=>{const re=A.getBoundingClientRect();D.x=$.clientX-re.left-re.width/2,D.y=-($.clientY-re.top-re.height/2),D.active=!0,D.isTouch=!1},Ue=()=>{D.active=!1,D.isTouch=!1},ke=()=>{if(!A||!T||!U)return;const $=A.clientWidth,re=A.clientHeight;T.left=-$/2,T.right=$/2,T.top=re/2,T.bottom=-re/2,T.updateProjectionMatrix(),U.setSize($,re);const pe=J($,re);y=pe.positions,M=pe.basePositions,R.setAttribute("position",new Kt(y,3))};return G(),xe(),A.addEventListener("pointermove",Se),A.addEventListener("pointerleave",Ue),window.addEventListener("resize",ke),window.ResizeObserver&&(P=new ResizeObserver(()=>{ke()}),P.observe(A)),()=>{window.removeEventListener("resize",ke),P&&(P.disconnect(),P=null),A.removeEventListener("pointermove",Se),A.removeEventListener("pointerleave",Ue),B&&window.cancelAnimationFrame(B),R&&R.dispose(),C?.material&&C.material.dispose(),U&&(U.dispose(),U.domElement?.parentNode&&U.domElement.parentNode.removeChild(U.domElement)),v=null,T=null,U=null,R=null,C=null}};Ks(()=>{o=l(),a=c()}),Tl(()=>{o&&o(),a&&a()});const c=()=>{const A=s.value;if(!A)return null;const v={x:0,y:0,active:!1,raf:0},T=10,U=()=>{v.raf=0;const B=A.getBoundingClientRect(),y=(v.x-B.left)/B.width,M=(v.y-B.top)/B.height,P=(.5-M)*T,D=(y-.5)*T;A.style.setProperty("--rx",`${P.toFixed(2)}deg`),A.style.setProperty("--ry",`${D.toFixed(2)}deg`),A.style.setProperty("--px",`${(y*100).toFixed(1)}%`),A.style.setProperty("--py",`${(M*100).toFixed(1)}%`),A.style.setProperty("--glow",v.active?"1":"0")},R=B=>{v.x=B.clientX,v.y=B.clientY,v.active=!0,v.raf||(v.raf=window.requestAnimationFrame(U))},C=()=>{v.active=!1,A.style.setProperty("--rx","0deg"),A.style.setProperty("--ry","0deg"),A.style.setProperty("--glow","0")};return A.addEventListener("pointermove",R),A.addEventListener("pointerleave",C),()=>{A.removeEventListener("pointermove",R),A.removeEventListener("pointerleave",C),v.raf&&window.cancelAnimationFrame(v.raf)}},u=A=>{typeof window<"u"&&window.open(A,"_blank")},f=Vn({name:"",email:"",subject:"",message:""}),d=Vn(!1),p=Vn(""),x=async()=>{if(!f.value.name||!f.value.email||!f.value.message){p.value="Please fill in all required fields.";return}d.value=!0,p.value="";try{await kM.send("service_92g0li6","template_44tna6r",{name:f.value.name,from_email:f.value.email,subject:f.value.subject||"Portfolio Contact",message:f.value.message,to_email:"engl.info95@gmail.com"},"k1AG8V5ZdhAyqvnoK"),p.value="Message sent successfully!",f.value={name:"",email:"",subject:"",message:""}}catch(A){p.value="Failed to send message. Please try again.",console.error("Email send error:",A)}finally{d.value=!1}},S=A=>{const v=document.getElementById(A);v&&v.scrollIntoView({behavior:"smooth"}),e.value=!1},m=()=>{i.value=!0},h=()=>{i.value=!1};return(A,v)=>(Si(),Fi("div",XM,[ue("nav",qM,[ue("div",YM,[ue("div",jM,[ue("div",KM,[ue("button",{onClick:v[0]||(v[0]=T=>e.value=!e.value),class:"text-white focus:outline-none","aria-label":"Toggle menu"},[e.value?(Si(),Fi("svg",ZM,[...v[15]||(v[15]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(Si(),Fi("svg",$M,[...v[14]||(v[14]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))])]),ue("div",JM,[ue("a",{href:"#about",class:Dt(["transition duration-300 font-medium",t.value==="about"?"text-emerald-100":"text-white hover:text-lime-100"])},"About me",2),ue("a",{href:"#experience",class:Dt(["transition duration-300 font-medium",t.value==="experience"?"text-emerald-100":"text-white hover:text-lime-100"])},"Professional Experience",2),ue("a",{href:"#projects",class:Dt(["transition duration-300 font-medium",t.value==="projects"?"text-emerald-100":"text-white hover:text-lime-100"])},"Passion Projects",2),ue("a",{href:"#education",class:Dt(["transition duration-300 font-medium",t.value==="education"?"text-emerald-100":"text-white hover:text-lime-100"])},"Education",2),ue("a",{href:"#contact",class:Dt(["transition duration-300 font-medium",t.value==="contact"?"text-emerald-100":"text-white hover:text-lime-100"])},"Contact Me",2)])]),Pt(Op,{name:"fade"},{default:sf(()=>[e.value?(Si(),Fi("div",QM,[ue("a",{href:"#about",onClick:v[1]||(v[1]=T=>S("about")),class:Dt(["transition duration-300 font-medium px-4",t.value==="about"?"text-emerald-100":"text-white hover:text-lime-100"])},"About me",2),ue("a",{href:"#experience",onClick:v[2]||(v[2]=T=>S("experience")),class:Dt(["transition duration-300 font-medium px-4",t.value==="experience"?"text-emerald-100":"text-white hover:text-lime-100"])},"Professional Experience",2),ue("a",{href:"#projects",onClick:v[3]||(v[3]=T=>S("projects")),class:Dt(["transition duration-300 font-medium px-4",t.value==="projects"?"text-emerald-100":"text-white hover:text-lime-100"])},"Passion Projects",2),ue("a",{href:"#education",onClick:v[4]||(v[4]=T=>S("education")),class:Dt(["transition duration-300 font-medium px-4",t.value==="education"?"text-emerald-100":"text-white hover:text-lime-100"])},"Education",2),ue("a",{href:"#contact",onClick:v[5]||(v[5]=T=>S("contact")),class:Dt(["transition duration-300 font-medium px-4",t.value==="contact"?"text-emerald-100":"text-white hover:text-lime-100"])},"Contact Me",2)])):Fo("",!0)]),_:1})])]),ue("section",eS,[ue("div",tS,[ue("div",nS,[ue("h1",{class:"sr-only"},Us(wu)),ue("div",{ref_key:"pointCloudContainer",ref:r,class:"pointcloud-container w-full h-full"},null,512)]),ue("div",{ref_key:"portraitContainer",ref:s,class:"mx-auto mb-6 portrait-effect",style:{background:"#000",width:"18rem",height:"18rem",display:"flex","align-items":"center","justify-content":"center"}},[...v[16]||(v[16]=[ue("img",{src:fm,alt:"Constantin",class:"portrait-image-effect",style:{width:"100%",height:"100%","object-fit":"cover",background:"#000"}},null,-1)])],512),v[17]||(v[17]=ue("p",{class:"text-xs sm:text-sm md:text-xl mb-3 md:mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"I am a Software Engineer with 5+ years of professional experience and a master’s degree in computer science. ",-1)),v[18]||(v[18]=ue("p",{class:"text-xs sm:text-sm md:text-xl mb-3 md:mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"I specialize in full-stack web development and machine learning, with hands-on experience applying AI to real-world engineering problems. I combine a strong academic foundation with continuous, self-driven learning through personal projects.",-1)),v[19]||(v[19]=ue("p",{class:"text-xs sm:text-sm md:text-xl mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"In addition, I have a strong passion for game development, where I enjoy combining creativity with technical problem-solving. I am driven by curiosity, continuous learning, and a desire to build intelligent systems that make a meaningful impact.",-1)),ue("div",iS,[ue("button",{class:"border-2 border-green-400 text-green-300 hover:bg-green-500 hover:text-black font-bold py-3 px-6 rounded-full transition duration-300",onClick:v[6]||(v[6]=T=>S("contact"))},"Contact Me")])])]),v[37]||(v[37]=No('<div class="w-full flex justify-center my-12" data-v-ea2ca76c><div class="w-4/5 border-t border-gray-300" data-v-ea2ca76c></div></div><section id="experience" class="min-h-screen flex items-center justify-center" data-v-ea2ca76c><div class="max-w-none px-8 py-12" data-v-ea2ca76c><h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900" data-v-ea2ca76c>Professional Experience</h2><div class="space-y-6" data-v-ea2ca76c><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-ea2ca76c><img src="'+dm+'" alt="Infineon Technologies" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-ea2ca76c><div class="flex-1" data-v-ea2ca76c><h3 class="text-2xl font-semibold mb-2 text-gray-900" data-v-ea2ca76c>Software Engineer</h3><p class="text-gray-700 mb-2" data-v-ea2ca76c>Alten GmbH | October 2022 - November 2025</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-ea2ca76c><li data-v-ea2ca76c>Full stack web development (ASP.NET Core, Vue.js)</li><li data-v-ea2ca76c>Classified 3D-CAD files using machine learning (PyTorch)</li><li data-v-ea2ca76c>Developed tools to automate FEM simulations (Java, C#, Python, JavaScript)</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-ea2ca76c><img src="'+hm+'" alt="Infineon Master Thesis" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-ea2ca76c><div class="flex-1" data-v-ea2ca76c><h3 class="text-2xl font-semibold mb-2" data-v-ea2ca76c>Master Thesis</h3><p class="text-gray-700 mb-2" data-v-ea2ca76c>Infineon Technologies AG | March 2022 – September 2022</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-ea2ca76c><li data-v-ea2ca76c>Evaluated and applied a container-based HPC framework</li><li data-v-ea2ca76c>Linux shell scripting</li><li data-v-ea2ca76c>Web development</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-ea2ca76c><img src="'+pm+'" alt="Infineon Working Student" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-ea2ca76c><div class="flex-1" data-v-ea2ca76c><h3 class="text-2xl font-semibold mb-2" data-v-ea2ca76c>Working Student</h3><p class="text-gray-700 mb-2" data-v-ea2ca76c>Infineon Technologies AG | September 2020 – March 2022</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-ea2ca76c><li data-v-ea2ca76c>Developed tools related to FEM simulation for semiconductor packaging</li><li data-v-ea2ca76c>Created and extended ASP.NET web applications</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-ea2ca76c><img src="'+mm+'" alt="TGW Software Services" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-ea2ca76c><div class="flex-1" data-v-ea2ca76c><h3 class="text-2xl font-semibold mb-2" data-v-ea2ca76c>Java Software Developer</h3><p class="text-gray-700 mb-2" data-v-ea2ca76c>TGW Software Services GmbH | March 2019 – February 2020</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-ea2ca76c><li data-v-ea2ca76c>Estimated, implemented, and tested change requests for intralogistics software</li><li data-v-ea2ca76c>Analyzed support tickets and fixed bugs</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-ea2ca76c><img src="'+gm+'" alt="University Bachelor Thesis" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-ea2ca76c><div class="flex-1" data-v-ea2ca76c><h3 class="text-2xl font-semibold mb-2" data-v-ea2ca76c>Bachelor Thesis</h3><p class="text-gray-700 mb-2" data-v-ea2ca76c>University of Applied Sciences Regensburg | 2018</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-ea2ca76c><li data-v-ea2ca76c>Clustered and classified log data using machine learning (R)</li><li data-v-ea2ca76c>Identified user profiles by their network traffic log data</li></ul></div></div></div></div></section><div class="w-full flex justify-center my-12" data-v-ea2ca76c><div class="w-4/5 border-t border-gray-300" data-v-ea2ca76c></div></div>',3)),ue("section",rS,[ue("div",sS,[v[29]||(v[29]=ue("h2",{class:"text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"},"Passion Projects",-1)),ue("div",oS,[ue("div",aS,[v[20]||(v[20]=ue("img",{src:_m,alt:"Tower Defense Game Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1)),v[21]||(v[21]=ue("h3",{class:"text-2xl font-semibold mb-2 text-gray-900"},"Tower Defense Game",-1)),v[22]||(v[22]=ue("p",{class:"mb-4 text-gray-700"},"A 2D cartoon-style mobile game developed in Unity. This work-in-progress project combines strategic tower defense gameplay with nostalgic slicing mechanics.",-1)),v[23]||(v[23]=ue("span",{class:"text-gray-500 italic"},"Repository coming soon",-1)),ue("div",lS,[ue("button",{class:"mt-8 md:mt-12 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition mx-auto",onClick:Vo(m,["stop"]),"aria-label":"Open Tower Defense Game Preview"}," ▶ Preview ")])]),ue("div",{onClick:v[7]||(v[7]=T=>u("https://github.com/ConstiE-dev/MAP_2025")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...v[24]||(v[24]=[ue("img",{src:vm,alt:"MAP 2025 Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),ue("h3",{class:"text-2xl font-semibold mb-2"},"MAP 2025",-1),ue("p",{class:"mb-4 text-gray-700"},"A Kaggle competition entry focused on natural language processing and fine-tuning state-of-the-art language models for a classification task.",-1),ue("a",{href:"https://github.com/ConstiE-dev/MAP_2025",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])]),ue("div",{onClick:v[8]||(v[8]=T=>u("https://github.com/ConstiE-dev/RNATransformer")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...v[25]||(v[25]=[ue("img",{src:xm,alt:"RNA Transformer Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),ue("h3",{class:"text-2xl font-semibold mb-2"},"RNA Transformer",-1),ue("p",{class:"mb-4 text-gray-700"},"A Kaggle competition entry featuring a from-scratch implementation of a basic transformer architecture to predict the 3D structure of RNA sequences.",-1),ue("a",{href:"https://github.com/ConstiE-dev/RNATransformer",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])]),ue("div",{onClick:v[9]||(v[9]=T=>u("https://github.com/ConstiE-dev/backpack-prediction")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...v[26]||(v[26]=[ue("img",{src:Mm,alt:"Backpack Prediction Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),ue("h3",{class:"text-2xl font-semibold mb-2"},"Backpack Prediction",-1),ue("p",{class:"mb-4 text-gray-700"},"A data science competition entry focused on predicting backpack prices based on a tabular dataset.",-1),ue("a",{href:"https://github.com/ConstiE-dev/backpack-prediction",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])])]),i.value?(Si(),Fi("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4",role:"dialog","aria-modal":"true","aria-label":"Tower Defense Game Preview",onClick:Vo(h,["self"])},[ue("div",{class:"w-full max-w-4xl bg-black/80 border border-green-400/40 rounded-xl shadow-2xl p-4"},[ue("div",{class:"flex items-center justify-between mb-3"},[v[27]||(v[27]=ue("h3",{class:"text-lg md:text-xl font-semibold text-green-200"},"Preview",-1)),ue("button",{class:"text-green-200 hover:text-white border border-green-400/40 rounded-full px-3 py-1 transition duration-200",onClick:h}," Close ")]),v[28]||(v[28]=ue("video",{class:"w-full rounded-lg bg-black",src:Sm,controls:"",autoplay:"",muted:"",loop:"",playsinline:""},null,-1))])])):Fo("",!0)])]),v[38]||(v[38]=No('<div class="w-full flex justify-center my-12" data-v-ea2ca76c><div class="w-4/5 border-t border-gray-300" data-v-ea2ca76c></div></div><section id="education" class="min-h-screen flex items-center justify-center" data-v-ea2ca76c><div class="max-w-4xl px-4 py-12" data-v-ea2ca76c><h2 class="text-4xl md:text-5xl font-bold mb-8 text-center" data-v-ea2ca76c>Education</h2><br data-v-ea2ca76c><div class="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-2xl" data-v-ea2ca76c><div class="space-y-4" data-v-ea2ca76c><div class="border-l-4 border-blue-400 pl-4" data-v-ea2ca76c><h4 class="text-xl font-medium text-gray-900" data-v-ea2ca76c>🎓 Master&#39;s in Computer Science</h4><p class="text-gray-700" data-v-ea2ca76c>OTH Regensburg</p><p class="text-sm text-gray-500" data-v-ea2ca76c>March 2020 – September 2022</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-ea2ca76c><h4 class="text-xl font-medium text-gray-900" data-v-ea2ca76c>🎓 Bachelor&#39;s in Computer Science</h4><p class="text-gray-700" data-v-ea2ca76c>OTH Regensburg</p><p class="text-sm text-gray-500" data-v-ea2ca76c>March 2015 – January 2019</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-ea2ca76c><h4 class="text-xl font-medium text-gray-900" data-v-ea2ca76c>🏫 General Qualification for University Entrance</h4><p class="text-gray-700" data-v-ea2ca76c>Albertus-Magnus Gymnasium Regensburg</p><p class="text-sm text-gray-500" data-v-ea2ca76c>October 2006 – August 2014</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-ea2ca76c><h4 class="text-xl font-medium text-gray-900" data-v-ea2ca76c>🏫 Elementary School</h4><p class="text-gray-700" data-v-ea2ca76c>Grundschule Großberg</p><p class="text-sm text-gray-500" data-v-ea2ca76c>October 2002 – August 2006</p></div></div></div></div></section><div class="w-full flex justify-center my-12" data-v-ea2ca76c><div class="w-4/5 border-t border-gray-300" data-v-ea2ca76c></div></div>',3)),ue("section",cS,[ue("div",uS,[v[36]||(v[36]=ue("h2",{class:"text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"},"Contact Me",-1)),ue("div",fS,[v[35]||(v[35]=No('<div class="flex-1 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col justify-center min-w-0" data-v-ea2ca76c><h3 class="text-2xl font-semibold mb-4 text-center text-gray-900" data-v-ea2ca76c>Get In Touch</h3><div class="text-center space-y-2" data-v-ea2ca76c><p class="text-base text-gray-700 mb-2" data-v-ea2ca76c>Feel free to reach out to me directly:</p><div class="flex flex-col sm:flex-row gap-2 justify-center items-center" data-v-ea2ca76c><a href="mailto:engl.info95@gmail.com" class="inline-block bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105" data-v-ea2ca76c> 📧 engl.info95@gmail.com </a><a href="https://www.linkedin.com/in/constantin-engl" target="_blank" class="inline-block bg-blue-700 hover:bg-blue-800 text-gray-50 font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105" data-v-ea2ca76c> 💼 LinkedIn Profile </a></div></div></div>',1)),ue("div",dS,[v[34]||(v[34]=ue("h3",{class:"text-2xl font-semibold mb-4 text-center text-gray-900"},"Or Send a Message",-1)),ue("form",{onSubmit:Vo(x,["prevent"]),class:"space-y-4"},[ue("div",hS,[ue("div",null,[v[30]||(v[30]=ue("label",{for:"name",class:"block text-sm font-medium text-gray-700 mb-1"},"Name *",-1)),ss(ue("input",{"onUpdate:modelValue":v[10]||(v[10]=T=>f.value.name=T),type:"text",id:"name",required:"",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"Your name"},null,512),[[as,f.value.name]])]),ue("div",null,[v[31]||(v[31]=ue("label",{for:"email",class:"block text-sm font-medium text-gray-700 mb-1"},"Email *",-1)),ss(ue("input",{"onUpdate:modelValue":v[11]||(v[11]=T=>f.value.email=T),type:"email",id:"email",required:"",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"your.email@example.com"},null,512),[[as,f.value.email]])])]),ue("div",null,[v[32]||(v[32]=ue("label",{for:"subject",class:"block text-sm font-medium text-gray-700 mb-1"},"Subject",-1)),ss(ue("input",{"onUpdate:modelValue":v[12]||(v[12]=T=>f.value.subject=T),type:"text",id:"subject",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"What is this about?"},null,512),[[as,f.value.subject]])]),ue("div",null,[v[33]||(v[33]=ue("label",{for:"message",class:"block text-sm font-medium text-gray-700 mb-1"},"Message *",-1)),ss(ue("textarea",{"onUpdate:modelValue":v[13]||(v[13]=T=>f.value.message=T),id:"message",required:"",rows:"4",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-vertical",placeholder:"Tell me about your project or inquiry."},null,512),[[as,f.value.message]])]),ue("div",pS,[ue("button",{type:"submit",disabled:d.value,class:"bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-gray-50 font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"},Us(d.value?"Sending...":"Send Message"),9,mS),p.value?(Si(),Fi("p",{key:0,class:Dt(["text-sm",p.value.includes("successfully")?"text-green-400":"text-red-400"])},Us(p.value),3)):Fo("",!0)])],32)])])])])]))}},_S=WM(gS,[["__scopeId","data-v-ea2ca76c"]]);lm(_S).mount("#app");
