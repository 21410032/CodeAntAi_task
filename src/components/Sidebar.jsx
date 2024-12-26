import React, { useState } from 'react';
import logo from '../images/Frame 9.png';
import repoIcon from '../images/repoIcon.svg';
import aiCodeIcon from '../images/aiCodeIcon.svg';
import cloudSecurityIcon from '../images/cloudSecurity.svg';
import useIcon from '../images/use.svg';
import settingsIcon from '../images/settings.svg';
import supportIcon from '../images/support.svg';
import logoutIcon from '../images/logout.svg';
import barsIcon from '../images/bars.svg';
import crossIcon from '../images/cross.svg';
import './Component.css'
import dropdownIcon from '../images/chevron-down.svg'
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const navItems = [
        { name: 'Repositories', link: '/', img: repoIcon },
        { name: 'AI Code Review', link: '/ai-code-review', img: aiCodeIcon },
        { name: 'Cloud Security', link: '/cloud-security', img: cloudSecurityIcon },
        { name: 'How to Use', link: '/how-to-use', img: useIcon },
        { name: 'Settings', link: '/settings', img: settingsIcon },
    ];
    
    const getNavLinkClass = ({ isActive }) => (isActive ? 'list-el active' : 'list-el');

    return (
        <header className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="navigation">
                <div className="nav-head">
                    <div className="logo"><img src={logo} alt="" className="log-img" /></div>
                    <div className="input-dropdown">
                        <div className="dropdown">
                            <button className="dropbtn"><span>UtkarshDhairyaPa...</span><img src={dropdownIcon} alt="" /></button>
                            <div className="dropdown-content">
                                <a href="#">UtkarshDhairyaPanwar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="nav-lists">
                    {navItems.map((item, index) => (
                        <NavLink to={item.link} className={getNavLinkClass} key={index}>
                            <img src={item.img} alt="" className="list-icon" />
                            <p className="list-name">{item.name}</p>
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className="footer-nav">
                <NavLink to="/support" className="list-el">
                    <img src={supportIcon} alt="" className="list-icon" ></img>
                    <p className="list-name">Support</p>
                </NavLink>
                <NavLink to="/logout" className="list-el">
                    <img src={logoutIcon} alt="" className="list-icon" ></img>
                    <p className="list-name">Logout</p>
                </NavLink>
                
            </div>
          
                <img className='hamburger' onClick={toggleSidebar} src={isSidebarOpen ? crossIcon : barsIcon} alt="toggle sidebar" />
         
        </header>
    );


}

export default Sidebar
