import { usePageTitle } from "../../hooks"
import { useContext, useEffect } from "react";
import GlobalContext from "../../context";
import Loader from "../../UI/loader";

const LogoutPage : React.FC = () => {
    const globalContext = useContext(GlobalContext);

    usePageTitle('Odhlášení');

    useEffect(() => {
        globalContext.cookies.remove('userName');
        globalContext.cookies.remove('userEmail');
        globalContext.usersData = {
            name: '',
            email: '',
            isLogged: false
        }
        window.location.href = '/';
    }, []);


    return (
        <div>
            <Loader />
            <span>Odhlašování...</span>
        </div>
    );
}

export default LogoutPage;