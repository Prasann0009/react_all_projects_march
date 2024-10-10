import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./actions";

export const SidebarProduct = ({ product }) => {
    // const [count, setCount] = useState(10);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: cartActions.INC_QTY, payload: { id: product.id, price: product.price } })
    }

    const decrement = () => {
        dispatch({ type: cartActions.DEC_QTY, payload: { id: product.id, price: product.price } })
    }

    return (
        <div className="product">
            <img src={product.image} />
            <div className="title-box">
                <span>{product.title}</span>
                <b>₹{product.price}</b>
            </div>
            <div className="btn-group">
                <button onClick={decrement}>-</button>
                <span>{product.quantity}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}