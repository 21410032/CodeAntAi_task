import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
       <nav className="navigation-links" style={{ padding: '10px', background: '#f4f4f4' }}>
          <Link to="/repositories" style={{ marginRight: '15px', textDecoration: 'none', color: '#1570ef' }}>
            Repositories
          </Link>
          <Link to="/signin" style={{ textDecoration: 'none', color: '#1570ef' }}>
            Sign In
          </Link>
        </nav>
    </div>
  )
}

export default Home
