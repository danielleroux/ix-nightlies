import{T as e}from"./p-c4749812.js";class o{async attachView(e,o){var t;const n=(t=o===null||o===void 0?void 0:o.parentElement)!==null&&t!==void 0?t:document.body;n.appendChild(e);return e}async removeView(e){e.remove()}}const t=new o;let n=t;function a(e){n=e}const i=()=>n;const c=()=>t;function s(e,o){const t=o.ariaDescribedby;const n=o.ariaLabelledby;delete o["ariaDescribedby"];delete o["ariaLabelledby"];if(t){e.setAttribute("aria-describedby",t)}if(n){e.setAttribute("aria-labelledby",n)}}function l(e,o,t,n){let a=[];if(o!==undefined){a=[...a,{id:"cancel",text:o,type:"cancel",payload:n}]}return[...a,{id:"okay",text:e,type:"okay",payload:t}]}async function r(o){const t=new e;const n=document.createElement("ix-modal");const a=document.createElement("ix-modal-header");const i=document.createElement("ix-modal-content");const l=document.createElement("ix-modal-footer");s(n,o);Object.assign(a,o);Object.assign(i,o);Object.assign(l,o);a.innerText=o.messageTitle;i.innerText=o.message;o.actions.forEach((({id:e,text:o,type:t,payload:a})=>{const i=document.createElement("ix-button");i.innerText=o;l.appendChild(i);if(t==="okay"){i.variant="primary";i.addEventListener("click",(()=>n.closeModal({actionId:e,payload:a})));return}if(t==="cancel"){i.variant="primary";i.outline=true;i.addEventListener("click",(()=>n.dismissModal({actionId:e,payload:a})));return}}));n.appendChild(a);n.appendChild(i);n.appendChild(l);const r=await c().attachView(n);r.addEventListener("dialogClose",(e=>{t.emit(e.detail);r.remove()}));r.addEventListener("dialogDismiss",(e=>{t.emit(e.detail);r.remove()}));r.showModal();return t}r.info=(e,o,t,n,a,i)=>r({message:o,messageTitle:e,icon:"info",actions:l(t,n,a,i)});r.warning=(e,o,t,n,a,i)=>r({message:o,messageTitle:e,icon:"warning",iconColor:"color-warning",actions:l(t,n,a,i)});r.error=(e,o,t,n,a,i)=>r({message:o,messageTitle:e,icon:"error",iconColor:"color-alarm",actions:l(t,n,a,i)});r.success=(e,o,t,n,a,i)=>r({message:o,messageTitle:e,icon:"success",iconColor:"color-success",actions:l(t,n,a,i)});r.question=(e,o,t,n,a,i)=>r({message:o,messageTitle:e,icon:"question",actions:l(t,n,a,i)});function d(e,o){const t=o.ariaDescribedby;const n=o.ariaLabelledby;delete o["ariaDescribedby"];delete o["ariaLabelledby"];if(t){e.setAttribute("aria-describedby",t)}if(n){e.setAttribute("aria-labelledby",n)}}function m(e){return e.closest("ix-modal")}function u(e,o){const t=m(e);if(t){t.closeModal(o);return}}function f(e,o){const t=m(e);if(t){t.dismissModal(o);return}}async function y(o){const t=i();let n;const a=new e;const s=new e;if(typeof o.content==="string"){const e=document.createElement("ix-modal");e.innerText=o.content;n=await c().attachView(e)}if(o.content instanceof HTMLElement&&o.content.tagName!=="IX-MODAL"){const e=document.createElement("ix-modal");e.appendChild(o.content);n=await c().attachView(e)}if(!n){n=await t.attachView(o.content)}d(n,o);Object.assign(n,o);await n.showModal();n.addEventListener("dialogClose",(async({detail:e})=>{a.emit(e);await t.removeView(n)}));n.addEventListener("dialogDismiss",(async({detail:e})=>{s.emit(e);await t.removeView(n)}));return{htmlElement:n,onClose:a,onDismiss:s}}export{i as a,y as b,u as c,f as d,c as g,a as r,r as s};
//# sourceMappingURL=p-6e6efb4c.js.map