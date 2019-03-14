import { LightningElement, track } from 'lwc';

const columns = [
    {
      label: 'Name',
      fieldName: 'name',
    },
    {
        label: 'Delete',
        type: 'deleteRowButton',
        fieldName: 'id',
        fixedWidth: 70,
        typeAttributes: {
          attrA: { fieldName: 'attrA' },
          attrB: { fieldName: 'attrB' },
        },
    },
];

export default class MyDatatableDemo extends LightningElement {
    @track data = [
      {
        id: '1',
        name: 'Name1',
        attrA: 'A1',
        attrB: 'B1',
      },
      {
        id: '2',
        name: 'Name2',
        attrA: 'A2',
        attrB: 'B2',
      }
    ];
    @track columns = columns;

    deleteRow(event) {
        const { rowId } = event.detail;
        window.console.log(rowId, event);
        // Remove the row
    }
}