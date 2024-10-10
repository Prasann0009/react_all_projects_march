import { useLocation } from "react-router-dom";

const About = () => {
    const data = useLocation();
    console.log(data);
    return <h1>About Page</h1>;
}

export default About;