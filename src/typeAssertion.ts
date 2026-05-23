// typeScript er cheye beshi bujha manei Type Assertion
// typeScript ei khetre amar define kora type kei thik bole dhore nibe

// let anything: any;

// anything = "25";

// (anything as string)

const kgToGmConverter = (input: string | number): string | number | undefined => {
    if (typeof input === 'number') {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(" "); // This is destructuring of Array
        return `Converted Output Is : ${Number(value) * 1000}`;

    }

};
const result1 = kgToGmConverter(2) as number;
console.log({ result1 });
const result2 = kgToGmConverter('2 kg');
console.log({ result2 });


type customerError = {
    message: string;
};

try {

} catch (err) { // ei catch block er moddhe error thake
    console.log((err as customerError).message);
}