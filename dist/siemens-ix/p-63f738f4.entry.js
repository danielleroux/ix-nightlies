import{r as t,c as s,h as e,H as r,g as o}from"./p-3b388d55.js";import{c as i}from"./p-e898862b.js";const c=":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .steps{display:flex}:host .steps.vertical{display:block}";const a=c;const h=class{constructor(e){t(this,e);this.stepSelected=s(this,"stepSelected",7);this.vertical=false;this.clickable=false;this.selectedIndex=0}getSteps(){return Array.from(this.hostElement.querySelectorAll("ix-workflow-step"))}updateSteps(){let t=this.getSteps();t.forEach(((s,e)=>{s.vertical=this.vertical;s.clickable=this.clickable;s.selected=this.selectedIndex===e;if(t.length===1){s.position="single";return}if(e===0){s.position="first"}else if(e===t.length-1){s.position="last"}else{s.position="undefined"}}))}onStepSelectionChanged(t){const s=t.detail;const e=this.getSteps();const r=e.findIndex((t=>t===s));const o=this.stepSelected.emit(r);if(o.defaultPrevented){return}e.forEach(((t,s)=>{t.selected=s===r}))}componentDidLoad(){this.observer=i((t=>{for(let s of t){if(s.type==="childList"){this.updateSteps()}}}));this.observer.observe(this.hostElement,{childList:true})}disconnectedCallback(){if(this.observer){this.observer.disconnect()}}componentDidRender(){this.updateSteps()}render(){return e(r,{key:"0df56c84cde310027e181c8fd5d8c9dd4f5c9451"},e("div",{key:"2f82dfc3689d431ac06586f673895b9c36799847",class:{steps:true,vertical:this.vertical}},e("slot",{key:"c22421b7917f1d61bc2624979bee8b8804cc8aa3"})))}get hostElement(){return o(this)}};h.style=a;export{h as ix_workflow_steps};
//# sourceMappingURL=p-63f738f4.entry.js.map