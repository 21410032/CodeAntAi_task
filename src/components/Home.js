import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Component.css";
const Home = () => {
  return (
    <div>
      <div className="link-box-container">
        <Link to="/repositories" className="link-box">
          Repositories
        </Link>
        <Link to="/signin" className="link-box">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Home;
