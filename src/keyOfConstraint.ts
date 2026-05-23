// keyOf => eta ekta type operator

type RichPeoplesVehicle = {
    car: string; // key: value;
    bike: string; // key: value;
    cng: string; // key: value;
    ship: string;
};

type MyVehicle1 = "bike" | "car" | "cng" | "ship"; // string literal type
// string jodi type er moto achoron kore tahole taake bole
// string literal type
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "ship";

// keyOf Constraint =>


type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
};

const user : User = {
    id: 22, // key: value,
    name: 'Murshed', // key: value,
    address: {
        city: 'Dhaka'
    },
};

// const myName = user.name;
// // const myName = user["name"];
// // const myId = user.id;
// const myId = user["id"]; // user.id ke evabeo lekha jay
// const myAddress = user["address"];

// console.log({myId, myName, myAddress});



const getPropertyFromObject = <X>(obj: X, key: keyof X) => {
    return obj[key];
};
const result1 = getPropertyFromObject(user, "name");
console.log(result1);

const product = {
    brand: "HP",
};

const student = {
    id: 1234,
    class: "Four",

};

const result2 = getPropertyFromObject(product, "brand");

const result3 = getPropertyFromObject(student, "id");