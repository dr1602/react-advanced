import React, { useCallback, useState, useMemo } from "react";

export const Main: React.FC = () => {

    const [cont, setCont ] = useState<number>(0)

    /*
    // No creamos una funcion aqui porque lo importante es demostrar que cuando creamos una funcion dentro de un componente, esta funcion
    // se vuelve a renderizar junto con el componente 
    
    const Incrementar = () => {
        setCont(cont+1)
    }
    */

    // se reejecuta esta funcion
    const doble = () => {
        return cont * 2
    }

    // callback memoriza la funcion tal y como esta cuando se ha generado y nos devuleve una funcion para volver a ejecutar
    const callback = useCallback(doble, [cont]) // como con useEffect se renderiza con la dependencia entre llaves. En este caso, cada que se modifique cont, se vuelve a sacar la funcion y el valor

    console.log(callback) // devuelve la funcion memorizada
    console.log(callback()) // ejecutar con el valor que se tenga en principio cuando se memoriza la funcion, en este caso 0 Zero, y el resultado es Zero porque no depende del contador

    // useMemo ejecuta la funcion y devuleve el valor memorizado, no ejecuta la funcion
    const memo = useMemo(doble, []) // como con useEffect se rerenderiza con la dependencia entre llaves
    console.log(memo)
    // console.log(memo()) // esto da un error porque devuelve un valor, no una funcion, por lo que no se puede retornar



    return(
        <>
            <div>
                <button onClick={() => setCont(cont + 1)}> INCREMENTAR </button>
                <p> {cont} </p>
            </div>
        </>
    )
}