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
        isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
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
            isRedTwo: false,
        })
    }

    const toggleRedTwo = () => {
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
            isReducer: false,
            isRedTwo: true,
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
        toggleRedTwo,
    }
}