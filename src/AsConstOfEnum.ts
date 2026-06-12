// as const assertion =>



// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer",
// };

const UserRoles = {
    Admin : "ADDMIN",
    Editor: "EDITOR", // javascript e object er bodole colon use korte hobe
    Viewer: "VIEWER",
} as const;

// UserRoles.Admin = 'Mon chacche';

// 1. typeof operator
// 2. keyof operator

// const user = {
//     id: 22,
//     name: 'Mezba'
// }
// typeof user; // eta likhle nicher ta hobe ==>

// type user = {
//     id: number,
//     name: string,
// };


const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);