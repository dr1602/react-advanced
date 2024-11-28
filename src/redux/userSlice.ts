import { createSlice } from "@reduxjs/toolkit"

// estado inicial de esta parte del estado global de la app
const initialState = {
    name: '',
    username: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user', // nombre del slice
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, email } = action.payload; // llamamos el payload, no es el estado inicial
            state.name = name; // se puede mutar directamente el estado con libreria imer, algo que no pasaba con Redux original
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => {
            state.email =  action.payload;
        }
    }
})

export const { addUser, changeEmail } = userSlice.actions;
export const userReducer = userSlice.reducer