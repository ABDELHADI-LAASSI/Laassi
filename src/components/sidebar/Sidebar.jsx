import React, { useState } from 'react';
import './sidebar.css';
import { useApplicationContext } from '../../context/ApplicationContext';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Home'); // Default active link

  const {display_sidebar, setDisplaySidebar} = useApplicationContext()

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className={display_sidebar ? 'sidebar' : 'sidebar hide_sidebar'}>
      <div className="sidebar_top">
        <p className="logo">A<span>B</span>D<span>E</span>L<span>H</span>A<span>D</span>I</p>
      </div>
      <div className="sidebar_center">
        <ul>
          {['Home', 'About', 'Services', 'Project', 'Education', 'Contact'].map((linkName) => (
            <li
              key={linkName}
              onClick={() => handleLinkClick(linkName)}
              className={activeLink === linkName ? 'active_link' : ''}
            >
              <a href={`#${linkName.toLowerCase()}`}>{linkName}</a>
              <span
                className={activeLink === linkName ? 'active_circle circle' : 'circle'}
              >
                <span className="dot"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
