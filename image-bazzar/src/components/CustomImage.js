import { useEffect, useState } from "react";
import "../styles/custom-image.scss";

// status = 1 (pending) , 2 (error) , 3 (success)

const CustomImage = ({ url }) => {
    const [status, setStatus] = useState(1);

    useEffect(() => {
        const image = new Image();
        image.onload = function () {
            setStatus(3);
        }
        image.onerror = function () {
            setStatus(2);
        }
        image.src = url;
    }, []);

    if (status === 1) return <div className="image-loading-skeleton"></div>

    if (status === 2) return <p>Loading Error</p>;

    return (
        <img src={url} className="image" />
    );
}

export default CustomImage;
// babel => will pre process the jsx code and converts into React elements 
// sass => will pre process the .scss code into css