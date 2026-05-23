// // spread => chorano jinish
// // rest => shei chorano jinish gula ekshathe kora

// const favFruits = ["Apple", "Guava", "Pineapple"];

// const summerFavFruits = ["Coconut", "Mango", "Litchi"];

// const wholeYearFavFruits = ["Grapes", "Orange", "Banana"];

// // favFruits.push(...summerFavFruits, ...wholeYearFavFruits);
// // this is also correct
// favFruits.push(...summerFavFruits);
// favFruits.push(...wholeYearFavFruits);


// console.log(favFruits);

// const user = {name: 'Murshed Ahmed', phone: '01881793409'};

// const otherInfo = {hobby: 'fishing', favColor: 'black'};

// const userInfo = {...user, ...otherInfo};

// console.log(userInfo);


// rest operator ==>>

// const sendInvite = (friend1:string, friend2:string, 
//     friend3:string)=>
//         {
            
//     console.log(`Sent Invitattion To ${friend1}`);
//     console.log(`Sent Invitattion To ${friend2}`);
//     console.log(`Sent Invitattion To ${friend3}`);
// };
// sendInvite('Nuhin', 'Fatin', 'Argha');

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) =>
        console.log(`Sent Invitattion To ${friend}`)
    );

};
sendInvite('Murshed', 'Fatin', 'Nuhin', 'Argha');
