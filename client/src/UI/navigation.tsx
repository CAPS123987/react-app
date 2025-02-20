import { useContext, useEffect, useState } from "react";
import Toggle from "../components/toggle";
import "../styles/nav.css";
import UserInfo from "../components/userInfo";
import Cookies from "universal-cookie";
import GlobalContext from "../context";
import { Link, Outlet } from "react-router-dom";

const cookies = new Cookies();

const Navigation: React.FC = () => {

    const globalContext = useContext(GlobalContext);

    return (
        <>
        <nav className="navigation">
            <Link to={'/'} className="navHomeLink"><h1>App :)</h1></Link>
            <Toggle className="profileToggle" text="Váš profil">
                {globalContext.usersData.isLogged?
                <>
                <UserInfo usersData={globalContext.usersData}/>
                <Link to={'/logout'}><span>Odhlásit se</span></Link>
                </>
                :
                <Link to={'/login'}><span className="login">Přihlásit se</span></Link>}
            </Toggle>
        </nav>
        <Outlet />
        </>
    );
}

export default Navigation;