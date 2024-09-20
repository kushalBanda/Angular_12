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

