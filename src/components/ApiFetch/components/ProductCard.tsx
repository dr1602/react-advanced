import { ProductCardProps } from './../../../types/apiFetchTypes'

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    return(
        <>
            <div
                className='product'
            >
                <img 
                    src={product?.image} 
                    alt='' 
                    className='left'
                />
                <span className='right'>
                    <h5> {product?.name} </h5>
                    <h6> {product?.description} </h6>
                    <p> Categoría: 
                        <strong> {product?.category} </strong> 
                    </p>
                    <p> Precio: 
                        <strong> {product?.price} </strong> 
                    </p>
                </span>
            </div>
        </>
    )
}