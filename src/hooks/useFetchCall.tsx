import { useState, useCallback, useEffect } from 'react'
import { BerryProps, UseFetchProps, FetchState } from '../types/apiFetchTypes'

export const useFetchCall = ({ id, url }: UseFetchProps) => {
    const [dataFetchCall, setDataFetchCall] = useState<BerryProps>()

    const [fetchStateCall, setFetchStateCall] = useState<FetchState>({
        error: '',
        isLoading: false,
    })

    const fetchDataCall = useCallback(async () => {
        setFetchStateCall((prevState) => ({
            ...prevState,
            isLoading: !prevState.isLoading,
        }))

        try {
            const response = await fetch(`${url}${id+3}`)

            if(!response.ok) {
                throw new Error('Error en la solicitud')
            }

            const data = await response.json();
            
            setDataFetchCall(data)
        } catch (error) {
            setFetchStateCall((prevState) => ({
                ...prevState,
                error: String(error),
            }))
        } finally {
            setFetchStateCall((prevState) => ({
                ...prevState,
                isLoading: !prevState.isLoading,
            }))
        }
    },[id])

    useEffect(() => {
        fetchDataCall()
    },[fetchDataCall])

    return {
        dataFetchCall,
        fetchStateCall,
        fetchDataCall,
    }

}