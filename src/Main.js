import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="search" element={ <SearchPage /> } />
      </Routes>
      <Footer />
    </div>

    // <Router>

    // </Router>
  );
}

export default Main;
