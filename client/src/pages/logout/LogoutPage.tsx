import { usePageTitle } from "../../hooks"
import { useContext, useEffect } from "react";
import GlobalContext from "../../context";
import Loader from "../../UI/loader";
import { userEndpoint } from "../../proxy/proxy";

const LogoutPage : React.FC = () => {
    const globalContext = useContext(GlobalContext);

    usePageTitle('Odhlášení');

    useEffect(() => {
        userEndpoint.logoutUser<UserData>().then((user) => {
            globalContext.userData = user;
            window.location.href = '/';
        });
    }, []);


    return (
        <div>
            <Loader />
            <span>Odhlašování...</span>
        </div>
    );
}

export default LogoutPage;