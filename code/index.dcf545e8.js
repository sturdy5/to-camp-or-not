(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const uo="modulepreload",co=function(e){return"/to-camp-or-not/"+e},pi={},ho=function(t,i,r){if(!i||i.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(i.map(s=>{if(s=co(s),s in pi)return;pi[s]=!0;const n=s.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const c=o[d];if(c.href===s&&(!n||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${u}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":uo,n||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),n)return new Promise((d,c)=>{l.addEventListener("load",d),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=window,Xe=Qt.ShadowRoot&&(Qt.ShadyCSS===void 0||Qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),fi=new WeakMap;class br{constructor(t,i,r){if(this._$cssResult$=!0,r!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Xe&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=fi.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&fi.set(i,t))}return t}toString(){return this.cssText}}const po=e=>new br(typeof e=="string"?e:e+"",void 0,Qe),Gt=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new br(i,e,Qe)},fo=(e,t)=>{Xe?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const r=document.createElement("style"),o=Qt.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)})},mi=Xe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return po(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;const oe=window,gi=oe.trustedTypes,mo=gi?gi.emptyScript:"",vi=oe.reactiveElementPolyfillSupport,Be={toAttribute(e,t){switch(t){case Boolean:e=e?mo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},_r=(e,t)=>t!==e&&(t==t||e==e),ye={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:_r};class dt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;(i=this.h)!==null&&i!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,r)=>{const o=this._$Ep(r,i);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,i=ye){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ye}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of r)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(mi(o))}else t!==void 0&&i.push(mi(t));return i}static _$Ep(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return fo(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EO(t,i,r=ye){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Be).toAttribute(i,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),u=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Be;this._$El=s,this[s]=u.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||_r)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(r)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}dt.finalized=!0,dt.elementProperties=new Map,dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},vi==null||vi({ReactiveElement:dt}),((_e=oe.reactiveElementVersions)!==null&&_e!==void 0?_e:oe.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const se=window,vt=se.trustedTypes,bi=vt?vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Y=`lit$${(Math.random()+"").slice(9)}$`,yr="?"+Y,go=`<${yr}>`,bt=document,Dt=(e="")=>bt.createComment(e),zt=e=>e===null||typeof e!="object"&&typeof e!="function",wr=Array.isArray,vo=e=>wr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_i=/-->/g,yi=/>/g,ot=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wi=/'/g,$i=/"/g,$r=/^(?:script|style|textarea|title)$/i,bo=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),et=bo(1),_t=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),xi=new WeakMap,mt=bt.createTreeWalker(bt,129,null,!1),_o=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":"",n=Tt;for(let a=0;a<i;a++){const l=e[a];let d,c,h=-1,m=0;for(;m<l.length&&(n.lastIndex=m,c=n.exec(l),c!==null);)m=n.lastIndex,n===Tt?c[1]==="!--"?n=_i:c[1]!==void 0?n=yi:c[2]!==void 0?($r.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=ot):c[3]!==void 0&&(n=ot):n===ot?c[0]===">"?(n=o!=null?o:Tt,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?ot:c[3]==='"'?$i:wi):n===$i||n===wi?n=ot:n===_i||n===yi?n=Tt:(n=ot,o=void 0);const v=n===ot&&e[a+1].startsWith("/>")?" ":"";s+=n===Tt?l+go:h>=0?(r.push(d),l.slice(0,h)+"$lit$"+l.slice(h)+Y+v):l+Y+(h===-2?(r.push(void 0),a):v)}const u=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[bi!==void 0?bi.createHTML(u):u,r]};class Ft{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const u=t.length-1,a=this.parts,[l,d]=_o(t,i);if(this.el=Ft.createElement(l,r),mt.currentNode=this.el.content,i===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(o=mt.nextNode())!==null&&a.length<u;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(Y)){const m=d[n++];if(c.push(h),m!==void 0){const v=o.getAttribute(m.toLowerCase()+"$lit$").split(Y),b=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:b[2],strings:v,ctor:b[1]==="."?wo:b[1]==="?"?xo:b[1]==="@"?Co:pe})}else a.push({type:6,index:s})}for(const h of c)o.removeAttribute(h)}if($r.test(o.tagName)){const c=o.textContent.split(Y),h=c.length-1;if(h>0){o.textContent=vt?vt.emptyScript:"";for(let m=0;m<h;m++)o.append(c[m],Dt()),mt.nextNode(),a.push({type:2,index:++s});o.append(c[h],Dt())}}}else if(o.nodeType===8)if(o.data===yr)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Y,c+1))!==-1;)a.push({type:7,index:s}),c+=Y.length-1}s++}}static createElement(t,i){const r=bt.createElement("template");return r.innerHTML=t,r}}function yt(e,t,i=e,r){var o,s,n,u;if(t===_t)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const l=zt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,r)),r!==void 0?((n=(u=i)._$Co)!==null&&n!==void 0?n:u._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=yt(e,a._$AS(e,t.values),a,r)),t}class yo{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:r},parts:o}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:bt).importNode(r,!0);mt.currentNode=s;let n=mt.nextNode(),u=0,a=0,l=o[0];for(;l!==void 0;){if(u===l.index){let d;l.type===2?d=new Jt(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Eo(n,this,t)),this.u.push(d),l=o[++a]}u!==(l==null?void 0:l.index)&&(n=mt.nextNode(),u++)}return s}p(t){let i=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}class Jt{constructor(t,i,r,o){var s;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=yt(this,t,i),zt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==_t&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vo(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==E&&zt(this._$AH)?this._$AA.nextSibling.data=t:this.T(bt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ft.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(r);else{const n=new yo(s,this),u=n.v(this.options);n.p(r),this.T(u),this._$AH=n}}_$AC(t){let i=xi.get(t.strings);return i===void 0&&xi.set(t.strings,i=new Ft(t)),i}k(t){wr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new Jt(this.O(Dt()),this.O(Dt()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}}class pe{constructor(t,i,r,o,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=yt(this,t,i,0),n=!zt(t)||t!==this._$AH&&t!==_t,n&&(this._$AH=t);else{const u=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=yt(this,u[r+a],i,a),l===_t&&(l=this._$AH[a]),n||(n=!zt(l)||l!==this._$AH[a]),l===E?t=E:t!==E&&(t+=(l!=null?l:"")+s[a+1]),this._$AH[a]=l}n&&!o&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class wo extends pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}const $o=vt?vt.emptyScript:"";class xo extends pe{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,$o):this.element.removeAttribute(this.name)}}class Co extends pe{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){var r;if((t=(r=yt(this,t,i,0))!==null&&r!==void 0?r:E)===_t)return;const o=this._$AH,s=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==E&&(o===E||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Eo{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){yt(this,t)}}const Ci=se.litHtmlPolyfillSupport;Ci==null||Ci(Ft,Jt),((we=se.litHtmlVersions)!==null&&we!==void 0?we:se.litHtmlVersions=[]).push("2.4.0");const So=(e,t,i)=>{var r,o;const s=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:t;let n=s._$litPart$;if(n===void 0){const u=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new Jt(t.insertBefore(Dt(),u),u,void 0,i!=null?i:{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e,xe;class D extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const r=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=r.firstChild),r}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=So(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return _t}}D.finalized=!0,D._$litElement$=!0,($e=globalThis.litElementHydrateSupport)===null||$e===void 0||$e.call(globalThis,{LitElement:D});const Ei=globalThis.litElementPolyfillSupport;Ei==null||Ei({LitElement:D});((xe=globalThis.litElementVersions)!==null&&xe!==void 0?xe:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=e=>t=>typeof t=="function"?((i,r)=>(customElements.define(i,r),r))(e,t):((i,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){customElements.define(i,n)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function W(e){return(t,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(e,t,i):Ao(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ti(e){return W({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=({finisher:e,descriptor:t})=>(i,r)=>{var o;if(r===void 0){const s=(o=i.originalKey)!==null&&o!==void 0?o:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:{...i,key:s};return e!=null&&(n.finisher=function(u){e(u,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,r,t(r)),e==null||e(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e,t){return ko({descriptor:i=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[o]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;((Ce=window.HTMLSlotElement)===null||Ce===void 0?void 0:Ce.prototype.assignedElements)!=null;function ne(e){return e=e||[],Array.isArray(e)?e:[e]}function B(e){return`[Vaadin.Router] ${e}`}function Po(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const ae="module",le="nomodule",De=[ae,le];function Si(e){if(!e.match(/.+\.[m]?js$/))throw new Error(B(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function xr(e){if(!e||!L(e.path))throw new Error(B('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,i=["component","redirect","bundle"];if(!nt(e.action)&&!Array.isArray(e.children)&&!nt(e.children)&&!ue(t)&&!i.some(r=>L(e[r])))throw new Error(B(`Expected route config "${e.path}" to include either "${i.join('", "')}" or "action" function but none found.`));if(t)if(L(t))Si(t);else if(De.some(r=>r in t))De.forEach(r=>r in t&&Si(t[r]));else throw new Error(B('Expected route bundle to include either "'+le+'" or "'+ae+'" keys, or both'));e.redirect&&["bundle","component"].forEach(r=>{r in e&&console.warn(B(`Route config "${e.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function Ai(e){ne(e).forEach(t=>xr(t))}function ki(e,t){let i=document.head.querySelector('script[src="'+e+'"][async]');return i||(i=document.createElement("script"),i.setAttribute("src",e),t===ae?i.setAttribute("type",ae):t===le&&i.setAttribute(le,""),i.async=!0),new Promise((r,o)=>{i.onreadystatechange=i.onload=s=>{i.__dynamicImportLoaded=!0,r(s)},i.onerror=s=>{i.parentNode&&i.parentNode.removeChild(i),o(s)},i.parentNode===null?document.head.appendChild(i):i.__dynamicImportLoaded&&r()})}function To(e){return L(e)?ki(e):Promise.race(De.filter(t=>t in e).map(t=>ki(e[t],t)))}function Nt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function ue(e){return typeof e=="object"&&!!e}function nt(e){return typeof e=="function"}function L(e){return typeof e=="string"}function Cr(e){const t=new Error(B(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const pt=new class{};function Uo(e){const t=e.port,i=e.protocol,s=i==="http:"&&t==="80"||i==="https:"&&t==="443"?e.hostname:e.host;return`${i}//${s}`}function Pi(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const i=e.composedPath?e.composedPath():e.path||[];for(let u=0;u<i.length;u++){const a=i[u];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Uo(t))!==window.location.origin)return;const{pathname:o,search:s,hash:n}=t;Nt("go",{pathname:o,search:s,hash:n})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const Oo={activate(){window.document.addEventListener("click",Pi)},inactivate(){window.document.removeEventListener("click",Pi)}},Ro=/Trident/.test(navigator.userAgent);Ro&&!nt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var i=document.createEvent("Event");return i.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),i.state=t.state||null,i},window.PopStateEvent.prototype=window.Event.prototype);function Ti(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:i,hash:r}=window.location;Nt("go",{pathname:t,search:i,hash:r})}const No={activate(){window.addEventListener("popstate",Ti)},inactivate(){window.removeEventListener("popstate",Ti)}};var kt=Tr,Mo=ei,Lo=Fo,Bo=Ar,Do=Pr,Er="/",Sr="./",zo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ei(e,t){for(var i=[],r=0,o=0,s="",n=t&&t.delimiter||Er,u=t&&t.delimiters||Sr,a=!1,l;(l=zo.exec(e))!==null;){var d=l[0],c=l[1],h=l.index;if(s+=e.slice(o,h),o=h+d.length,c){s+=c[1],a=!0;continue}var m="",v=e[o],b=l[2],P=l[3],N=l[4],T=l[5];if(!a&&s.length){var A=s.length-1;u.indexOf(s[A])>-1&&(m=s[A],s=s.slice(0,A))}s&&(i.push(s),s="",a=!1);var no=m!==""&&v!==void 0&&v!==m,ao=T==="+"||T==="*",lo=T==="?"||T==="*",di=m||n,hi=P||N;i.push({name:b||r++,prefix:m,delimiter:di,optional:lo,repeat:ao,partial:no,pattern:hi?Io(hi):"[^"+G(di)+"]+?"})}return(s||o<e.length)&&i.push(s+e.substr(o)),i}function Fo(e,t){return Ar(ei(e,t))}function Ar(e){for(var t=new Array(e.length),i=0;i<e.length;i++)typeof e[i]=="object"&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(r,o){for(var s="",n=o&&o.encode||encodeURIComponent,u=0;u<e.length;u++){var a=e[u];if(typeof a=="string"){s+=a;continue}var l=r?r[a.name]:void 0,d;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(d=n(l[c],a),!t[u].test(d))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(c===0?a.prefix:a.delimiter)+d}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(d=n(String(l),a),!t[u].test(d))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+d+'"');s+=a.prefix+d;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function G(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Io(e){return e.replace(/([=!:$/()])/g,"\\$1")}function kr(e){return e&&e.sensitive?"":"i"}function Vo(e,t){if(!t)return e;var i=e.source.match(/\((?!\?)/g);if(i)for(var r=0;r<i.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Ho(e,t,i){for(var r=[],o=0;o<e.length;o++)r.push(Tr(e[o],t,i).source);return new RegExp("(?:"+r.join("|")+")",kr(i))}function jo(e,t,i){return Pr(ei(e,i),t,i)}function Pr(e,t,i){i=i||{};for(var r=i.strict,o=i.start!==!1,s=i.end!==!1,n=G(i.delimiter||Er),u=i.delimiters||Sr,a=[].concat(i.endsWith||[]).map(G).concat("$").join("|"),l=o?"^":"",d=e.length===0,c=0;c<e.length;c++){var h=e[c];if(typeof h=="string")l+=G(h),d=c===e.length-1&&u.indexOf(h[h.length-1])>-1;else{var m=h.repeat?"(?:"+h.pattern+")(?:"+G(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=G(h.prefix)+"("+m+")?":l+="(?:"+G(h.prefix)+"("+m+"))?":l+=G(h.prefix)+"("+m+")"}}return s?(r||(l+="(?:"+n+")?"),l+=a==="$"?"$":"(?="+a+")"):(r||(l+="(?:"+n+"(?="+a+"))?"),d||(l+="(?="+n+"|"+a+")")),new RegExp(l,kr(i))}function Tr(e,t,i){return e instanceof RegExp?Vo(e,t):Array.isArray(e)?Ho(e,t,i):jo(e,t,i)}kt.parse=Mo;kt.compile=Lo;kt.tokensToFunction=Bo;kt.tokensToRegExp=Do;const{hasOwnProperty:qo}=Object.prototype,ze=new Map;ze.set("|false",{keys:[],pattern:/(?:)/});function Ui(e){try{return decodeURIComponent(e)}catch{return e}}function Wo(e,t,i,r,o){i=!!i;const s=`${e}|${i}`;let n=ze.get(s);if(!n){const l=[];n={keys:l,pattern:kt(e,l,{end:i,strict:e===""})},ze.set(s,n)}const u=n.pattern.exec(t);if(!u)return null;const a=Object.assign({},o);for(let l=1;l<u.length;l++){const d=n.keys[l-1],c=d.name,h=u[l];(h!==void 0||!qo.call(a,c))&&(d.repeat?a[c]=h?h.split(d.delimiter).map(Ui):[]:a[c]=h&&Ui(h))}return{path:u[0],keys:(r||[]).concat(n.keys),params:a}}function Ur(e,t,i,r,o){let s,n,u=0,a=e.path||"";return a.charAt(0)==="/"&&(i&&(a=a.substr(1)),i=!0),{next(l){if(e===l)return{done:!0};const d=e.__children=e.__children||e.children;if(!s&&(s=Wo(a,t,!d,r,o),s))return{done:!1,value:{route:e,keys:s.keys,params:s.params,path:s.path}};if(s&&d)for(;u<d.length;){if(!n){const h=d[u];h.parent=e;let m=s.path.length;m>0&&t.charAt(m)==="/"&&(m+=1),n=Ur(h,t.substr(m),i,s.keys,s.params)}const c=n.next(l);if(!c.done)return{done:!1,value:c.value};n=null,u++}return{done:!0}}}}function Ko(e){if(nt(e.route.action))return e.route.action(e)}function Go(e,t){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}function Jo(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const i=(e.route||{}).path;return i&&(t+=` Resolution had failed on route: '${i}'`),t}function Yo(e,t){const{route:i,path:r}=t;if(i&&!i.__synthetic){const o={path:r,route:i};if(!e.chain)e.chain=[];else if(i.parent){let s=e.chain.length;for(;s--&&e.chain[s].route&&e.chain[s].route!==i.parent;)e.chain.pop()}e.chain.push(o)}}class It{constructor(t,i={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=i.baseUrl||"",this.errorHandler=i.errorHandler,this.resolveRoute=i.resolveRoute||Ko,this.context=Object.assign({resolver:this},i.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){Ai(t);const i=[...ne(t)];this.root.__children=i}addRoutes(t){return Ai(t),this.root.__children.push(...ne(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const i=Object.assign({},this.context,L(t)?{pathname:t}:t),r=Ur(this.root,this.__normalizePathname(i.pathname),this.baseUrl),o=this.resolveRoute;let s=null,n=null,u=i;function a(l,d=s.value.route,c){const h=c===null&&s.value.route;return s=n||r.next(h),n=null,!l&&(s.done||!Go(d,s.value.route))?(n=s,Promise.resolve(pt)):s.done?Promise.reject(Cr(i)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},i,s.value),Yo(u,s.value),Promise.resolve(o(u)).then(m=>m!=null&&m!==pt?(u.result=m.result||m,u):a(l,d,m)))}return i.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const d=Jo(u);if(l?console.warn(d):l=new Error(d),l.context=l.context||u,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return u.result=this.errorHandler(l),u;throw l})}static __createUrl(t,i){return new URL(t,i)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const i=this.__effectiveBaseUrl,r=this.constructor.__createUrl(t,i).href;if(r.slice(0,i.length)===i)return r.slice(i.length)}}It.pathToRegexp=kt;const{pathToRegexp:Oi}=It,Ri=new Map;function Or(e,t,i){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(i))for(let o=0;o<i.length;o++){const s=i[o];s.parent=t,Or(e,s,s.__children||s.children)}}function Ni(e,t){const i=e.get(t);if(i&&i.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return i&&i[0]}function Mi(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Zo(e,t={}){if(!(e instanceof It))throw new TypeError("An instance of Resolver is expected");const i=new Map;return(r,o)=>{let s=Ni(i,r);if(!s&&(i.clear(),Or(i,e.root,e.root.__children),s=Ni(i,r),!s))throw new Error(`Route "${r}" not found`);let n=Ri.get(s.fullPath);if(!n){let a=Mi(s),l=s.parent;for(;l;){const m=Mi(l);m&&(a=m.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const d=Oi.parse(a),c=Oi.tokensToFunction(d),h=Object.create(null);for(let m=0;m<d.length;m++)L(d[m])||(h[d[m].name]=!0);n={toPath:c,keys:h},Ri.set(a,n),s.fullPath=a}let u=n.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const a={},l=Object.keys(o);for(let c=0;c<l.length;c++){const h=l[c];n.keys[h]||(a[h]=o[h])}const d=t.stringifyQueryParams(a);d&&(u+=d.charAt(0)==="?"?d:`?${d}`)}return u}}let Li=[];function Xo(e){Li.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),Li=e}const Qo=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},ts=(e,t)=>{const i=()=>{e.removeEventListener("animationend",i),t()};e.addEventListener("animationend",i)};function Bi(e,t){return e.classList.add(t),new Promise(i=>{if(Qo(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),ts(e,()=>{e.classList.remove(t),e.removeAttribute("style"),i()})}else e.classList.remove(t),i()})}const es=256;function Ee(e){return e!=null}function is(e){const t=Object.assign({},e);return delete t.next,t}function M({pathname:e="",search:t="",hash:i="",chain:r=[],params:o={},redirectFrom:s,resolver:n},u){const a=r.map(l=>l.route);return{baseUrl:n&&n.baseUrl||"",pathname:e,search:t,hash:i,routes:a,route:u||a.length&&a[a.length-1]||null,params:o,redirectFrom:s,getUrl:(l={})=>ee(Q.pathToRegexp.compile(Rr(a))(Object.assign({},o,l)),n)}}function Di(e,t){const i=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:i}}}function rs(e,t){t.location=M(e);const i=e.chain.map(r=>r.route).indexOf(e.route);return e.chain[i].element=t,t}function te(e,t,i){if(nt(e))return e.apply(i,t)}function zi(e,t,i){return r=>{if(r&&(r.cancel||r.redirect))return r;if(i)return te(i[e],t,i)}}function os(e,t){if(!Array.isArray(e)&&!ue(e))throw new Error(B(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const i=ne(e);for(let r=0;r<i.length;r++)xr(i[r]),t.__children.push(i[r])}function Xt(e){if(e&&e.length){const t=e[0].parentNode;for(let i=0;i<e.length;i++)t.removeChild(e[i])}}function ee(e,t){const i=t.__effectiveBaseUrl;return i?t.constructor.__createUrl(e.replace(/^\//,""),i).pathname:e}function Rr(e){return e.map(t=>t.path).reduce((t,i)=>i.length?t.replace(/\/$/,"")+"/"+i.replace(/^\//,""):t,"")}class Q extends It{constructor(t,i){const r=document.head.querySelector("base"),o=r&&r.getAttribute("href");super([],Object.assign({baseUrl:o&&It.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},i)),this.resolveRoute=n=>this.__resolveRoute(n);const s=Q.NavigationTrigger;Q.setTriggers.apply(Q,Object.keys(s).map(n=>s[n])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=M({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const i=t.route;let r=Promise.resolve();nt(i.children)&&(r=r.then(()=>i.children(is(t))).then(s=>{!Ee(s)&&!nt(i.children)&&(s=i.children),os(s,i)}));const o={redirect:s=>Di(t,s),component:s=>{const n=document.createElement(s);return this.__createdByRouter.set(n,!0),n}};return r.then(()=>{if(this.__isLatestRender(t))return te(i.action,[t,o],i)}).then(s=>{if(Ee(s)&&(s instanceof HTMLElement||s.redirect||s===pt))return s;if(L(i.redirect))return o.redirect(i.redirect);if(i.bundle)return To(i.bundle).then(()=>{},()=>{throw new Error(B(`Bundle not found: ${i.bundle}. Check if the file name is correct`))})}).then(s=>{if(Ee(s))return s;if(L(i.component))return o.component(i.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,i=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),i||this.__onNavigationEvent(),this.ready}render(t,i){const r=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},L(t)?{pathname:t}:t,{__renderId:r});return this.ready=this.resolve(o).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const n=this.__previousContext;if(s===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=M(s),i&&this.__updateBrowserHistory(s,r===1),Nt("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,n),this.__previousContext=s,this.location;this.__addAppearingContent(s,n);const u=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,n),u.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(r===this.__lastStartedRenderId)throw i&&this.__updateBrowserHistory(o),Xt(this.__outlet&&this.__outlet.children),this.location=M(Object.assign(o,{resolver:this})),Nt("error",Object.assign({router:this,error:s},o)),s}),this.ready}__fullyResolveChain(t,i=t){return this.__findComponentContextAfterAllRedirects(i).then(r=>{const s=r!==i?r:t,u=ee(Rr(r.chain),r.resolver)===r.pathname,a=(l,d=l.route,c)=>l.next(void 0,d,c).then(h=>h===null||h===pt?u?l:d.parent!==null?a(l,d.parent,h):h:h);return a(r).then(l=>{if(l===null||l===pt)throw Cr(s);return l&&l!==pt&&l!==r?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(t){const i=t.result;return i instanceof HTMLElement?(rs(t,i),Promise.resolve(t)):i.redirect?this.__redirect(i.redirect,t.__redirectCount,t.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):i instanceof Error?Promise.reject(i):Promise.reject(new Error(B(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Po(i)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(i=>i===this.__previousContext||i===t?i:this.__fullyResolveChain(i))}__runOnBeforeCallbacks(t){const i=this.__previousContext||{},r=i.chain||[],o=t.chain;let s=Promise.resolve();const n=()=>({cancel:!0}),u=a=>Di(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,o.length)&&!(r[a].route!==o[a].route||r[a].path!==o[a].path&&r[a].element!==o[a].element||!this.__isReusableElement(r[a].element,o[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=o.length===r.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,i.result),t.__skipAttach){for(let a=o.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:n},r[a]);for(let a=0;a<o.length;a++)s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:n,redirect:u},o[a]),r[a].element.location=M(t,r[a].route)}else for(let a=r.length-1;a>=t.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:n},r[a])}if(!t.__skipAttach)for(let a=0;a<o.length;a++)a<t.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=M(t,r[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:n,redirect:u},o[a]),o[a].element&&(o[a].element.location=M(t,o[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,i,r,o){const s=M(i);return t.then(n=>{if(this.__isLatestRender(i))return zi("onBeforeLeave",[s,r,this],o.element)(n)}).then(n=>{if(!(n||{}).redirect)return n})}__runOnBeforeEnterCallbacks(t,i,r,o){const s=M(i,o.route);return t.then(n=>{if(this.__isLatestRender(i))return zi("onBeforeEnter",[s,r,this],o.element)(n)})}__isReusableElement(t,i){return t&&i?this.__createdByRouter.get(t)&&this.__createdByRouter.get(i)?t.localName===i.localName:t===i:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,i,r){if(i>es)throw new Error(B(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(i||0)+1,__renderId:r})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(B(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:i="",hash:r=""},o){if(window.location.pathname!==t||window.location.search!==i||window.location.hash!==r){const s=o?"replaceState":"pushState";window.history[s](null,document.title,t+i+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,i){let r=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const s=i&&i.chain[o].element;if(s)if(s.parentNode===r)t.chain[o].element=s,r=s;else break}return r}__addAppearingContent(t,i){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(t,i);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(s=>this.__addedByRouter.get(s)&&s!==t.result);let o=r;for(let s=t.__divergedChainIndex;s<t.chain.length;s++){const n=t.chain[s].element;n&&(o.appendChild(n),this.__addedByRouter.set(n,!0),o===r&&this.__appearingContent.push(n),o=n)}}__removeDisappearingContent(){this.__disappearingContent&&Xt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Xt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,i){if(!!i)for(let r=i.chain.length-1;r>=t.__divergedChainIndex&&this.__isLatestRender(t);r--){const o=i.chain[r].element;if(!!o)try{const s=M(t);te(o.onAfterLeave,[s,{},i.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&Xt(o.children)}}}__runOnAfterEnterCallbacks(t){for(let i=t.__divergedChainIndex;i<t.chain.length&&this.__isLatestRender(t);i++){const r=t.chain[i].element||{},o=M(t,t.chain[i].route);te(r.onAfterEnter,[o,{},t.resolver],r)}}__animateIfNeeded(t){const i=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],o=[],s=t.chain;let n;for(let u=s.length;u>0;u--)if(s[u-1].route.animate){n=s[u-1].route.animate;break}if(i&&r&&n){const u=ue(n)&&n.leave||"leaving",a=ue(n)&&n.enter||"entering";o.push(Bi(i,u)),o.push(Bi(r,a))}return Promise.all(o).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:i,search:r,hash:o}=t?t.detail:window.location;L(this.__normalizePathname(i))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:i,search:r,hash:o},!0))}static setTriggers(...t){Xo(t)}urlForName(t,i){return this.__urlForName||(this.__urlForName=Zo(this)),ee(this.__urlForName(t,i),this)}urlForPath(t,i){return ee(Q.pathToRegexp.compile(t)(i),this)}static go(t){const{pathname:i,search:r,hash:o}=L(t)?this.__createUrl(t,"http://a"):t;return Nt("go",{pathname:i,search:r,hash:o})}}const ss=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ie=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ns(){function e(){return!0}return Nr(e)}function as(){try{return ls()?!0:us()?ie?!cs():!ns():!1}catch{return!1}}function ls(){return localStorage.getItem("vaadin.developmentmode.force")}function us(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function cs(){return!!(ie&&Object.keys(ie).map(t=>ie[t]).filter(t=>t.productionMode).length>0)}function Nr(e,t){if(typeof e!="function")return;const i=ss.exec(e.toString());if(i)try{e=new Function(i[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return e(t)}window.Vaadin=window.Vaadin||{};const Fi=function(e,t){if(window.Vaadin.developmentMode)return Nr(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=as());function ds(){}const hs=function(){if(typeof Fi=="function")return Fi(ds)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});hs();Q.NavigationTrigger={POPSTATE:No,CLICK:Oo};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ii=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Fe=(e,t,i=null)=>{for(;t!==i;){const r=t.nextSibling;e.removeChild(t),t=r}},H=`{{lit-${String(Math.random()).slice(2)}}}`,Mr=`<!--${H}-->`,Vi=new RegExp(`${H}|${Mr}`);class Lr{constructor(t,i){this.parts=[],this.element=i;const r=[],o=[],s=document.createTreeWalker(i.content,133,null,!1);let n=0,u=-1,a=0;const{strings:l,values:{length:d}}=t;for(;a<d;){const c=s.nextNode();if(c!==null){if(u++,c.nodeType===1){if(c.hasAttributes()){const h=c.attributes,{length:m}=h;let v=0;for(let b=0;b<m;b++)Hi(h[b].name,"$lit$")&&v++;for(;v-- >0;){const b=l[a],P=Ie.exec(b)[2],N=P.toLowerCase()+"$lit$",T=c.getAttribute(N);c.removeAttribute(N);const A=T.split(Vi);this.parts.push({type:"attribute",index:u,name:P,strings:A}),a+=A.length-1}}c.tagName==="TEMPLATE"&&(o.push(c),s.currentNode=c.content)}else if(c.nodeType===3){const h=c.data;if(h.indexOf(H)>=0){const m=c.parentNode,v=h.split(Vi),b=v.length-1;for(let P=0;P<b;P++){let N,T=v[P];if(T==="")N=Z();else{const A=Ie.exec(T);A!==null&&Hi(A[2],"$lit$")&&(T=T.slice(0,A.index)+A[1]+A[2].slice(0,-5)+A[3]),N=document.createTextNode(T)}m.insertBefore(N,c),this.parts.push({type:"node",index:++u})}v[b]===""?(m.insertBefore(Z(),c),r.push(c)):c.data=v[b],a+=b}}else if(c.nodeType===8)if(c.data===H){const h=c.parentNode;c.previousSibling!==null&&u!==n||(u++,h.insertBefore(Z(),c)),n=u,this.parts.push({type:"node",index:u}),c.nextSibling===null?c.data="":(r.push(c),u--),a++}else{let h=-1;for(;(h=c.data.indexOf(H,h+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=o.pop()}for(const c of r)c.parentNode.removeChild(c)}}const Hi=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},Br=e=>e.index!==-1,Z=()=>document.createComment(""),Ie=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ji(e,t){const{element:{content:i},parts:r}=e,o=document.createTreeWalker(i,133,null,!1);let s=Mt(r),n=r[s],u=-1,a=0;const l=[];let d=null;for(;o.nextNode();){u++;const c=o.currentNode;for(c.previousSibling===d&&(d=null),t.has(c)&&(l.push(c),d===null&&(d=c)),d!==null&&a++;n!==void 0&&n.index===u;)n.index=d!==null?-1:n.index-a,s=Mt(r,s),n=r[s]}l.forEach(c=>c.parentNode.removeChild(c))}const ps=e=>{let t=e.nodeType===11?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},Mt=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const r=e[i];if(Br(r))return i}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const fs=new WeakMap,Vt=e=>typeof e=="function"&&fs.has(e),z={},qi={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ve{constructor(t,i,r){this.__parts=[],this.template=t,this.processor=i,this.options=r}update(t){let i=0;for(const r of this.__parts)r!==void 0&&r.setValue(t[i]),i++;for(const r of this.__parts)r!==void 0&&r.commit()}_clone(){const t=Ii?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let s,n=0,u=0,a=o.nextNode();for(;n<r.length;)if(s=r[n],Br(s)){for(;u<s.index;)u++,a.nodeName==="TEMPLATE"&&(i.push(a),o.currentNode=a.content),(a=o.nextNode())===null&&(o.currentNode=i.pop(),a=o.nextNode());if(s.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));n++}else this.__parts.push(void 0),n++;return Ii&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ms=` ${H} `;class Dr{constructor(t,i,r,o){this.strings=t,this.values=i,this.type=r,this.processor=o}getHTML(){const t=this.strings.length-1;let i="",r=!1;for(let o=0;o<t;o++){const s=this.strings[o],n=s.lastIndexOf("<!--");r=(n>-1||r)&&s.indexOf("-->",n+1)===-1;const u=Ie.exec(s);i+=u===null?s+(r?ms:Mr):s.substr(0,u.index)+u[1]+u[2]+"$lit$"+u[3]+H}return i+=this.strings[t],i}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ii=e=>e===null||!(typeof e=="object"||typeof e=="function"),zr=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Fr{constructor(t,i,r){this.dirty=!0,this.element=t,this.name=i,this.strings=r,this.parts=[];for(let o=0;o<r.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new Ir(this)}_getValue(){const t=this.strings,i=t.length-1;let r="";for(let o=0;o<i;o++){r+=t[o];const s=this.parts[o];if(s!==void 0){const n=s.value;if(ii(n)||!zr(n))r+=typeof n=="string"?n:String(n);else for(const u of n)r+=typeof u=="string"?u:String(u)}}return r+=t[i],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ir{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===z||ii(t)&&t===this.value||(this.value=t,Vt(t)||(this.committer.dirty=!0))}commit(){for(;Vt(this.value);){const t=this.value;this.value=z,t(this)}this.value!==z&&this.committer.commit()}}class fe{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Z()),this.endNode=t.appendChild(Z())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Z()),t.__insert(this.endNode=Z())}insertAfterPart(t){t.__insert(this.startNode=Z()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;Vt(this.__pendingValue);){const i=this.__pendingValue;this.__pendingValue=z,i(this)}const t=this.__pendingValue;t!==z&&(ii(t)?t!==this.value&&this.__commitText(t):t instanceof Dr?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):zr(t)?this.__commitIterable(t):t===qi?(this.value=qi,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const i=this.startNode.nextSibling,r=typeof(t=t==null?"":t)=="string"?t:String(t);i===this.endNode.previousSibling&&i.nodeType===3?i.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const i=this.options.templateFactory(t);if(this.value instanceof Ve&&this.value.template===i)this.value.update(t.values);else{const r=new Ve(i,t.processor,this.options),o=r._clone();r.update(t.values),this.__commitNode(o),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const i=this.value;let r,o=0;for(const s of t)r=i[o],r===void 0&&(r=new fe(this.options),i.push(r),o===0?r.appendIntoPart(this):r.insertAfterPart(i[o-1])),r.setValue(s),r.commit(),o++;o<i.length&&(i.length=o,this.clear(r&&r.endNode))}clear(t=this.startNode){Fe(this.startNode.parentNode,t.nextSibling,this.endNode)}}class gs{constructor(t,i,r){if(this.value=void 0,this.__pendingValue=void 0,r.length!==2||r[0]!==""||r[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;Vt(this.__pendingValue);){const i=this.__pendingValue;this.__pendingValue=z,i(this)}if(this.__pendingValue===z)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=z}}class vs extends Fr{constructor(t,i,r){super(t,i,r),this.single=r.length===2&&r[0]===""&&r[1]===""}_createPart(){return new bs(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class bs extends Ir{}let Vr=!1;(()=>{try{const e={get capture(){return Vr=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class _s{constructor(t,i,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=i,this.eventContext=r,this.__boundHandleEvent=o=>this.handleEvent(o)}setValue(t){this.__pendingValue=t}commit(){for(;Vt(this.__pendingValue);){const s=this.__pendingValue;this.__pendingValue=z,s(this)}if(this.__pendingValue===z)return;const t=this.__pendingValue,i=this.value,r=t==null||i!=null&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),o=t!=null&&(i==null||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=ys(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=z}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const ys=e=>e&&(Vr?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function ws(e){let t=Ht.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},Ht.set(e.type,t));let i=t.stringsArray.get(e.strings);if(i!==void 0)return i;const r=e.strings.join(H);return i=t.keyString.get(r),i===void 0&&(i=new Lr(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const Ht=new Map,ct=new WeakMap;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $s=new class{handleAttributeExpressions(e,t,i,r){const o=t[0];return o==="."?new vs(e,t.slice(1),i).parts:o==="@"?[new _s(e,t.slice(1),r.eventContext)]:o==="?"?[new gs(e,t.slice(1),i)]:new Fr(e,t,i).parts}handleTextExpression(e){return new fe(e)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const U=(e,...t)=>new Dr(e,t,"html",$s),Hr=(e,t)=>`${e}--${t}`;let ce=!0;window.ShadyCSS===void 0?ce=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ce=!1);const xs=e=>t=>{const i=Hr(t.type,e);let r=Ht.get(i);r===void 0&&(r={stringsArray:new WeakMap,keyString:new Map},Ht.set(i,r));let o=r.stringsArray.get(t.strings);if(o!==void 0)return o;const s=t.strings.join(H);if(o=r.keyString.get(s),o===void 0){const n=t.getTemplateElement();ce&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Lr(t,n),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},Cs=["html","svg"],jr=new Set,Es=(e,t,i)=>{jr.add(e);const r=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:s}=o;if(s===0)return void window.ShadyCSS.prepareTemplateStyles(r,e);const n=document.createElement("style");for(let l=0;l<s;l++){const d=o[l];d.parentNode.removeChild(d),n.textContent+=d.textContent}(l=>{Cs.forEach(d=>{const c=Ht.get(Hr(d,l));c!==void 0&&c.keyString.forEach(h=>{const{element:{content:m}}=h,v=new Set;Array.from(m.querySelectorAll("style")).forEach(b=>{v.add(b)}),ji(h,v)})})})(e);const u=r.content;i?function(l,d,c=null){const{element:{content:h},parts:m}=l;if(c==null)return void h.appendChild(d);const v=document.createTreeWalker(h,133,null,!1);let b=Mt(m),P=0,N=-1;for(;v.nextNode();)for(N++,v.currentNode===c&&(P=ps(d),c.parentNode.insertBefore(d,c));b!==-1&&m[b].index===N;){if(P>0){for(;b!==-1;)m[b].index+=P,b=Mt(m,b);return}b=Mt(m,b)}}(i,n,u.firstChild):u.insertBefore(n,u.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const a=u.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(i){u.insertBefore(n,u.firstChild);const l=new Set;l.add(n),ji(i,l)}};window.JSCompiler_renameProperty=(e,t)=>e;const He={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},qr=(e,t)=>t!==e&&(t==t||e==e),Se={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:qr};class Wr extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((i,r)=>{const o=this._attributeNameForProperty(r,i);o!==void 0&&(this._attributeToPropertyMap.set(o,r),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((i,r)=>this._classProperties.set(r,i))}}static createProperty(t,i=Se){if(this._ensureClassProperties(),this._classProperties.set(t,i),i.noAccessor||this.prototype.hasOwnProperty(t))return;const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,i,r){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Se}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(i):[]];for(const o of r)this.createProperty(o,i[o])}}static _attributeNameForProperty(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,i,r=qr){return r(t,i)}static _propertyValueFromAttribute(t,i){const r=i.type,o=i.converter||He,s=typeof o=="function"?o:o.fromAttribute;return s?s(t,r):t}static _propertyValueToAttribute(t,i){if(i.reflect===void 0)return;const r=i.type,o=i.converter;return(o&&o.toAttribute||He.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,i)=>{if(this.hasOwnProperty(i)){const r=this[i];delete this[i],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(i,r)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,i)=>this[i]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,i,r){i!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,i,r=Se){const o=this.constructor,s=o._attributeNameForProperty(t,r);if(s!==void 0){const n=o._propertyValueToAttribute(i,r);if(n===void 0)return;this._updateState=8|this._updateState,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._updateState=-9&this._updateState}}_attributeToProperty(t,i){if(8&this._updateState)return;const r=this.constructor,o=r._attributeToPropertyMap.get(t);if(o!==void 0){const s=r.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=r._propertyValueFromAttribute(i,s),this._updateState=-17&this._updateState}}_requestUpdate(t,i){let r=!0;if(t!==void 0){const o=this.constructor,s=o.getPropertyOptions(t);o._valueHasChanged(this[t],i,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,i),s.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,i){return this._requestUpdate(t,i),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const i=this._changedProperties;try{t=this.shouldUpdate(i),t?this.update(i):this._markUpdated()}catch(r){throw t=!1,this._markUpdated(),r}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(i)),this.updated(i))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((i,r)=>this._propertyToAttribute(r,this[r],i)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Wr.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ss=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function C(e){return(t,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(e,t,i):Ss(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Kr="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gr=Symbol();class Wi{constructor(t,i){if(i!==Gr)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Kr?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const As=(e,...t)=>{const i=t.reduce((r,o,s)=>r+(n=>{if(n instanceof Wi)return n.cssText;if(typeof n=="number")return n;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${n}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[s+1],e[0]);return new Wi(i,Gr)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Ki={};class je extends Wr{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const i=(s,n)=>s.reduceRight((u,a)=>Array.isArray(a)?i(a,u):(u.add(a),u),n),r=i(t,new Set),o=[];r.forEach(s=>o.unshift(s)),this._styles=o}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?Kr?this.renderRoot.adoptedStyleSheets=t.map(i=>i.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(i=>i.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const i=this.render();super.update(t),i!==Ki&&this.constructor.render(i,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(r=>{const o=document.createElement("style");o.textContent=r.cssText,this.renderRoot.appendChild(o)}))}render(){return Ki}}je.finalized=!0,je.render=(e,t,i)=>{if(!i||typeof i!="object"||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,o=ct.has(t),s=ce&&t.nodeType===11&&!!t.host,n=s&&!jr.has(r),u=n?document.createDocumentFragment():t;if(((a,l,d)=>{let c=ct.get(l);c===void 0&&(Fe(l,l.firstChild),ct.set(l,c=new fe(Object.assign({templateFactory:ws},d))),c.appendInto(l)),c.setValue(a),c.commit()})(e,u,Object.assign({templateFactory:xs(r)},i)),n){const a=ct.get(u);ct.delete(u);const l=a.value instanceof Ve?a.value.template:void 0;Es(r,u,l),Fe(t,t.firstChild),t.appendChild(u),ct.set(t,a)}!o&&s&&window.ShadyCSS.styleElement(t.host)};var x=function(e,t,i,r){var o,s=arguments.length,n=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let $=class extends je{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return As`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let i=new CustomEvent("hide");this.dispatchEvent(i),e()})}render(){return U`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?U`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?U`<div id="installModalWrapper">${this.openmodal?U`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?U`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>U`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?U`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>U`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?U`<p id="iosText">${this.iosinstallinfotext}</p>`:U`<div id="buttonsContainer">${this.deferredprompt?U`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:U`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var Ae;x([C({type:String})],$.prototype,"manifestpath",void 0),x([C({type:String})],$.prototype,"iconpath",void 0),x([C({type:Object})],$.prototype,"manifestdata",void 0),x([C({type:Boolean})],$.prototype,"openmodal",void 0),x([C({type:Boolean})],$.prototype,"showopen",void 0),x([C({type:Boolean})],$.prototype,"isSupportingBrowser",void 0),x([C({type:Boolean})],$.prototype,"isIOS",void 0),x([C({type:Boolean})],$.prototype,"installed",void 0),x([C({type:Boolean})],$.prototype,"hasprompt",void 0),x([C({type:Boolean})],$.prototype,"usecustom",void 0),x([C({type:Array})],$.prototype,"relatedApps",void 0),x([C({type:String})],$.prototype,"explainer",void 0),x([C({type:String})],$.prototype,"featuresheader",void 0),x([C({type:String})],$.prototype,"descriptionheader",void 0),x([C({type:String})],$.prototype,"installbuttontext",void 0),x([C({type:String})],$.prototype,"cancelbuttontext",void 0),x([C({type:String})],$.prototype,"iosinstallinfotext",void 0),x([C()],$.prototype,"deferredprompt",void 0),$=x([(Ae="pwa-install",e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(Ae,e):((t,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(s){window.customElements.define(t,s)}}})(Ae,e))],$);var ri=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oi=Symbol(),Gi=new Map,Jr=class{constructor(e,t){if(this._$cssResult$=!0,t!==oi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Gi.get(this.cssText);return ri&&e===void 0&&(Gi.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},ks=e=>new Jr(typeof e=="string"?e:e+"",oi),F=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Jr(i,oi)},Ps=(e,t)=>{ri?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const r=document.createElement("style"),o=window.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)})},Ji=ri?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return ks(i)})(e):e,ke,Yi=window.trustedTypes,Ts=Yi?Yi.emptyScript:"",Zi=window.reactiveElementPolyfillSupport,jt={toAttribute(e,t){switch(t){case Boolean:e=e?Ts:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Yr=(e,t)=>t!==e&&(t==t||e==e),Pe={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:Yr},ht=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Eh(i,t);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,t=Pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Ji(r))}else e!==void 0&&t.push(Ji(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ps(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=Pe){var r,o;const s=this.constructor._$Eh(e,i);if(s!==void 0&&i.reflect===!0){const n=((o=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:jt.toAttribute)(t,i.type);this._$Ei=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Ei=null}}_$AK(e,t){var i,r,o;const s=this.constructor,n=s._$Eu.get(e);if(n!==void 0&&this._$Ei!==n){const u=s.getPropertyOptions(n),a=u.converter,l=(o=(r=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof a=="function"?a:null)!==null&&o!==void 0?o:jt.fromAttribute;this._$Ei=n,this[n]=l(t,u.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Yr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,o)=>this[o]=r),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},Zi==null||Zi({ReactiveElement:ht}),((ke=globalThis.reactiveElementVersions)!==null&&ke!==void 0?ke:globalThis.reactiveElementVersions=[]).push("1.3.2");var Te,wt=globalThis.trustedTypes,Xi=wt?wt.createPolicy("lit-html",{createHTML:e=>e}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,Zr="?"+X,Us=`<${Zr}>`,$t=document,qt=(e="")=>$t.createComment(e),Wt=e=>e===null||typeof e!="object"&&typeof e!="function",Xr=Array.isArray,Os=e=>{var t;return Xr(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qi=/-->/g,tr=/>/g,st=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,er=/'/g,ir=/"/g,Qr=/^(?:script|style|textarea|title)$/i,Rs=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),k=Rs(1),O=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),rr=new WeakMap,Ns=(e,t,i)=>{var r,o;const s=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:t;let n=s._$litPart$;if(n===void 0){const u=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new me(t.insertBefore(qt(),u),u,void 0,i!=null?i:{})}return n._$AI(e),n},gt=$t.createTreeWalker($t,129,null,!1),Ms=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":"",n=Ut;for(let a=0;a<i;a++){const l=e[a];let d,c,h=-1,m=0;for(;m<l.length&&(n.lastIndex=m,c=n.exec(l),c!==null);)m=n.lastIndex,n===Ut?c[1]==="!--"?n=Qi:c[1]!==void 0?n=tr:c[2]!==void 0?(Qr.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=st):c[3]!==void 0&&(n=st):n===st?c[0]===">"?(n=o!=null?o:Ut,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?st:c[3]==='"'?ir:er):n===ir||n===er?n=st:n===Qi||n===tr?n=Ut:(n=st,o=void 0);const v=n===st&&e[a+1].startsWith("/>")?" ":"";s+=n===Ut?l+Us:h>=0?(r.push(d),l.slice(0,h)+"$lit$"+l.slice(h)+X+v):l+X+(h===-2?(r.push(void 0),a):v)}const u=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Xi!==void 0?Xi.createHTML(u):u,r]},de=class{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,s=0;const n=e.length-1,u=this.parts,[a,l]=Ms(e,t);if(this.el=de.createElement(a,i),gt.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(r=gt.nextNode())!==null&&u.length<n;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const c of r.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(X)){const h=l[s++];if(d.push(c),h!==void 0){const m=r.getAttribute(h.toLowerCase()+"$lit$").split(X),v=/([.?@])?(.*)/.exec(h);u.push({type:1,index:o,name:v[2],strings:m,ctor:v[1]==="."?Bs:v[1]==="?"?zs:v[1]==="@"?Fs:ge})}else u.push({type:6,index:o})}for(const c of d)r.removeAttribute(c)}if(Qr.test(r.tagName)){const d=r.textContent.split(X),c=d.length-1;if(c>0){r.textContent=wt?wt.emptyScript:"";for(let h=0;h<c;h++)r.append(d[h],qt()),gt.nextNode(),u.push({type:2,index:++o});r.append(d[c],qt())}}}else if(r.nodeType===8)if(r.data===Zr)u.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(X,d+1))!==-1;)u.push({type:7,index:o}),d+=X.length-1}o++}}static createElement(e,t){const i=$t.createElement("template");return i.innerHTML=e,i}};function xt(e,t,i=e,r){var o,s,n,u;if(t===O)return t;let a=r!==void 0?(o=i._$Cl)===null||o===void 0?void 0:o[r]:i._$Cu;const l=Wt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,r)),r!==void 0?((n=(u=i)._$Cl)!==null&&n!==void 0?n:u._$Cl=[])[r]=a:i._$Cu=a),a!==void 0&&(t=xt(e,a._$AS(e,t.values),a,r)),t}var Ls=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:$t).importNode(i,!0);gt.currentNode=o;let s=gt.nextNode(),n=0,u=0,a=r[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new me(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new Is(s,this,e)),this.v.push(l),a=r[++u]}n!==(a==null?void 0:a.index)&&(s=gt.nextNode(),n++)}return o}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},me=class{constructor(e,t,i,r){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=xt(this,e,t),Wt(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==O&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Os(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==w&&Wt(this._$AH)?this._$AA.nextSibling.data=e:this.k($t.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=de.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(i);else{const s=new Ls(o,this),n=s.p(this.options);s.m(i),this.k(n),this._$AH=s}}_$AC(e){let t=rr.get(e.strings);return t===void 0&&rr.set(e.strings,t=new de(e)),t}S(e){Xr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new me(this.M(qt()),this.M(qt()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ge=class{constructor(e,t,i,r,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=xt(this,e,t,0),s=!Wt(e)||e!==this._$AH&&e!==O,s&&(this._$AH=e);else{const n=e;let u,a;for(e=o[0],u=0;u<o.length-1;u++)a=xt(this,n[i+u],t,u),a===O&&(a=this._$AH[u]),s||(s=!Wt(a)||a!==this._$AH[u]),a===w?e=w:e!==w&&(e+=(a!=null?a:"")+o[u+1]),this._$AH[u]=a}s&&!r&&this.C(e)}C(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Bs=class extends ge{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===w?void 0:e}},Ds=wt?wt.emptyScript:"",zs=class extends ge{constructor(){super(...arguments),this.type=4}C(e){e&&e!==w?this.element.setAttribute(this.name,Ds):this.element.removeAttribute(this.name)}},Fs=class extends ge{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=xt(this,e,t,0))!==null&&i!==void 0?i:w)===O)return;const r=this._$AH,o=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==w&&(r===w||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Is=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){xt(this,e)}},or=window.litHtmlPolyfillSupport;or==null||or(de,me),((Te=globalThis.litHtmlVersions)!==null&&Te!==void 0?Te:globalThis.litHtmlVersions=[]).push("2.2.4");var Ue,Oe,Lt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ns(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return O}};Lt.finalized=!0,Lt._$litElement$=!0,(Ue=globalThis.litElementHydrateSupport)===null||Ue===void 0||Ue.call(globalThis,{LitElement:Lt});var sr=globalThis.litElementPolyfillSupport;sr==null||sr({LitElement:Lt});((Oe=globalThis.litElementVersions)!==null&&Oe!==void 0?Oe:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt=F`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Vs=F`
  ${lt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,ve=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},J={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},si=e=>(...t)=>({_$litDirective$:e,values:t}),ni=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct=si(class extends ni{constructor(e){var t;if(super(e),e.type!==J.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.et.add(s);return this.render(t)}const o=e.element.classList;this.et.forEach(s=>{s in t||(o.remove(s),this.et.delete(s))});for(const s in t){const n=!!t[s];n===this.et.has(s)||((r=this.st)===null||r===void 0?void 0:r.has(s))||(n?(o.add(s),this.et.add(s)):(o.remove(s),this.et.delete(s)))}return O}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var to=Object.defineProperty,Hs=Object.defineProperties,js=Object.getOwnPropertyDescriptor,qs=Object.getOwnPropertyDescriptors,nr=Object.getOwnPropertySymbols,Ws=Object.prototype.hasOwnProperty,Ks=Object.prototype.propertyIsEnumerable,ar=(e,t,i)=>t in e?to(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Pt=(e,t)=>{for(var i in t||(t={}))Ws.call(t,i)&&ar(e,i,t[i]);if(nr)for(var i of nr(t))Ks.call(t,i)&&ar(e,i,t[i]);return e},ai=(e,t)=>Hs(e,qs(t)),p=(e,t,i,r)=>{for(var o=r>1?void 0:r?js(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&to(t,i,o),o},it=e=>t=>typeof t=="function"?((i,r)=>(window.customElements.define(i,r),r))(e,t):((i,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){window.customElements.define(i,n)}}})(e,t),Gs=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ai(Pt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function f(e){return(t,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(e,t,i):Gs(e,t)}function I(e){return f(ai(Pt({},e),{state:!0}))}var Js=({finisher:e,descriptor:t})=>(i,r)=>{var o;if(r===void 0){const s=(o=i.originalKey)!==null&&o!==void 0?o:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:ai(Pt({},i),{key:s});return e!=null&&(n.finisher=function(u){e(u,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,r,t(r)),e==null||e(s,r)}};function ut(e,t){return Js({descriptor:i=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[o]}}return r}})}var Re;((Re=window.HTMLSlotElement)===null||Re===void 0?void 0:Re.prototype.assignedElements)!=null;var V=class extends Lt{emit(e,t){const i=new CustomEvent(e,Pt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};p([f()],V.prototype,"dir",2);p([f()],V.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qe=class extends V{constructor(){super(...arguments),this.hasSlotController=new ve(this,"footer","header","image")}render(){return k`
      <div
        part="base"
        class=${Ct({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};qe.styles=Vs;qe=p([it("sl-card")],qe);var Ys=class extends Event{constructor(e){super("formdata"),this.formData=e}},Zs=class extends FormData{constructor(e){var t=(...i)=>{super(...i)};e?(t(e),this.form=e,e.dispatchEvent(new Ys(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let i=this.form.elements[e];if(i||(i=document.createElement("input"),i.type="hidden",i.name=e,this.form.appendChild(i)),this.has(e)){const r=this.getAll(e),o=r.indexOf(i.value);o!==-1&&r.splice(o,1),r.push(t),this.set(e,r)}else super.append(e,t);i.value=t}};function Xs(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",i=>{new FormData(i.target),i.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function lr(){!window.FormData||Xs()||(window.FormData=Zs,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?lr():window.addEventListener("DOMContentLoaded",()=>lr());var Ot=new WeakMap,li=class{constructor(e,t){(this.host=e).addController(this),this.options=Pt({form:i=>i.closest("form"),name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>i.disabled,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,r)=>{i.value=r}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ot.has(this.form)||(Ot.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ot.has(this.form)&&(this.form.reportValidity=Ot.get(this.form),Ot.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host);!t&&typeof i=="string"&&typeof r<"u"&&(Array.isArray(r)?r.forEach(o=>{e.formData.append(i,o.toString())}):e.formData.append(i,r.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&i.setAttribute(r,t.getAttribute(r))}),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},eo=F`
  ${lt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,io=Symbol.for(""),Qs=e=>{var t,i;if(((t=e)===null||t===void 0?void 0:t.r)===io)return(i=e)===null||i===void 0?void 0:i._$litStatic$},ur=(e,...t)=>({_$litStatic$:t.reduce((i,r,o)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:io}),cr=new Map,tn=e=>(t,...i)=>{const r=i.length;let o,s;const n=[],u=[];let a,l=0,d=!1;for(;l<r;){for(a=t[l];l<r&&(s=i[l],(o=Qs(s))!==void 0);)a+=o+t[++l],d=!0;u.push(s),n.push(a),l++}if(l===r&&n.push(t[r]),d){const c=n.join("$$lit$$");(t=cr.get(c))===void 0&&(n.raw=n,cr.set(c,t=n)),i=u}return e(t,...i)},re=tn(k);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We=new Set,en=new MutationObserver(so),ft=new Map,ro=document.documentElement.dir||"ltr",oo=document.documentElement.lang||navigator.language,Bt;en.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function rn(...e){e.map(t=>{const i=t.$code.toLowerCase();ft.has(i)?ft.set(i,Object.assign(Object.assign({},ft.get(i)),t)):ft.set(i,t),Bt||(Bt=t)}),so()}function so(){ro=document.documentElement.dir||"ltr",oo=document.documentElement.lang||navigator.language,[...We.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var on=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){We.add(this.host)}hostDisconnected(){We.delete(this.host)}dir(){return`${this.host.dir||ro}`.toLowerCase()}lang(){return`${this.host.lang||oo}`.toLowerCase()}term(e,...t){const i=this.lang().toLowerCase().slice(0,2),r=this.lang().length>2?this.lang().toLowerCase():"",o=ft.get(r),s=ft.get(i);let n;if(o&&o[e])n=o[e];else if(s&&s[e])n=s[e];else if(Bt&&Bt[e])n=Bt[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof n=="function"?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},ui=class extends on{},sn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};rn(sn);var _=e=>e!=null?e:w;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var y=class extends V{constructor(){super(...arguments),this.formSubmitController=new li(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),i=e.getAttribute("form");return t.getElementById(i)}return e.closest("form")}}),this.hasSlotController=new ve(this,"[default]","prefix","suffix"),this.localize=new ui(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?ur`a`:ur`button`;return re`
      <${t}
        part="base"
        class=${Ct({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:this.type)}
        name=${_(e?void 0:this.name)}
        value=${_(e?void 0:this.value)}
        href=${_(e?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e&&this.target?"noreferrer noopener":void 0)}
        role=${_(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?re`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?re`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};y.styles=eo;p([ut(".button")],y.prototype,"button",2);p([I()],y.prototype,"hasFocus",2);p([f({reflect:!0})],y.prototype,"variant",2);p([f({reflect:!0})],y.prototype,"size",2);p([f({type:Boolean,reflect:!0})],y.prototype,"caret",2);p([f({type:Boolean,reflect:!0})],y.prototype,"disabled",2);p([f({type:Boolean,reflect:!0})],y.prototype,"loading",2);p([f({type:Boolean,reflect:!0})],y.prototype,"outline",2);p([f({type:Boolean,reflect:!0})],y.prototype,"pill",2);p([f({type:Boolean,reflect:!0})],y.prototype,"circle",2);p([f()],y.prototype,"type",2);p([f()],y.prototype,"name",2);p([f()],y.prototype,"value",2);p([f()],y.prototype,"href",2);p([f()],y.prototype,"target",2);p([f()],y.prototype,"download",2);p([f()],y.prototype,"form",2);p([f({attribute:"formaction"})],y.prototype,"formAction",2);p([f({attribute:"formmethod"})],y.prototype,"formMethod",2);p([f({attribute:"formnovalidate",type:Boolean})],y.prototype,"formNoValidate",2);p([f({attribute:"formtarget"})],y.prototype,"formTarget",2);y=p([it("sl-button")],y);var nn=F`
  ${lt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Ke=class extends V{constructor(){super(...arguments),this.localize=new ui(this)}render(){return k`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ke.styles=nn;Ke=p([it("sl-spinner")],Ke);const an=Gt`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;class dr{constructor(t,i,r,o,s,n,u){this._fuelEfficiency=0,this._fuelCapacity=0,this._fuelCost=0,this._fuelCapacityUsageRatio=0,this._totalDistance=0,this._numberOfNights=0,this._lodgingCost=0,this._fuelCapacity=i,this._fuelEfficiency=t,this._fuelCost=r,this._fuelCapacityUsageRatio=o,this._totalDistance=s,this._numberOfNights=n,this._lodgingCost=u}set fuelCapacity(t){this._fuelCapacity=t}set fuelEfficiency(t){this._fuelEfficiency=t}set fuelCost(t){this._fuelCost=t}set fuelCapacityUsageRatio(t){this._fuelCapacityUsageRatio=t}set totalDistance(t){this._totalDistance=t}set numberOfNights(t){this._numberOfNights=t}set lodgingCost(t){this._lodgingCost=t}get tankDistance(){return this._fuelCapacity*this._fuelCapacityUsageRatio*this._fuelEfficiency}get fuelCostPerFillUp(){return this._getCurrency(this._fuelCapacity*this._fuelCapacityUsageRatio*this._fuelCost)}get numberOfStops(){return Math.floor(this._totalDistance/this.tankDistance)}get totalFuelCost(){return this._getCurrency(this._totalDistance/this.tankDistance*(this._fuelCapacity*this._fuelCapacityUsageRatio*this._fuelCost))}get totalLodgingCost(){return this._getCurrency(this._numberOfNights*this._lodgingCost)}rawTotal(){return this._totalDistance/this.tankDistance*(this._fuelCapacity*this._fuelCapacityUsageRatio*this._fuelCost)+this._numberOfNights*this._lodgingCost}get totalCost(){return this._getCurrency(this.rawTotal())}_getCurrency(t){return(Math.round(t*100)/100).toFixed(2)}}var ln=Object.defineProperty,un=Object.getOwnPropertyDescriptor,be=(e,t,i,r)=>{for(var o=r>1?void 0:r?un(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&ln(t,i,o),o};let Kt=class extends D{constructor(){super(),this._localConfig={efficiencyMeasurement:"mpg",capacityMeasurement:"Gallons",distanceMeasurement:"Miles"},this._fuelUnits={normalFuelEfficiency:0,towingFuelEfficiency:0,fuelCapacity:0,fuelCost:0,fuelUsage:0},this._tripUnits={totalDistance:0,numberOfNights:0,lodgingCost:0,campingCost:0},this.lodgingCalculator=new dr(this._fuelUnits.normalFuelEfficiency,this._fuelUnits.fuelCapacity,this._fuelUnits.fuelCost,this._fuelUnits.fuelUsage,this._tripUnits.totalDistance,this._tripUnits.numberOfNights,this._tripUnits.lodgingCost),this.campingCalculator=new dr(this._fuelUnits.towingFuelEfficiency,this._fuelUnits.fuelCapacity,this._fuelUnits.fuelCost,this._fuelUnits.fuelUsage,this._tripUnits.totalDistance,this._tripUnits.numberOfNights,this._tripUnits.campingCost),this.lodgingRecommendation=this.lodgingCalculator.rawTotal()<=this.campingCalculator.rawTotal()?"recommended":"not-recommended",this.campingRecommendation=this.campingCalculator.rawTotal()<=this.lodgingCalculator.rawTotal()?"recommended":"not-recommended"}static get styles(){return[an,Gt`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      .criteria, .results {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 750px) {
        .criteria, .results {
          flex-direction: row;
        }
      }

      .criteria > fuel-criteria {
        flex: 1;
        padding: 20px;
      }

      .criteria > trip-criteria {
        flex: 1;
        padding: 20px;
      }

      .results > div {
        flex: 1;
        padding: 20px;
      }
    `]}render(){return et`
      <app-header title='To Camp or Not'></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              Fill out the criteria below to determine the total cost for camping versus not camping
              <local-criteria @units=${this._unitsListener}></local-criteria>
            </div>
            <div class="criteria">
              <fuel-criteria @fuelUnits=${this._fuelUnitsListener} efficiencyMeasurement=${this._localConfig.efficiencyMeasurement} capacityMeasurement=${this._localConfig.capacityMeasurement}></fuel-criteria>
              <trip-criteria @tripUnits=${this._tripUnitsListener}></trip-criteria>
            </div>
            <div slot="footer">
              <div class="results">
                <div class='trip-results-box'>
                  <h3>Not Camping</h3>
                  Travel distance per tank: <span class="value">${this.lodgingCalculator.tankDistance} ${this._localConfig.distanceMeasurement}</span><br/>
                  Fuel cost per fill up: <span class="value">$${this.lodgingCalculator.fuelCostPerFillUp}</span><br/>
                  Minimum number of stops: <span class="value">${this.lodgingCalculator.numberOfStops}</span><br/>
                  Total fuel cost: <span class="value">$${this.lodgingCalculator.totalFuelCost}</span><br/>
                  Total lodging cost: <span class="value">$${this.lodgingCalculator.totalLodgingCost}</span><br/>
                  <br/>
                  Total cost Not Camping: <span class="value ${this.lodgingRecommendation}">$${this.lodgingCalculator.totalCost}</span>
                </div>
                <div class='trip-results-box'>
                  <h3>Camping</h3>
                  Travel distance per tank: <span class="value">${this.campingCalculator.tankDistance} ${this._localConfig.distanceMeasurement}</span><br/>
                  Fuel cost per fill up: <span class="value">$${this.campingCalculator.fuelCostPerFillUp}</span><br/>
                  Minimum number of stops: <span class="value">${this.campingCalculator.numberOfStops}</span><br/>
                  Total fuel cost: <span class="value">$${this.campingCalculator.totalFuelCost}</span><br/>
                  Total lodging cost: <span class="value">$${this.campingCalculator.totalLodgingCost}</span><br/>
                  <br/>
                  Total cost Camping: <span class="value ${this.campingRecommendation}">$${this.campingCalculator.totalCost}</span>
                </div>
              </div>
            </div>
          </sl-card>

          <sl-button href="${"/to-camp-or-not/"}about" variant="primary">About</sl-button>
        </div>

        <pwa-install>Install To Camp or Not</pwa-install>
      </main>
    `}_unitsListener(e){this._localConfig={...e.detail}}_fuelUnitsListener(e){this._fuelUnits={...e.detail},this.campingCalculator.fuelEfficiency=+this._fuelUnits.towingFuelEfficiency,this.lodgingCalculator.fuelEfficiency=+this._fuelUnits.normalFuelEfficiency,this.campingCalculator.fuelCapacity=+this._fuelUnits.fuelCapacity,this.lodgingCalculator.fuelCapacity=+this._fuelUnits.fuelCapacity,this.campingCalculator.fuelCost=+this._fuelUnits.fuelCost,this.lodgingCalculator.fuelCost=+this._fuelUnits.fuelCost,this.campingCalculator.fuelCapacityUsageRatio=+this._fuelUnits.fuelUsage,this.lodgingCalculator.fuelCapacityUsageRatio=+this._fuelUnits.fuelUsage}_tripUnitsListener(e){this._tripUnits={...e.detail},this.campingCalculator.totalDistance=+this._tripUnits.totalDistance,this.lodgingCalculator.totalDistance=+this._tripUnits.totalDistance,this.campingCalculator.numberOfNights=+this._tripUnits.numberOfNights,this.lodgingCalculator.numberOfNights=+this._tripUnits.numberOfNights,this.campingCalculator.lodgingCost=+this._tripUnits.campingCost,this.lodgingCalculator.lodgingCost=+this._tripUnits.lodgingCost}};be([ti()],Kt.prototype,"_localConfig",2);be([ti()],Kt.prototype,"_fuelUnits",2);be([ti()],Kt.prototype,"_tripUnits",2);Kt=be([at("app-home")],Kt);var cn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,ci=(e,t,i,r)=>{for(var o=r>1?void 0:r?dn(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&cn(t,i,o),o};let he=class extends D{constructor(){super(),this.title="PWA Starter",this.enableBack=!1}static get styles(){return Gt`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return et`
      <header>

        <div id="back-button-block">
          ${this.enableBack?et`<sl-button href="${"/to-camp-or-not/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};ci([W({type:String})],he.prototype,"title",2);ci([W({type:Boolean})],he.prototype,"enableBack",2);he=ci([at("app-header")],he);var hn=F`
  ${lt}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-large);
    padding-top: var(--sl-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    padding: 0 var(--sl-spacing-2x-small);
  }

  ::slotted(sl-radio:not(:last-of-type)) {
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;function tt(e,t){const i=Pt({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:s}=r;if(e in r){const n=e;r.update=function(u){if(u.has(n)){const a=u.get(n),l=this[n];a!==l&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](a,l)}s.call(this,u)}}}}var S=class extends V{constructor(){super(...arguments),this.formSubmitController=new li(this,{defaultValue:e=>e.defaultValue}),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.label="",this.value="",this.name="option",this.invalid=!1,this.fieldset=!1,this.required=!1}handleValueChange(){this.hasUpdated&&(this.emit("sl-change"),this.updateCheckedRadio())}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}setCustomValidity(e=""){this.customErrorMessage=e,this.errorMessage=e,e?(this.invalid=!0,this.input.setCustomValidity(e)):this.invalid=!1}get validity(){const e=!(this.value&&this.required||!this.required),t=this.customErrorMessage!=="";return{badInput:!1,customError:t,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!(e||t),valueMissing:!e}}reportValidity(){const e=this.validity;return this.errorMessage=this.customErrorMessage||e.valid?"":this.input.validationMessage,this.invalid=!e.valid,e.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target;if(t.disabled)return;this.value=t.value,this.getAllRadios().forEach(r=>r.checked=r===t)}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const i=this.getAllRadios().filter(n=>!n.disabled),r=(t=i.find(n=>n.checked))!=null?t:i[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=i.indexOf(r)+o;s<0&&(s=i.length-1),s>i.length-1&&(s=0),this.getAllRadios().forEach(n=>{n.checked=!1,this.hasButtonGroup||(n.tabIndex=-1)}),this.value=i[s].value,i[s].checked=!0,this.hasButtonGroup?i[s].shadowRoot.querySelector("button").focus():(i[s].tabIndex=0,i[s].focus()),e.preventDefault()}handleSlotChange(){var e;const t=this.getAllRadios();if(t.forEach(i=>i.checked=i.value===this.value),this.hasButtonGroup=t.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!t.some(i=>i.checked))if(this.hasButtonGroup){const i=t[0].shadowRoot.querySelector("button");i.tabIndex=0}else t[0].tabIndex=0;if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout(()=>this.input.hidden=!0,1e4)}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value)}render(){const e=k`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return k`
      <fieldset
        part="base"
        role="radiogroup"
        aria-errormessage="radio-error-message"
        aria-invalid="${this.invalid}"
        class=${Ct({"radio-group":!0,"radio-group--has-fieldset":this.fieldset,"radio-group--required":this.required})}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        <div class="visually-hidden">
          <div id="radio-error-message" aria-live="assertive">${this.errorMessage}</div>
          <label class="radio-group__validation visually-hidden">
            <input type="text" class="radio-group__validation-input" ?required=${this.required} tabindex="-1" hidden />
          </label>
        </div>
        ${this.hasButtonGroup?k`
              <sl-button-group part="button-group" exportparts="base:button-group__base">
                ${e}
              </sl-button-group>
            `:e}
      </fieldset>
    `}};S.styles=hn;p([ut("slot:not([name])")],S.prototype,"defaultSlot",2);p([ut(".radio-group__validation-input")],S.prototype,"input",2);p([I()],S.prototype,"hasButtonGroup",2);p([I()],S.prototype,"errorMessage",2);p([I()],S.prototype,"customErrorMessage",2);p([I()],S.prototype,"defaultValue",2);p([f()],S.prototype,"label",2);p([f({reflect:!0})],S.prototype,"value",2);p([f()],S.prototype,"name",2);p([f({type:Boolean,reflect:!0})],S.prototype,"invalid",2);p([f({type:Boolean,attribute:"fieldset",reflect:!0})],S.prototype,"fieldset",2);p([f({type:Boolean,reflect:!0})],S.prototype,"required",2);p([tt("value")],S.prototype,"handleValueChange",1);S=p([it("sl-radio-group")],S);var pn=F`
  ${lt}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Et=class extends V{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Rt(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=Rt(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=Rt(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=Rt(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const i=e.indexOf(t),r=Rt(t);r!==null&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",i===0),r.classList.toggle("sl-button-group__button--inner",i>0&&i<e.length-1),r.classList.toggle("sl-button-group__button--last",i===e.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return k`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange} role="none"></slot>
      </div>
    `}};Et.styles=pn;p([ut("slot")],Et.prototype,"defaultSlot",2);p([I()],Et.prototype,"disableRole",2);p([f()],Et.prototype,"label",2);Et=p([it("sl-button-group")],Et);function Rt(e){const t=["sl-button","sl-radio-button"];return t.includes(e.tagName.toLowerCase())?e:e.querySelector(t.join(","))}var fn=F`
  ${eo}

  label {
    display: inline-block;
    position: relative;
  }
  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,R=class extends V{constructor(){super(...arguments),this.hasSlotController=new ve(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}render(){return re`
      <div part="base" role="presentation">
        <button
          part="button"
          role="radio"
          aria-checked="${this.checked}"
          class=${Ct({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${_(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <span part="prefix" class="button__prefix">
            <slot name="prefix"></slot>
          </span>
          <span part="label" class="button__label">
            <slot></slot>
          </span>
          <span part="suffix" class="button__suffix">
            <slot name="suffix"></slot>
          </span>
        </button>
      </div>
    `}};R.styles=fn;p([ut(".button")],R.prototype,"input",2);p([ut(".hidden-input")],R.prototype,"hiddenInput",2);p([I()],R.prototype,"hasFocus",2);p([I()],R.prototype,"checked",2);p([f()],R.prototype,"value",2);p([f({type:Boolean,reflect:!0})],R.prototype,"disabled",2);p([f({reflect:!0})],R.prototype,"size",2);p([f({type:Boolean,reflect:!0})],R.prototype,"pill",2);p([tt("disabled",{waitUntilFirstUpdate:!0})],R.prototype,"handleDisabledChange",1);R=p([it("sl-radio-button")],R);var mn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,vn=(e,t,i,r)=>{for(var o=r>1?void 0:r?gn(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&mn(t,i,o),o};let hr=class extends D{render(){return et`
            <div class='local-criteria-box'>
                <sl-radio-group label="Select an option" name="a" value="1">
                    <sl-radio-button pill size="small" value="1" @click=${this._setImperial}>Imperial</sl-radio-button>
                    <sl-radio-button pill size="small" value="2" @click=${this._setMetric}>Metric</sl-radio-button>
                </sl-radio-group>
            </div>
        `}_setMetric(){this._dispatchUseMetric(!0)}_setImperial(){this._dispatchUseMetric(!1)}_dispatchUseMetric(e){const t={detail:{efficiencyMeasurement:e?"km/L":"mpg",capacityMeasurement:e?"Litres":"Gallons",distanceMeasurement:e?"Kilometers":"Miles"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("units",t))}};hr=vn([at("local-criteria")],hr);var bn=F`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,_n=F`
  ${lt}
  ${bn}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,yn=e=>e.strings===void 0,wn={},$n=(e,t=wn)=>e._$AH=t,xn=si(class extends ni{constructor(e){if(super(e),e.type!==J.PROPERTY&&e.type!==J.ATTRIBUTE&&e.type!==J.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!yn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===O||t===w)return t;const i=e.element,r=e.name;if(e.type===J.PROPERTY){if(t===i[r])return O}else if(e.type===J.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return O}else if(e.type===J.ATTRIBUTE&&i.getAttribute(r)===t+"")return O;return $n(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cn=(e="value")=>(t,i)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,u){var a;const l=r.getPropertyOptions(e),d=typeof l.attribute=="string"?l.attribute:e;if(s===d){const c=l.converter||jt,m=(typeof c=="function"?c:(a=c==null?void 0:c.fromAttribute)!=null?a:jt.fromAttribute)(u,l.type);this[e]!==m&&(this[i]=m)}o.call(this,s,n,u)}},pr,En=(pr=navigator.userAgentData)==null?void 0:pr.brands.some(e=>e.brand.includes("Chromium")),Sn=En?!1:navigator.userAgent.includes("Firefox"),g=class extends V{constructor(){super(...arguments),this.formSubmitController=new li(this),this.hasSlotController=new ve(this,"help-text","label"),this.localize=new ui(this),this.hasFocus=!1,this.type="text",this.size="medium",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){this.input.setRangeText(e,t,i,r),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{e.defaultPrevented||this.formSubmitController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return k`
      <div
        part="form-control"
        class=${Ct({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ct({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":Sn})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              name=${_(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              min=${_(this.min)}
              max=${_(this.max)}
              step=${_(this.step)}
              .value=${xn(this.value)}
              autocapitalize=${_(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${_(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${_(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${_(this.spellcheck)}
              pattern=${_(this.pattern)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?k`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?k`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?k`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:k`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};g.styles=_n;p([ut(".input__control")],g.prototype,"input",2);p([I()],g.prototype,"hasFocus",2);p([f({reflect:!0})],g.prototype,"type",2);p([f({reflect:!0})],g.prototype,"size",2);p([f()],g.prototype,"name",2);p([f()],g.prototype,"value",2);p([Cn()],g.prototype,"defaultValue",2);p([f({type:Boolean,reflect:!0})],g.prototype,"filled",2);p([f({type:Boolean,reflect:!0})],g.prototype,"pill",2);p([f()],g.prototype,"label",2);p([f({attribute:"help-text"})],g.prototype,"helpText",2);p([f({type:Boolean})],g.prototype,"clearable",2);p([f({attribute:"password-toggle",type:Boolean})],g.prototype,"passwordToggle",2);p([f({attribute:"password-visible",type:Boolean})],g.prototype,"passwordVisible",2);p([f({attribute:"no-spin-buttons",type:Boolean})],g.prototype,"noSpinButtons",2);p([f()],g.prototype,"placeholder",2);p([f({type:Boolean,reflect:!0})],g.prototype,"disabled",2);p([f({type:Boolean,reflect:!0})],g.prototype,"readonly",2);p([f({type:Number})],g.prototype,"minlength",2);p([f({type:Number})],g.prototype,"maxlength",2);p([f()],g.prototype,"min",2);p([f()],g.prototype,"max",2);p([f()],g.prototype,"step",2);p([f()],g.prototype,"pattern",2);p([f({type:Boolean,reflect:!0})],g.prototype,"required",2);p([f({type:Boolean,reflect:!0})],g.prototype,"invalid",2);p([f()],g.prototype,"autocapitalize",2);p([f()],g.prototype,"autocorrect",2);p([f()],g.prototype,"autocomplete",2);p([f({type:Boolean})],g.prototype,"autofocus",2);p([f()],g.prototype,"enterkeyhint",2);p([f({type:Boolean})],g.prototype,"spellcheck",2);p([f()],g.prototype,"inputmode",2);p([tt("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);p([tt("step",{waitUntilFirstUpdate:!0})],g.prototype,"handleStepChange",1);p([tt("value",{waitUntilFirstUpdate:!0})],g.prototype,"handleValueChange",1);g=p([it("sl-input")],g);var Ge="";function fr(e){Ge=e}function An(){if(!Ge){const e=[...document.getElementsByTagName("script")],t=e.find(i=>i.hasAttribute("data-shoelace"));if(t)fr(t.getAttribute("data-shoelace"));else{const i=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),fr(r.split("/").slice(0,-1).join("/"))}}return Ge.replace(/\/$/,"")}var kn={name:"default",resolver:e=>`${An()}/assets/icons/${e}.svg`},Pn=kn,mr={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Tn={name:"system",resolver:e=>e in mr?`data:image/svg+xml,${encodeURIComponent(mr[e])}`:""},Un=Tn,On=[Pn,Un],Je=[];function Rn(e){Je.push(e)}function Nn(e){Je=Je.filter(t=>t!==e)}function gr(e){return On.find(t=>t.name===e)}var Ne=new Map;function Mn(e,t="cors"){if(Ne.has(e))return Ne.get(e);const i=fetch(e,{mode:t}).then(async r=>({ok:r.ok,status:r.status,html:await r.text()}));return Ne.set(e,i),i}var Me=new Map;async function Ln(e){if(Me.has(e))return Me.get(e);const t=await Mn(e),i={ok:t.ok,status:t.status,svg:null};if(t.ok){const r=document.createElement("div");r.innerHTML=t.html;const o=r.firstElementChild;i.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return Me.set(e,i),i}var Bn=F`
  ${lt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ye=class extends ni{constructor(e){if(super(e),this.it=w,e.type!==J.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===w||e==null)return this.ft=void 0,this.it=e;if(e===O)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ye.directiveName="unsafeHTML",Ye.resultType=1;var Ze=class extends Ye{};Ze.directiveName="unsafeSVG",Ze.resultType=2;var Dn=si(Ze),Le,j=class extends V{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Rn(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Nn(this)}getUrl(){const e=gr(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=gr(this.library),i=this.getUrl();if(Le||(Le=new DOMParser),i)try{const r=await Ln(i);if(i!==this.getUrl())return;if(r.ok){const s=Le.parseFromString(r.svg,"text/html").body.querySelector("svg");s!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return k` <div
      part="base"
      class="icon"
      role=${_(e?"img":void 0)}
      aria-label=${_(e?this.label:void 0)}
      aria-hidden=${_(e?void 0:"true")}
    >
      ${Dn(this.svg)}
    </div>`}};j.styles=Bn;p([I()],j.prototype,"svg",2);p([f({reflect:!0})],j.prototype,"name",2);p([f()],j.prototype,"src",2);p([f()],j.prototype,"label",2);p([f({reflect:!0})],j.prototype,"library",2);p([tt("name"),tt("src"),tt("library")],j.prototype,"setIcon",1);j=p([it("sl-icon")],j);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,rt=(e,t,i,r)=>{for(var o=r>1?void 0:r?Fn(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&zn(t,i,o),o};let q=class extends D{constructor(){super(...arguments),this.efficiencyMeasurement="mpg",this.capacityMeasurement="Gallons"}changeFuelUnits(){const e={detail:{normalFuelEfficiency:this.normalFuelEfficiency.value,towingFuelEfficiency:this.towingFuelEfficiency.value,fuelCapacity:this.fuelCapacity.value,fuelCost:this.fuelCost.value,fuelUsage:this.fuelUsage.value},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("fuelUnits",e))}render(){return et`
            <div class='fuel-criteria-box'>
                <sl-input @input=${this.changeFuelUnits} label='Normal Fuel Efficiency (${this.efficiencyMeasurement})' type='number' min='0' id='normalFuelEfficiency' help-text='Average fuel efficiency when not towing'></sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Towing Fuel Efficiency (${this.efficiencyMeasurement})' type='number' min='0' id='towingFuelEfficiency' help-text='Average fuel efficiency when towing or fully loaded'></sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Fuel Capacity (${this.capacityMeasurement})' type='number' min='0' id='fuelCapacity' help-text='How big is the fuel tank on your vehicle'></sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Average Fuel Cost' type='number' step='0.01' min='0' id='fuelCost' help-text='What is the average cost of fuel'>
                  <sl-icon name='currency-dollar' slot='prefix'></sl-icon>
                </sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Average Fuel Capacity Usage' type='number' min='0' max='1' step='0.01' id='fuelUsage' help-text='What percentage of your tank do you use before you fill up' value='0.9'></sl-input>
            </div>
        `}};rt([W()],q.prototype,"efficiencyMeasurement",2);rt([W()],q.prototype,"capacityMeasurement",2);rt([K("#normalFuelEfficiency")],q.prototype,"normalFuelEfficiency",2);rt([K("#towingFuelEfficiency")],q.prototype,"towingFuelEfficiency",2);rt([K("#fuelCapacity")],q.prototype,"fuelCapacity",2);rt([K("#fuelCost")],q.prototype,"fuelCost",2);rt([K("#fuelUsage")],q.prototype,"fuelUsage",2);q=rt([at("fuel-criteria")],q);var In=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Yt=(e,t,i,r)=>{for(var o=r>1?void 0:r?Vn(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&In(t,i,o),o};let St=class extends D{changeTripUnits(){const e={detail:{totalDistance:this.totalDistance.value,numberOfNights:this.numberOfNights.value,lodgingCost:this.lodgingCost.value,campingCost:this.campingCost.value},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("tripUnits",e))}render(){return et`
            <div class='trip-criteria-box'>
                <sl-input @input=${this.changeTripUnits} label='Total Distance' id='totalDistance' type='number' min='0' help-test='How far will you travel roundtrip'></sl-input>
                <sl-input @input=${this.changeTripUnits} label='Number of Nights' id='numberOfNights' type='number' min='0' help-text='How many nights will you need to stay somewhere'></sl-input>
                <sl-input @input=${this.changeTripUnits} label='Average Lodging Cost' id='lodgingCost' type='number' min='0' step='0.01' help-text='Average nightly cost to stay in lodging'>
                    <sl-icon name='currency-dollar' slot='prefix'></sl-icon>
                </sl-input>
                <sl-input @input=${this.changeTripUnits} label='Average Camping Cost' id='campingCost' type='number' min='0' step='0.01' help-text='Average nightly cost to camp'>
                    <sl-icon name='currency-dollar' slot='prefix'></sl-icon>
                </sl-input>
            </div>
        `}};Yt([K("#totalDistance")],St.prototype,"totalDistance",2);Yt([K("#numberOfNights")],St.prototype,"numberOfNights",2);Yt([K("#lodgingCost")],St.prototype,"lodgingCost",2);Yt([K("#campingCost")],St.prototype,"campingCost",2);St=Yt([at("trip-criteria")],St);var Hn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,Zt=(e,t,i,r)=>{for(var o=r>1?void 0:r?jn(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&Hn(t,i,o),o};let At=class extends D{constructor(){super(...arguments),this.name="Not Camping",this.recommendStyle="not-recommended",this.distanceMeasurement="Miles"}static get styles(){return[Gt`
        .value {
            font-weight: bold;
        }

        .recommended {
            color: #4FF04D
        }

        .not-recommended {
            color: #F06A4D
        }
        `]}render(){return et`
            <div class='trip-results-box'>
                <h3>${this.name}</h3>
                Travel distance per tank: <span class="value">${this.calculator.tankDistance} ${this.distanceMeasurement}</span><br/>
                Fuel cost per fill up: <span class="value">$${this.calculator.fuelCostPerFillUp}</span><br/>
                Minimum number of stops: <span class="value">${this.calculator.numberOfStops}</span><br/>
                Total fuel cost: <span class="value">$${this.calculator.totalFuelCost}</span><br/>
                Total lodging cost: <span class="value">$${this.calculator.totalLodgingCost}</span><br/>
                <br/>
                Total cost ${this.name}: <span class="value ${this.recommendStyle}">$${this.calculator.totalCost}</span>
            </div>
        `}};Zt([W()],At.prototype,"name",2);Zt([W()],At.prototype,"recommendStyle",2);Zt([W()],At.prototype,"calculator",2);Zt([W()],At.prototype,"distanceMeasurement",2);At=Zt([at("trip-results")],At);var qn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Kn=(e,t,i,r)=>{for(var o=r>1?void 0:r?Wn(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&qn(t,i,o),o};let vr=class extends D{static get styles(){return Gt`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new Q((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/to-camp-or-not/",animate:!0,children:[{path:"",component:"app-home"},{path:"about",component:"app-about",action:async()=>{await ho(()=>import("./app-about.b98ab681.js"),[])}}]}])}render(){return et`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};vr=Kn([at("app-index")],vr);export{an as a,at as e,Gt as i,D as s,et as y};
//# sourceMappingURL=index.dcf545e8.js.map
