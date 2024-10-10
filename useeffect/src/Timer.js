import { useEffect, useState } from "react";

let timerId = null;

const Timer = () => {
    const [time, setTime] = useState(0);
    // const [timerId, setTimerId] = useState(null);


    const stopTimer = () => {
        // should stop the timer
        clearInterval(timerId);
        timerId = null;
    }

    useEffect(() => {
        timerId = setInterval(() => {
            console.log(time);
            setTime(prev => prev + 1);
        }, 1000);
    }, []);

    return (
        <div>
            <h1>{time}s</h1>
            <buttton onClick={stopTimer}>Stop Timer</buttton>
        </div>
    )
}

export default Timer;


/**
 * 
 * 1. The callback passed to useEffect will be executed after mouting 
 * 2. from second time render onwards the callback passed to useEffect will get executed only if there's a dependency array change w.r.t the previous render.
 * 
 * 
 * 
 * n th render , dependency array  = [ a, b, c, d ]
 * n+1 th render, dependency array = [ a, b, c, d ] => in n+1 th render callback will not be executed as there's no change in the dependency list.
 * 
 * 
 * n th render , dependency array  = [ a, b, c, d ]
 * n+1 th render, dependency array = [ y, b, x, d ] => in n+1 th render the callback will be executed as there's a change in the dependency list
 * 
 */