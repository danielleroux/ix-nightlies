import{r as o,h as r,H as t,g as e}from"./p-3b388d55.js";const n=":host{display:inline-block;position:relative;height:1.25rem;max-height:1.25rem;margin-left:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.container{display:inline-flex;width:inherit;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;height:2rem;max-height:2rem;cursor:default}.container .with-icon{margin-right:0.25rem}.container .hidden{display:none;width:0px;margin-right:0px}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.icon{padding-left:0.75rem;padding-right:0.75rem}.container.closable{padding-right:0.25rem}.container.primary{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.container.primary .close-button{color:var(--theme-chip-primary--color);--ix-icon-button-color:var(--theme-chip-primary--color);pointer-events:auto}.container.primary.outline{color:var(--theme-chip-primary-outline--color);background-color:transparent;border:solid 1px var(--theme-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--theme-chip-primary-outline--color);--ix-icon-button-color:var(--theme-chip-primary-outline--color)}.container.outline{border-width:1px;border-style:solid}.container.alarm{color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline){background-color:var(--theme-color-alarm)}.container.alarm:not(.outline) .close-button{color:var(--theme-color-alarm--contrast);--ix-icon-button-color:var(--theme-color-alarm--contrast)}.container.alarm.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-alarm)}.container.critical{color:var(--theme-color-critical--contrast)}.container.critical:not(.outline){background-color:var(--theme-color-critical)}.container.critical:not(.outline) .close-button{color:var(--theme-color-critical--contrast);--ix-icon-button-color:var(--theme-color-critical--contrast)}.container.critical.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-critical)}.container.warning{color:var(--theme-color-warning--contrast)}.container.warning:not(.outline){background-color:var(--theme-color-warning)}.container.warning:not(.outline) .close-button{color:var(--theme-color-warning--contrast);--ix-icon-button-color:var(--theme-color-warning--contrast)}.container.warning.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-warning)}.container.info{color:var(--theme-color-info--contrast)}.container.info:not(.outline){background-color:var(--theme-color-info)}.container.info:not(.outline) .close-button{color:var(--theme-color-info--contrast);--ix-icon-button-color:var(--theme-color-info--contrast)}.container.info.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-info)}.container.neutral{color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline){background-color:var(--theme-color-neutral)}.container.neutral:not(.outline) .close-button{color:var(--theme-color-neutral--contrast);--ix-icon-button-color:var(--theme-color-neutral--contrast)}.container.neutral.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-neutral)}.container.success{color:var(--theme-color-success--contrast)}.container.success:not(.outline){background-color:var(--theme-color-success)}.container.success:not(.outline) .close-button{color:var(--theme-color-success--contrast);--ix-icon-button-color:var(--theme-color-success--contrast)}.container.success.outline{color:var(--theme-chip-outline--color);border-color:var(--theme-color-success)}:host .container{height:100%;justify-content:center;padding-right:0.5rem}:host(.align-left) .container{justify-content:flex-start}";const c=n;const i=class{constructor(r){o(this,r);this.variant="primary";this.outline=false;this.icon=undefined;this.background=undefined;this.color=undefined;this.pillColor=undefined;this.alignLeft=false}render(){var o,e;let n={};if(this.variant==="custom"){n={color:(o=this.pillColor)!==null&&o!==void 0?o:this.color,[this.outline?"borderColor":"backgroundColor"]:this.background}}return r(t,{key:"8cdaa8d8b2c429a046db4bc3ecf05fab8c8dd43d",style:this.variant==="custom"?{"--ix-icon-button-color":(e=this.pillColor)!==null&&e!==void 0?e:this.color}:{},title:this.el.textContent,class:{"align-left":this.alignLeft}},r("div",{key:"2be689c5f608c39f13969c80680f2a482d0e33bb",style:Object.assign({},n),class:{container:true,outline:this.outline,inactive:false,alarm:this.variant==="alarm",critical:this.variant==="critical",info:this.variant==="info",neutral:this.variant==="neutral",primary:this.variant==="primary",success:this.variant==="success",warning:this.variant==="warning",custom:this.variant==="custom",closable:false,icon:!!this.icon}},r("ix-icon",{key:"3695a57e5de1e243a9b453df6ea1fc9e6a8a37a4",class:{"with-icon":true,hidden:this.icon===undefined||this.icon===""},name:this.icon,size:"16"}),r("span",{key:"999f7e18df2ae7e0626714d85f4abcca0a0e8bce",class:"slot-container"},r("slot",{key:"bcc766b78fa8cf6a2b044b0356296225862765c9"}))))}get el(){return e(this)}};i.style=c;export{i as ix_pill};
//# sourceMappingURL=p-d95970af.entry.js.map