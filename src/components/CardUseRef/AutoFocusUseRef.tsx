/*
como hacer interacciones en el DOM usando useRef
pero recuerda, no hay que abusar mucho de esto, ya que ya hay hooks especializads para
manipular el DOM, como los son el useState
*/

import React, { useRef } from 'react'

export const AutoFocus: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const onFocus = () => {
        inputRef.current?.focus();

        if(inputRef.current !== null){
            inputRef.current.style.border = '6px solid red' 
        }
    }

    // Como almacnerar el varor previo de una variable dentro de un componente

    return (
        <>
            <div className='autofocus__container'>
                <input
                    type='text'
                    ref={inputRef}
                    className='autofocus__container--input'
                />

                <button 
                    onClick={onFocus}
                    className='autofocus__container--button'
                > 
                    FOCUS! 
                </button>
            </div>
        </>
    )
}