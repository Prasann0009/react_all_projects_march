import { useContext } from "react";
import "../styles/search.scss";
import { ThemeContext } from "..";

export const SearchBar = () => {
    const { theme } = useContext(ThemeContext);
    const themClassName = theme === 'light' ? 'light' : '';
    return (
        <div className={`searchbar ${themClassName}`}>
            <input placeholder="What i can do for you ?" />
            <span>Press and hold S to speak</span>
            <span className={`material-icons icon ${themClassName}`}>mic</span>
        </div>
    );
};