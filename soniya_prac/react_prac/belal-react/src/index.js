import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/mobile.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageRoutes from "./router/pageRoutes";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
    <PageRoutes/>
  </Router>
  </>
);


