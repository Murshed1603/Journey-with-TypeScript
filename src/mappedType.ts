// mapped types

// map

const arrayOfNum : number[] = [1, 4, 6];

const arrayOfString : string[] = ["1", "4", "6"]

const arrayOfStringUsingMap : string[] = 
arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);