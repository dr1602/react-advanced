/*
In this example, clicking the button will scroll an image into view. It uses a ref to the list DOM node, and then calls DOM querySelectorAll API to find the image we want to scroll to
*/

import React, { useRef } from 'react';

export const CatFriends: React.FC = () => {
    const listRef = useRef<any>(null);

    const scrollToIndex = (index: number) => {
        console.log(listRef)

        const listNode = listRef.current;

        const imgNode = listNode.querySelectorAll('li > img')[index]

        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        })
    }

    return(
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)}>
                    Neo
                </button>
                <button onClick={() => scrollToIndex(1)}>
                    Millie
                </button>
                <button onClick={() => scrollToIndex(2)}>
                    Bella
                </button>
            </nav>
            <div>
                <ul ref={listRef}>
                    <li>
                        <img 
                            src='https://placecats.com/neo/300/200' 
                            alt='Neo'
                        />
                    </li>
                    <li>
                        <img 
                            src='https://placecats.com/millie/200/200'
                            alt='Millie'
                        />
                    </li>
                    <li>
                        <img 
                            src='https://placecats.com/bella/199/200'
                            alt='Bella'
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}