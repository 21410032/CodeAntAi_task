import React from "react";
import secCardIcon from "../images/sec-card-Icon.svg";
import ArrowIcon from "../images/ArrowIcon.svg";
import bgImage from "../images/Subtract.png";
import logoIcon from '../images/logoIcon.svg';
const LeftofSignin = () => {
  return (
    <div className="SignIn-left-container">
      <div className="cards">
        <div className="primary-card">
            <div className="card-head">
          <img src={logoIcon}></img><h3>AI to Detect & Autofix Bad Code</h3>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <p className="value">30+</p>
              <p className="label">Language Support</p>
            </div>
            <div className="stat-item">
              <p className="value">10K+</p>
              <p className="label">Developers</p>
            </div>
            <div className="stat-item">
              <p className="value">100K+</p>
              <p className="label">Hours Saved</p>
            </div>
          </div>
        </div>

        <div className="card secondary">
          <div className="secondary-card-top">
            <div className="card-icon">
              <img src={secCardIcon}></img>
            </div>
            <div className="growth">
              <p>
                <img src={ArrowIcon}></img>
                14%
                <br />
                <small>This week</small>
              </p>
            </div>
          </div>

          <div className="issues-fixed">
            <h4>Issues Fixed</h4>
            <p className="count">500K+</p>
          </div>
        </div>
      </div>
        <div className="background-shape">
        <img src={bgImage}></img>
      </div>
    </div>
  );
};

export default LeftofSignin;
