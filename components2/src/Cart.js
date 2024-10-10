import React, { useState } from "react";

// class Cart extends Component {
//     constructor(props){ 

//         this.state = { count: 0 }
//     }
//     render() {

//     }
// }

// this one is for who knows functional components , else you can skip it for now
function Cart() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            {count === 0 ? <button onClick={increment}>Add</button> :
                <div>
                    <button onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                </div>
            }
        </>
    );
}

export default Cart;