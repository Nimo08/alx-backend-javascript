/// <reference path="./crud.d.ts" />

import { RowID, RowElement} from './interface';
import * as CRUD from 'crud';

// object: row with firstName & lastName
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}
// assign row to insertRow()
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
    ...row,
    age: 23
}
// call updateRow() & deleteRow()
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);