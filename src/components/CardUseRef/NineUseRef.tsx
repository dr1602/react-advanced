/*
    This example uses a ref to call play() and pause() on a <video> DOM node.
*/


import React, { useState, useRef } from "react";

export const VideoPlayer: React.FC = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const ref = useRef<any>(null)

    const handleClick = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying)

        if(nextIsPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }

    return(
        <>
            <button onClick={handleClick}>
                {!!isPlaying ? 'Pause': 'Play'}
            </button>
            <video
                width={250}
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
            <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
                />
            </video>
        </>
    )
}