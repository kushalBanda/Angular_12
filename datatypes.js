"use strict";
// String
let lname;
lname = "Kushal";
let newname = lname.toUpperCase();
console.log(newname);
// Number
let age;
age = 25;
age = 25.2;
let dob = "25";
let result = parseInt("25");
console.log(result);
// boolean
let isValid = false;
console.log(isValid);
// array 
let emplist;
emplist = ['Kushal', "Banda"];
let emp = emplist.find((emp) => emp == "Kushal");
console.log(emp);
let numlist;
numlist = [1, 2, 3, 4, 5];
let results = numlist.filter((num) => num > 2);
console.log(results);
let num = numlist.find((num) => num = 2);
console.log(num);
let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
console.log(c);
// Tuple
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
// any
let department;
department = 10;
department = "IT";
console.log(department);
