import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import FormValidation from './FormValidation';
import App from './App';
import Timer from './Timer';
import Pincode from "./Pincode.js"
import { AxiosUsage } from './Axios.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <FormValidation /> */}
    {/* <App /> */}
    {/* <Timer /> */}
    {/* <Pincode /> */}
    <AxiosUsage />
  </>
);
