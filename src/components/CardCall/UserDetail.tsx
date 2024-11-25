import React, { useEffect, useState, useCallback } from "react"

interface UserDetailProps {
    userId: string;
}

interface UserProps {
    _id: string;
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    image: string;
    password: string;
}

export const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {

    const [user, setUser ] = useState<UserProps>();

    const getUser = useCallback(async () => {
        try{
            const response = await fetch('https://peticiones.online/api/users/' + userId )
            const json = await response.json();
            console.log(json)
            setUser(json)
            console.log(user)
        } catch(error) {
            console.error('Error fetching data: ', error)
        }
    },[userId])

    // se creara una nueva funcion getUser ID solo si cambiamos el id

    useEffect(() => {
        getUser()
    },[getUser]) // ya no se renderizara en cada rerenderizado, y n se haran bucles extranios

    return(
        <>
            <div>
                <p>{user?.first_name && user?.first_name}</p>
            </div>
        </>
    )
}