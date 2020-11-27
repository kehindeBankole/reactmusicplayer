import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main>
      <div className="container" id="home">
        <h1>experience your music like never before</h1>
        <br />
        <button className="btn">
          <Link to="music" style={{ textDecoration: "none", color: "white" }}>
            get started
          </Link>
        </button>
      </div>
    </main>
  );
}

export default Home;
