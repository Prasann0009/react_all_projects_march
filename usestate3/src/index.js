import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ColumnShuffle from './column-shuffle';
import WeatherApp from './weather-app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <ColumnShuffle /> */}
    <WeatherApp />
  </>
);
