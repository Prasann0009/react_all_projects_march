import { useState } from "react";

const StateUpdationFlow = () => {
    const [count, setCount] = useState(10);

    const updateCount = () => {
        console.log(count);
        setCount(count + 1);
        console.log(count); // 
    };

    return (
        <>
            <p>State Updation flow</p>
            <h1>Count: {count}</h1>
            <button onClick={updateCount}>Update  Count</button>
        </>
    );
}

export default StateUpdationFlow;