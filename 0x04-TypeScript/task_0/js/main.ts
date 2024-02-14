interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const studentOne: Student = { firstName: "Jane", lastName: "Doe", age: 30, location: "Nairobi" };

const studentTwo: Student = { firstName: "John", lastName: "Doe", age: 30, location: "Kampala" }

const studentsList: Student[] = [studentOne, studentTwo];

function renderTable(data: Student[]) {
    const table = document.createElement('table');

    // create table header, table row
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    // loop through headerKeys array containing column names to be displayed in the header
    const headerKeys = ['First Name', 'Location'];
    headerKeys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    })
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // create table body
    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        // display firstName & location
        const cell1 = document.createElement('td');
        cell1.textContent = item.firstName;
        row.appendChild(cell1);
        const cell2 = document.createElement('td');
        cell2.textContent = item.location;
        row.appendChild(cell2);
        tbody.appendChild(row);
    })
    table.appendChild(tbody);
    // append table to document.body
    document.body.appendChild(table);
}

renderTable(studentsList);