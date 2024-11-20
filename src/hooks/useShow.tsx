import { useState } from 'react'

export const useShow = () => {
    const [show, setShow] = useState({
        isContext: false,
        isRef: false,
        isRefTwo: false,
        isRefThree: false,
    })

    const toggleIsContext = () => {
        setShow({
            isContext: true,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
        })
    }

    const toggleRef = () => {
        setShow({
            isContext: false,
            isRef: true,
            isRefTwo: false,
            isRefThree: false,
        })
    }

    const toggleRefTwo = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: true,
            isRefThree: false,
        })
    }

    const toggleRefThree = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: true,
        })
    }

    return { show, toggleIsContext, toggleRef, toggleRefTwo, toggleRefThree }
}