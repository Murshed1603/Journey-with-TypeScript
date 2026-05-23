// array, object
// tuple

let bazarList : string[] = ['eggs', 'milk', 'sugar'];

bazarList.push('fish');
// bazarList.push(true);

// bazarList.push(12);

let mixedArray : (string | number)[]= ['apple', 12, 'mango', 10, 'watermelon', 1];

mixedArray.push('chicken', 1);

// Tuple
let HusbandAndWife : [string, string] = ["Murshed", "Samia"];
HusbandAndWife.push("Ahmed","Khan");

let destination : [string, string, number] = ["Dhaka", "Cox Bazar", 5];
destination.push("Sylhet", 'Khulna', 6);

// reference type => object

const user:{
    organization: "Google";
     //Value ke type hishebe declare kora holo 
     // jate ei value ar change kora na jay
     // eke bole LITERAL TYPE
    firstName: string;
    middleName?: string; // declared optional
    lastName: string;
    isMarried: boolean;
} = {
    organization: 'Google',
    firstName: "Murshed",
    //middleName: "Samia",
    lastName: "Ahmed",
    isMarried: true
}
// user.organization = "Murshed Tech LTD."
console.log(user);

