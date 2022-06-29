import React from "react";
import ReactDoM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from './context/ThemeContext'


ReactDoM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);