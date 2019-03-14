/* datatableDeleteRowBtn.js */
import { LightningElement, api } from 'lwc';
// Accessibility module
import { baseNavigation } from 'lightning/datatableKeyboardMixins';
// For the render() method
import template from './datatableDeleteRowBtn.html';

// export default class DatatableDeleteRowBtn extends baseNavigation(LightningElement) {
export default class DatatableDeleteRowBtn extends LightningElement {
    @api rowId;
    @api attrA;
    @api attrB;

    // Required for mixins
    render() {
        return template;
    }

    fireDeleteRow() {
      window.console.log(baseNavigation);
        const event = CustomEvent('deleterow', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                rowId: this.rowId,
            },
        });
        this.dispatchEvent(event);
    }
}