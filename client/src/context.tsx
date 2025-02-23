import { createContext } from "react";
import Cookies from "universal-cookie";

type GlobalContextProps = {
    userData: UserData;
}

const GlobalContext = createContext<GlobalContextProps>({
    userData: {},
})

export default GlobalContext;