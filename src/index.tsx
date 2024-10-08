import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import "./styles/sort.css";
import "./styles/sidemenu.css";
import "./styles/mainpage.css";
import "./styles/header.css";
import "./styles/topnav.css";
import "./styles/dropdown.css";
import "./styles/ds.css";
import "./styles/code.css";
import "./styles/linked_list.css";
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
