import React from "react";
import Repo from "./Repo";
import "./Component.css";
import searchIcon from "../images/searchIcon.svg";
import refreshIcon from "../images/refreshIcon.svg";
import addIcon from "../images/addIcon.svg";

function Repositories({ repos = [] }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(event.target.value);
    }
  };

  const filteredRepos = repos.filter((repo) =>
    repo && repo.title && repo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="repositories-container">
      <div className="header-container">
        <div className="repos-header">
          <div className="repositories-head">
            <h1>Repositories</h1>
            <p>{repos.length} total repositories</p>
          </div>
          <div className="head-buttons">
            <div className="btn">
              <button className="refresh-button">
                <img src={refreshIcon} alt="Refresh Icon" />
                Refresh All
              </button>
            </div>
            <div className="btn">
              <button className="add-repo-button">
                <img src={addIcon} alt="Add Icon" />
                Add Repository
              </button>
            </div>
          </div>
        </div>
        <div className="search-container">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search Repositories"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
      </div>
      <div className="repositories-list">
        {filteredRepos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default Repositories;