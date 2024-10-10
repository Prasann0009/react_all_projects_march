// import Code from "./components/Code";
import { Suspense, lazy } from "react";
// import { Issues } from "./components/Issues";
// import { Pulls } from "./components/Pulls";
import { Repository } from "./components/Repository";
import LoadingWrapper from "./components/LoadingWrapper";
const Code = lazy(() => import("./components/Code"));
const Issues = lazy(() => import("./components/Issues"))
const Pulls = lazy(() => import("./components/Pulls"));

const { BrowserRouter, Routes, Route } = require("react-router-dom")

const GitHubRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" Component={Repository}>
                    <Route
                        path="/"
                        element={<LoadingWrapper screenName="Code" Child={Code} />}
                    />
                    <Route
                        path="/issues"
                        element={<LoadingWrapper screenName="issues" Child={Issues} />}
                    />
                    <Route
                        path="/pulls"
                        element={<LoadingWrapper screenName="Pull requests" Child={Pulls} />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default GitHubRouting;