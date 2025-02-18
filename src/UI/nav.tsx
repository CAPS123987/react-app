import { useEffect, useState } from "react";

const Navigation: React.FC<UserProps> = (props) => {

    const [user, setState] = useState<UserData>({} as UserData);

    useEffect(() => {
        setState(props.usersData);
    }, []);

    return (
        <nav>
            <ul>
                <li>{user?.name}</li>
                <li>{user?.email}</li>
            </ul>
        </nav>
    );
}

export default Navigation;