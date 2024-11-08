 import React, { createContext, useContext, useState } from "react";

const productCount = createContext<number>(0);
const productAdd = createContext<() => void>(() => {});
const productSus = createContext<() => void>(() => {});

export function useProductCountContext() {
    return useContext(productCount)
}

export function useProductAddContext() {
    return useContext(productAdd)
}

export function useProductSusContext() {
    return useContext(productSus)
}

export function ProductProvider({children}: {children: React.ReactNode}){
    const [ productsQty, setProductsQty ] = useState<number>(0)

    const addProducts = () => {
        if ( productsQty >= 15 ){

        } else {
            setProductsQty(productsQty + 1);
        }
    }

    const susProducts = () => {
        if ( productsQty <= 0 ){

        } else {
            setProductsQty(productsQty - 1);
        }
    }

    return(
        <productCount.Provider value={productsQty}>
            <productAdd.Provider value={addProducts}>
                <productSus.Provider value={susProducts}>
                    {children}
                </productSus.Provider>
            </productAdd.Provider>
        </productCount.Provider>
    )
}