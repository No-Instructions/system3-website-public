import{n as Mt,b as lt}from"./index.9B820uFl.js";const _=Math.min,O=Math.max,nt=Math.round,et=Math.floor,F=t=>({x:t,y:t}),$t={left:"right",right:"left",bottom:"top",top:"bottom"},kt={start:"end",end:"start"};function ft(t,e,o){return O(t,_(e,o))}function G(t,e){return typeof t=="function"?t(e):t}function j(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function mt(t){return t==="y"?"height":"width"}function Y(t){return["top","bottom"].includes(j(t))?"y":"x"}function gt(t){return Rt(Y(t))}function Vt(t,e,o){o===void 0&&(o=!1);const n=J(t),i=gt(t),s=mt(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function Bt(t){const e=ot(t);return[ut(t),e,ut(e)]}function ut(t){return t.replace(/start|end/g,e=>kt[e])}function Ht(t,e,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?s:r;default:return[]}}function Nt(t,e,o,n){const i=J(t);let s=Ht(j(t),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ut)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>$t[e])}function zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ct(t){return typeof t!="number"?zt(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function bt(t,e,o){let{reference:n,floating:i}=t;const s=Y(e),r=gt(e),c=mt(r),l=j(e),a=s==="y",f=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,g=n[c]/2-i[c]/2;let u;switch(l){case"top":u={x:f,y:n.y-i.height};break;case"bottom":u={x:f,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:d};break;case"left":u={x:n.x-i.width,y:d};break;default:u={x:n.x,y:n.y}}switch(J(e)){case"start":u[r]-=g*(o&&a?-1:1);break;case"end":u[r]+=g*(o&&a?-1:1);break}return u}const _t=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:d}=bt(a,n,l),g=n,u={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y,data:v,reset:b}=await p({x:f,y:d,initialPlacement:n,placement:g,strategy:i,middlewareData:u,rects:a,platform:r,elements:{reference:t,floating:e}});f=x??f,d=y??d,u={...u,[w]:{...u[w],...v}},b&&m<=50&&(m++,typeof b=="object"&&(b.placement&&(g=b.placement),b.rects&&(a=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:f,y:d}=bt(a,g,l)),h=-1)}return{x:f,y:d,placement:g,strategy:i,middlewareData:u}};async function ht(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:g=!1,padding:u=0}=G(e,t),m=Ct(u),w=c[g?d==="floating"?"reference":"floating":d],p=it(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(w)))==null||o?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:f,strategy:l})),x=d==="floating"?{x:n,y:i,width:r.floating.width,height:r.floating.height}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),v=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},b=it(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(p.top-b.top+m.top)/v.y,bottom:(b.bottom-p.bottom+m.bottom)/v.y,left:(p.left-b.left+m.left)/v.x,right:(b.right-p.right+m.right)/v.x}}const jt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:f=0}=G(t,e)||{};if(a==null)return{};const d=Ct(f),g={x:o,y:n},u=gt(i),m=mt(u),h=await r.getDimensions(a),w=u==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",v=s.reference[m]+s.reference[u]-g[u]-s.floating[m],b=g[u]-s.reference[u],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let P=C?C[y]:0;(!P||!await(r.isElement==null?void 0:r.isElement(C)))&&(P=c.floating[y]||s.floating[m]);const k=v/2-b/2,L=P/2-h[m]/2-1,T=_(d[p],L),B=_(d[x],L),S=T,H=P-h[m]-B,A=P/2-h[m]/2+k,U=ft(S,A,H),V=!l.arrow&&J(i)!=null&&A!==U&&s.reference[m]/2-(A<S?T:B)-h[m]/2<0,W=V?A<S?A-S:A-H:0;return{[u]:g[u]+W,data:{[u]:U,centerOffset:A-U-W,...V&&{alignmentOffset:W}},reset:V}}}),It=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=G(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const p=j(i),x=Y(c),y=j(c)===c,v=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=g||(y||!h?[ot(c)]:Bt(c)),C=m!=="none";!g&&C&&b.push(...Nt(c,h,m,v));const P=[c,...b],k=await ht(e,w),L=[];let T=((n=s.flip)==null?void 0:n.overflows)||[];if(f&&L.push(k[p]),d){const A=Vt(i,r,v);L.push(k[A[0]],k[A[1]])}if(T=[...T,{placement:i,overflows:L}],!L.every(A=>A<=0)){var B,S;const A=(((B=s.flip)==null?void 0:B.index)||0)+1,U=P[A];if(U)return{data:{index:A,overflows:T},reset:{placement:U}};let V=(S=T.filter(W=>W.overflows[0]<=0).sort((W,N)=>W.overflows[1]-N.overflows[1])[0])==null?void 0:S.placement;if(!V)switch(u){case"bestFit":{var H;const W=(H=T.filter(N=>{if(C){const z=Y(N.placement);return z===x||z==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(z=>z>0).reduce((z,Ft)=>z+Ft,0)]).sort((N,z)=>N[1]-z[1])[0])==null?void 0:H[0];W&&(V=W);break}case"initialPlacement":V=c;break}if(i!==V)return{reset:{placement:V}}}return{}}}};async function Yt(t,e){const{placement:o,platform:n,elements:i}=t,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=j(o),c=J(o),l=Y(o)==="y",a=["left","top"].includes(r)?-1:1,f=s&&l?-1:1,d=G(e,t);let{mainAxis:g,crossAxis:u,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof m=="number"&&(u=c==="end"?m*-1:m),l?{x:u*f,y:g*a}:{x:g*a,y:u*f}}const qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await Yt(e,t);return r===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},Ut=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...l}=G(t,e),a={x:o,y:n},f=await ht(e,l),d=Y(j(i)),g=Rt(d);let u=a[g],m=a[d];if(s){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=u+f[w],y=u-f[p];u=ft(x,u,y)}if(r){const w=d==="y"?"top":"left",p=d==="y"?"bottom":"right",x=m+f[w],y=m-f[p];m=ft(x,m,y)}const h=c.fn({...e,[g]:u,[d]:m});return{...h,data:{x:h.x-o,y:h.y-n,enabled:{[g]:s,[d]:r}}}}}},Xt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,n;const{placement:i,rects:s,platform:r,elements:c}=e,{apply:l=()=>{},...a}=G(t,e),f=await ht(e,a),d=j(i),g=J(i),u=Y(i)==="y",{width:m,height:h}=s.floating;let w,p;d==="top"||d==="bottom"?(w=d,p=g===(await(r.isRTL==null?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(p=d,w=g==="end"?"top":"bottom");const x=h-f.top-f.bottom,y=m-f.left-f.right,v=_(h-f[w],x),b=_(m-f[p],y),C=!e.middlewareData.shift;let P=v,k=b;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(k=y),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(P=x),C&&!g){const T=O(f.left,0),B=O(f.right,0),S=O(f.top,0),H=O(f.bottom,0);u?k=m-2*(T!==0||B!==0?T+B:O(f.left,f.right)):P=h-2*(S!==0||H!==0?S+H:O(f.top,f.bottom))}await l({...e,availableWidth:k,availableHeight:P});const L=await r.getDimensions(c.floating);return m!==L.width||h!==L.height?{reset:{rects:!0}}:{}}}};function st(){return typeof window<"u"}function Q(t){return Pt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $(t){var e;return(e=(Pt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pt(t){return st()?t instanceof Node||t instanceof R(t).Node:!1}function E(t){return st()?t instanceof Element||t instanceof R(t).Element:!1}function M(t){return st()?t instanceof HTMLElement||t instanceof R(t).HTMLElement:!1}function vt(t){return!st()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Kt(t){return["table","td","th"].includes(Q(t))}function rt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function pt(t){const e=wt(),o=E(t)?D(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Gt(t){let e=I(t);for(;M(e)&&!K(e);){if(pt(e))return e;if(rt(e))return null;e=I(e)}return null}function wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(Q(t))}function D(t){return R(t).getComputedStyle(t)}function ct(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function I(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||$(t);return vt(e)?e.host:e}function Tt(t){const e=I(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&tt(e)?e:Tt(e)}function Z(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Tt(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=R(i);if(s){const c=dt(r);return e.concat(r,r.visualViewport||[],tt(i)?i:[],c&&o?Z(c):[])}return e.concat(i,Z(i,[],o))}function dt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Et(t){const e=D(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=M(t),s=i?t.offsetWidth:o,r=i?t.offsetHeight:n,c=nt(o)!==s||nt(n)!==r;return c&&(o=s,n=r),{width:o,height:n,$:c}}function xt(t){return E(t)?t:t.contextElement}function X(t){const e=xt(t);if(!M(e))return F(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:s}=Et(e);let r=(s?nt(o.width):o.width)/n,c=(s?nt(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const Jt=F(0);function Dt(t){const e=R(t);return!wt()||!e.visualViewport?Jt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Qt(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==R(t)?!1:e}function q(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=xt(t);let r=F(1);e&&(n?E(n)&&(r=X(n)):r=X(t));const c=Qt(s,o,n)?Dt(s):F(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,f=i.width/r.x,d=i.height/r.y;if(s){const g=R(s),u=n&&E(n)?R(n):n;let m=g,h=dt(m);for(;h&&n&&u!==m;){const w=X(h),p=h.getBoundingClientRect(),x=D(h),y=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,v=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,a*=w.y,f*=w.x,d*=w.y,l+=y,a+=v,m=R(h),h=dt(m)}}return it({width:f,height:d,x:l,y:a})}function yt(t,e){const o=ct(t).scrollLeft;return e?e.left+o:q($(t)).left+o}function Lt(t,e,o){o===void 0&&(o=!1);const n=t.getBoundingClientRect(),i=n.left+e.scrollLeft-(o?0:yt(t,n)),s=n.top+e.scrollTop;return{x:i,y:s}}function Zt(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const s=i==="fixed",r=$(n),c=e?rt(e.floating):!1;if(n===r||c&&s)return o;let l={scrollLeft:0,scrollTop:0},a=F(1);const f=F(0),d=M(n);if((d||!d&&!s)&&((Q(n)!=="body"||tt(r))&&(l=ct(n)),M(n))){const u=q(n);a=X(n),f.x=u.x+n.clientLeft,f.y=u.y+n.clientTop}const g=r&&!d&&!s?Lt(r,l,!0):F(0);return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+f.x+g.x,y:o.y*a.y-l.scrollTop*a.y+f.y+g.y}}function te(t){return Array.from(t.getClientRects())}function ee(t){const e=$(t),o=ct(t),n=t.ownerDocument.body,i=O(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=O(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+yt(t);const c=-o.scrollTop;return D(n).direction==="rtl"&&(r+=O(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:c}}function ne(t,e){const o=R(t),n=$(t),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=wt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function oe(t,e){const o=q(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,s=M(t)?X(t):F(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=n*s.y;return{width:r,height:c,x:l,y:a}}function At(t,e,o){let n;if(e==="viewport")n=ne(t,o);else if(e==="document")n=ee($(t));else if(E(e))n=oe(e,o);else{const i=Dt(t);n={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return it(n)}function St(t,e){const o=I(t);return o===e||!E(o)||K(o)?!1:D(o).position==="fixed"||St(o,e)}function ie(t,e){const o=e.get(t);if(o)return o;let n=Z(t,[],!1).filter(c=>E(c)&&Q(c)!=="body"),i=null;const s=D(t).position==="fixed";let r=s?I(t):t;for(;E(r)&&!K(r);){const c=D(r),l=pt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!l&&St(t,r))?n=n.filter(f=>f!==r):i=c,r=I(r)}return e.set(t,n),n}function se(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?rt(e)?[]:ie(e,this._c):[].concat(o),n],c=r[0],l=r.reduce((a,f)=>{const d=At(e,f,i);return a.top=O(d.top,a.top),a.right=_(d.right,a.right),a.bottom=_(d.bottom,a.bottom),a.left=O(d.left,a.left),a},At(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function re(t){const{width:e,height:o}=Et(t);return{width:e,height:o}}function ce(t,e,o){const n=M(e),i=$(e),s=o==="fixed",r=q(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=F(0);if(n||!n&&!s)if((Q(e)!=="body"||tt(i))&&(c=ct(e)),n){const g=q(e,!0,s,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else i&&(l.x=yt(i));const a=i&&!n&&!s?Lt(i,c):F(0),f=r.left+c.scrollLeft-l.x-a.x,d=r.top+c.scrollTop-l.y-a.y;return{x:f,y:d,width:r.width,height:r.height}}function at(t){return D(t).position==="static"}function Ot(t,e){if(!M(t)||D(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return $(t)===o&&(o=o.ownerDocument.body),o}function Wt(t,e){const o=R(t);if(rt(t))return o;if(!M(t)){let i=I(t);for(;i&&!K(i);){if(E(i)&&!at(i))return i;i=I(i)}return o}let n=Ot(t,e);for(;n&&Kt(n)&&at(n);)n=Ot(n,e);return n&&K(n)&&at(n)&&!pt(n)?o:n||Gt(t)||o}const le=async function(t){const e=this.getOffsetParent||Wt,o=this.getDimensions,n=await o(t.floating);return{reference:ce(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ae(t){return D(t).direction==="rtl"}const fe={convertOffsetParentRelativeRectToViewportRelativeRect:Zt,getDocumentElement:$,getClippingRect:se,getOffsetParent:Wt,getElementRects:le,getClientRects:te,getDimensions:re,getScale:X,isElement:E,isRTL:ae};function ue(t,e){let o=null,n;const i=$(t);function s(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:f,width:d,height:g}=t.getBoundingClientRect();if(c||e(),!d||!g)return;const u=et(f),m=et(i.clientWidth-(a+d)),h=et(i.clientHeight-(f+g)),w=et(a),x={rootMargin:-u+"px "+-m+"px "+-h+"px "+-w+"px",threshold:O(0,_(1,l))||1};let y=!0;function v(b){const C=b[0].intersectionRatio;if(C!==l){if(!y)return r();C?r(!1,C):n=setTimeout(()=>{r(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(v,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(v,x)}o.observe(t)}return r(!0),s}function de(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=xt(t),f=i||s?[...a?Z(a):[],...Z(e)]:[];f.forEach(p=>{i&&p.addEventListener("scroll",o,{passive:!0}),s&&p.addEventListener("resize",o)});const d=a&&c?ue(a,o):null;let g=-1,u=null;r&&(u=new ResizeObserver(p=>{let[x]=p;x&&x.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=u)==null||y.observe(e)})),o()}),a&&!l&&u.observe(a),u.observe(e));let m,h=l?q(t):null;l&&w();function w(){const p=q(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&o(),h=p,m=requestAnimationFrame(w)}return o(),()=>{var p;f.forEach(x=>{i&&x.removeEventListener("scroll",o),s&&x.removeEventListener("resize",o)}),d==null||d(),(p=u)==null||p.disconnect(),u=null,l&&cancelAnimationFrame(m)}}const me=qt,ge=Ut,he=It,pe=Xt,we=jt,xe=(t,e,o)=>{const n=new Map,i={platform:fe,...o},s={...i.platform,_c:n};return _t(t,e,{...i,platform:s})},ye={strategy:"absolute",placement:"top",gutter:5,flip:!0,sameWidth:!1,overflowPadding:8},be={bottom:"rotate(45deg)",left:"rotate(135deg)",top:"rotate(225deg)",right:"rotate(315deg)"};function Ce(t,e,o={}){if(!e||!t||o===null)return{destroy:Mt};const n={...ye,...o},i=e.querySelector("[data-arrow=true]"),s=[];n.flip&&s.push(he({boundary:n.boundary,padding:n.overflowPadding}));const r=lt(i)?i.offsetHeight/2:0;if(n.gutter||n.offset){const l=n.gutter?{mainAxis:n.gutter}:n.offset;(l==null?void 0:l.mainAxis)!=null&&(l.mainAxis+=r),s.push(me(l))}s.push(ge({boundary:n.boundary,crossAxis:n.overlap,padding:n.overflowPadding})),i&&s.push(we({element:i,padding:8})),s.push(pe({padding:n.overflowPadding,apply({rects:l,availableHeight:a,availableWidth:f}){n.sameWidth&&Object.assign(e.style,{width:`${Math.round(l.reference.width)}px`,minWidth:"unset"}),n.fitViewport&&Object.assign(e.style,{maxWidth:`${f}px`,maxHeight:`${a}px`})}}));function c(){if(!t||!e||lt(t)&&!t.ownerDocument.documentElement.contains(t))return;const{placement:l,strategy:a}=n;xe(t,e,{placement:l,middleware:s,strategy:a}).then(f=>{const d=Math.round(f.x),g=Math.round(f.y),[u,m]=ve(f.placement);if(e.setAttribute("data-side",u),e.setAttribute("data-align",m),Object.assign(e.style,{position:n.strategy,top:`${g}px`,left:`${d}px`}),lt(i)&&f.middlewareData.arrow){const{x:h,y:w}=f.middlewareData.arrow,p=f.placement.split("-")[0];i.setAttribute("data-side",p),Object.assign(i.style,{position:"absolute",left:h!=null?`${h}px`:"",top:w!=null?`${w}px`:"",[p]:`calc(100% - ${r}px)`,transform:be[p],backgroundColor:"inherit",zIndex:"inherit"})}return f})}return Object.assign(e.style,{position:n.strategy}),{destroy:de(t,e,c)}}function ve(t){const[e,o="center"]=t.split("-");return[e,o]}function Pe(t){return(e={})=>Ae(t,e)}function Ae(t,e){const n={...{side:"bottom",align:"center",sideOffset:0,alignOffset:0,sameWidth:!1,avoidCollisions:!0,collisionPadding:8,fitViewport:!1,strategy:"absolute",overlap:!1},...e};t.update(i=>({...i,placement:Oe(n.side,n.align),offset:{...i.offset,mainAxis:n.sideOffset,crossAxis:n.alignOffset},gutter:0,sameWidth:n.sameWidth,flip:n.avoidCollisions,overflowPadding:n.collisionPadding,boundary:n.collisionBoundary,fitViewport:n.fitViewport,strategy:n.strategy,overlap:n.overlap}))}function Oe(t,e){return e==="center"?t:`${t}-${e}`}export{Pe as g,Ce as u};