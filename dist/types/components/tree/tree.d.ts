import { EventEmitter } from '../../stencil-public-runtime';
import { TreeContext, TreeModel, UpdateCallback } from './tree-model';
export declare class Tree {
    hostElement: HTMLIxTreeElement;
    /**
     * Initial root element will not be rendered
     */
    root: string;
    /**
     * Tree model
     */
    model: TreeModel<any>;
    /**
     * Render function of tree items
     */
    renderItem: <T = any>(index: number, data: T, dataList: Array<T>, context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement;
    /**
     * Selection and collapsed state management
     */
    context: TreeContext;
    /**
     * Context changed
     */
    contextChange: EventEmitter<TreeContext>;
    /**
     * Node toggled event
     * @since 1.5.0
     */
    nodeToggled: EventEmitter<{
        id: string;
        isExpaned: boolean;
    }>;
    /**
     * Node clicked event
     * @since 1.5.0
     */
    nodeClicked: EventEmitter<string>;
    /**
     * Emits removed nodes
     */
    nodeRemoved: EventEmitter<any>;
    private hyperlist;
    private toggleListener;
    private itemClickListener;
    private updates;
    private observer;
    private hasFirstRender;
    private updatePadding;
    private getVirtualizerOptions;
    private setContext;
    private getContext;
    private buildTreeList;
    componentDidLoad(): void;
    componentWillRender(): void;
    disconnectedCallback(): void;
    modelChange(): void;
    private isListInitialized;
    private refreshList;
    private initList;
    render(): any;
}
