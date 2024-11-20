import React, { useRef } from 'react'

export const Counter: React.FC = () => {

    let ref = useRef(0);

    const handleClick = () => {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!')
    }

    return (
        <>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </>
    )
}

/*
This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.
*/