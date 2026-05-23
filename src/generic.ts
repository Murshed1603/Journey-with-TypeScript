// Generic => dynamically generalize kora

// This file code concept is about ==>
// Generic with Type Alias



type GenericArray<T> = Array<T>;
// ekhane <T> lekha ekta code convention
// <T> diye ekhane value bujhay


// const friends : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
const friends: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

// const rollNumbers: number[] = [1, 2, 3];
const rollNumbers: GenericArray<number> = [1, 2, 3];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true]; // ekhane Array holo object

// object er khetre Generic er usage=> ( ''Array of Object'' )

type User = {name: string, age: number};

const userList: GenericArray<User> = [
    // eta array of object holeo, <> er vitor object lekha jabe na
    // specific vabe type define kore dite hobe
    {
        name: 'Mr. X',
        age: 22,
    },
    {
        name: 'Mr. Y',
        age: 21,
    },
];
console.log(userList);






const sqrFunc = (value: number) => { // ekhane 'value' parameter hishebe kaj kortese
    return value * value;
}
console.log(sqrFunc(6));

type Coodinates<X, Y> = [X, Y];
// const coordinates1: [number, number] = [20, 30];
const coordinates1: Coodinates<number, number> = [20, 30];

// const coordinates2: [string, string] = ['Murshed', 'Samia'];
const coordinates2: Coodinates<string, string> = ['Murshed', 'Samia'];

