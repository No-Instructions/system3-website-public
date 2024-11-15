import{ad as $,Q as Z,s as p,l as N,u as L,m as P,o as T,z as k,d as C,A,i as E,c as R,e as w,h as W,P as M,D as v,E as j,T as z,n as O,W as x,v as tt,k as et}from"./scheduler.D_DiFEDa.js";import{S as B,i as D,t as g,a as b,g as U,f as q}from"./index.uqldPLAT.js";import{g as G}from"./spread.CgU5AtxT.js";import{t as st,o as lt,l as at,z as nt,d as ot,m as V,x as F}from"./index.9B820uFl.js";import{w as it}from"./index.BUY9SMGD.js";import{c as rt,r as ut,g as ft}from"./updater.Dth1Bj6g.js";const ct={src:"",delayMs:0,onLoadingStatusChange:void 0},dt=l=>{const t={...ct,...l},e=st(lt(t,"loadingStatus","onLoadingStatusChange")),{src:a,delayMs:s}=e,u=t.loadingStatus??it("loading"),o=at(u,t==null?void 0:t.onLoadingStatusChange);nt([a,s],([i,f])=>{if(ot){const _=new Image;_.src=i,_.onload=()=>{if(s!==void 0){const h=window.setTimeout(()=>{o.set("loaded")},f);return()=>window.clearTimeout(h)}else o.set("loaded")},_.onerror=()=>{o.set("error")}}});const r=V("avatar-image",{stores:[a,o],returned:([i,f])=>{const _=F({display:f==="loaded"?"block":"none"});return{src:i,style:_}}}),n=V("avatar-fallback",{stores:[o],returned:([i])=>({style:i==="loaded"?F({display:"none"}):void 0,hidden:i==="loaded"?!0:void 0})});return{elements:{image:r,fallback:n},states:{loadingStatus:o},options:e}};function Q(){return{NAME:"avatar",PARTS:["root","image","fallback"]}}function _t(l){const{NAME:t,PARTS:e}=Q(),a=rt(t,e),s={...dt(ut(l)),getAttrs:a};return $(t,s),{...s,updateOption:ft(s.options)}}function mt(l=""){const{NAME:t}=Q(),e=Z(t);return l?e.options.src.set(l):e.options.src.set(""),e}function gt(){const{NAME:l}=Q();return Z(l)}const bt=l=>({}),H=l=>({attrs:l[2]}),ht=l=>({}),J=l=>({attrs:l[2]});function kt(l){let t,e;const a=l[8].default,s=N(a,l,l[7],H);let u=[l[3],l[2]],o={};for(let r=0;r<u.length;r+=1)o=k(o,u[r]);return{c(){t=W("div"),s&&s.c(),this.h()},l(r){t=R(r,"DIV",{});var n=w(t);s&&s.l(n),n.forEach(C),this.h()},h(){A(t,o)},m(r,n){E(r,t,n),s&&s.m(t,null),l[9](t),e=!0},p(r,n){s&&s.p&&(!e||n&128)&&L(s,a,r,r[7],e?T(a,r[7],n,bt):P(r[7]),H),A(t,o=G(u,[n&8&&r[3],r[2]]))},i(r){e||(b(s,r),e=!0)},o(r){g(s,r),e=!1},d(r){r&&C(t),s&&s.d(r),l[9](null)}}}function Ct(l){let t;const e=l[8].default,a=N(e,l,l[7],J);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,u){a&&a.m(s,u),t=!0},p(s,u){a&&a.p&&(!t||u&128)&&L(a,e,s,s[7],t?T(e,s[7],u,ht):P(s[7]),J)},i(s){t||(b(a,s),t=!0)},o(s){g(a,s),t=!1},d(s){a&&a.d(s)}}}function St(l){let t,e,a,s;const u=[Ct,kt],o=[];function r(n,i){return n[1]?0:1}return t=r(l),e=o[t]=u[t](l),{c(){e.c(),a=M()},l(n){e.l(n),a=M()},m(n,i){o[t].m(n,i),E(n,a,i),s=!0},p(n,[i]){let f=t;t=r(n),t===f?o[t].p(n,i):(U(),g(o[f],1,1,()=>{o[f]=null}),q(),e=o[t],e?e.p(n,i):(e=o[t]=u[t](n),e.c()),b(e,1),e.m(a.parentNode,a))},i(n){s||(b(e),s=!0)},o(n){g(e),s=!1},d(n){n&&C(a),o[t].d(n)}}}function yt(l,t,e){const a=["delayMs","loadingStatus","onLoadingStatusChange","asChild","el"];let s=v(t,a),{$$slots:u={},$$scope:o}=t,{delayMs:r=void 0}=t,{loadingStatus:n=void 0}=t,{onLoadingStatusChange:i=void 0}=t,{asChild:f=!1}=t,{el:_=void 0}=t;const{states:{loadingStatus:h},updateOption:S,getAttrs:y}=_t({src:"",delayMs:r,onLoadingStatusChange:({next:c})=>(e(4,n=c),i==null||i(c),c)}),d=y("root");function I(c){z[c?"unshift":"push"](()=>{_=c,e(0,_)})}return l.$$set=c=>{t=k(k({},t),j(c)),e(3,s=v(t,a)),"delayMs"in c&&e(5,r=c.delayMs),"loadingStatus"in c&&e(4,n=c.loadingStatus),"onLoadingStatusChange"in c&&e(6,i=c.onLoadingStatusChange),"asChild"in c&&e(1,f=c.asChild),"el"in c&&e(0,_=c.el),"$$scope"in c&&e(7,o=c.$$scope)},l.$$.update=()=>{l.$$.dirty&16&&n!==void 0&&h.set(n),l.$$.dirty&32&&S("delayMs",r)},[_,f,d,s,n,r,i,o,u,I]}class Ut extends B{constructor(t){super(),D(this,t,yt,St,p,{delayMs:5,loadingStatus:4,onLoadingStatusChange:6,asChild:1,el:0})}}const At=l=>({builder:l&8}),K=l=>({builder:l[3]});function Mt(l){let t,e,a,s=[l[3],{alt:l[1]},l[5]],u={};for(let o=0;o<s.length;o+=1)u=k(u,s[o]);return{c(){t=W("img"),this.h()},l(o){t=R(o,"IMG",{alt:!0}),this.h()},h(){A(t,u)},m(o,r){E(o,t,r),l[10](t),e||(a=x(l[3].action(t)),e=!0)},p(o,r){A(t,u=G(s,[r&8&&o[3],r&2&&{alt:o[1]},r&32&&o[5]]))},i:O,o:O,d(o){o&&C(t),l[10](null),e=!1,a()}}}function vt(l){let t;const e=l[9].default,a=N(e,l,l[8],K);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,u){a&&a.m(s,u),t=!0},p(s,u){a&&a.p&&(!t||u&264)&&L(a,e,s,s[8],t?T(e,s[8],u,At):P(s[8]),K)},i(s){t||(b(a,s),t=!0)},o(s){g(a,s),t=!1},d(s){a&&a.d(s)}}}function Et(l){let t,e,a,s;const u=[vt,Mt],o=[];function r(n,i){return n[2]?0:1}return t=r(l),e=o[t]=u[t](l),{c(){e.c(),a=M()},l(n){e.l(n),a=M()},m(n,i){o[t].m(n,i),E(n,a,i),s=!0},p(n,[i]){let f=t;t=r(n),t===f?o[t].p(n,i):(U(),g(o[f],1,1,()=>{o[f]=null}),q(),e=o[t],e?e.p(n,i):(e=o[t]=u[t](n),e.c()),b(e,1),e.m(a.parentNode,a))},i(n){s||(b(e),s=!0)},o(n){g(e),s=!1},d(n){n&&C(a),o[t].d(n)}}}function Nt(l,t,e){let a,s;const u=["src","alt","asChild","el"];let o=v(t,u),r,n=O,i=()=>(n(),n=tt(a,m=>e(7,r=m)),a);l.$$.on_destroy.push(()=>n());let{$$slots:f={},$$scope:_}=t,{src:h=void 0}=t,{alt:S=void 0}=t,{asChild:y=!1}=t,{el:d=void 0}=t;const I={"data-bits-avatar-image":""};function c(m){z[m?"unshift":"push"](()=>{d=m,e(0,d)})}return l.$$set=m=>{t=k(k({},t),j(m)),e(5,o=v(t,u)),"src"in m&&e(6,h=m.src),"alt"in m&&e(1,S=m.alt),"asChild"in m&&e(2,y=m.asChild),"el"in m&&e(0,d=m.el),"$$scope"in m&&e(8,_=m.$$scope)},l.$$.update=()=>{l.$$.dirty&64&&i(e(4,a=mt(h).elements.image)),l.$$.dirty&128&&e(3,s=r),l.$$.dirty&8&&Object.assign(s,I)},[d,S,y,s,a,o,h,r,_,f,c]}class qt extends B{constructor(t){super(),D(this,t,Nt,Et,p,{src:6,alt:1,asChild:2,el:0})}}const Lt=l=>({builder:l&4}),X=l=>({builder:l[2]}),Pt=l=>({builder:l&4}),Y=l=>({builder:l[2]});function Tt(l){let t,e,a,s;const u=l[7].default,o=N(u,l,l[6],X);let r=[l[2],l[4]],n={};for(let i=0;i<r.length;i+=1)n=k(n,r[i]);return{c(){t=W("span"),o&&o.c(),this.h()},l(i){t=R(i,"SPAN",{});var f=w(t);o&&o.l(f),f.forEach(C),this.h()},h(){A(t,n)},m(i,f){E(i,t,f),o&&o.m(t,null),l[8](t),e=!0,a||(s=x(l[2].action(t)),a=!0)},p(i,f){o&&o.p&&(!e||f&68)&&L(o,u,i,i[6],e?T(u,i[6],f,Lt):P(i[6]),X),A(t,n=G(r,[f&4&&i[2],f&16&&i[4]]))},i(i){e||(b(o,i),e=!0)},o(i){g(o,i),e=!1},d(i){i&&C(t),o&&o.d(i),l[8](null),a=!1,s()}}}function It(l){let t;const e=l[7].default,a=N(e,l,l[6],Y);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,u){a&&a.m(s,u),t=!0},p(s,u){a&&a.p&&(!t||u&68)&&L(a,e,s,s[6],t?T(e,s[6],u,Pt):P(s[6]),Y)},i(s){t||(b(a,s),t=!0)},o(s){g(a,s),t=!1},d(s){a&&a.d(s)}}}function Ot(l){let t,e,a,s;const u=[It,Tt],o=[];function r(n,i){return n[1]?0:1}return t=r(l),e=o[t]=u[t](l),{c(){e.c(),a=M()},l(n){e.l(n),a=M()},m(n,i){o[t].m(n,i),E(n,a,i),s=!0},p(n,[i]){let f=t;t=r(n),t===f?o[t].p(n,i):(U(),g(o[f],1,1,()=>{o[f]=null}),q(),e=o[t],e?e.p(n,i):(e=o[t]=u[t](n),e.c()),b(e,1),e.m(a.parentNode,a))},i(n){s||(b(e),s=!0)},o(n){g(e),s=!1},d(n){n&&C(a),o[t].d(n)}}}function pt(l,t,e){let a;const s=["asChild","el"];let u=v(t,s),o,{$$slots:r={},$$scope:n}=t,{asChild:i=!1}=t,{el:f=void 0}=t;const{elements:{fallback:_},getAttrs:h}=gt();et(l,_,d=>e(5,o=d));const S=h("fallback");function y(d){z[d?"unshift":"push"](()=>{f=d,e(0,f)})}return l.$$set=d=>{t=k(k({},t),j(d)),e(4,u=v(t,s)),"asChild"in d&&e(1,i=d.asChild),"el"in d&&e(0,f=d.el),"$$scope"in d&&e(6,n=d.$$scope)},l.$$.update=()=>{l.$$.dirty&32&&e(2,a=o),l.$$.dirty&4&&Object.assign(a,S)},[f,i,a,_,u,o,n,r,y]}class Gt extends B{constructor(t){super(),D(this,t,pt,Ot,p,{asChild:1,el:0})}}export{Ut as A,qt as a,Gt as b};