import React, { useState, useCallback, useEffect } from 'react'

interface ApiFetchProps {
    id: number;
}

interface BerryProps {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
}

export const ApiFetch: React.FC<ApiFetchProps> = ({ id }) => {
    const [dataFetchArrow, setDataFetchArrow] = useState<BerryProps>()
    const [dataFetchFunc, setDataFetchFunc] = useState<BerryProps>()
    const [dataFetchInm, setDataFetchInm] = useState<BerryProps>()

    const fetchData = useCallback (async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/berry/${id}`);

            if(!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json()
            setDataFetchArrow(data)
        } catch(error) {
            console.error('Error:', error)
        }

        
    },[id])

    async function fetchDataFunc() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/berry/${id+1}`)

            if(!response.ok){
                throw new Error('Error en la solicitud')
            }

            const data = await response.json()
            setDataFetchFunc(data)
        } catch (error) {
            console.log('Error:', error)
        }
    }

    (async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/berry/${id+2}`)

            if(!response.ok) {
                throw new Error('Error en la solicitud')
            }

            const data = await response.json()
            setDataFetchInm(data)
        } catch(error) {
            console.error('Error:', error)
        }
    })();

    useEffect(() => {
        fetchData()
        fetchDataFunc()
    },[fetchData])

    return (
        <>
            <div>
                <h2> Berries from Arrow: </h2>

                    <div className='Berries'>
                        <h3 className='Berries__Title'> {dataFetchArrow?.name} </h3>
                        <span className='Berries__GrowthTime'>
                            <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
                            <p className='Berries__GrowthTime--value'> {dataFetchArrow?.growth_time} </p>
                        </span>
                    </div>
            </div>

            <div>
                <h2> Berries from Func: </h2>

                    <div className='Berries'>
                        <h3 className='Berries__Title'> {dataFetchFunc?.name} </h3>
                        <span className='Berries__GrowthTime'>
                            <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
                            <p className='Berries__GrowthTime--value'> {dataFetchFunc?.growth_time} </p>
                        </span>
                    </div>
            </div>

            <div>
                <h2> Berries from Inmediate Call: </h2>

                    <div className='Berries'>
                        <h3 className='Berries__Title'> {dataFetchInm?.name} </h3>
                        <span className='Berries__GrowthTime'>
                            <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
                            <p className='Berries__GrowthTime--value'> {dataFetchInm?.growth_time} </p>
                        </span>
                    </div>
            </div>
        </>
    )
}