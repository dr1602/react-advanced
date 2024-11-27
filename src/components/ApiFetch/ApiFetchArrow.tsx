import { useEffect } from 'react'
import { useFetchArrow } from './../../hooks/useFetchArrow'
import { ApiFetchProps } from '../../types/apiFetchTypes'

export const ApiFetchArrow: React.FC<ApiFetchProps> = ({ id, url }) => {
    
    const { dataFetchArrow, fetchStateArrow, fetchData } = useFetchArrow({id, url})

    useEffect(() => {
        fetchData()
    },[fetchData])

    return (
        <>
            <div>
                <h2> Berries from Arrow: </h2>

                {
                    !fetchStateArrow.isLoading ? (
                        <div className='Berries'>
                            <h3 className='Berries__Title'> {dataFetchArrow?.name} </h3>
                            <span className='Berries__GrowthTime'>
                                <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
                                <p className='Berries__GrowthTime--value'> {dataFetchArrow?.growth_time} </p>
                            </span>
                        </div>
                    ) : (
                        <>
                        </>
                    )
                }

            </div>
        </>
    )
}