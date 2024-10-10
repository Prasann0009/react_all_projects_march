import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ListAccordion from './Accordion';
import MoviesApp from './movies-app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App n={105} /> */}
    {/* <ListAccordion /> */}
    <MoviesApp />
  </>
);
