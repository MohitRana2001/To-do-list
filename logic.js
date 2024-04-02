const container = document.getElementsByClassName('container');
const todolist = document.getElementById('to-do-list');
const  addButton = document.querySelector('.add-task');
let taskInput = document.createElement("input");
taskInput.type="text";
let latestRow = null;
// console.log(taskInput);

function createTaskElement (description) {
    
}

function addRow(Description, DueDate, Status){
    let newRow = document.createElement('tr');

    let newTd1=document.createElement("th");
    let newTd2=document.createElement("td");
    let newTd3=document.createElement("td");

    newTd1.innerHTML =  `<th>${Description}</th>`;
    newTd2.innerHTML = `<th>${DueDate}</th>`;
    newTd3.innerHTML = `<th>${Status}</th>`;

    newRow.appendChild(newTd1);
    newRow.appendChild(newTd2);
    newRow.appendChild(newTd3);

    const tbody = document.getElementById('tbody');
    tbody.appendChild(newRow);
    latestRow = newRow;
}

addButton.addEventListener('click', function(){
    addRow()
})

