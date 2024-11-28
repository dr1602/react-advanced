import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { ProductCard } from './components/ProductCard'

export const ApiRQuery: React.FC = () => {

    const [page, setPage ] = useState(1)

    const getProducts = async (queryKey: any) => {
        // console.log(info)
        const response = await fetch(`https://peticiones.online/api/products?page=${queryKey[1]}`)
        return response.json()
    }

    const { data, status } = useQuery(['products', page], getProducts);

    if( status === 'error') {
        return <p> Error... </p>
    }

    return(
        <>
            <h3> Lista de Produstos: {page} </h3>
            {
                status === 'loading' ? (
                    <>
                        <img 
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQklEQVR4nO2YXWgcVRTHr22tohVEBRWC9bPVJ9Hii195EJu5d1NbwQiC1FZmU+qLGmr1RWY22DZ779paqA8hExObHYW1mQYfhFBxs/fOZDfsVCidTdRd2p3aUFt3LSqaotWRIZTOTKdNNju7y8r+4Dwse8/Z/zlzzhn2AtCiRYuqSSS6lkfV0DOYwfcJg2OEwWnC4C+YwYuYor8wRWXC0DHC0CGSQu8QjXvCssB1oNHsSXbcSxj6kDB4hjBkVWgnMYORj9Ib7qy78L2pjrsxhZJd4SUIdxlm6AKmKLYvufHWuojHLNRlt0e1wq9IhKKzOIU21kz4/q+4GzCFw9eo5O92/2OGtsVS6Mm9LHS/oHfedCDZvio6EXooxrinMePeIhSNE4bmrpFMVLCEZYGKJ+PP30wo/Ma/crBoi7YTXGy8qPrCLZjCnYShc/5JwES/vu76QMTbwghDE369Syh6WzC6VlZVGAY/IBT+45dEIE+CMDji06/5aKrzcRAQMco957vJKNxTXeAU5H1a5vjuqU23g4AhGlqNGTrlKdS/mCJuSQH7klzb/GC6K2+vUFAjomrHWnsbeQp22p6ZioNhBg96qj8X0zofBjUmSrl270xghnZVFCRG4RqfIO+BOoEZ/NgzC39U1LbeAJihnJBsXwHqRHR+zf7k7oDQu4tytvcvobDkdI6xUDeoM4SiXs8szCzKEavcenf14Xl7X4M605fk2ghDfzu19E2gRxZ0xBTtdvcf+hQ0COJ5+2PKbV/YicEjFTvVCMzQLs8sfrKwE4VFV/9PcI+BBhGlsNPTzlqjtLRo0TRIOl+Q9LB1yQa/3fYoaCYkPTzmTEDS+S2gmZB0vteTwDBoJqSj3c86ExjQ+V+Hkq/dCJoFwRKWDWTDs645yPKbQTMxkA3vc7dR+Hv7+hA0C/169z1Slr/gSiLL94BmQsqGD3hm4U/p6Oura/27hmUs+ZrGxdDUG3cN6HzJkcBg4DdmHvJnJx8slDOz+XJm/8zPauV/5L1IevemeorPlzInC+WMNW/pH38oZV6qOvCgzr/sFZ8whJXKtLAGBMR35zP3FUqZc5fFz1u+nNkBgsYWP5oTv1SMyNzhXGSn/bnamEkruSJfSh93JVDK9IOaic9FrEs2aognFEMMJwxh1aIFz8p32AYc5MtTHU7xlpUIfm2PGuJWp3hPIr8pucgXiiG+4vRJWInlqvn5A5OnPuNUU+5RTflrrRi/qJnxQ974hXJ6LF9Oi4ELdyUxHXlx1BBLV00kF2HO85PF+FOaKVt+ppoj651ndUsP5kp9IRKGcJuSi/TZc+DzJMacZ5kpb7haApop53S9vz6i/Rg9JrQphigohli8/ATEIeeZSVPe7F/9+IxWjO8YP3Ow7ndOV2Cv2cMzvesUI9Kj5HpfdX6nmvJ2tSif1orxrFaUhzVTflM9MbK2cWpbtPh/8R+yh4MczZOjeAAAAABJRU5ErkJggg==' 
                            alt='loading'
                            className='img_loading'
                        />
                    </>
                ):(
                    <>
                        <div className='products__buttons'>
                            <button
                                onClick={() => {
                                    page >= 1 && setPage(page - 1)
                                }}
                            > 
                                Anterior 
                            </button>
                            <div></div>
                            <button
                                onClick={() => setPage(page + 1)}
                            > 
                                Siguiente 
                            </button>
                        </div>
                        <div className='products'>
                            {data.results.map((prod: any, index: number) => (
                                <React.Fragment key={index}>
                                    <ProductCard product={prod} />
                                </React.Fragment>
                            ))}
                        </div>
                    </>
                )
            }

        </>
    )
} 