import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FunctionalComponent from "./FunctionalComponent"
import StateUpdationFlow from './StateUpdationFlow';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const Wrapper = () => {
//   const [show, setShow] = useState(true);

//   return <>
//     <button onClick={() => setShow(!show)}>Unmount App component</button>
//     {show && <App />}
//   </>
// }

root.render(
  <>
    {/* <Wrapper /> */}
    {/* <FunctionalComponent /> */}
    <StateUpdationFlow />
  </>
);
