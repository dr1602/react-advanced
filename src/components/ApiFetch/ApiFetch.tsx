// import React, { useState, useCallback, useEffect } from 'react'
// import { ApiFetchProps } from './../../types/apiFetchTypes'

// export const ApiFetch: React.FC<ApiFetchProps> = ({ id }) => {
    
//     const [dataFetchFunc, setDataFetchFunc] = useState<BerryProps>()
//     const [dataFetchInm, setDataFetchInm] = useState<BerryProps>()
//     const [dataFetchCall, setDataFetchCall] = useState<BerryProps>()

//     const [fetchStateFunc, setFetchStateFunc] = useState({
//         error: '',
//         isLoading: false,
//     })
//     const [fetchStateInm, setFetchStateInm] = useState({
//         error: '',
//         isLoading: false,
//     })
//     const [fetchStateCall, setFetchStateCall] = useState({
//         error: '',
//         isLoading: false,
//     })

//     async function fetchDataFunc() {
//         setFetchStateFunc((prevState) => ({
//             ...prevState,
//             isLoading: !prevState.isLoading,
//         }))

//         try {
//             const response = await fetch(`https://pokeapi.co/api/v2/berry/${id+1}`)

//             if(!response.ok){
//                 throw new Error('Error en la solicitud')
//             }

//             const data = await response.json()
//             setDataFetchFunc(data)
//         } catch (error) {
//             setFetchStateFunc((prevState) => ({
//                 ...prevState,
//                 error: String(error),
//             }))
//         } finally {
//             setFetchStateFunc((prevState) => ({
//                 ...prevState,
//                 isLoading: !prevState.isLoading,
//             }))
//         }
//     }

//     (async () => {
//         setFetchStateInm((prevState) => ({
//             ...prevState,
//             isLoading: !prevState.isLoading,
//         }))

//         try{
//             const response = await fetch(`https://pokeapi.co/api/v2/berry/${id+2}`)

//             if(!response.ok) {
//                 throw new Error('Error en la solicitud')
//             }

//             const data = await response.json()
//             setDataFetchInm(data)

//         } catch(error) {
//             setFetchStateInm((prevState) => ({
//                 ...prevState,
//                 error: String(error),
//             }))
//         } finally {
//             setFetchStateInm((prevState) => ({
//                 ...prevState,
//                 isLoading: !prevState.isLoading,
//             }))
//         }
//     })();

//     useEffect(() => {
//         fetchData()
//         fetchDataFunc()
//     },[fetchData])

//     const fetchDataCall = useCallback(async () => {
//         setFetchStateCall((prevState) => ({
//             ...prevState,
//             isLoading: !prevState.isLoading,
//         }))

//         try {
//             const response = await fetch(`https://pokeapi.co/api/v2/berry/${id+3}`)

//             if(!response.ok) {
//                 throw new Error('Error en la solicitud')
//             }

//             const data = await response.json();
            
//             setDataFetchCall(data)
//         } catch (error) {
//             setFetchStateCall((prevState) => ({
//                 ...prevState,
//                 error: String(error),
//             }))
//         } finally {
//             setFetchStateCall((prevState) => ({
//                 ...prevState,
//                 isLoading: !prevState.isLoading,
//             }))
//         }
//     },[id])

//     useEffect(() => {
//         fetchDataCall()
//     },[fetchDataCall])

//     return (
//         <>
//             <div>
//                 <h2> Berries from Arrow: </h2>

//                 {
//                     !fetchStateArrow.isLoading ? (
//                         <div className='Berries'>
//                             <h3 className='Berries__Title'> {dataFetchArrow?.name} </h3>
//                             <span className='Berries__GrowthTime'>
//                                 <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
//                                 <p className='Berries__GrowthTime--value'> {dataFetchArrow?.growth_time} </p>
//                             </span>
//                         </div>
//                     ) : (
//                         <>
//                         </>
//                     )
//                 }

//             </div>

//             <div>
//                 <h2> Berries from Func: </h2>

//                 {
//                     !fetchStateFunc.isLoading ? (
//                         <div className='Berries'>
//                             <h3 className='Berries__Title'> {dataFetchFunc?.name} </h3>
//                             <span className='Berries__GrowthTime'>
//                                 <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
//                                 <p className='Berries__GrowthTime--value'> {dataFetchFunc?.growth_time} </p>
//                             </span>
//                         </div>
//                     ) : (
//                         <>
//                         </>
//                     )
//                 }

//             </div>

//             <div>
//                 <h2> Berries from Inmediate Call: </h2>

//                 {
//                     !fetchStateInm.isLoading ? (
//                         <div className='Berries'>
//                             <h3 className='Berries__Title'> {dataFetchInm?.name} </h3>
//                             <span className='Berries__GrowthTime'>
//                                 <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
//                                 <p className='Berries__GrowthTime--value'> {dataFetchInm?.growth_time} </p>
//                             </span>
//                         </div>
//                     ) : (
//                         <>
//                         </>
//                     )
//                 }

//             </div>

//             <div>
//                 <h2> Berries from Callback: </h2>

//                 {
//                     !fetchStateCall.isLoading ? (
//                         <div className='Berries'>
//                             <h3 className='Berries__Title'> {dataFetchCall?.name} </h3>
//                             <span className='Berries__GrowthTime'>
//                                 <strong className='Berries__GrowthTime--title'> Growth Time: &nbsp; </strong>
//                                 <p className='Berries__GrowthTime--value'> {dataFetchCall?.growth_time} </p>
//                             </span>
//                         </div>
//                     ) : (
//                         <>
//                         </>
//                     )
//                 }

//             </div>
//         </>
//     )
// }