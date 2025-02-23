
export type UserData = {
    name?: string;
    email?: string;
    isLogged?: boolean;
};

export type UserProps = {
    usersData: UserData;
}

export const hostUser : UserData = {
    name: "guest",
    email: "",
    isLogged: false
}