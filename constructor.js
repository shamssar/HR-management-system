'use strict';

let employeeForm = document.getElementById('employeeForm');
let employeesSection = document.getElementById('Employees');

let allEmployees = []
update();

function Employee(fullName, department, level, imgURL) {
    this.id = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    this.imgURL = imgURL;
    this.name = this.fullName.split(' ');
    
}

Employee.prototype.calcSalary = function (min, max) {
  let salary = Math.floor(Math.random() * (max - min)) + min;
  return (salary);
}

Employee.prototype.calcNetSalary = function (salary) {
  return (salary - (7.5 / 100 * salary));
}

Employee.prototype.giveSalary = function () {
  let salary;
  if (this.level == "Senior")
      salary = this.calcSalary(1500, 2000);
  else if (this.level == "Mid-Senior")
      salary = this.calcSalary(1000, 1500);
  else
      salary = this.calcSalary(500, 1000);

  this.salary = Math.ceil(this.calcNetSalary(salary));
  
}

Employee.prototype.generateId = function () {

  let id = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  this.id = id;
}
function render(allEmployees) {

  employeesSection.innerHTML = '';

  for (let i = 0; i < allEmployees.length; i++) {

      let div = document.createElement('div');
      employeesSection.appendChild(div);

      let img = document.createElement('img');
      div.appendChild(img);
      img.setAttribute('src', allEmployees[i].imgURL);
      img.setAttribute('alt', allEmployees[i].fullName);

      let h3 = document.createElement('h3');
      div.appendChild(h3);
      h3.textContent = `Name:${allEmployees[i].fullName} - ID : ${allEmployees[i].id}`;

      let p = document.createElement('p');
      div.appendChild(p);
      p.textContent = `Deparment:${allEmployees[i].department} - Level:${allEmployees[i].level}`;

      let h5 = document.createElement('h5');
      div.appendChild(h5);
      h5.textContent = allEmployees[i].salary;
  }
}

function handelSubmit(event) {

  event.preventDefault();

  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let imgURL = event.target.imgURL.value;

  let newEmployee = new Employee(fullName, department, level, imgURL);
  newEmployee.generateId();
  newEmployee.giveSalary();
  allEmployees.push(newEmployee);
  let jsonArr=jsonArray(allEmployees)
  saveToLocalS(jsonArr);

  render(Local());
}

function jsonArray(arr) {
  let jsonArray = JSON.stringify(arr);
  return jsonArray;
}

function saveToLocalS(jsonArray) {
  localStorage.setItem('allEmployees',jsonArray);
}

function Local() {
  let jsonArray = localStorage.getItem('allEmployees');
  let arr = JSON.parse(jsonArray);
  if (arr !== null)
      return arr;
  else
      return [];

}


function update() {
  if (allEmployees.length == 0) {
      let arr = Local();
      if (arr.length != 0)
          allEmployees = arr;
  }

}


render(Local());

employeeForm.addEventListener('submit', handelSubmit);