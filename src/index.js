import React from "react";
import ReactDOM from "react-dom/client";
// import Home from './Home';
import "./index.css";
import Main from "./Main";
// import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      {/* <App /> */}
      <Main />
  </BrowserRouter>
);
