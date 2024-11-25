/*

Pasar el estado inicial directamente 
Este ejemplo no pasa la función inicializadora, por lo que la función 
createInitialState se ejecuta en cada render, como cuando se escribe en la entrada.
 No hay ninguna diferencia observable en el comportamiento, pero este código es menos 
 eficiente.

*/

import React, { useReducer } from 'react'

interface TodoListProps {
    username: string,
}

function createInitialState(username: string) {
    const initialTodos = [];

    for (let i = 0; i < 6; i++) {
        initialTodos.push({
            id: i,
            text: username + "'s task #" + (i + 1) 
        })
    }
    return {
        draft: '',
        todos: initialTodos,
    }
}

function reducer(state: any, action: any) {
    switch(action.type) {
        case 'changed_draft': {
            return {
                draft: action.nextDraft,
                todos: state.todos,
            }
        }
        case 'added_todo': {
            return {
                draft: '',
                todos: [{
                    id: state.todos.length,
                    text: state.draft
                }, ...state.todos]
            }
        }
    }
    throw Error('Unknown action: ' + action.type)
}

export const TodoListStateReducer: React.FC<TodoListProps> = ({ username }) => {
    const [state, dispatch] = useReducer(
        reducer,
        createInitialState(username),
    )

    console.log(state.todos)

    return(
        <>
            <input
                value={state?.draft}
                onChange={e => {
                    dispatch({
                        type: 'changed_draft',
                        nextDraft: e.target.value,
                    })
                }}
            />
            <button 
                onClick={() => {
                    dispatch({ type: 'added_todo'})
                }}
            > 
                Agregar 
            </button>
            <ul
                className='StateReducer__list'
            >
                {state.todos.map((item: any) => (
                    <li key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </>
    )
}