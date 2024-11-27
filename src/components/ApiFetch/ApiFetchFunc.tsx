import { useFetchFunc } from '../../hooks/useFetchFunc'
import { ApiFetchProps } from '../../types/apiFetchTypes'

export const ApiFetchFunc: React.FC<ApiFetchProps>= ({ id, url }) => {
    
    const { dataFetchFunc, fetchStateFunc, fetchDataFuncCallback } = useFetchFunc({id, url})

    fetchDataFuncCallback

    return (
        <>
            <div>
                <h2> Berries from Func: </h2>

                {
                    !fetchStateFunc.isLoading ? (
                        <div className='Berries'>
                            <h3 className='Berries__Title'> {dataFetchFunc?.name} </h3>
                            <span className='Berries__GrowthTime'>
                                <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
                                <p className='Berries__GrowthTime--value'> {dataFetchFunc?.growth_time} </p>
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