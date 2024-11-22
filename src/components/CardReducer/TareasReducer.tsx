import { useReducer, useRef } from 'react';

export const TareasRed: React.FC = () => {

    const inputRef = useRef<any>()

    const [tasks, dispatch] = useReducer((state = [], action: any) => {
        // console.log(action)
        // return state;

        switch(action.type) {
            case 'add_task': {
                return [
                    ...state,
                    {
                        id: Date.now(), // genera un id unico
                        title: action.title,
                    }
                ]
            }
            case 'remove_task': {
                return state.filter((task: any) => task.id !== action.id)
            }
            default: { 
                return state
            }
        }

    }, [])

    const handleSubmit = (event: any) => {
        event.preventDefault();

        dispatch({
            type: 'add_task',
            title: inputRef.current.value,
        })
    }

    return(
        <>
            <div>
                <h1> Lista de Tareas </h1>
                <form onSubmit={handleSubmit}>
                    <label> Tarea </label>
                    <input type='text' name='title' ref={inputRef} />
                    <input type='submit' name='enviar'/>
                </form>
                <div className='task'>
                    {tasks && tasks.map((item: any) => (
                        <div className='task' key={item.id}>
                            <p> {item.title} </p>
                            <button onClick={() => {
                                dispatch({ type: 'remove_task', id: item.id})
                            }}>
                                Borrar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


/*

Version alternativa

import { useReducer, useRef } from 'react';

export const TareasRed: React.FC = () => {

    const inputRef = useRef<any>()

    const [tasks, dispatch] = useReducer((state = [], action: any) => {
        // console.log(action)
        // return state;

        switch(action.type) {
            case 'add_task': {
                return [
                    ...state,
                    {
                        id: state.length,
                        title: action.title,
                    }
                ]
            }
            case 'remove_task': {
                return state.filter((task, index: any) => index != action.index)
            }
            default: { 
                return state
            }
        }

    }, [])

    const handleSubmit = (event: any) => {
        event.preventDefault();

        dispatch({
            type: 'add_task',
            title: inputRef.current.value,
        })
    }

    return(
        <>
            <div>
                <h1> Lista de Tareas </h1>
                <form onSubmit={handleSubmit}>
                    <label> Tarea </label>
                    <input type='text' name='title' ref={inputRef} />
                    <input type='submit' name='enviar'/>
                </form>
                <div className='task'>
                    {tasks && tasks.map((item: any, index: any) => (
                        <div className='task' key={index}>
                            <p> {item.title} </p>
                            <button onClick={() => {
                                dispatch({ type: 'remove_task', index})
                            }}>
                                Borrar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

*/