import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/jquery/dist/jquery.js"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import * as bootstrap from "bootstrap";
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CookiesProvider>
      <App/>
   </CookiesProvider>
  </React.StrictMode>
);
reportWebVitals();
