import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../components/cart/actions";

// { cart: { 102: 3, 433: 2,  } }

export const Product = ({ data }) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.y.cart[data.id] ?? 0);
    // const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);
        dispatch({ type: cartActions.INC_QTY, payload: { id: data.id, price: data.price } });
    }

    const decrement = () => {
        // setCount(count - 1);
        dispatch({ type: cartActions.DEC_QTY, payload: { id: data.id, price: data.price } });
    }

    return (
        <div className="product-card">
            <img src={data.image} alt={data.title} />
            <div className="bottom-box">
                <p className="title">{data.title}</p>
                <p className="description">{data.description}</p>
                <p>₹ {data.price}</p>
                {count === 0 ?
                    <button className="add-btn" onClick={increment}>Add Item</button> : (
                        <div className="btn-group">
                            <span className="material-icons" onClick={decrement}>horizontal_rule</span>
                            <p>{count}</p>
                            <span className="material-icons" onClick={increment}>add</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
}