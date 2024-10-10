// Routing 

import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { ThemeApp } from "../theme";

/**
 * Server side routing: 
 *  For every page url change a request will be made to server for loading the content of that page.
 * 
 * Client side routing:
 * All the UI will be loaded once , when changed the URL logically the UI gets updated within the browser without making any request to server.
 * 
 * react-router-dom: 
 * BrowserRouter => context provided related to routing.
 * Routes => wrapper which holds multiple routes
 * Route => defines a page
 */

const Profile = () => {
    const navigate = useNavigate();
    // navigate function
    const navigateToUsers = () => {
        let sum = 0;
        for (let i = 0; i < 100; i++) {
            sum += i;
        }
        navigate("/users")
    }

    return (
        <div>
            <p>Profile Component</p>
            <a href="https://google.com">Google</a>
            {/* <a href="/users">Users Page</a> */}
            {/* <Link to="/users">Users Page</Link> */}
            <button onClick={navigateToUsers}>Navigate</button>
        </div>
    )
}

const SoftSkills = () => {
    const params = useParams();
    console.log(params);
    return <div>
        <h1>Soft Skills</h1>
        <p>This is a page related to softskills</p>
    </div>
}

const RoutingApp = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={
                        <div>
                            <div><Link to="/theme">Theme App</Link></div>
                            <div><Link to="/profile">Visit Profile</Link></div>
                            <div><Link to="/users">Users Page</Link></div>
                        </div>
                    } />
                    <Route path="theme" Component={ThemeApp} />
                    <Route path="/profile" Component={Profile} />
                    <Route path="/users" element={<h1>users page</h1>} />
                    <Route path="/softskills/:skillId" Component={SoftSkills} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RoutingApp;
