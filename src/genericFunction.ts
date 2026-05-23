// Generic => generalize kore fela

// Generic Function

// const createArrayWithString = (value: string) =>
//     [value];
// // ekhane ei function 
// // ekta value nilo and shei value ke ekta array baniye dilo

// const createArrayWithNumber = (value: number) =>
//     [value];

// // const createArrayWithUserObject = (value: object) =>{
// //     return [value];
// // }

// const createArrayWithUserObject = (value: {
//     id:
//     number; name: string
// }) => {
//     return [value];
// };


const createArrayWithGeneric = <T>(value: T) => {
    return [value];
}


// const arrayString = createArrayWithString('Apple');
// const arrayNumber = createArrayWithNumber(222);
// const arrayObject = createArrayWithUserObject({
//     id: 123,
//     name: 'Murshed',

// });

const arrayString = createArrayWithGeneric('Apple');
const arrayNumber = createArrayWithGeneric(222);
const arrayObject = createArrayWithGeneric({
    id: 123,
    name: 'Murshed',

});


// Tuple ==> [tuple er moddhe at least 2 ta value thakte hobe]

const createArrayWithTuple = (param1: string,
    param2: number) => [
        param1,
        param2,
    ];

const createArrayTupleWithGeneric = <X, Y>(param1: X,
    param2: Y) => [
        param1, 
        param2
    ];

const res1 = createArrayTupleWithGeneric('Murshed', true);
const res2 = createArrayTupleWithGeneric(222, {name: 'Murshed'});


const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    }
};

const student1 = {
    id: 123,
    name: 'Murshed',
    hasPen: true,
};

const student2 = {
    id: 321,
    name: 'Samia',
    hasCar: true,
    isMarried: true,
};

const result = addStudentToCourse(student1);
console.log(result);