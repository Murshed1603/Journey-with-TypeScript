type User = {
    name: string;
    age: number;
};

// interface : object type er data type er khetre use kora jay
// example : 'array', 'object'


interface IUser {
    name: string;
    age: number;
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role; // eta holo type intersection
// evabe 2 ta type ke ekshathe kore tader ke boro kora hoy

// object er khetre 'interface' & 'type' 2 tai use kora jay
interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
}

const user1: IUserWithRole = {
    name: 'Murshed',
    age: 25,
    role: 'admin',
};

const user2: IUserWithRole = {
    name: 'Samia',
    age: 24,
    role: 'user',
};

type IsAdmin = boolean

// primitive type er khetre amra interface declare korte parbo na
// karon interface er shuru hoy curly brackett diye 
const isAdmin: IsAdmin = false


// function =>

type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;

}

const add: IAdd = (num1, num2) => num1 + num2;


type Friends = string[];


interface IFriends {
    [index: number]: string; // index signature
}

const friends: IFriends = ['A', 'B', 'C'];