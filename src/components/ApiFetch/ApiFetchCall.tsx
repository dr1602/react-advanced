import { useFetchCall } from '../../hooks/useFetchCall'
import { ApiFetchProps } from '../../types/apiFetchTypes'

export const ApiFetchCall: React.FC<ApiFetchProps> = ({ id, url }) => {

    const { dataFetchCall, fetchStateCall, fetchDataCall } = useFetchCall({id, url})

    fetchDataCall

    return (
        <>

            <div>
                <h2> Berries from Callback: </h2>

                {
                    !fetchStateCall.isLoading ? (
                        <div className='Berries'>
                            <h3 className='Berries__Title'> {dataFetchCall?.name} </h3>
                            <span className='Berries__GrowthTime'>
                                <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
                                <p className='Berries__GrowthTime--value'> {dataFetchCall?.growth_time} </p>
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