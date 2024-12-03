import { useState, useRef } from 'react';

export const Stopwatch: React.FC = () => {
    const [ startTime, setStartTime ] = useState(0);
    const [ now, setNow ] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleStart = () => {
        setStartTime(Date.now())
        setNow(Date.now())

        if (intervalRef.current){
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef?.current)
        }
    }

    let secondsPassed = 0;

    if (startTime != null && now != null) {
        secondsPassed = (now - startTime)/1000;
    }

    return (
        <>
            <h1> Time passed: {secondsPassed.toFixed(3)} </h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    )
}

/*

This example uses a combination of state and refs. Both startTime and now are state variables because they are used for rendering. But we also need to hold an interval ID so that we can stop the interval on button press. Since the interval ID is not used for rendering, it’s appropriate to keep it in a ref, and manually update it.

*/