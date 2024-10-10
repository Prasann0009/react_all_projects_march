import { forwardRef, useImperativeHandle, useState } from "react";
import "../../styles/sidebar.scss";
import { SidebarProduct } from "./SidebarProduct";
import { useSelector } from "react-redux";

// using forwardref we can update the states of child component without re rendering the parent component

/**
 * {
 *   x: { products: [] },
 *   y: { cart: {key: value} }
 * }
 */

const Sidebar = forwardRef((_, ref) => {
    const [show, setShow] = useState(false);
    const products = useSelector(state => {
        const productsList = state.x.products;
        const cart = state.y.cart;
        // const ids = Object.keys(state.y.cart);
        const list = [];
        productsList?.forEach((product) => {
            if (cart[product.id]) {
                list.push({ ...product, quantity: cart[product.id] })
            }
        })
        return list;
    });
    console.log(products);
    // ref = {current: null} => {current: { setShow }}
    useImperativeHandle(ref, () => {
        return { setShow }
    });

    const closeModal = () => {
        setShow(false);
    }

    if (!show) return null;

    return (
        <div className="cart-sidebar-container">
            <div className="sidebar">
                <div className="head">
                    <b>My Cart</b>
                    <span className="material-icons" style={{ cursor: "pointer" }} onClick={closeModal}>close</span>
                </div>

                <div className="products">
                    {
                        products.map((product, index) => {
                            return (
                                <SidebarProduct key={index} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
});

export default Sidebar