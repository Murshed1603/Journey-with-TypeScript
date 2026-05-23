// as const assertion =>



// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer",
// };

const UserRoles = {
    Admin : "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};

UserRoles.Admin = 'Mon chacche';


const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);