import{r as t,c as e,h as i,H as s,g as o}from"./p-26e9d40e.js";import{O as r}from"./p-ced10144.js";const n=":host{display:inline-block;position:relative;min-height:2rem;height:auto;border-radius:var(--theme-input--border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .d-none{display:none}:host .select{position:relative;display:flex;align-items:center;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}:host .select:not(.disabled):not(:disabled){cursor:pointer}:host .select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}:host .select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff;outline-offset:var(--theme-input--focus--outline-offset)}:host .select.readonly{box-shadow:none !important;border:none;border-radius:0px;border-bottom:var(--theme-input--border-thickness) solid var(--theme-color-weak-bdr)}:host .select.readonly,:host .select.readonly:hover,:host .select.readonly:active{background-color:transparent !important}:host .select.readonly:focus,:host .select.readonly:focus-within,:host .select.readonly:focus-visible{outline:none}:host .select.readonly input{color:var(--theme-color-weak-text)}:host .select.readonly input:focus,:host .select.readonly input:focus-visible{outline:none}:host .hidden{display:none !important}:host .trigger{display:flex;align-items:center;flex-grow:1;height:100%}:host .input-container{display:flex;position:relative;align-items:flex-start;width:100%;height:100%}:host .input-container .chips{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-height:3.5rem;flex-grow:1;overflow-y:auto}:host .input-container .chips>ix-filter-chip{margin:0.1rem}:host .input-container input{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%}:host .input-container input,:host .input-container input:hover,:host .input-container input:focus-visible{border:none;outline:none}:host .input-container input::-moz-placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input::placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input.hide-placeholder::-moz-placeholder{opacity:0}:host .input-container input.hide-placeholder::placeholder{opacity:0}:host .dropdown-visible{--ix-icon-button-color:var(--theme-color-dynamic--hover)}:host .add-item{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}:host .select-list-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 1rem}";const h=n;var l=undefined&&undefined.__decorate||function(t,e,i,s){var o=arguments.length,r=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)if(n=t[h])r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r;return o>3&&r&&Object.defineProperty(e,i,r),r};const a=class{constructor(i){t(this,i);this.valueChange=e(this,"valueChange",7);this.itemSelectionChange=e(this,"itemSelectionChange",7);this.inputChange=e(this,"inputChange",7);this.addItem=e(this,"addItem",7);this.selectedIndices=undefined;this.value=undefined;this.allowClear=false;this.mode="single";this.editable=false;this.disabled=false;this.readonly=false;this.i18nPlaceholder="Select an option";this.i18nPlaceholderEditable="Type of select option";this.i18nSelectListHeader="Please select an option";this.i18nNoMatches="No matches";this.hideListHeader=false;this.dropdownShow=false;this.selectedLabels=undefined;this.dropdownWrapperRef=undefined;this.dropdownAnchor=undefined;this.isDropdownEmpty=false;this.hasFocus=false;this.navigationItem=undefined;this.inputFilterText=undefined;this.inputValue=undefined}get items(){return[...Array.from(this.hostElement.querySelectorAll("ix-select-item")),...Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-select-item"))]}get selectedItems(){return this.items.filter((t=>t.selected))}get addItemButton(){return this.hostElement.shadowRoot.querySelector(".add-item")}get isSingleMode(){return this.mode==="single"}get isMultipleMode(){return this.mode==="multiple"}get isEveryDropdownItemHidden(){return this.items.every((t=>t.classList.contains("d-none")))}watchSelectedIndices(t){this.value=t;this.updateSelection()}watchValue(t){this.selectedIndices=t;this.updateSelection()}onItemClicked(t){const e=t.detail;this.itemClick(e)}itemClick(t){this.value=this.toggleValue(t);this.updateSelection();this.emitValueChange()}emitAddItem(t){if(t.trim()===""){return}const e=document.createElement("ix-select-item");e.value=t;e.label=t;this.addItemRef.appendChild(e);this.clearInput();this.itemClick(t);this.addItem.emit(t)}toggleValue(t){if(!this.isMultipleMode){return t}if(!this.value){return[t]}let e=this.value;if(!Array.isArray(e)){e=[e]}if(e.includes(t)){return e.filter((e=>e!==t))}else{return[...e,t]}}updateSelection(){var t;let e=[];if(this.value){e=Array.isArray(this.value)?[...this.value]:[this.value]}this.items.forEach((t=>{t.selected=e.some((e=>e===(t.value?t.value.toString():"")))}));this.selectedLabels=this.selectedItems.map((t=>t.label));if(this.isSingleMode){this.inputValue=((t=this.selectedLabels)===null||t===void 0?void 0:t.length)?this.selectedLabels[0]:null;return}this.inputValue=null}emitValueChange(){this.valueChange.emit(this.value);if(!this.value){this.itemSelectionChange.emit(null)}else{this.itemSelectionChange.emit(Array.isArray(this.value)?this.value:[this.value])}}componentDidLoad(){this.inputRef.addEventListener("input",(()=>{this.dropdownShow=true;this.inputChange.emit(this.inputRef.value)}))}componentWillLoad(){if(this.selectedIndices&&!this.value){this.value=this.selectedIndices}this.updateSelection()}onLabelChange(t){t.preventDefault();t.stopImmediatePropagation();this.updateSelection()}disconnectedCallback(){if(this.labelMutationObserver){this.labelMutationObserver.disconnect()}}itemExists(t){return this.items.find((e=>e.label===t))}dropdownVisibilityChanged(t){this.dropdownShow=t.detail;this.hasFocus=t.detail;if(t.detail){this.inputRef.focus();this.inputRef.select();this.removeHiddenFromItems();this.isDropdownEmpty=this.isEveryDropdownItemHidden}else{this.navigationItem=undefined}}async onKeyDown(t){if(t.code==="ArrowDown"||t.code==="ArrowUp"){this.onArrowNavigation(t,t.code)}if(!this.dropdownShow){return}if(t.code==="Enter"||t.code==="NumpadEnter"){await this.onEnterNavigation()}if(t.code==="Escape"){this.dropdownShow=false}}async onEnterNavigation(){var t,e;if(this.isMultipleMode){return}if(this.editable&&!this.itemExists(this.inputFilterText)){this.emitAddItem(this.inputFilterText);this.navigationItem=this.items[this.items.length-1]}(t=this.navigationItem)===null||t===void 0?void 0:t.onItemClick();await((e=this.dropdownRef)===null||e===void 0?void 0:e.updatePosition());if(this.isSingleMode&&!this.editable){this.dropdownShow=false}}onArrowNavigation(t,e){t.preventDefault();t.stopPropagation();this.dropdownShow=true;const i=this.items.filter((t=>!t.classList.contains("d-none")));if(this.navigationItem===undefined){this.applyFocusTo(i[0]);return}let s=i.findIndex((t=>t===this.navigationItem));if(e==="ArrowDown"){s++}else{s--}const o=i[s];this.applyFocusTo(o)}applyFocusTo(t){if(!t){return}this.navigationItem=t;setTimeout((()=>{t.shadowRoot.querySelector("ix-dropdown-item").shadowRoot.querySelector("button").focus()}))}filterItemsWithTypeahead(){this.inputFilterText=this.inputRef.value;if(this.isSingleMode&&this.inputFilterText===this.selectedLabels[0]){return}if(this.inputFilterText){this.items.forEach((t=>{t.classList.remove("d-none");if(!t.label.toLowerCase().includes(this.inputFilterText.toLowerCase())){t.classList.add("d-none")}}))}else{this.removeHiddenFromItems()}this.isDropdownEmpty=this.isEveryDropdownItemHidden}removeHiddenFromItems(){this.items.forEach((t=>{t.classList.remove("d-none")}))}clearInput(){this.inputRef.value="";this.inputFilterText=""}clear(){this.clearInput();this.selectedLabels=[];this.value=[];this.valueChange.emit(null);this.dropdownShow=false}onInputBlur(t){if(this.editable){return}if(this.isSingleMode){return}if(!this.dropdownShow&&this.mode!=="multiple"){t.target["value"]=this.selectedLabels}}placeholderValue(){if(this.editable){return this.i18nPlaceholderEditable}if(this.readonly){return""}return this.i18nPlaceholder}isAddItemVisible(){return!this.itemExists(this.inputFilterText)&&this.editable&&this.inputFilterText}render(){var t,e,o;return i(s,{key:"0fc926abc501ee03ef30437a7f727f81e9bec80d"},i("div",{key:"20959745335d4d0a9ed101c25de2c225981ecc50",class:{select:true,disabled:this.disabled,readonly:this.readonly},ref:t=>{this.dropdownAnchor=t;if(!this.editable)this.dropdownWrapperRef=t}},i("div",{key:"4177f3645edb69e527101f21d1af47407d3e1f8e",class:"input-container"},i("div",{key:"834d0f8dce560d09a05667014123886ae7b67732",class:"chips"},this.isMultipleMode?(t=this.selectedItems)===null||t===void 0?void 0:t.map((t=>i("ix-filter-chip",{disabled:this.disabled||this.readonly,key:t.value,onCloseClick:e=>{e.preventDefault();e.stopPropagation();this.itemClick(t.value)}},t.label))):"",i("div",{key:"f34ec19796e97f25e94a3c9835dc5208c8389392",class:"trigger"},i("input",{key:"db62b1328a0879b3faaf76c4bc04fbbb8ffad540",autocomplete:"off","data-testid":"input",disabled:this.disabled,readOnly:this.readonly,type:"text",class:{"allow-clear":this.allowClear&&!!((e=this.selectedLabels)===null||e===void 0?void 0:e.length)},placeholder:this.placeholderValue(),value:this.inputValue,ref:t=>this.inputRef=t,onBlur:t=>this.onInputBlur(t),onFocus:()=>{this.navigationItem=undefined},onInput:()=>this.filterItemsWithTypeahead(),onKeyDown:t=>this.onKeyDown(t)}),this.allowClear&&(((o=this.selectedLabels)===null||o===void 0?void 0:o.length)||this.inputFilterText)?i("ix-icon-button",{class:"clear",icon:"clear",ghost:true,oval:true,size:"16",onClick:t=>{t.preventDefault();t.stopPropagation();this.clear()}}):null,this.disabled||this.readonly?null:i("ix-icon-button",{"data-select-dropdown":true,class:{"dropdown-visible":this.dropdownShow},icon:"chevron-down-small",ghost:true,ref:t=>{if(this.editable)this.dropdownWrapperRef=t}}))))),i("ix-dropdown",{key:"92fa7a1b1ac9768262fad9e22bb99e282607ca13",ref:t=>this.dropdownRef=t,show:this.dropdownShow,closeBehavior:this.isMultipleMode?"outside":"both",class:{"d-none":this.disabled||this.readonly},anchor:this.dropdownAnchor,trigger:this.dropdownWrapperRef,onShowChanged:t=>this.dropdownVisibilityChanged(t),placement:"bottom-start",overwriteDropdownStyle:async()=>({minWidth:`${this.hostElement.clientWidth}px`})},i("div",{key:"285e1dc8dbf439e6ad7d070c28e8ee544c6adb33",class:{"select-list-header":true,hidden:this.hideListHeader||this.isDropdownEmpty},title:this.i18nSelectListHeader},this.i18nSelectListHeader),i("slot",{key:"f2fdde64538440e79c8e2ee90579e2f5603e3753"}),i("div",{key:"bcd9e61223e0c764f087cc6c72ce342d671baa4c",ref:t=>this.addItemRef=t,class:"d-contents"}),this.isAddItemVisible()?i("ix-dropdown-item",{"data-testid":"add-item",icon:"plus",class:{"add-item":true},label:this.inputFilterText,onItemClick:t=>{t.preventDefault();t.stopPropagation();this.emitAddItem(this.inputFilterText)}}):null,this.isDropdownEmpty&&!this.editable?i("div",{class:"select-list-header"},this.i18nNoMatches):""))}get hostElement(){return o(this)}static get watchers(){return{selectedIndices:["watchSelectedIndices"],value:["watchValue"]}}};l([r("keydown",(t=>t.dropdownShow))],a.prototype,"onKeyDown",null);a.style=h;export{a as ix_select};
//# sourceMappingURL=p-632f99fe.entry.js.map