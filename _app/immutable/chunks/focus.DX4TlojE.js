import{a as i,b as t}from"./index.9B820uFl.js";import{L as c}from"./scheduler.D_DiFEDa.js";import{s as f}from"./sleep.mAKpSMLY.js";async function p(n){const{prop:o,defaultEl:e}=n;if(await Promise.all([f(1),c]),o===void 0){e==null||e.focus();return}const s=i(o)?o(e):o;if(typeof s=="string"){const r=document.querySelector(s);if(!t(r))return;r.focus()}else t(s)&&s.focus()}export{p as h};
