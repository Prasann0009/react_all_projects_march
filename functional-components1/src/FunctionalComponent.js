import { useState } from "react";
import "./styles/counter.css";
/*
    1. Functional components are alternative of class components
    2. All the lifecycle methods can be implemented in function based components also.

    * Life cycle methods and state management in a class based components can be acheived by just inheriting the `Component` class from React.

    * To achive the state management and life cycle methods in function based components ??
    Answer: React gives us Hooks to acheive the above functionalities.

    Hooks are plain javascript functions developed by React team.
    Hooks can only be used inside a javascript function;

    useState => hook used to acheive the state of a function based component.
*/

const price = 50;

function FunctionalComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="card">
            <img src="bread.jpeg" alt="bread image" />
            <h3>Britannia Milk bread</h3>
            <span className="size">400 g</span>
            <div className="bottom">
                <b>$ {price}</b>
                {
                    count === 0 ? <button onClick={increment}>ADD</button> :
                        <div className="btn-group">
                            <button onClick={decrement}>-</button>
                            <span>{count}</span>
                            <button onClick={increment}>+</button>
                        </div>
                }
            </div>
            {count > 0 && <h1>Price: $ {price * count} </h1>}
        </div>
    );

    // return (
    //     <>
    //         {/* <button className="btn" onClick={updateCount}>Update Count</button>
    //         <h1>Count: {state}</h1> */}


    //     </>
    // );
}

export default FunctionalComponent;