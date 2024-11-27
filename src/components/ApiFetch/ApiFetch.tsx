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
    const [dataFetch, setDataFetch] = useState<BerryProps>()

    const fetchData = useCallback (async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/berry/${id}`);

            if(!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json()
            console.log(data)
            setDataFetch(data)

        } catch(error) {
            console.error('Error:', error)
        }

        
    },[id])

    useEffect(() => {
        fetchData()
    },[fetchData])

    return (
        <>
            <div>
                <h2> Berries: </h2>

                    <div className='Berries'>
                        <h3 className='Berries__Title'> {dataFetch?.name} </h3>
                        <span className='Berries__GrowthTime'>
                            <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
                            <p className='Berries__GrowthTime--value'> {dataFetch?.growth_time} </p>
                        </span>
                    </div>
            </div>
        </>
    )
}