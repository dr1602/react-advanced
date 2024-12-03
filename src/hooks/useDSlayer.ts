import { useState, useEffect } from 'react'

export const useWeather = ({ page = '1'}) => {

    const [ dataFetch, setDataFetch] = useState({
        data: [],
        error: '',
        loading: true,
    })

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                setDataFetch((prevState) => ({...prevState, loading: false}))

                const response = await fetch(`https://www.demonslayer-api.com/api/v1/characters?page=${page}`)
    
                const data = await response.json()

                setDataFetch((prevState) => ({...prevState, data: data}))
    
            } catch(err){
                setDataFetch((prevState) => ({...prevState, error: String(err)}))
            }
        }

    },[page])

    return { dataFetch, setDataFetch }

}


// https://www.youtube.com/watch?v=nm5CLKgZUus&list=PLTg7E2ObeSjYGtrVsZfNLQZrzzuJloK9c&index=7
// api https://www.demonslayer-api.com/api/v1/characters?page=