const a=a=>{if(!a){return false}let r;try{r=new URL(a)}catch(a){return false}return r.protocol==="http:"||r.protocol==="https:"};const r=a=>{if(!a){return false}if(typeof a!=="string"){return false}return a.startsWith("data:image/svg+xml")};const i=a=>a?"true":"false";const e=a=>{const r=a.replace("-filled","");const i=r.split("-");const e=i.map((a=>{const r=a.trim();const i=r.replace(/\d+/g,"");if(i.length===0){return r}return i})).map((a=>a.charAt(0).toUpperCase()+a.slice(1))).join(" ");return e};const t=i=>{if(!i){return"Unknown"}if(a(i)){return"Unknown"}if(r(i)){return"Unknown"}const t=e(i);if(t.length===0){return"Unknown"}return t};const n=(a,r=[])=>{const i={};o.forEach((e=>{if(a.hasAttribute(e)){const t=a.getAttribute(e);if(t!==null&&!r.includes(e)){i[e]=a.getAttribute(e);a.removeAttribute(e)}}}));return i};const o=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"];export{i as a,n as b,t as g};
//# sourceMappingURL=p-4f8ac3bf.js.map