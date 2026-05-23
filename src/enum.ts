// enum => set of fixed string literal ke ek jaygay rakhe

// type UserRoles = "Admin" | "Editor" | "Viwer";

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
};

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);