import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <h1>Home Page</h1>
        <Link to="/about">About</Link><br />
        <Link to="../about">Second About link</Link>
    </>
}

export default Home;