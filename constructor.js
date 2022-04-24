'use strict';

//constructor
let arr = []
function Employee(EmployeeID, FullName, Department, Level, ImageURL) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;
    arr.push(this);
}


Employee.prototype.NewSalary = function () {

    if (this.Level === "Senior") {
        this.Salary = getRndInteger(1500, 2000);
        this.Salary = this.Salary * (1 - 0.075);
    }
    if (this.Level === "Mid-Senior") {
        this.Salary = getRndInteger(1000, 1500);
        this.Salary = this.Salary * (1 - 0.075);
    }
    if (this.Level === "Junior") {
        this.Salary = getRndInteger(500, 1000);
        this.Salary = this.Salary * (1 - 0.075);

    }
}


Employee.prototype.printing = function () {

    for (var i = 0; i < arr.length; i++) {
        let section = document.getElementById("section");
        section = document.createElement("section");
        document.body.appendChild(section);

        var imageEI = new image();
        imageEI.src = arr[i].image;
        section.appendChild(imageEI);

        let fullName = document.createElement("p");
        fullName.textContent = arr[i].fullName;
        section.appendChild(fullName);

    }

    let departmentAndLevel = document.createElement("p");
    departmentAndLevel.textContent = "Department : " + arr[i].department + "      " + "Level :" + arr[i].level;
    section.appendChild(departmentAndLevel);

}

formid.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

}


let newUser = new Employee(generateID(), fullName, department, level, imgURL);
newUser.printing();
newUser.NewSalary();
saveData(arr);

function generateID() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}

let Employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let Employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let Employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let Employee4 = new Employee(1003, "Safi Walid	", "Administration", "Mid-Senior");
let Employee5 = new Employee(1004, "Omar Zaid	", "Development", "Senior");
let Employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
let Employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

renderAll();
// local storage:
function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("employee", stringfiyData);
}

function getData() {
    let retrievedData = localStorage.getItem("employee");
    let arrayData = JSON.parse(retrievedData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++)
            new Employee (arrayData[i].name, arrayData[i].department, arrayData[i].level, arrayData[i].image, arrayData[i].NewSalary);


        getData();







        //function for random salary

        function getRndInteger(min, max) {

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function renderall() {
            for (let i = 0; i < arr.length; i++) {
                arr[i].selary();
                arr[i].render();
            }
        }
        function addEvent() {
            const form = document.querySelector("form");
            const submit = document.querySelectorAll(".submit");
        }



    }

}


getData();





