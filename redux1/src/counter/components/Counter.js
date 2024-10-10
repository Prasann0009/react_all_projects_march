import { useDispatch, useSelector } from "react-redux"
import { actions } from "../store";

export const Counter = () => {
    // this component only need the count property
    // updates only the count property
    console.log("counter component rendered");
    const dispatch = useDispatch();
    const count = useSelector(state => state.count) // state = {count: , age: }

    const decrement = () => {
        dispatch({ type: actions.DEC })
    }

    const increment = () => {
        dispatch({ type: actions.INC })
    }

    return (
        <div>
            <button onClick={increment}>Increment Count</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement Count</button>
        </div>
    )
}