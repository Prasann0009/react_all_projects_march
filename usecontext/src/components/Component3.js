import { useContext } from "react";
import { Context } from "../App";

const Component3 = () => {
    const value = useContext(Context)
    console.log(value);

    return <div className="box">
        <h3>Component 3 , {value} </h3>
    </div>
}

export default Component3;