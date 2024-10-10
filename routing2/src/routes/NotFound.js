import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <>
            <h1>Oops you came to wrong route , lets go together back to </h1>
            <Link to="home">Home</Link>
        </>
    );
}

export default NotFound;