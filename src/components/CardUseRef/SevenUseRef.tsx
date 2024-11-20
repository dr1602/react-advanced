import React, { useRef } from "react";

export const Form: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        inputRef.current?.focus();
    }

    return(
        <>
            <input ref={inputRef}/>
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}

/*

In this example, clicking the button will focus the input:

*/