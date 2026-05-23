// object destructuring =>


const user = {
    id: {
        studentID: 123,
        voterID: 786,
    },
    name: {
        firstName: 'Murshed',
        middleName:'Samia',
        lastName: 'Ahmed'
    },
    gender: 'male',
    favColor: 'black'
};

// const myFavColor = user.favColor;
// const myMiddleName = user.name.middleName;

//const {favColor : myFavColor, name : myName} = user; 
// // here, myFavColor is called 'name aliasing'.
// destructuring korar shomoy type set kora jabe name
// tahole sheta hoye jabe => NAME aliasing
// console.log(myFavColor);
const {name:{middleName: myMiddleName},
} = user;
// console.log(myMiddleName);


// array destructuring =>

const friends = ['Nuhin', 'Fatin', 'Argha'];

const[, balerFrnd,  ] = friends;

console.log(balerFrnd);

/// hi there