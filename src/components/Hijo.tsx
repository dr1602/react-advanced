import { useUserContext, useUserToggleContext } from "../providers/UserProviders"

const Hijo: React.FC = () => {

    const user = useUserContext();
    const cambiaLogin = useUserToggleContext();

    return(
        <>
            <div>
                <h2> Componente hijo </h2>
                {user.name && <p> {user.name} </p>}
                <button onClick={cambiaLogin}> Cambia Login </button>
            </div>
        </>
    )
}

export { Hijo }