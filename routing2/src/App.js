import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import User from "./routes/User";
import Entry from "./routes/Entry";
import NotFound from "./routes/NotFound";
import Services from "./routes/services";

// routes: /about , /home, /user/userId
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Entry} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/:x/:y" Component={User} />
          <Route path="services" Component={Services}>
            <Route path="" element={<b>Card 1</b>} />
            <Route path="groceries" element={<h2>groceries Page</h2>} />
            <Route path="food" element={<h2>Food Page</h2>} />
            {/* Nested Route */}
          </Route>
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;

// /services/food
// Outlet:  <h2>Food Page</h2>


// /services/groceries => 

//  <h1>Services Home screen</h1>
//  <h2>groceries Page</h2>


// /services
// Outlet : null
// <h1>Services Home screen</h1>