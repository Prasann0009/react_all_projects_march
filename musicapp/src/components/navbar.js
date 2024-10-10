import { useSelector } from "react-redux";
import "../styles/navbar.css";
import Sidebar from "./cart/Sidebar";
import { useRef } from "react";

export const NavBar = () => {
    const totalProducts = useSelector(s => s.y.totalProducts);
    const totalPrice = useSelector(s => s.y.totalPrice.toFixed(2));

    const sidebarRef = useRef(null);

    const openCart = () => {
        sidebarRef.current.setShow(true);
    }

    console.log(totalPrice != 0, totalPrice);

    return (
        <>
            <div className="navbar">
                <div className="title-container">
                    <h1 className="title">
                        <span style={{ color: "#f8cb45" }}>blink</span>
                        <span style={{ color: "#54b225" }}>it</span>
                    </h1>
                </div>
                <div className="delivery-box">
                    <b>Delivery in 8 Mins</b>
                    <span>Hyderabad, telangana</span>
                </div>
                <div className="search-container">
                    <span className="material-icons search-icon">search</span>
                    <input placeholder="Search ..." />
                </div>
                <button className="btn">Login</button>
                <button className="cart" onClick={openCart}>
                    <span className="material-icons icon">shopping_cart</span>
                    {/* totalPrice: '0.00' != 0 => false */}
                    {totalPrice != 0 ? <div>
                        <span>{totalProducts} Items</span>
                        <span>₹ {totalPrice}</span>
                    </div> : <span>My Cart</span>}
                </button>
            </div>
            <Sidebar ref={sidebarRef} />
        </>
    );
}