// union => '|'

type UserRole = 'admin' | 'user' | 'guest'
//type jeta define kortesi sheta amra
// convvention onujayi boro haater okkhore likhbo
// convention mane holo => code lekhar shundor/structured niyom

const getDasboard = (role : UserRole) =>{
    if(role == 'admin'){
        return 'Admin Dashboard'
    }
    else if(role == 'user'){
        return 'User Dashboard'
    }
    else{
        return 'Guest Dashboard'
    }
};

getDasboard('guest');

// intersection => '&'

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};
type Manager = {
    designation: string;
    teamSize: number;
};
type EmployeeManager = Employee & Manager
// type define korar shomoy shudhu ekta 
// intersection use korte hobe
// double && use kora jabe na
const MurshedAhmed: EmployeeManager = {
    id: '123',
    name: 'Murshed Ahmed',
    phoneNo: '01881793409',
    designation: 'Manager',
    teamSize: 50,
};