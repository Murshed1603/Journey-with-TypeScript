// constraint => er mane holo kono ekta rules chalu kore dewa
// mane holo ==> strict rules dewa

type Student = {
    id: number,
    name: string, age: number, DOB: string
}

const addStudentToCourse = <T extends Student
>(studentInfo: T) => {
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
    age: 22,
    DOB: '3rd May',
    hasCar: true,
    isMarried: true,
};

const student3 = {
    id: 222,
    name: 'Murshed',
    hasWatch: true,

    //     TypeScript understands:

    // T = {
    //     hasWatch: boolean;
    // }
}

const result = addStudentToCourse(student2);
console.log(result);