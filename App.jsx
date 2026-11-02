import React from "react";
import "./App.css";
import AboutUs from "./AboutUs.jsx";
function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring Nature Into Your Home
        </p>

        <p>
          Discover beautiful houseplants and make
          your home greener and healthier.
        </p>

        <button
          className="get-started-btn"
          onClick={() => {
            window.location.href = "#plants";
          }}
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

export default App;
