/**
 * Theme switch app
 */
// const Test = ({ children }) => {
//     console.log(children);
//     return <div>
//         <h1>Test</h1>
//         <div className="children">
//             {children}
//         </div>
//     </div>
// }

import { createContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import { MainBody } from "./components/MainBody";
import "./styles/index.scss";

export const ThemeContext = createContext("dark");

export const ThemeApp = () => {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`container ${theme === "light" ? 'light' : ''}`}>
                <Navbar />
                <MainBody />
            </div>
        </ThemeContext.Provider>
    );
}