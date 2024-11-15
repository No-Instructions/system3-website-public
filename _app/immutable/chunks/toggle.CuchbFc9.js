import{ad as F,s as G,l as M,u as R,m as D,o as U,z as g,d as p,w as H,A as C,i as W,W as I,C as y,c as J,e as K,h as Q,P,D as A,k as V,E as X,T as Y}from"./scheduler.D_DiFEDa.js";import{S as Z,i as w,t as b,a as m,g as x,f as $}from"./index.uqldPLAT.js";import{g as ee}from"./spread.CgU5AtxT.js";import{t as te,o as se,l as oe,m as le,k as ae,c as T,q as E,r as S}from"./index.9B820uFl.js";import{w as ne}from"./index.BUY9SMGD.js";import{c as re,r as ie,g as de}from"./updater.Dth1Bj6g.js";import{c as ue}from"./events.BMfxwV7f.js";const ce={defaultPressed:!1,disabled:!1};function fe(s){const e={...ce,...s},t=te(se(e,"pressed")),{disabled:l}=t,a=e.pressed??ne(e.defaultPressed),u=oe(a,e==null?void 0:e.onPressedChange);function r(){l.get()||u.update(o=>!o)}return{elements:{root:le("toggle",{stores:[u,l],returned:([n,o])=>({"data-disabled":S(o),disabled:S(o),"data-state":n?"on":"off","aria-pressed":n,type:"button"}),action:n=>({destroy:ae(T(n,"click",()=>{r()}),T(n,"keydown",i=>{i.key!==E.ENTER&&i.key!==E.SPACE||(i.preventDefault(),r())}))})})},states:{pressed:u},options:t}}function _e(){return{NAME:"toggle",PARTS:["root","input"]}}function be(s){const{NAME:e,PARTS:t}=_e(),l=re(e,t),a={...fe(ie(s)),getAttrs:l};return F(e,a),{...a,updateOption:de(a.options)}}const me=s=>({builder:s&4}),N=s=>({builder:s[2]}),ge=s=>({builder:s&4}),O=s=>({builder:s[2]});function pe(s){let e,t,l,a;const u=s[11].default,r=M(u,s,s[10],N);let c=[s[2],{type:"button"},s[5]],n={};for(let o=0;o<c.length;o+=1)n=g(n,c[o]);return{c(){e=Q("button"),r&&r.c(),this.h()},l(o){e=J(o,"BUTTON",{type:!0});var i=K(e);r&&r.l(i),i.forEach(p),this.h()},h(){C(e,n)},m(o,i){W(o,e,i),r&&r.m(e,null),e.autofocus&&e.focus(),s[12](e),t=!0,l||(a=[I(s[2].action(e)),y(e,"m-click",s[4]),y(e,"m-keydown",s[4])],l=!0)},p(o,i){r&&r.p&&(!t||i&1028)&&R(r,u,o,o[10],t?U(u,o[10],i,me):D(o[10]),N),C(e,n=ee(c,[i&4&&o[2],{type:"button"},i&32&&o[5]]))},i(o){t||(m(r,o),t=!0)},o(o){b(r,o),t=!1},d(o){o&&p(e),r&&r.d(o),s[12](null),l=!1,H(a)}}}function he(s){let e;const t=s[11].default,l=M(t,s,s[10],O);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,u){l&&l.m(a,u),e=!0},p(a,u){l&&l.p&&(!e||u&1028)&&R(l,t,a,a[10],e?U(t,a[10],u,ge):D(a[10]),O)},i(a){e||(m(l,a),e=!0)},o(a){b(l,a),e=!1},d(a){l&&l.d(a)}}}function ke(s){let e,t,l,a;const u=[he,pe],r=[];function c(n,o){return n[1]?0:1}return e=c(s),t=r[e]=u[e](s),{c(){t.c(),l=P()},l(n){t.l(n),l=P()},m(n,o){r[e].m(n,o),W(n,l,o),a=!0},p(n,[o]){let i=e;e=c(n),e===i?r[e].p(n,o):(x(),b(r[i],1,1,()=>{r[i]=null}),$(),t=r[e],t?t.p(n,o):(t=r[e]=u[e](n),t.c()),m(t,1),t.m(l.parentNode,l))},i(n){a||(m(t),a=!0)},o(n){b(t),a=!1},d(n){n&&p(l),r[e].d(n)}}}function Ce(s,e,t){let l;const a=["disabled","pressed","onPressedChange","asChild","el"];let u=A(e,a),r,{$$slots:c={},$$scope:n}=e,{disabled:o=void 0}=e,{pressed:i=void 0}=e,{onPressedChange:f=void 0}=e,{asChild:h=!1}=e,{el:_=void 0}=e;const{elements:{root:k},states:{pressed:q},updateOption:v,getAttrs:B}=be({disabled:o,defaultPressed:i,onPressedChange:({next:d})=>(i!==d&&(f==null||f(d),t(6,i=d)),d)});V(s,k,d=>t(9,r=d));const j=ue(),z=B("root");function L(d){Y[d?"unshift":"push"](()=>{_=d,t(0,_)})}return s.$$set=d=>{e=g(g({},e),X(d)),t(5,u=A(e,a)),"disabled"in d&&t(7,o=d.disabled),"pressed"in d&&t(6,i=d.pressed),"onPressedChange"in d&&t(8,f=d.onPressedChange),"asChild"in d&&t(1,h=d.asChild),"el"in d&&t(0,_=d.el),"$$scope"in d&&t(10,n=d.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&i!==void 0&&q.set(i),s.$$.dirty&128&&v("disabled",o),s.$$.dirty&512&&t(2,l=r),s.$$.dirty&4&&Object.assign(l,z)},[_,h,l,k,j,u,i,o,f,r,n,c,L]}class Oe extends Z{constructor(e){super(),w(this,e,Ce,ke,G,{disabled:7,pressed:6,onPressedChange:8,asChild:1,el:0})}}export{Oe as T};