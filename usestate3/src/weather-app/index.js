import { useState } from "react";
import { weatherData } from "./data";
import "./weather.css";

const WeatherApp = () => {
    const [activeWeatherId, setActiveWeatherId] = useState(0);

    return (
        <div style={{ backgroundImage: `url(${weatherData[activeWeatherId].backgroundImage})` }} className="root-container">
            <div className="options">
                {
                    weatherData.map(({ condition }, index) => {
                        return <button key={index} className={index === activeWeatherId ? 'active' : ''} onClick={() => setActiveWeatherId(index)}>{condition}</button>
                    })
                }
            </div>
            <div>
                <h3>Min: {weatherData[activeWeatherId].min}°C</h3>
                <h3>Max: {weatherData[activeWeatherId].max}°C</h3>
            </div>
        </div>
    );
}

export default WeatherApp;