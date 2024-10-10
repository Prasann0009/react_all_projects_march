import { useDispatch, useSelector } from "react-redux"
import { actions } from "../store";

export const AgeCounter = () => {
    // needs only age value 
    // can update age property in the redux store
    console.log("age component rendered");
    const age = useSelector(state => state.age) // state = { count: , age: }
    const dispatch = useDispatch();

    const decrement = () => {
        dispatch({ type: actions.AGE_DEC })
    }

    const increment = () => {
        dispatch({ type: actions.AGE_INC })
    }

    return (
        <div>
            <button onClick={increment}>Increment Age</button>
            <h3>{age}</h3>
            <button onClick={decrement}>Decrement Age</button>
        </div>
    )
}