/* myDatatable.js */
import LightningDatatable from 'lightning/datatable';
import deleteRow from './deleteRow.html';

export default class MyDatatable extends LightningDatatable {
   static customTypes = {
       deleteRowButton: {
           template: deleteRow,
           // Provide template data here if needed
           typeAttributes: ['attrA', 'attrB'],
       }
      //more custom types here
   };
}