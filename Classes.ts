// interface Address {
//     street: string;
//     city: string;
//     state: string;
//     pin: string;
// }

// class Employee {
//     id: number;
//     protected name: string;
//     address: Address;

//     constructor(id: number, name: string, address: Address){
//         this.address = address;
//         this.id = id;
//         this.name = name;
//     }
//     getNameWithAddress() : string {
//         // return this.name + "-" + this.address;
//         return `${this.name} stays in ${this.address}`;
//     }
// };

// let john = new Employee(1, "John", {
//     street: "ABC",
//     city: "Bangalore",
//     state: "Karnataka", 
// });
// console.log(john);

// let address = john.getNameWithAddress();
// console.log(address);


// class Manager extends Employee {
//     constructor(id: number, name: string, address: string) {
//         super(id, name, address);
//     }
// }

// let mike = new Manager(2, "Mike", "Cherise Drive")
// console.log(mike.getNameWithAddress());