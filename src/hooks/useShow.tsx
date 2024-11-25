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
        isRedThree: false,
        isRedFour: false,
        isRedFive: false,
        isCallback: false,
        isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
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
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
        })
    }

    const toggleRedThree = () => {
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
            isRedTwo: false,
            isRedThree: true,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
        })
    }

    const toggleRedFour = () => {
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
            isRedTwo: false,
            isRedThree: false,
            isRedFour: true,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: false,
        })
    }

    const toggleRedFive = () => {
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
            isRedTwo: false,
            isRedThree: false,
            isRedFour: false,
            isRedFive: true,
            isCallback: false,
            isCallbackTwo: false,
        })
    }

    const toggleCallback = () => {
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
            isRedTwo: false,
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: true,
            isCallbackTwo: false,
        })
    }

    const toggleCallbackTwo = () => {
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
            isRedTwo: false,
            isRedThree: false,
            isRedFour: false,
            isRedFive: false,
            isCallback: false,
            isCallbackTwo: true,
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
        toggleRedThree,
        toggleRedFour,
        toggleRedFive,
        toggleCallback,
        toggleCallbackTwo,
    }
}