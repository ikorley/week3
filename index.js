// Definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
  console.log("Welcome " + name + ". Your monthly Salary is " + Salary);
}

// Definition of the function EmpSkills
function EmpSkills(skill) {
  console.log("Employee skill is: " + skill);
}

console.log("This is my first program");

var EmpName = "John";
var EmpSalary = 50000;

// Calling the function EmployeeInfo
EmployeeInfo(EmpName, EmpSalary);

// Calling the function EmpSkills
EmpSkills("java");

const student = require('./studentinfo');
const Person = require('./person');

// Using student module
console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log(student.Studentgrade());
console.log("Grade is " + student.Studentgrade(55));

// Using person module
const person1 = new Person("Jim", "USA", "myemail@gmail.com");
console.log("Using Person Module", person1.getPersonInfo());

console.log("Program ended");



os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")