import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { U as UploadFileState } from './upload-file-state.js';
import { d as defineCustomElement$3 } from './button.js';
import { d as defineCustomElement$2 } from './spinner.js';

const uploadCss = ":host{display:block;min-height:4rem;height:4rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .file-upload-area{display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%;width:100%;padding:1rem;border:1px dashed var(--theme-upload--border-color);border-radius:var(--theme-upload--border-radius);color:var(--theme-upload-text--color)}:host .file-upload-area.multiline{max-height:unset;height:auto}:host .file-upload-area.multiline .glyph{align-self:flex-start;margin-block-start:3px}:host .file-upload-area.multiline>div{align-self:flex-start}:host .file-upload-area:not(.multiline) .state,:host .file-upload-area:not(.multiline) .upload-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-area:not(.disabled).file-over{border-color:var(--theme-upload--border-color--dragover);border-style:solid}:host .file-upload-area.checking{color:var(--theme-upload-text--color--checking);border-style:solid}:host .file-upload-area.disabled{border-style:solid;color:var(--theme-upload-text--color--disabled)}:host .file-upload-area ix-button{margin-inline-start:1rem}:host .file-upload-area .upload-browser{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host .file-upload-area .loader{margin:2.187rem auto;font-size:0.937rem;width:1rem;height:1rem;border-radius:50%;position:relative;text-indent:-9999em;animation:optimise-loading 1.1s infinite ease;transform:translateZ(0)}:host .file-upload-area .upload-filename{margin-bottom:1rem}:host .file-upload-area .state{display:flex;align-items:center}:host .file-upload-area .state>ix-spinner{margin-inline-end:0.5rem;height:1.5rem;width:1.5rem}:host .file-upload-area .state>ix-icon{margin-inline-end:0.5rem}:host .file-upload-area .state>ix-icon.icon-error{color:var(--theme-color-alarm)}:host .file-upload-area .state>ix-icon.icon-success{color:var(--theme-color-success)}:host(.disabled){pointer-events:none}";
const IxUploadStyle0 = uploadCss;

const Upload = /*@__PURE__*/ proxyCustomElement(class Upload extends HTMLElement {
    get inputElement() {
        return this.hostElement.shadowRoot.querySelector('#upload-browser');
    }
    constructor() { super(); this.__registerHost(); this.__attachShadow(); this.filesChanged = createEvent(this, "filesChanged", 7); this.accept = undefined; this.multiple = false; this.multiline = false; this.disabled = false; this.state = UploadFileState.SELECT_FILE; this.selectFileText = '+ Drag files here or…'; this.loadingText = 'Checking files…'; this.uploadFailedText = 'Upload failed. Please try again.'; this.uploadSuccessText = 'Upload successful'; this.i18nUploadFile = 'Upload file…'; this.i18nUploadDisabled = 'File upload currently not possible.'; this.isFileOver = false; }
    fileDropped(evt) {
        evt.preventDefault();
        if (this.disabled) {
            return;
        }
        const file = evt.dataTransfer.files;
        this.isFileOver = false;
        this.filesToUpload = this.convertToFileArray(file);
        this.filesChanged.emit(this.filesToUpload);
    }
    fileOver(event) {
        if (this.state !== UploadFileState.LOADING) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        }
        if (!this.multiple && event.dataTransfer.items.length > 1) {
            event.preventDefault();
            event.stopPropagation();
            event.dataTransfer.effectAllowed = 'none';
            event.dataTransfer.dropEffect = 'none';
        }
        else {
            this.isFileOver = true;
        }
    }
    fileLeave() {
        this.isFileOver = false;
    }
    fileChangeEvent(event) {
        if (this.disabled) {
            return;
        }
        this.filesToUpload = this.convertToFileArray(event.target.files);
        this.filesChanged.emit(this.filesToUpload);
        // Workaround for bug in native input element, that prevents the user from uploading
        // a file with the same name as the most recent one, but with changed content.
        this.inputElement.type = '';
        this.inputElement.type = 'file';
    }
    convertToFileArray(filesFromEvent) {
        let files = [];
        if (filesFromEvent instanceof FileList) {
            files = Array.from(filesFromEvent);
        }
        else {
            files = [filesFromEvent];
        }
        return files;
    }
    renderUploadState() {
        if (this.disabled) {
            return (h("span", { class: "state" }, h("span", { class: "upload-text" }, this.i18nUploadDisabled)));
        }
        switch (this.state) {
            case UploadFileState.SELECT_FILE:
                return (h("span", { class: "state" }, h("span", { class: "upload-text" }, this.selectFileText)));
            case UploadFileState.LOADING:
                return (h("span", { class: "state" }, h("ix-spinner", { variant: "primary" }), h("span", { class: "upload-text" }, this.loadingText)));
            case UploadFileState.UPLOAD_FAILED:
                return (h("span", { class: "state" }, h("ix-icon", { name: "error", class: "icon-error" }), h("span", { class: "upload-text" }, this.uploadFailedText)));
            case UploadFileState.UPLOAD_SUCCESSED:
                return (h("span", { class: "state" }, h("ix-icon", { name: "success", class: "icon-success" }), h("span", { class: "upload-text" }, this.uploadSuccessText)));
            default:
                return '';
        }
    }
    /**
     * Set files
     * @param obj
     */
    async setFilesToUpload(obj) {
        this.filesToUpload = obj;
    }
    render() {
        return (h(Host, { key: '24415b4716bc4e6e575668cb5b09f978ebd387d4' }, h("div", { key: '877e983ae775fa95ffd5254b3bb7697db4cd2720', class: {
                'file-upload-area': true,
                'file-over': this.state !== UploadFileState.LOADING && this.isFileOver,
                checking: this.state === UploadFileState.LOADING,
                disabled: this.disabled,
                multiline: this.multiline,
            }, onDrop: (e) => {
                if (this.state !== UploadFileState.LOADING) {
                    this.fileDropped(e);
                }
            }, onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave(), draggable: !this.disabled }, this.renderUploadState(), h("div", { key: '6828b521609b8698f3ebc78ed83256a4fbb3cfea' }, h("input", { key: 'e825ce2834b93d3ef09100d29d127573eb812cfa', multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", onChange: (e) => {
                this.fileChangeEvent(e);
            }, accept: this.accept }), h("ix-button", { key: '117dd488e465ec542381b38b90d9d6a2ac5afb35', tabindex: "-1", outline: true, onClick: () => this.inputElement.click(), disabled: this.disabled || this.state === UploadFileState.LOADING }, this.i18nUploadFile)))));
    }
    get hostElement() { return this; }
    static get style() { return IxUploadStyle0; }
}, [1, "ix-upload", {
        "accept": [1],
        "multiple": [4],
        "multiline": [4],
        "disabled": [4],
        "state": [1],
        "selectFileText": [1, "select-file-text"],
        "loadingText": [1, "loading-text"],
        "uploadFailedText": [1, "upload-failed-text"],
        "uploadSuccessText": [1, "upload-success-text"],
        "i18nUploadFile": [1, "i-1-8n-upload-file"],
        "i18nUploadDisabled": [1, "i-1-8n-upload-disabled"],
        "isFileOver": [32],
        "setFilesToUpload": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-upload", "ix-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-upload":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Upload);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxUpload = Upload;
const defineCustomElement = defineCustomElement$1;

export { IxUpload, defineCustomElement };

//# sourceMappingURL=ix-upload.js.map