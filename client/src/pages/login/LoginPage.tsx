import { useContext, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import GlobalContext from "../../context";
import { usePageTitle } from "../../hooks";
import { userEndpoint } from "../../proxy/proxy";

const LoginPage : React.FC = () => {
    const globalContext = useContext(GlobalContext);

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    usePageTitle('Přihášení');

    const login = (event : React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        event.preventDefault();

        userEndpoint.loginUser<UserData>(userName, userEmail).then((user) => {
            globalContext.userData = user;
            //window.location.href = '/';
        });

    }

    return (
        <div>
            <h1>Login page</h1>

            <Form>
                <label>
                    Name:
                    <input type="text" name="name" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" onChange={e => setUserEmail(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" onClick={e => login(e)}/>
            </Form>
        </div>
    );
}

export default LoginPage;