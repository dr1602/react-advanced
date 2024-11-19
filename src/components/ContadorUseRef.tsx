import { useEffect, useState, useRef } from 'react'

export const Contador: React.FC = () => {

    // const timer = useRef(0);
    const [cont, setCont] = useState(0);
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const isRunning = useRef(true)

    useEffect(() => {
        timeRef.current = setInterval(() => {
            if(isRunning.current){
                setCont(cont => cont + 1)
            }
        }, 1000)
    },[])

    const handleClick = () => {
        isRunning.current = false;
        if(timeRef.current){
            clearInterval(timeRef.current)
            timeRef.current = null
        }
    }

    return(
        <>
            <p> Contador: {cont} </p>

            <button onClick={handleClick}>
                PARAR
            </button>
        </>
    )
}


/* 

NOTAS EN LA VERSION ORGINAL

1. El contador aumenta de 2 en 2 porque hay un problema con el "strict mode" de React que hace que el useEffect se ejecute dos veces en desarrollo. 
Esto causa que se creen dos intervalos que incrementan el contador simultáneamente.

2. El botón no detiene el contador porque aunque limpiamos el intervalo con clearInterval(), 
el estado (cont) sigue actualizándose porque hay una clausura (closure) en el setInterval que mantiene una referencia al estado inicial.

CODIGO:

import { useEffect, useState, useRef } from 'react'

export const Contador: React.FC = () => {

    const timer = useRef(0);
    const [cont, setCont] = useState(0);

    useEffect(() => {
        timer.current = setInterval(() => setCont(cont => cont + 1), 1000)
    },[])

    const handleClick = () => {
        clearInterval(timer.current)
        timer.current = 0;
    }

    return(
        <>
            <p> Contador: {cont} </p>

            <button onClick={handleClick}>
                PARAR
            </button>
        </>
    )
}

*/