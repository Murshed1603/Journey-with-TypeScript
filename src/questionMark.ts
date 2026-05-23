// ? : ternary opeator => works in decison making
// ternary operator null/undefined/empty string er moddheo kaj kore

// ?? : nullish coalacing operator => null/undefined kono value thakle
// shetar upor vitti kore ei NULLISH coalacing operator ekta 
// default value set korbe.

// ?. : optional chaining


const eligibleForMarriage = (age: number) => {
    // if (age >= 21) {
    //     console.log('You are eligible for marriage.');
    // } else {
    //     console.log('You are not eligible for marriage.');

    // }
    const result = age >= 21 ? 'You are eligible for marriage.' :
        'You are not eligible for marriage.'
    // Ternary operator was used here.
    //return result;
    console.log(result);

};
eligibleForMarriage(23);
eligibleForMarriage(19);


const userTheme = undefined; // ekhane null dileo cholbe.but empty string dewa jabe na

const selectedTheme = userTheme ?? 'Light Theme';
// ekhane jodi userTheme null / undefined hoy taholei shudhu matro 
// coalacing operator Light Theme ke default theme hishebe set korbe
console.log(selectedTheme);

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated :
    'You are guest !';
const resultWithNullish = isAuthenticated ?? 'You are guest !';

console.log({ resultWithTernary }, { resultWithNullish });


// Optional Chanining
// ekhane "PROPERTY" er kaj kora hocche
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Uttara",
  },
};
const postalCode = user?.address?.postalCode; 
// This is optional chaining
// Try to access postalCode, but if user or address is 
// missing/null/undefined, do not crash. Just return undefined
console.log(postalCode);
