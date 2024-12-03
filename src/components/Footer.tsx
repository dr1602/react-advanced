import { useSelector } from 'react-redux'

export const Footer: React.FC = () => {

    const user = useSelector((state: any) => state.user)

    return(
        <>
            <footer
                className='footer__container'
            >
                <div
                    className='footer__header'
                >
                    <h5> Redux Toolkit Example </h5>
                </div>
            
                <div 
                    className='footer__list'
                >
                    <p>Name: {user.name} </p>
                    <p>Email: {user.emal} </p>
                    <p>Username: {user.username} </p>
                </div>
            </footer>
        </>
    )
}