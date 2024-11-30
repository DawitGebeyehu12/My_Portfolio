import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav id="desktop-nav">
        <div className="logo">Dawit Gebeyehu</div>
        <div>
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Dawit Gebeyehu</div>
        <div className="hamburger-menu">
          <div className={hamburger-icon ${menuOpen ? 'open' : ''}} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={menu-links ${menuOpen ? 'open' : ''}}>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;