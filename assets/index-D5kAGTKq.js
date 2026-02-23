(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function cl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const tt={},ir=[],mn=()=>{},Ru=()=>!1,ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ul=n=>n.startsWith("onUpdate:"),_t=Object.assign,fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ud=Object.prototype.hasOwnProperty,$e=(n,e)=>Ud.call(n,e),ze=Array.isArray,rr=n=>lo(n)==="[object Map]",Pu=n=>lo(n)==="[object Set]",Ve=n=>typeof n=="function",dt=n=>typeof n=="string",ai=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Lu=n=>(st(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Du=Object.prototype.toString,lo=n=>Du.call(n),Nd=n=>lo(n).slice(8,-1),Iu=n=>lo(n)==="[object Object]",dl=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cr=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),co=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Fd=/-\w/g,ni=co(n=>n.replace(Fd,e=>e.slice(1).toUpperCase())),Od=/\B([A-Z])/g,li=co(n=>n.replace(Od,"-$1").toLowerCase()),Uu=co(n=>n.charAt(0).toUpperCase()+n.slice(1)),wo=co(n=>n?`on${Uu(n)}`:""),Qn=(n,e)=>!Object.is(n,e),Us=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Nu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},hl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Bd=n=>{const e=dt(n)?Number(n):NaN;return isNaN(e)?n:e};let ql;const uo=()=>ql||(ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Gd(i):pl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||st(n))return n}const zd=/;(?![^(]*\))/g,Hd=/:([^]+)/,Vd=/\/\*[^]*?\*\//g;function Gd(n){const e={};return n.replace(Vd,"").split(zd).forEach(t=>{if(t){const i=t.split(Hd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(n){let e="";if(dt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=Dt(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wd=cl(kd);function Fu(n){return!!n||n===""}const Ou=n=>!!(n&&n.__v_isRef===!0),Ns=n=>dt(n)?n:n==null?"":ze(n)||st(n)&&(n.toString===Du||!Ve(n.toString))?Ou(n)?Ns(n.value):JSON.stringify(n,Bu,2):String(n),Bu=(n,e)=>Ou(e)?Bu(n,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Co(i,s)+" =>"]=r,t),{})}:Pu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Co(t))}:ai(e)?Co(e):st(e)&&!ze(e)&&!Iu(e)?String(e):e,Co=(n,e="")=>{var t;return ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let It;class Xd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function qd(){return It}let it;const Ro=new WeakSet;class zu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ro.has(this)&&(Ro.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yl(this),Gu(this);const e=it,t=sn;it=this,sn=!0;try{return this.fn()}finally{ku(this),it=e,sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_l(e);this.deps=this.depsTail=void 0,Yl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ro.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let Hu=0,Rr,Pr;function Vu(n,e=!1){if(n.flags|=8,e){n.next=Pr,Pr=n;return}n.next=Rr,Rr=n}function ml(){Hu++}function gl(){if(--Hu>0)return;if(Pr){let e=Pr;for(Pr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Rr;){let e=Rr;for(Rr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Gu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ku(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),_l(i),Yd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ga(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Wu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Fr)||(n.globalVersion=Fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ga(n))))return;n.flags|=2;const e=n.dep,t=it,i=sn;it=n,sn=!0;try{Gu(n);const r=n.fn(n._value);(e.version===0||Qn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,sn=i,ku(n),n.flags&=-3}}function _l(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)_l(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Yd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let sn=!0;const Xu=[];function In(){Xu.push(sn),sn=!1}function Un(){const n=Xu.pop();sn=n===void 0?!0:n}function Yl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Fr=0;class Kd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!sn||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Kd(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,qu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Fr++,this.notify(e)}notify(e){ml();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gl()}}}function qu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _a=new WeakMap,Pi=Symbol(""),va=Symbol(""),Or=Symbol("");function Et(n,e,t){if(sn&&it){let i=_a.get(n);i||_a.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new vl),r.map=i,r.key=t),r.track()}}function wn(n,e,t,i,r,s){const o=_a.get(n);if(!o){Fr++;return}const a=l=>{l&&l.trigger()};if(ml(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&dl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Or||!ai(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Or)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Pi)),rr(n)&&a(o.get(va)));break;case"delete":l||(a(o.get(Pi)),rr(n)&&a(o.get(va)));break;case"set":rr(n)&&a(o.get(Pi));break}}gl()}function Ni(n){const e=Xe(n);return e===n?e:(Et(e,"iterate",Or),on(n)?e:e.map(Nn))}function xl(n){return Et(n=Xe(n),"iterate",Or),n}function jn(n,e){return ii(n)?Br(sr(n)?Nn(e):e):Nn(e)}const jd={__proto__:null,[Symbol.iterator](){return Po(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return Ni(this).concat(...n.map(e=>ze(e)?Ni(e):e))},entries(){return Po(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,e){return _n(this,"every",n,e,void 0,arguments)},filter(n,e){return _n(this,"filter",n,e,t=>t.map(i=>jn(this,i)),arguments)},find(n,e){return _n(this,"find",n,e,t=>jn(this,t),arguments)},findIndex(n,e){return _n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _n(this,"findLast",n,e,t=>jn(this,t),arguments)},findLastIndex(n,e){return _n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _n(this,"forEach",n,e,void 0,arguments)},includes(...n){return Lo(this,"includes",n)},indexOf(...n){return Lo(this,"indexOf",n)},join(n){return Ni(this).join(n)},lastIndexOf(...n){return Lo(this,"lastIndexOf",n)},map(n,e){return _n(this,"map",n,e,void 0,arguments)},pop(){return vr(this,"pop")},push(...n){return vr(this,"push",n)},reduce(n,...e){return Kl(this,"reduce",n,e)},reduceRight(n,...e){return Kl(this,"reduceRight",n,e)},shift(){return vr(this,"shift")},some(n,e){return _n(this,"some",n,e,void 0,arguments)},splice(...n){return vr(this,"splice",n)},toReversed(){return Ni(this).toReversed()},toSorted(n){return Ni(this).toSorted(n)},toSpliced(...n){return Ni(this).toSpliced(...n)},unshift(...n){return vr(this,"unshift",n)},values(){return Po(this,"values",n=>jn(this,n))}};function Po(n,e,t){const i=xl(n),r=i[e]();return i!==n&&!on(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const $d=Array.prototype;function _n(n,e,t,i,r,s){const o=xl(n),a=o!==n&&!on(n),l=o[e];if(l!==$d[e]){const f=l.apply(n,s);return a?Nn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,jn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Kl(n,e,t,i){const r=xl(n);let s=t;return r!==n&&(on(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,jn(n,a),l,n)}),r[e](s,...i)}function Lo(n,e,t){const i=Xe(n);Et(i,"iterate",Or);const r=i[e](...t);return(r===-1||r===!1)&&El(t[0])?(t[0]=Xe(t[0]),i[e](...t)):r}function vr(n,e,t=[]){In(),ml();const i=Xe(n)[e].apply(n,t);return gl(),Un(),i}const Zd=cl("__proto__,__v_isRef,__isVue"),Yu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ai));function Jd(n){ai(n)||(n=String(n));const e=Xe(this);return Et(e,"has",n),e.hasOwnProperty(n)}class Ku{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?lh:Ju:s?Zu:$u).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){let l;if(o&&(l=jd[t]))return l;if(t==="hasOwnProperty")return Jd}const a=Reflect.get(e,t,bt(e)?e:i);if((ai(t)?Yu.has(t):Zd(t))||(r||Et(e,"get",t),s))return a;if(bt(a)){const l=o&&dl(t)?a:a.value;return r&&st(l)?Ma(l):l}return st(a)?r?Ma(a):Sl(a):a}}class ju extends Ku{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=ze(e)&&dl(t);if(!this._isShallow){const c=ii(s);if(!on(i)&&!ii(i)&&(s=Xe(s),i=Xe(i)),!o&&bt(s)&&!bt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:$e(e,t),l=Reflect.set(e,t,i,bt(e)?e:r);return e===Xe(r)&&(a?Qn(i,s)&&wn(e,"set",t,i):wn(e,"add",t,i)),l}deleteProperty(e,t){const i=$e(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&wn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ai(t)||!Yu.has(t))&&Et(e,"has",t),i}ownKeys(e){return Et(e,"iterate",ze(e)?"length":Pi),Reflect.ownKeys(e)}}class Qd extends Ku{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const eh=new ju,th=new Qd,nh=new ju(!0);const xa=n=>n,ns=n=>Reflect.getPrototypeOf(n);function ih(n,e,t){return function(...i){const r=this.__v_raw,s=Xe(r),o=rr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?xa:e?Br:Nn;return!e&&Et(s,"iterate",l?va:Pi),_t(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function is(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function rh(n,e){const t={get(r){const s=this.__v_raw,o=Xe(s),a=Xe(r);n||(Qn(r,a)&&Et(o,"get",r),Et(o,"get",a));const{has:l}=ns(o),c=e?xa:n?Br:Nn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Et(Xe(r),"iterate",Pi),r.size},has(r){const s=this.__v_raw,o=Xe(s),a=Xe(r);return n||(Qn(r,a)&&Et(o,"has",r),Et(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Xe(a),c=e?xa:n?Br:Nn;return!n&&Et(l,"iterate",Pi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return _t(t,n?{add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear")}:{add(r){!e&&!on(r)&&!ii(r)&&(r=Xe(r));const s=Xe(this);return ns(s).has.call(s,r)||(s.add(r),wn(s,"add",r,r)),this},set(r,s){!e&&!on(s)&&!ii(s)&&(s=Xe(s));const o=Xe(this),{has:a,get:l}=ns(o);let c=a.call(o,r);c||(r=Xe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Qn(s,u)&&wn(o,"set",r,s):wn(o,"add",r,s),this},delete(r){const s=Xe(this),{has:o,get:a}=ns(s);let l=o.call(s,r);l||(r=Xe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&wn(s,"delete",r,void 0),c},clear(){const r=Xe(this),s=r.size!==0,o=r.clear();return s&&wn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ih(r,n,e)}),t}function Ml(n,e){const t=rh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get($e(t,r)&&r in i?t:i,r,s)}const sh={get:Ml(!1,!1)},oh={get:Ml(!1,!0)},ah={get:Ml(!0,!1)};const $u=new WeakMap,Zu=new WeakMap,Ju=new WeakMap,lh=new WeakMap;function ch(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uh(n){return n.__v_skip||!Object.isExtensible(n)?0:ch(Nd(n))}function Sl(n){return ii(n)?n:yl(n,!1,eh,sh,$u)}function fh(n){return yl(n,!1,nh,oh,Zu)}function Ma(n){return yl(n,!0,th,ah,Ju)}function yl(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=uh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function sr(n){return ii(n)?sr(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function El(n){return n?!!n.__v_raw:!1}function Xe(n){const e=n&&n.__v_raw;return e?Xe(e):n}function dh(n){return!$e(n,"__v_skip")&&Object.isExtensible(n)&&Nu(n,"__v_skip",!0),n}const Nn=n=>st(n)?Sl(n):n,Br=n=>st(n)?Ma(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function Vn(n){return hh(n,!1)}function hh(n,e){return bt(n)?n:new ph(n,e)}class ph{constructor(e,t){this.dep=new vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Xe(e),this._value=t?e:Nn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||on(e)||ii(e);e=i?e:Xe(e),Qn(e,t)&&(this._rawValue=e,this._value=i?e:Nn(e),this.dep.trigger())}}function mh(n){return bt(n)?n.value:n}const gh={get:(n,e,t)=>e==="__v_raw"?n:mh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return bt(r)&&!bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Qu(n){return sr(n)?n:new Proxy(n,gh)}class _h{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Vu(this,!0),!0}get value(){const e=this.dep.track();return Wu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vh(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new _h(i,r,t)}const rs={},qs=new WeakMap;let Si;function xh(n,e=!1,t=Si){if(t){let i=qs.get(t);i||qs.set(t,i=[]),i.push(n)}}function Mh(n,e,t=tt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=T=>r?T:on(T)||r===!1||r===0?Cn(T,1):Cn(T);let u,f,d,m,x=!1,S=!1;if(bt(n)?(f=()=>n.value,x=on(n)):sr(n)?(f=()=>c(n),x=!0):ze(n)?(S=!0,x=n.some(T=>sr(T)||on(T)),f=()=>n.map(T=>{if(bt(T))return T.value;if(sr(T))return c(T);if(Ve(T))return l?l(T,2):T()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){In();try{d()}finally{Un()}}const T=Si;Si=u;try{return l?l(n,3,[m]):n(m)}finally{Si=T}}:f=mn,e&&r){const T=f,U=r===!0?1/0:r;f=()=>Cn(T(),U)}const p=qd(),h=()=>{u.stop(),p&&p.active&&fl(p.effects,u)};if(s&&e){const T=e;e=(...U)=>{T(...U),h()}}let A=S?new Array(n.length).fill(rs):rs;const v=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const U=u.run();if(r||x||(S?U.some((C,w)=>Qn(C,A[w])):Qn(U,A))){d&&d();const C=Si;Si=u;try{const w=[U,A===rs?void 0:S&&A[0]===rs?[]:A,m];A=U,l?l(e,3,w):e(...w)}finally{Si=C}}}else u.run()};return a&&a(v),u=new zu(f),u.scheduler=o?()=>o(v,!1):v,m=T=>xh(T,!1,u),d=u.onStop=()=>{const T=qs.get(u);if(T){if(l)l(T,4);else for(const U of T)U();qs.delete(u)}},e?i?v(!0):A=u.run():o?o(v.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Cn(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,bt(n))Cn(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)Cn(n[i],e,t);else if(Pu(n)||rr(n))n.forEach(i=>{Cn(i,e,t)});else if(Iu(n)){for(const i in n)Cn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Cn(n[i],e,t)}return n}function Xr(n,e,t,i){try{return i?n(...i):n()}catch(r){fo(r,e,t)}}function an(n,e,t,i){if(Ve(n)){const r=Xr(n,e,t,i);return r&&Lu(r)&&r.catch(s=>{fo(s,e,t)}),r}if(ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(an(n[s],e,t,i));return r}}function fo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){In(),Xr(s,null,10,[n,l,c]),Un();return}}Sh(n,t,r,i,o)}function Sh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const wt=[];let un=-1;const or=[];let $n=null,er=0;const ef=Promise.resolve();let Ys=null;function yh(n){const e=Ys||ef;return n?e.then(this?n.bind(this):n):e}function Eh(n){let e=un+1,t=wt.length;for(;e<t;){const i=e+t>>>1,r=wt[i],s=zr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function bl(n){if(!(n.flags&1)){const e=zr(n),t=wt[wt.length-1];!t||!(n.flags&2)&&e>=zr(t)?wt.push(n):wt.splice(Eh(e),0,n),n.flags|=1,tf()}}function tf(){Ys||(Ys=ef.then(rf))}function bh(n){ze(n)?or.push(...n):$n&&n.id===-1?$n.splice(er+1,0,n):n.flags&1||(or.push(n),n.flags|=1),tf()}function jl(n,e,t=un+1){for(;t<wt.length;t++){const i=wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nf(n){if(or.length){const e=[...new Set(or)].sort((t,i)=>zr(t)-zr(i));if(or.length=0,$n){$n.push(...e);return}for($n=e,er=0;er<$n.length;er++){const t=$n[er];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$n=null,er=0}}const zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function rf(n){try{for(un=0;un<wt.length;un++){const e=wt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<wt.length;un++){const e=wt[un];e&&(e.flags&=-2)}un=-1,wt.length=0,nf(),Ys=null,(wt.length||or.length)&&rf()}}let Yt=null,sf=null;function Ks(n){const e=Yt;return Yt=n,sf=n&&n.type.__scopeId||null,e}function of(n,e=Yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Js(-1);const s=Ks(e);let o;try{o=n(...r)}finally{Ks(s),i._d&&Js(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ss(n,e){if(Yt===null)return n;const t=_o(Yt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=tt]=e[r];s&&(Ve(s)&&(s={mounted:s,updated:s}),s.deep&&Cn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(In(),an(l,t,8,[n.el,a,n,e]),Un())}}function Th(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function Fs(n,e,t=!1){const i=Ff();if(i||ar){let r=ar?ar._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Ah=Symbol.for("v-scx"),wh=()=>Fs(Ah);function Do(n,e,t){return af(n,e,t)}function af(n,e,t=tt){const{immediate:i,deep:r,flush:s,once:o}=t,a=_t({},t),l=e&&i||!e&&s!=="post";let c;if(Gr){if(s==="sync"){const m=wh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=mn,m.resume=mn,m.pause=mn,m}}const u=Rt;a.call=(m,x,S)=>an(m,u,x,S);let f=!1;s==="post"?a.scheduler=m=>{Gt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,x)=>{x?m():bl(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Mh(n,e,a);return Gr&&(c?c.push(d):l&&d()),d}function Ch(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?lf(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=qr(this),a=af(r,s.bind(i),t);return o(),a}function lf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Rh=Symbol("_vte"),cf=n=>n.__isTeleport,An=Symbol("_leaveCb"),os=Symbol("_enterCb");function Ph(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $s(()=>{n.isMounted=!0}),Tl(()=>{n.isUnmounting=!0}),n}const Xt=[Function,Array],uf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},ff=n=>{const e=n.subTree;return e.component?ff(e.component):e},Lh={name:"BaseTransition",props:uf,setup(n,{slots:e}){const t=Ff(),i=Ph();return()=>{const r=e.default&&pf(e.default(),!0);if(!r||!r.length)return;const s=df(r),o=Xe(n),{mode:a}=o;if(i.isLeaving)return Io(s);const l=$l(s);if(!l)return Io(s);let c=Sa(l,o,i,t,f=>c=f);l.type!==Ct&&Hr(l,c);let u=t.subTree&&$l(t.subTree);if(u&&u.type!==Ct&&!Ti(u,l)&&ff(t).type!==Ct){let f=Sa(u,o,i,t);if(Hr(u,f),a==="out-in"&&l.type!==Ct)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Io(s);a==="in-out"&&l.type!==Ct?f.delayLeave=(d,m,x)=>{const S=hf(i,u);S[String(u.key)]=u,d[An]=()=>{m(),d[An]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function df(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ct){e=t;break}}return e}const Dh=Lh;function hf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Sa(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:x,onLeaveCancelled:S,onBeforeAppear:p,onAppear:h,onAfterAppear:A,onAppearCancelled:v}=e,T=String(n.key),U=hf(t,n),C=(y,M)=>{y&&an(y,i,9,M)},w=(y,M)=>{const R=M[1];C(y,M),ze(y)?y.every(D=>D.length<=1)&&R():y.length<=1&&R()},F={mode:o,persisted:a,beforeEnter(y){let M=l;if(!t.isMounted)if(s)M=p||l;else return;y[An]&&y[An](!0);const R=U[T];R&&Ti(n,R)&&R.el[An]&&R.el[An](),C(M,[y])},enter(y){let M=c,R=u,D=f;if(!t.isMounted)if(s)M=h||c,R=A||u,D=v||f;else return;let H=!1;const ee=y[os]=ne=>{H||(H=!0,ne?C(D,[y]):C(R,[y]),F.delayedLeave&&F.delayedLeave(),y[os]=void 0)};M?w(M,[y,ee]):ee()},leave(y,M){const R=String(n.key);if(y[os]&&y[os](!0),t.isUnmounting)return M();C(d,[y]);let D=!1;const H=y[An]=ee=>{D||(D=!0,M(),ee?C(S,[y]):C(x,[y]),y[An]=void 0,U[R]===n&&delete U[R])};U[R]=n,m?w(m,[y,H]):H()},clone(y){const M=Sa(y,e,t,i,r);return r&&r(M),M}};return F}function Io(n){if(ho(n))return n=ri(n),n.children=null,n}function $l(n){if(!ho(n))return cf(n.type)&&n.children?df(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function Hr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function pf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===en?(o.patchFlag&128&&r++,i=i.concat(pf(o.children,e,a))):(e||o.type!==Ct)&&i.push(a!=null?ri(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function mf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const js=new WeakMap;function Lr(n,e,t,i,r=!1){if(ze(n)){n.forEach((x,S)=>Lr(x,e&&(ze(e)?e[S]:e),t,i,r));return}if(Dr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Lr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?_o(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,f=a.setupState,d=Xe(f),m=f===tt?Ru:x=>$e(d,x);if(c!=null&&c!==l){if(Zl(e),dt(c))u[c]=null,m(c)&&(f[c]=null);else if(bt(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(Ve(l))Xr(l,a,12,[o,u]);else{const x=dt(l),S=bt(l);if(x||S){const p=()=>{if(n.f){const h=x?m(l)?f[l]:u[l]:l.value;if(r)ze(h)&&fl(h,s);else if(ze(h))h.includes(s)||h.push(s);else if(x)u[l]=[s],m(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,n.k&&(u[n.k]=A)}}else x?(u[l]=o,m(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{p(),js.delete(n)};h.id=-1,js.set(n,h),Gt(h,t)}else Zl(n),p()}}}function Zl(n){const e=js.get(n);e&&(e.flags|=8,js.delete(n))}uo().requestIdleCallback;uo().cancelIdleCallback;const Dr=n=>!!n.type.__asyncLoader,ho=n=>n.type.__isKeepAlive;function Ih(n,e){gf(n,"a",e)}function Uh(n,e){gf(n,"da",e)}function gf(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ho(r.parent.vnode)&&Nh(i,e,t,r),r=r.parent}}function Nh(n,e,t,i){const r=po(e,n,i,!0);_f(()=>{fl(i[e],r)},t)}function po(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{In();const a=qr(t),l=an(e,t,n,o);return a(),Un(),l});return i?r.unshift(s):r.push(s),s}}const Bn=n=>(e,t=Rt)=>{(!Gr||n==="sp")&&po(n,(...i)=>e(...i),t)},Fh=Bn("bm"),$s=Bn("m"),Oh=Bn("bu"),Bh=Bn("u"),Tl=Bn("bum"),_f=Bn("um"),zh=Bn("sp"),Hh=Bn("rtg"),Vh=Bn("rtc");function Gh(n,e=Rt){po("ec",n,e)}const kh=Symbol.for("v-ndc"),ya=n=>n?Of(n)?_o(n):ya(n.parent):null,Ir=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ya(n.parent),$root:n=>ya(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xf(n),$forceUpdate:n=>n.f||(n.f=()=>{bl(n.update)}),$nextTick:n=>n.n||(n.n=yh.bind(n.proxy)),$watch:n=>Ch.bind(n)}),Uo=(n,e)=>n!==tt&&!n.__isScriptSetup&&$e(n,e),Wh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Uo(i,e))return o[e]=1,i[e];if(r!==tt&&$e(r,e))return o[e]=2,r[e];if($e(s,e))return o[e]=3,s[e];if(t!==tt&&$e(t,e))return o[e]=4,t[e];Ea&&(o[e]=0)}}const c=Ir[e];let u,f;if(c)return e==="$attrs"&&Et(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==tt&&$e(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,$e(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Uo(r,e)?(r[e]=t,!0):i!==tt&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==tt&&a[0]!=="$"&&$e(n,a)||Uo(e,a)||$e(s,a)||$e(i,a)||$e(Ir,a)||$e(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Jl(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ea=!0;function Xh(n){const e=xf(n),t=n.proxy,i=n.ctx;Ea=!1,e.beforeCreate&&Ql(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:S,deactivated:p,beforeDestroy:h,beforeUnmount:A,destroyed:v,unmounted:T,render:U,renderTracked:C,renderTriggered:w,errorCaptured:F,serverPrefetch:y,expose:M,inheritAttrs:R,components:D,directives:H,filters:ee}=e;if(c&&qh(c,i,null),o)for(const $ in o){const G=o[$];Ve(G)&&(i[$]=G.bind(t))}if(r){const $=r.call(t,t);st($)&&(n.data=Sl($))}if(Ea=!0,s)for(const $ in s){const G=s[$],ge=Ve(G)?G.bind(t,t):Ve(G.get)?G.get.bind(t,t):mn,ce=!Ve(G)&&Ve(G.set)?G.set.bind(t):mn,fe=Pp({get:ge,set:ce});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>fe.value,set:Te=>fe.value=Te})}if(a)for(const $ in a)vf(a[$],i,t,$);if(l){const $=Ve(l)?l.call(t):l;Reflect.ownKeys($).forEach(G=>{Th(G,$[G])})}u&&Ql(u,n,"c");function K($,G){ze(G)?G.forEach(ge=>$(ge.bind(t))):G&&$(G.bind(t))}if(K(Fh,f),K($s,d),K(Oh,m),K(Bh,x),K(Ih,S),K(Uh,p),K(Gh,F),K(Vh,C),K(Hh,w),K(Tl,A),K(_f,T),K(zh,y),ze(M))if(M.length){const $=n.exposed||(n.exposed={});M.forEach(G=>{Object.defineProperty($,G,{get:()=>t[G],set:ge=>t[G]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===mn&&(n.render=U),R!=null&&(n.inheritAttrs=R),D&&(n.components=D),H&&(n.directives=H),y&&mf(n)}function qh(n,e,t=mn){ze(n)&&(n=ba(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=Fs(r.from||i,r.default,!0):s=Fs(r.from||i):s=Fs(r),bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ql(n,e,t){an(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vf(n,e,t,i){let r=i.includes(".")?lf(t,i):()=>t[i];if(dt(n)){const s=e[n];Ve(s)&&Do(r,s)}else if(Ve(n))Do(r,n.bind(t));else if(st(n))if(ze(n))n.forEach(s=>vf(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Do(r,s,n)}}function xf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Zs(l,c,o,!0)),Zs(l,e,o)),st(e)&&s.set(e,l),l}function Zs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Zs(n,s,t,!0),r&&r.forEach(o=>Zs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Yh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Yh={data:ec,props:tc,emits:tc,methods:Ar,computed:Ar,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Ar,directives:Ar,watch:jh,provide:ec,inject:Kh};function ec(n,e){return e?n?function(){return _t(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Kh(n,e){return Ar(ba(n),ba(e))}function ba(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ar(n,e){return n?_t(Object.create(null),n,e):e}function tc(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:_t(Object.create(null),Jl(n),Jl(e??{})):e}function jh(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function Mf(){return{app:null,config:{isNativeTag:Ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $h=0;function Zh(n,e){return function(i,r=null){Ve(i)||(i=_t({},i)),r!=null&&!st(r)&&(r=null);const s=Mf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:$h++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Dp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||Pt(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,_o(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(an(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ar;ar=c;try{return u()}finally{ar=f}}};return c}}let ar=null;const Jh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ni(e)}Modifiers`]||n[`${li(e)}Modifiers`];function Qh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||tt;let r=t;const s=e.startsWith("update:"),o=s&&Jh(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>dt(u)?u.trim():u)),o.number&&(r=t.map(hl)));let a,l=i[a=wo(e)]||i[a=wo(ni(e))];!l&&s&&(l=i[a=wo(li(e))]),l&&an(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,an(c,n,6,r)}}const ep=new WeakMap;function Sf(n,e,t=!1){const i=t?ep:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Sf(c,e,!0);u&&(a=!0,_t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(ze(s)?s.forEach(l=>o[l]=null):_t(o,s),st(n)&&i.set(n,o),o)}function mo(n,e){return!n||!ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,li(e))||$e(n,e))}function nc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:S}=n,p=Ks(n);let h,A;try{if(t.shapeFlag&4){const T=r||i,U=T;h=dn(c.call(U,T,u,f,m,d,x)),A=a}else{const T=e;h=dn(T.length>1?T(f,{attrs:a,slots:o,emit:l}):T(f,null)),A=e.props?a:tp(a)}}catch(T){Ur.length=0,fo(T,n,1),h=Pt(Ct)}let v=h;if(A&&S!==!1){const T=Object.keys(A),{shapeFlag:U}=v;T.length&&U&7&&(s&&T.some(ul)&&(A=np(A,s)),v=ri(v,A,!1,!0))}return t.dirs&&(v=ri(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&Hr(v,t.transition),h=v,Ks(p),h}const tp=n=>{let e;for(const t in n)(t==="class"||t==="style"||ao(t))&&((e||(e={}))[t]=n[t]);return e},np=(n,e)=>{const t={};for(const i in n)(!ul(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ip(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ic(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!mo(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ic(i,o,c):!0:!!o;return!1}function ic(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!mo(t,s))return!0}return!1}function rp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const yf={},Ef=()=>Object.create(yf),bf=n=>Object.getPrototypeOf(n)===yf;function sp(n,e,t,i=!1){const r={},s=Ef();n.propsDefaults=Object.create(null),Tf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:fh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function op(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Xe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(mo(n.emitsOptions,d))continue;const m=e[d];if(l)if($e(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=ni(d);r[x]=Ta(l,a,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Tf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!$e(e,f)&&((u=li(f))===f||!$e(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ta(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!$e(e,f))&&(delete s[f],c=!0)}c&&wn(n.attrs,"set","")}function Tf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Cr(l))continue;const c=e[l];let u;r&&$e(r,u=ni(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:mo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Xe(t),c=a||tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ta(r,l,f,c[f],n,!$e(c,f))}}return o}function Ta(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=qr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===li(t))&&(i=!0))}return i}const ap=new WeakMap;function Af(n,e,t=!1){const i=t?ap:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[d,m]=Af(f,e,!0);_t(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,ir),ir;if(ze(s))for(let u=0;u<s.length;u++){const f=ni(s[u]);rc(f)&&(o[f]=tt)}else if(s)for(const u in s){const f=ni(u);if(rc(f)){const d=s[u],m=o[f]=ze(d)||Ve(d)?{type:d}:_t({},d),x=m.type;let S=!1,p=!0;if(ze(x))for(let h=0;h<x.length;++h){const A=x[h],v=Ve(A)&&A.name;if(v==="Boolean"){S=!0;break}else v==="String"&&(p=!1)}else S=Ve(x)&&x.name==="Boolean";m[0]=S,m[1]=p,(S||$e(m,"default"))&&a.push(f)}}const c=[o,a];return st(n)&&i.set(n,c),c}function rc(n){return n[0]!=="$"&&!Cr(n)}const Al=n=>n==="_"||n==="_ctx"||n==="$stable",wl=n=>ze(n)?n.map(dn):[dn(n)],lp=(n,e,t)=>{if(e._n)return e;const i=of((...r)=>wl(e(...r)),t);return i._c=!1,i},wf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Al(r))continue;const s=n[r];if(Ve(s))e[r]=lp(r,s,i);else if(s!=null){const o=wl(s);e[r]=()=>o}}},Cf=(n,e)=>{const t=wl(e);n.slots.default=()=>t},Rf=(n,e,t)=>{for(const i in e)(t||!Al(i))&&(n[i]=e[i])},cp=(n,e,t)=>{const i=n.slots=Ef();if(n.vnode.shapeFlag&32){const r=e._;r?(Rf(i,e,t),t&&Nu(i,"_",r,!0)):wf(e,i)}else e&&Cf(n,e)},up=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Rf(r,e,t):(s=!e.$stable,wf(e,r)),o=e}else e&&(Cf(n,e),o={default:1});if(s)for(const a in r)!Al(a)&&o[a]==null&&delete r[a]},Gt=mp;function fp(n){return dp(n)}function dp(n,e){const t=uo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=mn,insertStaticContent:x}=n,S=(g,P,z,j=null,V=null,Q=null,J=void 0,Z=null,E=!!P.dynamicChildren)=>{if(g===P)return;g&&!Ti(g,P)&&(j=xe(g),Te(g,V,Q,!0),g=null),P.patchFlag===-2&&(E=!1,P.dynamicChildren=null);const{type:_,ref:L,shapeFlag:O}=P;switch(_){case go:p(g,P,z,j);break;case Ct:h(g,P,z,j);break;case Os:g==null&&A(P,z,j,J);break;case en:D(g,P,z,j,V,Q,J,Z,E);break;default:O&1?U(g,P,z,j,V,Q,J,Z,E):O&6?H(g,P,z,j,V,Q,J,Z,E):(O&64||O&128)&&_.process(g,P,z,j,V,Q,J,Z,E,Pe)}L!=null&&V?Lr(L,g&&g.ref,Q,P||g,!P):L==null&&g&&g.ref!=null&&Lr(g.ref,null,Q,g,!0)},p=(g,P,z,j)=>{if(g==null)i(P.el=a(P.children),z,j);else{const V=P.el=g.el;P.children!==g.children&&c(V,P.children)}},h=(g,P,z,j)=>{g==null?i(P.el=l(P.children||""),z,j):P.el=g.el},A=(g,P,z,j)=>{[g.el,g.anchor]=x(g.children,P,z,j,g.el,g.anchor)},v=({el:g,anchor:P},z,j)=>{let V;for(;g&&g!==P;)V=d(g),i(g,z,j),g=V;i(P,z,j)},T=({el:g,anchor:P})=>{let z;for(;g&&g!==P;)z=d(g),r(g),g=z;r(P)},U=(g,P,z,j,V,Q,J,Z,E)=>{if(P.type==="svg"?J="svg":P.type==="math"&&(J="mathml"),g==null)C(P,z,j,V,Q,J,Z,E);else{const _=g.el&&g.el._isVueCE?g.el:null;try{_&&_._beginPatch(),y(g,P,V,Q,J,Z,E)}finally{_&&_._endPatch()}}},C=(g,P,z,j,V,Q,J,Z)=>{let E,_;const{props:L,shapeFlag:O,transition:X,dirs:k}=g;if(E=g.el=o(g.type,Q,L&&L.is,L),O&8?u(E,g.children):O&16&&F(g.children,E,null,j,V,No(g,Q),J,Z),k&&fi(g,null,j,"created"),w(E,g,g.scopeId,J,j),L){for(const oe in L)oe!=="value"&&!Cr(oe)&&s(E,oe,null,L[oe],Q,j);"value"in L&&s(E,"value",null,L.value,Q),(_=L.onVnodeBeforeMount)&&cn(_,j,g)}k&&fi(g,null,j,"beforeMount");const ue=hp(V,X);ue&&X.beforeEnter(E),i(E,P,z),((_=L&&L.onVnodeMounted)||ue||k)&&Gt(()=>{_&&cn(_,j,g),ue&&X.enter(E),k&&fi(g,null,j,"mounted")},V)},w=(g,P,z,j,V)=>{if(z&&m(g,z),j)for(let Q=0;Q<j.length;Q++)m(g,j[Q]);if(V){let Q=V.subTree;if(P===Q||If(Q.type)&&(Q.ssContent===P||Q.ssFallback===P)){const J=V.vnode;w(g,J,J.scopeId,J.slotScopeIds,V.parent)}}},F=(g,P,z,j,V,Q,J,Z,E=0)=>{for(let _=E;_<g.length;_++){const L=g[_]=Z?Zn(g[_]):dn(g[_]);S(null,L,P,z,j,V,Q,J,Z)}},y=(g,P,z,j,V,Q,J)=>{const Z=P.el=g.el;let{patchFlag:E,dynamicChildren:_,dirs:L}=P;E|=g.patchFlag&16;const O=g.props||tt,X=P.props||tt;let k;if(z&&di(z,!1),(k=X.onVnodeBeforeUpdate)&&cn(k,z,P,g),L&&fi(P,g,z,"beforeUpdate"),z&&di(z,!0),(O.innerHTML&&X.innerHTML==null||O.textContent&&X.textContent==null)&&u(Z,""),_?M(g.dynamicChildren,_,Z,z,j,No(P,V),Q):J||G(g,P,Z,null,z,j,No(P,V),Q,!1),E>0){if(E&16)R(Z,O,X,z,V);else if(E&2&&O.class!==X.class&&s(Z,"class",null,X.class,V),E&4&&s(Z,"style",O.style,X.style,V),E&8){const ue=P.dynamicProps;for(let oe=0;oe<ue.length;oe++){const le=ue[oe],we=O[le],ae=X[le];(ae!==we||le==="value")&&s(Z,le,we,ae,V,z)}}E&1&&g.children!==P.children&&u(Z,P.children)}else!J&&_==null&&R(Z,O,X,z,V);((k=X.onVnodeUpdated)||L)&&Gt(()=>{k&&cn(k,z,P,g),L&&fi(P,g,z,"updated")},j)},M=(g,P,z,j,V,Q,J)=>{for(let Z=0;Z<P.length;Z++){const E=g[Z],_=P[Z],L=E.el&&(E.type===en||!Ti(E,_)||E.shapeFlag&198)?f(E.el):z;S(E,_,L,null,j,V,Q,J,!0)}},R=(g,P,z,j,V)=>{if(P!==z){if(P!==tt)for(const Q in P)!Cr(Q)&&!(Q in z)&&s(g,Q,P[Q],null,V,j);for(const Q in z){if(Cr(Q))continue;const J=z[Q],Z=P[Q];J!==Z&&Q!=="value"&&s(g,Q,Z,J,V,j)}"value"in z&&s(g,"value",P.value,z.value,V)}},D=(g,P,z,j,V,Q,J,Z,E)=>{const _=P.el=g?g.el:a(""),L=P.anchor=g?g.anchor:a("");let{patchFlag:O,dynamicChildren:X,slotScopeIds:k}=P;k&&(Z=Z?Z.concat(k):k),g==null?(i(_,z,j),i(L,z,j),F(P.children||[],z,L,V,Q,J,Z,E)):O>0&&O&64&&X&&g.dynamicChildren&&g.dynamicChildren.length===X.length?(M(g.dynamicChildren,X,z,V,Q,J,Z),(P.key!=null||V&&P===V.subTree)&&Pf(g,P,!0)):G(g,P,z,L,V,Q,J,Z,E)},H=(g,P,z,j,V,Q,J,Z,E)=>{P.slotScopeIds=Z,g==null?P.shapeFlag&512?V.ctx.activate(P,z,j,J,E):ee(P,z,j,V,Q,J,E):ne(g,P,E)},ee=(g,P,z,j,V,Q,J)=>{const Z=g.component=bp(g,j,V);if(ho(g)&&(Z.ctx.renderer=Pe),Tp(Z,!1,J),Z.asyncDep){if(V&&V.registerDep(Z,K,J),!g.el){const E=Z.subTree=Pt(Ct);h(null,E,P,z),g.placeholder=E.el}}else K(Z,g,P,z,V,Q,J)},ne=(g,P,z)=>{const j=P.component=g.component;if(ip(g,P,z))if(j.asyncDep&&!j.asyncResolved){$(j,P,z);return}else j.next=P,j.update();else P.el=g.el,j.vnode=P},K=(g,P,z,j,V,Q,J)=>{const Z=()=>{if(g.isMounted){let{next:O,bu:X,u:k,parent:ue,vnode:oe}=g;{const He=Lf(g);if(He){O&&(O.el=oe.el,$(g,O,J)),He.asyncDep.then(()=>{g.isUnmounted||Z()});return}}let le=O,we;di(g,!1),O?(O.el=oe.el,$(g,O,J)):O=oe,X&&Us(X),(we=O.props&&O.props.onVnodeBeforeUpdate)&&cn(we,ue,O,oe),di(g,!0);const ae=nc(g),_e=g.subTree;g.subTree=ae,S(_e,ae,f(_e.el),xe(_e),g,V,Q),O.el=ae.el,le===null&&rp(g,ae.el),k&&Gt(k,V),(we=O.props&&O.props.onVnodeUpdated)&&Gt(()=>cn(we,ue,O,oe),V)}else{let O;const{el:X,props:k}=P,{bm:ue,m:oe,parent:le,root:we,type:ae}=g,_e=Dr(P);di(g,!1),ue&&Us(ue),!_e&&(O=k&&k.onVnodeBeforeMount)&&cn(O,le,P),di(g,!0);{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(ae);const He=g.subTree=nc(g);S(null,He,z,j,g,V,Q),P.el=He.el}if(oe&&Gt(oe,V),!_e&&(O=k&&k.onVnodeMounted)){const He=P;Gt(()=>cn(O,le,He),V)}(P.shapeFlag&256||le&&Dr(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&Gt(g.a,V),g.isMounted=!0,P=z=j=null}};g.scope.on();const E=g.effect=new zu(Z);g.scope.off();const _=g.update=E.run.bind(E),L=g.job=E.runIfDirty.bind(E);L.i=g,L.id=g.uid,E.scheduler=()=>bl(L),di(g,!0),_()},$=(g,P,z)=>{P.component=g;const j=g.vnode.props;g.vnode=P,g.next=null,op(g,P.props,j,z),up(g,P.children,z),In(),jl(g),Un()},G=(g,P,z,j,V,Q,J,Z,E=!1)=>{const _=g&&g.children,L=g?g.shapeFlag:0,O=P.children,{patchFlag:X,shapeFlag:k}=P;if(X>0){if(X&128){ce(_,O,z,j,V,Q,J,Z,E);return}else if(X&256){ge(_,O,z,j,V,Q,J,Z,E);return}}k&8?(L&16&&Me(_,V,Q),O!==_&&u(z,O)):L&16?k&16?ce(_,O,z,j,V,Q,J,Z,E):Me(_,V,Q,!0):(L&8&&u(z,""),k&16&&F(O,z,j,V,Q,J,Z,E))},ge=(g,P,z,j,V,Q,J,Z,E)=>{g=g||ir,P=P||ir;const _=g.length,L=P.length,O=Math.min(_,L);let X;for(X=0;X<O;X++){const k=P[X]=E?Zn(P[X]):dn(P[X]);S(g[X],k,z,null,V,Q,J,Z,E)}_>L?Me(g,V,Q,!0,!1,O):F(P,z,j,V,Q,J,Z,E,O)},ce=(g,P,z,j,V,Q,J,Z,E)=>{let _=0;const L=P.length;let O=g.length-1,X=L-1;for(;_<=O&&_<=X;){const k=g[_],ue=P[_]=E?Zn(P[_]):dn(P[_]);if(Ti(k,ue))S(k,ue,z,null,V,Q,J,Z,E);else break;_++}for(;_<=O&&_<=X;){const k=g[O],ue=P[X]=E?Zn(P[X]):dn(P[X]);if(Ti(k,ue))S(k,ue,z,null,V,Q,J,Z,E);else break;O--,X--}if(_>O){if(_<=X){const k=X+1,ue=k<L?P[k].el:j;for(;_<=X;)S(null,P[_]=E?Zn(P[_]):dn(P[_]),z,ue,V,Q,J,Z,E),_++}}else if(_>X)for(;_<=O;)Te(g[_],V,Q,!0),_++;else{const k=_,ue=_,oe=new Map;for(_=ue;_<=X;_++){const Ae=P[_]=E?Zn(P[_]):dn(P[_]);Ae.key!=null&&oe.set(Ae.key,_)}let le,we=0;const ae=X-ue+1;let _e=!1,He=0;const Le=new Array(ae);for(_=0;_<ae;_++)Le[_]=0;for(_=k;_<=O;_++){const Ae=g[_];if(we>=ae){Te(Ae,V,Q,!0);continue}let Ue;if(Ae.key!=null)Ue=oe.get(Ae.key);else for(le=ue;le<=X;le++)if(Le[le-ue]===0&&Ti(Ae,P[le])){Ue=le;break}Ue===void 0?Te(Ae,V,Q,!0):(Le[Ue-ue]=_+1,Ue>=He?He=Ue:_e=!0,S(Ae,P[Ue],z,null,V,Q,J,Z,E),we++)}const ye=_e?pp(Le):ir;for(le=ye.length-1,_=ae-1;_>=0;_--){const Ae=ue+_,Ue=P[Ae],nt=P[Ae+1],I=Ae+1<L?nt.el||Df(nt):j;Le[_]===0?S(null,Ue,z,I,V,Q,J,Z,E):_e&&(le<0||_!==ye[le]?fe(Ue,z,I,2):le--)}}},fe=(g,P,z,j,V=null)=>{const{el:Q,type:J,transition:Z,children:E,shapeFlag:_}=g;if(_&6){fe(g.component.subTree,P,z,j);return}if(_&128){g.suspense.move(P,z,j);return}if(_&64){J.move(g,P,z,Pe);return}if(J===en){i(Q,P,z);for(let O=0;O<E.length;O++)fe(E[O],P,z,j);i(g.anchor,P,z);return}if(J===Os){v(g,P,z);return}if(j!==2&&_&1&&Z)if(j===0)Z.beforeEnter(Q),i(Q,P,z),Gt(()=>Z.enter(Q),V);else{const{leave:O,delayLeave:X,afterLeave:k}=Z,ue=()=>{g.ctx.isUnmounted?r(Q):i(Q,P,z)},oe=()=>{Q._isLeaving&&Q[An](!0),O(Q,()=>{ue(),k&&k()})};X?X(Q,ue,oe):oe()}else i(Q,P,z)},Te=(g,P,z,j=!1,V=!1)=>{const{type:Q,props:J,ref:Z,children:E,dynamicChildren:_,shapeFlag:L,patchFlag:O,dirs:X,cacheIndex:k}=g;if(O===-2&&(V=!1),Z!=null&&(In(),Lr(Z,null,z,g,!0),Un()),k!=null&&(P.renderCache[k]=void 0),L&256){P.ctx.deactivate(g);return}const ue=L&1&&X,oe=!Dr(g);let le;if(oe&&(le=J&&J.onVnodeBeforeUnmount)&&cn(le,P,g),L&6)re(g.component,z,j);else{if(L&128){g.suspense.unmount(z,j);return}ue&&fi(g,null,P,"beforeUnmount"),L&64?g.type.remove(g,P,z,Pe,j):_&&!_.hasOnce&&(Q!==en||O>0&&O&64)?Me(_,P,z,!1,!0):(Q===en&&O&384||!V&&L&16)&&Me(E,P,z),j&&Oe(g)}(oe&&(le=J&&J.onVnodeUnmounted)||ue)&&Gt(()=>{le&&cn(le,P,g),ue&&fi(g,null,P,"unmounted")},z)},Oe=g=>{const{type:P,el:z,anchor:j,transition:V}=g;if(P===en){te(z,j);return}if(P===Os){T(g);return}const Q=()=>{r(z),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(g.shapeFlag&1&&V&&!V.persisted){const{leave:J,delayLeave:Z}=V,E=()=>J(z,Q);Z?Z(g.el,Q,E):E()}else Q()},te=(g,P)=>{let z;for(;g!==P;)z=d(g),r(g),g=z;r(P)},re=(g,P,z)=>{const{bum:j,scope:V,job:Q,subTree:J,um:Z,m:E,a:_}=g;sc(E),sc(_),j&&Us(j),V.stop(),Q&&(Q.flags|=8,Te(J,g,P,z)),Z&&Gt(Z,P),Gt(()=>{g.isUnmounted=!0},P)},Me=(g,P,z,j=!1,V=!1,Q=0)=>{for(let J=Q;J<g.length;J++)Te(g[J],P,z,j,V)},xe=g=>{if(g.shapeFlag&6)return xe(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const P=d(g.anchor||g.el),z=P&&P[Rh];return z?d(z):P};let De=!1;const Re=(g,P,z)=>{let j;g==null?P._vnode&&(Te(P._vnode,null,null,!0),j=P._vnode.component):S(P._vnode||null,g,P,null,null,null,z),P._vnode=g,De||(De=!0,jl(j),nf(),De=!1)},Pe={p:S,um:Te,m:fe,r:Oe,mt:ee,mc:F,pc:G,pbc:M,n:xe,o:n};return{render:Re,hydrate:void 0,createApp:Zh(Re)}}function No({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function hp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Pf(n,e,t=!1){const i=n.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Pf(o,a)),a.type===go&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===en?1:0)),a.type===Ct&&!a.el&&(a.el=o.el)}}function pp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Lf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lf(e)}function sc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Df(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Df(e.subTree):null}const If=n=>n.__isSuspense;function mp(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):bh(n)}const en=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),Ur=[];let kt=null;function yi(n=!1){Ur.push(kt=n?null:[])}function gp(){Ur.pop(),kt=Ur[Ur.length-1]||null}let Vr=1;function Js(n,e=!1){Vr+=n,n<0&&kt&&e&&(kt.hasOnce=!0)}function Uf(n){return n.dynamicChildren=Vr>0?kt||ir:null,gp(),Vr>0&&kt&&kt.push(n),n}function Fi(n,e,t,i,r,s){return Uf(he(n,e,t,i,r,s,!0))}function _p(n,e,t,i,r){return Uf(Pt(n,e,t,i,r,!0))}function Qs(n){return n?n.__v_isVNode===!0:!1}function Ti(n,e){return n.type===e.type&&n.key===e.key}const Nf=({key:n})=>n??null,Bs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||bt(n)||Ve(n)?{i:Yt,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,i=0,r=null,s=n===en?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Nf(e),ref:e&&Bs(e),scopeId:sf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return a?(Cl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Vr>0&&!o&&kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&kt.push(l),l}const Pt=vp;function vp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===kh)&&(n=Ct),Qs(n)){const a=ri(n,e,!0);return t&&Cl(a,t),Vr>0&&!s&&kt&&(a.shapeFlag&6?kt[kt.indexOf(n)]=a:kt.push(a)),a.patchFlag=-2,a}if(Rp(n)&&(n=n.__vccOpts),e){e=xp(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=Dt(a)),st(l)&&(El(l)&&!ze(l)&&(l=_t({},l)),e.style=pl(l))}const o=dt(n)?1:If(n)?128:cf(n)?64:st(n)?4:Ve(n)?2:0;return he(n,e,t,i,r,o,s,!0)}function xp(n){return n?El(n)||bf(n)?_t({},n):n:null}function ri(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Sp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Nf(c),ref:e&&e.ref?t&&s?ze(s)?s.concat(Bs(e)):[s,Bs(e)]:Bs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==en?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ri(n.ssContent),ssFallback:n.ssFallback&&ri(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hr(u,l.clone(u)),u}function Mp(n=" ",e=0){return Pt(go,null,n,e)}function Fo(n,e){const t=Pt(Os,null,n);return t.staticCount=e,t}function Oo(n="",e=!1){return e?(yi(),_p(Ct,null,n)):Pt(Ct,null,n)}function dn(n){return n==null||typeof n=="boolean"?Pt(Ct):ze(n)?Pt(en,null,n.slice()):Qs(n)?Zn(n):Pt(go,null,String(n))}function Zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ri(n)}function Cl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Cl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!bf(e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[Mp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Sp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(r==="style")e.style=pl([e.style,i.style]);else if(ao(r)){const s=e[r],o=i[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function cn(n,e,t,i=null){an(n,e,7,[t,i])}const yp=Mf();let Ep=0;function bp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||yp,s={uid:Ep++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Af(i,r),emitsOptions:Sf(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Qh.bind(null,s),n.ce&&n.ce(s),s}let Rt=null;const Ff=()=>Rt||Yt;let eo,Aa;{const n=uo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};eo=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),Aa=e("__VUE_SSR_SETTERS__",t=>Gr=t)}const qr=n=>{const e=Rt;return eo(n),n.scope.on(),()=>{n.scope.off(),eo(e)}},oc=()=>{Rt&&Rt.scope.off(),eo(null)};function Of(n){return n.vnode.shapeFlag&4}let Gr=!1;function Tp(n,e=!1,t=!1){e&&Aa(e);const{props:i,children:r}=n.vnode,s=Of(n);sp(n,i,s,e),cp(n,r,t||e);const o=s?Ap(n,e):void 0;return e&&Aa(!1),o}function Ap(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Wh);const{setup:i}=t;if(i){In();const r=n.setupContext=i.length>1?Cp(n):null,s=qr(n),o=Xr(i,n,0,[n.props,r]),a=Lu(o);if(Un(),s(),(a||n.sp)&&!Dr(n)&&mf(n),a){if(o.then(oc,oc),e)return o.then(l=>{ac(n,l)}).catch(l=>{fo(l,n,0)});n.asyncDep=o}else ac(n,o)}else Bf(n)}function ac(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=Qu(e)),Bf(n)}function Bf(n,e,t){const i=n.type;n.render||(n.render=i.render||mn);{const r=qr(n);In();try{Xh(n)}finally{Un(),r()}}}const wp={get(n,e){return Et(n,"get",""),n[e]}};function Cp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wp),slots:n.slots,emit:n.emit,expose:e}}function _o(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qu(dh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ir)return Ir[t](n)},has(e,t){return t in e||t in Ir}})):n.proxy}function Rp(n){return Ve(n)&&"__vccOpts"in n}const Pp=(n,e)=>vh(n,e,Gr);function Lp(n,e,t){try{Js(-1);const i=arguments.length;return i===2?st(e)&&!ze(e)?Qs(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Qs(t)&&(t=[t]),Pt(n,e,t))}finally{Js(1)}}const Dp="3.5.27";let wa;const lc=typeof window<"u"&&window.trustedTypes;if(lc)try{wa=lc.createPolicy("vue",{createHTML:n=>n})}catch{}const zf=wa?n=>wa.createHTML(n):n=>n,Ip="http://www.w3.org/2000/svg",Up="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,cc=Tn&&Tn.createElement("template"),Np={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Tn.createElementNS(Ip,n):e==="mathml"?Tn.createElementNS(Up,n):t?Tn.createElement(n,{is:t}):Tn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Tn.createTextNode(n),createComment:n=>Tn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Tn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{cc.innerHTML=zf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=cc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gn="transition",xr="animation",kr=Symbol("_vtc"),Hf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fp=_t({},uf,Hf),Op=n=>(n.displayName="Transition",n.props=Fp,n),Bp=Op((n,{slots:e})=>Lp(Dh,zp(n),e)),hi=(n,e=[])=>{ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},uc=n=>n?ze(n)?n.some(e=>e.length>1):n.length>1:!1;function zp(n){const e={};for(const D in n)D in Hf||(e[D]=n[D]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,x=Hp(r),S=x&&x[0],p=x&&x[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:v,onLeave:T,onLeaveCancelled:U,onBeforeAppear:C=h,onAppear:w=A,onAppearCancelled:F=v}=e,y=(D,H,ee,ne)=>{D._enterCancelled=ne,pi(D,H?u:a),pi(D,H?c:o),ee&&ee()},M=(D,H)=>{D._isLeaving=!1,pi(D,f),pi(D,m),pi(D,d),H&&H()},R=D=>(H,ee)=>{const ne=D?w:A,K=()=>y(H,D,ee);hi(ne,[H,K]),fc(()=>{pi(H,D?l:s),vn(H,D?u:a),uc(ne)||dc(H,i,S,K)})};return _t(e,{onBeforeEnter(D){hi(h,[D]),vn(D,s),vn(D,o)},onBeforeAppear(D){hi(C,[D]),vn(D,l),vn(D,c)},onEnter:R(!1),onAppear:R(!0),onLeave(D,H){D._isLeaving=!0;const ee=()=>M(D,H);vn(D,f),D._enterCancelled?(vn(D,d),mc(D)):(mc(D),vn(D,d)),fc(()=>{D._isLeaving&&(pi(D,f),vn(D,m),uc(T)||dc(D,i,p,ee))}),hi(T,[D,ee])},onEnterCancelled(D){y(D,!1,void 0,!0),hi(v,[D])},onAppearCancelled(D){y(D,!0,void 0,!0),hi(F,[D])},onLeaveCancelled(D){M(D),hi(U,[D])}})}function Hp(n){if(n==null)return null;if(st(n))return[Bo(n.enter),Bo(n.leave)];{const e=Bo(n);return[e,e]}}function Bo(n){return Bd(n)}function vn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[kr]||(n[kr]=new Set)).add(e)}function pi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[kr];t&&(t.delete(e),t.size||(n[kr]=void 0))}function fc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Vp=0;function dc(n,e,t,i){const r=n._endId=++Vp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Gp(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function Gp(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${Gn}Delay`),s=i(`${Gn}Duration`),o=hc(r,s),a=i(`${xr}Delay`),l=i(`${xr}Duration`),c=hc(a,l);let u=null,f=0,d=0;e===Gn?o>0&&(u=Gn,f=o,d=s.length):e===xr?c>0&&(u=xr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Gn:xr:null,d=u?u===Gn?s.length:l.length:0);const m=u===Gn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Gn}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function hc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>pc(t)+pc(n[i])))}function pc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function mc(n){return(n?n.ownerDocument:document).body.offsetHeight}function kp(n,e,t){const i=n[kr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const gc=Symbol("_vod"),Wp=Symbol("_vsh"),Xp=Symbol(""),qp=/(?:^|;)\s*display\s*:/;function Yp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zs(i,a,"")}else for(const o in e)t[o]==null&&zs(i,o,"");for(const o in t)o==="display"&&(s=!0),zs(i,o,t[o])}else if(r){if(e!==t){const o=i[Xp];o&&(t+=";"+o),i.cssText=t,s=qp.test(t)}}else e&&n.removeAttribute("style");gc in n&&(n[gc]=s?i.display:"",n[Wp]&&(i.display="none"))}const _c=/\s*!important$/;function zs(n,e,t){if(ze(t))t.forEach(i=>zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Kp(n,e);_c.test(t)?n.setProperty(li(i),t.replace(_c,""),"important"):n[i]=t}}const vc=["Webkit","Moz","ms"],zo={};function Kp(n,e){const t=zo[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return zo[e]=i;i=Uu(i);for(let r=0;r<vc.length;r++){const s=vc[r]+i;if(s in n)return zo[e]=s}return e}const xc="http://www.w3.org/1999/xlink";function Mc(n,e,t,i,r,s=Wd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(xc,e.slice(6,e.length)):n.setAttributeNS(xc,e,t):t==null||s&&!Fu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ai(t)?String(t):t)}function Sc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Fu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function tr(n,e,t,i){n.addEventListener(e,t,i)}function jp(n,e,t,i){n.removeEventListener(e,t,i)}const yc=Symbol("_vei");function $p(n,e,t,i,r=null){const s=n[yc]||(n[yc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Zp(e);if(i){const c=s[e]=em(i,r);tr(n,a,c,l)}else o&&(jp(n,a,o,l),s[e]=void 0)}}const Ec=/(?:Once|Passive|Capture)$/;function Zp(n){let e;if(Ec.test(n)){e={};let i;for(;i=n.match(Ec);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):li(n.slice(2)),e]}let Ho=0;const Jp=Promise.resolve(),Qp=()=>Ho||(Jp.then(()=>Ho=0),Ho=Date.now());function em(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(tm(i,t.value),e,5,[i])};return t.value=n,t.attached=Qp(),t}function tm(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const bc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,nm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?kp(n,i,o):e==="style"?Yp(n,t,i):ao(e)?ul(e)||$p(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):im(n,e,i,o))?(Sc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!dt(i))?Sc(n,ni(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mc(n,e,i,o))};function im(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bc(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return bc(e)&&dt(t)?!1:e in n}const Tc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>Us(e,t):e};function rm(n){n.target.composing=!0}function Ac(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vo=Symbol("_assign");function wc(n,e,t){return e&&(n=n.trim()),t&&(n=hl(n)),n}const as={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Vo]=Tc(r);const s=i||r.props&&r.props.type==="number";tr(n,e?"change":"input",o=>{o.target.composing||n[Vo](wc(n.value,t,s))}),(t||s)&&tr(n,"change",()=>{n.value=wc(n.value,t,s)}),e||(tr(n,"compositionstart",rm),tr(n,"compositionend",Ac),tr(n,"change",Ac))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Vo]=Tc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?hl(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},sm=["ctrl","shift","alt","meta"],om={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>sm.some(t=>n[`${t}Key`]&&!e.includes(t))},ls=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=om[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},am={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cc=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=li(r.key);if(e.some(o=>o===s||am[o]===s))return n(r)}))},lm=_t({patchProp:nm},Np);let Rc;function cm(){return Rc||(Rc=fp(lm))}const um=((...n)=>{const e=cm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=dm(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,fm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function fm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dm(n){return dt(n)?document.querySelector(n):n}const hm="/portrait_ascii.png",pm="/neural.png",mm="/cloud.png",gm="/infineon.png",_m="/tgw.png",vm="/data.png",xm="/tower-defense-game.gif",Mm="/MAP.png",Sm="/RNA.png",ym="/backpack.png",Em="/game_preview.mp4";const Rl="167",bm=0,Pc=1,Tm=2,Vf=1,Am=2,bn=3,si=0,Nt=1,Rn=2,ei=0,lr=1,Lc=2,Dc=3,Ic=4,wm=5,Ai=100,Cm=101,Rm=102,Pm=103,Lm=104,Dm=200,Im=201,Um=202,Nm=203,Ca=204,Ra=205,Fm=206,Om=207,Bm=208,zm=209,Hm=210,Vm=211,Gm=212,km=213,Wm=214,Xm=0,qm=1,Ym=2,to=3,Km=4,jm=5,$m=6,Zm=7,Gf=0,Jm=1,Qm=2,ti=0,eg=1,tg=2,ng=3,ig=4,rg=5,sg=6,og=7,kf=300,fr=301,dr=302,Pa=303,La=304,vo=306,Da=1e3,Ci=1001,Ia=1002,Kt=1003,ag=1004,cs=1005,nn=1006,Go=1007,Ri=1008,Fn=1009,Wf=1010,Xf=1011,Wr=1012,Pl=1013,Di=1014,Pn=1015,Yr=1016,Ll=1017,Dl=1018,hr=1020,qf=35902,Yf=1021,Kf=1022,rn=1023,jf=1024,$f=1025,cr=1026,pr=1027,Zf=1028,Il=1029,Jf=1030,Ul=1031,Nl=1033,Hs=33776,Vs=33777,Gs=33778,ks=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,Ha=37496,Va=37808,Ga=37809,ka=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,Ka=37815,ja=37816,$a=37817,Za=37818,Ja=37819,Qa=37820,el=37821,Ws=36492,tl=36494,nl=36495,Qf=36283,il=36284,rl=36285,sl=36286,lg=3200,cg=3201,ug=0,fg=1,Jn="",fn="srgb",ci="srgb-linear",Fl="display-p3",xo="display-p3-linear",no="linear",rt="srgb",io="rec709",ro="p3",Oi=7680,Uc=519,dg=512,hg=513,pg=514,ed=515,mg=516,gg=517,_g=518,vg=519,Nc=35044,Fc="300 es",Ln=2e3,so=2001;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=Math.PI/180,ol=180/Math.PI;function Kr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function xg(n,e){return(n%e+e)%e}function Wo(n,e,t){return(1-t)*n+t*e}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],S=r[0],p=r[3],h=r[6],A=r[1],v=r[4],T=r[7],U=r[2],C=r[5],w=r[8];return s[0]=o*S+a*A+l*U,s[3]=o*p+a*v+l*C,s[6]=o*h+a*T+l*w,s[1]=c*S+u*A+f*U,s[4]=c*p+u*v+f*C,s[7]=c*h+u*T+f*w,s[2]=d*S+m*A+x*U,s[5]=d*p+m*v+x*C,s[8]=d*h+m*T+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new ke;function td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mg(){const n=oo("canvas");return n.style.display="block",n}const Oc={};function Nr(n){n in Oc||(Oc[n]=!0,console.warn(n))}function Sg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Bc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[ci]:{transfer:no,primaries:io,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[fn]:{transfer:rt,primaries:io,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xo]:{transfer:no,primaries:ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(zc),fromReference:n=>n.applyMatrix3(Bc)},[Fl]:{transfer:rt,primaries:ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(zc),fromReference:n=>n.applyMatrix3(Bc).convertLinearToSRGB()}},yg=new Set([ci,xo]),Ze={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sr[e].toReference,r=Sr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sr[n].primaries},getTransfer:function(n){return n===Jn?no:Sr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Sr[e].luminanceCoefficients)}};function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class Eg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=oo("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bg=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yo(r[o].image)):s.push(Yo(r[o]))}else s=Yo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tg=0;class Ft extends gr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Ci,r=Ci,s=nn,o=Ri,a=rn,l=Fn,c=Ft.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Kr(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=kf;Ft.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],S=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(m+1)/2,U=(h+1)/2,C=(u+d)/4,w=(f+S)/4,F=(x+p)/4;return v>T&&v>U?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=w/i):T>U?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=F/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=w/s,r=F/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-x)*(p-x)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-x)/A,this.y=(f-S)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ag extends gr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Ag{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class id extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wg extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=S;return}if(f!==S||l!==d||c!==m||u!==x){let p=1-a;const h=l*d+c*m+u*x+f*S,A=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const U=Math.sqrt(v),C=Math.atan2(U,h*A);p=Math.sin(p*C)/U,a=Math.sin(a*C)/U}const T=a*A;if(l=l*p+d*T,c=c*p+m*T,u=u*p+x*T,f=f*p+S*T,p===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-a*m,e[t+2]=c*x+u*m+a*d-l*f,e[t+3]=u*x-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new Y,Hc=new jr;class $r{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(s,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),fs.subVectors(this.max,yr),zi.subVectors(e.a,yr),Hi.subVectors(e.b,yr),Vi.subVectors(e.c,yr),kn.subVectors(Hi,zi),Wn.subVectors(Vi,Hi),mi.subVectors(zi,Vi);let t=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-mi.z,mi.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,mi.z,0,-mi.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-mi.y,mi.x,0];return!jo(t,zi,Hi,Vi,fs)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,zi,Hi,Vi,fs))?!1:(ds.crossVectors(kn,Wn),t=[ds.x,ds.y,ds.z],jo(t,zi,Hi,Vi,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Zt=new Y,us=new $r,zi=new Y,Hi=new Y,Vi=new Y,kn=new Y,Wn=new Y,mi=new Y,yr=new Y,fs=new Y,ds=new Y,gi=new Y;function jo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gi.fromArray(n,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cg=new $r,Er=new Y,$o=new Y;class Mo{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add($o)),this.expandByPoint(Er.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new Y,Zo=new Y,hs=new Y,Xn=new Y,Jo=new Y,ps=new Y,Qo=new Y;class rd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zo.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hs),a=Xn.dot(this.direction),l=-Xn.dot(hs),c=Xn.lengthSq(),u=Math.abs(1-o*o);let f,d,m,x;if(u>0)if(f=o*l-a,d=o*a-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const S=1/u;f*=S,d*=S,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zo).addScaledVector(hs,d),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){Jo.subVectors(t,e),ps.subVectors(i,e),Qo.crossVectors(Jo,ps);let o=this.direction.dot(Qo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(ps.crossVectors(Xn,ps));if(l<0)return null;const c=a*this.direction.dot(Jo.cross(Xn));if(c<0||l+c>o)return null;const u=-a*Xn.dot(Qo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,c,u,f,d,m,x,S,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,m,x,S,p)}set(e,t,i,r,s,o,a,l,c,u,f,d,m,x,S,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=S,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,x=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,S=c*f;t[0]=d+S*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,S=c*f;t[0]=d-S*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,x=a*u,S=a*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=S-d*f,t[8]=x*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-S*f}else if(e.order==="XZY"){const d=o*l,m=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=o*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Pg)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),qn.crossVectors(i,Ht),qn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),qn.crossVectors(i,Ht)),qn.normalize(),ms.crossVectors(Ht,qn),r[0]=qn.x,r[4]=ms.x,r[8]=Ht.x,r[1]=qn.y,r[5]=ms.y,r[9]=Ht.y,r[2]=qn.z,r[6]=ms.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],S=i[6],p=i[10],h=i[14],A=i[3],v=i[7],T=i[11],U=i[15],C=r[0],w=r[4],F=r[8],y=r[12],M=r[1],R=r[5],D=r[9],H=r[13],ee=r[2],ne=r[6],K=r[10],$=r[14],G=r[3],ge=r[7],ce=r[11],fe=r[15];return s[0]=o*C+a*M+l*ee+c*G,s[4]=o*w+a*R+l*ne+c*ge,s[8]=o*F+a*D+l*K+c*ce,s[12]=o*y+a*H+l*$+c*fe,s[1]=u*C+f*M+d*ee+m*G,s[5]=u*w+f*R+d*ne+m*ge,s[9]=u*F+f*D+d*K+m*ce,s[13]=u*y+f*H+d*$+m*fe,s[2]=x*C+S*M+p*ee+h*G,s[6]=x*w+S*R+p*ne+h*ge,s[10]=x*F+S*D+p*K+h*ce,s[14]=x*y+S*H+p*$+h*fe,s[3]=A*C+v*M+T*ee+U*G,s[7]=A*w+v*R+T*ne+U*ge,s[11]=A*F+v*D+T*K+U*ce,s[15]=A*y+v*H+T*$+U*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],S=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+S*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],S=e[13],p=e[14],h=e[15],A=f*p*c-S*d*c+S*l*m-a*p*m-f*l*h+a*d*h,v=x*d*c-u*p*c-x*l*m+o*p*m+u*l*h-o*d*h,T=u*S*c-x*f*c+x*a*m-o*S*m-u*a*h+o*f*h,U=x*f*l-u*S*l-x*a*d+o*S*d+u*a*p-o*f*p,C=t*A+i*v+r*T+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=A*w,e[1]=(S*d*s-f*p*s-S*r*m+i*p*m+f*r*h-i*d*h)*w,e[2]=(a*p*s-S*l*s+S*r*c-i*p*c-a*r*h+i*l*h)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*w,e[4]=v*w,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*w,e[6]=(x*l*s-o*p*s-x*r*c+t*p*c+o*r*h-t*l*h)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*w,e[8]=T*w,e[9]=(x*f*s-u*S*s-x*i*m+t*S*m+u*i*h-t*f*h)*w,e[10]=(o*S*s-x*a*s+x*i*c-t*S*c-o*i*h+t*a*h)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*w,e[12]=U*w,e[13]=(u*S*r-x*f*r+x*i*d-t*S*d-u*i*p+t*f*p)*w,e[14]=(x*a*r-o*S*r-x*i*l+t*S*l+o*i*p-t*a*p)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,x=s*f,S=o*u,p=o*f,h=a*f,A=l*c,v=l*u,T=l*f,U=i.x,C=i.y,w=i.z;return r[0]=(1-(S+h))*U,r[1]=(m+T)*U,r[2]=(x-v)*U,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(d+h))*C,r[6]=(p+A)*C,r[7]=0,r[8]=(x+v)*w,r[9]=(p-A)*w,r[10]=(1-(d+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/o,f=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ln){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(a===Ln)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===so)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ln){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,m=(i+r)*u;let x,S;if(a===Ln)x=(o+s)*f,S=-2*f;else if(a===so)x=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new Y,Jt=new ft,Rg=new Y(0,0,0),Pg=new Y(1,1,1),qn=new Y,ms=new Y,Ht=new Y,Vc=new ft,Gc=new jr;class On{constructor(e=0,t=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lg=0;const kc=new Y,ki=new jr,Sn=new ft,gs=new Y,br=new Y,Dg=new Y,Ig=new jr,Wc=new Y(1,0,0),Xc=new Y(0,1,0),qc=new Y(0,0,1),Yc={type:"added"},Ug={type:"removed"},Wi={type:"childadded",child:null},ea={type:"childremoved",child:null};class Ot extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new Y,t=new On,i=new jr,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(br,gs,this.up):Sn.lookAt(gs,br,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Sn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ug),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new Y(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new Y,yn=new Y,ta=new Y,En=new Y,Xi=new Y,qi=new Y,Kc=new Y,na=new Y,ia=new Y,ra=new Y;class pn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),yn.subVectors(i,t),ta.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(yn),l=Qt.dot(ta),c=yn.dot(yn),u=yn.dot(ta),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,x=(o*u-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),yn.subVectors(e,t),Qt.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Xi.subVectors(r,i),qi.subVectors(s,i),na.subVectors(e,i);const l=Xi.dot(na),c=qi.dot(na);if(l<=0&&c<=0)return t.copy(i);ia.subVectors(e,r);const u=Xi.dot(ia),f=qi.dot(ia);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Xi,o);ra.subVectors(e,s);const m=Xi.dot(ra),x=qi.dot(ra);if(x>=0&&m<=x)return t.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(qi,a);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Kc.subVectors(s,r),a=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Kc,a);const h=1/(p+S+d);return o=S*h,a=d*h,t.copy(i).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=xg(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sa(o,s,e+1/3),this.g=sa(o,s,e),this.b=sa(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Ze.fromWorkingColorSpace(yt.copy(this),e),Math.round(Ut(yt.r*255,0,255))*65536+Math.round(Ut(yt.g*255,0,255))*256+Math.round(Ut(yt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=fn){Ze.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(_s);const i=Wo(Yn.h,_s.h,t),r=Wo(Yn.s,_s.s,t),s=Wo(Yn.l,_s.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Qe;Qe.NAMES=od;let Ng=0;class Zr extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=lr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Ra&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ad extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Y,vs=new Je;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Nr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}}class ld extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cd extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Li extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fg=0;const qt=new ft,oa=new Ot,Yi=new Y,Vt=new $r,Tr=new $r,mt=new Y;class zn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?cd:ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Vt.min,Tr.min),Vt.expandByPoint(mt),mt.addVectors(Vt.max,Tr.max),Vt.expandByPoint(mt)):(Vt.expandByPoint(Tr.min),Vt.expandByPoint(Tr.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),mt.add(Yi)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new Y,l[F]=new Y;const c=new Y,u=new Y,f=new Y,d=new Je,m=new Je,x=new Je,S=new Y,p=new Y;function h(F,y,M){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,F),m.fromBufferAttribute(s,y),x.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),x.sub(d);const R=1/(m.x*x.y-x.x*m.y);isFinite(R)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(R),a[F].add(S),a[y].add(S),a[M].add(S),l[F].add(p),l[y].add(p),l[M].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,y=A.length;F<y;++F){const M=A[F],R=M.start,D=M.count;for(let H=R,ee=R+D;H<ee;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new Y,T=new Y,U=new Y,C=new Y;function w(F){U.fromBufferAttribute(r,F),C.copy(U);const y=a[F];v.copy(y),v.sub(U.multiplyScalar(U.dot(y))).normalize(),T.crossVectors(C,y);const R=T.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,R)}for(let F=0,y=A.length;F<y;++F){const M=A[F],R=M.start,D=M.count;for(let H=R,ee=R+D;H<ee;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new jt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jc=new ft,_i=new rd,xs=new Mo,$c=new Y,Ki=new Y,ji=new Y,$i=new Y,aa=new Y,Ms=new Y,Ss=new Je,ys=new Je,Es=new Je,Zc=new Y,Jc=new Y,Qc=new Y,bs=new Y,Ts=new Y;class Dn extends Ot{constructor(e=new zn,t=new ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(aa.fromBufferAttribute(f,e),o?Ms.addScaledVector(aa,u):Ms.addScaledVector(aa.sub(t),u))}t.add(Ms)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(xs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(xs,$c)===null||_i.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(jc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(jc),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const p=d[x],h=o[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,U=v;T<U;T+=3){const C=a.getX(T),w=a.getX(T+1),F=a.getX(T+2);r=As(this,h,e,i,c,u,f,C,w,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=x,h=S;p<h;p+=3){const A=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);r=As(this,o,e,i,c,u,f,A,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const p=d[x],h=o[p.materialIndex],A=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,U=v;T<U;T+=3){const C=T,w=T+1,F=T+2;r=As(this,h,e,i,c,u,f,C,w,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=x,h=S;p<h;p+=3){const A=p,v=p+1,T=p+2;r=As(this,o,e,i,c,u,f,A,v,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Og(n,e,t,i,r,s,o,a){let l;if(e.side===Nt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===si,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:n}}function As(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ki),n.getVertexPosition(l,ji),n.getVertexPosition(c,$i);const u=Og(n,e,t,i,Ki,ji,$i,bs);if(u){r&&(Ss.fromBufferAttribute(r,a),ys.fromBufferAttribute(r,l),Es.fromBufferAttribute(r,c),u.uv=pn.getInterpolation(bs,Ki,ji,$i,Ss,ys,Es,new Je)),s&&(Ss.fromBufferAttribute(s,a),ys.fromBufferAttribute(s,l),Es.fromBufferAttribute(s,c),u.uv1=pn.getInterpolation(bs,Ki,ji,$i,Ss,ys,Es,new Je)),o&&(Zc.fromBufferAttribute(o,a),Jc.fromBufferAttribute(o,l),Qc.fromBufferAttribute(o,c),u.normal=pn.getInterpolation(bs,Ki,ji,$i,Zc,Jc,Qc,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};pn.getNormal(Ki,ji,$i,f.normal),u.face=f}return u}class Jr extends zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(f,2));function x(S,p,h,A,v,T,U,C,w,F,y){const M=T/w,R=U/F,D=T/2,H=U/2,ee=C/2,ne=w+1,K=F+1;let $=0,G=0;const ge=new Y;for(let ce=0;ce<K;ce++){const fe=ce*R-H;for(let Te=0;Te<ne;Te++){const Oe=Te*M-D;ge[S]=Oe*A,ge[p]=fe*v,ge[h]=ee,c.push(ge.x,ge.y,ge.z),ge[S]=0,ge[p]=0,ge[h]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Te/w),f.push(1-ce/F),$+=1}}for(let ce=0;ce<F;ce++)for(let fe=0;fe<w;fe++){const Te=d+fe+ne*ce,Oe=d+fe+ne*(ce+1),te=d+(fe+1)+ne*(ce+1),re=d+(fe+1)+ne*ce;l.push(Te,Oe,re),l.push(Oe,te,re),G+=6}a.addGroup(m,G,y),m+=G,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function Bg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const zg={clone:mr,merge:At};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new Y,eu=new Je,tu=new Je;class tn extends fd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class Gg extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const s=new tn(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const o=new tn(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const a=new tn(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const l=new tn(Zi,Ji,e,t);l.layers=this.layers,this.add(l);const c=new tn(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class dd extends Ft{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kg extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:ei});s.uniforms.tEquirect.value=t;const o=new Dn(r,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=nn),new Gg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const la=new Y,Wg=new Y,Xg=new ke;class Ei{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=la.subVectors(i,t).cross(Wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(la),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xg.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Mo,ws=new Y;class hd{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],S=r[10],p=r[11],h=r[12],A=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-h).normalize(),i[1].setComponents(l+s,d+c,p+m,T+h).normalize(),i[2].setComponents(l+o,d+u,p+x,T+A).normalize(),i[3].setComponents(l-o,d-u,p-x,T-A).normalize(),i[4].setComponents(l-a,d-f,p-S,T-v).normalize(),t===Ln)i[5].setComponents(l+a,d+f,p+S,T+v).normalize();else if(t===so)i[5].setComponents(a,f,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ws.x=r.normal.x>0?e.max.x:e.min.x,ws.y=r.normal.y>0?e.max.y:e.min.y,ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let m=0,x=d.length;m<x;m++){const S=d[m];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class So extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,m=[],x=[],S=[],p=[];for(let h=0;h<u;h++){const A=h*d-o;for(let v=0;v<c;v++){const T=v*f-s;x.push(T,-A,0),S.push(0,0,1),p.push(v/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const v=A+c*h,T=A+c*(h+1),U=A+1+c*(h+1),C=A+1+c*h;m.push(v,T,C),m.push(T,U,C)}this.setIndex(m),this.setAttribute("position",new Li(x,3)),this.setAttribute("normal",new Li(S,3)),this.setAttribute("uv",new Li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_=`#ifdef USE_BATCHING
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
#endif`,n_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o_=`#ifdef USE_IRIDESCENCE
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
#endif`,a_=`#ifdef USE_BUMPMAP
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g_=`#define PI 3.141592653589793
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
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`
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
}`,T_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U_=`#ifdef USE_GRADIENTMAP
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
}`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B_=`uniform bool receiveShadow;
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
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,H_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W_=`PhysicalMaterial material;
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
#endif`,X_=`struct PhysicalMaterial {
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
}`,q_=`
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
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nv=`#if defined( USE_POINTS_UV )
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
#endif`,iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`#ifdef USE_MORPHTARGETS
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
#endif`,cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mv=`#ifdef USE_NORMALMAP
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
#endif`,gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lv=`float getShadowMask() {
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
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iv=`#ifdef USE_SKINNING
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
#endif`,Uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`#include <common>
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
}`,Qv=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,u0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,v0=`#define TOON
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
}`,x0=`#define TOON
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
}`,M0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,T0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Yg,alphahash_pars_fragment:Kg,alphamap_fragment:jg,alphamap_pars_fragment:$g,alphatest_fragment:Zg,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:e_,batching_pars_vertex:t_,batching_vertex:n_,begin_vertex:i_,beginnormal_vertex:r_,bsdfs:s_,iridescence_fragment:o_,bumpmap_pars_fragment:a_,clipping_planes_fragment:l_,clipping_planes_pars_fragment:c_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:f_,color_fragment:d_,color_pars_fragment:h_,color_pars_vertex:p_,color_vertex:m_,common:g_,cube_uv_reflection_fragment:__,defaultnormal_vertex:v_,displacementmap_pars_vertex:x_,displacementmap_vertex:M_,emissivemap_fragment:S_,emissivemap_pars_fragment:y_,colorspace_fragment:E_,colorspace_pars_fragment:b_,envmap_fragment:T_,envmap_common_pars_fragment:A_,envmap_pars_fragment:w_,envmap_pars_vertex:C_,envmap_physical_pars_fragment:z_,envmap_vertex:R_,fog_vertex:P_,fog_pars_vertex:L_,fog_fragment:D_,fog_pars_fragment:I_,gradientmap_pars_fragment:U_,lightmap_pars_fragment:N_,lights_lambert_fragment:F_,lights_lambert_pars_fragment:O_,lights_pars_begin:B_,lights_toon_fragment:H_,lights_toon_pars_fragment:V_,lights_phong_fragment:G_,lights_phong_pars_fragment:k_,lights_physical_fragment:W_,lights_physical_pars_fragment:X_,lights_fragment_begin:q_,lights_fragment_maps:Y_,lights_fragment_end:K_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:J_,map_fragment:Q_,map_pars_fragment:ev,map_particle_fragment:tv,map_particle_pars_fragment:nv,metalnessmap_fragment:iv,metalnessmap_pars_fragment:rv,morphinstance_vertex:sv,morphcolor_vertex:ov,morphnormal_vertex:av,morphtarget_pars_vertex:lv,morphtarget_vertex:cv,normal_fragment_begin:uv,normal_fragment_maps:fv,normal_pars_fragment:dv,normal_pars_vertex:hv,normal_vertex:pv,normalmap_pars_fragment:mv,clearcoat_normal_fragment_begin:gv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:vv,iridescence_pars_fragment:xv,opaque_fragment:Mv,packing:Sv,premultiplied_alpha_fragment:yv,project_vertex:Ev,dithering_fragment:bv,dithering_pars_fragment:Tv,roughnessmap_fragment:Av,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Cv,shadowmap_pars_vertex:Rv,shadowmap_vertex:Pv,shadowmask_pars_fragment:Lv,skinbase_vertex:Dv,skinning_pars_vertex:Iv,skinning_vertex:Uv,skinnormal_vertex:Nv,specularmap_fragment:Fv,specularmap_pars_fragment:Ov,tonemapping_fragment:Bv,tonemapping_pars_fragment:zv,transmission_fragment:Hv,transmission_pars_fragment:Vv,uv_pars_fragment:Gv,uv_pars_vertex:kv,uv_vertex:Wv,worldpos_vertex:Xv,background_vert:qv,background_frag:Yv,backgroundCube_vert:Kv,backgroundCube_frag:jv,cube_vert:$v,cube_frag:Zv,depth_vert:Jv,depth_frag:Qv,distanceRGBA_vert:e0,distanceRGBA_frag:t0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:r0,linedashed_frag:s0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:u0,meshmatcap_frag:f0,meshnormal_vert:d0,meshnormal_frag:h0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:v0,meshtoon_frag:x0,points_vert:M0,points_frag:S0,shadow_vert:y0,shadow_frag:E0,sprite_vert:b0,sprite_frag:T0},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},hn={basic:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:At([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:At([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:At([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:At([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:At([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:At([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:At([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:At([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:At([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:At([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hn.physical={uniforms:At([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Cs={r:0,b:0,g:0},xi=new On,A0=new ft;function w0(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(A){let v=A.isScene===!0?A.background:null;return v&&v.isTexture&&(v=(A.backgroundBlurriness>0?t:e).get(v)),v}function S(A){let v=!1;const T=x(A);T===null?h(a,l):T&&T.isColor&&(h(T,1),v=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,v){const T=x(v);T&&(T.isCubeTexture||T.mapping===vo)?(u===void 0&&(u=new Dn(new Jr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:mr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(xi)),u.material.toneMapped=Ze.getTransfer(T.colorSpace)!==rt,(f!==T||d!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Dn(new So(2,2),new oi({name:"BackgroundMaterial",uniforms:mr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,v){A.getRGB(Cs,ud(n)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(A,v=1){a.set(A),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:S,addToRenderList:p}}function C0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,R,D,H,ee){let ne=!1;const K=f(H,D,R);s!==K&&(s=K,c(s.object)),ne=m(M,H,D,ee),ne&&x(M,H,D,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,T(M,R,D,H),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,R,D){const H=D.wireframe===!0;let ee=i[M.id];ee===void 0&&(ee={},i[M.id]=ee);let ne=ee[R.id];ne===void 0&&(ne={},ee[R.id]=ne);let K=ne[H];return K===void 0&&(K=d(l()),ne[H]=K),K}function d(M){const R=[],D=[],H=[];for(let ee=0;ee<t;ee++)R[ee]=0,D[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,R,D,H){const ee=s.attributes,ne=R.attributes;let K=0;const $=D.getAttributes();for(const G in $)if($[G].location>=0){const ce=ee[G];let fe=ne[G];if(fe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),ce===void 0||ce.attribute!==fe||fe&&ce.data!==fe.data)return!0;K++}return s.attributesNum!==K||s.index!==H}function x(M,R,D,H){const ee={},ne=R.attributes;let K=0;const $=D.getAttributes();for(const G in $)if($[G].location>=0){let ce=ne[G];ce===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const fe={};fe.attribute=ce,ce&&ce.data&&(fe.data=ce.data),ee[G]=fe,K++}s.attributes=ee,s.attributesNum=K,s.index=H}function S(){const M=s.newAttributes;for(let R=0,D=M.length;R<D;R++)M[R]=0}function p(M){h(M,0)}function h(M,R){const D=s.newAttributes,H=s.enabledAttributes,ee=s.attributeDivisors;D[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),ee[M]!==R&&(n.vertexAttribDivisor(M,R),ee[M]=R)}function A(){const M=s.newAttributes,R=s.enabledAttributes;for(let D=0,H=R.length;D<H;D++)R[D]!==M[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function v(M,R,D,H,ee,ne,K){K===!0?n.vertexAttribIPointer(M,R,D,ee,ne):n.vertexAttribPointer(M,R,D,H,ee,ne)}function T(M,R,D,H){S();const ee=H.attributes,ne=D.getAttributes(),K=R.defaultAttributeValues;for(const $ in ne){const G=ne[$];if(G.location>=0){let ge=ee[$];if(ge===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const ce=ge.normalized,fe=ge.itemSize,Te=e.get(ge);if(Te===void 0)continue;const Oe=Te.buffer,te=Te.type,re=Te.bytesPerElement,Me=te===n.INT||te===n.UNSIGNED_INT||ge.gpuType===Pl;if(ge.isInterleavedBufferAttribute){const xe=ge.data,De=xe.stride,Re=ge.offset;if(xe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<G.locationSize;Pe++)h(G.location+Pe,xe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)p(G.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Pe=0;Pe<G.locationSize;Pe++)v(G.location+Pe,fe/G.locationSize,te,ce,De*re,(Re+fe/G.locationSize*Pe)*re,Me)}else{if(ge.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)h(G.location+xe,ge.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let xe=0;xe<G.locationSize;xe++)p(G.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let xe=0;xe<G.locationSize;xe++)v(G.location+xe,fe/G.locationSize,te,ce,fe*re,fe/G.locationSize*xe*re,Me)}}else if(K!==void 0){const ce=K[$];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(G.location,ce);break;case 3:n.vertexAttrib3fv(G.location,ce);break;case 4:n.vertexAttrib4fv(G.location,ce);break;default:n.vertexAttrib1fv(G.location,ce)}}}}A()}function U(){F();for(const M in i){const R=i[M];for(const D in R){const H=R[D];for(const ee in H)u(H[ee].object),delete H[ee];delete R[D]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const D in R){const H=R[D];for(const ee in H)u(H[ee].object),delete H[ee];delete R[D]}delete i[M.id]}function w(M){for(const R in i){const D=i[R];if(D[M.id]===void 0)continue;const H=D[M.id];for(const ee in H)u(H[ee].object),delete H[ee];delete D[M.id]}}function F(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:p,disableUnusedAttributes:A}}function R0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let S=0;S<f;S++)x+=u[S];for(let S=0;S<d.length;S++)t.update(x,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==rn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pn&&!w)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:S,maxAttributes:p,maxVertexUniforms:h,maxVaryings:A,maxFragmentUniforms:v,vertexTextures:T,maxSamples:U}}function L0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ei,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,v=A*4;let T=h.clippingState||null;l.value=T,T=u(x,d,v,m);for(let U=0;U!==v;++U)T[U]=t[U];h.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=l.value,x!==!0||p===null){const h=m+S*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,T=m;v!==S;++v,T+=4)o.copy(f[v]).applyMatrix4(A,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function D0(n){let e=new WeakMap;function t(o,a){return a===Pa?o.mapping=fr:a===La&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===La)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class md extends fd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=4,nu=[.125,.215,.35,.446,.526,.582],wi=20,ca=new md,iu=new Qe;let ua=null,fa=0,da=0,ha=!1;const bi=(1+Math.sqrt(5))/2,Qi=1/bi,ru=[new Y(-bi,Qi,0),new Y(bi,Qi,0),new Y(-Qi,0,bi),new Y(Qi,0,bi),new Y(0,bi,-Qi),new Y(0,bi,Qi),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua,fa,da),this._renderer.xr.enabled=ha,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Yr,format:rn,colorSpace:ci,depthBuffer:!1},r=ou(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(s)),this._blurMaterial=U0(s,e,t)}return r}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,i,r){const a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(iu),u.toneMapping=ti,u.autoClear=!1;const m=new ad({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),x=new Dn(new Jr,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(iu),S=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):A===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Rs(r,A*v,h>2?v:0,v,v),u.setRenderTarget(r),S&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ca)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ru[(r-s-1)%ru.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wi-1),S=s/x,p=isFinite(s)?1+Math.floor(u*S):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const h=[];let A=0;for(let w=0;w<wi;++w){const F=w/S,y=Math.exp(-F*F/2);h.push(y),w===0?A+=y:w<p&&(A+=2*y)}for(let w=0;w<h.length;w++)h[w]=h[w]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const T=this._sizeLods[r],U=3*T*(r>v-nr?r-v+nr:0),C=4*(this._cubeSize-T);Rs(t,U,C,3*T,2*T),l.setRenderTarget(t),l.render(f,ca)}}function I0(n){const e=[],t=[],i=[];let r=n;const s=n-nr+1+nu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-nr?l=nu[o-n+nr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,S=3,p=2,h=1,A=new Float32Array(S*x*m),v=new Float32Array(p*x*m),T=new Float32Array(h*x*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,F=C>2?0:-1,y=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];A.set(y,S*x*C),v.set(d,p*x*C);const M=[C,C,C,C,C,C];T.set(M,h*x*C)}const U=new zn;U.setAttribute("position",new jt(A,S)),U.setAttribute("uv",new jt(v,p)),U.setAttribute("faceIndex",new jt(T,h)),e.push(U),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ou(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function U0(n,e,t){const i=new Float32Array(wi),r=new Y(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function au(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lu(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

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
	`}function N0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===La,u=l===fr||l===dr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new su(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new su(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function F0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Nr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function O0(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const S=d.morphAttributes[x];for(let p=0,h=S.length;p<h;p++)e.remove(S[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const S=m[x];for(let p=0,h=S.length;p<h;p++)e.update(S[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let S=0;if(m!==null){const A=m.array;S=m.version;for(let v=0,T=A.length;v<T;v+=3){const U=A[v+0],C=A[v+1],w=A[v+2];d.push(U,C,C,w,w,U)}}else if(x!==void 0){const A=x.array;S=x.version;for(let v=0,T=A.length/3-1;v<T;v+=3){const U=v+0,C=v+1,w=v+2;d.push(U,C,C,w,w,U)}}else return;const p=new(td(d)?cd:ld)(d,1);p.version=S;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function B0(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function c(d,m,x){x!==0&&(n.drawElementsInstanced(i,m,s,d*o,x),t.update(m,i,x))}function u(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,x);let p=0;for(let h=0;h<x;h++)p+=m[h];t.update(p,i,1)}function f(d,m,x,S){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],S[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,x);let h=0;for(let A=0;A<x;A++)h+=m[A];for(let A=0;A<S.length;A++)t.update(h,i,S[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function z0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function H0(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let T=0;x===!0&&(T=1),S===!0&&(T=2),p===!0&&(T=3);let U=a.attributes.position.count*T,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*C*4*f),F=new id(w,U,C,f);F.type=Pn,F.needsUpdate=!0;const y=T*4;for(let R=0;R<f;R++){const D=h[R],H=A[R],ee=v[R],ne=U*C*4*R;for(let K=0;K<D.count;K++){const $=K*y;x===!0&&(r.fromBufferAttribute(D,K),w[ne+$+0]=r.x,w[ne+$+1]=r.y,w[ne+$+2]=r.z,w[ne+$+3]=0),S===!0&&(r.fromBufferAttribute(H,K),w[ne+$+4]=r.x,w[ne+$+5]=r.y,w[ne+$+6]=r.z,w[ne+$+7]=0),p===!0&&(r.fromBufferAttribute(ee,K),w[ne+$+8]=r.x,w[ne+$+9]=r.y,w[ne+$+10]=r.z,w[ne+$+11]=ee.itemSize===4?r.w:1)}}d={count:f,texture:F,size:new Je(U,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function V0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class gd extends Ft{constructor(e,t,i,r,s,o,a,l,c,u=cr){if(u!==cr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=Di),i===void 0&&u===pr&&(i=hr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _d=new Ft,cu=new gd(1,1),vd=new id,xd=new wg,Md=new dd,uu=[],fu=[],du=new Float32Array(16),hu=new Float32Array(9),pu=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=uu[r];if(s===void 0&&(s=new Float32Array(r),uu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yo(n,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function G0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function W0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function X0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;pu.set(i),n.uniformMatrix2fv(this.addr,!1,pu),pt(t,i)}}function Y0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;hu.set(i),n.uniformMatrix3fv(this.addr,!1,hu),pt(t,i)}}function K0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;du.set(i),n.uniformMatrix4fv(this.addr,!1,du),pt(t,i)}}function j0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Q0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cu.compareFunction=ed,s=cu):s=_d,t.setTexture2D(e||s,r)}function rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xd,r)}function sx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Md,r)}function ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vd,r)}function ax(n){switch(n){case 5126:return G0;case 35664:return k0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return K0;case 5124:case 35670:return j0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(n,e){n.uniform1fv(this.addr,e)}function cx(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function ux(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function fx(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function dx(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hx(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function px(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mx(n,e){n.uniform1iv(this.addr,e)}function gx(n,e){n.uniform2iv(this.addr,e)}function _x(n,e){n.uniform3iv(this.addr,e)}function vx(n,e){n.uniform4iv(this.addr,e)}function xx(n,e){n.uniform1uiv(this.addr,e)}function Mx(n,e){n.uniform2uiv(this.addr,e)}function Sx(n,e){n.uniform3uiv(this.addr,e)}function yx(n,e){n.uniform4uiv(this.addr,e)}function Ex(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_d,s[o])}function bx(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xd,s[o])}function Tx(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Md,s[o])}function Ax(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vd,s[o])}function wx(n){switch(n){case 5126:return lx;case 35664:return cx;case 35665:return ux;case 35666:return fx;case 35674:return dx;case 35675:return hx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return _x;case 35669:case 35673:return vx;case 5125:return xx;case 36294:return Mx;case 36295:return Sx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}class Cx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}}class Rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}}class Px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function mu(n,e){n.seq.push(e),n.map[e.id]=e}function Lx(n,e,t){const i=n.name,r=i.length;for(pa.lastIndex=0;;){const s=pa.exec(i),o=pa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mu(t,c===void 0?new Cx(a,n,e):new Rx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Px(a),mu(t,f)),t=f}}}class Xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Lx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function gu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Dx=37297;let Ix=0;function Ux(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Nx(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===ro&&t===io?i="LinearDisplayP3ToLinearSRGB":e===io&&t===ro&&(i="LinearSRGBToLinearDisplayP3"),n){case ci:case xo:return[i,"LinearTransferOETF"];case fn:case Fl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function _u(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ux(n.getShaderSource(e),o)}else return r}function Fx(n,e){const t=Nx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ox(n,e){let t;switch(e){case eg:t="Linear";break;case tg:t="Reinhard";break;case ng:t="OptimizedCineon";break;case ig:t="ACESFilmic";break;case sg:t="AgX";break;case og:t="Neutral";break;case rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new Y;function Bx(){Ze.getLuminanceCoefficients(Ps);const n=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Hx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function vu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(Gx,Wx)}const kx=new Map;function Wx(n,e){let t=Ge[e];if(t===void 0){const i=kx.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(n){return n.replace(Xx,qx)}function qx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Su(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Yx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===dr&&(e="ENVMAP_MODE_REFRACTION"),e}function $x(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gf:e="ENVMAP_BLENDING_MULTIPLY";break;case Jm:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function Zx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Jx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Yx(t),c=Kx(t),u=jx(t),f=$x(t),d=Zx(t),m=zx(t),x=Hx(s),S=r.createProgram();let p,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),h.length>0&&(h+=`
`)):(p=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),h=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ti?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Fx("linearToOutputTexel",t.outputColorSpace),Bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=al(o),o=vu(o,t),o=xu(o,t),a=al(a),a=vu(a,t),a=xu(a,t),o=Mu(o),a=Mu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=A+p+o,T=A+h+a,U=gu(r,r.VERTEX_SHADER,v),C=gu(r,r.FRAGMENT_SHADER,T);r.attachShader(S,U),r.attachShader(S,C),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(R){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(S).trim(),H=r.getShaderInfoLog(U).trim(),ee=r.getShaderInfoLog(C).trim();let ne=!0,K=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,U,C);else{const $=_u(r,U,"vertex"),G=_u(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+$+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(H===""||ee==="")&&(K=!1);K&&(R.diagnostics={runnable:ne,programLog:D,vertexShader:{log:H,prefix:p},fragmentShader:{log:ee,prefix:h}})}r.deleteShader(U),r.deleteShader(C),F=new Xs(r,S),y=Vx(r,S)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,Dx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=C,this}let Qx=0;class eM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tM(e),t.set(e,i)),i}}class tM{constructor(e){this.id=Qx++,this.code=e,this.usedTimes=0}}function nM(n,e,t,i,r,s,o){const a=new sd,l=new eM,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,R,D,H){const ee=D.fog,ne=H.geometry,K=y.isMeshStandardMaterial?D.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),G=$&&$.mapping===vo?$.image.height:null,ge=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ce=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,fe=ce!==void 0?ce.length:0;let Te=0;ne.morphAttributes.position!==void 0&&(Te=1),ne.morphAttributes.normal!==void 0&&(Te=2),ne.morphAttributes.color!==void 0&&(Te=3);let Oe,te,re,Me;if(ge){const qe=hn[ge];Oe=qe.vertexShader,te=qe.fragmentShader}else Oe=y.vertexShader,te=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),Me=l.getFragmentShaderID(y);const xe=n.getRenderTarget(),De=H.isInstancedMesh===!0,Re=H.isBatchedMesh===!0,Pe=!!y.map,et=!!y.matcap,g=!!$,P=!!y.aoMap,z=!!y.lightMap,j=!!y.bumpMap,V=!!y.normalMap,Q=!!y.displacementMap,J=!!y.emissiveMap,Z=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,L=y.clearcoat>0,O=y.dispersion>0,X=y.iridescence>0,k=y.sheen>0,ue=y.transmission>0,oe=_&&!!y.anisotropyMap,le=L&&!!y.clearcoatMap,we=L&&!!y.clearcoatNormalMap,ae=L&&!!y.clearcoatRoughnessMap,_e=X&&!!y.iridescenceMap,He=X&&!!y.iridescenceThicknessMap,Le=k&&!!y.sheenColorMap,ye=k&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,Ue=!!y.specularColorMap,nt=!!y.specularIntensityMap,I=ue&&!!y.transmissionMap,de=ue&&!!y.thicknessMap,ie=!!y.gradientMap,se=!!y.alphaMap,me=y.alphaTest>0,Ne=!!y.alphaHash,We=!!y.extensions;let lt=ti;y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(lt=n.toneMapping);const vt={shaderID:ge,shaderType:y.type,shaderName:y.name,vertexShader:Oe,fragmentShader:te,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Re,batchingColor:Re&&H._colorsTexture!==null,instancing:De,instancingColor:De&&H.instanceColor!==null,instancingMorph:De&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ci,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:et,envMap:g,envMapMode:g&&$.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:z,bumpMap:j,normalMap:V,displacementMap:d&&Q,emissiveMap:J,normalMapObjectSpace:V&&y.normalMapType===fg,normalMapTangentSpace:V&&y.normalMapType===ug,metalnessMap:Z,roughnessMap:E,anisotropy:_,anisotropyMap:oe,clearcoat:L,clearcoatMap:le,clearcoatNormalMap:we,clearcoatRoughnessMap:ae,dispersion:O,iridescence:X,iridescenceMap:_e,iridescenceThicknessMap:He,sheen:k,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:Ae,specularColorMap:Ue,specularIntensityMap:nt,transmission:ue,transmissionMap:I,thicknessMap:de,gradientMap:ie,opaque:y.transparent===!1&&y.blending===lr&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:Ne,combine:y.combine,mapUv:Pe&&S(y.map.channel),aoMapUv:P&&S(y.aoMap.channel),lightMapUv:z&&S(y.lightMap.channel),bumpMapUv:j&&S(y.bumpMap.channel),normalMapUv:V&&S(y.normalMap.channel),displacementMapUv:Q&&S(y.displacementMap.channel),emissiveMapUv:J&&S(y.emissiveMap.channel),metalnessMapUv:Z&&S(y.metalnessMap.channel),roughnessMapUv:E&&S(y.roughnessMap.channel),anisotropyMapUv:oe&&S(y.anisotropyMap.channel),clearcoatMapUv:le&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:we&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&S(y.sheenRoughnessMap.channel),specularMapUv:Ae&&S(y.specularMap.channel),specularColorMapUv:Ue&&S(y.specularColorMap.channel),specularIntensityMapUv:nt&&S(y.specularIntensityMap.channel),transmissionMapUv:I&&S(y.transmissionMap.channel),thicknessMapUv:de&&S(y.thicknessMap.channel),alphaMapUv:se&&S(y.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(V||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(Pe||se),fog:!!ee,useFog:y.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(M,y),v(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),y.push(a.mask)}function T(y){const M=x[y.type];let R;if(M){const D=hn[M];R=zg.clone(D.uniforms)}else R=y.uniforms;return R}function U(y,M){let R;for(let D=0,H=u.length;D<H;D++){const ee=u[D];if(ee.cacheKey===M){R=ee,++R.usedTimes;break}}return R===void 0&&(R=new Jx(n,M,y,s),u.push(R)),R}function C(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:U,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:F}}function iM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function rM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Eu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,x,S,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:S,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=S,h.group=p),e++,h}function a(f,d,m,x,S,p){const h=o(f,d,m,x,S,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,S,p){const h=o(f,d,m,x,S,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||rM),i.length>1&&i.sort(d||yu),r.length>1&&r.sort(d||yu)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function sM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Eu,n.set(i,[o])):r>=s.length?(o=new Eu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function oM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Qe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function aM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lM=0;function cM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uM(n){const e=new oM,t=aM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new ft,o=new ft;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,x=0,S=0,p=0,h=0,A=0,v=0,T=0,U=0,C=0,w=0;c.sort(cM);for(let y=0,M=c.length;y<M;y++){const R=c[y],D=R.color,H=R.intensity,ee=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*H,f+=D.g*H,d+=D.b*H;else if(R.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(R.sh.coefficients[K],H);w++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,G=t.get(R);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=K,m++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(D).multiplyScalar(H),K.distance=ee,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,i.spot[S]=K;const $=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,$.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[S]=$.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[S]=G,i.spotShadowMap[S]=ne,T++}S++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(D).multiplyScalar(H),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=K,p++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const $=R.shadow,G=t.get(R);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=ne,i.pointShadowMatrix[x]=R.shadow.matrix,v++}i.point[x]=K,x++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(H),K.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[h]=K,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==m||F.pointLength!==x||F.spotLength!==S||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==A||F.numPointShadows!==v||F.numSpotShadows!==T||F.numSpotMaps!==U||F.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=T+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,F.directionalLength=m,F.pointLength=x,F.spotLength=S,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=A,F.numPointShadows=v,F.numSpotShadows=T,F.numSpotMaps=U,F.numLightProbes=w,i.version=lM++)}function l(c,u){let f=0,d=0,m=0,x=0,S=0;const p=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const v=c[h];if(v.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(v.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function bu(n){const e=new uM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new bu(n),e.set(r,[a])):s>=o.length?(a=new bu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class dM extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hM extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
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
}`;function gM(n,e,t){let i=new hd;const r=new Je,s=new Je,o=new gt,a=new dM({depthPacking:cg}),l=new hM,c={},u=t.maxTextureSize,f={[si]:Nt,[Nt]:si,[Rn]:Rn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new zn;x.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Dn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf;let h=this.type;this.render=function(C,w,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ei),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=h!==bn&&this.type===bn,ee=h===bn&&this.type!==bn;for(let ne=0,K=C.length;ne<K;ne++){const $=C[ne],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ge=G.getFrameExtents();if(r.multiply(ge),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,G.mapSize.y=s.y)),G.map===null||H===!0||ee===!0){const fe=this.type!==bn?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new Ii(r.x,r.y,fe),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ce=G.getViewportCount();for(let fe=0;fe<ce;fe++){const Te=G.getViewport(fe);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),D.viewport(o),G.updateMatrices($,fe),i=G.getFrustum(),T(w,F,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===bn&&A(G,F),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(y,M,R)};function A(C,w){const F=e.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ii(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,F,d,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,F,m,S,null)}function v(C,w,F,y){let M=null;const R=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=M.uuid,H=w.uuid;let ee=c[D];ee===void 0&&(ee={},c[D]=ee);let ne=ee[H];ne===void 0&&(ne=M.clone(),ee[H]=ne,w.addEventListener("dispose",U)),M=ne}if(M.visible=w.visible,M.wireframe=w.wireframe,y===bn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=F}return M}function T(C,w,F,y,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===bn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const H=e.update(C),ee=C.material;if(Array.isArray(ee)){const ne=H.groups;for(let K=0,$=ne.length;K<$;K++){const G=ne[K],ge=ee[G.materialIndex];if(ge&&ge.visible){const ce=v(C,ge,y,M);C.onBeforeShadow(n,C,w,F,H,ce,G),n.renderBufferDirect(F,null,H,ce,C,G),C.onAfterShadow(n,C,w,F,H,ce,G)}}}else if(ee.visible){const ne=v(C,ee,y,M);C.onBeforeShadow(n,C,w,F,H,ne,null),n.renderBufferDirect(F,null,H,ne,C,null),C.onAfterShadow(n,C,w,F,H,ne,null)}}const D=C.children;for(let H=0,ee=D.length;H<ee;H++)T(D[H],w,F,y,M)}function U(C){C.target.removeEventListener("dispose",U);for(const F in c){const y=c[F],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function _M(n){function e(){let I=!1;const de=new gt;let ie=null;const se=new gt(0,0,0,0);return{setMask:function(me){ie!==me&&!I&&(n.colorMask(me,me,me,me),ie=me)},setLocked:function(me){I=me},setClear:function(me,Ne,We,lt,vt){vt===!0&&(me*=lt,Ne*=lt,We*=lt),de.set(me,Ne,We,lt),se.equals(de)===!1&&(n.clearColor(me,Ne,We,lt),se.copy(de))},reset:function(){I=!1,ie=null,se.set(-1,0,0,0)}}}function t(){let I=!1,de=null,ie=null,se=null;return{setTest:function(me){me?Me(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(me){de!==me&&!I&&(n.depthMask(me),de=me)},setFunc:function(me){if(ie!==me){switch(me){case Xm:n.depthFunc(n.NEVER);break;case qm:n.depthFunc(n.ALWAYS);break;case Ym:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case Km:n.depthFunc(n.EQUAL);break;case jm:n.depthFunc(n.GEQUAL);break;case $m:n.depthFunc(n.GREATER);break;case Zm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=me}},setLocked:function(me){I=me},setClear:function(me){se!==me&&(n.clearDepth(me),se=me)},reset:function(){I=!1,de=null,ie=null,se=null}}}function i(){let I=!1,de=null,ie=null,se=null,me=null,Ne=null,We=null,lt=null,vt=null;return{setTest:function(qe){I||(qe?Me(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(qe){de!==qe&&!I&&(n.stencilMask(qe),de=qe)},setFunc:function(qe,gn,ln){(ie!==qe||se!==gn||me!==ln)&&(n.stencilFunc(qe,gn,ln),ie=qe,se=gn,me=ln)},setOp:function(qe,gn,ln){(Ne!==qe||We!==gn||lt!==ln)&&(n.stencilOp(qe,gn,ln),Ne=qe,We=gn,lt=ln)},setLocked:function(qe){I=qe},setClear:function(qe){vt!==qe&&(n.clearStencil(qe),vt=qe)},reset:function(){I=!1,de=null,ie=null,se=null,me=null,Ne=null,We=null,lt=null,vt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],m=null,x=!1,S=null,p=null,h=null,A=null,v=null,T=null,U=null,C=new Qe(0,0,0),w=0,F=!1,y=null,M=null,R=null,D=null,H=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),ne=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ne=K>=2);let G=null,ge={};const ce=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Te=new gt().fromArray(ce),Oe=new gt().fromArray(fe);function te(I,de,ie,se){const me=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(I,Ne),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<ie;We++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(de+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ne}const re={};re[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),s.setFunc(to),j(!1),V(Pc),Me(n.CULL_FACE),P(ei);function Me(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function xe(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function De(I,de){return u[I]!==de?(n.bindFramebuffer(I,de),u[I]=de,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(I,de){let ie=d,se=!1;if(I){ie=f.get(de),ie===void 0&&(ie=[],f.set(de,ie));const me=I.textures;if(ie.length!==me.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,We=me.length;Ne<We;Ne++)ie[Ne]=n.COLOR_ATTACHMENT0+Ne;ie.length=me.length,se=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,se=!0);se&&n.drawBuffers(ie)}function Pe(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const et={[Ai]:n.FUNC_ADD,[Cm]:n.FUNC_SUBTRACT,[Rm]:n.FUNC_REVERSE_SUBTRACT};et[Pm]=n.MIN,et[Lm]=n.MAX;const g={[Dm]:n.ZERO,[Im]:n.ONE,[Um]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[Hm]:n.SRC_ALPHA_SATURATE,[Bm]:n.DST_COLOR,[Fm]:n.DST_ALPHA,[Nm]:n.ONE_MINUS_SRC_COLOR,[Ra]:n.ONE_MINUS_SRC_ALPHA,[zm]:n.ONE_MINUS_DST_COLOR,[Om]:n.ONE_MINUS_DST_ALPHA,[Vm]:n.CONSTANT_COLOR,[Gm]:n.ONE_MINUS_CONSTANT_COLOR,[km]:n.CONSTANT_ALPHA,[Wm]:n.ONE_MINUS_CONSTANT_ALPHA};function P(I,de,ie,se,me,Ne,We,lt,vt,qe){if(I===ei){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(Me(n.BLEND),x=!0),I!==wm){if(I!==S||qe!==F){if((p!==Ai||v!==Ai)&&(n.blendEquation(n.FUNC_ADD),p=Ai,v=Ai),qe)switch(I){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,A=null,T=null,U=null,C.set(0,0,0),w=0,S=I,F=qe}return}me=me||de,Ne=Ne||ie,We=We||se,(de!==p||me!==v)&&(n.blendEquationSeparate(et[de],et[me]),p=de,v=me),(ie!==h||se!==A||Ne!==T||We!==U)&&(n.blendFuncSeparate(g[ie],g[se],g[Ne],g[We]),h=ie,A=se,T=Ne,U=We),(lt.equals(C)===!1||vt!==w)&&(n.blendColor(lt.r,lt.g,lt.b,vt),C.copy(lt),w=vt),S=I,F=!1}function z(I,de){I.side===Rn?xe(n.CULL_FACE):Me(n.CULL_FACE);let ie=I.side===Nt;de&&(ie=!ie),j(ie),I.blending===lr&&I.transparent===!1?P(ei):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const se=I.stencilWrite;o.setTest(se),se&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),J(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function V(I){I!==bm?(Me(n.CULL_FACE),I!==M&&(I===Pc?n.cullFace(n.BACK):I===Tm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),M=I}function Q(I){I!==R&&(ne&&n.lineWidth(I),R=I)}function J(I,de,ie){I?(Me(n.POLYGON_OFFSET_FILL),(D!==de||H!==ie)&&(n.polygonOffset(de,ie),D=de,H=ie)):xe(n.POLYGON_OFFSET_FILL)}function Z(I){I?Me(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function E(I){I===void 0&&(I=n.TEXTURE0+ee-1),G!==I&&(n.activeTexture(I),G=I)}function _(I,de,ie){ie===void 0&&(G===null?ie=n.TEXTURE0+ee-1:ie=G);let se=ge[ie];se===void 0&&(se={type:void 0,texture:void 0},ge[ie]=se),(se.type!==I||se.texture!==de)&&(G!==ie&&(n.activeTexture(ie),G=ie),n.bindTexture(I,de||re[I]),se.type=I,se.texture=de)}function L(){const I=ge[G];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Te.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function ye(I){Oe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function Ae(I,de){let ie=l.get(de);ie===void 0&&(ie=new WeakMap,l.set(de,ie));let se=ie.get(I);se===void 0&&(se=n.getUniformBlockIndex(de,I.name),ie.set(I,se))}function Ue(I,de){const se=l.get(de).get(I);a.get(de)!==se&&(n.uniformBlockBinding(de,se,I.__bindingPointIndex),a.set(de,se))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ge={},u={},f=new WeakMap,d=[],m=null,x=!1,S=null,p=null,h=null,A=null,v=null,T=null,U=null,C=new Qe(0,0,0),w=0,F=!1,y=null,M=null,R=null,D=null,H=null,Te.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Me,disable:xe,bindFramebuffer:De,drawBuffers:Re,useProgram:Pe,setBlending:P,setMaterial:z,setFlipSided:j,setCullFace:V,setLineWidth:Q,setPolygonOffset:J,setScissorTest:Z,activeTexture:E,bindTexture:_,unbindTexture:L,compressedTexImage2D:O,compressedTexImage3D:X,texImage2D:_e,texImage3D:He,updateUBOMapping:Ae,uniformBlockBinding:Ue,texStorage2D:we,texStorage3D:ae,texSubImage2D:k,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Le,viewport:ye,reset:nt}}function Tu(n,e,t,i){const r=vM(i);switch(t){case Yf:return n*e;case jf:return n*e;case $f:return n*e*2;case Zf:return n*e/r.components*r.byteLength;case Il:return n*e/r.components*r.byteLength;case Jf:return n*e*2/r.components*r.byteLength;case Ul:return n*e*2/r.components*r.byteLength;case Kf:return n*e*3/r.components*r.byteLength;case rn:return n*e*4/r.components*r.byteLength;case Nl:return n*e*4/r.components*r.byteLength;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:case Oa:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(n,8)*Math.max(e,8)/2;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ws:case tl:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qf:case il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rl:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vM(n){switch(n){case Fn:case Wf:return{byteLength:1,components:1};case Wr:case Xf:case Yr:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Di:case Pl:case Pn:return{byteLength:4,components:1};case qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return m?new OffscreenCanvas(E,_):oo("canvas")}function S(E,_,L){let O=1;const X=Z(E);if((X.width>L||X.height>L)&&(O=L/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const k=Math.floor(O*X.width),ue=Math.floor(O*X.height);f===void 0&&(f=x(k,ue));const oe=_?x(k,ue):f;return oe.width=k,oe.height=ue,oe.getContext("2d").drawImage(E,0,0,k,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+k+"x"+ue+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==Kt&&E.minFilter!==nn}function h(E){n.generateMipmap(E)}function A(E,_,L,O,X=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=_;if(_===n.RED&&(L===n.FLOAT&&(k=n.R32F),L===n.HALF_FLOAT&&(k=n.R16F),L===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.R8UI),L===n.UNSIGNED_SHORT&&(k=n.R16UI),L===n.UNSIGNED_INT&&(k=n.R32UI),L===n.BYTE&&(k=n.R8I),L===n.SHORT&&(k=n.R16I),L===n.INT&&(k=n.R32I)),_===n.RG&&(L===n.FLOAT&&(k=n.RG32F),L===n.HALF_FLOAT&&(k=n.RG16F),L===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RG8UI),L===n.UNSIGNED_SHORT&&(k=n.RG16UI),L===n.UNSIGNED_INT&&(k=n.RG32UI),L===n.BYTE&&(k=n.RG8I),L===n.SHORT&&(k=n.RG16I),L===n.INT&&(k=n.RG32I)),_===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),_===n.RGBA){const ue=X?no:Ze.getTransfer(O);L===n.FLOAT&&(k=n.RGBA32F),L===n.HALF_FLOAT&&(k=n.RGBA16F),L===n.UNSIGNED_BYTE&&(k=ue===rt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function v(E,_){let L;return E?_===null||_===Di||_===hr?L=n.DEPTH24_STENCIL8:_===Pn?L=n.DEPTH32F_STENCIL8:_===Wr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Di||_===hr?L=n.DEPTH_COMPONENT24:_===Pn?L=n.DEPTH_COMPONENT32F:_===Wr&&(L=n.DEPTH_COMPONENT16),L}function T(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function U(E){const _=E.target;_.removeEventListener("dispose",U),w(_),_.isVideoTexture&&u.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),y(_)}function w(E){const _=i.get(E);if(_.__webglInit===void 0)return;const L=E.source,O=d.get(L);if(O){const X=O[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&F(E),Object.keys(O).length===0&&d.delete(L)}i.remove(E)}function F(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const L=E.source,O=d.get(L);delete O[_.__cacheKey],o.memory.textures--}function y(E){const _=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let X=0;X<_.__webglFramebuffer[O].length;X++)n.deleteFramebuffer(_.__webglFramebuffer[O][X]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=E.textures;for(let O=0,X=L.length;O<X;O++){const k=i.get(L[O]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(L[O])}i.remove(E)}let M=0;function R(){M=0}function D(){const E=M;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),M+=1,E}function H(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ee(E,_){const L=i.get(E);if(E.isVideoTexture&&Q(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const O=E.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(L,E,_);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function ne(E,_){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Oe(L,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function K(E,_){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Oe(L,E,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function $(E,_){const L=i.get(E);if(E.version>0&&L.__version!==E.version){te(L,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const G={[Da]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Ia]:n.MIRRORED_REPEAT},ge={[Kt]:n.NEAREST,[ag]:n.NEAREST_MIPMAP_NEAREST,[cs]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},ce={[dg]:n.NEVER,[vg]:n.ALWAYS,[hg]:n.LESS,[ed]:n.LEQUAL,[pg]:n.EQUAL,[_g]:n.GEQUAL,[mg]:n.GREATER,[gg]:n.NOTEQUAL};function fe(E,_){if(_.type===Pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Go||_.magFilter===cs||_.magFilter===Ri||_.minFilter===nn||_.minFilter===Go||_.minFilter===cs||_.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,G[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,G[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,G[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ge[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==cs&&_.minFilter!==Ri||_.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Te(E,_){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",U));const O=_.source;let X=d.get(O);X===void 0&&(X={},d.set(O,X));const k=H(_);if(k!==E.__cacheKey){X[k]===void 0&&(X[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),X[k].usedTimes++;const ue=X[E.__cacheKey];ue!==void 0&&(X[E.__cacheKey].usedTimes--,ue.usedTimes===0&&F(_)),E.__cacheKey=k,E.__webglTexture=X[k].texture}return L}function Oe(E,_,L){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const X=Te(E,_),k=_.source;t.bindTexture(O,E.__webglTexture,n.TEXTURE0+L);const ue=i.get(k);if(k.version!==ue.__version||X===!0){t.activeTexture(n.TEXTURE0+L);const oe=Ze.getPrimaries(Ze.workingColorSpace),le=_.colorSpace===Jn?null:Ze.getPrimaries(_.colorSpace),we=_.colorSpace===Jn||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=S(_.image,!1,r.maxTextureSize);ae=J(_,ae);const _e=s.convert(_.format,_.colorSpace),He=s.convert(_.type);let Le=A(_.internalFormat,_e,He,_.colorSpace,_.isVideoTexture);fe(O,_);let ye;const Ae=_.mipmaps,Ue=_.isVideoTexture!==!0,nt=ue.__version===void 0||X===!0,I=k.dataReady,de=T(_,ae);if(_.isDepthTexture)Le=v(_.format===pr,_.type),nt&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,_e,He,null));else if(_.isDataTexture)if(Ae.length>0){Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,de,Le,Ae[0].width,Ae[0].height);for(let ie=0,se=Ae.length;ie<se;ie++)ye=Ae[ie],Ue?I&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,_e,He,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Le,ye.width,ye.height,0,_e,He,ye.data);_.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(n.TEXTURE_2D,de,Le,ae.width,ae.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,He,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,_e,He,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Le,Ae[0].width,Ae[0].height,ae.depth);for(let ie=0,se=Ae.length;ie<se;ie++)if(ye=Ae[ie],_.format!==rn)if(_e!==null)if(Ue){if(I)if(_.layerUpdates.size>0){const me=Tu(ye.width,ye.height,_.format,_.type);for(const Ne of _.layerUpdates){const We=ye.data.subarray(Ne*me/ye.data.BYTES_PER_ELEMENT,(Ne+1)*me/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ne,ye.width,ye.height,1,_e,We,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,ae.depth,_e,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Le,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,ae.depth,_e,He,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Le,ye.width,ye.height,ae.depth,0,_e,He,ye.data)}else{Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,de,Le,Ae[0].width,Ae[0].height);for(let ie=0,se=Ae.length;ie<se;ie++)ye=Ae[ie],_.format!==rn?_e!==null?Ue?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,_e,He,ye.data):t.texImage2D(n.TEXTURE_2D,ie,Le,ye.width,ye.height,0,_e,He,ye.data)}else if(_.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Le,ae.width,ae.height,ae.depth),I)if(_.layerUpdates.size>0){const ie=Tu(ae.width,ae.height,_.format,_.type);for(const se of _.layerUpdates){const me=ae.data.subarray(se*ie/ae.data.BYTES_PER_ELEMENT,(se+1)*ie/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ae.width,ae.height,1,_e,He,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,He,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,_e,He,ae.data);else if(_.isData3DTexture)Ue?(nt&&t.texStorage3D(n.TEXTURE_3D,de,Le,ae.width,ae.height,ae.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,He,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,_e,He,ae.data);else if(_.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(n.TEXTURE_2D,de,Le,ae.width,ae.height);else{let ie=ae.width,se=ae.height;for(let me=0;me<de;me++)t.texImage2D(n.TEXTURE_2D,me,Le,ie,se,0,_e,He,null),ie>>=1,se>>=1}}else if(Ae.length>0){if(Ue&&nt){const ie=Z(Ae[0]);t.texStorage2D(n.TEXTURE_2D,de,Le,ie.width,ie.height)}for(let ie=0,se=Ae.length;ie<se;ie++)ye=Ae[ie],Ue?I&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,_e,He,ye):t.texImage2D(n.TEXTURE_2D,ie,Le,_e,He,ye);_.generateMipmaps=!1}else if(Ue){if(nt){const ie=Z(ae);t.texStorage2D(n.TEXTURE_2D,de,Le,ie.width,ie.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,He,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,_e,He,ae);p(_)&&h(O),ue.__version=k.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function te(E,_,L){if(_.image.length!==6)return;const O=Te(E,_),X=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const k=i.get(X);if(X.version!==k.__version||O===!0){t.activeTexture(n.TEXTURE0+L);const ue=Ze.getPrimaries(Ze.workingColorSpace),oe=_.colorSpace===Jn?null:Ze.getPrimaries(_.colorSpace),le=_.colorSpace===Jn||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!we&&!ae?_e[se]=S(_.image[se],!0,r.maxCubemapSize):_e[se]=ae?_.image[se].image:_.image[se],_e[se]=J(_,_e[se]);const He=_e[0],Le=s.convert(_.format,_.colorSpace),ye=s.convert(_.type),Ae=A(_.internalFormat,Le,ye,_.colorSpace),Ue=_.isVideoTexture!==!0,nt=k.__version===void 0||O===!0,I=X.dataReady;let de=T(_,He);fe(n.TEXTURE_CUBE_MAP,_);let ie;if(we){Ue&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ae,He.width,He.height);for(let se=0;se<6;se++){ie=_e[se].mipmaps;for(let me=0;me<ie.length;me++){const Ne=ie[me];_.format!==rn?Le!==null?Ue?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Ne.width,Ne.height,Le,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ae,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Ne.width,Ne.height,Le,ye,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ae,Ne.width,Ne.height,0,Le,ye,Ne.data)}}}else{if(ie=_.mipmaps,Ue&&nt){ie.length>0&&de++;const se=Z(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ae,se.width,se.height)}for(let se=0;se<6;se++)if(ae){Ue?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,Le,ye,_e[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ae,_e[se].width,_e[se].height,0,Le,ye,_e[se].data);for(let me=0;me<ie.length;me++){const We=ie[me].image[se].image;Ue?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,We.width,We.height,Le,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ae,We.width,We.height,0,Le,ye,We.data)}}else{Ue?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,ye,_e[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ae,Le,ye,_e[se]);for(let me=0;me<ie.length;me++){const Ne=ie[me];Ue?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Le,ye,Ne.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ae,Le,ye,Ne.image[se])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),k.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function re(E,_,L,O,X,k){const ue=s.convert(L.format,L.colorSpace),oe=s.convert(L.type),le=A(L.internalFormat,ue,oe,L.colorSpace);if(!i.get(_).__hasExternalTextures){const ae=Math.max(1,_.width>>k),_e=Math.max(1,_.height>>k);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,k,le,ae,_e,_.depth,0,ue,oe,null):t.texImage2D(X,k,le,ae,_e,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),V(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,X,i.get(L).__webglTexture,0,j(_)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,X,i.get(L).__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(E,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const O=_.depthTexture,X=O&&O.isDepthTexture?O.type:null,k=v(_.stencilBuffer,X),ue=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=j(_);V(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,k,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,E)}else{const O=_.textures;for(let X=0;X<O.length;X++){const k=O[X],ue=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),le=A(k.internalFormat,ue,oe,k.colorSpace),we=j(_);L&&V(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,le,_.width,_.height):V(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,le,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,le,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee(_.depthTexture,0);const O=i.get(_.depthTexture).__webglTexture,X=j(_);if(_.depthTexture.format===cr)V(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(_.depthTexture.format===pr)V(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function De(E){const _=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");xe(_.__webglFramebuffer,E)}else if(L){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]=n.createRenderbuffer(),Me(_.__webglDepthbuffer[O],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Me(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(E,_,L){const O=i.get(E);_!==void 0&&re(O.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&De(E)}function Pe(E){const _=E.texture,L=i.get(E),O=i.get(_);E.addEventListener("dispose",C);const X=E.textures,k=E.isWebGLCubeRenderTarget===!0,ue=X.length>1;if(ue||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,o.memory.textures++),k){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let le=0;le<_.mipmaps.length;le++)L.__webglFramebuffer[oe][le]=n.createFramebuffer()}else L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,le=X.length;oe<le;oe++){const we=i.get(X[oe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&V(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<X.length;oe++){const le=X[oe];L.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);const we=s.convert(le.format,le.colorSpace),ae=s.convert(le.type),_e=A(le.internalFormat,we,ae,le.colorSpace,E.isXRRenderTarget===!0),He=j(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,_e,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),fe(n.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)re(L.__webglFramebuffer[oe][le],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else re(L.__webglFramebuffer[oe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,le=X.length;oe<le;oe++){const we=X[oe],ae=i.get(we);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),fe(n.TEXTURE_2D,we),re(L.__webglFramebuffer,E,we,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),p(we)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,O.__webglTexture),fe(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)re(L.__webglFramebuffer[le],E,_,n.COLOR_ATTACHMENT0,oe,le);else re(L.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,oe,0);p(_)&&h(oe),t.unbindTexture()}E.depthBuffer&&De(E)}function et(E){const _=E.textures;for(let L=0,O=_.length;L<O;L++){const X=_[L];if(p(X)){const k=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(X).__webglTexture;t.bindTexture(k,ue),h(k),t.unbindTexture()}}}const g=[],P=[];function z(E){if(E.samples>0){if(V(E)===!1){const _=E.textures,L=E.width,O=E.height;let X=n.COLOR_BUFFER_BIT;const k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(E),oe=_.length>1;if(oe)for(let le=0;le<_.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<_.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const we=i.get(_[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,L,O,0,0,L,O,X,n.NEAREST),l===!0&&(g.length=0,P.length=0,g.push(n.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(g.push(k),P.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,g))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<_.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const we=i.get(_[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function j(E){return Math.min(r.maxSamples,E.samples)}function V(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Q(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function J(E,_){const L=E.colorSpace,O=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==ci&&L!==Jn&&(Ze.getTransfer(L)===rt?(O!==rn||X!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function Z(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=ee,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=Re,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=re,this.useMultisampledRTT=V}function MM(n,e){function t(i,r=Jn){let s;const o=Ze.getTransfer(r);if(i===Fn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wf)return n.BYTE;if(i===Xf)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Yr)return n.HALF_FLOAT;if(i===Yf)return n.ALPHA;if(i===Kf)return n.RGB;if(i===rn)return n.RGBA;if(i===jf)return n.LUMINANCE;if(i===$f)return n.LUMINANCE_ALPHA;if(i===cr)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===Zf)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===Jf)return n.RG;if(i===Ul)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===Hs||i===Vs||i===Gs||i===ks)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Na||i===Fa||i===Oa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ba||i===za||i===Ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ba||i===za)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ha)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Va||i===Ga||i===ka||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===ja||i===$a||i===Za||i===Ja||i===Qa||i===el)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Va)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ga)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ya)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$a)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Za)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ws||i===tl||i===nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ws)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qf||i===il||i===rl||i===sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ws)return s.COMPRESSED_RED_RGTC1_EXT;if(i===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class SM extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yM={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,i),h=this._getHandJoint(c,S);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const EM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
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

}`;class TM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:EM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AM extends gr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const S=new TM,p=t.getContextAttributes();let h=null,A=null;const v=[],T=[],U=new Je;let C=null;const w=new tn;w.layers.enable(1),w.viewport=new gt;const F=new tn;F.layers.enable(2),F.viewport=new gt;const y=[w,F],M=new SM;M.layers.enable(1),M.layers.enable(2);let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let re=v[te];return re===void 0&&(re=new ma,v[te]=re),re.getTargetRaySpace()},this.getControllerGrip=function(te){let re=v[te];return re===void 0&&(re=new ma,v[te]=re),re.getGripSpace()},this.getHand=function(te){let re=v[te];return re===void 0&&(re=new ma,v[te]=re),re.getHandSpace()};function H(te){const re=T.indexOf(te.inputSource);if(re===-1)return;const Me=v[re];Me!==void 0&&(Me.update(te.inputSource,te.frame,c||o),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ne);for(let te=0;te<v.length;te++){const re=T[te];re!==null&&(T[te]=null,v[te].disconnect(re))}R=null,D=null,S.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,A=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Ii(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,Me=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?pr:cr,Me=p.stencil?hr:Di);const De={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Ii(d.textureWidth,d.textureHeight,{format:rn,type:Fn,depthTexture:new gd(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ne(te){for(let re=0;re<te.removed.length;re++){const Me=te.removed[re],xe=T.indexOf(Me);xe>=0&&(T[xe]=null,v[xe].disconnect(Me))}for(let re=0;re<te.added.length;re++){const Me=te.added[re];let xe=T.indexOf(Me);if(xe===-1){for(let Re=0;Re<v.length;Re++)if(Re>=T.length){T.push(Me),xe=Re;break}else if(T[Re]===null){T[Re]=Me,xe=Re;break}if(xe===-1)break}const De=v[xe];De&&De.connect(Me)}}const K=new Y,$=new Y;function G(te,re,Me){K.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(Me.matrixWorld);const xe=K.distanceTo($),De=re.projectionMatrix.elements,Re=Me.projectionMatrix.elements,Pe=De[14]/(De[10]-1),et=De[14]/(De[10]+1),g=(De[9]+1)/De[5],P=(De[9]-1)/De[5],z=(De[8]-1)/De[0],j=(Re[8]+1)/Re[0],V=Pe*z,Q=Pe*j,J=xe/(-z+j),Z=J*-z;re.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Z),te.translateZ(J),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const E=Pe+J,_=et+J,L=V-Z,O=Q+(xe-Z),X=g*et/_*E,k=P*et/_*E;te.projectionMatrix.makePerspective(L,O,X,k,E,_),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ge(te,re){re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;S.texture!==null&&(te.near=S.depthNear,te.far=S.depthFar),M.near=F.near=w.near=te.near,M.far=F.far=w.far=te.far,(R!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,D=M.far,w.near=R,w.far=D,F.near=R,F.far=D,w.updateProjectionMatrix(),F.updateProjectionMatrix(),te.updateProjectionMatrix());const re=te.parent,Me=M.cameras;ge(M,re);for(let xe=0;xe<Me.length;xe++)ge(Me[xe],re);Me.length===2?G(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),ce(te,M,re)};function ce(te,re,Me){Me===null?te.matrix.copy(re.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(re.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(re.projectionMatrix),te.projectionMatrixInverse.copy(re.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ol*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let fe=null;function Te(te,re){if(u=re.getViewerPose(c||o),x=re,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let xe=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let Re=0;Re<Me.length;Re++){const Pe=Me[Re];let et=null;if(m!==null)et=m.getViewport(Pe);else{const P=f.getViewSubImage(d,Pe);et=P.viewport,Re===0&&(e.setRenderTargetTextures(A,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(A))}let g=y[Re];g===void 0&&(g=new tn,g.layers.enable(Re),g.viewport=new gt,y[Re]=g),g.matrix.fromArray(Pe.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.projectionMatrix.fromArray(Pe.projectionMatrix),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),g.viewport.set(et.x,et.y,et.width,et.height),Re===0&&(M.matrix.copy(g.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push(g)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Re=f.getDepthInformation(Me[0]);Re&&Re.isValid&&Re.texture&&S.init(e,Re,r.renderState)}}for(let Me=0;Me<v.length;Me++){const xe=T[Me],De=v[Me];xe!==null&&De!==void 0&&De.update(xe,re,c||o)}fe&&fe(te,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}const Oe=new pd;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(te){fe=te},this.dispose=function(){}}}const Mi=new On,wM=new ft;function CM(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,ud(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,v,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),S(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,A,v):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Nt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Nt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=e.get(h),v=A.envMap,T=A.envMapRotation;v&&(p.envMap.value=v,Mi.copy(T),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Mi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,A,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=v*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function S(p,h){const A=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,v){const T=v.program;i.uniformBlockBinding(A,T)}function c(A,v){let T=r[A.id];T===void 0&&(x(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",p));const U=v.program;i.updateUBOMapping(A,U);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function u(A){const v=f();A.__bindingPointIndex=v;const T=n.createBuffer(),U=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const v=r[A.id],T=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=T.length;C<w;C++){const F=Array.isArray(T[C])?T[C]:[T[C]];for(let y=0,M=F.length;y<M;y++){const R=F[y];if(m(R,C,y,U)===!0){const D=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let ee=0;for(let ne=0;ne<H.length;ne++){const K=H[ne],$=S(K);typeof K=="number"||typeof K=="boolean"?(R.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,D+ee,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=0,R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=0,R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=0):(K.toArray(R.__data,ee),ee+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,v,T,U){const C=A.value,w=v+"_"+T;if(U[w]===void 0)return typeof C=="number"||typeof C=="boolean"?U[w]=C:U[w]=C.clone(),!0;{const F=U[w];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return U[w]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function x(A){const v=A.uniforms;let T=0;const U=16;for(let w=0,F=v.length;w<F;w++){const y=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,R=y.length;M<R;M++){const D=y[M],H=Array.isArray(D.value)?D.value:[D.value];for(let ee=0,ne=H.length;ee<ne;ee++){const K=H[ee],$=S(K),G=T%U,ge=G%$.boundary,ce=G+ge;T+=ge,ce!==0&&U-ce<$.storage&&(T+=U-ce),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=$.storage}}}const C=T%U;return C>0&&(T+=U-C),A.__size=T,A.__cache={},this}function S(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function p(A){const v=A.target;v.removeEventListener("dispose",p);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class PM{constructor(e={}){const{canvas:t=Mg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),x=new Int32Array(4);let S=null,p=null;const h=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=ti,this.toneMappingExposure=1;const v=this;let T=!1,U=0,C=0,w=null,F=-1,y=null;const M=new gt,R=new gt;let D=null;const H=new Qe(0);let ee=0,ne=t.width,K=t.height,$=1,G=null,ge=null;const ce=new gt(0,0,ne,K),fe=new gt(0,0,ne,K);let Te=!1;const Oe=new hd;let te=!1,re=!1;const Me=new ft,xe=new Y,De=new gt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function et(){return w===null?$:1}let g=i;function P(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",me,!1),g===null){const N="webgl2";if(g=P(N,b),g===null)throw P(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let z,j,V,Q,J,Z,E,_,L,O,X,k,ue,oe,le,we,ae,_e,He,Le,ye,Ae,Ue,nt;function I(){z=new F0(g),z.init(),Ae=new MM(g,z),j=new P0(g,z,e,Ae),V=new _M(g),Q=new z0(g),J=new iM,Z=new xM(g,z,V,J,j,Ae,Q),E=new D0(v),_=new N0(v),L=new qg(g),Ue=new C0(g,L),O=new O0(g,L,Q,Ue),X=new V0(g,O,L,Q),He=new H0(g,j,Z),we=new L0(J),k=new nM(v,E,_,z,j,Ue,we),ue=new CM(v,J),oe=new sM,le=new fM(z),_e=new w0(v,E,_,V,X,d,l),ae=new gM(v,X,j),nt=new RM(g,Q,j,V),Le=new R0(g,z,Q),ye=new B0(g,z,Q),Q.programs=k.programs,v.capabilities=j,v.extensions=z,v.properties=J,v.renderLists=oe,v.shadowMap=ae,v.state=V,v.info=Q}I();const de=new AM(v,g);this.xr=de,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const b=z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(ne,K,!1))},this.getSize=function(b){return b.set(ne,K)},this.setSize=function(b,N,W=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,K=N,t.width=Math.floor(b*$),t.height=Math.floor(N*$),W===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(ne*$,K*$).floor()},this.setDrawingBufferSize=function(b,N,W){ne=b,K=N,$=W,t.width=Math.floor(b*W),t.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(ce)},this.setViewport=function(b,N,W,q){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,N,W,q),V.viewport(M.copy(ce).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(fe)},this.setScissor=function(b,N,W,q){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,N,W,q),V.scissor(R.copy(fe).multiplyScalar($).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(b){V.setScissorTest(Te=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(b=!0,N=!0,W=!0){let q=0;if(b){let B=!1;if(w!==null){const pe=w.texture.format;B=pe===Nl||pe===Ul||pe===Il}if(B){const pe=w.texture.type,Se=pe===Fn||pe===Di||pe===Wr||pe===hr||pe===Ll||pe===Dl,Ee=_e.getClearColor(),be=_e.getClearAlpha(),Fe=Ee.r,Be=Ee.g,Ie=Ee.b;Se?(m[0]=Fe,m[1]=Be,m[2]=Ie,m[3]=be,g.clearBufferuiv(g.COLOR,0,m)):(x[0]=Fe,x[1]=Be,x[2]=Ie,x[3]=be,g.clearBufferiv(g.COLOR,0,x))}else q|=g.COLOR_BUFFER_BIT}N&&(q|=g.DEPTH_BUFFER_BIT),W&&(q|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",me,!1),oe.dispose(),le.dispose(),J.dispose(),E.dispose(),_.dispose(),X.dispose(),Ue.dispose(),nt.dispose(),k.dispose(),de.dispose(),de.removeEventListener("sessionstart",ln),de.removeEventListener("sessionend",zl),ui.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Q.autoReset,N=ae.enabled,W=ae.autoUpdate,q=ae.needsUpdate,B=ae.type;I(),Q.autoReset=b,ae.enabled=N,ae.autoUpdate=W,ae.needsUpdate=q,ae.type=B}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const N=b.target;N.removeEventListener("dispose",Ne),We(N)}function We(b){lt(b),J.remove(b)}function lt(b){const N=J.get(b).programs;N!==void 0&&(N.forEach(function(W){k.releaseProgram(W)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,q,B,pe){N===null&&(N=Re);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Ee=Pd(b,N,W,q,B);V.setMaterial(q,Se);let be=W.index,Fe=1;if(q.wireframe===!0){if(be=O.getWireframeAttribute(W),be===void 0)return;Fe=2}const Be=W.drawRange,Ie=W.attributes.position;let Ye=Be.start*Fe,ot=(Be.start+Be.count)*Fe;pe!==null&&(Ye=Math.max(Ye,pe.start*Fe),ot=Math.min(ot,(pe.start+pe.count)*Fe)),be!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,be.count)):Ie!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,Ie.count));const at=ot-Ye;if(at<0||at===1/0)return;Ue.setup(B,q,Ee,W,be);let Bt,Ke=Le;if(be!==null&&(Bt=L.get(be),Ke=ye,Ke.setIndex(Bt)),B.isMesh)q.wireframe===!0?(V.setLineWidth(q.wireframeLinewidth*et()),Ke.setMode(g.LINES)):Ke.setMode(g.TRIANGLES);else if(B.isLine){let Ce=q.linewidth;Ce===void 0&&(Ce=1),V.setLineWidth(Ce*et()),B.isLineSegments?Ke.setMode(g.LINES):B.isLineLoop?Ke.setMode(g.LINE_LOOP):Ke.setMode(g.LINE_STRIP)}else B.isPoints?Ke.setMode(g.POINTS):B.isSprite&&Ke.setMode(g.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ke.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))Ke.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,xt=B._multiDrawCounts,je=B._multiDrawCount,$t=be?L.get(be).bytesPerElement:1,Ui=J.get(q).currentProgram.getUniforms();for(let zt=0;zt<je;zt++)Ui.setValue(g,"_gl_DrawID",zt),Ke.render(Ce[zt]/$t,xt[zt])}else if(B.isInstancedMesh)Ke.renderInstances(Ye,at,B.count);else if(W.isInstancedBufferGeometry){const Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,Ce);Ke.renderInstances(Ye,at,xt)}else Ke.render(Ye,at)};function vt(b,N,W){b.transparent===!0&&b.side===Rn&&b.forceSinglePass===!1?(b.side=Nt,b.needsUpdate=!0,ts(b,N,W),b.side=si,b.needsUpdate=!0,ts(b,N,W),b.side=Rn):ts(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),p=le.get(W),p.init(N),A.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return b.traverse(function(B){const pe=B.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Ee=pe[Se];vt(Ee,W,B),q.add(Ee)}else vt(pe,W,B),q.add(pe)}),A.pop(),p=null,q},this.compileAsync=function(b,N,W=null){const q=this.compile(b,N,W);return new Promise(B=>{function pe(){if(q.forEach(function(Se){J.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){B(b);return}setTimeout(pe,10)}z.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let qe=null;function gn(b){qe&&qe(b)}function ln(){ui.stop()}function zl(){ui.start()}const ui=new pd;ui.setAnimationLoop(gn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(b){qe=b,de.setAnimationLoop(b),b===null?ui.stop():ui.start()},de.addEventListener("sessionstart",ln),de.addEventListener("sessionend",zl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,w),p=le.get(b,A.length),p.init(N),A.push(p),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Oe.setFromProjectionMatrix(Me),re=this.localClippingEnabled,te=we.init(this.clippingPlanes,re),S=oe.get(b,h.length),S.init(),h.push(S),de.enabled===!0&&de.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&Eo(pe,N,-1/0,v.sortObjects)}Eo(b,N,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(G,ge),Pe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Pe&&_e.addToRenderList(S,b),this.info.render.frame++,te===!0&&we.beginShadows();const W=p.state.shadowsArray;ae.render(W,b,N),te===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,B=S.transmissive;if(p.setupLights(),N.isArrayCamera){const pe=N.cameras;if(B.length>0)for(let Se=0,Ee=pe.length;Se<Ee;Se++){const be=pe[Se];Vl(q,B,b,be)}Pe&&_e.render(b);for(let Se=0,Ee=pe.length;Se<Ee;Se++){const be=pe[Se];Hl(S,b,be,be.viewport)}}else B.length>0&&Vl(q,B,b,N),Pe&&_e.render(b),Hl(S,b,N);w!==null&&(Z.updateMultisampleRenderTarget(w),Z.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(v,b,N),Ue.resetDefaultState(),F=-1,y=null,A.pop(),A.length>0?(p=A[A.length-1],te===!0&&we.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function Eo(b,N,W,q){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){q&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const Se=X.update(b),Ee=b.material;Ee.visible&&S.push(b,Se,Ee,W,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const Se=X.update(b),Ee=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(Ee)){const be=Se.groups;for(let Fe=0,Be=be.length;Fe<Be;Fe++){const Ie=be[Fe],Ye=Ee[Ie.materialIndex];Ye&&Ye.visible&&S.push(b,Se,Ye,W,De.z,Ie)}}else Ee.visible&&S.push(b,Se,Ee,W,De.z,null)}}const pe=b.children;for(let Se=0,Ee=pe.length;Se<Ee;Se++)Eo(pe[Se],N,W,q)}function Hl(b,N,W,q){const B=b.opaque,pe=b.transmissive,Se=b.transparent;p.setupLightsView(W),te===!0&&we.setGlobalState(v.clippingPlanes,W),q&&V.viewport(M.copy(q)),B.length>0&&es(B,N,W),pe.length>0&&es(pe,N,W),Se.length>0&&es(Se,N,W),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Vl(b,N,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ii(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Yr:Fn,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const pe=p.state.transmissionRenderTarget[q.id],Se=q.viewport||M;pe.setSize(Se.z,Se.w);const Ee=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(H),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),Pe&&_e.render(W);const be=v.toneMapping;v.toneMapping=ti;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),te===!0&&we.setGlobalState(v.clippingPlanes,q),es(b,W,q),Z.updateMultisampleRenderTarget(pe),Z.updateRenderTargetMipmap(pe),z.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ie=0,Ye=N.length;Ie<Ye;Ie++){const ot=N[Ie],at=ot.object,Bt=ot.geometry,Ke=ot.material,Ce=ot.group;if(Ke.side===Rn&&at.layers.test(q.layers)){const xt=Ke.side;Ke.side=Nt,Ke.needsUpdate=!0,Gl(at,W,q,Bt,Ke,Ce),Ke.side=xt,Ke.needsUpdate=!0,Be=!0}}Be===!0&&(Z.updateMultisampleRenderTarget(pe),Z.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ee),v.setClearColor(H,ee),Fe!==void 0&&(q.viewport=Fe),v.toneMapping=be}function es(b,N,W){const q=N.isScene===!0?N.overrideMaterial:null;for(let B=0,pe=b.length;B<pe;B++){const Se=b[B],Ee=Se.object,be=Se.geometry,Fe=q===null?Se.material:q,Be=Se.group;Ee.layers.test(W.layers)&&Gl(Ee,N,W,be,Fe,Be)}}function Gl(b,N,W,q,B,pe){b.onBeforeRender(v,N,W,q,B,pe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.transparent===!0&&B.side===Rn&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,v.renderBufferDirect(W,N,q,B,b,pe),B.side=si,B.needsUpdate=!0,v.renderBufferDirect(W,N,q,B,b,pe),B.side=Rn):v.renderBufferDirect(W,N,q,B,b,pe),b.onAfterRender(v,N,W,q,B,pe)}function ts(b,N,W){N.isScene!==!0&&(N=Re);const q=J.get(b),B=p.state.lights,pe=p.state.shadowsArray,Se=B.state.version,Ee=k.getParameters(b,B.state,pe,N,W),be=k.getProgramCacheKey(Ee);let Fe=q.programs;q.environment=b.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(b.isMeshStandardMaterial?_:E).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Ne),Fe=new Map,q.programs=Fe);let Be=Fe.get(be);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Se)return Wl(b,Ee),Be}else Ee.uniforms=k.getUniforms(b),b.onBeforeCompile(Ee,v),Be=k.acquireProgram(Ee,be),Fe.set(be,Be),q.uniforms=Ee.uniforms;const Ie=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=we.uniform),Wl(b,Ee),q.needsLights=Dd(b),q.lightsStateVersion=Se,q.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function kl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Xs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Wl(b,N){const W=J.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Pd(b,N,W,q,B){N.isScene!==!0&&(N=Re),Z.resetTextureUnits();const pe=N.fog,Se=q.isMeshStandardMaterial?N.environment:null,Ee=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ci,be=(q.isMeshStandardMaterial?_:E).get(q.envMap||Se),Fe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let at=ti;q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(at=v.toneMapping);const Bt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ke=Bt!==void 0?Bt.length:0,Ce=J.get(q),xt=p.state.lights;if(te===!0&&(re===!0||b!==y)){const Wt=b===y&&q.id===F;we.setState(q,b,Wt)}let je=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==xt.state.version||Ce.outputColorSpace!==Ee||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==be||q.fog===!0&&Ce.fog!==pe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==we.numPlanes||Ce.numIntersection!==we.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==Be||Ce.morphTargets!==Ie||Ce.morphNormals!==Ye||Ce.morphColors!==ot||Ce.toneMapping!==at||Ce.morphTargetsCount!==Ke)&&(je=!0):(je=!0,Ce.__version=q.version);let $t=Ce.currentProgram;je===!0&&($t=ts(q,N,B));let Ui=!1,zt=!1,bo=!1;const ct=$t.getUniforms(),Hn=Ce.uniforms;if(V.useProgram($t.program)&&(Ui=!0,zt=!0,bo=!0),q.id!==F&&(F=q.id,zt=!0),Ui||y!==b){ct.setValue(g,"projectionMatrix",b.projectionMatrix),ct.setValue(g,"viewMatrix",b.matrixWorldInverse);const Wt=ct.map.cameraPosition;Wt!==void 0&&Wt.setValue(g,xe.setFromMatrixPosition(b.matrixWorld)),j.logarithmicDepthBuffer&&ct.setValue(g,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ct.setValue(g,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,zt=!0,bo=!0)}if(B.isSkinnedMesh){ct.setOptional(g,B,"bindMatrix"),ct.setOptional(g,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(g,"boneTexture",Wt.boneTexture,Z))}B.isBatchedMesh&&(ct.setOptional(g,B,"batchingTexture"),ct.setValue(g,"batchingTexture",B._matricesTexture,Z),ct.setOptional(g,B,"batchingIdTexture"),ct.setValue(g,"batchingIdTexture",B._indirectTexture,Z),ct.setOptional(g,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(g,"batchingColorTexture",B._colorsTexture,Z));const To=W.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0)&&He.update(B,W,$t),(zt||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,ct.setValue(g,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Hn.envMap.value=be,Hn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(Hn.envMapIntensity.value=N.environmentIntensity),zt&&(ct.setValue(g,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Ld(Hn,bo),pe&&q.fog===!0&&ue.refreshFogUniforms(Hn,pe),ue.refreshMaterialUniforms(Hn,q,$,K,p.state.transmissionRenderTarget[b.id]),Xs.upload(g,kl(Ce),Hn,Z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xs.upload(g,kl(Ce),Hn,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ct.setValue(g,"center",B.center),ct.setValue(g,"modelViewMatrix",B.modelViewMatrix),ct.setValue(g,"normalMatrix",B.normalMatrix),ct.setValue(g,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Wt=q.uniformsGroups;for(let Ao=0,Id=Wt.length;Ao<Id;Ao++){const Xl=Wt[Ao];nt.update(Xl,$t),nt.bind(Xl,$t)}}return $t}function Ld(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Dd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,N,W){J.get(b.texture).__webglTexture=N,J.get(b.depthTexture).__webglTexture=W;const q=J.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const W=J.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){w=b,U=N,C=W;let q=!0,B=null,pe=!1,Se=!1;if(b){const be=J.get(b);be.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(g.FRAMEBUFFER,null),q=!1):be.__webglFramebuffer===void 0?Z.setupRenderTarget(b):be.__hasExternalTextures&&Z.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const Be=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?B=Be[N][W]:B=Be[N],pe=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?B=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[W]:B=Be,M.copy(b.viewport),R.copy(b.scissor),D=b.scissorTest}else M.copy(ce).multiplyScalar($).floor(),R.copy(fe).multiplyScalar($).floor(),D=Te;if(V.bindFramebuffer(g.FRAMEBUFFER,B)&&q&&V.drawBuffers(b,B),V.viewport(M),V.scissor(R),V.setScissorTest(D),pe){const be=J.get(b.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,W)}else if(Se){const be=J.get(b.texture),Fe=N||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,be.__webglTexture,W||0,Fe)}F=-1},this.readRenderTargetPixels=function(b,N,W,q,B,pe,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){V.bindFramebuffer(g.FRAMEBUFFER,Ee);try{const be=b.texture,Fe=be.format,Be=be.type;if(!j.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-q&&W>=0&&W<=b.height-B&&g.readPixels(N,W,q,B,Ae.convert(Fe),Ae.convert(Be),pe)}finally{const be=w!==null?J.get(w).__webglFramebuffer:null;V.bindFramebuffer(g.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,q,B,pe,Se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){V.bindFramebuffer(g.FRAMEBUFFER,Ee);try{const be=b.texture,Fe=be.format,Be=be.type;if(!j.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-q&&W>=0&&W<=b.height-B){const Ie=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ie),g.bufferData(g.PIXEL_PACK_BUFFER,pe.byteLength,g.STREAM_READ),g.readPixels(N,W,q,B,Ae.convert(Fe),Ae.convert(Be),0),g.flush();const Ye=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);await Sg(g,Ye,4);try{g.bindBuffer(g.PIXEL_PACK_BUFFER,Ie),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,pe)}finally{g.deleteBuffer(Ie),g.deleteSync(Ye)}return pe}}finally{const be=w!==null?J.get(w).__webglFramebuffer:null;V.bindFramebuffer(g.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(b,N=null,W=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-W),B=Math.floor(b.image.width*q),pe=Math.floor(b.image.height*q),Se=N!==null?N.x:0,Ee=N!==null?N.y:0;Z.setTexture2D(b,0),g.copyTexSubImage2D(g.TEXTURE_2D,W,0,0,Se,Ee,B,pe),V.unbindTexture()},this.copyTextureToTexture=function(b,N,W=null,q=null,B=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],N=arguments[2],B=arguments[3]||0,W=null);let pe,Se,Ee,be,Fe,Be;W!==null?(pe=W.max.x-W.min.x,Se=W.max.y-W.min.y,Ee=W.min.x,be=W.min.y):(pe=b.image.width,Se=b.image.height,Ee=0,be=0),q!==null?(Fe=q.x,Be=q.y):(Fe=0,Be=0);const Ie=Ae.convert(N.format),Ye=Ae.convert(N.type);Z.setTexture2D(N,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,N.unpackAlignment);const ot=g.getParameter(g.UNPACK_ROW_LENGTH),at=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Bt=g.getParameter(g.UNPACK_SKIP_PIXELS),Ke=g.getParameter(g.UNPACK_SKIP_ROWS),Ce=g.getParameter(g.UNPACK_SKIP_IMAGES),xt=b.isCompressedTexture?b.mipmaps[B]:b.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,xt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ee),g.pixelStorei(g.UNPACK_SKIP_ROWS,be),b.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,B,Fe,Be,pe,Se,Ie,Ye,xt.data):b.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,B,Fe,Be,xt.width,xt.height,Ie,xt.data):g.texSubImage2D(g.TEXTURE_2D,B,Fe,Be,pe,Se,Ie,Ye,xt),g.pixelStorei(g.UNPACK_ROW_LENGTH,ot),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ke),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ce),B===0&&N.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W=null,q=null,B=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,b=arguments[2],N=arguments[3],B=arguments[4]||0);let pe,Se,Ee,be,Fe,Be,Ie,Ye,ot;const at=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(pe=W.max.x-W.min.x,Se=W.max.y-W.min.y,Ee=W.max.z-W.min.z,be=W.min.x,Fe=W.min.y,Be=W.min.z):(pe=at.width,Se=at.height,Ee=at.depth,be=0,Fe=0,Be=0),q!==null?(Ie=q.x,Ye=q.y,ot=q.z):(Ie=0,Ye=0,ot=0);const Bt=Ae.convert(N.format),Ke=Ae.convert(N.type);let Ce;if(N.isData3DTexture)Z.setTexture3D(N,0),Ce=g.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Z.setTexture2DArray(N,0),Ce=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,N.unpackAlignment);const xt=g.getParameter(g.UNPACK_ROW_LENGTH),je=g.getParameter(g.UNPACK_IMAGE_HEIGHT),$t=g.getParameter(g.UNPACK_SKIP_PIXELS),Ui=g.getParameter(g.UNPACK_SKIP_ROWS),zt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,at.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,at.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,be),g.pixelStorei(g.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Be),b.isDataTexture||b.isData3DTexture?g.texSubImage3D(Ce,B,Ie,Ye,ot,pe,Se,Ee,Bt,Ke,at.data):N.isCompressedArrayTexture?g.compressedTexSubImage3D(Ce,B,Ie,Ye,ot,pe,Se,Ee,Bt,at.data):g.texSubImage3D(Ce,B,Ie,Ye,ot,pe,Se,Ee,Bt,Ke,at),g.pixelStorei(g.UNPACK_ROW_LENGTH,xt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,je),g.pixelStorei(g.UNPACK_SKIP_PIXELS,$t),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ui),g.pixelStorei(g.UNPACK_SKIP_IMAGES,zt),B===0&&N.generateMipmaps&&g.generateMipmap(Ce),V.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),V.unbindTexture()},this.resetState=function(){U=0,C=0,w=null,V.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===xo?"display-p3":"srgb"}}class LM extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sd extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new ft,ll=new rd,Ds=new Mo,Is=new Y;class DM extends Ot{constructor(e=new zn,t=new Sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;Au.copy(r).invert(),ll.copy(e.ray).applyMatrix4(Au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=d,S=m;x<S;x++){const p=c.getX(x);Is.fromBufferAttribute(f,p),wu(Is,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,S=m;x<S;x++)Is.fromBufferAttribute(f,x),wu(Is,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wu(n,e,t,i,r,s,o){const a=ll.distanceSqToPoint(n);if(a<t){const l=new Y;ll.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);class Qr{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const IM=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Mt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:IM()},Bl=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},UM=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Bl(n);Mt.publicKey=t.publicKey,Mt.blockHeadless=t.blockHeadless,Mt.storageProvider=t.storageProvider,Mt.blockList=t.blockList,Mt.limitRate=t.limitRate,Mt.origin=t.origin||e},yd=async(n,e,t={})=>{const i=await fetch(Mt.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new Qr(i.status,r);if(i.ok)return s;throw s},Ed=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},NM=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},bd=n=>n.webdriver||!n.languages||n.languages.length===0,Td=()=>new Qr(451,"Unavailable For Headless Browser"),FM=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},OM=n=>!n.list?.length||!n.watchVariable,BM=(n,e)=>n instanceof FormData?n.get(e):n[e],Ad=(n,e)=>{if(OM(n))return!1;FM(n.list,n.watchVariable);const t=BM(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},wd=()=>new Qr(403,"Forbidden"),zM=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},HM=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},Cd=async(n,e,t)=>{if(!e.throttle||!t)return!1;zM(e.throttle,e.id);const i=e.id||n;return await HM(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},Rd=()=>new Qr(429,"Too Many Requests"),VM=async(n,e,t,i)=>{const r=Bl(i),s=r.publicKey||Mt.publicKey,o=r.blockHeadless||Mt.blockHeadless,a=r.storageProvider||Mt.storageProvider,l={...Mt.blockList,...r.blockList},c={...Mt.limitRate,...r.limitRate};return o&&bd(navigator)?Promise.reject(Td()):(Ed(s,n,e),NM(t),t&&Ad(l,t)?Promise.reject(wd()):await Cd(location.pathname,c,a)?Promise.reject(Rd()):yd("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},GM=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},kM=n=>typeof n=="string"?document.querySelector(n):n,WM=async(n,e,t,i)=>{const r=Bl(i),s=r.publicKey||Mt.publicKey,o=r.blockHeadless||Mt.blockHeadless,a=Mt.storageProvider||r.storageProvider,l={...Mt.blockList,...r.blockList},c={...Mt.limitRate,...r.limitRate};if(o&&bd(navigator))return Promise.reject(Td());const u=kM(t);Ed(s,n,e),GM(u);const f=new FormData(u);return Ad(l,f)?Promise.reject(wd()):await Cd(location.pathname,c,a)?Promise.reject(Rd()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),yd("/api/v1.0/email/send-form",f))},XM={init:UM,send:VM,sendForm:WM,EmailJSResponseStatus:Qr},qM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},YM={id:"app",class:"terminal-theme"},KM={class:"fixed top-0 w-full bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-600 backdrop-blur-md shadow-lg z-10"},jM={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},$M={class:"flex items-center justify-center py-4 relative"},ZM={class:"absolute left-0 flex md:hidden"},JM={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},QM={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},eS={class:"hidden md:flex space-x-8"},tS={key:0,class:"md:hidden flex flex-col items-center space-y-4 py-4 bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-600 rounded-b-lg shadow-lg animate-fade-in"},nS={id:"about",class:"min-h-screen flex items-center justify-center bg-black text-green-300 relative overflow-hidden pt-14 md:pt-8"},iS={class:"text-center max-w-4xl md:max-w-5xl lg:max-w-6xl px-6 md:px-4 py-6 md:py-8 relative"},rS={class:"relative w-full h-64 md:h-52 mb-4"},sS={class:"flex justify-center space-x-4"},oS={id:"projects",class:"min-h-screen flex items-center justify-center"},aS={class:"max-w-6xl px-4 py-12"},lS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"},cS=["onKeydown"],uS={id:"contact",class:"min-h-screen flex items-center justify-center"},fS={class:"max-w-6xl px-4 py-12"},dS={class:"flex flex-col gap-6"},hS={class:"flex-1 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col justify-center min-w-0"},pS={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},mS={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0"},gS=["disabled"],Cu="Hello, I'm Constantin",_S={__name:"App",setup(n){const e=Vn(!1),t=Vn("about"),i=Vn(!1),r=Vn(null),s=Vn(null);let o=null,a=null;$s(()=>{const A=["about","experience","projects","education","contact"],v=[];return A.forEach(T=>{const U=document.getElementById(T);if(U){const C=new IntersectionObserver(w=>{w.forEach(F=>{F.isIntersecting&&(t.value=T)})},{root:null,rootMargin:"0px",threshold:.15});C.observe(U),v.push(C)}}),()=>{v.forEach(T=>T.disconnect())}});const l=()=>{const A=r.value;if(!A)return null;let v=null,T=null,U=null,C=null,w=null,F=null,y=null,M=null,R=null;const D={x:0,y:0,active:!1},H=(ce,fe)=>{const Te=document.createElement("canvas"),Oe=Te.getContext("2d");if(!Oe)return{positions:new Float32Array,basePositions:new Float32Array};const re=(typeof window<"u"?window.innerWidth:ce)<768,Me=re?["Hello, I'm","Constantin"]:[Cu],xe=re?110:130,De=Math.round(xe*1.15),Re=re?900:1300,Pe=re?380:320;Te.width=Re,Te.height=Pe,Oe.clearRect(0,0,Re,Pe),Oe.fillStyle="#111827",Oe.textAlign="center",Oe.textBaseline="middle",Oe.font=`700 ${xe}px "Avenir Next", "Segoe UI", sans-serif`;const et=De*(Me.length-1),g=Pe/2-et/2;Me.forEach((J,Z)=>{Oe.fillText(J,Re/2,g+Z*De)});const P=Oe.getImageData(0,0,Re,Pe).data,z=6,j=Math.min(ce/Re,fe/Pe)*(re?.95:.82),V=[];for(let J=0;J<Pe;J+=z)for(let Z=0;Z<Re;Z+=z)if(P[(J*Re+Z)*4+3]>10){const _=(Z-Re/2)*j,L=(Pe/2-J)*j,O=(Math.random()-.5)*50;V.push(_,L,O)}const Q=new Float32Array(V);return{positions:new Float32Array(Q),basePositions:Q}},ee=()=>{const ce=A.clientWidth,fe=A.clientHeight;v=new LM,T=new md(-ce/2,ce/2,fe/2,-fe/2,1,1e3),T.position.z=400,U=new PM({antialias:!0,alpha:!0}),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.setSize(ce,fe),U.setClearColor(0,0),A.innerHTML="",A.appendChild(U.domElement);const Te=H(ce,fe);y=Te.positions,M=Te.basePositions,C=new zn,C.setAttribute("position",new jt(y,3));const Oe=new Sd({color:2278750,size:2.4,transparent:!0,opacity:.95});w=new DM(C,Oe),v.add(w)},ne=()=>{if(!C||!y||!M)return;const ce=A.clientWidth,fe=A.clientHeight,Te=Math.min(ce,fe)*.22,Oe=.08,te=18;for(let re=0;re<y.length;re+=3){const Me=M[re],xe=M[re+1],De=M[re+2];let Re=y[re]+(Me-y[re])*Oe,Pe=y[re+1]+(xe-y[re+1])*Oe,et=y[re+2]+(De-y[re+2])*Oe;if(D.active){const g=Re-D.x,P=Pe-D.y,z=Math.sqrt(g*g+P*P);if(z<Te&&z>.001){const j=(1-z/Te)*te;Re+=g/z*j,Pe+=P/z*j,et+=j*.15}}y[re]=Re,y[re+1]=Pe,y[re+2]=et}C.attributes.position.needsUpdate=!0},K=()=>{F=window.requestAnimationFrame(K),ne(),U.render(v,T)},$=ce=>{const fe=A.getBoundingClientRect();D.x=ce.clientX-fe.left-fe.width/2,D.y=-(ce.clientY-fe.top-fe.height/2),D.active=!0},G=()=>{D.active=!1},ge=()=>{if(!A||!T||!U)return;const ce=A.clientWidth,fe=A.clientHeight;T.left=-ce/2,T.right=ce/2,T.top=fe/2,T.bottom=-fe/2,T.updateProjectionMatrix(),U.setSize(ce,fe);const Te=H(ce,fe);y=Te.positions,M=Te.basePositions,C.setAttribute("position",new jt(y,3))};return ee(),K(),A.addEventListener("pointermove",$),A.addEventListener("pointerleave",G),window.addEventListener("resize",ge),window.ResizeObserver&&(R=new ResizeObserver(()=>{ge()}),R.observe(A)),()=>{window.removeEventListener("resize",ge),R&&(R.disconnect(),R=null),A.removeEventListener("pointermove",$),A.removeEventListener("pointerleave",G),F&&window.cancelAnimationFrame(F),C&&C.dispose(),w?.material&&w.material.dispose(),U&&(U.dispose(),U.domElement?.parentNode&&U.domElement.parentNode.removeChild(U.domElement)),v=null,T=null,U=null,C=null,w=null}};$s(()=>{o=l(),a=c()}),Tl(()=>{o&&o(),a&&a()});const c=()=>{const A=s.value;if(!A)return null;const v={x:0,y:0,active:!1,raf:0},T=10,U=()=>{v.raf=0;const F=A.getBoundingClientRect(),y=(v.x-F.left)/F.width,M=(v.y-F.top)/F.height,R=(.5-M)*T,D=(y-.5)*T;A.style.setProperty("--rx",`${R.toFixed(2)}deg`),A.style.setProperty("--ry",`${D.toFixed(2)}deg`),A.style.setProperty("--px",`${(y*100).toFixed(1)}%`),A.style.setProperty("--py",`${(M*100).toFixed(1)}%`),A.style.setProperty("--glow",v.active?"1":"0")},C=F=>{v.x=F.clientX,v.y=F.clientY,v.active=!0,v.raf||(v.raf=window.requestAnimationFrame(U))},w=()=>{v.active=!1,A.style.setProperty("--rx","0deg"),A.style.setProperty("--ry","0deg"),A.style.setProperty("--glow","0")};return A.addEventListener("pointermove",C),A.addEventListener("pointerleave",w),()=>{A.removeEventListener("pointermove",C),A.removeEventListener("pointerleave",w),v.raf&&window.cancelAnimationFrame(v.raf)}},u=A=>{typeof window<"u"&&window.open(A,"_blank")},f=Vn({name:"",email:"",subject:"",message:""}),d=Vn(!1),m=Vn(""),x=async()=>{if(!f.value.name||!f.value.email||!f.value.message){m.value="Please fill in all required fields.";return}d.value=!0,m.value="";try{await XM.send("service_92g0li6","template_44tna6r",{name:f.value.name,from_email:f.value.email,subject:f.value.subject||"Portfolio Contact",message:f.value.message,to_email:"engl.info95@gmail.com"},"k1AG8V5ZdhAyqvnoK"),m.value="Message sent successfully!",f.value={name:"",email:"",subject:"",message:""}}catch(A){m.value="Failed to send message. Please try again.",console.error("Email send error:",A)}finally{d.value=!1}},S=A=>{const v=document.getElementById(A);v&&v.scrollIntoView({behavior:"smooth"}),e.value=!1},p=()=>{i.value=!0},h=()=>{i.value=!1};return(A,v)=>(yi(),Fi("div",YM,[he("nav",KM,[he("div",jM,[he("div",$M,[he("div",ZM,[he("button",{onClick:v[0]||(v[0]=T=>e.value=!e.value),class:"text-white focus:outline-none","aria-label":"Toggle menu"},[e.value?(yi(),Fi("svg",QM,[...v[15]||(v[15]=[he("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(yi(),Fi("svg",JM,[...v[14]||(v[14]=[he("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))])]),he("div",eS,[he("a",{href:"#about",class:Dt(["transition duration-300 font-medium",t.value==="about"?"text-emerald-100":"text-white hover:text-lime-100"])},"About me",2),he("a",{href:"#experience",class:Dt(["transition duration-300 font-medium",t.value==="experience"?"text-emerald-100":"text-white hover:text-lime-100"])},"Professional Experience",2),he("a",{href:"#projects",class:Dt(["transition duration-300 font-medium",t.value==="projects"?"text-emerald-100":"text-white hover:text-lime-100"])},"Passion Projects",2),he("a",{href:"#education",class:Dt(["transition duration-300 font-medium",t.value==="education"?"text-emerald-100":"text-white hover:text-lime-100"])},"Education",2),he("a",{href:"#contact",class:Dt(["transition duration-300 font-medium",t.value==="contact"?"text-emerald-100":"text-white hover:text-lime-100"])},"Contact Me",2)])]),Pt(Bp,{name:"fade"},{default:of(()=>[e.value?(yi(),Fi("div",tS,[he("a",{href:"#about",onClick:v[1]||(v[1]=T=>S("about")),class:Dt(["transition duration-300 font-medium px-4",t.value==="about"?"text-emerald-100":"text-white hover:text-lime-100"])},"About me",2),he("a",{href:"#experience",onClick:v[2]||(v[2]=T=>S("experience")),class:Dt(["transition duration-300 font-medium px-4",t.value==="experience"?"text-emerald-100":"text-white hover:text-lime-100"])},"Professional Experience",2),he("a",{href:"#projects",onClick:v[3]||(v[3]=T=>S("projects")),class:Dt(["transition duration-300 font-medium px-4",t.value==="projects"?"text-emerald-100":"text-white hover:text-lime-100"])},"Passion Projects",2),he("a",{href:"#education",onClick:v[4]||(v[4]=T=>S("education")),class:Dt(["transition duration-300 font-medium px-4",t.value==="education"?"text-emerald-100":"text-white hover:text-lime-100"])},"Education",2),he("a",{href:"#contact",onClick:v[5]||(v[5]=T=>S("contact")),class:Dt(["transition duration-300 font-medium px-4",t.value==="contact"?"text-emerald-100":"text-white hover:text-lime-100"])},"Contact Me",2)])):Oo("",!0)]),_:1})])]),he("section",nS,[he("div",iS,[he("div",rS,[he("h1",{class:"sr-only"},Ns(Cu)),he("div",{ref_key:"pointCloudContainer",ref:r,class:"pointcloud-container w-full h-full"},null,512)]),he("div",{ref_key:"portraitContainer",ref:s,class:"portrait-shell mx-auto mb-6"},[...v[16]||(v[16]=[he("img",{src:hm,alt:"Constantin",class:"portrait-image"},null,-1),he("div",{class:"portrait-overlay","aria-hidden":"true"},null,-1)])],512),v[17]||(v[17]=he("p",{class:"text-xs sm:text-sm md:text-xl mb-3 md:mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"I am a Software Engineer with 5+ years of professional experience and a master’s degree in computer science. ",-1)),v[18]||(v[18]=he("p",{class:"text-xs sm:text-sm md:text-xl mb-3 md:mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"I specialize in full-stack web development and machine learning, with hands-on experience applying AI to real-world engineering problems. I combine a strong academic foundation with continuous, self-driven learning through personal projects.",-1)),v[19]||(v[19]=he("p",{class:"text-xs sm:text-sm md:text-xl mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"In addition, I have a strong passion for game development, where I enjoy combining creativity with technical problem-solving. I am driven by curiosity, continuous learning, and a desire to build intelligent systems that make a meaningful impact.",-1)),he("div",sS,[he("button",{class:"border-2 border-green-400 text-green-300 hover:bg-green-500 hover:text-black font-bold py-3 px-6 rounded-full transition duration-300",onClick:v[6]||(v[6]=T=>S("contact"))},"Contact Me")])])]),v[34]||(v[34]=Fo('<div class="w-full flex justify-center my-12" data-v-45083d15><div class="w-4/5 border-t border-gray-300" data-v-45083d15></div></div><section id="experience" class="min-h-screen flex items-center justify-center" data-v-45083d15><div class="max-w-none px-8 py-12" data-v-45083d15><h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900" data-v-45083d15>Professional Experience</h2><div class="space-y-6" data-v-45083d15><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-45083d15><img src="'+pm+'" alt="Infineon Technologies" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-45083d15><div class="flex-1" data-v-45083d15><h3 class="text-2xl font-semibold mb-2 text-gray-900" data-v-45083d15>Software Engineer</h3><p class="text-gray-700 mb-2" data-v-45083d15>Alten GmbH | October 2022 - November 2025</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-45083d15><li data-v-45083d15>Full stack web development (ASP.NET Core, Vue.js)</li><li data-v-45083d15>Classified 3D-CAD files using machine learning (PyTorch)</li><li data-v-45083d15>Developed tools to automate FEM simulations (Java, C#, Python, JavaScript)</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-45083d15><img src="'+mm+'" alt="Infineon Master Thesis" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-45083d15><div class="flex-1" data-v-45083d15><h3 class="text-2xl font-semibold mb-2" data-v-45083d15>Master Thesis</h3><p class="text-gray-700 mb-2" data-v-45083d15>Infineon Technologies AG | March 2022 – September 2022</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-45083d15><li data-v-45083d15>Evaluated and applied a container-based HPC framework</li><li data-v-45083d15>Linux shell scripting</li><li data-v-45083d15>Web development</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-45083d15><img src="'+gm+'" alt="Infineon Working Student" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-45083d15><div class="flex-1" data-v-45083d15><h3 class="text-2xl font-semibold mb-2" data-v-45083d15>Working Student</h3><p class="text-gray-700 mb-2" data-v-45083d15>Infineon Technologies AG | September 2020 – March 2022</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-45083d15><li data-v-45083d15>Developed tools related to FEM simulation for semiconductor packaging</li><li data-v-45083d15>Created and extended ASP.NET web applications</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-45083d15><img src="'+_m+'" alt="TGW Software Services" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-45083d15><div class="flex-1" data-v-45083d15><h3 class="text-2xl font-semibold mb-2" data-v-45083d15>Java Software Developer</h3><p class="text-gray-700 mb-2" data-v-45083d15>TGW Software Services GmbH | March 2019 – February 2020</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-45083d15><li data-v-45083d15>Estimated, implemented, and tested change requests for intralogistics software</li><li data-v-45083d15>Analyzed support tickets and fixed bugs</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-45083d15><img src="'+vm+'" alt="University Bachelor Thesis" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-45083d15><div class="flex-1" data-v-45083d15><h3 class="text-2xl font-semibold mb-2" data-v-45083d15>Bachelor Thesis</h3><p class="text-gray-700 mb-2" data-v-45083d15>University of Applied Sciences Regensburg | 2018</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-45083d15><li data-v-45083d15>Clustered and classified log data using machine learning (R)</li><li data-v-45083d15>Identified user profiles by their network traffic log data</li></ul></div></div></div></div></section><div class="w-full flex justify-center my-12" data-v-45083d15><div class="w-4/5 border-t border-gray-300" data-v-45083d15></div></div>',3)),he("section",oS,[he("div",aS,[v[26]||(v[26]=he("h2",{class:"text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"},"Passion Projects",-1)),he("div",lS,[he("div",{class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer",role:"button",tabindex:"0",onClick:p,onKeydown:[Cc(ls(p,["prevent"]),["enter"]),Cc(ls(p,["prevent"]),["space"])]},[...v[20]||(v[20]=[he("img",{src:xm,alt:"Tower Defense Game Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),he("h3",{class:"text-2xl font-semibold mb-2 text-gray-900"},"Tower Defense Game",-1),he("p",{class:"mb-4 text-gray-700"},"A 2D cartoon-style mobile game developed in Unity. This work-in-progress project combines strategic tower defense gameplay with nostalgic slicing mechanics.",-1),he("span",{class:"text-gray-500 italic"},"Repository coming soon",-1)])],40,cS),he("div",{onClick:v[7]||(v[7]=T=>u("https://github.com/ConstiE-dev/MAP_2025")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...v[21]||(v[21]=[he("img",{src:Mm,alt:"MAP 2025 Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),he("h3",{class:"text-2xl font-semibold mb-2"},"MAP 2025",-1),he("p",{class:"mb-4 text-gray-700"},"A Kaggle competition entry focused on natural language processing and fine-tuning state-of-the-art language models for a classification task.",-1),he("a",{href:"https://github.com/ConstiE-dev/MAP_2025",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])]),he("div",{onClick:v[8]||(v[8]=T=>u("https://github.com/ConstiE-dev/RNATransformer")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...v[22]||(v[22]=[he("img",{src:Sm,alt:"RNA Transformer Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),he("h3",{class:"text-2xl font-semibold mb-2"},"RNA Transformer",-1),he("p",{class:"mb-4 text-gray-700"},"A Kaggle competition entry featuring a from-scratch implementation of a basic transformer architecture to predict the 3D structure of RNA sequences.",-1),he("a",{href:"https://github.com/ConstiE-dev/RNATransformer",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])]),he("div",{onClick:v[9]||(v[9]=T=>u("https://github.com/ConstiE-dev/backpack-prediction")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...v[23]||(v[23]=[he("img",{src:ym,alt:"Backpack Prediction Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),he("h3",{class:"text-2xl font-semibold mb-2"},"Backpack Prediction",-1),he("p",{class:"mb-4 text-gray-700"},"A data science competition entry focused on predicting backpack prices based on a tabular dataset.",-1),he("a",{href:"https://github.com/ConstiE-dev/backpack-prediction",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])])]),i.value?(yi(),Fi("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4",role:"dialog","aria-modal":"true","aria-label":"Tower Defense Game Preview",onClick:ls(h,["self"])},[he("div",{class:"w-full max-w-4xl bg-black/80 border border-green-400/40 rounded-xl shadow-2xl p-4"},[he("div",{class:"flex items-center justify-between mb-3"},[v[24]||(v[24]=he("h3",{class:"text-lg md:text-xl font-semibold text-green-200"},"Preview",-1)),he("button",{class:"text-green-200 hover:text-white border border-green-400/40 rounded-full px-3 py-1 transition duration-200",onClick:h}," Close ")]),v[25]||(v[25]=he("video",{class:"w-full rounded-lg bg-black",src:Em,controls:"",autoplay:"",muted:"",loop:"",playsinline:""},null,-1))])])):Oo("",!0)])]),v[35]||(v[35]=Fo('<div class="w-full flex justify-center my-12" data-v-45083d15><div class="w-4/5 border-t border-gray-300" data-v-45083d15></div></div><section id="education" class="min-h-screen flex items-center justify-center" data-v-45083d15><div class="max-w-4xl px-4 py-12" data-v-45083d15><h2 class="text-4xl md:text-5xl font-bold mb-8 text-center" data-v-45083d15>Education</h2><br data-v-45083d15><div class="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-2xl" data-v-45083d15><div class="space-y-4" data-v-45083d15><div class="border-l-4 border-blue-400 pl-4" data-v-45083d15><h4 class="text-xl font-medium text-gray-900" data-v-45083d15>🎓 Master&#39;s in Computer Science</h4><p class="text-gray-700" data-v-45083d15>OTH Regensburg</p><p class="text-sm text-gray-500" data-v-45083d15>March 2020 – September 2022</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-45083d15><h4 class="text-xl font-medium text-gray-900" data-v-45083d15>🎓 Bachelor&#39;s in Computer Science</h4><p class="text-gray-700" data-v-45083d15>OTH Regensburg</p><p class="text-sm text-gray-500" data-v-45083d15>March 2015 – January 2019</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-45083d15><h4 class="text-xl font-medium text-gray-900" data-v-45083d15>🏫 General Qualification for University Entrance</h4><p class="text-gray-700" data-v-45083d15>Albertus-Magnus Gymnasium Regensburg</p><p class="text-sm text-gray-500" data-v-45083d15>October 2006 – August 2014</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-45083d15><h4 class="text-xl font-medium text-gray-900" data-v-45083d15>🏫 Elementary School</h4><p class="text-gray-700" data-v-45083d15>Grundschule Großberg</p><p class="text-sm text-gray-500" data-v-45083d15>October 2002 – August 2006</p></div></div></div></div></section><div class="w-full flex justify-center my-12" data-v-45083d15><div class="w-4/5 border-t border-gray-300" data-v-45083d15></div></div>',3)),he("section",uS,[he("div",fS,[v[33]||(v[33]=he("h2",{class:"text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"},"Contact Me",-1)),he("div",dS,[v[32]||(v[32]=Fo('<div class="flex-1 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col justify-center min-w-0" data-v-45083d15><h3 class="text-2xl font-semibold mb-4 text-center text-gray-900" data-v-45083d15>Get In Touch</h3><div class="text-center space-y-2" data-v-45083d15><p class="text-base text-gray-700 mb-2" data-v-45083d15>Feel free to reach out to me directly:</p><div class="flex flex-col sm:flex-row gap-2 justify-center items-center" data-v-45083d15><a href="mailto:engl.info95@gmail.com" class="inline-block bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105" data-v-45083d15> 📧 engl.info95@gmail.com </a><a href="https://www.linkedin.com/in/constantin-engl" target="_blank" class="inline-block bg-blue-700 hover:bg-blue-800 text-gray-50 font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105" data-v-45083d15> 💼 LinkedIn Profile </a></div></div></div>',1)),he("div",hS,[v[31]||(v[31]=he("h3",{class:"text-2xl font-semibold mb-4 text-center text-gray-900"},"Or Send a Message",-1)),he("form",{onSubmit:ls(x,["prevent"]),class:"space-y-4"},[he("div",pS,[he("div",null,[v[27]||(v[27]=he("label",{for:"name",class:"block text-sm font-medium text-gray-700 mb-1"},"Name *",-1)),ss(he("input",{"onUpdate:modelValue":v[10]||(v[10]=T=>f.value.name=T),type:"text",id:"name",required:"",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"Your name"},null,512),[[as,f.value.name]])]),he("div",null,[v[28]||(v[28]=he("label",{for:"email",class:"block text-sm font-medium text-gray-700 mb-1"},"Email *",-1)),ss(he("input",{"onUpdate:modelValue":v[11]||(v[11]=T=>f.value.email=T),type:"email",id:"email",required:"",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"your.email@example.com"},null,512),[[as,f.value.email]])])]),he("div",null,[v[29]||(v[29]=he("label",{for:"subject",class:"block text-sm font-medium text-gray-700 mb-1"},"Subject",-1)),ss(he("input",{"onUpdate:modelValue":v[12]||(v[12]=T=>f.value.subject=T),type:"text",id:"subject",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"What is this about?"},null,512),[[as,f.value.subject]])]),he("div",null,[v[30]||(v[30]=he("label",{for:"message",class:"block text-sm font-medium text-gray-700 mb-1"},"Message *",-1)),ss(he("textarea",{"onUpdate:modelValue":v[13]||(v[13]=T=>f.value.message=T),id:"message",required:"",rows:"4",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-vertical",placeholder:"Tell me about your project or inquiry."},null,512),[[as,f.value.message]])]),he("div",mS,[he("button",{type:"submit",disabled:d.value,class:"bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-gray-50 font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"},Ns(d.value?"Sending...":"Send Message"),9,gS),m.value?(yi(),Fi("p",{key:0,class:Dt(["text-sm",m.value.includes("successfully")?"text-green-400":"text-red-400"])},Ns(m.value),3)):Oo("",!0)])],32)])])])])]))}},vS=qM(_S,[["__scopeId","data-v-45083d15"]]);um(vS).mount("#app");
