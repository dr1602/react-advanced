import { useState, useRef } from 'react';

export const Stopwatch: React.FC = () => {
    const [ startTime, setStartTime ] = useState(0);
    const [ now, setNow ] = useState(0);
    const intervalRef = useRef(0);

    const handleStart = () => {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
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