// type alias ==> ektta ttype ke naam diye taake re-use kora

type User = {
    id:number,
    name:{
        firstName:string;
        lasttName:string;
    };
    gender: 'male' | 'female', 
    // this is called ---^
    // type literal
    contactNo: string,
    address:{
        division: string;
        city: string;
    };
}






const user1: User = {
    id: 123,
    name:{
        firstName: 'Murshed',
        lasttName: 'Ahmed',
    },
    gender: 'male', // ekhane type literal use kora holo
    contactNo: '01881793409',
    address: {
        division: 'Dhaka',
        city: 'Tangail',
    },

};

const user2: User = {
    
    id: 321,
    name:{
        firstName: 'Samia',
        lasttName: 'Khan',
    },
    gender: 'female', // ekhane type literal use kora holo
    contactNo: '01881793000',
    address: {
        division: 'Dhaka',
        city: 'Tangail',
    },

};

console.log(user1);
console.log(user2);


 type IsAdmin = true;
 const isAdmin : boolean = true;

 type Name = string;
 const myName : Name = "Me. X";

 // function er moddhe Type Alias er usage ==>

 type AddFunc = (num1:number, num2:number) =>
    number
 const add : AddFunc = (num1, num2) => num1 + num2;
 console.log(add(3, 4));



