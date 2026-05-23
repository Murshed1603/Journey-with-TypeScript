

interface Developer<T, X = null> {
               // ekhane X er default value null dewa ache
               // tar mane holo, X er value jodi konota na dei
               // tahole ager dewa number er shathe null receive korbe
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };

    smartWatch: T;
    bike ?: X;
}

interface BrandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface AppleWatch {
    heartRate: string;
    // stopWatch: boolean;
    callSupport: boolean;
    calculator: boolean;
    AIfeature: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch, 
{brand: 'Yamaha', engineCapacity: '200CC'
}> = {
    name: 'Mr. Poor',
    salary: 20,
    device: {
        brand: 'Lenovo',
        model: 'A21',
        releasedYear: '2020',

    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,

    },

};

const richDeveloper: Developer<AppleWatch> = {
                          // Developer<T, X = null>
    name: 'Mr. Rich',
    salary: 200,
    device: {
        brand: 'HP',
        model: 'X34',
        releasedYear: '2026',

    },

    smartWatch: {
        heartRate: '200',
        // stopWatch: true,
        callSupport: true,
        calculator: true,
        AIfeature: true,
        

    },
    bike : null,


};
console.log(poorDeveloper);
console.log(richDeveloper);

const add = (num1: number, num2: number = 0) =>
    num1+num2; // ekhane num2 er default value 0 dewa ache
               // tar mane holo, 2nd number jodi konota na dei
               // tahole ager dewa number er shathe 0 add korbe
add(2,5);
add(2, );