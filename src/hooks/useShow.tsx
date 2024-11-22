import { useState } from 'react'

export const useShow = () => {
    const [show, setShow] = useState({
        isContext: false,
        isRef: false,
        isRefTwo: false,
        isRefThree: false,
        isRefFour: false,
        isRefFive: false,
        isRefSix: false,
        isRefSeven: false,
        isRefEight: false,
        isRefNine: false,
        isRefTen: false,
        isReducer: false,
    })

    const toggleIsContext = () => {
        setShow({
            isContext: true,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRef = () => {
        setShow({
            isContext: false,
            isRef: true,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefTwo = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: true,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefThree = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: true,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefFour = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: true,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefFive = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: true,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefSix = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: true,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefSeven = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: true,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefEigth = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: true,
            isRefNine: false,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefNine = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: true,
            isRefTen: false,
            isReducer: false,
        })
    }

    const toggleRefTen = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: true,
            isReducer: false,
        })
    }

    const toggleRedOne = () => {
        setShow({
            isContext: false,
            isRef: false,
            isRefTwo: false,
            isRefThree: false,
            isRefFour: false,
            isRefFive: false,
            isRefSix: false,
            isRefSeven: false,
            isRefEight: false,
            isRefNine: false,
            isRefTen: false,
            isReducer: true,
        })
    }

    return { 
        show, 
        toggleIsContext, 
        toggleRef, 
        toggleRefTwo, 
        toggleRefThree, 
        toggleRefFour,
        toggleRefFive,
        toggleRefSix,
        toggleRefSeven,
        toggleRefEigth,
        toggleRefNine,
        toggleRefTen,
        toggleRedOne,
    }
}