import { Link } from "react-router-dom";

type Props = {
    usersData: UserData;
}

const UserInfo: React.FC<Props> = ({usersData}) => {
    return (<>
        <Link to="/user"><span>{usersData.name}</span></Link>
        <span>Email: {usersData.email}</span>
        </>);
}

export default UserInfo;