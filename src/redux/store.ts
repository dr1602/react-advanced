// contiene el estado de la aplicacion y su funcion reducer

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice.ts'

// si tenamos un ESTADO GLOBAL GRANDE, con muchas cosas como:
// autenticacion de usuario
// el sim de la aplicacion
// configuracion de la aplicacion

// se recomienda dividir en pequenios mini estados, o slices

export const store = configureStore({
    // aqui podemos tener todos los reducers que queramos
    reducer: {
        user: userReducer,
    } 
})