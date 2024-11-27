import { useState, useCallback } from 'react'
import { BerryProps, UseFetchProps, FetchState } from './../types/apiFetchTypes'

export const useFetchArrow = ({ id, url }: UseFetchProps) => {
    const [dataFetchArrow, setDataFetchArrow] = useState<BerryProps>()

    const [fetchStateArrow, setFetchStateArrow] = useState<FetchState>({
        error: '',
        isLoading: false,
    })

    const fetchData = useCallback (async () => {
        setFetchStateArrow((prevState) => ({
            ...prevState,
            isLoading: !prevState.isLoading,
        }))
        try {
            const response = await fetch(`${url}${id}`);

            if(!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json()
            setDataFetchArrow(data)

        } catch(error) {
            setFetchStateArrow((prevState) => ({
                ...prevState,
                error: String(error),
            }))
        } finally {
            setFetchStateArrow((prevState) => ({
                ...prevState,
                isLoading: !prevState.isLoading,
            }))
        }

        
    },[id])

    return {
        dataFetchArrow,
        fetchStateArrow,
        fetchData,
    }

}