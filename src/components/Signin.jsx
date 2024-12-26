import React, { useState } from "react";
import LeftOfSignin from "./LeftofSignin";
import githubLogo from "../images/image 1.png";
import bitbucketLogo from "../images/image 2.png";
import azureLogo from "../images/image.png";
import gitlabLogo from "../images/image (1).png";
import SSOLogo from "../images/Icon.png";
import logo from "../images/Frame 9.svg";
import "./Component.css";
const SignIn = () => {
  const [activeTab, setActiveTab] = useState("SAAS");

  const options = {
    SAAS: [
      { label: "Sign in with Github", icon: githubLogo },
      { label: "Sign in with Bitbucket", icon: bitbucketLogo },
      { label: "Sign in with Azure Devops", icon: azureLogo },
      { label: "Sign in with GitLab", icon: gitlabLogo },
    ],
    "Self Hosted": [
      { label: "Self Hosted GitLab", icon: gitlabLogo },
      { label: "Sign in with SSO", icon: SSOLogo },
    ],
  };

  return (
    <div className="app-container">
      <LeftOfSignin />
      <div className="signin-container">
        <div className="signin-container-top">
          <div className="signin-content">
            <div className="signin-header">
              <img src={logo} alt="CodeAnt AI Logo" className="logo" />
              <h2>Welcome to CodeAnt AI</h2>
            </div>
            <div className="signin-tabs">
              {["SAAS", "Self Hosted"].map((tab) => (
                <button
                  key={tab}
                  className={`btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="signin-main">
            <div className="options">
              {options[activeTab].map((option, index) => (
                <button className="option" key={index}>
                  <img src={option.icon} className="option-icon" />
                  <span className="option-label">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="privacy-policy">
          By signing up you agree to the{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
