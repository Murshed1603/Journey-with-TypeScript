// mapped types

// map

const arrayOfNum : number[] = [1, 4, 6];

const arrayOfString : string[] = ["1", "4", "6"]

const arrayOfStringUsingMap : string[] = 
arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

const user = {
    id: 222,
};




type AreaOfNum = { // ekhane AreaOfNum ekta OBJECT  
    height: number;
    width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//     height: string;
//     width: string;
// };

type Area<T> = {
    [key in keyof T] : T[key];
};

/*
T => {height: string; width: string }
*/

const area1 : Area<{height: string; width:
boolean }> = { 
    height: '50',
    width: false,

};
