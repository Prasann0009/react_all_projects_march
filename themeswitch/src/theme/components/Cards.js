import { useContext } from "react";
import "../styles/cards.scss";
import { ThemeContext } from "..";

const cards = [
    {
        icon: "notifications",
        title: "Order food delivery"
    },
    {
        icon: "shopping_cart",
        title: "Buy Something"
    },
    {
        icon: "local_mall",
        title: "Order groceries"
    },
    {
        icon: "bookmarks",
        title: "Book a hotel"
    }
]

export const Cards = () => {
    const { theme } = useContext(ThemeContext);
    const themeClassName = theme === "light" ? 'light' : '';

    return (
        <div className={`cards-container ${themeClassName}`}>
            {
                [...cards, ...cards].map((card, index) => (
                    <div className={`card ${themeClassName}`} key={index}>
                        <span className="material-icons">{card.icon}</span>
                        <span className="title">{card.title}</span>
                    </div>
                ))
            }
        </div>
    )
};