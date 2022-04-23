'use strict';

//constructor
let arr = []
function Employee(EmployeeID,FullName,Department,Level,ImageURL) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;
    arr.push(this)
}

    



//function for random salary

function getRndInteger(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Employee.prototype.NewSalary = function(){
    
    if (this.Level==="Senior"){
        this.Salary= getRndInteger(1500, 2000);
        this.Salary=this.Salary *(1-0.075);
    }
    if (this.Level==="Mid-Senior") {
        this.Salary= getRndInteger(1000, 1500);
        this.Salary=this.Salary *(1-0.075);
    }
    if (this.Level ==="Junior") {
        this.Salary= getRndInteger(500, 1000);
        this.Salary=this.Salary * (1 - 0.075);

    }
}
    

Employee.prototype.render = function () {
    document.querySelector(".container").innerHTML+= `<div class="icon">
    <img src=${this.ImageURL} alt="">
    <p><span>Name</span>:${this.FullName}-ID:${this.EmployeeID}</p>
    <p><span>Department</span>:${this.Department}-level:${this.Level}</p>
    <p>${this.selaryNew}</p>
  </div>`
     

let Employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior") ;
let Employee2 = new Employee(1001,"Lana Ali","Finance","Senior");
let Employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let Employee4 = new Employee(1003,"Safi Walid	","Administration","Mid-Senior");
let Employee5 = new Employee(1004,"Omar Zaid	","Development","Senior");
let Employee6 = new Employee(1005,"Rana Saleh","Development","Junior");
let Employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

renderall ();
function renderall ()
for(let i=0;i<arr.length;i++){
    arr[i].selary();
    arr[i].render();
  }

function addEvent () {
    const form = document.querySelector("form");
       const submit = document.querySelectorAll(".submit");
}





Employee1.NewSalary() ;
Employee1.render();
Employee2.NewSalary();
Employee2.render();
Employee3.NewSalary() ;
Employee3.render();
Employee4.NewSalary() ;
Employee4.render();
Employee5.NewSalary() ;
Employee5.render();
Employee6.NewSalary() ;
Employee6.render();
Employee7.NewSalary() ;
Employee7.render();


}

