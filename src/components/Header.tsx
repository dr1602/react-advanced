import { useProductCountContext } from './../providers/ProductsProviders'

export const Header: React.FC = () => {

    const productsQty = useProductCountContext()

    return(
        <>
            <header className='h-[7vw] w-screen bg-red-300 header'>
                Products: { productsQty }
            </header>
        </>
    )
}