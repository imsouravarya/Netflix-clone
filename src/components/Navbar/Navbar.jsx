import React, { useRef, useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add('nav__black');
      } else {
        navRef.current.classList.remove('nav__black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false); // for mobile menu
  
  const netflixLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';
  const profileIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png';
  
  const navigate = useNavigate();
  const ProfileClick = () => {
    navigate('/login');
  };
  
  return (
    <div className="Navbar" ref={navRef}>
      <div className="navbar-container">
        {/* Left side - Logo and Menu Items */}
        <div className="navbar-left">
          <img src={netflixLogoUrl} alt="Netflix Logo" className="navbar-logo" />

          {/* Hamburger toggle for mobile */}
          <button
            className="navbar-hamburger"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            
            >
  <div className="hamburger-line"></div>
  <div className="hamburger-line"></div>
  <div className="hamburger-line"></div>
          </button>

          <ul className="navbar-menu">
            <li><Link to="/TVshows" className="navbar-menu-item">Now Playing</Link></li>
            <li><Link to="/Movies" className="navbar-menu-item">Popular</Link></li>
            <li><Link to="/News" className="navbar-menu-item">Upcoming</Link></li>
            <li><Link to="/Mylist" className="navbar-menu-item">Top Rated</Link></li>
          </ul>
        </div>

        {/* Right side - Icons and Profile */}
        <div className="navbar-right">
          {/* Search Icon */}
          <div className="navbar-icon" onClick={() => setShowSearch(!showSearch)}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path
                d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Search Field */}
          {showSearch && (
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="navbar-search"
              autoFocus
            />
          )}

          {/* Profile Icon */}
          <div className="navbar-profile">
            <img
              src={profileIconUrl}
              alt="Profile"
              className="profile-image"
              onClick={ProfileClick}
            />
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && <div className="mobile-backdrop" onClick={() => setIsOpen(false)} />}

      {/* Mobile Side Menu */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <button className="mobile-close" aria-label="Close menu" onClick={() => setIsOpen(false)}>✕</button>
        <ul onClick={() => setIsOpen(false)}>
          <li><Link to="/TVshows" className="navbar-menu-item">Now Playing</Link></li>
          <li><Link to="/Movies" className="navbar-menu-item">Popular</Link></li>
          <li><Link to="/News" className="navbar-menu-item">Upcoming</Link></li>
          <li><Link to="/Mylist" className="navbar-menu-item">Top Rated</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
