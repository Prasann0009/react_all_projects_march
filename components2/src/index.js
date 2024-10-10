import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter';
import Greeting from './Greeting';
import Cart from "./Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App name="aravind" age={23} /> */}
    {/* <Counter /> */}
    {/* <Greeting /> */}
    <Cart />
  </>
);


//CC: <App name="aravind" age={23} /> => new App({name: "aravind", age: 23})
//FC: <App name="aravind" age={23} /> => App({name: "aravind", age: 23})