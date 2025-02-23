import {deleteProcedure, getAsync, getProcedure, postProcedure} from "./proxyMethodes";


export const userEndpoint = {
    getUser: <T>() => getProcedure<T>("user/get"),
    loginUser: <T>(name: string, email : string) => getProcedure<T>("user/login", {name, email}),
    logoutUser: <T>() => postProcedure<T>("user/logout"),
}