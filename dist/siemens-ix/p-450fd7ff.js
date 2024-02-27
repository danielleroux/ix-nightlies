import{r as t,c as e,f as o,h as s,g as i,H as n}from"./p-3b388d55.js";function a(t){return Array.from(t.el.querySelectorAll(t instanceof f?"ix-menu-settings-item":"ix-menu-about-item"))}function r(t,e){t.activeTabLabel=e;t.items.forEach((e=>{e.style.display="none";if(e.label===t.activeTabLabel){e.style.display="block"}}))}function l(t){t.items=a(t);if(t.items.length){r(t,t.activeTabLabel||t.items[0].label)}t.items.forEach((e=>{e.addEventListener("labelChange",(e=>{t.items=a(t);if(e.detail.oldLabel===t.activeTabLabel){t.activeTabLabel=e.detail.newLabel}}))}))}const m=".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .settings-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .settings-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host .settings-tabs{margin-bottom:1.5rem}";const h=m;const f=class{constructor(o){t(this,o);this.close=e(this,"close",7);this.activeTabLabel=undefined;this.label="Settings";this.show=false;this.items=undefined}updateTab(t){r(this,t)}componentWillLoad(){l(this)}componentDidLoad(){o(this.el)}render(){return s(g,{key:"a2691ce375c764745c7b364ac8d09e280869c86d",context:this})}get el(){return i(this)}static get watchers(){return{activeTabLabel:["updateTab"]}}};f.style=h;const c=t=>t.items.map((({label:e})=>s("ix-tab-item",{selected:e===t.activeTabLabel,onClick:()=>r(t,e)},e)));const g=({context:t})=>s(n,{slot:t instanceof f?"ix-menu-settings":"ix-menu-about",class:{show:t.show}},s("div",{class:t instanceof f?"settings-header":"about-header"},s("h2",{class:"text-h2"},t.label),s("ix-icon-button",{ghost:true,size:"24",icon:"close",onClick:e=>t.close.emit({name:t instanceof f?"ix-menu-settings":"ix-menu-about",nativeEvent:e})})),s("ix-tabs",null,c(t)),s("slot",null));export{g as M,f as a,l as i,r as s};
//# sourceMappingURL=p-450fd7ff.js.map