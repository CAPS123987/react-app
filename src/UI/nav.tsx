import { useEffect, useState } from "react";
import Toggle from "../components/toggle";
import "../styles/nav.css";
import UserInfo from "../components/userInfo";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Navigation: React.FC<UserProps> = ({usersData}) => {

    const [user, setState] = useState<UserData>({} as UserData);

    const loginRandom = () => {
        const id = Date.now();
        cookies.set('userName', 'User' + id, { path: '/' });
        cookies.set('userEmail', 'user' + id + '@example.com', { path: '/' });
        window.location.reload();
    }

    return (
        <nav className="navigation">
            <h1>App :)</h1>
            <Toggle className="profileToggle" text="Váš profil">
                {usersData.isLogged?<UserInfo usersData={usersData}/>:<span className="login" onClick={loginRandom}>Přihlásit se</span>}
            </Toggle>
        </nav>
    );
}

export default Navigation;