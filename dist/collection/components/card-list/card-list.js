import { h, Host, } from "@stencil/core";
import { createMutationObserver } from "../utils/mutation-observer";
function CardListTitle(props) {
    if (props.label === '') {
        return null;
    }
    return (h("div", { class: "CardList_Title" }, h("ix-icon-button", { ghost: true, icon: 'chevron-down', onClick: props.onClick, color: "color-primary", class: {
            CardList__Title__Button: true,
            CardList__Title__Button__Collapsed: props.isCollapsed,
        } }), h("ix-typography", { variant: "large-single" }, props.label), h("ix-button", { class: "CardList__Title__Show__All", ghost: true, onClick: props.onShowAllClick }, h("span", null, props.showAllLabel), h("span", null, !isNaN(props.showAllCounter) ? ` (${props.showAllCounter})` : null))));
}
/**
 * @since 1.6.0
 */
export class CardList {
    constructor() {
        this.label = undefined;
        this.collapse = false;
        this.listStyle = 'stack';
        this.maxVisibleCards = 12;
        this.showAllCount = undefined;
        this.suppressOverflowHandling = false;
        this.i18nShowAll = 'Show all';
        this.i18nMoreCards = 'There are more cards available';
        this.hasOverflowingElements = false;
        this.numberOfOverflowingElements = 0;
        this.numberOfAllChildElements = 0;
        this.leftScrollDistance = 0;
        this.rightScrollDistance = 0;
    }
    onCardListVisibilityToggle() {
        this.collapse = !this.collapse;
        this.collapseChanged.emit(this.collapse);
    }
    onShowAllClick(event) {
        this.showAllClick.emit({
            nativeEvent: event,
        });
    }
    getListChildren() {
        const slot = this.hostElement.shadowRoot.querySelector('.CardList__Content > slot');
        return slot.assignedElements({ flatten: true });
    }
    changeVisibilityOfSlotChildren() {
        const childElements = this.getListChildren();
        childElements.forEach((element, index) => {
            if (element instanceof HTMLElement) {
                if (index > this.maxVisibleCards - 1) {
                    element.classList.add('d-none');
                    return;
                }
                element.classList.remove('d-none');
            }
        });
        this.hasOverflowingElements = childElements.length > this.maxVisibleCards;
        this.numberOfOverflowingElements =
            childElements.length - this.maxVisibleCards;
        this.numberOfAllChildElements = childElements.length;
        this.detectOverflow();
    }
    registerOverflowHandler() {
        this.observer = createMutationObserver(() => {
            this.changeVisibilityOfSlotChildren();
        });
        this.observer.observe(this.hostElement.shadowRoot.querySelector('.CardList__Content'), {
            childList: true,
            subtree: true,
        });
        requestAnimationFrame(() => {
            this.changeVisibilityOfSlotChildren();
        });
    }
    shouldHandleOverflow() {
        if (this.suppressOverflowHandling) {
            return false;
        }
        if (this.listStyle === 'stack' || this.listStyle === 'scroll') {
            return true;
        }
    }
    get listElement() {
        return this.hostElement.shadowRoot.querySelector('.CardList__Content');
    }
    onCardListScroll() {
        this.detectOverflow();
    }
    isShowMoreCardVisible() {
        return (this.suppressOverflowHandling === false && this.hasOverflowingElements);
    }
    getOpacityFromScrollDistance(distance) {
        if (!this.listElement) {
            return 0;
        }
        if (distance === 0) {
            return 0;
        }
        if (distance > 100) {
            return 1;
        }
        return distance / 100;
    }
    computeMaskLayer() {
        const maxOverflowWidth = 80;
        const maskLayer = `linear-gradient(
      90deg,
      transparent 0px,
      black ${maxOverflowWidth *
            (this.getOpacityFromScrollDistance(this.leftScrollDistance) > 0 ? 1 : 0)}px,
      black calc(100% - ${maxOverflowWidth *
            (this.getOpacityFromScrollDistance(this.rightScrollDistance) > 0
                ? 1
                : 0)}px),
      transparent 100%
    )`;
        return {
            '--ix-card-list-overflow': maskLayer,
        };
    }
    detectOverflow() {
        const { clientWidth, scrollWidth, scrollLeft } = this.listElement;
        this.leftScrollDistance = scrollLeft;
        this.rightScrollDistance = scrollWidth - scrollLeft - clientWidth;
    }
    componentDidLoad() {
        if (this.shouldHandleOverflow()) {
            this.registerOverflowHandler();
        }
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    render() {
        return (h(Host, { key: 'f64f7bbef5fef7491fd79ff4a8925d30d69fc452' }, h(CardListTitle, { key: '7e0d6992d039649ed38115d0434f1192231c6ee5', isCollapsed: this.collapse, label: this.label, showAllLabel: this.i18nShowAll, showAllCounter: this.showAllCount === undefined
                ? this.numberOfAllChildElements
                : this.showAllCount, onClick: () => this.onCardListVisibilityToggle(), onShowAllClick: (e) => this.onShowAllClick(e) }), h("div", { key: '3e586bcc0ce83077ca1f63a999d0c34580eb66c9', class: {
                CardList__Overflow: true,
            }, style: this.computeMaskLayer() }, h("div", { key: '2575c1d6679112d96e48e8c120b2d62c24cc8629', class: {
                CardList__Content: true,
                CardList__Content__Collapsed: this.collapse,
                CardList__Style__Flexbox__Scroll: this.listStyle === 'stack',
                CardList__Style__Infinite__Scroll: this.listStyle === 'scroll',
            }, onScroll: () => this.onCardListScroll() }, h("slot", { key: '55f3065336c58ee56dbe24e959f81406173a6589', onSlotchange: () => this.changeVisibilityOfSlotChildren() }), this.isShowMoreCardVisible() ? (h("ix-card", { class: {
                Show__All__Card: true,
            }, onClick: (event) => this.showMoreCardClick.emit({
                nativeEvent: event,
            }) }, h("ix-card-content", { class: "Show__All__Card__Content" }, h("ix-icon", { name: 'more-menu', size: '32', class: 'Show__All__Card__Icon' }), h("span", { class: "Show__All__Card__Text" }, this.i18nMoreCards, " (", this.numberOfOverflowingElements, ")")))) : null))));
    }
    static get is() { return "ix-card-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-list.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name the card list"
                },
                "attribute": "label",
                "reflect": false
            },
            "collapse": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Collapse the list"
                },
                "attribute": "collapse",
                "reflect": false,
                "defaultValue": "false"
            },
            "listStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'stack' | 'scroll'",
                    "resolved": "\"scroll\" | \"stack\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List style"
                },
                "attribute": "list-style",
                "reflect": false,
                "defaultValue": "'stack'"
            },
            "maxVisibleCards": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": "Maximal visible cards"
                },
                "attribute": "max-visible-cards",
                "reflect": false,
                "defaultValue": "12"
            },
            "showAllCount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | undefined",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Overwrite the default show all count."
                },
                "attribute": "show-all-count",
                "reflect": false
            },
            "suppressOverflowHandling": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Suppress the overflow handling of child elements"
                },
                "attribute": "suppress-overflow-handling",
                "reflect": false,
                "defaultValue": "false"
            },
            "i18nShowAll": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "i18n Show all button"
                },
                "attribute": "i-1-8n-show-all",
                "reflect": false,
                "defaultValue": "'Show all'"
            },
            "i18nMoreCards": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "i18n More cards available"
                },
                "attribute": "i-1-8n-more-cards",
                "reflect": false,
                "defaultValue": "'There are more cards available'"
            }
        };
    }
    static get states() {
        return {
            "hasOverflowingElements": {},
            "numberOfOverflowingElements": {},
            "numberOfAllChildElements": {},
            "leftScrollDistance": {},
            "rightScrollDistance": {}
        };
    }
    static get events() {
        return [{
                "method": "collapseChanged",
                "name": "collapseChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fire event when the collapse state is changed by the user"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "showAllClick",
                "name": "showAllClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fire event when the collapse state is changed by the user"
                },
                "complexType": {
                    "original": "{\n    nativeEvent: MouseEvent;\n  }",
                    "resolved": "{ nativeEvent: MouseEvent; }",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }, {
                "method": "showMoreCardClick",
                "name": "showMoreCardClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fire event when the show more card is clicked."
                },
                "complexType": {
                    "original": "{\n    nativeEvent: MouseEvent;\n  }",
                    "resolved": "{ nativeEvent: MouseEvent; }",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "detectOverflow",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=card-list.js.map
