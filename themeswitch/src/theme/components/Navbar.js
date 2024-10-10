import { useContext } from "react";
import "../styles/navbar.scss";
import { ThemeContext } from "..";

export const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        // theme === "dark" ? setTheme("light") : setTheme("dark");
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    const themeClassName = theme === 'light' ? 'light' : '';

    return (
        <div className="navbar">
            <button onClick={changeTheme}>Change Theme</button>
            <div className="right">
                <div className={`timer ${themeClassName}`}>
                    <span className="material-icons">schedule</span>
                    <span>Order is arriving in 10 min</span>
                </div>
                <span className={`material-icons icon cart ${themeClassName}`}>shopping_cart</span>
                <span className={`material-icons icon message ${themeClassName}`}>send</span>
            </div>
        </div>
    );
}