import{s as T,l as D,u as M,m as R,o as z,z as d,d as m,n as A,A as S,i as E,W as U,c as j,e as q,h as B,P as y,D as v,k as I,E as V,T as W}from"./scheduler.D_DiFEDa.js";import{S as F,i as G,t as h,a as b,g as H,f as J}from"./index.uqldPLAT.js";import{g as K}from"./spread.CgU5AtxT.js";import"./index.9B820uFl.js";import{c as L}from"./create.CM8Mllzg.js";import{c as Q,r as X,g as Y}from"./updater.Dth1Bj6g.js";function Z(){return{NAME:"separator",PARTS:["root"]}}function x(s){const{NAME:t,PARTS:e}=Z(),o=Q(t,e),i={...L(X(s)),getAttrs:o};return{...i,updateOption:Y(i.options)}}const w=s=>({builder:s&4}),C=s=>({builder:s[2]});function $(s){let t,e,o,i=[s[2],s[4]],l={};for(let r=0;r<i.length;r+=1)l=d(l,i[r]);return{c(){t=B("div"),this.h()},l(r){t=j(r,"DIV",{}),q(t).forEach(m),this.h()},h(){S(t,l)},m(r,u){E(r,t,u),s[10](t),e||(o=U(s[2].action(t)),e=!0)},p(r,u){S(t,l=K(i,[u&4&&r[2],u&16&&r[4]]))},i:A,o:A,d(r){r&&m(t),s[10](null),e=!1,o()}}}function tt(s){let t;const e=s[9].default,o=D(e,s,s[8],C);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,l){o&&o.m(i,l),t=!0},p(i,l){o&&o.p&&(!t||l&260)&&M(o,e,i,i[8],t?z(e,i[8],l,w):R(i[8]),C)},i(i){t||(b(o,i),t=!0)},o(i){h(o,i),t=!1},d(i){o&&o.d(i)}}}function et(s){let t,e,o,i;const l=[tt,$],r=[];function u(a,c){return a[1]?0:1}return t=u(s),e=r[t]=l[t](s),{c(){e.c(),o=y()},l(a){e.l(a),o=y()},m(a,c){r[t].m(a,c),E(a,o,c),i=!0},p(a,[c]){let f=t;t=u(a),t===f?r[t].p(a,c):(H(),h(r[f],1,1,()=>{r[f]=null}),J(),e=r[t],e?e.p(a,c):(e=r[t]=l[t](a),e.c()),b(e,1),e.m(o.parentNode,o))},i(a){i||(b(e),i=!0)},o(a){h(e),i=!1},d(a){a&&m(o),r[t].d(a)}}}function ot(s,t,e){let o;const i=["orientation","decorative","asChild","el"];let l=v(t,i),r,{$$slots:u={},$$scope:a}=t,{orientation:c="horizontal"}=t,{decorative:f=!0}=t,{asChild:g=!1}=t,{el:_=void 0}=t;const{elements:{root:p},updateOption:k,getAttrs:P}=x({orientation:c,decorative:f});I(s,p,n=>e(7,r=n));const N=P("root");function O(n){W[n?"unshift":"push"](()=>{_=n,e(0,_)})}return s.$$set=n=>{t=d(d({},t),V(n)),e(4,l=v(t,i)),"orientation"in n&&e(5,c=n.orientation),"decorative"in n&&e(6,f=n.decorative),"asChild"in n&&e(1,g=n.asChild),"el"in n&&e(0,_=n.el),"$$scope"in n&&e(8,a=n.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&k("orientation",c),s.$$.dirty&64&&k("decorative",f),s.$$.dirty&128&&e(2,o=r),s.$$.dirty&4&&Object.assign(o,N)},[_,g,o,p,l,c,f,r,a,u,O]}class ct extends F{constructor(t){super(),G(this,t,ot,et,T,{orientation:5,decorative:6,asChild:1,el:0})}}export{ct as S};
