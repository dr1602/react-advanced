import { useReducer } from 'react'

const reducer = (state: any, action: any) => {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        }
    }

    throw Error('Unknown action.')
}

export const CounterRed: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { age: 42})

    return(
        <>
            <button onClick={() => {
                dispatch({ type: 'incremented_age'})
            }}>
                Incrementar eadad
            </button>
            <p> ¡Hola! Tú tienes {state.age} </p>
        </>
    )
}