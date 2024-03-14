'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-59fe9b91.js');
const uploadFileState = require('./upload-file-state-3e9d929d.js');

const uploadCss = ":host{display:block;min-height:4rem;height:4rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .file-upload-area{display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%;width:100%;padding:1rem;border:1px dashed var(--theme-upload--border-color);border-radius:var(--theme-upload--border-radius);color:var(--theme-upload-text--color)}:host .file-upload-area.multiline{max-height:unset;height:auto}:host .file-upload-area.multiline .glyph{align-self:flex-start;margin-block-start:3px}:host .file-upload-area.multiline>div{align-self:flex-start}:host .file-upload-area:not(.multiline) .state,:host .file-upload-area:not(.multiline) .upload-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-area:not(.disabled).file-over{border-color:var(--theme-upload--border-color--dragover);border-style:solid}:host .file-upload-area.checking{color:var(--theme-upload-text--color--checking);border-style:solid}:host .file-upload-area.disabled{border-style:solid;color:var(--theme-upload-text--color--disabled)}:host .file-upload-area ix-button{margin-inline-start:1rem}:host .file-upload-area .upload-browser{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host .file-upload-area .loader{margin:2.187rem auto;font-size:0.937rem;width:1rem;height:1rem;border-radius:50%;position:relative;text-indent:-9999em;animation:optimise-loading 1.1s infinite ease;transform:translateZ(0)}:host .file-upload-area .upload-filename{margin-bottom:1rem}:host .file-upload-area .state{display:flex;align-items:center}:host .file-upload-area .state>ix-spinner{margin-inline-end:0.5rem;height:1.5rem;width:1.5rem}:host .file-upload-area .state>ix-icon{margin-inline-end:0.5rem}:host .file-upload-area .state>ix-icon.icon-error{color:var(--theme-color-alarm)}:host .file-upload-area .state>ix-icon.icon-success{color:var(--theme-color-success)}:host(.disabled){pointer-events:none}";
const IxUploadStyle0 = uploadCss;

const Upload = class {
    get inputElement() {
        return this.hostElement.shadowRoot.querySelector('#upload-browser');
    }
    constructor(hostRef) { index.registerInstance(this, hostRef); this.filesChanged = index.createEvent(this, "filesChanged", 7); this.accept = undefined; this.multiple = false; this.multiline = false; this.disabled = false; this.state = uploadFileState.UploadFileState.SELECT_FILE; this.selectFileText = '+ Drag files here or…'; this.loadingText = 'Checking files…'; this.uploadFailedText = 'Upload failed. Please try again.'; this.uploadSuccessText = 'Upload successful'; this.i18nUploadFile = 'Upload file…'; this.i18nUploadDisabled = 'File upload currently not possible.'; this.isFileOver = false; }
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
        if (this.state !== uploadFileState.UploadFileState.LOADING) {
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
            return (index.h("span", { class: "state" }, index.h("span", { class: "upload-text" }, this.i18nUploadDisabled)));
        }
        switch (this.state) {
            case uploadFileState.UploadFileState.SELECT_FILE:
                return (index.h("span", { class: "state" }, index.h("span", { class: "upload-text" }, this.selectFileText)));
            case uploadFileState.UploadFileState.LOADING:
                return (index.h("span", { class: "state" }, index.h("ix-spinner", { variant: "primary" }), index.h("span", { class: "upload-text" }, this.loadingText)));
            case uploadFileState.UploadFileState.UPLOAD_FAILED:
                return (index.h("span", { class: "state" }, index.h("ix-icon", { name: "error", class: "icon-error" }), index.h("span", { class: "upload-text" }, this.uploadFailedText)));
            case uploadFileState.UploadFileState.UPLOAD_SUCCESSED:
                return (index.h("span", { class: "state" }, index.h("ix-icon", { name: "success", class: "icon-success" }), index.h("span", { class: "upload-text" }, this.uploadSuccessText)));
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
        return (index.h(index.Host, { key: '362c68193c0f82826d5b2f3ae86e07a1bd2e8155' }, index.h("div", { key: '9acf5a7acd3a0cb8597a6895c9ce89fef4e9f42c', class: {
                'file-upload-area': true,
                'file-over': this.state !== uploadFileState.UploadFileState.LOADING && this.isFileOver,
                checking: this.state === uploadFileState.UploadFileState.LOADING,
                disabled: this.disabled,
                multiline: this.multiline,
            }, onDrop: (e) => {
                if (this.state !== uploadFileState.UploadFileState.LOADING) {
                    this.fileDropped(e);
                }
            }, onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave(), draggable: !this.disabled }, this.renderUploadState(), index.h("div", { key: '73e8538a327abc73dd98041c673d5f601becb0e8' }, index.h("input", { key: '8414ead2fc82eaa40487112fd690e7131ccab26e', multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", onChange: (e) => {
                this.fileChangeEvent(e);
            }, accept: this.accept }), index.h("ix-button", { key: 'e23cf6d640662faefbf6f16691abaf2672d01800', tabindex: "-1", outline: true, onClick: () => this.inputElement.click(), disabled: this.disabled || this.state === uploadFileState.UploadFileState.LOADING }, this.i18nUploadFile)))));
    }
    get hostElement() { return index.getElement(this); }
};
Upload.style = IxUploadStyle0;

exports.ix_upload = Upload;

//# sourceMappingURL=ix-upload.cjs.entry.js.map