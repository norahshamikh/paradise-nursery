import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>Bring Nature Into Your Home</p>

        <p>
          Discover beautiful houseplants and make
          your home greener and healthier.
        </p>

        <button
          className="get-started-btn"
          onClick={() => navigate("/plants")}
        >
          Get Started
        </button>

        <section style={{ marginTop: "40px" }}>
          <AboutUs />
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
