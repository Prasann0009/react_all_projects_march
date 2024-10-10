import { Link, useNavigate } from "react-router-dom";

const Entry = () => {
    const navigate = useNavigate();

    const navToAbout = () => {
        if (true) {
            navigate("/about", { state: { name: "aravind", age: 23 } });
        }
        else {
            navigate("/home")
        }
    }

    return <>
        <h2>Entry File</h2>
        <div>
            <div><Link to="about">About</Link></div>
            <div><Link to="home">Home</Link></div>
            <div><Link to="user/100/200">User</Link></div>
            <button onClick={navToAbout}>Navigate To About</button>
        </div>
    </>
}

export default Entry;