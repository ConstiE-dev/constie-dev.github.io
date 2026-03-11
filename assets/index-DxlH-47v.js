(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function fl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},rr=[],_n=()=>{},Lu=()=>!1,co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),dl=n=>n.startsWith("onUpdate:"),_t=Object.assign,hl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Fd=Object.prototype.hasOwnProperty,Ke=(n,e)=>Fd.call(n,e),Oe=Array.isArray,sr=n=>uo(n)==="[object Map]",Du=n=>uo(n)==="[object Set]",He=n=>typeof n=="function",dt=n=>typeof n=="string",ci=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Iu=n=>(st(n)||He(n))&&He(n.then)&&He(n.catch),Uu=Object.prototype.toString,uo=n=>Uu.call(n),Od=n=>uo(n).slice(8,-1),Nu=n=>uo(n)==="[object Object]",pl=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Bd=/-\w/g,ri=fo(n=>n.replace(Bd,e=>e.slice(1).toUpperCase())),zd=/\B([A-Z])/g,Ui=fo(n=>n.replace(zd,"-$1").toLowerCase()),Fu=fo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ro=fo(n=>n?`on${Fu(n)}`:""),ti=(n,e)=>!Object.is(n,e),Ns=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ou=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ml=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Hd=n=>{const e=dt(n)?Number(n):NaN;return isNaN(e)?n:e};let jl;const ho=()=>jl||(jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gl(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Wd(i):gl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||st(n))return n}const Vd=/;(?![^(]*\))/g,kd=/:([^]+)/,Gd=/\/\*[^]*?\*\//g;function Wd(n){const e={};return n.replace(Gd,"").split(Vd).forEach(t=>{if(t){const i=t.split(kd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(n){let e="";if(dt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=Dt(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Xd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qd=fl(Xd);function Bu(n){return!!n||n===""}const zu=n=>!!(n&&n.__v_isRef===!0),Fs=n=>dt(n)?n:n==null?"":Oe(n)||st(n)&&(n.toString===Uu||!He(n.toString))?zu(n)?Fs(n.value):JSON.stringify(n,Hu,2):String(n),Hu=(n,e)=>zu(e)?Hu(n,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Po(i,s)+" =>"]=r,t),{})}:Du(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Po(t))}:ci(e)?Po(e):st(e)&&!Oe(e)&&!Nu(e)?String(e):e,Po=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let It;class Yd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function $d(){return It}let it;const Lo=new WeakSet;class Vu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lo.has(this)&&(Lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kl(this),Wu(this);const e=it,t=on;it=this,on=!0;try{return this.fn()}finally{Xu(this),it=e,on=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xl(e);this.deps=this.depsTail=void 0,Kl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_a(this)&&this.run()}get dirty(){return _a(this)}}let ku=0,Lr,Dr;function Gu(n,e=!1){if(n.flags|=8,e){n.next=Dr,Dr=n;return}n.next=Lr,Lr=n}function _l(){ku++}function vl(){if(--ku>0)return;if(Dr){let e=Dr;for(Dr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Lr;){let e=Lr;for(Lr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Wu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),xl(i),jd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function _a(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_a(n))))return;n.flags|=2;const e=n.dep,t=it,i=on;it=n,on=!0;try{Wu(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,on=i,Xu(n),n.flags&=-3}}function xl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)xl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function jd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let on=!0;const Yu=[];function Fn(){Yu.push(on),on=!1}function On(){const n=Yu.pop();on=n===void 0?!0:n}function Kl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Br=0;class Kd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ml{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!on||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Kd(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,$u(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Br++,this.notify(e)}notify(e){_l();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{vl()}}}function $u(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)$u(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const va=new WeakMap,Pi=Symbol(""),xa=Symbol(""),zr=Symbol("");function bt(n,e,t){if(on&&it){let i=va.get(n);i||va.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ml),r.map=i,r.key=t),r.track()}}function Pn(n,e,t,i,r,s){const o=va.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(_l(),e==="clear")o.forEach(a);else{const l=Oe(n),c=l&&pl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===zr||!ci(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Pi)),sr(n)&&a(o.get(xa)));break;case"delete":l||(a(o.get(Pi)),sr(n)&&a(o.get(xa)));break;case"set":sr(n)&&a(o.get(Pi));break}}vl()}function Fi(n){const e=Xe(n);return e===n?e:(bt(e,"iterate",zr),an(n)?e:e.map(Bn))}function Sl(n){return bt(n=Xe(n),"iterate",zr),n}function Zn(n,e){return si(n)?Hr(or(n)?Bn(e):e):Bn(e)}const Zd={__proto__:null,[Symbol.iterator](){return Do(this,Symbol.iterator,n=>Zn(this,n))},concat(...n){return Fi(this).concat(...n.map(e=>Oe(e)?Fi(e):e))},entries(){return Do(this,"entries",n=>(n[1]=Zn(this,n[1]),n))},every(n,e){return xn(this,"every",n,e,void 0,arguments)},filter(n,e){return xn(this,"filter",n,e,t=>t.map(i=>Zn(this,i)),arguments)},find(n,e){return xn(this,"find",n,e,t=>Zn(this,t),arguments)},findIndex(n,e){return xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return xn(this,"findLast",n,e,t=>Zn(this,t),arguments)},findLastIndex(n,e){return xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Io(this,"includes",n)},indexOf(...n){return Io(this,"indexOf",n)},join(n){return Fi(this).join(n)},lastIndexOf(...n){return Io(this,"lastIndexOf",n)},map(n,e){return xn(this,"map",n,e,void 0,arguments)},pop(){return xr(this,"pop")},push(...n){return xr(this,"push",n)},reduce(n,...e){return Zl(this,"reduce",n,e)},reduceRight(n,...e){return Zl(this,"reduceRight",n,e)},shift(){return xr(this,"shift")},some(n,e){return xn(this,"some",n,e,void 0,arguments)},splice(...n){return xr(this,"splice",n)},toReversed(){return Fi(this).toReversed()},toSorted(n){return Fi(this).toSorted(n)},toSpliced(...n){return Fi(this).toSpliced(...n)},unshift(...n){return xr(this,"unshift",n)},values(){return Do(this,"values",n=>Zn(this,n))}};function Do(n,e,t){const i=Sl(n),r=i[e]();return i!==n&&!an(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Jd=Array.prototype;function xn(n,e,t,i,r,s){const o=Sl(n),a=o!==n&&!an(n),l=o[e];if(l!==Jd[e]){const f=l.apply(n,s);return a?Bn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Zn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Zl(n,e,t,i){const r=Sl(n);let s=t;return r!==n&&(an(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Zn(n,a),l,n)}),r[e](s,...i)}function Io(n,e,t){const i=Xe(n);bt(i,"iterate",zr);const r=i[e](...t);return(r===-1||r===!1)&&Tl(t[0])?(t[0]=Xe(t[0]),i[e](...t)):r}function xr(n,e,t=[]){Fn(),_l();const i=Xe(n)[e].apply(n,t);return vl(),On(),i}const Qd=fl("__proto__,__v_isRef,__isVue"),ju=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function eh(n){ci(n)||(n=String(n));const e=Xe(this);return bt(e,"has",n),e.hasOwnProperty(n)}class Ku{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?uh:ef:s?Qu:Ju).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!r){let l;if(o&&(l=Zd[t]))return l;if(t==="hasOwnProperty")return eh}const a=Reflect.get(e,t,Et(e)?e:i);if((ci(t)?ju.has(t):Qd(t))||(r||bt(e,"get",t),s))return a;if(Et(a)){const l=o&&pl(t)?a:a.value;return r&&st(l)?Sa(l):l}return st(a)?r?Sa(a):bl(a):a}}class Zu extends Ku{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Oe(e)&&pl(t);if(!this._isShallow){const c=si(s);if(!an(i)&&!si(i)&&(s=Xe(s),i=Xe(i)),!o&&Et(s)&&!Et(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Ke(e,t),l=Reflect.set(e,t,i,Et(e)?e:r);return e===Xe(r)&&(a?ti(i,s)&&Pn(e,"set",t,i):Pn(e,"add",t,i)),l}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Pn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!ju.has(t))&&bt(e,"has",t),i}ownKeys(e){return bt(e,"iterate",Oe(e)?"length":Pi),Reflect.ownKeys(e)}}class th extends Ku{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const nh=new Zu,ih=new th,rh=new Zu(!0);const Ma=n=>n,rs=n=>Reflect.getPrototypeOf(n);function sh(n,e,t){return function(...i){const r=this.__v_raw,s=Xe(r),o=sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ma:e?Hr:Bn;return!e&&bt(s,"iterate",l?xa:Pi),_t(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function ss(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function oh(n,e){const t={get(r){const s=this.__v_raw,o=Xe(s),a=Xe(r);n||(ti(r,a)&&bt(o,"get",r),bt(o,"get",a));const{has:l}=rs(o),c=e?Ma:n?Hr:Bn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bt(Xe(r),"iterate",Pi),r.size},has(r){const s=this.__v_raw,o=Xe(s),a=Xe(r);return n||(ti(r,a)&&bt(o,"has",r),bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Xe(a),c=e?Ma:n?Hr:Bn;return!n&&bt(l,"iterate",Pi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return _t(t,n?{add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear")}:{add(r){!e&&!an(r)&&!si(r)&&(r=Xe(r));const s=Xe(this);return rs(s).has.call(s,r)||(s.add(r),Pn(s,"add",r,r)),this},set(r,s){!e&&!an(s)&&!si(s)&&(s=Xe(s));const o=Xe(this),{has:a,get:l}=rs(o);let c=a.call(o,r);c||(r=Xe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ti(s,u)&&Pn(o,"set",r,s):Pn(o,"add",r,s),this},delete(r){const s=Xe(this),{has:o,get:a}=rs(s);let l=o.call(s,r);l||(r=Xe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Pn(s,"delete",r,void 0),c},clear(){const r=Xe(this),s=r.size!==0,o=r.clear();return s&&Pn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=sh(r,n,e)}),t}function yl(n,e){const t=oh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const ah={get:yl(!1,!1)},lh={get:yl(!1,!0)},ch={get:yl(!0,!1)};const Ju=new WeakMap,Qu=new WeakMap,ef=new WeakMap,uh=new WeakMap;function fh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dh(n){return n.__v_skip||!Object.isExtensible(n)?0:fh(Od(n))}function bl(n){return si(n)?n:El(n,!1,nh,ah,Ju)}function hh(n){return El(n,!1,rh,lh,Qu)}function Sa(n){return El(n,!0,ih,ch,ef)}function El(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=dh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function or(n){return si(n)?or(n.__v_raw):!!(n&&n.__v_isReactive)}function si(n){return!!(n&&n.__v_isReadonly)}function an(n){return!!(n&&n.__v_isShallow)}function Tl(n){return n?!!n.__v_raw:!1}function Xe(n){const e=n&&n.__v_raw;return e?Xe(e):n}function ph(n){return!Ke(n,"__v_skip")&&Object.isExtensible(n)&&Ou(n,"__v_skip",!0),n}const Bn=n=>st(n)?bl(n):n,Hr=n=>st(n)?Sa(n):n;function Et(n){return n?n.__v_isRef===!0:!1}function un(n){return mh(n,!1)}function mh(n,e){return Et(n)?n:new gh(n,e)}class gh{constructor(e,t){this.dep=new Ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Xe(e),this._value=t?e:Bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||an(e)||si(e);e=i?e:Xe(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:Bn(e),this.dep.trigger())}}function _h(n){return Et(n)?n.value:n}const vh={get:(n,e,t)=>e==="__v_raw"?n:_h(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Et(r)&&!Et(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function tf(n){return or(n)?n:new Proxy(n,vh)}class xh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Gu(this,!0),!0}get value(){const e=this.dep.track();return qu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mh(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new xh(i,r,t)}const os={},$s=new WeakMap;let yi;function Sh(n,e=!1,t=yi){if(t){let i=$s.get(t);i||$s.set(t,i=[]),i.push(n)}}function yh(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=T=>r?T:an(T)||r===!1||r===0?Ln(T,1):Ln(T);let u,f,d,m,v=!1,S=!1;if(Et(n)?(f=()=>n.value,v=an(n)):or(n)?(f=()=>c(n),v=!0):Oe(n)?(S=!0,v=n.some(T=>or(T)||an(T)),f=()=>n.map(T=>{if(Et(T))return T.value;if(or(T))return c(T);if(He(T))return l?l(T,2):T()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Fn();try{d()}finally{On()}}const T=yi;yi=u;try{return l?l(n,3,[m]):n(m)}finally{yi=T}}:f=_n,e&&r){const T=f,z=r===!0?1/0:r;f=()=>Ln(T(),z)}const p=$d(),h=()=>{u.stop(),p&&p.active&&hl(p.effects,u)};if(s&&e){const T=e;e=(...z)=>{T(...z),h()}}let C=S?new Array(n.length).fill(os):os;const E=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const z=u.run();if(r||v||(S?z.some((D,w)=>ti(D,C[w])):ti(z,C))){d&&d();const D=yi;yi=u;try{const w=[z,C===os?void 0:S&&C[0]===os?[]:C,m];C=z,l?l(e,3,w):e(...w)}finally{yi=D}}}else u.run()};return a&&a(E),u=new Vu(f),u.scheduler=o?()=>o(E,!1):E,m=T=>Sh(T,!1,u),d=u.onStop=()=>{const T=$s.get(u);if(T){if(l)l(T,4);else for(const z of T)z();$s.delete(u)}},e?i?E(!0):C=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Ln(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Et(n))Ln(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)Ln(n[i],e,t);else if(Du(n)||sr(n))n.forEach(i=>{Ln(i,e,t)});else if(Nu(n)){for(const i in n)Ln(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ln(n[i],e,t)}return n}function Yr(n,e,t,i){try{return i?n(...i):n()}catch(r){po(r,e,t)}}function ln(n,e,t,i){if(He(n)){const r=Yr(n,e,t,i);return r&&Iu(r)&&r.catch(s=>{po(s,e,t)}),r}if(Oe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ln(n[s],e,t,i));return r}}function po(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Fn(),Yr(s,null,10,[n,l,c]),On();return}}bh(n,t,r,i,o)}function bh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const wt=[];let dn=-1;const ar=[];let Jn=null,tr=0;const nf=Promise.resolve();let js=null;function Eh(n){const e=js||nf;return n?e.then(this?n.bind(this):n):e}function Th(n){let e=dn+1,t=wt.length;for(;e<t;){const i=e+t>>>1,r=wt[i],s=Vr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Al(n){if(!(n.flags&1)){const e=Vr(n),t=wt[wt.length-1];!t||!(n.flags&2)&&e>=Vr(t)?wt.push(n):wt.splice(Th(e),0,n),n.flags|=1,rf()}}function rf(){js||(js=nf.then(of))}function Ah(n){Oe(n)?ar.push(...n):Jn&&n.id===-1?Jn.splice(tr+1,0,n):n.flags&1||(ar.push(n),n.flags|=1),rf()}function Jl(n,e,t=dn+1){for(;t<wt.length;t++){const i=wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function sf(n){if(ar.length){const e=[...new Set(ar)].sort((t,i)=>Vr(t)-Vr(i));if(ar.length=0,Jn){Jn.push(...e);return}for(Jn=e,tr=0;tr<Jn.length;tr++){const t=Jn[tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Jn=null,tr=0}}const Vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function of(n){try{for(dn=0;dn<wt.length;dn++){const e=wt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<wt.length;dn++){const e=wt[dn];e&&(e.flags&=-2)}dn=-1,wt.length=0,sf(),js=null,(wt.length||ar.length)&&of()}}let $t=null,af=null;function Ks(n){const e=$t;return $t=n,af=n&&n.type.__scopeId||null,e}function lf(n,e=$t,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&eo(-1);const s=Ks(e);let o;try{o=n(...r)}finally{Ks(s),i._d&&eo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function as(n,e){if($t===null)return n;const t=xo($t),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=nt]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&Ln(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function di(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Fn(),ln(l,t,8,[n.el,a,n,e]),On())}}function wh(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function Os(n,e,t=!1){const i=Bf();if(i||lr){let r=lr?lr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const Ch=Symbol.for("v-scx"),Rh=()=>Os(Ch);function Uo(n,e,t){return cf(n,e,t)}function cf(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:o}=t,a=_t({},t),l=e&&i||!e&&s!=="post";let c;if(Wr){if(s==="sync"){const m=Rh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=_n,m.resume=_n,m.pause=_n,m}}const u=Rt;a.call=(m,v,S)=>ln(m,u,v,S);let f=!1;s==="post"?a.scheduler=m=>{kt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():Al(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=yh(n,e,a);return Wr&&(c?c.push(d):l&&d()),d}function Ph(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?uf(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=$r(this),a=cf(r,s.bind(i),t);return o(),a}function uf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Lh=Symbol("_vte"),ff=n=>n.__isTeleport,Rn=Symbol("_leaveCb"),ls=Symbol("_enterCb");function Dh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Js(()=>{n.isMounted=!0}),wl(()=>{n.isUnmounting=!0}),n}const Xt=[Function,Array],df={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},hf=n=>{const e=n.subTree;return e.component?hf(e.component):e},Ih={name:"BaseTransition",props:df,setup(n,{slots:e}){const t=Bf(),i=Dh();return()=>{const r=e.default&&gf(e.default(),!0);if(!r||!r.length)return;const s=pf(r),o=Xe(n),{mode:a}=o;if(i.isLeaving)return No(s);const l=Ql(s);if(!l)return No(s);let c=ya(l,o,i,t,f=>c=f);l.type!==Ct&&kr(l,c);let u=t.subTree&&Ql(t.subTree);if(u&&u.type!==Ct&&!Ti(u,l)&&hf(t).type!==Ct){let f=ya(u,o,i,t);if(kr(u,f),a==="out-in"&&l.type!==Ct)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},No(s);a==="in-out"&&l.type!==Ct?f.delayLeave=(d,m,v)=>{const S=mf(i,u);S[String(u.key)]=u,d[Rn]=()=>{m(),d[Rn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function pf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ct){e=t;break}}return e}const Uh=Ih;function mf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ya(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:v,onLeaveCancelled:S,onBeforeAppear:p,onAppear:h,onAfterAppear:C,onAppearCancelled:E}=e,T=String(n.key),z=mf(t,n),D=(M,x)=>{M&&ln(M,i,9,x)},w=(M,x)=>{const R=x[1];D(M,x),Oe(M)?M.every(U=>U.length<=1)&&R():M.length<=1&&R()},A={mode:o,persisted:a,beforeEnter(M){let x=l;if(!t.isMounted)if(s)x=p||l;else return;M[Rn]&&M[Rn](!0);const R=z[T];R&&Ti(n,R)&&R.el[Rn]&&R.el[Rn](),D(x,[M])},enter(M){let x=c,R=u,U=f;if(!t.isMounted)if(s)x=h||c,R=C||u,U=E||f;else return;let O=!1;const q=M[ls]=ee=>{O||(O=!0,ee?D(U,[M]):D(R,[M]),A.delayedLeave&&A.delayedLeave(),M[ls]=void 0)};x?w(x,[M,q]):q()},leave(M,x){const R=String(n.key);if(M[ls]&&M[ls](!0),t.isUnmounting)return x();D(d,[M]);let U=!1;const O=M[Rn]=q=>{U||(U=!0,x(),q?D(S,[M]):D(v,[M]),M[Rn]=void 0,z[R]===n&&delete z[R])};z[R]=n,m?w(m,[M,O]):O()},clone(M){const x=ya(M,e,t,i,r);return r&&r(x),x}};return A}function No(n){if(mo(n))return n=oi(n),n.children=null,n}function Ql(n){if(!mo(n))return ff(n.type)&&n.children?pf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function kr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,kr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function gf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===tn?(o.patchFlag&128&&r++,i=i.concat(gf(o.children,e,a))):(e||o.type!==Ct)&&i.push(a!=null?oi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function _f(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Zs=new WeakMap;function Ir(n,e,t,i,r=!1){if(Oe(n)){n.forEach((v,S)=>Ir(v,e&&(Oe(e)?e[S]:e),t,i,r));return}if(Ur(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?xo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState,d=Xe(f),m=f===nt?Lu:v=>Ke(d,v);if(c!=null&&c!==l){if(ec(e),dt(c))u[c]=null,m(c)&&(f[c]=null);else if(Et(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if(He(l))Yr(l,a,12,[o,u]);else{const v=dt(l),S=Et(l);if(v||S){const p=()=>{if(n.f){const h=v?m(l)?f[l]:u[l]:l.value;if(r)Oe(h)&&hl(h,s);else if(Oe(h))h.includes(s)||h.push(s);else if(v)u[l]=[s],m(l)&&(f[l]=u[l]);else{const C=[s];l.value=C,n.k&&(u[n.k]=C)}}else v?(u[l]=o,m(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{p(),Zs.delete(n)};h.id=-1,Zs.set(n,h),kt(h,t)}else ec(n),p()}}}function ec(n){const e=Zs.get(n);e&&(e.flags|=8,Zs.delete(n))}ho().requestIdleCallback;ho().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,mo=n=>n.type.__isKeepAlive;function Nh(n,e){vf(n,"a",e)}function Fh(n,e){vf(n,"da",e)}function vf(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(go(e,i,t),t){let r=t.parent;for(;r&&r.parent;)mo(r.parent.vnode)&&Oh(i,e,t,r),r=r.parent}}function Oh(n,e,t,i){const r=go(e,n,i,!0);xf(()=>{hl(i[e],r)},t)}function go(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Fn();const a=$r(t),l=ln(e,t,n,o);return a(),On(),l});return i?r.unshift(s):r.push(s),s}}const Vn=n=>(e,t=Rt)=>{(!Wr||n==="sp")&&go(n,(...i)=>e(...i),t)},Bh=Vn("bm"),Js=Vn("m"),zh=Vn("bu"),Hh=Vn("u"),wl=Vn("bum"),xf=Vn("um"),Vh=Vn("sp"),kh=Vn("rtg"),Gh=Vn("rtc");function Wh(n,e=Rt){go("ec",n,e)}const Xh=Symbol.for("v-ndc"),ba=n=>n?zf(n)?xo(n):ba(n.parent):null,Nr=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ba(n.parent),$root:n=>ba(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sf(n),$forceUpdate:n=>n.f||(n.f=()=>{Al(n.update)}),$nextTick:n=>n.n||(n.n=Eh.bind(n.proxy)),$watch:n=>Ph.bind(n)}),Fo=(n,e)=>n!==nt&&!n.__isScriptSetup&&Ke(n,e),qh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Fo(i,e))return o[e]=1,i[e];if(r!==nt&&Ke(r,e))return o[e]=2,r[e];if(Ke(s,e))return o[e]=3,s[e];if(t!==nt&&Ke(t,e))return o[e]=4,t[e];Ea&&(o[e]=0)}}const c=Nr[e];let u,f;if(c)return e==="$attrs"&&bt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==nt&&Ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Fo(r,e)?(r[e]=t,!0):i!==nt&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==nt&&a[0]!=="$"&&Ke(n,a)||Fo(e,a)||Ke(s,a)||Ke(i,a)||Ke(Nr,a)||Ke(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function tc(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ea=!0;function Yh(n){const e=Sf(n),t=n.proxy,i=n.ctx;Ea=!1,e.beforeCreate&&nc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:S,deactivated:p,beforeDestroy:h,beforeUnmount:C,destroyed:E,unmounted:T,render:z,renderTracked:D,renderTriggered:w,errorCaptured:A,serverPrefetch:M,expose:x,inheritAttrs:R,components:U,directives:O,filters:q}=e;if(c&&$h(c,i,null),o)for(const Y in o){const G=o[Y];He(G)&&(i[Y]=G.bind(t))}if(r){const Y=r.call(t,t);st(Y)&&(n.data=bl(Y))}if(Ea=!0,s)for(const Y in s){const G=s[Y],pe=He(G)?G.bind(t,t):He(G.get)?G.get.bind(t,t):_n,_e=!He(G)&&He(G.set)?G.set.bind(t):_n,ye=Pp({get:pe,set:_e});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>ye.value,set:De=>ye.value=De})}if(a)for(const Y in a)Mf(a[Y],i,t,Y);if(l){const Y=He(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(G=>{wh(G,Y[G])})}u&&nc(u,n,"c");function J(Y,G){Oe(G)?G.forEach(pe=>Y(pe.bind(t))):G&&Y(G.bind(t))}if(J(Bh,f),J(Js,d),J(zh,m),J(Hh,v),J(Nh,S),J(Fh,p),J(Wh,A),J(Gh,D),J(kh,w),J(wl,C),J(xf,T),J(Vh,M),Oe(x))if(x.length){const Y=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(Y,G,{get:()=>t[G],set:pe=>t[G]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});z&&n.render===_n&&(n.render=z),R!=null&&(n.inheritAttrs=R),U&&(n.components=U),O&&(n.directives=O),M&&_f(n)}function $h(n,e,t=_n){Oe(n)&&(n=Ta(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=Os(r.from||i,r.default,!0):s=Os(r.from||i):s=Os(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function nc(n,e,t){ln(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Mf(n,e,t,i){let r=i.includes(".")?uf(t,i):()=>t[i];if(dt(n)){const s=e[n];He(s)&&Uo(r,s)}else if(He(n))Uo(r,n.bind(t));else if(st(n))if(Oe(n))n.forEach(s=>Mf(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Uo(r,s,n)}}function Sf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Qs(l,c,o,!0)),Qs(l,e,o)),st(e)&&s.set(e,l),l}function Qs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Qs(n,s,t,!0),r&&r.forEach(o=>Qs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=jh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const jh={data:ic,props:rc,emits:rc,methods:wr,computed:wr,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:wr,directives:wr,watch:Zh,provide:ic,inject:Kh};function ic(n,e){return e?n?function(){return _t(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Kh(n,e){return wr(Ta(n),Ta(e))}function Ta(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function wr(n,e){return n?_t(Object.create(null),n,e):e}function rc(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:_t(Object.create(null),tc(n),tc(e??{})):e}function Zh(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function yf(){return{app:null,config:{isNativeTag:Lu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jh=0;function Qh(n,e){return function(i,r=null){He(i)||(i=_t({},i)),r!=null&&!st(r)&&(r=null);const s=yf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Jh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Dp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||Pt(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,xo(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ln(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=lr;lr=c;try{return u()}finally{lr=f}}};return c}}let lr=null;const ep=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ri(e)}Modifiers`]||n[`${Ui(e)}Modifiers`];function tp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&ep(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>dt(u)?u.trim():u)),o.number&&(r=t.map(ml)));let a,l=i[a=Ro(e)]||i[a=Ro(ri(e))];!l&&s&&(l=i[a=Ro(Ui(e))]),l&&ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ln(c,n,6,r)}}const np=new WeakMap;function bf(n,e,t=!1){const i=t?np:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=bf(c,e,!0);u&&(a=!0,_t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>o[l]=null):_t(o,s),st(n)&&i.set(n,o),o)}function _o(n,e){return!n||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,Ui(e))||Ke(n,e))}function sc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:v,inheritAttrs:S}=n,p=Ks(n);let h,C;try{if(t.shapeFlag&4){const T=r||i,z=T;h=pn(c.call(z,T,u,f,m,d,v)),C=a}else{const T=e;h=pn(T.length>1?T(f,{attrs:a,slots:o,emit:l}):T(f,null)),C=e.props?a:ip(a)}}catch(T){Fr.length=0,po(T,n,1),h=Pt(Ct)}let E=h;if(C&&S!==!1){const T=Object.keys(C),{shapeFlag:z}=E;T.length&&z&7&&(s&&T.some(dl)&&(C=rp(C,s)),E=oi(E,C,!1,!0))}return t.dirs&&(E=oi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&kr(E,t.transition),h=E,Ks(p),h}const ip=n=>{let e;for(const t in n)(t==="class"||t==="style"||co(t))&&((e||(e={}))[t]=n[t]);return e},rp=(n,e)=>{const t={};for(const i in n)(!dl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function sp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?oc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!_o(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?oc(i,o,c):!0:!!o;return!1}function oc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!_o(t,s))return!0}return!1}function op({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ef={},Tf=()=>Object.create(Ef),Af=n=>Object.getPrototypeOf(n)===Ef;function ap(n,e,t,i=!1){const r={},s=Tf();n.propsDefaults=Object.create(null),wf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:hh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function lp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Xe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(_o(n.emitsOptions,d))continue;const m=e[d];if(l)if(Ke(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const v=ri(d);r[v]=Aa(l,a,v,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{wf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=Ui(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Aa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&Pn(n.attrs,"set","")}function wf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pr(l))continue;const c=e[l];let u;r&&Ke(r,u=ri(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:_o(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Xe(t),c=a||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Aa(r,l,f,c[f],n,!Ke(c,f))}}return o}function Aa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=$r(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ui(t))&&(i=!0))}return i}const cp=new WeakMap;function Cf(n,e,t=!1){const i=t?cp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[d,m]=Cf(f,e,!0);_t(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,rr),rr;if(Oe(s))for(let u=0;u<s.length;u++){const f=ri(s[u]);ac(f)&&(o[f]=nt)}else if(s)for(const u in s){const f=ri(u);if(ac(f)){const d=s[u],m=o[f]=Oe(d)||He(d)?{type:d}:_t({},d),v=m.type;let S=!1,p=!0;if(Oe(v))for(let h=0;h<v.length;++h){const C=v[h],E=He(C)&&C.name;if(E==="Boolean"){S=!0;break}else E==="String"&&(p=!1)}else S=He(v)&&v.name==="Boolean";m[0]=S,m[1]=p,(S||Ke(m,"default"))&&a.push(f)}}const c=[o,a];return st(n)&&i.set(n,c),c}function ac(n){return n[0]!=="$"&&!Pr(n)}const Cl=n=>n==="_"||n==="_ctx"||n==="$stable",Rl=n=>Oe(n)?n.map(pn):[pn(n)],up=(n,e,t)=>{if(e._n)return e;const i=lf((...r)=>Rl(e(...r)),t);return i._c=!1,i},Rf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Cl(r))continue;const s=n[r];if(He(s))e[r]=up(r,s,i);else if(s!=null){const o=Rl(s);e[r]=()=>o}}},Pf=(n,e)=>{const t=Rl(e);n.slots.default=()=>t},Lf=(n,e,t)=>{for(const i in e)(t||!Cl(i))&&(n[i]=e[i])},fp=(n,e,t)=>{const i=n.slots=Tf();if(n.vnode.shapeFlag&32){const r=e._;r?(Lf(i,e,t),t&&Ou(i,"_",r,!0)):Rf(e,i)}else e&&Pf(n,e)},dp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Lf(r,e,t):(s=!e.$stable,Rf(e,r)),o=e}else e&&(Pf(n,e),o={default:1});if(s)for(const a in r)!Cl(a)&&o[a]==null&&delete r[a]},kt=_p;function hp(n){return pp(n)}function pp(n,e){const t=ho();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=_n,insertStaticContent:v}=n,S=(_,L,H,te=null,V=null,X=null,j=void 0,Q=null,y=!!L.dynamicChildren)=>{if(_===L)return;_&&!Ti(_,L)&&(te=ve(_),De(_,V,X,!0),_=null),L.patchFlag===-2&&(y=!1,L.dynamicChildren=null);const{type:g,ref:P,shapeFlag:I}=L;switch(g){case vo:p(_,L,H,te);break;case Ct:h(_,L,H,te);break;case Bs:_==null&&C(L,H,te,j);break;case tn:U(_,L,H,te,V,X,j,Q,y);break;default:I&1?z(_,L,H,te,V,X,j,Q,y):I&6?O(_,L,H,te,V,X,j,Q,y):(I&64||I&128)&&g.process(_,L,H,te,V,X,j,Q,y,Be)}P!=null&&V?Ir(P,_&&_.ref,X,L||_,!L):P==null&&_&&_.ref!=null&&Ir(_.ref,null,X,_,!0)},p=(_,L,H,te)=>{if(_==null)i(L.el=a(L.children),H,te);else{const V=L.el=_.el;L.children!==_.children&&c(V,L.children)}},h=(_,L,H,te)=>{_==null?i(L.el=l(L.children||""),H,te):L.el=_.el},C=(_,L,H,te)=>{[_.el,_.anchor]=v(_.children,L,H,te,_.el,_.anchor)},E=({el:_,anchor:L},H,te)=>{let V;for(;_&&_!==L;)V=d(_),i(_,H,te),_=V;i(L,H,te)},T=({el:_,anchor:L})=>{let H;for(;_&&_!==L;)H=d(_),r(_),_=H;r(L)},z=(_,L,H,te,V,X,j,Q,y)=>{if(L.type==="svg"?j="svg":L.type==="math"&&(j="mathml"),_==null)D(L,H,te,V,X,j,Q,y);else{const g=_.el&&_.el._isVueCE?_.el:null;try{g&&g._beginPatch(),M(_,L,V,X,j,Q,y)}finally{g&&g._endPatch()}}},D=(_,L,H,te,V,X,j,Q)=>{let y,g;const{props:P,shapeFlag:I,transition:W,dirs:k}=_;if(y=_.el=o(_.type,X,P&&P.is,P),I&8?u(y,_.children):I&16&&A(_.children,y,null,te,V,Oo(_,X),j,Q),k&&di(_,null,te,"created"),w(y,_,_.scopeId,j,te),P){for(const ie in P)ie!=="value"&&!Pr(ie)&&s(y,ie,null,P[ie],X,te);"value"in P&&s(y,"value",null,P.value,X),(g=P.onVnodeBeforeMount)&&fn(g,te,_)}k&&di(_,null,te,"beforeMount");const ae=mp(V,W);ae&&W.beforeEnter(y),i(y,L,H),((g=P&&P.onVnodeMounted)||ae||k)&&kt(()=>{g&&fn(g,te,_),ae&&W.enter(y),k&&di(_,null,te,"mounted")},V)},w=(_,L,H,te,V)=>{if(H&&m(_,H),te)for(let X=0;X<te.length;X++)m(_,te[X]);if(V){let X=V.subTree;if(L===X||Nf(X.type)&&(X.ssContent===L||X.ssFallback===L)){const j=V.vnode;w(_,j,j.scopeId,j.slotScopeIds,V.parent)}}},A=(_,L,H,te,V,X,j,Q,y=0)=>{for(let g=y;g<_.length;g++){const P=_[g]=Q?Qn(_[g]):pn(_[g]);S(null,P,L,H,te,V,X,j,Q)}},M=(_,L,H,te,V,X,j)=>{const Q=L.el=_.el;let{patchFlag:y,dynamicChildren:g,dirs:P}=L;y|=_.patchFlag&16;const I=_.props||nt,W=L.props||nt;let k;if(H&&hi(H,!1),(k=W.onVnodeBeforeUpdate)&&fn(k,H,L,_),P&&di(L,_,H,"beforeUpdate"),H&&hi(H,!0),(I.innerHTML&&W.innerHTML==null||I.textContent&&W.textContent==null)&&u(Q,""),g?x(_.dynamicChildren,g,Q,H,te,Oo(L,V),X):j||G(_,L,Q,null,H,te,Oo(L,V),X,!1),y>0){if(y&16)R(Q,I,W,H,V);else if(y&2&&I.class!==W.class&&s(Q,"class",null,W.class,V),y&4&&s(Q,"style",I.style,W.style,V),y&8){const ae=L.dynamicProps;for(let ie=0;ie<ae.length;ie++){const oe=ae[ie],Ee=I[oe],se=W[oe];(se!==Ee||oe==="value")&&s(Q,oe,Ee,se,V,H)}}y&1&&_.children!==L.children&&u(Q,L.children)}else!j&&g==null&&R(Q,I,W,H,V);((k=W.onVnodeUpdated)||P)&&kt(()=>{k&&fn(k,H,L,_),P&&di(L,_,H,"updated")},te)},x=(_,L,H,te,V,X,j)=>{for(let Q=0;Q<L.length;Q++){const y=_[Q],g=L[Q],P=y.el&&(y.type===tn||!Ti(y,g)||y.shapeFlag&198)?f(y.el):H;S(y,g,P,null,te,V,X,j,!0)}},R=(_,L,H,te,V)=>{if(L!==H){if(L!==nt)for(const X in L)!Pr(X)&&!(X in H)&&s(_,X,L[X],null,V,te);for(const X in H){if(Pr(X))continue;const j=H[X],Q=L[X];j!==Q&&X!=="value"&&s(_,X,Q,j,V,te)}"value"in H&&s(_,"value",L.value,H.value,V)}},U=(_,L,H,te,V,X,j,Q,y)=>{const g=L.el=_?_.el:a(""),P=L.anchor=_?_.anchor:a("");let{patchFlag:I,dynamicChildren:W,slotScopeIds:k}=L;k&&(Q=Q?Q.concat(k):k),_==null?(i(g,H,te),i(P,H,te),A(L.children||[],H,P,V,X,j,Q,y)):I>0&&I&64&&W&&_.dynamicChildren&&_.dynamicChildren.length===W.length?(x(_.dynamicChildren,W,H,V,X,j,Q),(L.key!=null||V&&L===V.subTree)&&Df(_,L,!0)):G(_,L,H,P,V,X,j,Q,y)},O=(_,L,H,te,V,X,j,Q,y)=>{L.slotScopeIds=Q,_==null?L.shapeFlag&512?V.ctx.activate(L,H,te,j,y):q(L,H,te,V,X,j,y):ee(_,L,y)},q=(_,L,H,te,V,X,j)=>{const Q=_.component=Ep(_,te,V);if(mo(_)&&(Q.ctx.renderer=Be),Tp(Q,!1,j),Q.asyncDep){if(V&&V.registerDep(Q,J,j),!_.el){const y=Q.subTree=Pt(Ct);h(null,y,L,H),_.placeholder=y.el}}else J(Q,_,L,H,V,X,j)},ee=(_,L,H)=>{const te=L.component=_.component;if(sp(_,L,H))if(te.asyncDep&&!te.asyncResolved){Y(te,L,H);return}else te.next=L,te.update();else L.el=_.el,te.vnode=L},J=(_,L,H,te,V,X,j)=>{const Q=()=>{if(_.isMounted){let{next:I,bu:W,u:k,parent:ae,vnode:ie}=_;{const Pe=If(_);if(Pe){I&&(I.el=ie.el,Y(_,I,j)),Pe.asyncDep.then(()=>{_.isUnmounted||Q()});return}}let oe=I,Ee;hi(_,!1),I?(I.el=ie.el,Y(_,I,j)):I=ie,W&&Ns(W),(Ee=I.props&&I.props.onVnodeBeforeUpdate)&&fn(Ee,ae,I,ie),hi(_,!0);const se=sc(_),de=_.subTree;_.subTree=se,S(de,se,f(de.el),ve(de),_,V,X),I.el=se.el,oe===null&&op(_,se.el),k&&kt(k,V),(Ee=I.props&&I.props.onVnodeUpdated)&&kt(()=>fn(Ee,ae,I,ie),V)}else{let I;const{el:W,props:k}=L,{bm:ae,m:ie,parent:oe,root:Ee,type:se}=_,de=Ur(L);hi(_,!1),ae&&Ns(ae),!de&&(I=k&&k.onVnodeBeforeMount)&&fn(I,oe,L),hi(_,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(se);const Pe=_.subTree=sc(_);S(null,Pe,H,te,_,V,X),L.el=Pe.el}if(ie&&kt(ie,V),!de&&(I=k&&k.onVnodeMounted)){const Pe=L;kt(()=>fn(I,oe,Pe),V)}(L.shapeFlag&256||oe&&Ur(oe.vnode)&&oe.vnode.shapeFlag&256)&&_.a&&kt(_.a,V),_.isMounted=!0,L=H=te=null}};_.scope.on();const y=_.effect=new Vu(Q);_.scope.off();const g=_.update=y.run.bind(y),P=_.job=y.runIfDirty.bind(y);P.i=_,P.id=_.uid,y.scheduler=()=>Al(P),hi(_,!0),g()},Y=(_,L,H)=>{L.component=_;const te=_.vnode.props;_.vnode=L,_.next=null,lp(_,L.props,te,H),dp(_,L.children,H),Fn(),Jl(_),On()},G=(_,L,H,te,V,X,j,Q,y=!1)=>{const g=_&&_.children,P=_?_.shapeFlag:0,I=L.children,{patchFlag:W,shapeFlag:k}=L;if(W>0){if(W&128){_e(g,I,H,te,V,X,j,Q,y);return}else if(W&256){pe(g,I,H,te,V,X,j,Q,y);return}}k&8?(P&16&&xe(g,V,X),I!==g&&u(H,I)):P&16?k&16?_e(g,I,H,te,V,X,j,Q,y):xe(g,V,X,!0):(P&8&&u(H,""),k&16&&A(I,H,te,V,X,j,Q,y))},pe=(_,L,H,te,V,X,j,Q,y)=>{_=_||rr,L=L||rr;const g=_.length,P=L.length,I=Math.min(g,P);let W;for(W=0;W<I;W++){const k=L[W]=y?Qn(L[W]):pn(L[W]);S(_[W],k,H,null,V,X,j,Q,y)}g>P?xe(_,V,X,!0,!1,I):A(L,H,te,V,X,j,Q,y,I)},_e=(_,L,H,te,V,X,j,Q,y)=>{let g=0;const P=L.length;let I=_.length-1,W=P-1;for(;g<=I&&g<=W;){const k=_[g],ae=L[g]=y?Qn(L[g]):pn(L[g]);if(Ti(k,ae))S(k,ae,H,null,V,X,j,Q,y);else break;g++}for(;g<=I&&g<=W;){const k=_[I],ae=L[W]=y?Qn(L[W]):pn(L[W]);if(Ti(k,ae))S(k,ae,H,null,V,X,j,Q,y);else break;I--,W--}if(g>I){if(g<=W){const k=W+1,ae=k<P?L[k].el:te;for(;g<=W;)S(null,L[g]=y?Qn(L[g]):pn(L[g]),H,ae,V,X,j,Q,y),g++}}else if(g>W)for(;g<=I;)De(_[g],V,X,!0),g++;else{const k=g,ae=g,ie=new Map;for(g=ae;g<=W;g++){const be=L[g]=y?Qn(L[g]):pn(L[g]);be.key!=null&&ie.set(be.key,g)}let oe,Ee=0;const se=W-ae+1;let de=!1,Pe=0;const Re=new Array(se);for(g=0;g<se;g++)Re[g]=0;for(g=k;g<=I;g++){const be=_[g];if(Ee>=se){De(be,V,X,!0);continue}let we;if(be.key!=null)we=ie.get(be.key);else for(oe=ae;oe<=W;oe++)if(Re[oe-ae]===0&&Ti(be,L[oe])){we=oe;break}we===void 0?De(be,V,X,!0):(Re[we-ae]=g+1,we>=Pe?Pe=we:de=!0,S(be,L[we],H,null,V,X,j,Q,y),Ee++)}const Me=de?gp(Re):rr;for(oe=Me.length-1,g=se-1;g>=0;g--){const be=ae+g,we=L[be],tt=L[be+1],N=be+1<P?tt.el||Uf(tt):te;Re[g]===0?S(null,we,H,N,V,X,j,Q,y):de&&(oe<0||g!==Me[oe]?ye(we,H,N,2):oe--)}}},ye=(_,L,H,te,V=null)=>{const{el:X,type:j,transition:Q,children:y,shapeFlag:g}=_;if(g&6){ye(_.component.subTree,L,H,te);return}if(g&128){_.suspense.move(L,H,te);return}if(g&64){j.move(_,L,H,Be);return}if(j===tn){i(X,L,H);for(let I=0;I<y.length;I++)ye(y[I],L,H,te);i(_.anchor,L,H);return}if(j===Bs){E(_,L,H);return}if(te!==2&&g&1&&Q)if(te===0)Q.beforeEnter(X),i(X,L,H),kt(()=>Q.enter(X),V);else{const{leave:I,delayLeave:W,afterLeave:k}=Q,ae=()=>{_.ctx.isUnmounted?r(X):i(X,L,H)},ie=()=>{X._isLeaving&&X[Rn](!0),I(X,()=>{ae(),k&&k()})};W?W(X,ae,ie):ie()}else i(X,L,H)},De=(_,L,H,te=!1,V=!1)=>{const{type:X,props:j,ref:Q,children:y,dynamicChildren:g,shapeFlag:P,patchFlag:I,dirs:W,cacheIndex:k}=_;if(I===-2&&(V=!1),Q!=null&&(Fn(),Ir(Q,null,H,_,!0),On()),k!=null&&(L.renderCache[k]=void 0),P&256){L.ctx.deactivate(_);return}const ae=P&1&&W,ie=!Ur(_);let oe;if(ie&&(oe=j&&j.onVnodeBeforeUnmount)&&fn(oe,L,_),P&6)ue(_.component,H,te);else{if(P&128){_.suspense.unmount(H,te);return}ae&&di(_,null,L,"beforeUnmount"),P&64?_.type.remove(_,L,H,Be,te):g&&!g.hasOnce&&(X!==tn||I>0&&I&64)?xe(g,L,H,!1,!0):(X===tn&&I&384||!V&&P&16)&&xe(y,L,H),te&&Ge(_)}(ie&&(oe=j&&j.onVnodeUnmounted)||ae)&&kt(()=>{oe&&fn(oe,L,_),ae&&di(_,null,L,"unmounted")},H)},Ge=_=>{const{type:L,el:H,anchor:te,transition:V}=_;if(L===tn){ne(H,te);return}if(L===Bs){T(_);return}const X=()=>{r(H),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:j,delayLeave:Q}=V,y=()=>j(H,X);Q?Q(_.el,X,y):y()}else X()},ne=(_,L)=>{let H;for(;_!==L;)H=d(_),r(_),_=H;r(L)},ue=(_,L,H)=>{const{bum:te,scope:V,job:X,subTree:j,um:Q,m:y,a:g}=_;lc(y),lc(g),te&&Ns(te),V.stop(),X&&(X.flags|=8,De(j,_,L,H)),Q&&kt(Q,L),kt(()=>{_.isUnmounted=!0},L)},xe=(_,L,H,te=!1,V=!1,X=0)=>{for(let j=X;j<_.length;j++)De(_[j],L,H,te,V)},ve=_=>{if(_.shapeFlag&6)return ve(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const L=d(_.anchor||_.el),H=L&&L[Lh];return H?d(H):L};let Ie=!1;const ze=(_,L,H)=>{let te;_==null?L._vnode&&(De(L._vnode,null,null,!0),te=L._vnode.component):S(L._vnode||null,_,L,null,null,null,H),L._vnode=_,Ie||(Ie=!0,Jl(te),sf(),Ie=!1)},Be={p:S,um:De,m:ye,r:Ge,mt:q,mc:A,pc:G,pbc:x,n:ve,o:n};return{render:ze,hydrate:void 0,createApp:Qh(ze)}}function Oo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function mp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Df(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Qn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Df(o,a)),a.type===vo&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===tn?1:0)),a.type===Ct&&!a.el&&(a.el=o.el)}}function gp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function If(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:If(e)}function lc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Uf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Uf(e.subTree):null}const Nf=n=>n.__isSuspense;function _p(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Ah(n)}const tn=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Bs=Symbol.for("v-stc"),Fr=[];let Gt=null;function Yt(n=!1){Fr.push(Gt=n?null:[])}function vp(){Fr.pop(),Gt=Fr[Fr.length-1]||null}let Gr=1;function eo(n,e=!1){Gr+=n,n<0&&Gt&&e&&(Gt.hasOnce=!0)}function Ff(n){return n.dynamicChildren=Gr>0?Gt||rr:null,vp(),Gr>0&&Gt&&Gt.push(n),n}function wn(n,e,t,i,r,s){return Ff(ce(n,e,t,i,r,s,!0))}function wa(n,e,t,i,r){return Ff(Pt(n,e,t,i,r,!0))}function to(n){return n?n.__v_isVNode===!0:!1}function Ti(n,e){return n.type===e.type&&n.key===e.key}const Of=({key:n})=>n??null,zs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||Et(n)||He(n)?{i:$t,r:n,k:e,f:!!t}:n:null);function ce(n,e=null,t=null,i=0,r=null,s=n===tn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Of(e),ref:e&&zs(e),scopeId:af,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$t};return a?(Pl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Gr>0&&!o&&Gt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Gt.push(l),l}const Pt=xp;function xp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Xh)&&(n=Ct),to(n)){const a=oi(n,e,!0);return t&&Pl(a,t),Gr>0&&!s&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(n)]=a:Gt.push(a)),a.patchFlag=-2,a}if(Rp(n)&&(n=n.__vccOpts),e){e=Mp(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=Dt(a)),st(l)&&(Tl(l)&&!Oe(l)&&(l=_t({},l)),e.style=gl(l))}const o=dt(n)?1:Nf(n)?128:ff(n)?64:st(n)?4:He(n)?2:0;return ce(n,e,t,i,r,o,s,!0)}function Mp(n){return n?Tl(n)||Af(n)?_t({},n):n:null}function oi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Sp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Of(c),ref:e&&e.ref?t&&s?Oe(s)?s.concat(zs(e)):[s,zs(e)]:zs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&oi(n.ssContent),ssFallback:n.ssFallback&&oi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&kr(u,l.clone(u)),u}function Cr(n=" ",e=0){return Pt(vo,null,n,e)}function Hs(n,e){const t=Pt(Bs,null,n);return t.staticCount=e,t}function Oi(n="",e=!1){return e?(Yt(),wa(Ct,null,n)):Pt(Ct,null,n)}function pn(n){return n==null||typeof n=="boolean"?Pt(Ct):Oe(n)?Pt(tn,null,n.slice()):to(n)?Qn(n):Pt(vo,null,String(n))}function Qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:oi(n)}function Pl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Pl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Af(e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:$t},t=32):(e=String(e),i&64?(t=16,e=[Cr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Sp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(r==="style")e.style=gl([e.style,i.style]);else if(co(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function fn(n,e,t,i=null){ln(n,e,7,[t,i])}const yp=yf();let bp=0;function Ep(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||yp,s={uid:bp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cf(i,r),emitsOptions:bf(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=tp.bind(null,s),n.ce&&n.ce(s),s}let Rt=null;const Bf=()=>Rt||$t;let no,Ca;{const n=ho(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};no=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),Ca=e("__VUE_SSR_SETTERS__",t=>Wr=t)}const $r=n=>{const e=Rt;return no(n),n.scope.on(),()=>{n.scope.off(),no(e)}},cc=()=>{Rt&&Rt.scope.off(),no(null)};function zf(n){return n.vnode.shapeFlag&4}let Wr=!1;function Tp(n,e=!1,t=!1){e&&Ca(e);const{props:i,children:r}=n.vnode,s=zf(n);ap(n,i,s,e),fp(n,r,t||e);const o=s?Ap(n,e):void 0;return e&&Ca(!1),o}function Ap(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,qh);const{setup:i}=t;if(i){Fn();const r=n.setupContext=i.length>1?Cp(n):null,s=$r(n),o=Yr(i,n,0,[n.props,r]),a=Iu(o);if(On(),s(),(a||n.sp)&&!Ur(n)&&_f(n),a){if(o.then(cc,cc),e)return o.then(l=>{uc(n,l)}).catch(l=>{po(l,n,0)});n.asyncDep=o}else uc(n,o)}else Hf(n)}function uc(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=tf(e)),Hf(n)}function Hf(n,e,t){const i=n.type;n.render||(n.render=i.render||_n);{const r=$r(n);Fn();try{Yh(n)}finally{On(),r()}}}const wp={get(n,e){return bt(n,"get",""),n[e]}};function Cp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wp),slots:n.slots,emit:n.emit,expose:e}}function xo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(tf(ph(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Nr)return Nr[t](n)},has(e,t){return t in e||t in Nr}})):n.proxy}function Rp(n){return He(n)&&"__vccOpts"in n}const Pp=(n,e)=>Mh(n,e,Wr);function Lp(n,e,t){try{eo(-1);const i=arguments.length;return i===2?st(e)&&!Oe(e)?to(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&to(t)&&(t=[t]),Pt(n,e,t))}finally{eo(1)}}const Dp="3.5.27";let Ra;const fc=typeof window<"u"&&window.trustedTypes;if(fc)try{Ra=fc.createPolicy("vue",{createHTML:n=>n})}catch{}const Vf=Ra?n=>Ra.createHTML(n):n=>n,Ip="http://www.w3.org/2000/svg",Up="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,dc=Cn&&Cn.createElement("template"),Np={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Cn.createElementNS(Ip,n):e==="mathml"?Cn.createElementNS(Up,n):t?Cn.createElement(n,{is:t}):Cn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Cn.createTextNode(n),createComment:n=>Cn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Cn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{dc.innerHTML=Vf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=dc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Wn="transition",Mr="animation",Xr=Symbol("_vtc"),kf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fp=_t({},df,kf),Op=n=>(n.displayName="Transition",n.props=Fp,n),Bp=Op((n,{slots:e})=>Lp(Uh,zp(n),e)),pi=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},hc=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function zp(n){const e={};for(const U in n)U in kf||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,v=Hp(r),S=v&&v[0],p=v&&v[1],{onBeforeEnter:h,onEnter:C,onEnterCancelled:E,onLeave:T,onLeaveCancelled:z,onBeforeAppear:D=h,onAppear:w=C,onAppearCancelled:A=E}=e,M=(U,O,q,ee)=>{U._enterCancelled=ee,mi(U,O?u:a),mi(U,O?c:o),q&&q()},x=(U,O)=>{U._isLeaving=!1,mi(U,f),mi(U,m),mi(U,d),O&&O()},R=U=>(O,q)=>{const ee=U?w:C,J=()=>M(O,U,q);pi(ee,[O,J]),pc(()=>{mi(O,U?l:s),Mn(O,U?u:a),hc(ee)||mc(O,i,S,J)})};return _t(e,{onBeforeEnter(U){pi(h,[U]),Mn(U,s),Mn(U,o)},onBeforeAppear(U){pi(D,[U]),Mn(U,l),Mn(U,c)},onEnter:R(!1),onAppear:R(!0),onLeave(U,O){U._isLeaving=!0;const q=()=>x(U,O);Mn(U,f),U._enterCancelled?(Mn(U,d),vc(U)):(vc(U),Mn(U,d)),pc(()=>{U._isLeaving&&(mi(U,f),Mn(U,m),hc(T)||mc(U,i,p,q))}),pi(T,[U,q])},onEnterCancelled(U){M(U,!1,void 0,!0),pi(E,[U])},onAppearCancelled(U){M(U,!0,void 0,!0),pi(A,[U])},onLeaveCancelled(U){x(U),pi(z,[U])}})}function Hp(n){if(n==null)return null;if(st(n))return[Bo(n.enter),Bo(n.leave)];{const e=Bo(n);return[e,e]}}function Bo(n){return Hd(n)}function Mn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Xr]||(n[Xr]=new Set)).add(e)}function mi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Xr];t&&(t.delete(e),t.size||(n[Xr]=void 0))}function pc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Vp=0;function mc(n,e,t,i){const r=n._endId=++Vp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=kp(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function kp(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${Wn}Delay`),s=i(`${Wn}Duration`),o=gc(r,s),a=i(`${Mr}Delay`),l=i(`${Mr}Duration`),c=gc(a,l);let u=null,f=0,d=0;e===Wn?o>0&&(u=Wn,f=o,d=s.length):e===Mr?c>0&&(u=Mr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Wn:Mr:null,d=u?u===Wn?s.length:l.length:0);const m=u===Wn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Wn}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function gc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>_c(t)+_c(n[i])))}function _c(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function vc(n){return(n?n.ownerDocument:document).body.offsetHeight}function Gp(n,e,t){const i=n[Xr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xc=Symbol("_vod"),Wp=Symbol("_vsh"),Xp=Symbol(""),qp=/(?:^|;)\s*display\s*:/;function Yp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vs(i,a,"")}else for(const o in e)t[o]==null&&Vs(i,o,"");for(const o in t)o==="display"&&(s=!0),Vs(i,o,t[o])}else if(r){if(e!==t){const o=i[Xp];o&&(t+=";"+o),i.cssText=t,s=qp.test(t)}}else e&&n.removeAttribute("style");xc in n&&(n[xc]=s?i.display:"",n[Wp]&&(i.display="none"))}const Mc=/\s*!important$/;function Vs(n,e,t){if(Oe(t))t.forEach(i=>Vs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$p(n,e);Mc.test(t)?n.setProperty(Ui(i),t.replace(Mc,""),"important"):n[i]=t}}const Sc=["Webkit","Moz","ms"],zo={};function $p(n,e){const t=zo[e];if(t)return t;let i=ri(e);if(i!=="filter"&&i in n)return zo[e]=i;i=Fu(i);for(let r=0;r<Sc.length;r++){const s=Sc[r]+i;if(s in n)return zo[e]=s}return e}const yc="http://www.w3.org/1999/xlink";function bc(n,e,t,i,r,s=qd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(yc,e.slice(6,e.length)):n.setAttributeNS(yc,e,t):t==null||s&&!Bu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ci(t)?String(t):t)}function Ec(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Vf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Bu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function nr(n,e,t,i){n.addEventListener(e,t,i)}function jp(n,e,t,i){n.removeEventListener(e,t,i)}const Tc=Symbol("_vei");function Kp(n,e,t,i,r=null){const s=n[Tc]||(n[Tc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Zp(e);if(i){const c=s[e]=em(i,r);nr(n,a,c,l)}else o&&(jp(n,a,o,l),s[e]=void 0)}}const Ac=/(?:Once|Passive|Capture)$/;function Zp(n){let e;if(Ac.test(n)){e={};let i;for(;i=n.match(Ac);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ui(n.slice(2)),e]}let Ho=0;const Jp=Promise.resolve(),Qp=()=>Ho||(Jp.then(()=>Ho=0),Ho=Date.now());function em(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ln(tm(i,t.value),e,5,[i])};return t.value=n,t.attached=Qp(),t}function tm(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const wc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,nm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Gp(n,i,o):e==="style"?Yp(n,t,i):co(e)?dl(e)||Kp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):im(n,e,i,o))?(Ec(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!dt(i))?Ec(n,ri(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bc(n,e,i,o))};function im(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&wc(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wc(e)&&dt(t)?!1:e in n}const Cc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Oe(e)?t=>Ns(e,t):e};function rm(n){n.target.composing=!0}function Rc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vo=Symbol("_assign");function Pc(n,e,t){return e&&(n=n.trim()),t&&(n=ml(n)),n}const cs={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Vo]=Cc(r);const s=i||r.props&&r.props.type==="number";nr(n,e?"change":"input",o=>{o.target.composing||n[Vo](Pc(n.value,t,s))}),(t||s)&&nr(n,"change",()=>{n.value=Pc(n.value,t,s)}),e||(nr(n,"compositionstart",rm),nr(n,"compositionend",Rc),nr(n,"change",Rc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Vo]=Cc(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?ml(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},sm=["ctrl","shift","alt","meta"],om={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>sm.some(t=>n[`${t}Key`]&&!e.includes(t))},ko=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=om[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},am=_t({patchProp:nm},Np);let Lc;function lm(){return Lc||(Lc=hp(am))}const cm=((...n)=>{const e=lm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=fm(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,um(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function um(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fm(n){return dt(n)?document.querySelector(n):n}const dm="/portrait_ascii.png",hm="/neural.png",pm="/cloud.png",mm="/infineon.png",gm="/tgw.png",_m="/data.png",vm="/tower-defense-game.gif",xm="/MAP.png",Mm="/RNA.png",Sm="/backpack.png",ym="/game_preview.mp4";const Ll="167",bm=0,Dc=1,Em=2,Gf=1,Tm=2,An=3,ai=0,Nt=1,Dn=2,ni=0,cr=1,Ic=2,Uc=3,Nc=4,Am=5,Ai=100,wm=101,Cm=102,Rm=103,Pm=104,Lm=200,Dm=201,Im=202,Um=203,Pa=204,La=205,Nm=206,Fm=207,Om=208,Bm=209,zm=210,Hm=211,Vm=212,km=213,Gm=214,Wm=0,Xm=1,qm=2,io=3,Ym=4,$m=5,jm=6,Km=7,Wf=0,Zm=1,Jm=2,ii=0,Qm=1,eg=2,tg=3,ng=4,ig=5,rg=6,sg=7,Xf=300,dr=301,hr=302,Da=303,Ia=304,Mo=306,Ua=1e3,Ci=1001,Na=1002,jt=1003,og=1004,us=1005,rn=1006,Go=1007,Ri=1008,zn=1009,qf=1010,Yf=1011,qr=1012,Dl=1013,Di=1014,In=1015,jr=1016,Il=1017,Ul=1018,pr=1020,$f=35902,jf=1021,Kf=1022,sn=1023,Zf=1024,Jf=1025,ur=1026,mr=1027,Qf=1028,Nl=1029,ed=1030,Fl=1031,Ol=1033,ks=33776,Gs=33777,Ws=33778,Xs=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,Ha=36196,Va=37492,ka=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,$a=37813,ja=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,el=37819,tl=37820,nl=37821,qs=36492,il=36494,rl=36495,td=36283,sl=36284,ol=36285,al=36286,ag=3200,lg=3201,cg=0,ug=1,ei="",hn="srgb",ui="srgb-linear",Bl="display-p3",So="display-p3-linear",ro="linear",rt="srgb",so="rec709",oo="p3",Bi=7680,Fc=519,fg=512,dg=513,hg=514,nd=515,pg=516,mg=517,gg=518,_g=519,Oc=35044,Bc="300 es",Un=2e3,ao=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wo=Math.PI/180,ll=180/Math.PI;function Kr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function vg(n,e){return(n%e+e)%e}function Xo(n,e,t){return(1-t)*n+t*e}function Sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],S=r[0],p=r[3],h=r[6],C=r[1],E=r[4],T=r[7],z=r[2],D=r[5],w=r[8];return s[0]=o*S+a*C+l*z,s[3]=o*p+a*E+l*D,s[6]=o*h+a*T+l*w,s[1]=c*S+u*C+f*z,s[4]=c*p+u*E+f*D,s[7]=c*h+u*T+f*w,s[2]=d*S+m*C+v*z,s[5]=d*p+m*E+v*D,s[8]=d*h+m*T+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,v=t*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new ke;function id(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xg(){const n=lo("canvas");return n.style.display="block",n}const zc={};function Or(n){n in zc||(zc[n]=!0,console.warn(n))}function Mg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Hc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yr={[ui]:{transfer:ro,primaries:so,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[hn]:{transfer:rt,primaries:so,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[So]:{transfer:ro,primaries:oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Vc),fromReference:n=>n.applyMatrix3(Hc)},[Bl]:{transfer:rt,primaries:oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vc),fromReference:n=>n.applyMatrix3(Hc).convertLinearToSRGB()}},Sg=new Set([ui,So]),Ze={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=yr[e].toReference,r=yr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return yr[n].primaries},getTransfer:function(n){return n===ei?ro:yr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(yr[e].luminanceCoefficients)}};function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class yg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=lo("canvas")),zi.width=e.width,zi.height=e.height;const i=zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bg=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($o(r[o].image)):s.push($o(r[o]))}else s=$o(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;class Ft extends _r{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Ci,r=Ci,s=rn,o=Ri,a=sn,l=zn,c=Ft.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Kr(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Xf;Ft.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],S=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(m+1)/2,z=(h+1)/2,D=(u+d)/4,w=(f+S)/4,A=(v+p)/4;return E>T&&E>z?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=D/i,s=w/i):T>z?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=D/r,s=A/r):z<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),i=w/s,r=A/s),this.set(i,r,s,t),this}let C=Math.sqrt((p-v)*(p-v)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(p-v)/C,this.y=(f-S)/C,this.z=(d-u)/C,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tg extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Tg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sd extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ag extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=S;return}if(f!==S||l!==d||c!==m||u!==v){let p=1-a;const h=l*d+c*m+u*v+f*S,C=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const z=Math.sqrt(E),D=Math.atan2(z,h*C);p=Math.sin(p*D)/z,a=Math.sin(a*D)/z}const T=a*C;if(l=l*p+d*T,c=c*p+m*T,u=u*p+v*T,f=f*p+S*T,p===1-a){const z=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=z,c*=z,u*=z,f*=z}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*m-c*d,e[t+1]=l*v+u*d+c*f-a*m,e[t+2]=c*v+u*m+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new Z,kc=new Zr;class Jr{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(s,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fs.copy(i.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ds.subVectors(this.max,br),Hi.subVectors(e.a,br),Vi.subVectors(e.b,br),ki.subVectors(e.c,br),Xn.subVectors(Vi,Hi),qn.subVectors(ki,Vi),gi.subVectors(Hi,ki);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-gi.z,gi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,gi.z,0,-gi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-gi.y,gi.x,0];return!Ko(t,Hi,Vi,ki,ds)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,Hi,Vi,ki,ds))?!1:(hs.crossVectors(Xn,qn),t=[hs.x,hs.y,hs.z],Ko(t,Hi,Vi,ki,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Jt=new Z,fs=new Jr,Hi=new Z,Vi=new Z,ki=new Z,Xn=new Z,qn=new Z,gi=new Z,br=new Z,ds=new Z,hs=new Z,_i=new Z;function Ko(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_i.fromArray(n,s);const a=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wg=new Jr,Er=new Z,Zo=new Z;class yo{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Zo)),this.expandByPoint(Er.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new Z,Jo=new Z,ps=new Z,Yn=new Z,Qo=new Z,ms=new Z,ea=new Z;class od{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jo.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Jo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=Yn.dot(this.direction),l=-Yn.dot(ps),c=Yn.lengthSq(),u=Math.abs(1-o*o);let f,d,m,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const S=1/u;f*=S,d*=S,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jo).addScaledVector(ps,d),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Qo.subVectors(t,e),ms.subVectors(i,e),ea.crossVectors(Qo,ms);let o=this.direction.dot(ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(ms.crossVectors(Yn,ms));if(l<0)return null;const c=a*this.direction.dot(Qo.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(ea);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,c,u,f,d,m,v,S,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,m,v,S,p)}set(e,t,i,r,s,o,a,l,c,u,f,d,m,v,S,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=S,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,v=c*u,S=c*f;t[0]=d+S*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,v=c*u,S=c*f;t[0]=d-S*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=v*c-m,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=S-d*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+v,t[10]=d-S*f}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Rg)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),$n.crossVectors(i,Ht),$n.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),$n.crossVectors(i,Ht)),$n.normalize(),gs.crossVectors(Ht,$n),r[0]=$n.x,r[4]=gs.x,r[8]=Ht.x,r[1]=$n.y,r[5]=gs.y,r[9]=Ht.y,r[2]=$n.z,r[6]=gs.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],S=i[6],p=i[10],h=i[14],C=i[3],E=i[7],T=i[11],z=i[15],D=r[0],w=r[4],A=r[8],M=r[12],x=r[1],R=r[5],U=r[9],O=r[13],q=r[2],ee=r[6],J=r[10],Y=r[14],G=r[3],pe=r[7],_e=r[11],ye=r[15];return s[0]=o*D+a*x+l*q+c*G,s[4]=o*w+a*R+l*ee+c*pe,s[8]=o*A+a*U+l*J+c*_e,s[12]=o*M+a*O+l*Y+c*ye,s[1]=u*D+f*x+d*q+m*G,s[5]=u*w+f*R+d*ee+m*pe,s[9]=u*A+f*U+d*J+m*_e,s[13]=u*M+f*O+d*Y+m*ye,s[2]=v*D+S*x+p*q+h*G,s[6]=v*w+S*R+p*ee+h*pe,s[10]=v*A+S*U+p*J+h*_e,s[14]=v*M+S*O+p*Y+h*ye,s[3]=C*D+E*x+T*q+z*G,s[7]=C*w+E*R+T*ee+z*pe,s[11]=C*A+E*U+T*J+z*_e,s[15]=C*M+E*O+T*Y+z*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],S=e[7],p=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+S*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],S=e[13],p=e[14],h=e[15],C=f*p*c-S*d*c+S*l*m-a*p*m-f*l*h+a*d*h,E=v*d*c-u*p*c-v*l*m+o*p*m+u*l*h-o*d*h,T=u*S*c-v*f*c+v*a*m-o*S*m-u*a*h+o*f*h,z=v*f*l-u*S*l-v*a*d+o*S*d+u*a*p-o*f*p,D=t*C+i*E+r*T+s*z;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/D;return e[0]=C*w,e[1]=(S*d*s-f*p*s-S*r*m+i*p*m+f*r*h-i*d*h)*w,e[2]=(a*p*s-S*l*s+S*r*c-i*p*c-a*r*h+i*l*h)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*w,e[4]=E*w,e[5]=(u*p*s-v*d*s+v*r*m-t*p*m-u*r*h+t*d*h)*w,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*h-t*l*h)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*w,e[8]=T*w,e[9]=(v*f*s-u*S*s-v*i*m+t*S*m+u*i*h-t*f*h)*w,e[10]=(o*S*s-v*a*s+v*i*c-t*S*c-o*i*h+t*a*h)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*w,e[12]=z*w,e[13]=(u*S*r-v*f*r+v*i*d-t*S*d-u*i*p+t*f*p)*w,e[14]=(v*a*r-o*S*r-v*i*l+t*S*l+o*i*p-t*a*p)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,v=s*f,S=o*u,p=o*f,h=a*f,C=l*c,E=l*u,T=l*f,z=i.x,D=i.y,w=i.z;return r[0]=(1-(S+h))*z,r[1]=(m+T)*z,r[2]=(v-E)*z,r[3]=0,r[4]=(m-T)*D,r[5]=(1-(d+h))*D,r[6]=(p+C)*D,r[7]=0,r[8]=(v+E)*w,r[9]=(p-C)*w,r[10]=(1-(d+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const c=1/s,u=1/o,f=1/a;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Un){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,v;if(a===Un)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ao)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Un){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,m=(i+r)*u;let v,S;if(a===Un)v=(o+s)*f,S=-2*f;else if(a===ao)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new Z,Qt=new ft,Cg=new Z(0,0,0),Rg=new Z(1,1,1),$n=new Z,gs=new Z,Ht=new Z,Gc=new ft,Wc=new Zr;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pg=0;const Xc=new Z,Wi=new Zr,bn=new ft,_s=new Z,Tr=new Z,Lg=new Z,Dg=new Zr,qc=new Z(1,0,0),Yc=new Z(0,1,0),$c=new Z(0,0,1),jc={type:"added"},Ig={type:"removed"},Xi={type:"childadded",child:null},ta={type:"childremoved",child:null};class Ot extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new Z,t=new Hn,i=new Zr,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Tr,_s,this.up):bn.lookAt(_s,Tr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(bn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new Z(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new Z,En=new Z,na=new Z,Tn=new Z,qi=new Z,Yi=new Z,Kc=new Z,ia=new Z,ra=new Z,sa=new Z;class gn{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){en.subVectors(r,t),En.subVectors(i,t),na.subVectors(e,t);const o=en.dot(en),a=en.dot(En),l=en.dot(na),c=En.dot(En),u=En.dot(na),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static isFrontFacing(e,t,i,r){return en.subVectors(i,t),En.subVectors(e,t),en.cross(En).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),En.subVectors(this.a,this.b),en.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,i),Yi.subVectors(s,i),ia.subVectors(e,i);const l=qi.dot(ia),c=Yi.dot(ia);if(l<=0&&c<=0)return t.copy(i);ra.subVectors(e,r);const u=qi.dot(ra),f=Yi.dot(ra);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qi,o);sa.subVectors(e,s);const m=qi.dot(sa),v=Yi.dot(sa);if(v>=0&&m<=v)return t.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Yi,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return Kc.subVectors(s,r),a=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(Kc,a);const h=1/(p+S+d);return o=S*h,a=d*h,t.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=vg(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=oa(o,s,e+1/3),this.g=oa(o,s,e),this.b=oa(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Ze.fromWorkingColorSpace(yt.copy(this),e),Math.round(Ut(yt.r*255,0,255))*65536+Math.round(Ut(yt.g*255,0,255))*256+Math.round(Ut(yt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=hn){Ze.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(vs);const i=Xo(jn.h,vs.h,t),r=Xo(jn.s,vs.s,t),s=Xo(jn.l,vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Qe;Qe.NAMES=ld;let Ug=0;class Qr extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=cr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=La,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==La&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class cd extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Z,xs=new Je;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Or("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class ud extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fd extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Li extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ng=0;const qt=new ft,aa=new Ot,$i=new Z,Vt=new Jr,Ar=new Jr,mt=new Z;class kn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?fd:ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Vt.min,Ar.min),Vt.expandByPoint(mt),mt.addVectors(Vt.max,Ar.max),Vt.expandByPoint(mt)):(Vt.expandByPoint(Ar.min),Vt.expandByPoint(Ar.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),mt.add($i)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new Z,l[A]=new Z;const c=new Z,u=new Z,f=new Z,d=new Je,m=new Je,v=new Je,S=new Z,p=new Z;function h(A,M,x){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,x),u.sub(c),f.sub(c),m.sub(d),v.sub(d);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(R),a[A].add(S),a[M].add(S),a[x].add(S),l[A].add(p),l[M].add(p),l[x].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let A=0,M=C.length;A<M;++A){const x=C[A],R=x.start,U=x.count;for(let O=R,q=R+U;O<q;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new Z,T=new Z,z=new Z,D=new Z;function w(A){z.fromBufferAttribute(r,A),D.copy(z);const M=a[A];E.copy(M),E.sub(z.multiplyScalar(z.dot(M))).normalize(),T.crossVectors(D,M);const R=T.dot(l[A])<0?-1:1;o.setXYZW(A,E.x,E.y,E.z,R)}for(let A=0,M=C.length;A<M;++A){const x=C[A],R=x.start,U=x.count;for(let O=R,q=R+U;O<q;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new Kt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new ft,vi=new od,Ms=new yo,Jc=new Z,ji=new Z,Ki=new Z,Zi=new Z,la=new Z,Ss=new Z,ys=new Je,bs=new Je,Es=new Je,Qc=new Z,eu=new Z,tu=new Z,Ts=new Z,As=new Z;class Nn extends Ot{constructor(e=new kn,t=new cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(la.fromBufferAttribute(f,e),o?Ss.addScaledVector(la,u):Ss.addScaledVector(la.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(Ms.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Ms,Jc)===null||vi.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Zc.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Zc),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const p=d[v],h=o[p.materialIndex],C=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=C,z=E;T<z;T+=3){const D=a.getX(T),w=a.getX(T+1),A=a.getX(T+2);r=ws(this,h,e,i,c,u,f,D,w,A),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=v,h=S;p<h;p+=3){const C=a.getX(p),E=a.getX(p+1),T=a.getX(p+2);r=ws(this,o,e,i,c,u,f,C,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const p=d[v],h=o[p.materialIndex],C=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=C,z=E;T<z;T+=3){const D=T,w=T+1,A=T+2;r=ws(this,h,e,i,c,u,f,D,w,A),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=v,h=S;p<h;p+=3){const C=p,E=p+1,T=p+2;r=ws(this,o,e,i,c,u,f,C,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Fg(n,e,t,i,r,s,o,a){let l;if(e.side===Nt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;As.copy(a),As.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:n}}function ws(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ji),n.getVertexPosition(l,Ki),n.getVertexPosition(c,Zi);const u=Fg(n,e,t,i,ji,Ki,Zi,Ts);if(u){r&&(ys.fromBufferAttribute(r,a),bs.fromBufferAttribute(r,l),Es.fromBufferAttribute(r,c),u.uv=gn.getInterpolation(Ts,ji,Ki,Zi,ys,bs,Es,new Je)),s&&(ys.fromBufferAttribute(s,a),bs.fromBufferAttribute(s,l),Es.fromBufferAttribute(s,c),u.uv1=gn.getInterpolation(Ts,ji,Ki,Zi,ys,bs,Es,new Je)),o&&(Qc.fromBufferAttribute(o,a),eu.fromBufferAttribute(o,l),tu.fromBufferAttribute(o,c),u.normal=gn.getInterpolation(Ts,ji,Ki,Zi,Qc,eu,tu,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Z,materialIndex:0};gn.getNormal(ji,Ki,Zi,f.normal),u.face=f}return u}class es extends kn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(f,2));function v(S,p,h,C,E,T,z,D,w,A,M){const x=T/w,R=z/A,U=T/2,O=z/2,q=D/2,ee=w+1,J=A+1;let Y=0,G=0;const pe=new Z;for(let _e=0;_e<J;_e++){const ye=_e*R-O;for(let De=0;De<ee;De++){const Ge=De*x-U;pe[S]=Ge*C,pe[p]=ye*E,pe[h]=q,c.push(pe.x,pe.y,pe.z),pe[S]=0,pe[p]=0,pe[h]=D>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(De/w),f.push(1-_e/A),Y+=1}}for(let _e=0;_e<A;_e++)for(let ye=0;ye<w;ye++){const De=d+ye+ee*_e,Ge=d+ye+ee*(_e+1),ne=d+(ye+1)+ee*(_e+1),ue=d+(ye+1)+ee*_e;l.push(De,Ge,ue),l.push(Ge,ne,ue),G+=6}a.addGroup(m,G,M),m+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const r in i)e[r]=i[r]}return e}function Og(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Bg={clone:gr,merge:At};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new Z,nu=new Je,iu=new Je;class nn extends hd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ll*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Vg extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const s=new nn(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const o=new nn(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new nn(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const l=new nn(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new nn(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class pd extends Ft{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kg extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new es(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:ni});s.uniforms.tEquirect.value=t;const o=new Nn(r,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=rn),new Vg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ca=new Z,Gg=new Z,Wg=new ke;class bi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ca.subVectors(i,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wg.getNormalMatrix(e),r=this.coplanarPoint(ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new yo,Cs=new Z;class md{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],S=r[10],p=r[11],h=r[12],C=r[13],E=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-h).normalize(),i[1].setComponents(l+s,d+c,p+m,T+h).normalize(),i[2].setComponents(l+o,d+u,p+v,T+C).normalize(),i[3].setComponents(l-o,d-u,p-v,T-C).normalize(),i[4].setComponents(l-a,d-f,p-S,T-E).normalize(),t===Un)i[5].setComponents(l+a,d+f,p+S,T+E).normalize();else if(t===ao)i[5].setComponents(a,f,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cs.x=r.normal.x>0?e.max.x:e.min.x,Cs.y=r.normal.y>0?e.max.y:e.min.y,Cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let m=0,v=d.length;m<v;m++){const S=d[m];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class bo extends kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,m=[],v=[],S=[],p=[];for(let h=0;h<u;h++){const C=h*d-o;for(let E=0;E<c;E++){const T=E*f-s;v.push(T,-C,0),S.push(0,0,1),p.push(E/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let C=0;C<a;C++){const E=C+c*h,T=C+c*(h+1),z=C+1+c*(h+1),D=C+1+c*h;m.push(E,T,D),m.push(T,z,D)}this.setIndex(m),this.setAttribute("position",new Li(v,3)),this.setAttribute("normal",new Li(S,3)),this.setAttribute("uv",new Li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yg=`#ifdef USE_ALPHAHASH
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
#endif`,$g=`#ifdef USE_ALPHAMAP
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
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
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
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`#ifdef USE_BATCHING
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
#endif`,t_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s_=`#ifdef USE_IRIDESCENCE
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
#endif`,o_=`#ifdef USE_BUMPMAP
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,m_=`#define PI 3.141592653589793
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
} // validated`,g_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,__=`vec3 transformedNormal = objectNormal;
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
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`
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
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
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
}`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O_=`uniform bool receiveShadow;
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
#endif`,B_=`#ifdef USE_ENVMAP
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
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V_=`BlinnPhongMaterial material;
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
#endif`,W_=`struct PhysicalMaterial {
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
}`,X_=`
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
#endif`,q_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tv=`#if defined( USE_POINTS_UV )
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
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
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
#endif`,lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
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
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pv=`float getShadowMask() {
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
}`,Lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,Nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zv=`#ifdef USE_TRANSMISSION
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
#endif`,Hv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qv=`uniform sampler2D t2D;
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
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zv=`#include <common>
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
}`,Jv=`#if DEPTH_PACKING == 3200
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
}`,Qv=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,v0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,Ve={alphahash_fragment:qg,alphahash_pars_fragment:Yg,alphamap_fragment:$g,alphamap_pars_fragment:jg,alphatest_fragment:Kg,alphatest_pars_fragment:Zg,aomap_fragment:Jg,aomap_pars_fragment:Qg,batching_pars_vertex:e_,batching_vertex:t_,begin_vertex:n_,beginnormal_vertex:i_,bsdfs:r_,iridescence_fragment:s_,bumpmap_pars_fragment:o_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:l_,clipping_planes_pars_vertex:c_,clipping_planes_vertex:u_,color_fragment:f_,color_pars_fragment:d_,color_pars_vertex:h_,color_vertex:p_,common:m_,cube_uv_reflection_fragment:g_,defaultnormal_vertex:__,displacementmap_pars_vertex:v_,displacementmap_vertex:x_,emissivemap_fragment:M_,emissivemap_pars_fragment:S_,colorspace_fragment:y_,colorspace_pars_fragment:b_,envmap_fragment:E_,envmap_common_pars_fragment:T_,envmap_pars_fragment:A_,envmap_pars_vertex:w_,envmap_physical_pars_fragment:B_,envmap_vertex:C_,fog_vertex:R_,fog_pars_vertex:P_,fog_fragment:L_,fog_pars_fragment:D_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:U_,lights_lambert_fragment:N_,lights_lambert_pars_fragment:F_,lights_pars_begin:O_,lights_toon_fragment:z_,lights_toon_pars_fragment:H_,lights_phong_fragment:V_,lights_phong_pars_fragment:k_,lights_physical_fragment:G_,lights_physical_pars_fragment:W_,lights_fragment_begin:X_,lights_fragment_maps:q_,lights_fragment_end:Y_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:Z_,map_fragment:J_,map_pars_fragment:Q_,map_particle_fragment:ev,map_particle_pars_fragment:tv,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:rv,morphcolor_vertex:sv,morphnormal_vertex:ov,morphtarget_pars_vertex:av,morphtarget_vertex:lv,normal_fragment_begin:cv,normal_fragment_maps:uv,normal_pars_fragment:fv,normal_pars_vertex:dv,normal_vertex:hv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:gv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:vv,opaque_fragment:xv,packing:Mv,premultiplied_alpha_fragment:Sv,project_vertex:yv,dithering_fragment:bv,dithering_pars_fragment:Ev,roughnessmap_fragment:Tv,roughnessmap_pars_fragment:Av,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Cv,shadowmap_vertex:Rv,shadowmask_pars_fragment:Pv,skinbase_vertex:Lv,skinning_pars_vertex:Dv,skinning_vertex:Iv,skinnormal_vertex:Uv,specularmap_fragment:Nv,specularmap_pars_fragment:Fv,tonemapping_fragment:Ov,tonemapping_pars_fragment:Bv,transmission_fragment:zv,transmission_pars_fragment:Hv,uv_pars_fragment:Vv,uv_pars_vertex:kv,uv_vertex:Gv,worldpos_vertex:Wv,background_vert:Xv,background_frag:qv,backgroundCube_vert:Yv,backgroundCube_frag:$v,cube_vert:jv,cube_frag:Kv,depth_vert:Zv,depth_frag:Jv,distanceRGBA_vert:Qv,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:r0,meshbasic_vert:s0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:u0,meshnormal_vert:f0,meshnormal_frag:d0,meshphong_vert:h0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:v0,points_vert:x0,points_frag:M0,shadow_vert:S0,shadow_frag:y0,sprite_vert:b0,sprite_frag:E0},ge={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},mn={basic:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([ge.common,ge.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([ge.lights,ge.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mn.physical={uniforms:At([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Rs={r:0,b:0,g:0},Mi=new Hn,T0=new ft;function A0(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(C){let E=C.isScene===!0?C.background:null;return E&&E.isTexture&&(E=(C.backgroundBlurriness>0?t:e).get(E)),E}function S(C){let E=!1;const T=v(C);T===null?h(a,l):T&&T.isColor&&(h(T,1),E=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(C,E){const T=v(E);T&&(T.isCubeTexture||T.mapping===Mo)?(u===void 0&&(u=new Nn(new es(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:gr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mi.copy(E.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Mi)),u.material.toneMapped=Ze.getTransfer(T.colorSpace)!==rt,(f!==T||d!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Nn(new bo(2,2),new li({name:"BackgroundMaterial",uniforms:gr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,m=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function h(C,E){C.getRGB(Rs,dd(n)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(C,E=1){a.set(C),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,h(a,l)},render:S,addToRenderList:p}}function w0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,R,U,O,q){let ee=!1;const J=f(O,U,R);s!==J&&(s=J,c(s.object)),ee=m(x,O,U,q),ee&&v(x,O,U,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,T(x,R,U,O),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,R,U){const O=U.wireframe===!0;let q=i[x.id];q===void 0&&(q={},i[x.id]=q);let ee=q[R.id];ee===void 0&&(ee={},q[R.id]=ee);let J=ee[O];return J===void 0&&(J=d(l()),ee[O]=J),J}function d(x){const R=[],U=[],O=[];for(let q=0;q<t;q++)R[q]=0,U[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,R,U,O){const q=s.attributes,ee=R.attributes;let J=0;const Y=U.getAttributes();for(const G in Y)if(Y[G].location>=0){const _e=q[G];let ye=ee[G];if(ye===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;J++}return s.attributesNum!==J||s.index!==O}function v(x,R,U,O){const q={},ee=R.attributes;let J=0;const Y=U.getAttributes();for(const G in Y)if(Y[G].location>=0){let _e=ee[G];_e===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),q[G]=ye,J++}s.attributes=q,s.attributesNum=J,s.index=O}function S(){const x=s.newAttributes;for(let R=0,U=x.length;R<U;R++)x[R]=0}function p(x){h(x,0)}function h(x,R){const U=s.newAttributes,O=s.enabledAttributes,q=s.attributeDivisors;U[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),q[x]!==R&&(n.vertexAttribDivisor(x,R),q[x]=R)}function C(){const x=s.newAttributes,R=s.enabledAttributes;for(let U=0,O=R.length;U<O;U++)R[U]!==x[U]&&(n.disableVertexAttribArray(U),R[U]=0)}function E(x,R,U,O,q,ee,J){J===!0?n.vertexAttribIPointer(x,R,U,q,ee):n.vertexAttribPointer(x,R,U,O,q,ee)}function T(x,R,U,O){S();const q=O.attributes,ee=U.getAttributes(),J=R.defaultAttributeValues;for(const Y in ee){const G=ee[Y];if(G.location>=0){let pe=q[Y];if(pe===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const _e=pe.normalized,ye=pe.itemSize,De=e.get(pe);if(De===void 0)continue;const Ge=De.buffer,ne=De.type,ue=De.bytesPerElement,xe=ne===n.INT||ne===n.UNSIGNED_INT||pe.gpuType===Dl;if(pe.isInterleavedBufferAttribute){const ve=pe.data,Ie=ve.stride,ze=pe.offset;if(ve.isInstancedInterleavedBuffer){for(let Be=0;Be<G.locationSize;Be++)h(G.location+Be,ve.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Be=0;Be<G.locationSize;Be++)p(G.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Be=0;Be<G.locationSize;Be++)E(G.location+Be,ye/G.locationSize,ne,_e,Ie*ue,(ze+ye/G.locationSize*Be)*ue,xe)}else{if(pe.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)h(G.location+ve,pe.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ve=0;ve<G.locationSize;ve++)p(G.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ve=0;ve<G.locationSize;ve++)E(G.location+ve,ye/G.locationSize,ne,_e,ye*ue,ye/G.locationSize*ve*ue,xe)}}else if(J!==void 0){const _e=J[Y];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(G.location,_e);break;case 3:n.vertexAttrib3fv(G.location,_e);break;case 4:n.vertexAttrib4fv(G.location,_e);break;default:n.vertexAttrib1fv(G.location,_e)}}}}C()}function z(){A();for(const x in i){const R=i[x];for(const U in R){const O=R[U];for(const q in O)u(O[q].object),delete O[q];delete R[U]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const U in R){const O=R[U];for(const q in O)u(O[q].object),delete O[q];delete R[U]}delete i[x.id]}function w(x){for(const R in i){const U=i[R];if(U[x.id]===void 0)continue;const O=U[x.id];for(const q in O)u(O[q].object),delete O[q];delete U[x.id]}}function A(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:p,disableUnusedAttributes:C}}function C0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S];for(let S=0;S<d.length;S++)t.update(v,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function R0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==sn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const w=D===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==zn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==In&&!w)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:S,maxAttributes:p,maxVertexUniforms:h,maxVaryings:C,maxFragmentUniforms:E,vertexTextures:T,maxSamples:z}}function P0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new bi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const C=s?0:i,E=C*4;let T=h.clippingState||null;l.value=T,T=u(v,d,E,m);for(let z=0;z!==E;++z)T[z]=t[z];h.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=l.value,v!==!0||p===null){const h=m+S*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,T=m;E!==S;++E,T+=4)o.copy(f[E]).applyMatrix4(C,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function L0(n){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=dr:a===Ia&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Da||a===Ia)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _d extends hd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,ru=[.125,.215,.35,.446,.526,.582],wi=20,ua=new _d,su=new Qe;let fa=null,da=0,ha=0,pa=!1;const Ei=(1+Math.sqrt(5))/2,er=1/Ei,ou=[new Z(-Ei,er,0),new Z(Ei,er,0),new Z(-er,0,Ei),new Z(er,0,Ei),new Z(0,Ei,-er),new Z(0,Ei,er),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,da,ha),this._renderer.xr.enabled=pa,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:jr,format:sn,colorSpace:ui,depthBuffer:!1},r=lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(s)),this._blurMaterial=I0(s,e,t)}return r}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,i,r){const a=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(su),u.toneMapping=ii,u.autoClear=!1;const m=new cd({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),v=new Nn(new es,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(su),S=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):C===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const E=this._cubeSize;Ps(r,C*E,h>2?E:0,E,E),u.setRenderTarget(r),S&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ou[(r-s-1)%ou.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Nn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wi-1),S=s/v,p=isFinite(s)?1+Math.floor(u*S):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const h=[];let C=0;for(let w=0;w<wi;++w){const A=w/S,M=Math.exp(-A*A/2);h.push(M),w===0?C+=M:w<p&&(C+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/C;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-i;const T=this._sizeLods[r],z=3*T*(r>E-ir?r-E+ir:0),D=4*(this._cubeSize-T);Ps(t,z,D,3*T,2*T),l.setRenderTarget(t),l.render(f,ua)}}function D0(n){const e=[],t=[],i=[];let r=n;const s=n-ir+1+ru.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ir?l=ru[o-n+ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,S=3,p=2,h=1,C=new Float32Array(S*v*m),E=new Float32Array(p*v*m),T=new Float32Array(h*v*m);for(let D=0;D<m;D++){const w=D%3*2/3-1,A=D>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];C.set(M,S*v*D),E.set(d,p*v*D);const x=[D,D,D,D,D,D];T.set(x,h*v*D)}const z=new kn;z.setAttribute("position",new Kt(C,S)),z.setAttribute("uv",new Kt(E,p)),z.setAttribute("faceIndex",new Kt(T,h)),e.push(z),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lu(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function I0(n,e,t){const i=new Float32Array(wi),r=new Z(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function cu(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function uu(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function U0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===Ia,u=l===dr||l===hr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new au(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new au(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function N0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Or("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function F0(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const S=d.morphAttributes[v];for(let p=0,h=S.length;p<h;p++)e.remove(S[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const S=m[v];for(let p=0,h=S.length;p<h;p++)e.update(S[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let S=0;if(m!==null){const C=m.array;S=m.version;for(let E=0,T=C.length;E<T;E+=3){const z=C[E+0],D=C[E+1],w=C[E+2];d.push(z,D,D,w,w,z)}}else if(v!==void 0){const C=v.array;S=v.version;for(let E=0,T=C.length/3-1;E<T;E+=3){const z=E+0,D=E+1,w=E+2;d.push(z,D,D,w,w,z)}}else return;const p=new(id(d)?fd:ud)(d,1);p.version=S;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function O0(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function c(d,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,d*o,v),t.update(m,i,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];t.update(p,i,1)}function f(d,m,v,S){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],S[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,v);let h=0;for(let C=0;C<v;C++)h+=m[C];for(let C=0;C<S.length;C++)t.update(h,i,S[C])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function B0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function z0(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let x=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let T=0;v===!0&&(T=1),S===!0&&(T=2),p===!0&&(T=3);let z=a.attributes.position.count*T,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const w=new Float32Array(z*D*4*f),A=new sd(w,z,D,f);A.type=In,A.needsUpdate=!0;const M=T*4;for(let R=0;R<f;R++){const U=h[R],O=C[R],q=E[R],ee=z*D*4*R;for(let J=0;J<U.count;J++){const Y=J*M;v===!0&&(r.fromBufferAttribute(U,J),w[ee+Y+0]=r.x,w[ee+Y+1]=r.y,w[ee+Y+2]=r.z,w[ee+Y+3]=0),S===!0&&(r.fromBufferAttribute(O,J),w[ee+Y+4]=r.x,w[ee+Y+5]=r.y,w[ee+Y+6]=r.z,w[ee+Y+7]=0),p===!0&&(r.fromBufferAttribute(q,J),w[ee+Y+8]=r.x,w[ee+Y+9]=r.y,w[ee+Y+10]=r.z,w[ee+Y+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new Je(z,D)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function H0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class vd extends Ft{constructor(e,t,i,r,s,o,a,l,c,u=ur){if(u!==ur&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ur&&(i=Di),i===void 0&&u===mr&&(i=pr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xd=new Ft,fu=new vd(1,1),Md=new sd,Sd=new Ag,yd=new pd,du=[],hu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function vr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=du[r];if(s===void 0&&(s=new Float32Array(r),du[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Eo(n,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function W0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function X0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;gu.set(i),n.uniformMatrix2fv(this.addr,!1,gu),pt(t,i)}}function q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;mu.set(i),n.uniformMatrix3fv(this.addr,!1,mu),pt(t,i)}}function Y0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;pu.set(i),n.uniformMatrix4fv(this.addr,!1,pu),pt(t,i)}}function $0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function J0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fu.compareFunction=nd,s=fu):s=xd,t.setTexture2D(e||s,r)}function ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sd,r)}function rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yd,r)}function sx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Md,r)}function ox(n){switch(n){case 5126:return V0;case 35664:return k0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return $0;case 35667:case 35671:return j0;case 35668:case 35672:return K0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return Q0;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(n,e){n.uniform1fv(this.addr,e)}function lx(n,e){const t=vr(e,this.size,2);n.uniform2fv(this.addr,t)}function cx(n,e){const t=vr(e,this.size,3);n.uniform3fv(this.addr,t)}function ux(n,e){const t=vr(e,this.size,4);n.uniform4fv(this.addr,t)}function fx(n,e){const t=vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dx(n,e){const t=vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hx(n,e){const t=vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function px(n,e){n.uniform1iv(this.addr,e)}function mx(n,e){n.uniform2iv(this.addr,e)}function gx(n,e){n.uniform3iv(this.addr,e)}function _x(n,e){n.uniform4iv(this.addr,e)}function vx(n,e){n.uniform1uiv(this.addr,e)}function xx(n,e){n.uniform2uiv(this.addr,e)}function Mx(n,e){n.uniform3uiv(this.addr,e)}function Sx(n,e){n.uniform4uiv(this.addr,e)}function yx(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xd,s[o])}function bx(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sd,s[o])}function Ex(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yd,s[o])}function Tx(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Md,s[o])}function Ax(n){switch(n){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return ux;case 35674:return fx;case 35675:return dx;case 35676:return hx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return xx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}class wx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}}class Cx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}}class Rx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function _u(n,e){n.seq.push(e),n.map[e.id]=e}function Px(n,e,t){const i=n.name,r=i.length;for(ma.lastIndex=0;;){const s=ma.exec(i),o=ma.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_u(t,c===void 0?new wx(a,n,e):new Cx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Rx(a),_u(t,f)),t=f}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Px(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Lx=37297;let Dx=0;function Ix(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Ux(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===oo&&t===so?i="LinearDisplayP3ToLinearSRGB":e===so&&t===oo&&(i="LinearSRGBToLinearDisplayP3"),n){case ui:case So:return[i,"LinearTransferOETF"];case hn:case Bl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ix(n.getShaderSource(e),o)}else return r}function Nx(n,e){const t=Ux(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fx(n,e){let t;switch(e){case Qm:t="Linear";break;case eg:t="Reinhard";break;case tg:t="OptimizedCineon";break;case ng:t="ACESFilmic";break;case rg:t="AgX";break;case sg:t="Neutral";break;case ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ls=new Z;function Ox(){Ze.getLuminanceCoefficients(Ls);const n=Ls.x.toFixed(4),e=Ls.y.toFixed(4),t=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function zx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rr(n){return n!==""}function Mu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(n){return n.replace(Vx,Gx)}const kx=new Map;function Gx(n,e){let t=Ve[e];if(t===void 0){const i=kx.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(n){return n.replace(Wx,Xx)}function Xx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Yx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case hr:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $x(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hr&&(e="ENVMAP_MODE_REFRACTION"),e}function jx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case Zm:e="ENVMAP_BLENDING_MIX";break;case Jm:e="ENVMAP_BLENDING_ADD";break}return e}function Kx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Zx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qx(t),c=Yx(t),u=$x(t),f=jx(t),d=Kx(t),m=Bx(t),v=zx(s),S=r.createProgram();let p,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),h.length>0&&(h+=`
`)):(p=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),h=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ii?Fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Nx("linearToOutputTexel",t.outputColorSpace),Ox(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=cl(o),o=Mu(o,t),o=Su(o,t),a=cl(a),a=Mu(a,t),a=Su(a,t),o=yu(o),a=yu(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=C+p+o,T=C+h+a,z=vu(r,r.VERTEX_SHADER,E),D=vu(r,r.FRAGMENT_SHADER,T);r.attachShader(S,z),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(R){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(S).trim(),O=r.getShaderInfoLog(z).trim(),q=r.getShaderInfoLog(D).trim();let ee=!0,J=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,z,D);else{const Y=xu(r,z,"vertex"),G=xu(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Y+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||q==="")&&(J=!1);J&&(R.diagnostics={runnable:ee,programLog:U,vertexShader:{log:O,prefix:p},fragmentShader:{log:q,prefix:h}})}r.deleteShader(z),r.deleteShader(D),A=new Ys(r,S),M=Hx(r,S)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,Lx)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dx++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=z,this.fragmentShader=D,this}let Jx=0;class Qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eM(e),t.set(e,i)),i}}class eM{constructor(e){this.id=Jx++,this.code=e,this.usedTimes=0}}function tM(n,e,t,i,r,s,o){const a=new ad,l=new Qx,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,R,U,O){const q=U.fog,ee=O.geometry,J=M.isMeshStandardMaterial?U.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),G=Y&&Y.mapping===Mo?Y.image.height:null,pe=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ye=_e!==void 0?_e.length:0;let De=0;ee.morphAttributes.position!==void 0&&(De=1),ee.morphAttributes.normal!==void 0&&(De=2),ee.morphAttributes.color!==void 0&&(De=3);let Ge,ne,ue,xe;if(pe){const qe=mn[pe];Ge=qe.vertexShader,ne=qe.fragmentShader}else Ge=M.vertexShader,ne=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const ve=n.getRenderTarget(),Ie=O.isInstancedMesh===!0,ze=O.isBatchedMesh===!0,Be=!!M.map,et=!!M.matcap,_=!!Y,L=!!M.aoMap,H=!!M.lightMap,te=!!M.bumpMap,V=!!M.normalMap,X=!!M.displacementMap,j=!!M.emissiveMap,Q=!!M.metalnessMap,y=!!M.roughnessMap,g=M.anisotropy>0,P=M.clearcoat>0,I=M.dispersion>0,W=M.iridescence>0,k=M.sheen>0,ae=M.transmission>0,ie=g&&!!M.anisotropyMap,oe=P&&!!M.clearcoatMap,Ee=P&&!!M.clearcoatNormalMap,se=P&&!!M.clearcoatRoughnessMap,de=W&&!!M.iridescenceMap,Pe=W&&!!M.iridescenceThicknessMap,Re=k&&!!M.sheenColorMap,Me=k&&!!M.sheenRoughnessMap,be=!!M.specularMap,we=!!M.specularColorMap,tt=!!M.specularIntensityMap,N=ae&&!!M.transmissionMap,fe=ae&&!!M.thicknessMap,re=!!M.gradientMap,le=!!M.alphaMap,me=M.alphaTest>0,Ue=!!M.alphaHash,We=!!M.extensions;let lt=ii;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(lt=n.toneMapping);const vt={shaderID:pe,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:ne,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ze,batchingColor:ze&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ui,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:et,envMap:_,envMapMode:_&&Y.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:H,bumpMap:te,normalMap:V,displacementMap:d&&X,emissiveMap:j,normalMapObjectSpace:V&&M.normalMapType===ug,normalMapTangentSpace:V&&M.normalMapType===cg,metalnessMap:Q,roughnessMap:y,anisotropy:g,anisotropyMap:ie,clearcoat:P,clearcoatMap:oe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:se,dispersion:I,iridescence:W,iridescenceMap:de,iridescenceThicknessMap:Pe,sheen:k,sheenColorMap:Re,sheenRoughnessMap:Me,specularMap:be,specularColorMap:we,specularIntensityMap:tt,transmission:ae,transmissionMap:N,thicknessMap:fe,gradientMap:re,opaque:M.transparent===!1&&M.blending===cr&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:me,alphaHash:Ue,combine:M.combine,mapUv:Be&&S(M.map.channel),aoMapUv:L&&S(M.aoMap.channel),lightMapUv:H&&S(M.lightMap.channel),bumpMapUv:te&&S(M.bumpMap.channel),normalMapUv:V&&S(M.normalMap.channel),displacementMapUv:X&&S(M.displacementMap.channel),emissiveMapUv:j&&S(M.emissiveMap.channel),metalnessMapUv:Q&&S(M.metalnessMap.channel),roughnessMapUv:y&&S(M.roughnessMap.channel),anisotropyMapUv:ie&&S(M.anisotropyMap.channel),clearcoatMapUv:oe&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&S(M.sheenRoughnessMap.channel),specularMapUv:be&&S(M.specularMap.channel),specularColorMapUv:we&&S(M.specularColorMap.channel),specularIntensityMapUv:tt&&S(M.specularIntensityMap.channel),transmissionMapUv:N&&S(M.transmissionMap.channel),thicknessMapUv:fe&&S(M.thicknessMap.channel),alphaMapUv:le&&S(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(V||g),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ee.attributes.uv&&(Be||le),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:De,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Dn,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:We&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&M.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function h(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(C(x,M),E(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function C(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),M.push(a.mask)}function T(M){const x=v[M.type];let R;if(x){const U=mn[x];R=Bg.clone(U.uniforms)}else R=M.uniforms;return R}function z(M,x){let R;for(let U=0,O=u.length;U<O;U++){const q=u[U];if(q.cacheKey===x){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Zx(n,x,M,s),u.push(R)),R}function D(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:z,releaseProgram:D,releaseShaderCache:w,programs:u,dispose:A}}function nM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function iM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Eu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,v,S,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:S,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=S,h.group=p),e++,h}function a(f,d,m,v,S,p){const h=o(f,d,m,v,S,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,v,S,p){const h=o(f,d,m,v,S,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||iM),i.length>1&&i.sort(d||Eu),r.length>1&&r.sort(d||Eu)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Tu,n.set(i,[o])):r>=s.length?(o=new Tu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Qe};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function oM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aM=0;function lM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cM(n){const e=new sM,t=oM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new ft,o=new ft;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,v=0,S=0,p=0,h=0,C=0,E=0,T=0,z=0,D=0,w=0;c.sort(lM);for(let M=0,x=c.length;M<x;M++){const R=c[M],U=R.color,O=R.intensity,q=R.distance,ee=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*O,f+=U.g*O,d+=U.b*O;else if(R.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(R.sh.coefficients[J],O);w++}else if(R.isDirectionalLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=R.shadow.matrix,C++}i.directional[m]=J,m++}else if(R.isSpotLight){const J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(U).multiplyScalar(O),J.distance=q,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,i.spot[S]=J;const Y=R.shadow;if(R.map&&(i.spotLightMap[z]=R.map,z++,Y.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[S]=Y.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[S]=G,i.spotShadowMap[S]=ee,T++}S++}else if(R.isRectAreaLight){const J=e.get(R);J.color.copy(U).multiplyScalar(O),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=J,p++}else if(R.isPointLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){const Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=R.shadow.matrix,E++}i.point[v]=J,v++}else if(R.isHemisphereLight){const J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(O),J.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[h]=J,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==m||A.pointLength!==v||A.spotLength!==S||A.rectAreaLength!==p||A.hemiLength!==h||A.numDirectionalShadows!==C||A.numPointShadows!==E||A.numSpotShadows!==T||A.numSpotMaps!==z||A.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+z-D,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=w,A.directionalLength=m,A.pointLength=v,A.spotLength=S,A.rectAreaLength=p,A.hemiLength=h,A.numDirectionalShadows=C,A.numPointShadows=E,A.numSpotShadows=T,A.numSpotMaps=z,A.numLightProbes=w,i.version=aM++)}function l(c,u){let f=0,d=0,m=0,v=0,S=0;const p=u.matrixWorldInverse;for(let h=0,C=c.length;h<C;h++){const E=c[h];if(E.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(E.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function Au(n){const e=new cM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Au(n),e.set(r,[a])):s>=o.length?(a=new Au(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class fM extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dM extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
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
}`;function mM(n,e,t){let i=new md;const r=new Je,s=new Je,o=new gt,a=new fM({depthPacking:lg}),l=new dM,c={},u=t.maxTextureSize,f={[ai]:Nt,[Nt]:ai,[Dn]:Dn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:hM,fragmentShader:pM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Nn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let h=this.type;this.render=function(D,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ni),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=h!==An&&this.type===An,q=h===An&&this.type!==An;for(let ee=0,J=D.length;ee<J;ee++){const Y=D[ee],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const pe=G.getFrameExtents();if(r.multiply(pe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,G.mapSize.y=s.y)),G.map===null||O===!0||q===!0){const ye=this.type!==An?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new Ii(r.x,r.y,ye),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const _e=G.getViewportCount();for(let ye=0;ye<_e;ye++){const De=G.getViewport(ye);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),U.viewport(o),G.updateMatrices(Y,ye),i=G.getFrustum(),T(w,A,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===An&&C(G,A),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,x,R)};function C(D,w){const A=e.update(S);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ii(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(w,null,A,d,S,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(w,null,A,m,S,null)}function E(D,w,A,M){let x=null;const R=A.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)x=R;else if(x=A.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=x.uuid,O=w.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let ee=q[O];ee===void 0&&(ee=x.clone(),q[O]=ee,w.addEventListener("dispose",z)),x=ee}if(x.visible=w.visible,x.wireframe=w.wireframe,M===An?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=n.properties.get(x);U.light=A}return x}function T(D,w,A,M,x){if(D.visible===!1)return;if(D.layers.test(w.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===An)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,D.matrixWorld);const O=e.update(D),q=D.material;if(Array.isArray(q)){const ee=O.groups;for(let J=0,Y=ee.length;J<Y;J++){const G=ee[J],pe=q[G.materialIndex];if(pe&&pe.visible){const _e=E(D,pe,M,x);D.onBeforeShadow(n,D,w,A,O,_e,G),n.renderBufferDirect(A,null,O,_e,D,G),D.onAfterShadow(n,D,w,A,O,_e,G)}}}else if(q.visible){const ee=E(D,q,M,x);D.onBeforeShadow(n,D,w,A,O,ee,null),n.renderBufferDirect(A,null,O,ee,D,null),D.onAfterShadow(n,D,w,A,O,ee,null)}}const U=D.children;for(let O=0,q=U.length;O<q;O++)T(U[O],w,A,M,x)}function z(D){D.target.removeEventListener("dispose",z);for(const A in c){const M=c[A],x=D.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}function gM(n){function e(){let N=!1;const fe=new gt;let re=null;const le=new gt(0,0,0,0);return{setMask:function(me){re!==me&&!N&&(n.colorMask(me,me,me,me),re=me)},setLocked:function(me){N=me},setClear:function(me,Ue,We,lt,vt){vt===!0&&(me*=lt,Ue*=lt,We*=lt),fe.set(me,Ue,We,lt),le.equals(fe)===!1&&(n.clearColor(me,Ue,We,lt),le.copy(fe))},reset:function(){N=!1,re=null,le.set(-1,0,0,0)}}}function t(){let N=!1,fe=null,re=null,le=null;return{setTest:function(me){me?xe(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(me){fe!==me&&!N&&(n.depthMask(me),fe=me)},setFunc:function(me){if(re!==me){switch(me){case Wm:n.depthFunc(n.NEVER);break;case Xm:n.depthFunc(n.ALWAYS);break;case qm:n.depthFunc(n.LESS);break;case io:n.depthFunc(n.LEQUAL);break;case Ym:n.depthFunc(n.EQUAL);break;case $m:n.depthFunc(n.GEQUAL);break;case jm:n.depthFunc(n.GREATER);break;case Km:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=me}},setLocked:function(me){N=me},setClear:function(me){le!==me&&(n.clearDepth(me),le=me)},reset:function(){N=!1,fe=null,re=null,le=null}}}function i(){let N=!1,fe=null,re=null,le=null,me=null,Ue=null,We=null,lt=null,vt=null;return{setTest:function(qe){N||(qe?xe(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(qe){fe!==qe&&!N&&(n.stencilMask(qe),fe=qe)},setFunc:function(qe,vn,cn){(re!==qe||le!==vn||me!==cn)&&(n.stencilFunc(qe,vn,cn),re=qe,le=vn,me=cn)},setOp:function(qe,vn,cn){(Ue!==qe||We!==vn||lt!==cn)&&(n.stencilOp(qe,vn,cn),Ue=qe,We=vn,lt=cn)},setLocked:function(qe){N=qe},setClear:function(qe){vt!==qe&&(n.clearStencil(qe),vt=qe)},reset:function(){N=!1,fe=null,re=null,le=null,me=null,Ue=null,We=null,lt=null,vt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],m=null,v=!1,S=null,p=null,h=null,C=null,E=null,T=null,z=null,D=new Qe(0,0,0),w=0,A=!1,M=null,x=null,R=null,U=null,O=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,J=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ee=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ee=J>=2);let G=null,pe={};const _e=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),De=new gt().fromArray(_e),Ge=new gt().fromArray(ye);function ne(N,fe,re,le){const me=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(N,Ue),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<re;We++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(fe+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ue}const ue={};ue[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),s.setFunc(io),te(!1),V(Dc),xe(n.CULL_FACE),L(ni);function xe(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function ve(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ie(N,fe){return u[N]!==fe?(n.bindFramebuffer(N,fe),u[N]=fe,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=fe),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function ze(N,fe){let re=d,le=!1;if(N){re=f.get(fe),re===void 0&&(re=[],f.set(fe,re));const me=N.textures;if(re.length!==me.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,We=me.length;Ue<We;Ue++)re[Ue]=n.COLOR_ATTACHMENT0+Ue;re.length=me.length,le=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,le=!0);le&&n.drawBuffers(re)}function Be(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const et={[Ai]:n.FUNC_ADD,[wm]:n.FUNC_SUBTRACT,[Cm]:n.FUNC_REVERSE_SUBTRACT};et[Rm]=n.MIN,et[Pm]=n.MAX;const _={[Lm]:n.ZERO,[Dm]:n.ONE,[Im]:n.SRC_COLOR,[Pa]:n.SRC_ALPHA,[zm]:n.SRC_ALPHA_SATURATE,[Om]:n.DST_COLOR,[Nm]:n.DST_ALPHA,[Um]:n.ONE_MINUS_SRC_COLOR,[La]:n.ONE_MINUS_SRC_ALPHA,[Bm]:n.ONE_MINUS_DST_COLOR,[Fm]:n.ONE_MINUS_DST_ALPHA,[Hm]:n.CONSTANT_COLOR,[Vm]:n.ONE_MINUS_CONSTANT_COLOR,[km]:n.CONSTANT_ALPHA,[Gm]:n.ONE_MINUS_CONSTANT_ALPHA};function L(N,fe,re,le,me,Ue,We,lt,vt,qe){if(N===ni){v===!0&&(ve(n.BLEND),v=!1);return}if(v===!1&&(xe(n.BLEND),v=!0),N!==Am){if(N!==S||qe!==A){if((p!==Ai||E!==Ai)&&(n.blendEquation(n.FUNC_ADD),p=Ai,E=Ai),qe)switch(N){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ic:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ic:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,C=null,T=null,z=null,D.set(0,0,0),w=0,S=N,A=qe}return}me=me||fe,Ue=Ue||re,We=We||le,(fe!==p||me!==E)&&(n.blendEquationSeparate(et[fe],et[me]),p=fe,E=me),(re!==h||le!==C||Ue!==T||We!==z)&&(n.blendFuncSeparate(_[re],_[le],_[Ue],_[We]),h=re,C=le,T=Ue,z=We),(lt.equals(D)===!1||vt!==w)&&(n.blendColor(lt.r,lt.g,lt.b,vt),D.copy(lt),w=vt),S=N,A=!1}function H(N,fe){N.side===Dn?ve(n.CULL_FACE):xe(n.CULL_FACE);let re=N.side===Nt;fe&&(re=!re),te(re),N.blending===cr&&N.transparent===!1?L(ni):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),j(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function V(N){N!==bm?(xe(n.CULL_FACE),N!==x&&(N===Dc?n.cullFace(n.BACK):N===Em?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),x=N}function X(N){N!==R&&(ee&&n.lineWidth(N),R=N)}function j(N,fe,re){N?(xe(n.POLYGON_OFFSET_FILL),(U!==fe||O!==re)&&(n.polygonOffset(fe,re),U=fe,O=re)):ve(n.POLYGON_OFFSET_FILL)}function Q(N){N?xe(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function y(N){N===void 0&&(N=n.TEXTURE0+q-1),G!==N&&(n.activeTexture(N),G=N)}function g(N,fe,re){re===void 0&&(G===null?re=n.TEXTURE0+q-1:re=G);let le=pe[re];le===void 0&&(le={type:void 0,texture:void 0},pe[re]=le),(le.type!==N||le.texture!==fe)&&(G!==re&&(n.activeTexture(re),G=re),n.bindTexture(N,fe||ue[N]),le.type=N,le.texture=fe)}function P(){const N=pe[G];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){De.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),De.copy(N))}function Me(N){Ge.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ge.copy(N))}function be(N,fe){let re=l.get(fe);re===void 0&&(re=new WeakMap,l.set(fe,re));let le=re.get(N);le===void 0&&(le=n.getUniformBlockIndex(fe,N.name),re.set(N,le))}function we(N,fe){const le=l.get(fe).get(N);a.get(fe)!==le&&(n.uniformBlockBinding(fe,le,N.__bindingPointIndex),a.set(fe,le))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,pe={},u={},f=new WeakMap,d=[],m=null,v=!1,S=null,p=null,h=null,C=null,E=null,T=null,z=null,D=new Qe(0,0,0),w=0,A=!1,M=null,x=null,R=null,U=null,O=null,De.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:xe,disable:ve,bindFramebuffer:Ie,drawBuffers:ze,useProgram:Be,setBlending:L,setMaterial:H,setFlipSided:te,setCullFace:V,setLineWidth:X,setPolygonOffset:j,setScissorTest:Q,activeTexture:y,bindTexture:g,unbindTexture:P,compressedTexImage2D:I,compressedTexImage3D:W,texImage2D:de,texImage3D:Pe,updateUBOMapping:be,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:se,texSubImage2D:k,texSubImage3D:ae,compressedTexSubImage2D:ie,compressedTexSubImage3D:oe,scissor:Re,viewport:Me,reset:tt}}function wu(n,e,t,i){const r=_M(i);switch(t){case jf:return n*e;case Zf:return n*e;case Jf:return n*e*2;case Qf:return n*e/r.components*r.byteLength;case Nl:return n*e/r.components*r.byteLength;case ed:return n*e*2/r.components*r.byteLength;case Fl:return n*e*2/r.components*r.byteLength;case Kf:return n*e*3/r.components*r.byteLength;case sn:return n*e*4/r.components*r.byteLength;case Ol:return n*e*4/r.components*r.byteLength;case ks:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:case za:return Math.max(n,16)*Math.max(e,8)/4;case Fa:case Ba:return Math.max(n,8)*Math.max(e,8)/2;case Ha:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qs:case il:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case td:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ol:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _M(n){switch(n){case zn:case qf:return{byteLength:1,components:1};case qr:case Yf:case jr:return{byteLength:2,components:1};case Il:case Ul:return{byteLength:2,components:4};case Di:case Dl:case In:return{byteLength:4,components:1};case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function vM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return m?new OffscreenCanvas(y,g):lo("canvas")}function S(y,g,P){let I=1;const W=Q(y);if((W.width>P||W.height>P)&&(I=P/Math.max(W.width,W.height)),I<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(I*W.width),ae=Math.floor(I*W.height);f===void 0&&(f=v(k,ae));const ie=g?v(k,ae):f;return ie.width=k,ie.height=ae,ie.getContext("2d").drawImage(y,0,0,k,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+ae+")."),ie}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==jt&&y.minFilter!==rn}function h(y){n.generateMipmap(y)}function C(y,g,P,I,W=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=g;if(g===n.RED&&(P===n.FLOAT&&(k=n.R32F),P===n.HALF_FLOAT&&(k=n.R16F),P===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.R8UI),P===n.UNSIGNED_SHORT&&(k=n.R16UI),P===n.UNSIGNED_INT&&(k=n.R32UI),P===n.BYTE&&(k=n.R8I),P===n.SHORT&&(k=n.R16I),P===n.INT&&(k=n.R32I)),g===n.RG&&(P===n.FLOAT&&(k=n.RG32F),P===n.HALF_FLOAT&&(k=n.RG16F),P===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RG8UI),P===n.UNSIGNED_SHORT&&(k=n.RG16UI),P===n.UNSIGNED_INT&&(k=n.RG32UI),P===n.BYTE&&(k=n.RG8I),P===n.SHORT&&(k=n.RG16I),P===n.INT&&(k=n.RG32I)),g===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),g===n.RGBA){const ae=W?ro:Ze.getTransfer(I);P===n.FLOAT&&(k=n.RGBA32F),P===n.HALF_FLOAT&&(k=n.RGBA16F),P===n.UNSIGNED_BYTE&&(k=ae===rt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(y,g){let P;return y?g===null||g===Di||g===pr?P=n.DEPTH24_STENCIL8:g===In?P=n.DEPTH32F_STENCIL8:g===qr&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Di||g===pr?P=n.DEPTH_COMPONENT24:g===In?P=n.DEPTH_COMPONENT32F:g===qr&&(P=n.DEPTH_COMPONENT16),P}function T(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==jt&&y.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function z(y){const g=y.target;g.removeEventListener("dispose",z),w(g),g.isVideoTexture&&u.delete(g)}function D(y){const g=y.target;g.removeEventListener("dispose",D),M(g)}function w(y){const g=i.get(y);if(g.__webglInit===void 0)return;const P=y.source,I=d.get(P);if(I){const W=I[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&A(y),Object.keys(I).length===0&&d.delete(P)}i.remove(y)}function A(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const P=y.source,I=d.get(P);delete I[g.__cacheKey],o.memory.textures--}function M(y){const g=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(g.__webglFramebuffer[I]))for(let W=0;W<g.__webglFramebuffer[I].length;W++)n.deleteFramebuffer(g.__webglFramebuffer[I][W]);else n.deleteFramebuffer(g.__webglFramebuffer[I]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[I])}else{if(Array.isArray(g.__webglFramebuffer))for(let I=0;I<g.__webglFramebuffer.length;I++)n.deleteFramebuffer(g.__webglFramebuffer[I]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let I=0;I<g.__webglColorRenderbuffer.length;I++)g.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[I]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=y.textures;for(let I=0,W=P.length;I<W;I++){const k=i.get(P[I]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(P[I])}i.remove(y)}let x=0;function R(){x=0}function U(){const y=x;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),x+=1,y}function O(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function q(y,g){const P=i.get(y);if(y.isVideoTexture&&X(y),y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){const I=y.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(P,y,g);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function ee(y,g){const P=i.get(y);if(y.version>0&&P.__version!==y.version){Ge(P,y,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function J(y,g){const P=i.get(y);if(y.version>0&&P.__version!==y.version){Ge(P,y,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function Y(y,g){const P=i.get(y);if(y.version>0&&P.__version!==y.version){ne(P,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const G={[Ua]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},pe={[jt]:n.NEAREST,[og]:n.NEAREST_MIPMAP_NEAREST,[us]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},_e={[fg]:n.NEVER,[_g]:n.ALWAYS,[dg]:n.LESS,[nd]:n.LEQUAL,[hg]:n.EQUAL,[gg]:n.GEQUAL,[pg]:n.GREATER,[mg]:n.NOTEQUAL};function ye(y,g){if(g.type===In&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===Go||g.magFilter===us||g.magFilter===Ri||g.minFilter===rn||g.minFilter===Go||g.minFilter===us||g.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,G[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,G[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,G[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,pe[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===jt||g.minFilter!==us&&g.minFilter!==Ri||g.type===In&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function De(y,g){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",z));const I=g.source;let W=d.get(I);W===void 0&&(W={},d.set(I,W));const k=O(g);if(k!==y.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),W[k].usedTimes++;const ae=W[y.__cacheKey];ae!==void 0&&(W[y.__cacheKey].usedTimes--,ae.usedTimes===0&&A(g)),y.__cacheKey=k,y.__webglTexture=W[k].texture}return P}function Ge(y,g,P){let I=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(I=n.TEXTURE_3D);const W=De(y,g),k=g.source;t.bindTexture(I,y.__webglTexture,n.TEXTURE0+P);const ae=i.get(k);if(k.version!==ae.__version||W===!0){t.activeTexture(n.TEXTURE0+P);const ie=Ze.getPrimaries(Ze.workingColorSpace),oe=g.colorSpace===ei?null:Ze.getPrimaries(g.colorSpace),Ee=g.colorSpace===ei||ie===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let se=S(g.image,!1,r.maxTextureSize);se=j(g,se);const de=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type);let Re=C(g.internalFormat,de,Pe,g.colorSpace,g.isVideoTexture);ye(I,g);let Me;const be=g.mipmaps,we=g.isVideoTexture!==!0,tt=ae.__version===void 0||W===!0,N=k.dataReady,fe=T(g,se);if(g.isDepthTexture)Re=E(g.format===mr,g.type),tt&&(we?t.texStorage2D(n.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,de,Pe,null));else if(g.isDataTexture)if(be.length>0){we&&tt&&t.texStorage2D(n.TEXTURE_2D,fe,Re,be[0].width,be[0].height);for(let re=0,le=be.length;re<le;re++)Me=be[re],we?N&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Me.width,Me.height,de,Pe,Me.data):t.texImage2D(n.TEXTURE_2D,re,Re,Me.width,Me.height,0,de,Pe,Me.data);g.generateMipmaps=!1}else we?(tt&&t.texStorage2D(n.TEXTURE_2D,fe,Re,se.width,se.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,de,Pe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,de,Pe,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){we&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Re,be[0].width,be[0].height,se.depth);for(let re=0,le=be.length;re<le;re++)if(Me=be[re],g.format!==sn)if(de!==null)if(we){if(N)if(g.layerUpdates.size>0){const me=wu(Me.width,Me.height,g.format,g.type);for(const Ue of g.layerUpdates){const We=Me.data.subarray(Ue*me/Me.data.BYTES_PER_ELEMENT,(Ue+1)*me/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ue,Me.width,Me.height,1,de,We,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Me.width,Me.height,se.depth,de,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Re,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Me.width,Me.height,se.depth,de,Pe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Re,Me.width,Me.height,se.depth,0,de,Pe,Me.data)}else{we&&tt&&t.texStorage2D(n.TEXTURE_2D,fe,Re,be[0].width,be[0].height);for(let re=0,le=be.length;re<le;re++)Me=be[re],g.format!==sn?de!==null?we?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Me.width,Me.height,de,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?N&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Me.width,Me.height,de,Pe,Me.data):t.texImage2D(n.TEXTURE_2D,re,Re,Me.width,Me.height,0,de,Pe,Me.data)}else if(g.isDataArrayTexture)if(we){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Re,se.width,se.height,se.depth),N)if(g.layerUpdates.size>0){const re=wu(se.width,se.height,g.format,g.type);for(const le of g.layerUpdates){const me=se.data.subarray(le*re/se.data.BYTES_PER_ELEMENT,(le+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,se.width,se.height,1,de,Pe,me)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Pe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,de,Pe,se.data);else if(g.isData3DTexture)we?(tt&&t.texStorage3D(n.TEXTURE_3D,fe,Re,se.width,se.height,se.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Pe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,de,Pe,se.data);else if(g.isFramebufferTexture){if(tt)if(we)t.texStorage2D(n.TEXTURE_2D,fe,Re,se.width,se.height);else{let re=se.width,le=se.height;for(let me=0;me<fe;me++)t.texImage2D(n.TEXTURE_2D,me,Re,re,le,0,de,Pe,null),re>>=1,le>>=1}}else if(be.length>0){if(we&&tt){const re=Q(be[0]);t.texStorage2D(n.TEXTURE_2D,fe,Re,re.width,re.height)}for(let re=0,le=be.length;re<le;re++)Me=be[re],we?N&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,de,Pe,Me):t.texImage2D(n.TEXTURE_2D,re,Re,de,Pe,Me);g.generateMipmaps=!1}else if(we){if(tt){const re=Q(se);t.texStorage2D(n.TEXTURE_2D,fe,Re,re.width,re.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Pe,se)}else t.texImage2D(n.TEXTURE_2D,0,Re,de,Pe,se);p(g)&&h(I),ae.__version=k.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ne(y,g,P){if(g.image.length!==6)return;const I=De(y,g),W=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+P);const k=i.get(W);if(W.version!==k.__version||I===!0){t.activeTexture(n.TEXTURE0+P);const ae=Ze.getPrimaries(Ze.workingColorSpace),ie=g.colorSpace===ei?null:Ze.getPrimaries(g.colorSpace),oe=g.colorSpace===ei||ae===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,se=g.image[0]&&g.image[0].isDataTexture,de=[];for(let le=0;le<6;le++)!Ee&&!se?de[le]=S(g.image[le],!0,r.maxCubemapSize):de[le]=se?g.image[le].image:g.image[le],de[le]=j(g,de[le]);const Pe=de[0],Re=s.convert(g.format,g.colorSpace),Me=s.convert(g.type),be=C(g.internalFormat,Re,Me,g.colorSpace),we=g.isVideoTexture!==!0,tt=k.__version===void 0||I===!0,N=W.dataReady;let fe=T(g,Pe);ye(n.TEXTURE_CUBE_MAP,g);let re;if(Ee){we&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,be,Pe.width,Pe.height);for(let le=0;le<6;le++){re=de[le].mipmaps;for(let me=0;me<re.length;me++){const Ue=re[me];g.format!==sn?Re!==null?we?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,0,0,Ue.width,Ue.height,Re,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,0,0,Ue.width,Ue.height,Re,Me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,be,Ue.width,Ue.height,0,Re,Me,Ue.data)}}}else{if(re=g.mipmaps,we&&tt){re.length>0&&fe++;const le=Q(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,be,le.width,le.height)}for(let le=0;le<6;le++)if(se){we?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,de[le].width,de[le].height,Re,Me,de[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,be,de[le].width,de[le].height,0,Re,Me,de[le].data);for(let me=0;me<re.length;me++){const We=re[me].image[le].image;we?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,0,0,We.width,We.height,Re,Me,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,be,We.width,We.height,0,Re,Me,We.data)}}else{we?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re,Me,de[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,be,Re,Me,de[le]);for(let me=0;me<re.length;me++){const Ue=re[me];we?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,0,0,Re,Me,Ue.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,be,Re,Me,Ue.image[le])}}}p(g)&&h(n.TEXTURE_CUBE_MAP),k.__version=W.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ue(y,g,P,I,W,k){const ae=s.convert(P.format,P.colorSpace),ie=s.convert(P.type),oe=C(P.internalFormat,ae,ie,P.colorSpace);if(!i.get(g).__hasExternalTextures){const se=Math.max(1,g.width>>k),de=Math.max(1,g.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,k,oe,se,de,g.depth,0,ae,ie,null):t.texImage2D(W,k,oe,se,de,0,ae,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),V(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,W,i.get(P).__webglTexture,0,te(g)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,W,i.get(P).__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(y,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const I=g.depthTexture,W=I&&I.isDepthTexture?I.type:null,k=E(g.stencilBuffer,W),ae=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=te(g);V(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,k,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,y)}else{const I=g.textures;for(let W=0;W<I.length;W++){const k=I[W],ae=s.convert(k.format,k.colorSpace),ie=s.convert(k.type),oe=C(k.internalFormat,ae,ie,k.colorSpace),Ee=te(g);P&&V(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,oe,g.width,g.height):V(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,oe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,oe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const I=i.get(g.depthTexture).__webglTexture,W=te(g);if(g.depthTexture.format===ur)V(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(g.depthTexture.format===mr)V(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ie(y){const g=i.get(y),P=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");ve(g.__webglFramebuffer,y)}else if(P){g.__webglDepthbuffer=[];for(let I=0;I<6;I++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[I]),g.__webglDepthbuffer[I]=n.createRenderbuffer(),xe(g.__webglDepthbuffer[I],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),xe(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(y,g,P){const I=i.get(y);g!==void 0&&ue(I.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Ie(y)}function Be(y){const g=y.texture,P=i.get(y),I=i.get(g);y.addEventListener("dispose",D);const W=y.textures,k=y.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=g.version,o.memory.textures++),k){P.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[ie]=[];for(let oe=0;oe<g.mipmaps.length;oe++)P.__webglFramebuffer[ie][oe]=n.createFramebuffer()}else P.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)P.__webglFramebuffer[ie]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ae)for(let ie=0,oe=W.length;ie<oe;ie++){const Ee=i.get(W[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&V(y)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ie=0;ie<W.length;ie++){const oe=W[ie];P.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ie]);const Ee=s.convert(oe.format,oe.colorSpace),se=s.convert(oe.type),de=C(oe.internalFormat,Ee,se,oe.colorSpace,y.isXRRenderTarget===!0),Pe=te(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,de,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,P.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(P.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),ye(n.TEXTURE_CUBE_MAP,g);for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0)for(let oe=0;oe<g.mipmaps.length;oe++)ue(P.__webglFramebuffer[ie][oe],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else ue(P.__webglFramebuffer[ie],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let ie=0,oe=W.length;ie<oe;ie++){const Ee=W[ie],se=i.get(Ee);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ye(n.TEXTURE_2D,Ee),ue(P.__webglFramebuffer,y,Ee,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),p(Ee)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ie=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,I.__webglTexture),ye(ie,g),g.mipmaps&&g.mipmaps.length>0)for(let oe=0;oe<g.mipmaps.length;oe++)ue(P.__webglFramebuffer[oe],y,g,n.COLOR_ATTACHMENT0,ie,oe);else ue(P.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,ie,0);p(g)&&h(ie),t.unbindTexture()}y.depthBuffer&&Ie(y)}function et(y){const g=y.textures;for(let P=0,I=g.length;P<I;P++){const W=g[P];if(p(W)){const k=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(W).__webglTexture;t.bindTexture(k,ae),h(k),t.unbindTexture()}}}const _=[],L=[];function H(y){if(y.samples>0){if(V(y)===!1){const g=y.textures,P=y.width,I=y.height;let W=n.COLOR_BUFFER_BIT;const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(y),ie=g.length>1;if(ie)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=i.get(g[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,P,I,0,0,P,I,W,n.NEAREST),l===!0&&(_.length=0,L.length=0,_.push(n.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(_.push(k),L.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ee=i.get(g[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function te(y){return Math.min(r.maxSamples,y.samples)}function V(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function X(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function j(y,g){const P=y.colorSpace,I=y.format,W=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==ui&&P!==ei&&(Ze.getTransfer(P)===rt?(I!==sn||W!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function Q(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=ze,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=V}function xM(n,e){function t(i,r=ei){let s;const o=Ze.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qf)return n.BYTE;if(i===Yf)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===Dl)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===jf)return n.ALPHA;if(i===Kf)return n.RGB;if(i===sn)return n.RGBA;if(i===Zf)return n.LUMINANCE;if(i===Jf)return n.LUMINANCE_ALPHA;if(i===ur)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===Qf)return n.RED;if(i===Nl)return n.RED_INTEGER;if(i===ed)return n.RG;if(i===Fl)return n.RG_INTEGER;if(i===Ol)return n.RGBA_INTEGER;if(i===ks||i===Gs||i===Ws||i===Xs)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Va||i===ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ha||i===Va)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===ja||i===Ka||i===Za||i===Ja||i===Qa||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ga)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Za)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qs||i===il||i===rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qs)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===td||i===sl||i===ol||i===al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class MM extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ds extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,i),h=this._getHandJoint(c,S);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yM=`
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

}`;class EM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:yM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TM extends _r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const S=new EM,p=t.getContextAttributes();let h=null,C=null;const E=[],T=[],z=new Je;let D=null;const w=new nn;w.layers.enable(1),w.viewport=new gt;const A=new nn;A.layers.enable(2),A.viewport=new gt;const M=[w,A],x=new MM;x.layers.enable(1),x.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=E[ne];return ue===void 0&&(ue=new ga,E[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=E[ne];return ue===void 0&&(ue=new ga,E[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=E[ne];return ue===void 0&&(ue=new ga,E[ne]=ue),ue.getHandSpace()};function O(ne){const ue=T.indexOf(ne.inputSource);if(ue===-1)return;const xe=E[ue];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,c||o),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",ee);for(let ne=0;ne<E.length;ne++){const ue=T[ne];ue!==null&&(T[ne]=null,E[ne].disconnect(ue))}R=null,U=null,S.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,C=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(z),r.renderState.layers===void 0){const ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Ii(m.framebufferWidth,m.framebufferHeight,{format:sn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ue=null,xe=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=p.stencil?mr:ur,xe=p.stencil?pr:Di);const Ie={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new Ii(d.textureWidth,d.textureHeight,{format:sn,type:zn,depthTexture:new vd(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(ne){for(let ue=0;ue<ne.removed.length;ue++){const xe=ne.removed[ue],ve=T.indexOf(xe);ve>=0&&(T[ve]=null,E[ve].disconnect(xe))}for(let ue=0;ue<ne.added.length;ue++){const xe=ne.added[ue];let ve=T.indexOf(xe);if(ve===-1){for(let ze=0;ze<E.length;ze++)if(ze>=T.length){T.push(xe),ve=ze;break}else if(T[ze]===null){T[ze]=xe,ve=ze;break}if(ve===-1)break}const Ie=E[ve];Ie&&Ie.connect(xe)}}const J=new Z,Y=new Z;function G(ne,ue,xe){J.setFromMatrixPosition(ue.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);const ve=J.distanceTo(Y),Ie=ue.projectionMatrix.elements,ze=xe.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),et=Ie[14]/(Ie[10]+1),_=(Ie[9]+1)/Ie[5],L=(Ie[9]-1)/Ie[5],H=(Ie[8]-1)/Ie[0],te=(ze[8]+1)/ze[0],V=Be*H,X=Be*te,j=ve/(-H+te),Q=j*-H;ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Q),ne.translateZ(j),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const y=Be+j,g=et+j,P=V-Q,I=X+(ve-Q),W=_*et/g*y,k=L*et/g*y;ne.projectionMatrix.makePerspective(P,I,W,k,y,g),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function pe(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;S.texture!==null&&(ne.near=S.depthNear,ne.far=S.depthFar),x.near=A.near=w.near=ne.near,x.far=A.far=w.far=ne.far,(R!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,U=x.far,w.near=R,w.far=U,A.near=R,A.far=U,w.updateProjectionMatrix(),A.updateProjectionMatrix(),ne.updateProjectionMatrix());const ue=ne.parent,xe=x.cameras;pe(x,ue);for(let ve=0;ve<xe.length;ve++)pe(xe[ve],ue);xe.length===2?G(x,w,A):x.projectionMatrix.copy(w.projectionMatrix),_e(ne,x,ue)};function _e(ne,ue,xe){xe===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ll*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let ye=null;function De(ne,ue){if(u=ue.getViewerPose(c||o),v=ue,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let ve=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let ze=0;ze<xe.length;ze++){const Be=xe[ze];let et=null;if(m!==null)et=m.getViewport(Be);else{const L=f.getViewSubImage(d,Be);et=L.viewport,ze===0&&(e.setRenderTargetTextures(C,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(C))}let _=M[ze];_===void 0&&(_=new nn,_.layers.enable(ze),_.viewport=new gt,M[ze]=_),_.matrix.fromArray(Be.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.projectionMatrix.fromArray(Be.projectionMatrix),_.projectionMatrixInverse.copy(_.projectionMatrix).invert(),_.viewport.set(et.x,et.y,et.width,et.height),ze===0&&(x.matrix.copy(_.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(_)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const ze=f.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&S.init(e,ze,r.renderState)}}for(let xe=0;xe<E.length;xe++){const ve=T[xe],Ie=E[xe];ve!==null&&Ie!==void 0&&Ie.update(ve,ue,c||o)}ye&&ye(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const Ge=new gd;Ge.setAnimationLoop(De),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const Si=new Hn,AM=new ft;function wM(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,dd(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,C,E,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),S(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,C,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Nt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Nt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const C=e.get(h),E=C.envMap,T=C.envMapRotation;E&&(p.envMap.value=E,Si.copy(T),Si.x*=-1,Si.y*=-1,Si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),p.envMapRotation.value.setFromMatrix4(AM.makeRotationFromEuler(Si)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,C,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*C,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,C){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function S(p,h){const C=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,E){const T=E.program;i.uniformBlockBinding(C,T)}function c(C,E){let T=r[C.id];T===void 0&&(v(C),T=u(C),r[C.id]=T,C.addEventListener("dispose",p));const z=E.program;i.updateUBOMapping(C,z);const D=e.render.frame;s[C.id]!==D&&(d(C),s[C.id]=D)}function u(C){const E=f();C.__bindingPointIndex=E;const T=n.createBuffer(),z=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,z,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const E=r[C.id],T=C.uniforms,z=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,w=T.length;D<w;D++){const A=Array.isArray(T[D])?T[D]:[T[D]];for(let M=0,x=A.length;M<x;M++){const R=A[M];if(m(R,D,M,z)===!0){const U=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let ee=0;ee<O.length;ee++){const J=O[ee],Y=S(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,U+q,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,E,T,z){const D=C.value,w=E+"_"+T;if(z[w]===void 0)return typeof D=="number"||typeof D=="boolean"?z[w]=D:z[w]=D.clone(),!0;{const A=z[w];if(typeof D=="number"||typeof D=="boolean"){if(A!==D)return z[w]=D,!0}else if(A.equals(D)===!1)return A.copy(D),!0}return!1}function v(C){const E=C.uniforms;let T=0;const z=16;for(let w=0,A=E.length;w<A;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,R=M.length;x<R;x++){const U=M[x],O=Array.isArray(U.value)?U.value:[U.value];for(let q=0,ee=O.length;q<ee;q++){const J=O[q],Y=S(J),G=T%z,pe=G%Y.boundary,_e=G+pe;T+=pe,_e!==0&&z-_e<Y.storage&&(T+=z-_e),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=Y.storage}}}const D=T%z;return D>0&&(T+=z-D),C.__size=T,C.__cache={},this}function S(C){const E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function p(C){const E=C.target;E.removeEventListener("dispose",p);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class RM{constructor(e={}){const{canvas:t=xg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,p=null;const h=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ii,this.toneMappingExposure=1;const E=this;let T=!1,z=0,D=0,w=null,A=-1,M=null;const x=new gt,R=new gt;let U=null;const O=new Qe(0);let q=0,ee=t.width,J=t.height,Y=1,G=null,pe=null;const _e=new gt(0,0,ee,J),ye=new gt(0,0,ee,J);let De=!1;const Ge=new md;let ne=!1,ue=!1;const xe=new ft,ve=new Z,Ie=new gt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function et(){return w===null?Y:1}let _=i;function L(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",me,!1),_===null){const F="webgl2";if(_=L(F,b),_===null)throw L(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let H,te,V,X,j,Q,y,g,P,I,W,k,ae,ie,oe,Ee,se,de,Pe,Re,Me,be,we,tt;function N(){H=new N0(_),H.init(),be=new xM(_,H),te=new R0(_,H,e,be),V=new gM(_),X=new B0(_),j=new nM,Q=new vM(_,H,V,j,te,be,X),y=new L0(E),g=new U0(E),P=new Xg(_),we=new w0(_,P),I=new F0(_,P,X,we),W=new H0(_,I,P,X),Pe=new z0(_,te,Q),Ee=new P0(j),k=new tM(E,y,g,H,te,we,Ee),ae=new wM(E,j),ie=new rM,oe=new uM(H),de=new A0(E,y,g,V,W,d,l),se=new mM(E,W,te),tt=new CM(_,X,te,V),Re=new C0(_,H,X),Me=new O0(_,H,X),X.programs=k.programs,E.capabilities=te,E.extensions=H,E.properties=j,E.renderLists=ie,E.shadowMap=se,E.state=V,E.info=X}N();const fe=new TM(E,_);this.xr=fe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const b=H.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=H.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(ee,J,!1))},this.getSize=function(b){return b.set(ee,J)},this.setSize=function(b,F,$=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,J=F,t.width=Math.floor(b*Y),t.height=Math.floor(F*Y),$===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(ee*Y,J*Y).floor()},this.setDrawingBufferSize=function(b,F,$){ee=b,J=F,Y=$,t.width=Math.floor(b*$),t.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,F,$,K){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,F,$,K),V.viewport(x.copy(_e).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ye)},this.setScissor=function(b,F,$,K){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,F,$,K),V.scissor(R.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){V.setScissorTest(De=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(b=!0,F=!0,$=!0){let K=0;if(b){let B=!1;if(w!==null){const he=w.texture.format;B=he===Ol||he===Fl||he===Nl}if(B){const he=w.texture.type,Se=he===zn||he===Di||he===qr||he===pr||he===Il||he===Ul,Te=de.getClearColor(),Ae=de.getClearAlpha(),Ne=Te.r,Fe=Te.g,Le=Te.b;Se?(m[0]=Ne,m[1]=Fe,m[2]=Le,m[3]=Ae,_.clearBufferuiv(_.COLOR,0,m)):(v[0]=Ne,v[1]=Fe,v[2]=Le,v[3]=Ae,_.clearBufferiv(_.COLOR,0,v))}else K|=_.COLOR_BUFFER_BIT}F&&(K|=_.DEPTH_BUFFER_BIT),$&&(K|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ie.dispose(),oe.dispose(),j.dispose(),y.dispose(),g.dispose(),W.dispose(),we.dispose(),tt.dispose(),k.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",cn),fe.removeEventListener("sessionend",kl),fi.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=X.autoReset,F=se.enabled,$=se.autoUpdate,K=se.needsUpdate,B=se.type;N(),X.autoReset=b,se.enabled=F,se.autoUpdate=$,se.needsUpdate=K,se.type=B}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ue(b){const F=b.target;F.removeEventListener("dispose",Ue),We(F)}function We(b){lt(b),j.remove(b)}function lt(b){const F=j.get(b).programs;F!==void 0&&(F.forEach(function($){k.releaseProgram($)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,K,B,he){F===null&&(F=ze);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Te=Dd(b,F,$,K,B);V.setMaterial(K,Se);let Ae=$.index,Ne=1;if(K.wireframe===!0){if(Ae=I.getWireframeAttribute($),Ae===void 0)return;Ne=2}const Fe=$.drawRange,Le=$.attributes.position;let Ye=Fe.start*Ne,ot=(Fe.start+Fe.count)*Ne;he!==null&&(Ye=Math.max(Ye,he.start*Ne),ot=Math.min(ot,(he.start+he.count)*Ne)),Ae!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,Ae.count)):Le!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,Le.count));const at=ot-Ye;if(at<0||at===1/0)return;we.setup(B,K,Te,$,Ae);let Bt,$e=Re;if(Ae!==null&&(Bt=P.get(Ae),$e=Me,$e.setIndex(Bt)),B.isMesh)K.wireframe===!0?(V.setLineWidth(K.wireframeLinewidth*et()),$e.setMode(_.LINES)):$e.setMode(_.TRIANGLES);else if(B.isLine){let Ce=K.linewidth;Ce===void 0&&(Ce=1),V.setLineWidth(Ce*et()),B.isLineSegments?$e.setMode(_.LINES):B.isLineLoop?$e.setMode(_.LINE_LOOP):$e.setMode(_.LINE_STRIP)}else B.isPoints?$e.setMode(_.POINTS):B.isSprite&&$e.setMode(_.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)$e.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))$e.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,xt=B._multiDrawCounts,je=B._multiDrawCount,Zt=Ae?P.get(Ae).bytesPerElement:1,Ni=j.get(K).currentProgram.getUniforms();for(let zt=0;zt<je;zt++)Ni.setValue(_,"_gl_DrawID",zt),$e.render(Ce[zt]/Zt,xt[zt])}else if(B.isInstancedMesh)$e.renderInstances(Ye,at,B.count);else if($.isInstancedBufferGeometry){const Ce=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xt=Math.min($.instanceCount,Ce);$e.renderInstances(Ye,at,xt)}else $e.render(Ye,at)};function vt(b,F,$){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=Nt,b.needsUpdate=!0,is(b,F,$),b.side=ai,b.needsUpdate=!0,is(b,F,$),b.side=Dn):is(b,F,$)}this.compile=function(b,F,$=null){$===null&&($=b),p=oe.get($),p.init(F),C.push(p),$.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==$&&b.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const K=new Set;return b.traverse(function(B){const he=B.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Te=he[Se];vt(Te,$,B),K.add(Te)}else vt(he,$,B),K.add(he)}),C.pop(),p=null,K},this.compileAsync=function(b,F,$=null){const K=this.compile(b,F,$);return new Promise(B=>{function he(){if(K.forEach(function(Se){j.get(Se).currentProgram.isReady()&&K.delete(Se)}),K.size===0){B(b);return}setTimeout(he,10)}H.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let qe=null;function vn(b){qe&&qe(b)}function cn(){fi.stop()}function kl(){fi.start()}const fi=new gd;fi.setAnimationLoop(vn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(b){qe=b,fe.setAnimationLoop(b),b===null?fi.stop():fi.start()},fe.addEventListener("sessionstart",cn),fe.addEventListener("sessionend",kl),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,F,w),p=oe.get(b,C.length),p.init(F),C.push(p),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(xe),ue=this.localClippingEnabled,ne=Ee.init(this.clippingPlanes,ue),S=ie.get(b,h.length),S.init(),h.push(S),fe.enabled===!0&&fe.isPresenting===!0){const he=E.xr.getDepthSensingMesh();he!==null&&To(he,F,-1/0,E.sortObjects)}To(b,F,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(G,pe),Be=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Be&&de.addToRenderList(S,b),this.info.render.frame++,ne===!0&&Ee.beginShadows();const $=p.state.shadowsArray;se.render($,b,F),ne===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,B=S.transmissive;if(p.setupLights(),F.isArrayCamera){const he=F.cameras;if(B.length>0)for(let Se=0,Te=he.length;Se<Te;Se++){const Ae=he[Se];Wl(K,B,b,Ae)}Be&&de.render(b);for(let Se=0,Te=he.length;Se<Te;Se++){const Ae=he[Se];Gl(S,b,Ae,Ae.viewport)}}else B.length>0&&Wl(K,B,b,F),Be&&de.render(b),Gl(S,b,F);w!==null&&(Q.updateMultisampleRenderTarget(w),Q.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(E,b,F),we.resetDefaultState(),A=-1,M=null,C.pop(),C.length>0?(p=C[C.length-1],ne===!0&&Ee.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function To(b,F,$,K){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ge.intersectsSprite(b)){K&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);const Se=W.update(b),Te=b.material;Te.visible&&S.push(b,Se,Te,$,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ge.intersectsObject(b))){const Se=W.update(b),Te=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Ae=Se.groups;for(let Ne=0,Fe=Ae.length;Ne<Fe;Ne++){const Le=Ae[Ne],Ye=Te[Le.materialIndex];Ye&&Ye.visible&&S.push(b,Se,Ye,$,Ie.z,Le)}}else Te.visible&&S.push(b,Se,Te,$,Ie.z,null)}}const he=b.children;for(let Se=0,Te=he.length;Se<Te;Se++)To(he[Se],F,$,K)}function Gl(b,F,$,K){const B=b.opaque,he=b.transmissive,Se=b.transparent;p.setupLightsView($),ne===!0&&Ee.setGlobalState(E.clippingPlanes,$),K&&V.viewport(x.copy(K)),B.length>0&&ns(B,F,$),he.length>0&&ns(he,F,$),Se.length>0&&ns(Se,F,$),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Wl(b,F,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ii(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?jr:zn,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const he=p.state.transmissionRenderTarget[K.id],Se=K.viewport||x;he.setSize(Se.z,Se.w);const Te=E.getRenderTarget();E.setRenderTarget(he),E.getClearColor(O),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),Be&&de.render($);const Ae=E.toneMapping;E.toneMapping=ii;const Ne=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ne===!0&&Ee.setGlobalState(E.clippingPlanes,K),ns(b,$,K),Q.updateMultisampleRenderTarget(he),Q.updateRenderTargetMipmap(he),H.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Le=0,Ye=F.length;Le<Ye;Le++){const ot=F[Le],at=ot.object,Bt=ot.geometry,$e=ot.material,Ce=ot.group;if($e.side===Dn&&at.layers.test(K.layers)){const xt=$e.side;$e.side=Nt,$e.needsUpdate=!0,Xl(at,$,K,Bt,$e,Ce),$e.side=xt,$e.needsUpdate=!0,Fe=!0}}Fe===!0&&(Q.updateMultisampleRenderTarget(he),Q.updateRenderTargetMipmap(he))}E.setRenderTarget(Te),E.setClearColor(O,q),Ne!==void 0&&(K.viewport=Ne),E.toneMapping=Ae}function ns(b,F,$){const K=F.isScene===!0?F.overrideMaterial:null;for(let B=0,he=b.length;B<he;B++){const Se=b[B],Te=Se.object,Ae=Se.geometry,Ne=K===null?Se.material:K,Fe=Se.group;Te.layers.test($.layers)&&Xl(Te,F,$,Ae,Ne,Fe)}}function Xl(b,F,$,K,B,he){b.onBeforeRender(E,F,$,K,B,he),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.transparent===!0&&B.side===Dn&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,E.renderBufferDirect($,F,K,B,b,he),B.side=ai,B.needsUpdate=!0,E.renderBufferDirect($,F,K,B,b,he),B.side=Dn):E.renderBufferDirect($,F,K,B,b,he),b.onAfterRender(E,F,$,K,B,he)}function is(b,F,$){F.isScene!==!0&&(F=ze);const K=j.get(b),B=p.state.lights,he=p.state.shadowsArray,Se=B.state.version,Te=k.getParameters(b,B.state,he,F,$),Ae=k.getProgramCacheKey(Te);let Ne=K.programs;K.environment=b.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(b.isMeshStandardMaterial?g:y).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",Ue),Ne=new Map,K.programs=Ne);let Fe=Ne.get(Ae);if(Fe!==void 0){if(K.currentProgram===Fe&&K.lightsStateVersion===Se)return Yl(b,Te),Fe}else Te.uniforms=k.getUniforms(b),b.onBeforeCompile(Te,E),Fe=k.acquireProgram(Te,Ae),Ne.set(Ae,Fe),K.uniforms=Te.uniforms;const Le=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=Ee.uniform),Yl(b,Te),K.needsLights=Ud(b),K.lightsStateVersion=Se,K.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=Fe,K.uniformsList=null,Fe}function ql(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Ys.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Yl(b,F){const $=j.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Dd(b,F,$,K,B){F.isScene!==!0&&(F=ze),Q.resetTextureUnits();const he=F.fog,Se=K.isMeshStandardMaterial?F.environment:null,Te=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ui,Ae=(K.isMeshStandardMaterial?g:y).get(K.envMap||Se),Ne=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!$.morphAttributes.position,Ye=!!$.morphAttributes.normal,ot=!!$.morphAttributes.color;let at=ii;K.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(at=E.toneMapping);const Bt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,$e=Bt!==void 0?Bt.length:0,Ce=j.get(K),xt=p.state.lights;if(ne===!0&&(ue===!0||b!==M)){const Wt=b===M&&K.id===A;Ee.setState(K,b,Wt)}let je=!1;K.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==xt.state.version||Ce.outputColorSpace!==Te||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==Ae||K.fog===!0&&Ce.fog!==he||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ee.numPlanes||Ce.numIntersection!==Ee.numIntersection)||Ce.vertexAlphas!==Ne||Ce.vertexTangents!==Fe||Ce.morphTargets!==Le||Ce.morphNormals!==Ye||Ce.morphColors!==ot||Ce.toneMapping!==at||Ce.morphTargetsCount!==$e)&&(je=!0):(je=!0,Ce.__version=K.version);let Zt=Ce.currentProgram;je===!0&&(Zt=is(K,F,B));let Ni=!1,zt=!1,Ao=!1;const ct=Zt.getUniforms(),Gn=Ce.uniforms;if(V.useProgram(Zt.program)&&(Ni=!0,zt=!0,Ao=!0),K.id!==A&&(A=K.id,zt=!0),Ni||M!==b){ct.setValue(_,"projectionMatrix",b.projectionMatrix),ct.setValue(_,"viewMatrix",b.matrixWorldInverse);const Wt=ct.map.cameraPosition;Wt!==void 0&&Wt.setValue(_,ve.setFromMatrixPosition(b.matrixWorld)),te.logarithmicDepthBuffer&&ct.setValue(_,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ct.setValue(_,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,zt=!0,Ao=!0)}if(B.isSkinnedMesh){ct.setOptional(_,B,"bindMatrix"),ct.setOptional(_,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(_,"boneTexture",Wt.boneTexture,Q))}B.isBatchedMesh&&(ct.setOptional(_,B,"batchingTexture"),ct.setValue(_,"batchingTexture",B._matricesTexture,Q),ct.setOptional(_,B,"batchingIdTexture"),ct.setValue(_,"batchingIdTexture",B._indirectTexture,Q),ct.setOptional(_,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(_,"batchingColorTexture",B._colorsTexture,Q));const wo=$.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0)&&Pe.update(B,$,Zt),(zt||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,ct.setValue(_,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Gn.envMap.value=Ae,Gn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(Gn.envMapIntensity.value=F.environmentIntensity),zt&&(ct.setValue(_,"toneMappingExposure",E.toneMappingExposure),Ce.needsLights&&Id(Gn,Ao),he&&K.fog===!0&&ae.refreshFogUniforms(Gn,he),ae.refreshMaterialUniforms(Gn,K,Y,J,p.state.transmissionRenderTarget[b.id]),Ys.upload(_,ql(Ce),Gn,Q)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ys.upload(_,ql(Ce),Gn,Q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ct.setValue(_,"center",B.center),ct.setValue(_,"modelViewMatrix",B.modelViewMatrix),ct.setValue(_,"normalMatrix",B.normalMatrix),ct.setValue(_,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Wt=K.uniformsGroups;for(let Co=0,Nd=Wt.length;Co<Nd;Co++){const $l=Wt[Co];tt.update($l,Zt),tt.bind($l,Zt)}}return Zt}function Id(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ud(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,F,$){j.get(b.texture).__webglTexture=F,j.get(b.depthTexture).__webglTexture=$;const K=j.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const $=j.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){w=b,z=F,D=$;let K=!0,B=null,he=!1,Se=!1;if(b){const Ae=j.get(b);Ae.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(_.FRAMEBUFFER,null),K=!1):Ae.__webglFramebuffer===void 0?Q.setupRenderTarget(b):Ae.__hasExternalTextures&&Q.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const Fe=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?B=Fe[F][$]:B=Fe[F],he=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?B=j.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?B=Fe[$]:B=Fe,x.copy(b.viewport),R.copy(b.scissor),U=b.scissorTest}else x.copy(_e).multiplyScalar(Y).floor(),R.copy(ye).multiplyScalar(Y).floor(),U=De;if(V.bindFramebuffer(_.FRAMEBUFFER,B)&&K&&V.drawBuffers(b,B),V.viewport(x),V.scissor(R),V.setScissorTest(U),he){const Ae=j.get(b.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,$)}else if(Se){const Ae=j.get(b.texture),Ne=F||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ae.__webglTexture,$||0,Ne)}A=-1},this.readRenderTargetPixels=function(b,F,$,K,B,he,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){V.bindFramebuffer(_.FRAMEBUFFER,Te);try{const Ae=b.texture,Ne=Ae.format,Fe=Ae.type;if(!te.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-K&&$>=0&&$<=b.height-B&&_.readPixels(F,$,K,B,be.convert(Ne),be.convert(Fe),he)}finally{const Ae=w!==null?j.get(w).__webglFramebuffer:null;V.bindFramebuffer(_.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,K,B,he,Se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){V.bindFramebuffer(_.FRAMEBUFFER,Te);try{const Ae=b.texture,Ne=Ae.format,Fe=Ae.type;if(!te.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-K&&$>=0&&$<=b.height-B){const Le=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Le),_.bufferData(_.PIXEL_PACK_BUFFER,he.byteLength,_.STREAM_READ),_.readPixels(F,$,K,B,be.convert(Ne),be.convert(Fe),0),_.flush();const Ye=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);await Mg(_,Ye,4);try{_.bindBuffer(_.PIXEL_PACK_BUFFER,Le),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,he)}finally{_.deleteBuffer(Le),_.deleteSync(Ye)}return he}}finally{const Ae=w!==null?j.get(w).__webglFramebuffer:null;V.bindFramebuffer(_.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(b,F=null,$=0){b.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-$),B=Math.floor(b.image.width*K),he=Math.floor(b.image.height*K),Se=F!==null?F.x:0,Te=F!==null?F.y:0;Q.setTexture2D(b,0),_.copyTexSubImage2D(_.TEXTURE_2D,$,0,0,Se,Te,B,he),V.unbindTexture()},this.copyTextureToTexture=function(b,F,$=null,K=null,B=0){b.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],F=arguments[2],B=arguments[3]||0,$=null);let he,Se,Te,Ae,Ne,Fe;$!==null?(he=$.max.x-$.min.x,Se=$.max.y-$.min.y,Te=$.min.x,Ae=$.min.y):(he=b.image.width,Se=b.image.height,Te=0,Ae=0),K!==null?(Ne=K.x,Fe=K.y):(Ne=0,Fe=0);const Le=be.convert(F.format),Ye=be.convert(F.type);Q.setTexture2D(F,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=_.getParameter(_.UNPACK_ROW_LENGTH),at=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Bt=_.getParameter(_.UNPACK_SKIP_PIXELS),$e=_.getParameter(_.UNPACK_SKIP_ROWS),Ce=_.getParameter(_.UNPACK_SKIP_IMAGES),xt=b.isCompressedTexture?b.mipmaps[B]:b.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,xt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,xt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ae),b.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,B,Ne,Fe,he,Se,Le,Ye,xt.data):b.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,B,Ne,Fe,xt.width,xt.height,Le,xt.data):_.texSubImage2D(_.TEXTURE_2D,B,Ne,Fe,he,Se,Le,Ye,xt),_.pixelStorei(_.UNPACK_ROW_LENGTH,ot),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,at),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(_.UNPACK_SKIP_ROWS,$e),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ce),B===0&&F.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(b,F,$=null,K=null,B=0){b.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,b=arguments[2],F=arguments[3],B=arguments[4]||0);let he,Se,Te,Ae,Ne,Fe,Le,Ye,ot;const at=b.isCompressedTexture?b.mipmaps[B]:b.image;$!==null?(he=$.max.x-$.min.x,Se=$.max.y-$.min.y,Te=$.max.z-$.min.z,Ae=$.min.x,Ne=$.min.y,Fe=$.min.z):(he=at.width,Se=at.height,Te=at.depth,Ae=0,Ne=0,Fe=0),K!==null?(Le=K.x,Ye=K.y,ot=K.z):(Le=0,Ye=0,ot=0);const Bt=be.convert(F.format),$e=be.convert(F.type);let Ce;if(F.isData3DTexture)Q.setTexture3D(F,0),Ce=_.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Q.setTexture2DArray(F,0),Ce=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment);const xt=_.getParameter(_.UNPACK_ROW_LENGTH),je=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Zt=_.getParameter(_.UNPACK_SKIP_PIXELS),Ni=_.getParameter(_.UNPACK_SKIP_ROWS),zt=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,at.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,at.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ne),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Fe),b.isDataTexture||b.isData3DTexture?_.texSubImage3D(Ce,B,Le,Ye,ot,he,Se,Te,Bt,$e,at.data):F.isCompressedArrayTexture?_.compressedTexSubImage3D(Ce,B,Le,Ye,ot,he,Se,Te,Bt,at.data):_.texSubImage3D(Ce,B,Le,Ye,ot,he,Se,Te,Bt,$e,at),_.pixelStorei(_.UNPACK_ROW_LENGTH,xt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,je),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Zt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ni),_.pixelStorei(_.UNPACK_SKIP_IMAGES,zt),B===0&&F.generateMipmaps&&_.generateMipmap(Ce),V.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),V.unbindTexture()},this.resetState=function(){z=0,D=0,w=null,V.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===So?"display-p3":"srgb"}}class PM extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bd extends Qr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cu=new ft,ul=new od,Is=new yo,Us=new Z;class LM extends Ot{constructor(e=new kn,t=new bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;Cu.copy(r).invert(),ul.copy(e.ray).applyMatrix4(Cu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=d,S=m;v<S;v++){const p=c.getX(v);Us.fromBufferAttribute(f,p),Ru(Us,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,S=m;v<S;v++)Us.fromBufferAttribute(f,v),Ru(Us,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ru(n,e,t,i,r,s,o){const a=ul.distanceSqToPoint(n);if(a<t){const l=new Z;ul.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);const Hl=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},DM={class:"legal-page"},IM={__name:"Impressum",setup(n){return(e,t)=>(Yt(),wn("div",DM,[t[1]||(t[1]=ce("h1",null,"Legal Notice / Impressum",-1)),t[2]||(t[2]=ce("p",null,[Cr("Operator:"),ce("br"),Cr(" Constantin Engl"),ce("br"),Cr(" Junostraße 5,"),ce("br"),Cr(" 93055 Regensburg"),ce("br")],-1)),ce("button",{class:"mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",onClick:t[0]||(t[0]=i=>e.$emit("go-back"))},"Back to Main Page")]))}},UM=Hl(IM,[["__scopeId","data-v-2f5e598c"]]),NM={class:"legal-page"},FM={__name:"PrivacyPolicy",setup(n){return(e,t)=>(Yt(),wn("div",NM,[t[1]||(t[1]=Hs('<h1 data-v-7008059e>Privacy Policy</h1><p data-v-7008059e>We take your privacy seriously and only collect personal data when necessary.</p><h2 class="mt-4 font-semibold" data-v-7008059e>Operator</h2><p data-v-7008059e>Constantin Engl<br data-v-7008059e> Junostraße 5,<br data-v-7008059e> 93055 Regensburg<br data-v-7008059e> Email: engl.info95@gmail.com</p><h2 class="mt-4 font-semibold" data-v-7008059e>Personal Data</h2><p data-v-7008059e>We only collect personal data that you provide voluntarily, e.g., via contact form or email.</p><h2 class="mt-4 font-semibold" data-v-7008059e>Use of Data</h2><p data-v-7008059e>Personal data will only be used to respond to inquiries and will not be shared with third parties.</p><h2 class="mt-4 font-semibold" data-v-7008059e>Cookies and Tracking</h2><p data-v-7008059e>This website does not use analytics or tracking cookies. Only technically necessary cookies may be used to ensure proper function.</p><h2 class="mt-4 font-semibold" data-v-7008059e>Your Rights</h2><p data-v-7008059e>You have the right to request access, correction, or deletion of your personal data. Please contact us via email for such requests.</p><h2 class="mt-4 font-semibold" data-v-7008059e>Updates</h2><p data-v-7008059e>We may update this privacy policy. The latest version is always available on this page.</p><p class="mt-4 text-sm text-gray-500" data-v-7008059e>Effective date: February 2026</p>',15)),ce("button",{class:"mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",onClick:t[0]||(t[0]=i=>e.$emit("go-back"))},"Back to Main Page")]))}},OM=Hl(FM,[["__scopeId","data-v-7008059e"]]);class ts{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const BM=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Mt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:BM()},Vl=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},zM=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Vl(n);Mt.publicKey=t.publicKey,Mt.blockHeadless=t.blockHeadless,Mt.storageProvider=t.storageProvider,Mt.blockList=t.blockList,Mt.limitRate=t.limitRate,Mt.origin=t.origin||e},Ed=async(n,e,t={})=>{const i=await fetch(Mt.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new ts(i.status,r);if(i.ok)return s;throw s},Td=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},HM=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Ad=n=>n.webdriver||!n.languages||n.languages.length===0,wd=()=>new ts(451,"Unavailable For Headless Browser"),VM=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},kM=n=>!n.list?.length||!n.watchVariable,GM=(n,e)=>n instanceof FormData?n.get(e):n[e],Cd=(n,e)=>{if(kM(n))return!1;VM(n.list,n.watchVariable);const t=GM(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},Rd=()=>new ts(403,"Forbidden"),WM=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},XM=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},Pd=async(n,e,t)=>{if(!e.throttle||!t)return!1;WM(e.throttle,e.id);const i=e.id||n;return await XM(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},Ld=()=>new ts(429,"Too Many Requests"),qM=async(n,e,t,i)=>{const r=Vl(i),s=r.publicKey||Mt.publicKey,o=r.blockHeadless||Mt.blockHeadless,a=r.storageProvider||Mt.storageProvider,l={...Mt.blockList,...r.blockList},c={...Mt.limitRate,...r.limitRate};return o&&Ad(navigator)?Promise.reject(wd()):(Td(s,n,e),HM(t),t&&Cd(l,t)?Promise.reject(Rd()):await Pd(location.pathname,c,a)?Promise.reject(Ld()):Ed("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},YM=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},$M=n=>typeof n=="string"?document.querySelector(n):n,jM=async(n,e,t,i)=>{const r=Vl(i),s=r.publicKey||Mt.publicKey,o=r.blockHeadless||Mt.blockHeadless,a=Mt.storageProvider||r.storageProvider,l={...Mt.blockList,...r.blockList},c={...Mt.limitRate,...r.limitRate};if(o&&Ad(navigator))return Promise.reject(wd());const u=$M(t);Td(s,n,e),YM(u);const f=new FormData(u);return Cd(l,f)?Promise.reject(Rd()):await Pd(location.pathname,c,a)?Promise.reject(Ld()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),Ed("/api/v1.0/email/send-form",f))},KM={init:zM,send:qM,sendForm:jM,EmailJSResponseStatus:ts},ZM={id:"app",class:"terminal-theme"},JM={class:"fixed top-0 w-full bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-600 backdrop-blur-md shadow-lg z-10"},QM={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},eS={class:"flex items-center justify-center py-4 relative"},tS={class:"absolute left-0 flex md:hidden"},nS={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},iS={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},rS={class:"hidden md:flex space-x-8"},sS={key:0,class:"md:hidden flex flex-col items-center space-y-4 py-4 bg-gradient-to-r from-emerald-950 via-emerald-800 to-green-600 rounded-b-lg shadow-lg animate-fade-in"},oS={id:"about",class:"min-h-screen flex items-center justify-center bg-black text-green-300 relative overflow-hidden pt-14 md:pt-8"},aS={class:"text-center max-w-4xl md:max-w-5xl lg:max-w-6xl px-6 md:px-4 py-6 md:py-8 relative"},lS={class:"relative w-full h-64 md:h-52 mb-4"},cS={class:"flex justify-center space-x-4"},uS={id:"projects",class:"min-h-screen flex items-center justify-center"},fS={class:"max-w-6xl px-4 py-12"},dS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"},hS={class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer",role:"region","aria-label":"Tower Defense Game Card"},pS={class:"flex w-full"},mS={id:"contact",class:"min-h-screen flex items-center justify-center"},gS={class:"max-w-6xl px-4 py-12"},_S={class:"flex flex-col gap-6"},vS={class:"flex-1 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col justify-center min-w-0"},xS={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},MS={class:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0"},SS=["disabled"],yS={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60"},bS={class:"bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"},Pu="Hello, I'm Constantin",ES={__name:"App",setup(n){const e=un(!1),t=un("about"),i=un(!1),r=un(!1),s=un(!1);function o(){r.value=!0}function a(){s.value=!0}function l(){r.value=!1,s.value=!1}const c=un(null),u=un(null);let f=null,d=null;Js(()=>{const w=["about","experience","projects","education","contact"],A=[];return w.forEach(M=>{const x=document.getElementById(M);if(x){const R=new IntersectionObserver(U=>{U.forEach(O=>{O.isIntersecting&&(t.value=M)})},{root:null,rootMargin:"0px",threshold:.15});R.observe(x),A.push(R)}}),()=>{A.forEach(M=>M.disconnect())}});const m=()=>{const w=c.value;if(!w)return null;let A=null,M=null,x=null,R=null,U=null,O=null,q=null,ee=null,J=null;const Y={x:0,y:0,active:!1,isTouch:!1};let G=null;const pe=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);let _e=0,ye=!0;const De=60;let Ge=null;const ne=(X,j)=>{const Q=document.createElement("canvas"),y=Q.getContext("2d");if(!y)return{positions:new Float32Array,basePositions:new Float32Array};const P=(typeof window<"u"?window.innerWidth:X)<768,I=P?["Hello, I'm","Constantin"]:[Pu],W=130,k=Math.round(W*1.15),ae=P?1100:1300,ie=P?420:320;Q.width=ae,Q.height=ie,y.clearRect(0,0,ae,ie),y.fillStyle="#111827",y.textAlign="center",y.textBaseline="middle",y.font=`700 ${W}px "Avenir Next", "Segoe UI", sans-serif`;const oe=k*(I.length-1),Ee=ie/2-oe/2;I.forEach((be,we)=>{y.fillText(be,ae/2,Ee+we*k)});const se=y.getImageData(0,0,ae,ie).data,de=6,Pe=Math.min(X/ae,j/ie)*(P?1.38:.82),Re=[];for(let be=0;be<ie;be+=de)for(let we=0;we<ae;we+=de)if(se[(be*ae+we)*4+3]>10){const N=(we-ae/2)*Pe,fe=(ie/2-be)*Pe,re=(Math.random()-.5)*50;Re.push(N,fe,re)}const Me=new Float32Array(Re);return{positions:new Float32Array(Me),basePositions:Me}},ue=()=>{const X=w.clientWidth,j=w.clientHeight;A=new PM,M=new _d(-X/2,X/2,j/2,-j/2,1,1e3),M.position.z=400,x=new RM({antialias:!0,alpha:!0}),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setSize(X,j),x.setClearColor(0,0),w.innerHTML="",w.appendChild(x.domElement);const Q=ne(X,j);q=Q.positions,ee=Q.basePositions,Ge=new Float32Array(ee.length);for(let g=0;g<ee.length;g+=3){const P=ee[g],I=ee[g+1],W=ee[g+2],k=Math.floor(Math.random()*4);let ae=P,ie=I;const oe=Math.max(X,j)*1.2;k===0?ae=P-oe:k===1?ae=P+oe:k===2?ie=I-oe:ie=I+oe,Ge[g]=ae,Ge[g+1]=ie,Ge[g+2]=W+oe*.2*(Math.random()-.5),q[g]=ae,q[g+1]=ie,q[g+2]=W+oe*.2*(Math.random()-.5)}R=new kn,R.setAttribute("position",new Kt(q,3));const y=new bd({color:2278750,size:2.4,transparent:!0,opacity:.95});U=new LM(R,y),A.add(U)},xe=()=>{if(!R||!q||!ee)return;const X=w.clientWidth,j=w.clientHeight,Q=Math.min(X,j)*.22,y=.08,g=18;if(ye&&_e<De){const P=_e/De;for(let I=0;I<q.length;I+=3){const W=Ge[I],k=Ge[I+1],ae=Ge[I+2],ie=ee[I],oe=ee[I+1],Ee=ee[I+2],se=1-Math.pow(1-P,3);q[I]=W+(ie-W)*se,q[I+1]=k+(oe-k)*se,q[I+2]=ae+(Ee-ae)*se}_e++,_e>=De&&(ye=!1),R.attributes.position.needsUpdate=!0;return}for(let P=0;P<q.length;P+=3){const I=ee[P],W=ee[P+1],k=ee[P+2];let ae=q[P]+(I-q[P])*y,ie=q[P+1]+(W-q[P+1])*y,oe=q[P+2]+(k-q[P+2])*y;if(Y.active){const Ee=ae-Y.x,se=ie-Y.y,de=Math.sqrt(Ee*Ee+se*se);if(de<Q&&de>.001){const Pe=(1-de/Q)*g;ae+=Ee/de*Pe,ie+=se/de*Pe,oe+=Pe*.15}}q[P]=ae,q[P+1]=ie,q[P+2]=oe}R.attributes.position.needsUpdate=!0},ve=()=>{O=window.requestAnimationFrame(ve),xe(),x.render(A,M)},Ie=X=>{if(!pe()){const j=w.getBoundingClientRect();Y.x=X.clientX-j.left-j.width/2,Y.y=-(X.clientY-j.top-j.height/2),Y.active=!0,Y.isTouch=!1}};let ze=0,Be=0,et=!1;const _=X=>{X.touches&&X.touches.length>0&&(ze=X.touches[0].clientX,Be=X.touches[0].clientY,et=!1)},L=X=>{et=!0},H=X=>{if(!et&&pe()){const j=w.getBoundingClientRect();let Q,y;X.changedTouches&&X.changedTouches.length>0?(Q=X.changedTouches[0].clientX,y=X.changedTouches[0].clientY):(Q=ze,y=Be),Y.x=Q-j.left-j.width/2,Y.y=-(y-j.top-j.height/2),Y.active=!0,Y.isTouch=!0,G&&clearTimeout(G),G=setTimeout(()=>{Y.active=!1,Y.isTouch=!1},1e3)}else Y.active=!1,Y.isTouch=!1;et=!1},te=()=>{Y.active=!1,Y.isTouch=!1,G&&(clearTimeout(G),G=null)},V=()=>{if(!w||!M||!x)return;const X=w.clientWidth,j=w.clientHeight;M.left=-X/2,M.right=X/2,M.top=j/2,M.bottom=-j/2,M.updateProjectionMatrix(),x.setSize(X,j);const Q=ne(X,j);q=Q.positions,ee=Q.basePositions,R.setAttribute("position",new Kt(q,3))};return ue(),ve(),w.addEventListener("pointermove",Ie),w.addEventListener("pointerleave",te),window.addEventListener("resize",V),window.ResizeObserver&&(J=new ResizeObserver(()=>{V()}),J.observe(w)),pe()&&(w.addEventListener("touchstart",_),w.addEventListener("touchmove",L),w.addEventListener("touchend",H)),()=>{window.removeEventListener("resize",V),J&&(J.disconnect(),J=null),w.removeEventListener("pointermove",Ie),w.removeEventListener("pointerleave",te),pe()&&(w.removeEventListener("touchstart",_),w.removeEventListener("touchmove",L),w.removeEventListener("touchend",H)),O&&window.cancelAnimationFrame(O),R&&R.dispose(),U?.material&&U.material.dispose(),x&&(x.dispose(),x.domElement?.parentNode&&x.domElement.parentNode.removeChild(x.domElement)),A=null,M=null,x=null,R=null,U=null,G&&(clearTimeout(G),G=null)}};Js(()=>{f=m(),d=v()}),wl(()=>{f&&f(),d&&d()});const v=()=>{const w=u.value;if(!w)return null;const A={x:0,y:0,active:!1,raf:0},M=10,x=()=>{A.raf=0;const O=w.getBoundingClientRect(),q=(A.x-O.left)/O.width,ee=(A.y-O.top)/O.height,J=(.5-ee)*M,Y=(q-.5)*M;w.style.setProperty("--rx",`${J.toFixed(2)}deg`),w.style.setProperty("--ry",`${Y.toFixed(2)}deg`),w.style.setProperty("--px",`${(q*100).toFixed(1)}%`),w.style.setProperty("--py",`${(ee*100).toFixed(1)}%`),w.style.setProperty("--glow",A.active?"1":"0")},R=O=>{A.x=O.clientX,A.y=O.clientY,A.active=!0,A.raf||(A.raf=window.requestAnimationFrame(x))},U=()=>{A.active=!1,w.style.setProperty("--rx","0deg"),w.style.setProperty("--ry","0deg"),w.style.setProperty("--glow","0")};return w.addEventListener("pointermove",R),w.addEventListener("pointerleave",U),()=>{w.removeEventListener("pointermove",R),w.removeEventListener("pointerleave",U),A.raf&&window.cancelAnimationFrame(A.raf)}},S=w=>{typeof window<"u"&&window.open(w,"_blank")},p=un({name:"",email:"",subject:"",message:""}),h=un(!1),C=un(""),E=async()=>{if(!p.value.name||!p.value.email||!p.value.message){C.value="Please fill in all required fields.";return}h.value=!0,C.value="";try{await KM.send("service_92g0li6","template_44tna6r",{name:p.value.name,from_email:p.value.email,subject:p.value.subject||"Portfolio Contact",message:p.value.message,to_email:"engl.info95@gmail.com"},"k1AG8V5ZdhAyqvnoK"),C.value="Message sent successfully!",p.value={name:"",email:"",subject:"",message:""}}catch(w){C.value="Failed to send message. Please try again.",console.error("Email send error:",w)}finally{h.value=!1}},T=w=>{const A=document.getElementById(w);A&&A.scrollIntoView({behavior:"smooth"}),e.value=!1},z=()=>{i.value=!0},D=()=>{i.value=!1};return(w,A)=>(Yt(),wn("div",ZM,[ce("nav",JM,[ce("div",QM,[ce("div",eS,[ce("div",tS,[ce("button",{onClick:A[0]||(A[0]=M=>e.value=!e.value),class:"text-white focus:outline-none","aria-label":"Toggle menu"},[e.value?(Yt(),wn("svg",iS,[...A[15]||(A[15]=[ce("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(Yt(),wn("svg",nS,[...A[14]||(A[14]=[ce("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))])]),ce("div",rS,[ce("a",{href:"#about",class:Dt(["transition duration-300 font-medium",t.value==="about"?"text-emerald-100":"text-white hover:text-lime-100"])},"About me",2),ce("a",{href:"#experience",class:Dt(["transition duration-300 font-medium",t.value==="experience"?"text-emerald-100":"text-white hover:text-lime-100"])},"Professional Experience",2),ce("a",{href:"#projects",class:Dt(["transition duration-300 font-medium",t.value==="projects"?"text-emerald-100":"text-white hover:text-lime-100"])},"Passion Projects",2),ce("a",{href:"#education",class:Dt(["transition duration-300 font-medium",t.value==="education"?"text-emerald-100":"text-white hover:text-lime-100"])},"Education",2),ce("a",{href:"#contact",class:Dt(["transition duration-300 font-medium",t.value==="contact"?"text-emerald-100":"text-white hover:text-lime-100"])},"Contact Me",2)])]),Pt(Bp,{name:"fade"},{default:lf(()=>[e.value?(Yt(),wn("div",sS,[ce("a",{href:"#about",onClick:A[1]||(A[1]=M=>T("about")),class:Dt(["transition duration-300 font-medium px-4",t.value==="about"?"text-emerald-100":"text-white hover:text-lime-100"])},"About me",2),ce("a",{href:"#experience",onClick:A[2]||(A[2]=M=>T("experience")),class:Dt(["transition duration-300 font-medium px-4",t.value==="experience"?"text-emerald-100":"text-white hover:text-lime-100"])},"Professional Experience",2),ce("a",{href:"#projects",onClick:A[3]||(A[3]=M=>T("projects")),class:Dt(["transition duration-300 font-medium px-4",t.value==="projects"?"text-emerald-100":"text-white hover:text-lime-100"])},"Passion Projects",2),ce("a",{href:"#education",onClick:A[4]||(A[4]=M=>T("education")),class:Dt(["transition duration-300 font-medium px-4",t.value==="education"?"text-emerald-100":"text-white hover:text-lime-100"])},"Education",2),ce("a",{href:"#contact",onClick:A[5]||(A[5]=M=>T("contact")),class:Dt(["transition duration-300 font-medium px-4",t.value==="contact"?"text-emerald-100":"text-white hover:text-lime-100"])},"Contact Me",2)])):Oi("",!0)]),_:1})])]),ce("section",oS,[ce("div",aS,[ce("div",lS,[ce("h1",{class:"sr-only"},Fs(Pu)),ce("div",{ref_key:"pointCloudContainer",ref:c,class:"pointcloud-container w-full h-full"},null,512)]),ce("div",{ref_key:"portraitContainer",ref:u,class:"mx-auto mb-6 portrait-effect",style:{background:"#000",width:"18rem",height:"18rem",display:"flex","align-items":"center","justify-content":"center"}},[...A[16]||(A[16]=[ce("img",{src:dm,alt:"Constantin",class:"portrait-image-effect",style:{width:"100%",height:"100%","object-fit":"cover",background:"#000"}},null,-1)])],512),A[17]||(A[17]=ce("p",{class:"text-sm sm:text-base md:text-xl mb-3 md:mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"I am a Software Engineer with extensive hands-on experience and a master’s degree in computer science. ",-1)),A[18]||(A[18]=ce("p",{class:"text-sm sm:text-base md:text-xl mb-3 md:mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"I specialize in full-stack web development and machine learning, with hands-on experience applying AI to real-world engineering problems. I combine a strong academic foundation with continuous, self-driven learning through personal projects.",-1)),A[19]||(A[19]=ce("p",{class:"text-sm sm:text-base md:text-xl mb-4 leading-6 sm:leading-relaxed text-green-200 max-w-[22rem] sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"},"In addition, I have a strong passion for game development, where I enjoy combining creativity with technical problem-solving. I am driven by curiosity, continuous learning, and a desire to build intelligent systems that make a meaningful impact.",-1)),ce("div",cS,[ce("button",{class:"border-2 border-green-400 text-green-300 hover:bg-green-500 hover:text-black font-bold py-3 px-6 rounded-full transition duration-300",onClick:A[6]||(A[6]=M=>T("contact"))},"Contact Me")])])]),A[40]||(A[40]=Hs('<div class="w-full flex justify-center my-12" data-v-1e8108bf><div class="w-4/5 border-t border-gray-300" data-v-1e8108bf></div></div><section id="experience" class="min-h-screen flex items-center justify-center" data-v-1e8108bf><div class="max-w-none px-8 py-12" data-v-1e8108bf><h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900" data-v-1e8108bf>Professional Experience</h2><div class="space-y-6" data-v-1e8108bf><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-1e8108bf><img src="'+hm+'" alt="Infineon Technologies" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-1e8108bf><div class="flex-1" data-v-1e8108bf><h3 class="text-2xl font-semibold mb-2 text-gray-900" data-v-1e8108bf>Software Engineer</h3><p class="text-gray-700 mb-2" data-v-1e8108bf>Alten GmbH | October 2022 - November 2025</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-1e8108bf><li data-v-1e8108bf>Full stack web development (ASP.NET Core, Vue.js)</li><li data-v-1e8108bf>Classified 3D-CAD files using machine learning (PyTorch)</li><li data-v-1e8108bf>Developed tools to automate FEM simulations (Java, C#, Python, JavaScript)</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-1e8108bf><img src="'+pm+'" alt="Infineon Master Thesis" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-1e8108bf><div class="flex-1" data-v-1e8108bf><h3 class="text-2xl font-semibold mb-2" data-v-1e8108bf>Master Thesis</h3><p class="text-gray-700 mb-2" data-v-1e8108bf>Infineon Technologies AG | March 2022 – September 2022</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-1e8108bf><li data-v-1e8108bf>Evaluated and applied a container-based HPC framework</li><li data-v-1e8108bf>Linux shell scripting</li><li data-v-1e8108bf>Web development</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-1e8108bf><img src="'+mm+'" alt="Infineon Working Student" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-1e8108bf><div class="flex-1" data-v-1e8108bf><h3 class="text-2xl font-semibold mb-2" data-v-1e8108bf>Working Student</h3><p class="text-gray-700 mb-2" data-v-1e8108bf>Infineon Technologies AG | September 2020 – March 2022</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-1e8108bf><li data-v-1e8108bf>Developed tools related to FEM simulation for semiconductor packaging</li><li data-v-1e8108bf>Created and extended ASP.NET web applications</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-1e8108bf><img src="'+gm+'" alt="TGW Software Services" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-1e8108bf><div class="flex-1" data-v-1e8108bf><h3 class="text-2xl font-semibold mb-2" data-v-1e8108bf>Java Software Developer</h3><p class="text-gray-700 mb-2" data-v-1e8108bf>TGW Software Services GmbH | March 2019 – February 2020</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-1e8108bf><li data-v-1e8108bf>Estimated, implemented, and tested change requests for intralogistics software</li><li data-v-1e8108bf>Analyzed support tickets and fixed bugs</li></ul></div></div><div class="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col md:flex-row items-center md:items-start" data-v-1e8108bf><img src="'+_m+'" alt="University Bachelor Thesis" class="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0 img-on-white" data-v-1e8108bf><div class="flex-1" data-v-1e8108bf><h3 class="text-2xl font-semibold mb-2" data-v-1e8108bf>Bachelor Thesis</h3><p class="text-gray-700 mb-2" data-v-1e8108bf>University of Applied Sciences Regensburg | 2018</p><ul class="list-disc list-inside space-y-1 text-gray-700" data-v-1e8108bf><li data-v-1e8108bf>Clustered and classified log data using machine learning (R)</li><li data-v-1e8108bf>Identified user profiles by their network traffic log data</li></ul></div></div></div></div></section><div class="w-full flex justify-center my-12" data-v-1e8108bf><div class="w-4/5 border-t border-gray-300" data-v-1e8108bf></div></div>',3)),ce("section",uS,[ce("div",fS,[A[29]||(A[29]=ce("h2",{class:"text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"},"Passion Projects",-1)),ce("div",dS,[ce("div",hS,[A[20]||(A[20]=ce("img",{src:vm,alt:"Tower Defense Game Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1)),A[21]||(A[21]=ce("h3",{class:"text-2xl font-semibold mb-2 text-gray-900"},"Tower Defense Game",-1)),A[22]||(A[22]=ce("p",{class:"mb-4 text-gray-700"},"A 2D cartoon-style mobile game developed in Unity. This work-in-progress project combines strategic tower defense gameplay with nostalgic slicing mechanics.",-1)),A[23]||(A[23]=ce("span",{class:"text-gray-500 italic"},"Repository coming soon",-1)),ce("div",pS,[ce("button",{class:"mt-8 md:mt-12 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition mx-auto",onClick:ko(z,["stop"]),"aria-label":"Open Tower Defense Game Preview"}," ▶ Preview ")])]),ce("div",{onClick:A[7]||(A[7]=M=>S("https://github.com/ConstiE-dev/MAP_2025")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...A[24]||(A[24]=[ce("img",{src:xm,alt:"MAP 2025 Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),ce("h3",{class:"text-2xl font-semibold mb-2"},"MAP 2025",-1),ce("p",{class:"mb-4 text-gray-700"},"A Kaggle competition entry focused on natural language processing and fine-tuning state-of-the-art language models for a classification task.",-1),ce("a",{href:"https://github.com/ConstiE-dev/MAP_2025",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])]),ce("div",{onClick:A[8]||(A[8]=M=>S("https://github.com/ConstiE-dev/RNATransformer")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...A[25]||(A[25]=[ce("img",{src:Mm,alt:"RNA Transformer Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),ce("h3",{class:"text-2xl font-semibold mb-2"},"RNA Transformer",-1),ce("p",{class:"mb-4 text-gray-700"},"A Kaggle competition entry featuring a from-scratch implementation of a basic transformer architecture to predict the 3D structure of RNA sequences.",-1),ce("a",{href:"https://github.com/ConstiE-dev/RNATransformer",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])]),ce("div",{onClick:A[9]||(A[9]=M=>S("https://github.com/ConstiE-dev/backpack-prediction")),class:"bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl hover:transform hover:scale-105 transition duration-300 cursor-pointer"},[...A[26]||(A[26]=[ce("img",{src:Sm,alt:"Backpack Prediction Project",class:"w-full h-32 object-cover rounded-lg mb-4 img-on-white"},null,-1),ce("h3",{class:"text-2xl font-semibold mb-2"},"Backpack Prediction",-1),ce("p",{class:"mb-4 text-gray-700"},"A data science competition entry focused on predicting backpack prices based on a tabular dataset.",-1),ce("a",{href:"https://github.com/ConstiE-dev/backpack-prediction",target:"_blank",class:"text-blue-400 hover:underline"},"View on GitHub →",-1)])])]),i.value?(Yt(),wn("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4",role:"dialog","aria-modal":"true","aria-label":"Tower Defense Game Preview",onClick:ko(D,["self"])},[ce("div",{class:"w-full max-w-4xl bg-black/80 border border-green-400/40 rounded-xl shadow-2xl p-4"},[ce("div",{class:"flex items-center justify-between mb-3"},[A[27]||(A[27]=ce("h3",{class:"text-lg md:text-xl font-semibold text-green-200"},"Preview",-1)),ce("button",{class:"text-green-200 hover:text-white border border-green-400/40 rounded-full px-3 py-1 transition duration-200",onClick:D}," Close ")]),A[28]||(A[28]=ce("video",{class:"w-full rounded-lg bg-black",src:ym,controls:"",autoplay:"",muted:"",loop:"",playsinline:""},null,-1))])])):Oi("",!0)])]),A[41]||(A[41]=Hs('<div class="w-full flex justify-center my-12" data-v-1e8108bf><div class="w-4/5 border-t border-gray-300" data-v-1e8108bf></div></div><section id="education" class="min-h-screen flex items-center justify-center" data-v-1e8108bf><div class="max-w-4xl px-4 py-12" data-v-1e8108bf><h2 class="text-4xl md:text-5xl font-bold mb-8 text-center" data-v-1e8108bf>Education</h2><br data-v-1e8108bf><div class="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-2xl" data-v-1e8108bf><div class="space-y-4" data-v-1e8108bf><div class="border-l-4 border-blue-400 pl-4" data-v-1e8108bf><h4 class="text-xl font-medium text-gray-900" data-v-1e8108bf>🎓 Master&#39;s in Computer Science</h4><p class="text-gray-700" data-v-1e8108bf>OTH Regensburg</p><p class="text-sm text-gray-500" data-v-1e8108bf>March 2020 – September 2022</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-1e8108bf><h4 class="text-xl font-medium text-gray-900" data-v-1e8108bf>🎓 Bachelor&#39;s in Computer Science</h4><p class="text-gray-700" data-v-1e8108bf>OTH Regensburg</p><p class="text-sm text-gray-500" data-v-1e8108bf>March 2015 – January 2019</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-1e8108bf><h4 class="text-xl font-medium text-gray-900" data-v-1e8108bf>🏫 General Qualification for University Entrance</h4><p class="text-gray-700" data-v-1e8108bf>Albertus-Magnus Gymnasium Regensburg</p><p class="text-sm text-gray-500" data-v-1e8108bf>October 2006 – August 2014</p></div><div class="border-l-4 border-blue-400 pl-4" data-v-1e8108bf><h4 class="text-xl font-medium text-gray-900" data-v-1e8108bf>🏫 Elementary School</h4><p class="text-gray-700" data-v-1e8108bf>Grundschule Großberg</p><p class="text-sm text-gray-500" data-v-1e8108bf>October 2002 – August 2006</p></div></div></div></div></section><div class="w-full flex justify-center my-12" data-v-1e8108bf><div class="w-4/5 border-t border-gray-300" data-v-1e8108bf></div></div>',3)),ce("section",mS,[ce("div",gS,[A[36]||(A[36]=ce("h2",{class:"text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"},"Contact Me",-1)),ce("div",_S,[A[35]||(A[35]=Hs('<div class="flex-1 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl flex flex-col justify-center min-w-0" data-v-1e8108bf><h3 class="text-2xl font-semibold mb-4 text-center text-gray-900" data-v-1e8108bf>Get In Touch</h3><div class="text-center space-y-2" data-v-1e8108bf><p class="text-base text-gray-700 mb-2" data-v-1e8108bf>Feel free to reach out to me directly:</p><div class="flex flex-col sm:flex-row gap-2 justify-center items-center" data-v-1e8108bf><a href="mailto:engl.info95@gmail.com" class="inline-block bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105" data-v-1e8108bf> 📧 engl.info95@gmail.com </a><a href="https://www.linkedin.com/in/constantin-engl" target="_blank" class="inline-block bg-blue-700 hover:bg-blue-800 text-gray-50 font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105" data-v-1e8108bf> 💼 LinkedIn Profile </a></div></div></div>',1)),ce("div",vS,[A[34]||(A[34]=ce("h3",{class:"text-2xl font-semibold mb-4 text-center text-gray-900"},"Or Send a Message",-1)),ce("form",{onSubmit:ko(E,["prevent"]),class:"space-y-4"},[ce("div",xS,[ce("div",null,[A[30]||(A[30]=ce("label",{for:"name",class:"block text-sm font-medium text-gray-700 mb-1"},"Name *",-1)),as(ce("input",{"onUpdate:modelValue":A[10]||(A[10]=M=>p.value.name=M),type:"text",id:"name",required:"",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"Your name"},null,512),[[cs,p.value.name]])]),ce("div",null,[A[31]||(A[31]=ce("label",{for:"email",class:"block text-sm font-medium text-gray-700 mb-1"},"Email *",-1)),as(ce("input",{"onUpdate:modelValue":A[11]||(A[11]=M=>p.value.email=M),type:"email",id:"email",required:"",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"your.email@example.com"},null,512),[[cs,p.value.email]])])]),ce("div",null,[A[32]||(A[32]=ce("label",{for:"subject",class:"block text-sm font-medium text-gray-700 mb-1"},"Subject",-1)),as(ce("input",{"onUpdate:modelValue":A[12]||(A[12]=M=>p.value.subject=M),type:"text",id:"subject",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400",placeholder:"What is this about?"},null,512),[[cs,p.value.subject]])]),ce("div",null,[A[33]||(A[33]=ce("label",{for:"message",class:"block text-sm font-medium text-gray-700 mb-1"},"Message *",-1)),as(ce("textarea",{"onUpdate:modelValue":A[13]||(A[13]=M=>p.value.message=M),id:"message",required:"",rows:"4",class:"w-full px-3 py-2 bg-white/20 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-vertical",placeholder:"Tell me about your project or inquiry."},null,512),[[cs,p.value.message]])]),ce("div",MS,[ce("button",{type:"submit",disabled:h.value,class:"bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-gray-50 font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"},Fs(h.value?"Sending...":"Send Message"),9,SS),C.value?(Yt(),wn("p",{key:0,class:Dt(["text-sm",C.value.includes("successfully")?"text-green-400":"text-red-400"])},Fs(C.value),3)):Oi("",!0)])],32)])])])]),ce("footer",{class:"w-full py-6 bg-gray-100 border-t border-gray-300 flex justify-center items-center text-sm text-gray-700"},[A[37]||(A[37]=ce("span",{class:"mx-2"},"© 2026 Constantin Engl",-1)),A[38]||(A[38]=ce("span",{class:"mx-2"},"|",-1)),ce("button",{class:"text-blue-600 hover:underline mx-2",onClick:o},"Impressum"),A[39]||(A[39]=ce("span",{class:"mx-2"},"|",-1)),ce("button",{class:"text-blue-600 hover:underline mx-2",onClick:a},"Privacy Policy")]),r.value||s.value?(Yt(),wn("div",yS,[ce("div",bS,[ce("button",{class:"absolute top-2 right-2 text-gray-500 hover:text-black text-xl",onClick:l},"×"),r.value?(Yt(),wa(UM,{key:0,onGoBack:l})):Oi("",!0),s.value?(Yt(),wa(OM,{key:1,onGoBack:l})):Oi("",!0)])])):Oi("",!0)]))}},TS=Hl(ES,[["__scopeId","data-v-1e8108bf"]]);cm(TS).mount("#app");
