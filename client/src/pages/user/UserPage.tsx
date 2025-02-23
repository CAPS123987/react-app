import { useContext } from "react";
import GlobalContext from "../../context";
import { usePageTitle } from "../../hooks";

const UserPage:React.FC = () => {
    const globalContext = useContext(GlobalContext);

    usePageTitle('Uživatel');

    return (
        <div>
            <span>This is User page app content</span>
            <p>{globalContext.userData.isLogged ? `Logged as: ${globalContext.userData.name}` : 'Not logged in'}</p>
        </div>
    );
}

export default UserPage;