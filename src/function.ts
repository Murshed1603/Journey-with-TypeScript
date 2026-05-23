// funtion() =>
// 1. Arrow Function
// 2. Normal Function

function addNumber(num1:number, num2:number):number{
    return num1+num2;
}

console.log(addNumber(2, 3));

const addArrow = (num1:number, num2:number): number =>
    num1+num2;
console.log(addArrow(3, 3));

// object er moddhe function define kora hole taake bole method

const poorUser = {
    name: "Murshed",
    balance: 0,
    addBalance(value: number) : number{
    //    return this.balance + value
    const totalBalance = this.balance + value;
    return totalBalance;
    },
};

poorUser.addBalance(100000);

// Loop er moddhe function define kora => Call Back Function

const arr:number[] = [1, 5, 8];

const sqrArr = arr.map((elem: number): number =>
    elem*elem);