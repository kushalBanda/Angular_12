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

