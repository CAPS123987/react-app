type Props = {
    usersData: UserData;
}

const UserInfo: React.FC<Props> = ({usersData}) => {
    return (<>
        <span>Profil: {usersData.name}</span>
        <span>Email: {usersData.email}</span>
        </>);
}

export default UserInfo;