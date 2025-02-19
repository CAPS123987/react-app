import { createContext } from "react";
import Cookies from "universal-cookie";

type GlobalContextProps = {
    usersData: UserData;
    cookies: Cookies;
}

const GlobalContext = createContext<GlobalContextProps>({
    usersData: {},
    cookies: {} as Cookies,
})

export default GlobalContext;