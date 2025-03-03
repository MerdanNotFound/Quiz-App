import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="card-container">
        <div className="card">
          <h3>Synaga başla</h3>
          <Link to="/exam" className="card-link">
            Let's GO
          </Link>
        </div>
        <div className="card">
          <h3>Indiwidual synaga başla</h3>
          <Link to="/i-exam" className="card-link">
            Let's GO
          </Link>
        </div>
        <div className="card">
          <h3>Okuwçy netijeleri</h3>
          <Link to="/results" className="card-link">
            Let's GO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
