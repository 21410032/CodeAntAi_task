import React from 'react'
import './Component.css'
import databaseIcon from '../images/database.svg'
import activeIcon from '../images/activeIcon.svg'
function Repo({repo}) {
  return (
    <div className='repo'>
        <div className="repo-container">
      <div className="repo-head">
        <h2>{repo.title}</h2>
        <div className="badge">{repo.badge}</div>
      </div>
      <div className="repo-desc">
        <div className="platform">
            <p className="platform-name">{repo.platform}</p>
            <img src={activeIcon}></img>
        </div>
        <div className="size">
            <img src={databaseIcon} alt="" />
            <p className="size-value">{repo.size}</p>
        </div>
        <div className="last-update">
            <p className="update-time">{repo.updated_time}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Repo
