import{g as t}from"./p-3b388d55.js";const n={target:"window",defaultEnabled:true};function e(t,e={}){const i=Object.assign(Object.assign({},n),e);let o;const s=t=>{o(t)};const c={on:t=>{o=t},isEnabled:i.defaultEnabled,enable:n=>{c.isEnabled=n;if(n){addEventListener(t,s)}else{removeEventListener(t,s)}},destroy:()=>{c.enable(false)}};c.enable(i.defaultEnabled);return c}function i(n,i){return(o,s)=>{const{componentWillLoad:c,componentWillRender:r,disconnectedCallback:_}=o;if(i){o.componentWillRender=function(){var n;const e=t(this);(n=e[`__ix__${s}`])===null||n===void 0?void 0:n.enable(i(this));return r&&r.call(this)}}o.componentWillLoad=function(){const i=e(n);const o=t(this);const r=this[s];o[`__ix__${s}`]=i;i.on(r.bind(this));return c&&c.call(this)};o.disconnectedCallback=function(){var n;const e=t(this);if(e&&e[`__ix__${s}`]){(n=e[`__ix__${s}`])===null||n===void 0?void 0:n.destroy();e[`__ix__${s}`]=null}return _&&_.call(this)}}}export{i as O};
//# sourceMappingURL=p-a969587b.js.map