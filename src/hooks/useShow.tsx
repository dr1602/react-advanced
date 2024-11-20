import { useState } from 'react'

export const useShow = () => {
    const [show, setShow] = useState({
        isContext: false,
        isRef: false,
        isRefTwo: false,
        isRefThree: false,
        isRefFour: false,
    })

    const toggleIsContext = () => {
        setShow({
            isContext: true,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
        })
    }

    const toggleRef = () => {
        setShow({
            isContext: false,
            isRef: true,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
        })
    }

    const toggleRefTwo = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: true,
            isRefThree: false,
            isRefFour: false,
        })
    }

    const toggleRefThree = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: true,
            isRefFour: false,
        })
    }

    const toggleRefFour = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: true,
        })
    }

    return { 
        show, 
        toggleIsContext, 
        toggleRef, 
        toggleRefTwo, 
        toggleRefThree, 
        toggleRefFour 
    }
}