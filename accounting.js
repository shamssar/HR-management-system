'use strict';
let tableElement = document.getElementById("tableID");
let sum ;
let average;
getData();
console.log(length);
average = sum /length;
console.log(average);


// getData();


function getData() {
    let retrievedData = localStorage.getItem("emplo");
    let arrayData = JSON.parse(retrievedData);


    length=arrayData.length

    for (let i = 0; i < arrayData.length; i++) {
        let name = arrayData[i].full_Name
        let id = arrayData[i].employeeId;
        let department = arrayData[i].department;
        let level = arrayData[i].level;
        let salary = arrayData[i].salary;
        let tr = document.createElement("tr");
        tableElement.appendChild(tr);
        sum = arrayData[i].salary + sum;

       
        let idTd = document.createElement("td")
        idTd.textContent = id;
        tr.appendChild(idTd);

        let departmentTd = document.createElement("td")
        departmentTd.textContent = department;
        tr.appendChild(departmentTd);

        let levelTD = document.createElement("td")
        levelTD.textContent = level;
        tr.appendChild(levelTD);

        let salaryTD = document.createElement("td")
        salaryTD.textContent = salary;
        tr.appendChild(salaryTD);
    }
}