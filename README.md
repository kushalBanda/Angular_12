# Angular 12 Basics

## Basic Commands 

``` bash
npm init
```
* This command will create a new `package.json` file in the current directory. 
* This will keep a track of all the packages, and the packages being installed in the workspace.

``` bash
npm i typescript
``` 
* This command will install the typescript package in the current workspace.
* This will add the typescript package to the `package.json` file.

``` bash 
npm install -g typescript
```
* This command will install the typescript package globally in the system.

``` bash
tsc --init
```

```bash 
tsc
```
* This command will compile the typescript code into javascript code.


## Single Page Applications
* SPA stands for Single Page Applications.
* You can use modern frameworks like Angular, React or Vue to create SPA.
* SPA does not make requests to server for every URL requests.

### How Angular Helps
* Angular has Routing functionality to create SPA.
* Angular also offers SSR (Server Side Rendering) which supports SPA. 
  
# Data Types
* In TypeScript, you can use the following data types:
  * string
    ``` bash 
        let lname : string;

        lname = "Kushal"

        let newname = lname.toUpperCase()
        console.log(newname)
    ```
  * number 
    ``` bash 
        let age: Number;    

        age = 25;
        age = 25.2;

        let dob = "25";

        let result = parseInt("25")
        console.log(result)
    ```
  * boolean
   ``` bash 
        let isValid: boolean = false;
        console.log(isValid);
   ```
  * array
    ```bash 
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
    ``` 
  * enum
    ``` bash 
        const enum Color {
        Red,
        Green,
        Blue
    }

    let c: Color = Color.Blue;
    console.log(c)
    ``` 
  * tuple
    ``` bash
        let swapNumbs: [number, number];

        function swapNumbers(num1: number, num2: number) : [number, number] {
            return [num2, num1];
        }

        swapNumbs = swapNumbers(10, 20);
        console.log(swapNumbs[0]);
        console.log(swapNumbs[1]);
    ```
  * any 
    ``` bash
        let department: any;
        department = 10;
        department = "IT";

        console.log(department)
    ``` 
  * void
  * never


# Funtions
* Different ways to write funcions. 
* Generic Function
* Optional Parameters
* Required Parameters
* Rest Parameters

``` bash 
function add (num1 : number, num2: number, num3?: number) : number {
    return num1 + num2;
}
console.log(add(2 , 3));

const sub = (num1: number, num2: number, num3 = 10) : number => num1 - num2;
console.log(sub(2 , 3, 5));

const mult = function(num1: number, num2: number): number {
    return num1 * num2
}
console.log(mult(2,3));

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, 4, 5, 6, 7, 8, 9, 10))

// Generics
function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items)
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
console.log(concatResult)

let concatString = getItems<string>(["a", "b", "c", "d", "e"])
console.log(concatString)

```

# Classes 
* Creating Classes
* Class Properties and Constructor 
* Class methods
* Creating Instance of Class
* Member Visibility
* Static Members

``` bash 
class Employee {
    id: number;
    protected name: string;
    address: string;

    constructor(id: number, name: string, address: string){
        this.address = address;
        this.id = id;
        this.name = name;
    }
    getNameWithAddress() : string {
        // return this.name + "-" + this.address;
        return `${this.name} stays in ${this.address}`;
    }
}

let john = new Employee(1, "John", "Highway 71");
console.log(john);

let address = john.getNameWithAddress();
console.log(address);


class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
}

let mike = new Manager(2, "Mike", "Cherise Drive")
console.log(mike.getNameWithAddress());
```

# Interfaces
* Creating Interfaces
* Using Interfaces as Types
* Implementing Interfaces
* Extending Interfaces
* Optional Properties
* Object destructuring
* Array destructuring

``` bash
export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let {name: UserName, email: userlogin}:  User = {name: "John", id: 1, email: ""}

let user: User = {name: "John", id: 1, email: ""};

interface Employee extends User {
    salary: number;
}

let employee: Employee = {name: 'John', id: 1, email: "", salary: 1000};

export interface Login {
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
    {name: "John1", id: 1, email: ""},
    {name: "John2", id: 2, email: ""},
    {name: "John3", id: 3, email: ""},
];


console.log(user1)
console.log(user2)
console.log(restUsers)

let result = restUsers.filter(user => user.id > 2);
console.log(result)
```

# Angular
### Binding Syntax
* Interpolation
* Property Binding
* Event Binding

## Directives 
* Introduction
* Types of Directives
* Built-in Directives

- Directives are use to change the behavior and apperance of DOM element. (A DOM element is a placeholder element that can be used to add HTML custom attributes, tags, or text to create an element on a canvas)
- Directives can implement all lifecycle hooks.
- Directives can not havve template.

### Types of Diretives
* Structural Directives 
* Attribute Directives

### Built-in Directives
- *ngIf
- *ngFor
- *ngSwitch
- ngClass
- ngStyle

**Note:** Structural Directives can modify your DOM.

## Pipes
* Pipes are used for data transformation.
* Pipes don't change actual object. 

### Built-in Pipes
* DatePipe
* UpperCasePipe
* LowerCasePipe
* CurrencyPipe
* DecimalPipe
* PercentPipe
* JsonPipe
* SlicePipe
* AsyncPipe