import{r as t,c as i,h as e,H as o,g as s}from"./p-3b388d55.js";import{a}from"./p-71206084.js";import{b as l,a as r}from"./p-4f8ac3bf.js";import{A as n}from"./p-46a6cd9d.js";import{O as d}from"./p-a969587b.js";function h(t,i,e=3e3){return new Promise(((o,s)=>{const a=Date.now();const l=()=>{const r=i.querySelector(t);if(r){o(r)}else{if(Date.now()-a<e){setTimeout(l)}else{s()}}};l()}))}const c="::backdrop{--ix-dialog-backdrop:var(--theme-color-lightbox, #0000008c)}:focus-visible{outline:none !important}:host{display:none}:host dialog{margin:0;left:50%}:host dialog::backdrop{-webkit-backdrop-filter:blur(2.7182817459px);backdrop-filter:blur(2.7182817459px)}:host .modal{display:flex;flex-direction:column;position:relative;border:none;border-radius:var(--theme-default-border-radius);background:var(--theme-modal--background);box-shadow:var(--theme-shadow-4);color:var(--theme-color-std-text);overflow:visible;max-height:80vh;pointer-events:all}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{left:0px !important;top:0px !important;transform:none !important;width:calc(100% - 28px);min-width:calc(100% - 28px);max-width:calc(100% - 28px);height:calc(100% - 28px);min-height:calc(100% - 28px);max-height:calc(100% - 28px)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0px;left:0px;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.visible){display:block}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:2.5rem}";const f=c;var m=undefined&&undefined.__decorate||function(t,i,e,o){var s=arguments.length,a=s<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,e):o,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,i,e,o);else for(var r=t.length-1;r>=0;r--)if(l=t[r])a=(s<3?l(a):s>3?l(i,e,a):l(i,e))||a;return s>3&&a&&Object.defineProperty(i,e,a),a};const p=class{constructor(e){t(this,e);this.dialogClose=i(this,"dialogClose",7);this.dialogDismiss=i(this,"dialogDismiss",7);this.ariaAttributes={};this.size="360";this.animation=true;this.backdrop=true;this.closeOnBackdropClick=false;this.beforeDismiss=undefined;this.centered=false;this.keyboard=true;this.closeOnEscape=true;this.modalVisible=false}onKey(t){if(t.key==="Escape"){t.preventDefault()}}get dialog(){return this.hostElement.shadowRoot.querySelector("dialog")}slideInModal(){const t=this.animation?n.mediumTime:0;let i=this.centered?"-50%":40;a({targets:this.dialog,duration:t,opacity:[0,1],translateY:[0,i],translateX:["-50%","-50%"],easing:"easeOutSine"})}slideOutModal(t){const i=this.animation?n.mediumTime:0;let e=this.centered?"-50%":40;a({targets:this.dialog,duration:i,opacity:[1,0],translateY:[e,0],translateX:["-50%","-50%"],easing:"easeInSine",complete:()=>{if(t){t()}}})}onModalClick(t){if(t.target!==this.dialog){return}const i=this.dialog.getBoundingClientRect();const e=i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width;if(!e&&this.closeOnBackdropClick){this.dismissModal()}}async showModal(){try{const t=await h("dialog",this.hostElement.shadowRoot);this.modalVisible=true;t.showModal()}catch(t){console.error("HTMLDialogElement not existing")}}async dismissModal(t){let i=true;if(this.beforeDismiss!==undefined){i=await this.beforeDismiss(t)}if(!i){return}this.slideOutModal((()=>{this.modalVisible=false;this.dialog.close(JSON.stringify({type:"dismiss",reason:t},null,2));this.dialogDismiss.emit(t)}))}async closeModal(t){this.slideOutModal((()=>{this.dialog.close(JSON.stringify({type:"close",reason:t},null,2));this.dialogClose.emit(t)}))}componentDidLoad(){this.slideInModal()}componentWillLoad(){this.ariaAttributes=l(this.hostElement)}render(){return e(o,{key:"185b4d7fdc54c5657f7a1b11f08ff0e53114f633",class:{visible:this.modalVisible,"no-backdrop":this.backdrop===false,"align-center":this.centered}},e("div",{key:"455364c00c366ae949cbaab74a9d7c47c3c822f1",class:"dialog-backdrop"},e("dialog",{key:"6603b83c715d18aa0f7aa32524e82ff01453235d","aria-modal":r(true),"aria-describedby":this.ariaAttributes["aria-describedby"],"aria-labelledby":this.ariaAttributes["aria-labelledby"],class:{modal:true,[`modal-size-${this.size}`]:true},onClose:()=>this.dismissModal(),onClick:t=>this.onModalClick(t),onCancel:t=>{t.preventDefault();this.dismissModal()}},e("slot",{key:"b5d0d5a56fa225d229822c4c6a00376f2a73f03c"}))))}get hostElement(){return s(this)}};m([d("keydown",(t=>!t.closeOnEscape||!t.keyboard))],p.prototype,"onKey",null);p.style=f;export{p as ix_modal};
//# sourceMappingURL=p-939a4a43.entry.js.map