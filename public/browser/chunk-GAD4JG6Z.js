import{C as Yo,G as Xt,I as rr,J as Ko,K as Xo,L as or,N as Jo,P as ve,Q as ti,V as ir,Z as ei,_ as wt,a as me,aa as at,b as Lo,c as Uo,ca as N,d as Fo,e as be,f as jo,g as Yt,h as zo,k as Bo,l as $o,m as Ho,n as St,o as Vo,p as qo,q as Wo,r as en,s as Go,t as Zo,v as Ft,w as Kt,x as Qo}from"./chunk-X4WV2SCJ.js";import{$ as Ve,$a as Zn,A as Wt,Aa as qn,Ab as Je,B as $e,Ba as J,C as bt,Ca as go,Cb as z,D as jn,Da as mo,E as Jr,Ea as bo,Eb as tr,F as to,Fa as vo,G as eo,Ga as Ge,H as F,Ha as Q,Hb as xo,I as zn,Ia as tt,Ib as yt,J as A,Ja as j,Jb as er,K as T,Ka as x,Kb as _o,La as kt,Lb as Oo,Ma as yo,Mb as K,N as b,Na as et,Nb as nr,O as X,Oa as vt,Ob as tn,P as no,Pa as So,Q as D,Qa as wo,R as S,Ra as Co,Rb as ko,S as u,Sa as Wn,Sb as R,T as ro,Ta as Gn,Tb as Po,U as oo,Ua as Ro,Ub as No,V as _t,Va as st,W as Z,Wa as Eo,Xa as Io,Z as He,_ as io,_a as _,a as Gr,aa as k,ab as Qn,b as Zr,ba as so,bb as Pt,c as Qr,ca as Bn,cb as Yn,d as Ln,da as qe,db as Kn,e as Un,ea as We,eb as Xn,f as pt,fb as Ze,g as G,ga as ao,gb as Qe,h as ft,ha as Gt,hb as To,i as O,ia as E,j as p,ja as lo,jb as Mo,k as he,ka as fe,kb as Ye,l as Yr,la as co,lb as nt,m as Kr,ma as $n,mb as Zt,n as C,na as uo,nb as Qt,o as ze,oa as Ot,ob as Nt,p as U,q as pe,qa as Hn,qb as Lt,r as Xr,ra as ho,rb as Ut,s as Be,sa as Vn,sb as Jn,tb as Do,v as gt,va as po,vb as Ao,w as At,wa as P,wb as Ke,x as xt,xa as ge,yb as Y,z as Fn,za as fo,zb as Xe}from"./chunk-XYGHVF62.js";import{a as h,b as W,i as Wr}from"./chunk-ODN5LVDJ.js";var rn=new D(""),ur=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r,i){return this._findPluginFor(n).addEventListener(t,n,r,i)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new T(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||e)(S(rn),S(vt))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),ye=class{_doc;constructor(o){this._doc=o}manager},sr="ng-app-id";function ni(e){for(let o of e)o.remove()}function ri(e,o){let t=o.createElement("style");return t.textContent=e,t}function Ds(e,o,t,n){let r=e.head?.querySelectorAll(`style[${sr}="${o}"],link[${sr}="${o}"]`);if(r)for(let i of r)i.removeAttribute(sr),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function lr(e,o){let t=o.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var dr=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,n,r,i={}){this.doc=t,this.appId=n,this.nonce=r,Ds(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let r of t)this.addUsage(r,this.inline,ri);n?.forEach(r=>this.addUsage(r,this.external,lr))}removeStyles(t,n){for(let r of t)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,n,r){let i=n.get(t);i?i.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,n){let r=n.get(t);r&&(r.usage--,r.usage<=0&&(ni(r.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])ni(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(t,ri(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(t,lr(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),t.appendChild(n)}static \u0275fac=function(n){return new(n||e)(S(k),S($n),S(Hn,8),S(Ot))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),ar={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},hr=/%COMP%/g;var ii="%COMP%",As=`_nghost-${ii}`,xs=`_ngcontent-${ii}`,_s=!0,Os=new D("",{providedIn:"root",factory:()=>_s});function ks(e){return xs.replace(hr,e)}function Ps(e){return As.replace(hr,e)}function si(e,o){return o.map(t=>t.replace(hr,e))}var pr=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;animationDisabled;maxAnimationTimeout;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;registry;constructor(t,n,r,i,s,a,l,c=null,d,f,m=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.animationDisabled=d,this.maxAnimationTimeout=f,this.tracingService=m,this.platformIsServer=!1,this.defaultRenderer=new Se(t,s,l,this.platformIsServer,this.tracingService,this.registry=io(),this.maxAnimationTimeout)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,n);return r instanceof nn?r.applyToHost(t):r instanceof we&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,i=r.get(n.id);if(!i){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.platformIsServer,m=this.tracingService;switch(n.encapsulation){case Vn.Emulated:i=new nn(l,c,n,this.appId,d,s,a,f,m,this.registry,this.animationDisabled,this.maxAnimationTimeout);break;case Vn.ShadowDom:return new cr(l,c,t,n,s,a,this.nonce,f,m,this.registry,this.maxAnimationTimeout);default:i=new we(l,c,n,d,s,a,f,m,this.registry,this.animationDisabled,this.maxAnimationTimeout);break}r.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||e)(S(ur),S(dr),S($n),S(Os),S(k),S(Ot),S(vt),S(Hn),S(Eo),S(Io),S(yo,8))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Se=class{eventManager;doc;ngZone;platformIsServer;tracingService;registry;maxAnimationTimeout;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,t,n,r,i,s,a){this.eventManager=o,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.tracingService=i,this.registry=s,this.maxAnimationTimeout=a}destroy(){}destroyNode=null;createElement(o,t){return t?this.doc.createElementNS(ar[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(oi(o)?o.content:o).appendChild(t)}insertBefore(o,t,n){o&&(oi(o)?o.content:o).insertBefore(t,n)}removeChild(o,t){let{elements:n}=this.registry;if(n){n.animate(t,()=>t.remove(),this.maxAnimationTimeout);return}t.remove()}selectRootElement(o,t){let n=typeof o=="string"?this.doc.querySelector(o):o;if(!n)throw new T(-5104,!1);return t||(n.textContent=""),n}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,n,r){if(r){t=r+":"+t;let i=ar[r];i?o.setAttributeNS(i,t,n):o.setAttribute(t,n)}else o.setAttribute(t,n)}removeAttribute(o,t,n){if(n){let r=ar[n];r?o.removeAttributeNS(r,t):o.removeAttribute(`${n}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,n,r){r&(ge.DashCase|ge.Important)?o.style.setProperty(t,n,r&ge.Important?"important":""):o.style[t]=n}removeStyle(o,t,n){n&ge.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,n){o!=null&&(o[t]=n)}setValue(o,t){o.nodeValue=t}listen(o,t,n,r){if(typeof o=="string"&&(o=me().getGlobalEventTarget(this.doc,o),!o))throw new T(5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(o,t,i)),this.eventManager.addEventListener(o,t,i,r)}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;o(t)===!1&&t.preventDefault()}}};function oi(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var cr=class extends Se{sharedStylesHost;hostEl;shadowRoot;constructor(o,t,n,r,i,s,a,l,c,d,f){super(o,i,s,l,c,d,f),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let m=r.styles;m=si(r.id,m);for(let y of m){let I=document.createElement("style");a&&I.setAttribute("nonce",a),I.textContent=y,this.shadowRoot.appendChild(I)}let v=r.getExternalStyles?.();if(v)for(let y of v){let I=lr(y,i);a&&I.setAttribute("nonce",a),this.shadowRoot.appendChild(I)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,n){return super.insertBefore(this.nodeOrShadowRoot(o),t,n)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},we=class extends Se{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;_animationDisabled;constructor(o,t,n,r,i,s,a,l,c,d,f,m){super(o,i,s,a,l,c,f),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this._animationDisabled=d;let v=n.styles;this.styles=m?si(m,v):v,this.styleUrls=n.getExternalStyles?.(m)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){if(this.removeStylesOnCompDestroy){if(!this._animationDisabled&&this.registry.elements){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)},this.maxAnimationTimeout)});return}this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}}},nn=class extends we{contentAttr;hostAttr;constructor(o,t,n,r,i,s,a,l,c,d,f,m){let v=r+"-"+n.id;super(o,t,n,i,s,a,l,c,d,f,m,v),this.contentAttr=ks(v),this.hostAttr=Ps(v)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let n=super.createElement(o,t);return super.setAttribute(n,this.contentAttr,""),n}};var on=class e extends Uo{supportsDOMEvents=!0;static makeCurrent(){Lo(new e)}onAndCancel(o,t,n,r){return o.addEventListener(t,n,r),()=>{o.removeEventListener(t,n,r)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=Ns();return t==null?null:Ls(t)}resetBaseElement(){Ce=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return Vo(document.cookie,o)}},Ce=null;function Ns(){return Ce=Ce||document.head.querySelector("base"),Ce?Ce.getAttribute("href"):null}function Ls(e){return new URL(e,document.baseURI).pathname}var Us=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),li=(()=>{class e extends ye{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r,i){return t.addEventListener(n,r,i),()=>this.removeEventListener(t,n,r,i)}removeEventListener(t,n,r,i){return t.removeEventListener(n,r,i)}static \u0275fac=function(n){return new(n||e)(S(k))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),ai=["alt","control","meta","shift"],Fs={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},js={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},ci=(()=>{class e extends ye{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,r,i){let s=e.parseEventName(n),a=e.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>me().onAndCancel(t,s.domEventName,a,i))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let i=e._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),ai.forEach(c=>{let d=n.indexOf(c);d>-1&&(n.splice(d,1),s+=c+".")}),s+=i,n.length!=0||i.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(t,n){let r=Fs[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(r=t.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ai.forEach(s=>{if(s!==r){let a=js[s];a(t)&&(i+=s+".")}}),i+=r,i===n)}static eventCallback(t,n,r){return i=>{e.matchEventFullKeyCode(i,t)&&r.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||e)(S(k))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function zs(e,o,t){let n=h({rootComponent:e,platformRef:t?.platformRef},Bs(o));return ko(n)}function Bs(e){return{appProviders:[...Ws,...e?.providers??[]],platformProviders:qs}}function $s(){on.makeCurrent()}function Hs(){return new Bn}function Vs(){return co(document),document}var qs=[{provide:Ot,useValue:Wo},{provide:uo,useValue:$s,multi:!0},{provide:k,useFactory:Vs}];var Ws=[{provide:oo,useValue:"root"},{provide:Bn,useFactory:Hs},{provide:rn,useClass:li,multi:!0,deps:[k]},{provide:rn,useClass:ci,multi:!0,deps:[k]},pr,dr,ur,{provide:fo,useExisting:pr},{provide:qo,useClass:Us},[]];var ui=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||e)(S(k))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var g="primary",Ne=Symbol("RouteTitle"),vr=class{params;constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t[0]:t}return null}getAll(o){if(this.has(o)){let t=this.params[o];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Bt(e){return new vr(e)}function vi(e,o,t){let n=t.path.split("/");if(n.length>e.length||t.pathMatch==="full"&&(o.hasChildren()||n.length<e.length))return null;let r={};for(let i=0;i<n.length;i++){let s=n[i],a=e[i];if(s[0]===":")r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,n.length),posParams:r}}function Zs(e,o){if(e.length!==o.length)return!1;for(let t=0;t<e.length;++t)if(!lt(e[t],o[t]))return!1;return!0}function lt(e,o){let t=e?yr(e):void 0,n=o?yr(o):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let i=0;i<t.length;i++)if(r=t[i],!yi(e[r],o[r]))return!1;return!0}function yr(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function yi(e,o){if(Array.isArray(e)&&Array.isArray(o)){if(e.length!==o.length)return!1;let t=[...e].sort(),n=[...o].sort();return t.every((r,i)=>n[i]===r)}else return e===o}function Si(e){return e.length>0?e[e.length-1]:null}function mt(e){return Yr(e)?e:Co(e)?O(Promise.resolve(e)):p(e)}var Qs={exact:Ci,subset:Ri},wi={exact:Ys,subset:Ks,ignored:()=>!0};function di(e,o,t){return Qs[t.paths](e.root,o.root,t.matrixParams)&&wi[t.queryParams](e.queryParams,o.queryParams)&&!(t.fragment==="exact"&&e.fragment!==o.fragment)}function Ys(e,o){return lt(e,o)}function Ci(e,o,t){if(!jt(e.segments,o.segments)||!ln(e.segments,o.segments,t)||e.numberOfChildren!==o.numberOfChildren)return!1;for(let n in o.children)if(!e.children[n]||!Ci(e.children[n],o.children[n],t))return!1;return!0}function Ks(e,o){return Object.keys(o).length<=Object.keys(e).length&&Object.keys(o).every(t=>yi(e[t],o[t]))}function Ri(e,o,t){return Ei(e,o,o.segments,t)}function Ei(e,o,t,n){if(e.segments.length>t.length){let r=e.segments.slice(0,t.length);return!(!jt(r,t)||o.hasChildren()||!ln(r,t,n))}else if(e.segments.length===t.length){if(!jt(e.segments,t)||!ln(e.segments,t,n))return!1;for(let r in o.children)if(!e.children[r]||!Ri(e.children[r],o.children[r],n))return!1;return!0}else{let r=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!jt(e.segments,r)||!ln(e.segments,r,n)||!e.children[g]?!1:Ei(e.children[g],o,i,n)}}function ln(e,o,t){return o.every((n,r)=>wi[t](e[r].parameters,n.parameters))}var ut=class{root;queryParams;fragment;_queryParamMap;constructor(o=new w([],{}),t={},n=null){this.root=o,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Bt(this.queryParams),this._queryParamMap}toString(){return ta.serialize(this)}},w=class{segments;children;parent=null;constructor(o,t){this.segments=o,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return cn(this)}},Ct=class{path;parameters;_parameterMap;constructor(o,t){this.path=o,this.parameters=t}get parameterMap(){return this._parameterMap??=Bt(this.parameters),this._parameterMap}toString(){return Ti(this)}};function Xs(e,o){return jt(e,o)&&e.every((t,n)=>lt(t.parameters,o[n].parameters))}function jt(e,o){return e.length!==o.length?!1:e.every((t,n)=>t.path===o[n].path)}function Js(e,o){let t=[];return Object.entries(e.children).forEach(([n,r])=>{n===g&&(t=t.concat(o(r,n)))}),Object.entries(e.children).forEach(([n,r])=>{n!==g&&(t=t.concat(o(r,n)))}),t}var $t=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>new Rt,providedIn:"root"})}return e})(),Rt=class{parse(o){let t=new wr(o);return new ut(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(o){let t=`/${Re(o.root,!0)}`,n=ra(o.queryParams),r=typeof o.fragment=="string"?`#${ea(o.fragment)}`:"";return`${t}${n}${r}`}},ta=new Rt;function cn(e){return e.segments.map(o=>Ti(o)).join("/")}function Re(e,o){if(!e.hasChildren())return cn(e);if(o){let t=e.children[g]?Re(e.children[g],!1):"",n=[];return Object.entries(e.children).forEach(([r,i])=>{r!==g&&n.push(`${r}:${Re(i,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Js(e,(n,r)=>r===g?[Re(e.children[g],!1)]:[`${r}:${Re(n,!1)}`]);return Object.keys(e.children).length===1&&e.children[g]!=null?`${cn(e)}/${t[0]}`:`${cn(e)}/(${t.join("//")})`}}function Ii(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function sn(e){return Ii(e).replace(/%3B/gi,";")}function ea(e){return encodeURI(e)}function Sr(e){return Ii(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function un(e){return decodeURIComponent(e)}function hi(e){return un(e.replace(/\+/g,"%20"))}function Ti(e){return`${Sr(e.path)}${na(e.parameters)}`}function na(e){return Object.entries(e).map(([o,t])=>`;${Sr(o)}=${Sr(t)}`).join("")}function ra(e){let o=Object.entries(e).map(([t,n])=>Array.isArray(n)?n.map(r=>`${sn(t)}=${sn(r)}`).join("&"):`${sn(t)}=${sn(n)}`).filter(t=>t);return o.length?`?${o.join("&")}`:""}var oa=/^[^\/()?;#]+/;function fr(e){let o=e.match(oa);return o?o[0]:""}var ia=/^[^\/()?;=#]+/;function sa(e){let o=e.match(ia);return o?o[0]:""}var aa=/^[^=?&#]+/;function la(e){let o=e.match(aa);return o?o[0]:""}var ca=/^[^&#]+/;function ua(e){let o=e.match(ca);return o?o[0]:""}var wr=class{url;remaining;constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new w([],{}):new w([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(o.length>0||Object.keys(t).length>0)&&(n[g]=new w(o,t)),n}parseSegment(){let o=fr(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(o),new Ct(un(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let t=sa(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=fr(this.remaining);r&&(n=r,this.capture(n))}o[un(t)]=un(n)}parseQueryParam(o){let t=la(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let s=ua(this.remaining);s&&(n=s,this.capture(n))}let r=hi(t),i=hi(n);if(o.hasOwnProperty(r)){let s=o[r];Array.isArray(s)||(s=[s],o[r]=s),s.push(i)}else o[r]=i}parseParens(o){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=fr(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new T(4010,!1);let i;n.indexOf(":")>-1?(i=n.slice(0,n.indexOf(":")),this.capture(i),this.capture(":")):o&&(i=g);let s=this.parseChildren();t[i]=Object.keys(s).length===1?s[g]:new w([],s),this.consumeOptional("//")}return t}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new T(4011,!1)}};function Mi(e){return e.segments.length>0?new w([],{[g]:e}):e}function Di(e){let o={};for(let[n,r]of Object.entries(e.children)){let i=Di(r);if(n===g&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))o[s]=a;else(i.segments.length>0||i.hasChildren())&&(o[n]=i)}let t=new w(e.segments,o);return da(t)}function da(e){if(e.numberOfChildren===1&&e.children[g]){let o=e.children[g];return new w(e.segments.concat(o.segments),o.children)}return e}function Et(e){return e instanceof ut}function Ai(e,o,t=null,n=null){let r=xi(e);return _i(r,o,t,n)}function xi(e){let o;function t(i){let s={};for(let l of i.children){let c=t(l);s[l.outlet]=c}let a=new w(i.url,s);return i===e&&(o=a),a}let n=t(e.root),r=Mi(n);return o??r}function _i(e,o,t,n){let r=e;for(;r.parent;)r=r.parent;if(o.length===0)return gr(r,r,r,t,n);let i=ha(o);if(i.toRoot())return gr(r,r,new w([],{}),t,n);let s=pa(i,r,e),a=s.processChildren?Ie(s.segmentGroup,s.index,i.commands):ki(s.segmentGroup,s.index,i.commands);return gr(r,s.segmentGroup,a,t,n)}function dn(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Me(e){return typeof e=="object"&&e!=null&&e.outlets}function gr(e,o,t,n,r){let i={};n&&Object.entries(n).forEach(([l,c])=>{i[l]=Array.isArray(c)?c.map(d=>`${d}`):`${c}`});let s;e===o?s=t:s=Oi(e,o,t);let a=Mi(Di(s));return new ut(a,i,r)}function Oi(e,o,t){let n={};return Object.entries(e.children).forEach(([r,i])=>{i===o?n[r]=t:n[r]=Oi(i,o,t)}),new w(e.segments,n)}var hn=class{isAbsolute;numberOfDoubleDots;commands;constructor(o,t,n){if(this.isAbsolute=o,this.numberOfDoubleDots=t,this.commands=n,o&&n.length>0&&dn(n[0]))throw new T(4003,!1);let r=n.find(Me);if(r&&r!==Si(n))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ha(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new hn(!0,0,e);let o=0,t=!1,n=e.reduce((r,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(i.segmentPath)return[...r,i.segmentPath]}return typeof i!="string"?[...r,i]:s===0?(i.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?o++:a!=""&&r.push(a))}),r):[...r,i]},[]);return new hn(t,o,n)}var ee=class{segmentGroup;processChildren;index;constructor(o,t,n){this.segmentGroup=o,this.processChildren=t,this.index=n}};function pa(e,o,t){if(e.isAbsolute)return new ee(o,!0,0);if(!t)return new ee(o,!1,NaN);if(t.parent===null)return new ee(t,!0,0);let n=dn(e.commands[0])?0:1,r=t.segments.length-1+n;return fa(t,r,e.numberOfDoubleDots)}function fa(e,o,t){let n=e,r=o,i=t;for(;i>r;){if(i-=r,n=n.parent,!n)throw new T(4005,!1);r=n.segments.length}return new ee(n,!1,r-i)}function ga(e){return Me(e[0])?e[0].outlets:{[g]:e}}function ki(e,o,t){if(e??=new w([],{}),e.segments.length===0&&e.hasChildren())return Ie(e,o,t);let n=ma(e,o,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<e.segments.length){let i=new w(e.segments.slice(0,n.pathIndex),{});return i.children[g]=new w(e.segments.slice(n.pathIndex),e.children),Ie(i,0,r)}else return n.match&&r.length===0?new w(e.segments,{}):n.match&&!e.hasChildren()?Cr(e,o,t):n.match?Ie(e,0,r):Cr(e,o,t)}function Ie(e,o,t){if(t.length===0)return new w(e.segments,{});{let n=ga(t),r={};if(Object.keys(n).some(i=>i!==g)&&e.children[g]&&e.numberOfChildren===1&&e.children[g].segments.length===0){let i=Ie(e.children[g],o,t);return new w(e.segments,i.children)}return Object.entries(n).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[i]=ki(e.children[i],o,s))}),Object.entries(e.children).forEach(([i,s])=>{n[i]===void 0&&(r[i]=s)}),new w(e.segments,r)}}function ma(e,o,t){let n=0,r=o,i={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(n>=t.length)return i;let s=e.segments[r],a=t[n];if(Me(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!fi(l,c,s))return i;n+=2}else{if(!fi(l,{},s))return i;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Cr(e,o,t){let n=e.segments.slice(0,o),r=0;for(;r<t.length;){let i=t[r];if(Me(i)){let l=ba(i.outlets);return new w(n,l)}if(r===0&&dn(t[0])){let l=e.segments[o];n.push(new Ct(l.path,pi(t[0]))),r++;continue}let s=Me(i)?i.outlets[g]:`${i}`,a=r<t.length-1?t[r+1]:null;s&&a&&dn(a)?(n.push(new Ct(s,pi(a))),r+=2):(n.push(new Ct(s,{})),r++)}return new w(n,{})}function ba(e){let o={};return Object.entries(e).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(o[t]=Cr(new w([],{}),0,n))}),o}function pi(e){let o={};return Object.entries(e).forEach(([t,n])=>o[t]=`${n}`),o}function fi(e,o,t){return e==t.path&&lt(o,t.parameters)}var ne="imperative",M=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(M||{}),$=class{id;url;constructor(o,t){this.id=o,this.url=t}},It=class extends ${type=M.NavigationStart;navigationTrigger;restoredState;constructor(o,t,n="imperative",r=null){super(o,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},H=class extends ${urlAfterRedirects;type=M.NavigationEnd;constructor(o,t,n){super(o,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},L=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(L||{}),oe=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(oe||{}),ct=class extends ${reason;code;type=M.NavigationCancel;constructor(o,t,n,r){super(o,t),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},dt=class extends ${reason;code;type=M.NavigationSkipped;constructor(o,t,n,r){super(o,t),this.reason=n,this.code=r}},ie=class extends ${error;target;type=M.NavigationError;constructor(o,t,n,r){super(o,t),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},De=class extends ${urlAfterRedirects;state;type=M.RoutesRecognized;constructor(o,t,n,r){super(o,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pn=class extends ${urlAfterRedirects;state;type=M.GuardsCheckStart;constructor(o,t,n,r){super(o,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fn=class extends ${urlAfterRedirects;state;shouldActivate;type=M.GuardsCheckEnd;constructor(o,t,n,r,i){super(o,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},gn=class extends ${urlAfterRedirects;state;type=M.ResolveStart;constructor(o,t,n,r){super(o,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mn=class extends ${urlAfterRedirects;state;type=M.ResolveEnd;constructor(o,t,n,r){super(o,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bn=class{route;type=M.RouteConfigLoadStart;constructor(o){this.route=o}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},vn=class{route;type=M.RouteConfigLoadEnd;constructor(o){this.route=o}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},yn=class{snapshot;type=M.ChildActivationStart;constructor(o){this.snapshot=o}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sn=class{snapshot;type=M.ChildActivationEnd;constructor(o){this.snapshot=o}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wn=class{snapshot;type=M.ActivationStart;constructor(o){this.snapshot=o}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Cn=class{snapshot;type=M.ActivationEnd;constructor(o){this.snapshot=o}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},se=class{routerEvent;position;anchor;type=M.Scroll;constructor(o,t,n){this.routerEvent=o,this.position=t,this.anchor=n}toString(){let o=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${o}')`}},Ae=class{},ae=class{url;navigationBehaviorOptions;constructor(o,t){this.url=o,this.navigationBehaviorOptions=t}};function va(e){return!(e instanceof Ae)&&!(e instanceof ae)}function ya(e,o){return e.providers&&!e._injector&&(e._injector=Ge(e.providers,o,`Route: ${e.path}`)),e._injector??o}function ot(e){return e.outlet||g}function Sa(e,o){let t=e.filter(n=>ot(n)===o);return t.push(...e.filter(n=>ot(n)!==o)),t}function ue(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let o=e.parent;o;o=o.parent){let t=o.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Rn=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ue(this.route?.snapshot)??this.rootInjector}constructor(o){this.rootInjector=o,this.children=new Ht(this.rootInjector)}},Ht=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new Rn(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||e)(S(_t))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),En=class{_root;constructor(o){this._root=o}get root(){return this._root.value}parent(o){let t=this.pathFromRoot(o);return t.length>1?t[t.length-2]:null}children(o){let t=Rr(o,this._root);return t?t.children.map(n=>n.value):[]}firstChild(o){let t=Rr(o,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(o){let t=Er(o,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==o)}pathFromRoot(o){return Er(o,this._root).map(t=>t.value)}};function Rr(e,o){if(e===o.value)return o;for(let t of o.children){let n=Rr(e,t);if(n)return n}return null}function Er(e,o){if(e===o.value)return[o];for(let t of o.children){let n=Er(e,t);if(n.length)return n.unshift(o),n}return[]}var B=class{value;children;constructor(o,t){this.value=o,this.children=t}toString(){return`TreeNode(${this.value})`}};function te(e){let o={};return e&&e.children.forEach(t=>o[t.value.outlet]=t),o}var xe=class extends En{snapshot;constructor(o,t){super(o),this.snapshot=t,Or(this,o)}toString(){return this.snapshot.toString()}};function Pi(e){let o=wa(e),t=new G([new Ct("",{})]),n=new G({}),r=new G({}),i=new G({}),s=new G(""),a=new ht(t,n,i,s,r,g,e,o.root);return a.snapshot=o.root,new xe(new B(a,[]),o)}function wa(e){let o={},t={},n={},i=new zt([],o,n,"",t,g,e,null,{});return new _e("",new B(i,[]))}var ht=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(o,t,n,r,i,s,a,l){this.urlSubject=o,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(C(c=>c[Ne]))??p(void 0),this.url=o,this.params=t,this.queryParams=n,this.fragment=r,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(C(o=>Bt(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(C(o=>Bt(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function In(e,o,t="emptyOnly"){let n,{routeConfig:r}=e;return o!==null&&(t==="always"||r?.path===""||!o.component&&!o.routeConfig?.loadComponent)?n={params:h(h({},o.params),e.params),data:h(h({},o.data),e.data),resolve:h(h(h(h({},e.data),o.data),r?.data),e._resolvedData)}:n={params:h({},e.params),data:h({},e.data),resolve:h(h({},e.data),e._resolvedData??{})},r&&Li(r)&&(n.resolve[Ne]=r.title),n}var zt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ne]}constructor(o,t,n,r,i,s,a,l,c){this.url=o,this.params=t,this.queryParams=n,this.fragment=r,this.data=i,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Bt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Bt(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${t}')`}},_e=class extends En{url;constructor(o,t){super(t),this.url=o,Or(this,t)}toString(){return Ni(this._root)}};function Or(e,o){o.value._routerState=e,o.children.forEach(t=>Or(e,t))}function Ni(e){let o=e.children.length>0?` { ${e.children.map(Ni).join(", ")} } `:"";return`${e.value}${o}`}function mr(e){if(e.snapshot){let o=e.snapshot,t=e._futureSnapshot;e.snapshot=t,lt(o.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),o.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),lt(o.params,t.params)||e.paramsSubject.next(t.params),Zs(o.url,t.url)||e.urlSubject.next(t.url),lt(o.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Ir(e,o){let t=lt(e.params,o.params)&&Xs(e.url,o.url),n=!e.parent!=!o.parent;return t&&!n&&(!e.parent||Ir(e.parent,o.parent))}function Li(e){return typeof e.title=="string"||e.title===null}var Ui=new D(""),kr=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=g;activateEvents=new et;deactivateEvents=new et;attachEvents=new et;detachEvents=new et;routerOutletData=K(void 0);parentContexts=u(Ht);location=u(mo);changeDetector=u(tn);inputBinder=u(Le,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Tr(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=j({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Gt]})}return e})(),Tr=class{route;childContexts;parent;outletData;constructor(o,t,n,r){this.route=o,this.childContexts=t,this.parent=n,this.outletData=r}get(o,t){return o===ht?this.route:o===Ht?this.childContexts:o===Ui?this.outletData:this.parent.get(o,t)}},Le=new D(""),Pr=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:n}=t,r=ze([n.queryParams,n.params,n.data]).pipe(F(([i,s,a],l)=>(a=h(h(h({},i),s),a),l===0?p(a):Promise.resolve(a)))).subscribe(i=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(t);return}let s=No(n.component);if(!s){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of s.inputs)t.activatedComponentRef.setInput(a,i[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Nr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=Q({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Pt(0,"router-outlet")},dependencies:[kr],encapsulation:2})}return e})();function Lr(e){let o=e.children&&e.children.map(Lr),t=o?W(h({},e),{children:o}):h({},e);return!t.component&&!t.loadComponent&&(o||t.loadChildren)&&t.outlet&&t.outlet!==g&&(t.component=Nr),t}function Ca(e,o,t){let n=Oe(e,o._root,t?t._root:void 0);return new xe(n,o)}function Oe(e,o,t){if(t&&e.shouldReuseRoute(o.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=o.value;let r=Ra(e,o,t);return new B(n,r)}else{if(e.shouldAttach(o.value)){let i=e.retrieve(o.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=o.value,s.children=o.children.map(a=>Oe(e,a)),s}}let n=Ea(o.value),r=o.children.map(i=>Oe(e,i));return new B(n,r)}}function Ra(e,o,t){return o.children.map(n=>{for(let r of t.children)if(e.shouldReuseRoute(n.value,r.value.snapshot))return Oe(e,n,r);return Oe(e,n)})}function Ea(e){return new ht(new G(e.url),new G(e.params),new G(e.queryParams),new G(e.fragment),new G(e.data),e.outlet,e.component,e)}var le=class{redirectTo;navigationBehaviorOptions;constructor(o,t){this.redirectTo=o,this.navigationBehaviorOptions=t}},Fi="ngNavigationCancelingError";function Tn(e,o){let{redirectTo:t,navigationBehaviorOptions:n}=Et(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,r=ji(!1,L.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function ji(e,o){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[Fi]=!0,t.cancellationCode=o,t}function Ia(e){return zi(e)&&Et(e.url)}function zi(e){return!!e&&e[Fi]}var Ta=(e,o,t,n)=>C(r=>(new Mr(o,r.targetRouterState,r.currentRouterState,t,n).activate(e),r)),Mr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(o,t,n,r,i){this.routeReuseStrategy=o,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=i}activate(o){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,o),mr(this.futureState.root),this.activateChildRoutes(t,n,o)}deactivateChildRoutes(o,t,n){let r=te(t);o.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,r[s],n),delete r[s]}),Object.values(r).forEach(i=>{this.deactivateRouteAndItsChildren(i,n)})}deactivateRoutes(o,t,n){let r=o.value,i=t?t.value:null;if(r===i)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(o,t,s.children)}else this.deactivateChildRoutes(o,t,n);else i&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(o,t){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,t):this.deactivateRouteAndOutlet(o,t)}detachAndStoreRouteSubtree(o,t){let n=t.getContext(o.value.outlet),r=n&&o.value.component?n.children:t,i=te(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:s,route:o,contexts:a})}}deactivateRouteAndOutlet(o,t){let n=t.getContext(o.value.outlet),r=n&&o.value.component?n.children:t,i=te(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(o,t,n){let r=te(t);o.children.forEach(i=>{this.activateRoutes(i,r[i.value.outlet],n),this.forwardEvent(new Cn(i.value.snapshot))}),o.children.length&&this.forwardEvent(new Sn(o.value.snapshot))}activateRoutes(o,t,n){let r=o.value,i=t?t.value:null;if(mr(r),r===i)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(o,t,s.children)}else this.activateChildRoutes(o,t,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),mr(a.route.value),this.activateChildRoutes(o,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(o,null,s.children)}else this.activateChildRoutes(o,null,n)}},Mn=class{path;route;constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},re=class{component;route;constructor(o,t){this.component=o,this.route=t}};function Ma(e,o,t){let n=e._root,r=o?o._root:null;return Ee(n,r,t,[n.value])}function Da(e){let o=e.routeConfig?e.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:e,guards:o}}function de(e,o){let t=Symbol(),n=o.get(e,t);return n===t?typeof e=="function"&&!no(e)?e:o.get(e):n}function Ee(e,o,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=te(o);return e.children.forEach(s=>{Aa(s,i[s.value.outlet],t,n.concat([s.value]),r),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Te(a,t.getContext(s),r)),r}function Aa(e,o,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=o?o.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=xa(s,i,i.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Mn(n)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Ee(e,o,a?a.children:null,n,r):Ee(e,o,t,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new re(a.outlet.component,s))}else s&&Te(o,a,r),r.canActivateChecks.push(new Mn(n)),i.component?Ee(e,null,a?a.children:null,n,r):Ee(e,null,t,n,r);return r}function xa(e,o,t){if(typeof t=="function")return t(e,o);switch(t){case"pathParamsChange":return!jt(e.url,o.url);case"pathParamsOrQueryParamsChange":return!jt(e.url,o.url)||!lt(e.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ir(e,o)||!lt(e.queryParams,o.queryParams);case"paramsChange":default:return!Ir(e,o)}}function Te(e,o,t){let n=te(e),r=e.value;Object.entries(n).forEach(([i,s])=>{r.component?o?Te(s,o.children.getContext(i),t):Te(s,null,t):Te(s,o,t)}),r.component?o&&o.outlet&&o.outlet.isActivated?t.canDeactivateChecks.push(new re(o.outlet.component,r)):t.canDeactivateChecks.push(new re(null,r)):t.canDeactivateChecks.push(new re(null,r))}function Ue(e){return typeof e=="function"}function _a(e){return typeof e=="boolean"}function Oa(e){return e&&Ue(e.canLoad)}function ka(e){return e&&Ue(e.canActivate)}function Pa(e){return e&&Ue(e.canActivateChild)}function Na(e){return e&&Ue(e.canDeactivate)}function La(e){return e&&Ue(e.canMatch)}function Bi(e){return e instanceof Kr||e?.name==="EmptyError"}var an=Symbol("INITIAL_VALUE");function ce(){return F(e=>ze(e.map(o=>o.pipe(Wt(1),eo(an)))).pipe(C(o=>{for(let t of o)if(t!==!0){if(t===an)return an;if(t===!1||Ua(t))return t}return!0}),gt(o=>o!==an),Wt(1)))}function Ua(e){return Et(e)||e instanceof le}function Fa(e,o){return U(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:s}}=t;return s.length===0&&i.length===0?p(W(h({},t),{guardsResult:!0})):ja(s,n,r,e).pipe(U(a=>a&&_a(a)?za(n,i,e,o):p(a)),C(a=>W(h({},t),{guardsResult:a})))})}function ja(e,o,t,n){return O(e).pipe(U(r=>qa(r.component,r.route,t,o,n)),bt(r=>r!==!0,!0))}function za(e,o,t,n){return O(o).pipe(xt(r=>Xr($a(r.route.parent,n),Ba(r.route,n),Va(e,r.path,t),Ha(e,r.route,t))),bt(r=>r!==!0,!0))}function Ba(e,o){return e!==null&&o&&o(new wn(e)),p(!0)}function $a(e,o){return e!==null&&o&&o(new yn(e)),p(!0)}function Ha(e,o,t){let n=o.routeConfig?o.routeConfig.canActivate:null;if(!n||n.length===0)return p(!0);let r=n.map(i=>Be(()=>{let s=ue(o)??t,a=de(i,s),l=ka(a)?a.canActivate(o,e):Z(s,()=>a(o,e));return mt(l).pipe(bt())}));return p(r).pipe(ce())}function Va(e,o,t){let n=o[o.length-1],i=o.slice(0,o.length-1).reverse().map(s=>Da(s)).filter(s=>s!==null).map(s=>Be(()=>{let a=s.guards.map(l=>{let c=ue(s.node)??t,d=de(l,c),f=Pa(d)?d.canActivateChild(n,e):Z(c,()=>d(n,e));return mt(f).pipe(bt())});return p(a).pipe(ce())}));return p(i).pipe(ce())}function qa(e,o,t,n,r){let i=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!i||i.length===0)return p(!0);let s=i.map(a=>{let l=ue(o)??r,c=de(a,l),d=Na(c)?c.canDeactivate(e,o,t,n):Z(l,()=>c(e,o,t,n));return mt(d).pipe(bt())});return p(s).pipe(ce())}function Wa(e,o,t,n){let r=o.canLoad;if(r===void 0||r.length===0)return p(!0);let i=r.map(s=>{let a=de(s,e),l=Oa(a)?a.canLoad(o,t):Z(e,()=>a(o,t));return mt(l)});return p(i).pipe(ce(),$i(n))}function $i(e){return Zr(A(o=>{if(typeof o!="boolean")throw Tn(e,o)}),C(o=>o===!0))}function Ga(e,o,t,n){let r=o.canMatch;if(!r||r.length===0)return p(!0);let i=r.map(s=>{let a=de(s,e),l=La(a)?a.canMatch(o,t):Z(e,()=>a(o,t));return mt(l)});return p(i).pipe(ce(),$i(n))}var ke=class{segmentGroup;constructor(o){this.segmentGroup=o||null}},Pe=class extends Error{urlTree;constructor(o){super(),this.urlTree=o}};function Jt(e){return he(new ke(e))}function Za(e){return he(new T(4e3,!1))}function Qa(e){return he(ji(!1,L.GuardRejected))}var Dr=class{urlSerializer;urlTree;constructor(o,t){this.urlSerializer=o,this.urlTree=t}lineralizeSegments(o,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return p(n);if(r.numberOfChildren>1||!r.children[g])return Za(`${o.redirectTo}`);r=r.children[g]}}applyRedirectCommands(o,t,n,r,i){return Ya(t,r,i).pipe(C(s=>{if(s instanceof ut)throw new Pe(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),o,n);if(s[0]==="/")throw new Pe(a);return a}))}applyRedirectCreateUrlTree(o,t,n,r){let i=this.createSegmentGroup(o,t.root,n,r);return new ut(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(o,t){let n={};return Object.entries(o).forEach(([r,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);n[r]=t[a]}else n[r]=i}),n}createSegmentGroup(o,t,n,r){let i=this.createSegments(o,t.segments,n,r),s={};return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(o,l,n,r)}),new w(i,s)}createSegments(o,t,n,r){return t.map(i=>i.path[0]===":"?this.findPosParam(o,i,r):this.findOrReturn(i,n))}findPosParam(o,t,n){let r=n[t.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(o,t){let n=0;for(let r of t){if(r.path===o.path)return t.splice(n),r;n++}return o}};function Ya(e,o,t){if(typeof e=="string")return p(e);let n=e,{queryParams:r,fragment:i,routeConfig:s,url:a,outlet:l,params:c,data:d,title:f}=o;return mt(Z(t,()=>n({params:c,data:d,queryParams:r,fragment:i,routeConfig:s,url:a,outlet:l,title:f})))}var Ar={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ka(e,o,t,n,r){let i=Hi(e,o,t);return i.matched?(n=ya(o,n),Ga(n,o,t,r).pipe(C(s=>s===!0?i:h({},Ar)))):p(i)}function Hi(e,o,t){if(o.path==="**")return Xa(t);if(o.path==="")return o.pathMatch==="full"&&(e.hasChildren()||t.length>0)?h({},Ar):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(o.matcher||vi)(t,e,o);if(!r)return h({},Ar);let i={};Object.entries(r.posParams??{}).forEach(([a,l])=>{i[a]=l.path});let s=r.consumed.length>0?h(h({},i),r.consumed[r.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Xa(e){return{matched:!0,parameters:e.length>0?Si(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function gi(e,o,t,n){return t.length>0&&el(e,t,n)?{segmentGroup:new w(o,tl(n,new w(t,e.children))),slicedSegments:[]}:t.length===0&&nl(e,t,n)?{segmentGroup:new w(e.segments,Ja(e,t,n,e.children)),slicedSegments:t}:{segmentGroup:new w(e.segments,e.children),slicedSegments:t}}function Ja(e,o,t,n){let r={};for(let i of t)if(An(e,o,i)&&!n[ot(i)]){let s=new w([],{});r[ot(i)]=s}return h(h({},n),r)}function tl(e,o){let t={};t[g]=o;for(let n of e)if(n.path===""&&ot(n)!==g){let r=new w([],{});t[ot(n)]=r}return t}function el(e,o,t){return t.some(n=>An(e,o,n)&&ot(n)!==g)}function nl(e,o,t){return t.some(n=>An(e,o,n))}function An(e,o,t){return(e.hasChildren()||o.length>0)&&t.pathMatch==="full"?!1:t.path===""}function rl(e,o,t){return o.length===0&&!e.children[t]}var xr=class{};function ol(e,o,t,n,r,i,s="emptyOnly"){return new _r(e,o,t,n,r,s,i).recognize()}var il=31,_r=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(o,t,n,r,i,s,a){this.injector=o,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Dr(this.urlSerializer,this.urlTree)}noMatchError(o){return new T(4002,`'${o.segmentGroup}'`)}recognize(){let o=gi(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(C(({children:t,rootSnapshot:n})=>{let r=new B(n,t),i=new _e("",r),s=Ai(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(o){let t=new zt([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),g,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,g,t).pipe(C(n=>({children:n,rootSnapshot:t})),At(n=>{if(n instanceof Pe)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof ke?this.noMatchError(n):n}))}processSegmentGroup(o,t,n,r,i){return n.segments.length===0&&n.hasChildren()?this.processChildren(o,t,n,i):this.processSegment(o,t,n,n.segments,r,!0,i).pipe(C(s=>s instanceof B?[s]:[]))}processChildren(o,t,n,r){let i=[];for(let s of Object.keys(n.children))s==="primary"?i.unshift(s):i.push(s);return O(i).pipe(xt(s=>{let a=n.children[s],l=Sa(t,s);return this.processSegmentGroup(o,l,a,s,r)}),to((s,a)=>(s.push(...a),s)),Fn(null),Jr(),U(s=>{if(s===null)return Jt(n);let a=Vi(s);return sl(a),p(a)}))}processSegment(o,t,n,r,i,s,a){return O(t).pipe(xt(l=>this.processSegmentAgainstRoute(l._injector??o,t,l,n,r,i,s,a).pipe(At(c=>{if(c instanceof ke)return p(null);throw c}))),bt(l=>!!l),At(l=>{if(Bi(l))return rl(n,r,i)?p(new xr):Jt(n);throw l}))}processSegmentAgainstRoute(o,t,n,r,i,s,a,l){return ot(n)!==s&&(s===g||!An(r,i,n))?Jt(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(o,r,n,i,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(o,r,t,n,i,s,l):Jt(r)}expandSegmentAgainstRouteUsingRedirect(o,t,n,r,i,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:m}=Hi(t,r,i);if(!l)return Jt(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>il&&(this.allowRedirects=!1));let v=new zt(i,c,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,mi(r),ot(r),r.component??r._loadedComponent??null,r,bi(r)),y=In(v,a,this.paramsInheritanceStrategy);return v.params=Object.freeze(y.params),v.data=Object.freeze(y.data),this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,v,o).pipe(F(V=>this.applyRedirects.lineralizeSegments(r,V)),U(V=>this.processSegment(o,n,t,V.concat(m),s,!1,a)))}matchSegmentAgainstRoute(o,t,n,r,i,s){let a=Ka(t,n,r,o,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(F(l=>l.matched?(o=n._injector??o,this.getChildConfig(o,n,r).pipe(F(({routes:c})=>{let d=n._loadedInjector??o,{parameters:f,consumedSegments:m,remainingSegments:v}=l,y=new zt(m,f,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,mi(n),ot(n),n.component??n._loadedComponent??null,n,bi(n)),I=In(y,s,this.paramsInheritanceStrategy);y.params=Object.freeze(I.params),y.data=Object.freeze(I.data);let{segmentGroup:V,slicedSegments:qt}=gi(t,m,v,c);if(qt.length===0&&V.hasChildren())return this.processChildren(d,c,V,y).pipe(C(q=>new B(y,q)));if(c.length===0&&qt.length===0)return p(new B(y,[]));let Nn=ot(n)===i;return this.processSegment(d,c,V,qt,Nn?g:i,!0,y).pipe(C(q=>new B(y,q instanceof B?[q]:[])))}))):Jt(t)))}getChildConfig(o,t,n){return t.children?p({routes:t.children,injector:o}):t.loadChildren?t._loadedRoutes!==void 0?p({routes:t._loadedRoutes,injector:t._loadedInjector}):Wa(o,t,n,this.urlSerializer).pipe(U(r=>r?this.configLoader.loadChildren(o,t).pipe(A(i=>{t._loadedRoutes=i.routes,t._loadedInjector=i.injector})):Qa(t))):p({routes:[],injector:o})}};function sl(e){e.sort((o,t)=>o.value.outlet===g?-1:t.value.outlet===g?1:o.value.outlet.localeCompare(t.value.outlet))}function al(e){let o=e.value.routeConfig;return o&&o.path===""}function Vi(e){let o=[],t=new Set;for(let n of e){if(!al(n)){o.push(n);continue}let r=o.find(i=>n.value.routeConfig===i.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):o.push(n)}for(let n of t){let r=Vi(n.children);o.push(new B(n.value,r))}return o.filter(n=>!t.has(n))}function mi(e){return e.data||{}}function bi(e){return e.resolve||{}}function ll(e,o,t,n,r,i){return U(s=>ol(e,o,t,n,s.extractedUrl,r,i).pipe(C(({state:a,tree:l})=>W(h({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function cl(e,o){return U(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return p(t);let i=new Set(r.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let c of qi(l))s.add(c);let a=0;return O(s).pipe(xt(l=>i.has(l)?ul(l,n,e,o):(l.data=In(l,l.parent,e).resolve,p(void 0))),A(()=>a++),jn(1),U(l=>a===s.size?p(t):ft))})}function qi(e){let o=e.children.map(t=>qi(t)).flat();return[e,...o]}function ul(e,o,t,n){let r=e.routeConfig,i=e._resolve;return r?.title!==void 0&&!Li(r)&&(i[Ne]=r.title),Be(()=>(e.data=In(e,e.parent,t).resolve,dl(i,e,o,n).pipe(C(s=>(e._resolvedData=s,e.data=h(h({},e.data),s),null)))))}function dl(e,o,t,n){let r=yr(e);if(r.length===0)return p({});let i={};return O(r).pipe(U(s=>hl(e[s],o,t,n).pipe(bt(),A(a=>{if(a instanceof le)throw Tn(new Rt,a);i[s]=a}))),jn(1),C(()=>i),At(s=>Bi(s)?ft:he(s)))}function hl(e,o,t,n){let r=ue(o)??n,i=de(e,r),s=i.resolve?i.resolve(o,t):Z(r,()=>i(o,t));return mt(s)}function br(e){return F(o=>{let t=e(o);return t?O(t).pipe(C(()=>o)):p(o)})}var Ur=(()=>{class e{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(i=>i.outlet===g);return n}getResolvedTitleForRoute(t){return t.data[Ne]}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>u(Wi),providedIn:"root"})}return e})(),Wi=(()=>{class e extends Ur{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||e)(S(ui))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Tt=new D("",{providedIn:"root",factory:()=>({})}),Vt=new D(""),xn=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(xo);loadComponent(t,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return p(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=mt(Z(t,()=>n.loadComponent())).pipe(C(Zi),F(Qi),A(s=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=s}),$e(()=>{this.componentLoaders.delete(n)})),i=new Un(r,()=>new pt).pipe(Ln());return this.componentLoaders.set(n,i),i}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return p({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=Gi(n,this.compiler,t,this.onLoadEndListener).pipe($e(()=>{this.childrenLoaders.delete(n)})),s=new Un(i,()=>new pt).pipe(Ln());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Gi(e,o,t,n){return mt(Z(t,()=>e.loadChildren())).pipe(C(Zi),F(Qi),U(r=>r instanceof vo||Array.isArray(r)?p(r):O(o.compileModuleAsync(r))),C(r=>{n&&n(e);let i,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(i=r.create(t).injector,s=i.get(Vt,[],{optional:!0,self:!0}).flat()),{routes:s.map(Lr),injector:i}}))}function pl(e){return e&&typeof e=="object"&&"default"in e}function Zi(e){return pl(e)?e.default:e}function Qi(e){return p(e)}var _n=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>u(fl),providedIn:"root"})}return e})(),fl=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Fr=new D(""),jr=new D("");function Yi(e,o,t){let n=e.get(jr),r=e.get(k);if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let i,s=new Promise(c=>{i=c}),a=r.startViewTransition(()=>(i(),gl(e)));a.ready.catch(c=>{});let{onViewTransitionCreated:l}=n;return l&&Z(e,()=>l({transition:a,from:o,to:t})),s}function gl(e){return new Promise(o=>{So({read:()=>setTimeout(o)},{injector:e})})}var zr=new D(""),On=(()=>{class e{currentNavigation=We(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new pt;transitionAbortWithErrorSubject=new pt;configLoader=u(xn);environmentInjector=u(_t);destroyRef=u(so);urlSerializer=u($t);rootContexts=u(Ht);location=u(Yt);inputBindingEnabled=u(Le,{optional:!0})!==null;titleStrategy=u(Ur);options=u(Tt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(_n);createViewTransition=u(Fr,{optional:!0});navigationErrorHandler=u(zr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>p(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new bn(r)),n=r=>this.events.next(new vn(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;yt(()=>{this.transitions?.next(W(h({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:n}))})}setupNavigations(t){return this.transitions=new G(null),this.transitions.pipe(gt(n=>n!==null),F(n=>{let r=!1;return p(n).pipe(F(i=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",L.SupersededByNewNavigation),ft;this.currentTransition=n,this.currentNavigation.set({id:i.id,initialUrl:i.rawUrl,extractedUrl:i.extractedUrl,targetBrowserUrl:typeof i.extras.browserUrl=="string"?this.urlSerializer.parse(i.extras.browserUrl):i.extras.browserUrl,trigger:i.source,extras:i.extras,previousNavigation:this.lastSuccessfulNavigation?W(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>i.abortController.abort()});let s=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=i.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!s&&a!=="reload")return this.events.next(new dt(i.id,this.urlSerializer.serialize(i.rawUrl),"",oe.IgnoredSameUrlNavigation)),i.resolve(!1),ft;if(this.urlHandlingStrategy.shouldProcessUrl(i.rawUrl))return p(i).pipe(F(l=>(this.events.next(new It(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?ft:Promise.resolve(l))),ll(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),A(l=>{n.targetSnapshot=l.targetSnapshot,n.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation.update(d=>(d.finalUrl=l.urlAfterRedirects,d));let c=new De(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(i.currentRawUrl)){let{id:l,extractedUrl:c,source:d,restoredState:f,extras:m}=i,v=new It(l,this.urlSerializer.serialize(c),d,f);this.events.next(v);let y=Pi(this.rootComponentType).snapshot;return this.currentTransition=n=W(h({},i),{targetSnapshot:y,urlAfterRedirects:c,extras:W(h({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(I=>(I.finalUrl=c,I)),p(n)}else return this.events.next(new dt(i.id,this.urlSerializer.serialize(i.extractedUrl),"",oe.IgnoredByUrlHandlingStrategy)),i.resolve(!1),ft}),A(i=>{let s=new pn(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot);this.events.next(s)}),C(i=>(this.currentTransition=n=W(h({},i),{guards:Ma(i.targetSnapshot,i.currentSnapshot,this.rootContexts)}),n)),Fa(this.environmentInjector,i=>this.events.next(i)),A(i=>{if(n.guardsResult=i.guardsResult,i.guardsResult&&typeof i.guardsResult!="boolean")throw Tn(this.urlSerializer,i.guardsResult);let s=new fn(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot,!!i.guardsResult);this.events.next(s)}),gt(i=>i.guardsResult?!0:(this.cancelNavigationTransition(i,"",L.GuardRejected),!1)),br(i=>{if(i.guards.canActivateChecks.length!==0)return p(i).pipe(A(s=>{let a=new gn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),F(s=>{let a=!1;return p(s).pipe(cl(this.paramsInheritanceStrategy,this.environmentInjector),A({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",L.NoDataFromResolver)}}))}),A(s=>{let a=new mn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),br(i=>{let s=a=>{let l=[];if(a.routeConfig?.loadComponent){let c=ue(a)??this.environmentInjector;l.push(this.configLoader.loadComponent(c,a.routeConfig).pipe(A(d=>{a.component=d}),C(()=>{})))}for(let c of a.children)l.push(...s(c));return l};return ze(s(i.targetSnapshot.root)).pipe(Fn(null),Wt(1))}),br(()=>this.afterPreactivation()),F(()=>{let{currentSnapshot:i,targetSnapshot:s}=n,a=this.createViewTransition?.(this.environmentInjector,i.root,s.root);return a?O(a).pipe(C(()=>n)):p(n)}),C(i=>{let s=Ca(t.routeReuseStrategy,i.targetSnapshot,i.currentRouterState);return this.currentTransition=n=W(h({},i),{targetRouterState:s}),this.currentNavigation.update(a=>(a.targetRouterState=s,a)),n}),A(()=>{this.events.next(new Ae)}),Ta(this.rootContexts,t.routeReuseStrategy,i=>this.events.next(i),this.inputBindingEnabled),Wt(1),zn(new Qr(i=>{let s=n.abortController.signal,a=()=>i.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(gt(()=>!r&&!n.targetRouterState),A(()=>{this.cancelNavigationTransition(n,n.abortController.signal.reason+"",L.Aborted)}))),A({next:i=>{r=!0,this.lastSuccessfulNavigation=yt(this.currentNavigation),this.events.next(new H(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects))),this.titleStrategy?.updateTitle(i.targetRouterState.snapshot),i.resolve(!0)},complete:()=>{r=!0}}),zn(this.transitionAbortWithErrorSubject.pipe(A(i=>{throw i}))),$e(()=>{r||this.cancelNavigationTransition(n,"",L.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),At(i=>{if(this.destroyed)return n.resolve(!1),ft;if(r=!0,zi(i))this.events.next(new ct(n.id,this.urlSerializer.serialize(n.extractedUrl),i.message,i.cancellationCode)),Ia(i)?this.events.next(new ae(i.url,i.navigationBehaviorOptions)):n.resolve(!1);else{let s=new ie(n.id,this.urlSerializer.serialize(n.extractedUrl),i,n.targetSnapshot??void 0);try{let a=Z(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof le){let{message:l,cancellationCode:c}=Tn(this.urlSerializer,a);this.events.next(new ct(n.id,this.urlSerializer.serialize(n.extractedUrl),l,c)),this.events.next(new ae(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),i}catch(a){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(a)}}return ft}))}))}cancelNavigationTransition(t,n,r){let i=new ct(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=yt(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return t.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function ml(e){return e!==ne}var Ki=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>u(bl),providedIn:"root"})}return e})(),Dn=class{shouldDetach(o){return!1}store(o,t){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,t){return o.routeConfig===t.routeConfig}},bl=(()=>{class e extends Dn{static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Xi=(()=>{class e{urlSerializer=u($t);options=u(Tt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Yt);urlHandlingStrategy=u(_n);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ut;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:r}){let i=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,s=r??i;return s instanceof ut?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:r}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=t):this.rawUrlTree=r}routerState=Pi(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>u(vl),providedIn:"root"})}return e})(),vl=(()=>{class e extends Xi{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof It?this.updateStateMemento():t instanceof dt?this.commitTransition(n):t instanceof De?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Ae?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof ct&&t.code!==L.SupersededByNewNavigation&&t.code!==L.Redirect?this.restoreHistory(n):t instanceof ie?this.restoreHistory(n,!0):t instanceof H&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:r}){let{replaceUrl:i,state:s}=n;if(this.location.isCurrentPathEqualTo(t)||i){let a=this.browserPageId,l=h(h({},s),this.generateNgRouterState(r,a));this.location.replaceState(t,"",l)}else{let a=h(h({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,i=this.currentPageId-r;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===t.finalUrl&&i===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function kn(e,o){e.events.pipe(gt(t=>t instanceof H||t instanceof ct||t instanceof ie||t instanceof dt),C(t=>t instanceof H||t instanceof dt?0:(t instanceof ct?t.code===L.Redirect||t.code===L.SupersededByNewNavigation:!1)?2:1),gt(t=>t!==2),Wt(1)).subscribe(()=>{o()})}var yl={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Sl={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},it=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(wo);stateManager=u(Xi);options=u(Tt,{optional:!0})||{};pendingTasks=u(ao);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(On);urlSerializer=u($t);location=u(Yt);urlHandlingStrategy=u(_n);injector=u(_t);_events=new pt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(Ki);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Vt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Le,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Gr;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,i=yt(this.navigationTransitions.currentNavigation);if(r!==null&&i!==null){if(this.stateManager.handleRouterEvent(n,i),n instanceof ct&&n.code!==L.Redirect&&n.code!==L.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof H)this.navigated=!0;else if(n instanceof ae){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=h({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ml(r.source)},s);this.scheduleNavigation(a,ne,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}va(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ne,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,r)=>{this.navigateToSyncWithBrowser(t,r,n)})}navigateToSyncWithBrowser(t,n,r){let i={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let l=h({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,s,i).catch(l=>{this.disposed||this.injector.get(qe)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return yt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Lr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=h(h({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=xi(m)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),f=this.currentUrlTree.root}return _i(f,t,d,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=Et(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(i,ne,null,n)}navigate(t,n={skipLocationChange:!1}){return wl(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=h({},yl):n===!1?r=h({},Sl):r=n,Et(t))return di(this.currentUrlTree,t,r);let i=this.parseUrl(t);return di(this.currentUrlTree,i,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,i])=>(i!=null&&(n[r]=i),n),{})}scheduleNavigation(t,n,r,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,m)=>{a=f,l=m});let d=this.pendingTasks.add();return kn(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(f=>Promise.reject(f))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function wl(e){for(let o=0;o<e.length;o++)if(e[o]==null)throw new T(4008,!1)}var Pn=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=We(null);get href(){return yt(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new pt;applicationErrorHandler=u(qe);options=u(Tt,{optional:!0});constructor(t,n,r,i,s,a){this.router=t,this.route=n,this.tabIndexAttribute=r,this.renderer=i,this.el=s,this.locationStrategy=a,this.reactiveHref.set(u(new Oo("href"),{optional:!0}));let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let t=this.preserveFragment,n=r=>r==="merge"||r==="preserve";t||=n(this.queryParamsHandling),t||=!this.queryParamsHandling&&!n(this.options?.defaultQueryParamsHandling),t&&(this.subscription=this.router.events.subscribe(r=>{r instanceof H&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Et(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,n,r,i,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||n||r||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.reactiveHref.set(t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null)}applyAttributeValue(t,n){let r=this.renderer,i=this.el.nativeElement;n!==null?r.setAttribute(i,t,n):r.removeAttribute(i,t)}get urlTree(){return this.routerLinkInput===null?null:Et(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||e)(J(it),J(ht),lo("tabindex"),J(qn),J(fe),J(be))};static \u0275dir=j({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,r){n&1&&Ye("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&st("href",r.reactiveHref(),po)("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",R],skipLocationChange:[2,"skipLocationChange","skipLocationChange",R],replaceUrl:[2,"replaceUrl","replaceUrl",R],routerLink:"routerLink"},features:[Gt]})}return e})(),Rl=(()=>{class e{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new et;constructor(t,n,r,i,s){this.router=t,this.element=n,this.renderer=r,this.cdr=i,this.link=s,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof H&&this.update()})}ngAfterContentInit(){p(this.links.changes,p(null)).pipe(pe()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=O(t).pipe(pe()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(t){let n=Array.isArray(t)?t:t.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(n=>{t?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let n=El(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let i=r.urlTree;return i?t.isActive(i,n):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(n){return new(n||e)(J(it),J(fe),J(qn),J(tn),J(Pn,8))};static \u0275dir=j({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,i){if(n&1&&Nt(i,Pn,5),n&2){let s;Lt(s=Ut())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Gt]})}return e})();function El(e){return!!e.paths}var Fe=class{};var Ji=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,n,r,i){this.router=t,this.injector=n,this.preloadingStrategy=r,this.loader=i}setUpPreloading(){this.subscription=this.router.events.pipe(gt(t=>t instanceof H),xt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,n){let r=[];for(let i of n){i.providers&&!i._injector&&(i._injector=Ge(i.providers,t,`Route: ${i.path}`));let s=i._injector??t,a=i._loadedInjector??s;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&r.push(this.preloadConfig(s,i)),(i.children||i._loadedRoutes)&&r.push(this.processRoutes(a,i.children??i._loadedRoutes))}return O(r).pipe(pe())}preloadConfig(t,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(t,n):r=p(null);let i=r.pipe(U(s=>s===null?p(void 0):(n._loadedRoutes=s.routes,n._loadedInjector=s.injector,this.processRoutes(s.injector??t,s.routes))));if(n.loadComponent&&!n._loadedComponent){let s=this.loader.loadComponent(t,n);return O([i,s]).pipe(pe())}else return i})}static \u0275fac=function(n){return new(n||e)(S(it),S(_t),S(Fe),S(xn))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ts=new D(""),Il=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ne;restoredId=0;store={};constructor(t,n,r,i,s={}){this.urlSerializer=t,this.transitions=n,this.viewportScroller=r,this.zone=i,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof It?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof H?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof dt&&t.code===oe.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof se&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,n){this.zone.runOutsideAngular(()=>Wr(this,null,function*(){yield new Promise(r=>{setTimeout(r),typeof requestAnimationFrame<"u"&&requestAnimationFrame(r)}),this.zone.run(()=>{this.transitions.events.next(new se(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){go()};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function Tl(e,...o){return ro([{provide:Vt,multi:!0,useValue:e},[],{provide:ht,useFactory:es,deps:[it]},{provide:Gn,multi:!0,useFactory:ns},o.map(t=>t.\u0275providers)])}function es(e){return e.routerState.root}function je(e,o){return{\u0275kind:e,\u0275providers:o}}function ns(){let e=u(Ve);return o=>{let t=e.get(Ro);if(o!==t.components[0])return;let n=e.get(it),r=e.get(rs);e.get($r)===1&&n.initialNavigation(),e.get(ss,null,{optional:!0})?.setUpPreloading(),e.get(ts,null,{optional:!0})?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var rs=new D("",{factory:()=>new pt}),$r=new D("",{providedIn:"root",factory:()=>1});function os(){let e=[{provide:ho,useValue:!0},{provide:$r,useValue:0},Wn(()=>{let o=u(Ve);return o.get(Fo,Promise.resolve()).then(()=>new Promise(n=>{let r=o.get(it),i=o.get(rs);kn(r,()=>{n(!0)}),o.get(On).afterPreactivation=()=>(n(!0),i.closed?p(void 0):i),r.initialNavigation()}))})];return je(2,e)}function is(){let e=[Wn(()=>{u(it).setUpLocationChangeListener()}),{provide:$r,useValue:2}];return je(3,e)}var ss=new D("");function as(e){return je(0,[{provide:ss,useExisting:Ji},{provide:Fe,useExisting:e}])}function ls(){return je(8,[Pr,{provide:Le,useExisting:Pr}])}function cs(e){bo("NgRouterViewTransitions");let o=[{provide:Fr,useValue:Yi},{provide:jr,useValue:h({skipNextTransition:!!e?.skipInitialTransition},e)}];return je(9,o)}var us=[Yt,{provide:$t,useClass:Rt},it,Ht,{provide:ht,useFactory:es,deps:[it]},xn,[]],Ml=(()=>{class e{constructor(){}static forRoot(t,n){return{ngModule:e,providers:[us,[],{provide:Vt,multi:!0,useValue:t},[],n?.errorHandler?{provide:zr,useValue:n.errorHandler}:[],{provide:Tt,useValue:n||{}},n?.useHash?Al():xl(),Dl(),n?.preloadingStrategy?as(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?_l(n):[],n?.bindToComponentInputs?ls().\u0275providers:[],n?.enableViewTransitions?cs().\u0275providers:[],Ol()]}}static forChild(t){return{ngModule:e,providers:[{provide:Vt,multi:!0,useValue:t}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=tt({type:e});static \u0275inj=X({})}return e})();function Dl(){return{provide:ts,useFactory:()=>{let e=u(Go),o=u(vt),t=u(Tt),n=u(On),r=u($t);return t.scrollOffset&&e.setOffset(t.scrollOffset),new Il(r,n,e,o,t)}}}function Al(){return{provide:be,useClass:zo}}function xl(){return{provide:be,useClass:jo}}function _l(e){return[e.initialNavigation==="disabled"?is().\u0275providers:[],e.initialNavigation==="enabledBlocking"?os().\u0275providers:[]]}var Br=new D("");function Ol(){return[{provide:Br,useFactory:ns},{provide:Gn,multi:!0,useExisting:Br}]}var Hr=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let r=n.trim().split(" ");for(let i=0;i<r.length;i++)t.classList.add(r[i])}else{let r=n.split(" ");for(let i=0;i<r.length;i++)t.className+=" "+r[i]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,r=0;for(var i=0;i<n.length;i++){if(n[i]==t)return r;n[i].nodeType==1&&r++}return-1}static indexWithinGroup(t,n){let r=t.parentNode?t.parentNode.childNodes:[],i=0;for(var s=0;s<r.length;s++){if(r[s]==t)return i;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&i++}return-1}static appendOverlay(t,n,r="self"){r!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,r="self",i=!0){t&&n&&(i&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),r==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,r=!0){let i=q=>{if(q)return getComputedStyle(q).getPropertyValue("position")==="relative"?q:i(q.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),f=this.getViewport(),v=i(t)?.getBoundingClientRect()||{top:-1*c,left:-1*d},y,I,V="top";l.top+a+s.height>f.height?(y=l.top-v.top-s.height,V="bottom",l.top+y<0&&(y=-1*l.top)):(y=a+l.top-v.top,V="top");let qt=l.left+s.width-f.width,Nn=l.left-v.left;if(s.width>f.width?I=(l.left-v.left)*-1:qt>0?I=Nn-qt:I=l.left-v.left,t.style.top=y+"px",t.style.left=I+"px",t.style.transformOrigin=V,r){let q=Qo(/-anchor-gutter$/)?.value;t.style.marginTop=V==="bottom"?`calc(${q??"2px"} * -1)`:q??""}}static absolutePosition(t,n,r=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,a=i.width,l=n.offsetHeight,c=n.offsetWidth,d=n.getBoundingClientRect(),f=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),v=this.getViewport(),y,I;d.top+l+s>v.height?(y=d.top+f-s,t.style.transformOrigin="bottom",y<0&&(y=f)):(y=l+d.top+f,t.style.transformOrigin="top"),d.left+a>v.width?I=Math.max(0,d.left+m+c-a):I=d.left+m,t.style.top=y+"px",t.style.left=I+"px",r&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let r=this.getParents(t),i=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let a of r){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let f=this.findSingle(a,d);f&&s(f)&&n.push(f)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let r=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=r?parseFloat(r):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,f=t.scrollTop,m=t.clientHeight,v=this.getOuterHeight(n);d<0?t.scrollTop=f+d:d+v>m&&(t.scrollTop=f+d-m+v)}static fadeIn(t,n){t.style.opacity=0;let r=+new Date,i=0,s=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,t.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var r=1,i=50,s=n,a=i/s;let l=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(l)),t.style.opacity=r},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var r=Element.prototype,i=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(t,n)}static getOuterWidth(t,n){let r=t.offsetWidth;if(n){let i=getComputedStyle(t);r+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return r}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,r=getComputedStyle(t);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(t){let n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,r=getComputedStyle(t);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(t,n){let r=t.offsetHeight;if(n){let i=getComputedStyle(t);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}static getHeight(t){let n=t.offsetHeight,r=getComputedStyle(t);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let t=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],s=t.innerWidth||r.clientWidth||i.clientWidth,a=t.innerHeight||r.clientHeight||i.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let r=t.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var r=t.indexOf("Trident/");if(r>0){var i=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,r){t[n].apply(t,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let r=this.find(t,this.getFocusableSelectorString(n)),i=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(t,n=""){let r=this.findSingle(t,this.getFocusableSelectorString(n));if(r){let i=getComputedStyle(r);if(this.isVisible(r)&&i.display!="none"&&i.visibility!="hidden")return r}return null}static getFirstFocusableElement(t,n=""){let r=this.getFocusableElements(t,n);return r.length>0?r[0]:null}static getLastFocusableElement(t,n){let r=this.getFocusableElements(t,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(t,n=!1){let r=e.getFocusableElements(t),i=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?i=r.length-1:i=s-1:s!=-1&&s!==r.length-1&&(i=s+1)}return r[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof t;if(r==="string")return document.querySelector(t);if(r==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let r=t.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...r){if(t){let i=document.createElement(t);return this.setAttributes(i,n),i.append(...r),i}}static setAttribute(t,n="",r){this.isElement(t)&&r!==null&&r!==void 0&&t.setAttribute(n,r)}static setAttributes(t,n={}){if(this.isElement(t)){let r=(i,s)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let f=Array.isArray(c)?r(i,c):Object.entries(c).map(([m,v])=>i==="style"&&(v||v===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${v}`:v?m:void 0);l=f.length?l.concat(f.filter(m=>!!m)):l}}return l},a)};Object.entries(n).forEach(([i,s])=>{if(s!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):i==="pBind"?this.setAttributes(t,s):(s=i==="class"?[...new Set(r("class",s))].join(" ").trim():i==="style"?r("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=s),t.setAttribute(i,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var ds=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=Hr.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var hs=(()=>{class e extends N{autofocus=!1;focused=!1;platformId=u(Ot);document=u(k);host=u(fe);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){en(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Hr.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275dir=j({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[x]})}return e})();var ps=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var kl=`
    ${ps}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Pl={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":ti(e.value())&&String(e.value()).length===1,"p-badge-dot":ve(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},fs=(()=>{class e extends at{name="badge";theme=kl;classes=Pl;static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Vr=(()=>{class e extends N{styleClass=K();badgeSize=K();size=K();severity=K();value=K();badgeDisabled=K(!1,{transform:R});_componentStyle=u(fs);static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275cmp=Q({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,r){n&2&&(Y(r.cn(r.cx("root"),r.styleClass())),Ao("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[z([fs]),x],decls:1,vars:1,template:function(n,r){n&1&&Xe(0),n&2&&Je(r.value())},dependencies:[St,wt],encapsulation:2,changeDetection:0})}return e})(),gs=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=tt({type:e});static \u0275inj=X({imports:[Vr,wt,wt]})}return e})();var ms=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Ll=["*"],Ul={root:"p-fluid"},bs=(()=>{class e extends at{name="fluid";classes=Ul;theme=ms;static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var qr=(()=>{class e extends N{_componentStyle=u(bs);static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275cmp=Q({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,r){n&2&&Y(r.cx("root"))},features:[z([bs]),x],ngContentSelectors:Ll,decls:1,vars:0,template:function(n,r){n&1&&(Zt(),Qt(0))},dependencies:[St],encapsulation:2,changeDetection:0})}return e})();var Fl=["*"],jl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,vs=(()=>{class e extends at{name="baseicon";css=jl;static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ys=(()=>{class e extends N{spin=!1;_componentStyle=u(vs);getClassNames(){return Zo("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275cmp=Q({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,r){n&2&&Y(r.getClassNames())},inputs:{spin:[2,"spin","spin",R]},features:[z([vs]),x],ngContentSelectors:Fl,decls:1,vars:0,template:function(n,r){n&1&&(Zt(),Qt(0))},encapsulation:2,changeDetection:0})}return e})();var zl=["data-p-icon","spinner"],Ss=(()=>{class e extends ys{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+ir()+")"}static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275cmp=Q({type:e,selectors:[["","data-p-icon","spinner"]],features:[x],attrs:zl,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(He(),Yn(0,"g"),Xn(1,"path",0),Kn(),Yn(2,"defs")(3,"clipPath",1),Xn(4,"rect",2),Kn()()),n&2&&(st("clip-path",r.pathId),P(3),Mo("id",r.pathId))},encapsulation:2})}return e})();var ws=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Bl=`
    ${ws}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,$l={root:"p-ink"},Cs=(()=>{class e extends at{name="ripple";theme=Bl;classes=$l;static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Rs=(()=>{class e extends N{zone=u(vt);_componentStyle=u(Cs);animationListener;mouseDownListener;timeout;constructor(){super(),_o(()=>{en(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Kt(n,"p-ink-active"),!rr(n)&&!or(n)){let a=Math.max(Yo(this.el.nativeElement),Xo(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let r=Ko(this.el.nativeElement),i=t.pageX-r.left+this.document.body.scrollTop-or(n)/2,s=t.pageY-r.top+this.document.body.scrollLeft-rr(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",i+"px"),Ft(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Kt(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Kt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Kt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Jo(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=j({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[z([Cs]),x]})}return e})();var Es=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Hl=["content"],Vl=["loadingicon"],ql=["icon"],Wl=["*"],Ms=e=>({class:e});function Gl(e,o){e&1&&To(0)}function Zl(e,o){if(e&1&&Pt(0,"span"),e&2){let t=nt(3);Y(t.cx("loadingIcon")),st("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ql(e,o){if(e&1&&(He(),Pt(0,"svg",7)),e&2){let t=nt(3);Y(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),_("spin",!0),st("aria-hidden",!0)("data-pc-section","loadingicon")}}function Yl(e,o){if(e&1&&(Ze(0),kt(1,Zl,1,4,"span",3)(2,Ql,1,5,"svg",6),Qe()),e&2){let t=nt(2);P(),_("ngIf",t.loadingIcon),P(),_("ngIf",!t.loadingIcon)}}function Kl(e,o){}function Xl(e,o){if(e&1&&kt(0,Kl,0,0,"ng-template",8),e&2){let t=nt(2);_("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Jl(e,o){if(e&1&&(Ze(0),kt(1,Yl,3,2,"ng-container",2)(2,Xl,1,1,null,5),Qe()),e&2){let t=nt();P(),_("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),P(),_("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",tr(3,Ms,t.cx("loadingIcon")))}}function tc(e,o){if(e&1&&Pt(0,"span"),e&2){let t=nt(2);Y(t.cx("icon")),st("data-pc-section","icon")}}function ec(e,o){}function nc(e,o){if(e&1&&kt(0,ec,0,0,"ng-template",8),e&2){let t=nt(2);_("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function rc(e,o){if(e&1&&(Ze(0),kt(1,tc,1,3,"span",3)(2,nc,1,1,null,5),Qe()),e&2){let t=nt();P(),_("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),P(),_("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",tr(3,Ms,t.cx("icon")))}}function oc(e,o){if(e&1&&(Zn(0,"span"),Xe(1),Qn()),e&2){let t=nt();Y(t.cx("label")),st("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),P(),Je(t.label)}}function ic(e,o){if(e&1&&Pt(0,"p-badge",9),e&2){let t=nt();_("value",t.badge)("severity",t.badgeSeverity)}}var sc={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,o])=>!!o).reduce((o,[t])=>o+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Dt=(()=>{class e extends at{name="button";theme=Es;classes=sc;static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Mt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Is=(()=>{class e extends N{_componentStyle=u(Dt);static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275dir=j({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ke("p-button-label",!0)},features:[z([Dt]),x]})}return e})(),Ts=(()=>{class e extends N{_componentStyle=u(Dt);static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275dir=j({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ke("p-button-icon",!0)},features:[z([Dt]),x]})}return e})(),ch=(()=>{class e extends N{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=nr(Ts);labelSignal=nr(Is);isIconOnly=er(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=K(void 0,{transform:R});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Mt);pcFluid=u(qr,{optional:!0,host:!0,skipSelf:!0});isTextButton=er(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=u(Dt);ngAfterViewInit(){super.ngAfterViewInit(),Ft(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let t=[Mt.button,Mt.component];return this.icon&&!this.label&&ve(this.htmlElement.textContent)&&t.push(Mt.iconOnly),this.loading&&(t.push(Mt.disabled,Mt.loading),!this.icon&&this.label&&t.push(Mt.labelOnly),this.icon&&!this.label&&!ve(this.htmlElement.textContent)&&t.push(Mt.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(r=>t.some(i=>r===`p-button-${i}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Xt(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Xt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&Ft(n,r);let i=this.getIconClass();i&&Ft(n,i),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=Xt(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=Xt(this.htmlElement,".p-button-icon"),n=Xt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275dir=j({type:e,selectors:[["","pButton",""]],contentQueries:function(n,r,i){n&1&&(Jn(i,r.iconSignal,Ts,5),Jn(i,r.labelSignal,Is,5)),n&2&&Do(2)},hostVars:4,hostBindings:function(n,r){n&2&&Ke("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],outlined:[2,"outlined","outlined",R],size:"size",plain:[2,"plain","plain",R],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[z([Dt]),x]})}return e})(),ac=(()=>{class e extends N{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=K(void 0,{transform:R});onClick=new et;onFocus=new et;onBlur=new et;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=u(qr,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=u(Dt);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=E(e)))(r||e)}})();static \u0275cmp=Q({type:e,selectors:[["p-button"]],contentQueries:function(n,r,i){if(n&1&&(Nt(i,Hl,5),Nt(i,Vl,5),Nt(i,ql,5),Nt(i,ei,4)),n&2){let s;Lt(s=Ut())&&(r.contentTemplate=s.first),Lt(s=Ut())&&(r.loadingIconTemplate=s.first),Lt(s=Ut())&&(r.iconTemplate=s.first),Lt(s=Ut())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",R],loading:[2,"loading","loading",R],loadingIcon:"loadingIcon",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],plain:[2,"plain","plain",R],severity:"severity",outlined:[2,"outlined","outlined",R],link:[2,"link","link",R],tabindex:[2,"tabindex","tabindex",Po],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",R],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[z([Dt]),x],ngContentSelectors:Wl,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,r){n&1&&(Zt(),Zn(0,"button",0),Ye("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),Qt(1),kt(2,Gl,1,0,"ng-container",1)(3,Jl,3,5,"ng-container",2)(4,rc,3,5,"ng-container",2)(5,oc,2,5,"span",3)(6,ic,1,2,"p-badge",4),Qn()),n&2&&(Y(r.cn(r.cx("root"),r.styleClass,r.buttonProps==null?null:r.buttonProps.styleClass)),_("ngStyle",r.style||(r.buttonProps==null?null:r.buttonProps.style))("disabled",r.disabled||r.loading||(r.buttonProps==null?null:r.buttonProps.disabled))("pAutoFocus",r.autofocus||(r.buttonProps==null?null:r.buttonProps.autofocus)),st("type",r.type||(r.buttonProps==null?null:r.buttonProps.type))("aria-label",r.ariaLabel||(r.buttonProps==null?null:r.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex||(r.buttonProps==null?null:r.buttonProps.tabindex)),P(2),_("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),P(),_("ngIf",r.loading),P(),_("ngIf",!r.loading),P(),_("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),P(),_("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[St,Bo,Ho,$o,Rs,hs,Ss,gs,Vr,wt],encapsulation:2,changeDetection:0})}return e})(),uh=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=tt({type:e});static \u0275inj=X({imports:[St,ac,wt,wt]})}return e})();function lc(){let e=[],o=(i,s)=>{let a=e.length>0?e[e.length-1]:{key:i,value:s},l=a.value+(a.key===i?0:s)+2;return e.push({key:i,value:l}),l},t=i=>{e=e.filter(s=>s.value!==i)},n=()=>e.length>0?e[e.length-1].value:0,r=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:r,set:(i,s,a)=>{s&&(s.style.zIndex=String(o(i,a)))},clear:i=>{i&&(t(r(i)),i.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:t}}var hh=lc();export{pr as a,zs as b,kr as c,it as d,Pn as e,Rl as f,Tl as g,Ml as h,qr as i,Hr as j,ds as k,hs as l,ys as m,hh as n,Vr as o,gs as p,Rs as q,ch as r,uh as s};
