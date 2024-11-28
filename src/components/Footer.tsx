import { useSelector } from 'react-redux'

export const Footer: React.FC = () => {

    const user = useSelector((state: any) => state.user)

    return(
        <>
            <footer>
                <h5> Redux Toolkit Example </h5>
            </footer>
            <ul>
                <li>Name: {user.name} </li>
                <li>Email: {user.emal} </li>
                <li>Username: {user.username} </li>
            </ul>
        </>
    )
}