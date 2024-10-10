import { useContext } from "react";
import Component3 from "./Component3";
import { Context } from "../App";

const Component2 = () => {
    const x = useContext(Context);

    return <div className="box">
        <h2>Component 2</h2>
        <span>{x}</span>
        <Component3 />
    </div>
}

export default Component2