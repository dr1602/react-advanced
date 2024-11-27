import { useState, useEffect, useCallback } from 'react'
import { BerryProps, UseFetchProps, FetchState } from '../types/apiFetchTypes'

export const useFetchFunc = ({ id, url }: UseFetchProps) => {
    const [dataFetchFunc, setDataFetchFunc] = useState<BerryProps>()

    const [fetchStateFunc, setFetchStateFunc] = useState<FetchState>({
        error: '',
        isLoading: false,
    })

    async function fetchDataFunc() {
        setFetchStateFunc((prevState) => ({
            ...prevState,
            isLoading: !prevState.isLoading,
        }))

        try {
            const response = await fetch(`${url}${id+1}`)

            if(!response.ok){
                throw new Error('Error en la solicitud')
            }

            const data = await response.json()
            setDataFetchFunc(data)
        } catch (error) {
            setFetchStateFunc((prevState) => ({
                ...prevState,
                error: String(error),
            }))
        } finally {
            setFetchStateFunc((prevState) => ({
                ...prevState,
                isLoading: !prevState.isLoading,
            }))
        }
    }

    // Si establecemos la funcion de esta manera, la funcion se rerenderizara indefinidamente
    // useEffect(() => {
    //     fetchDataFunc()
    // },[fetchDataFunc])

    // de esta forma depende de un cambio de id o url
    // useEffect(() => {
    //     fetchDataFunc();
    // }, [id, url]);

    // opcion de solucion con callback

    const fetchDataFuncCallback = useCallback(fetchDataFunc,[id, url])

    useEffect(() => {
        fetchDataFuncCallback();
    }, [fetchDataFuncCallback]);


    return {
        dataFetchFunc,
        fetchStateFunc,
        fetchDataFunc,
        fetchDataFuncCallback,
    }

}