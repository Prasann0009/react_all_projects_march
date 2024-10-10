import { useParams } from "react-router-dom";

const User = () => {
    const { x, y } = useParams();
    return <h1>User Page, {x} , {y} </h1>
}

export default User;