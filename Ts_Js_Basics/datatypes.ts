// String
let lname : string;

lname = "Kushal"

let newname = lname.toUpperCase()
console.log(newname)

// Number
let age: Number;

age = 25;
age = 25.2;

let dob = "25";

let result = parseInt("25")
console.log(result)

// boolean
let isValid: boolean = false;
console.log(isValid);

// array 
let emplist : string[];

emplist = ['Kushal', "Banda"];
let emp = emplist.find((emp) => emp == "Kushal")
console.log(emp)

let numlist : Array<number>;
numlist = [1,2,3,4,5]
let results = numlist.filter((num)=> num > 2);
console.log(results)

let num = numlist.find((num)=> num = 2)
console.log(num)
let sum = numlist.reduce((acc, num) => acc + num)
console.log(sum)

// enum
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;
console.log(c)

// Tuple
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number) : [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

// any
let department: any;
department = 10;
department = "IT";

console.log(department)