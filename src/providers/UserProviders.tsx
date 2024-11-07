import { createContext, useState, useContext } from "react";
import { userType } from './../types/userTypes'

const initialUserState: userType = {
    name: null,
    email: null,
}

const userContext = createContext<userType>(initialUserState);
const userToggleContext = createContext<() => void>(()=>{})

export function useUserContext() {
    return useContext(userContext)
}

export function useUserToggleContext() {
    return useContext(userToggleContext)
}

export function UserProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser ] = useState<userType>(initialUserState)

    const cambiaLogin = () => {
      console.log('clicked')
      console.log(user)
      if (user.name) {
        setUser({ 
          name: null,
          email: null,
        })
      } else{
        setUser({
          name: 'Luis',
          email: 'luis@mail.com,'
        })
      }
    }
 
    return(
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin} >
                {children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}