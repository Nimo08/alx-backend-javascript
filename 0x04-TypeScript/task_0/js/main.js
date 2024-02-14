;
var studentOne = { firstName: "Jane", lastName: "Doe", age: 30, location: "Nairobi" };
var studentTwo = { firstName: "John", lastName: "Doe", age: 30, location: "Kampala" };
var studentsList = [studentOne, studentTwo];
function renderTable(data) {
    var table = document.createElement('table');
    // create table header, table row
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    // loop through headerKeys array containing column names to be displayed in the header
    var headerKeys = ['First Name', 'Location'];
    headerKeys.forEach(function (key) {
        var th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    // create table body
    var tbody = document.createElement('tbody');
    data.forEach(function (item) {
        var row = document.createElement('tr');
        // display firstName & location
        var cell1 = document.createElement('td');
        cell1.textContent = item.firstName;
        row.appendChild(cell1);
        var cell2 = document.createElement('td');
        cell2.textContent = item.location;
        row.appendChild(cell2);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    // append table to document.body
    document.body.appendChild(table);
}
renderTable(studentsList);
