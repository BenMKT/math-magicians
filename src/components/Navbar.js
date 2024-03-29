import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="NavBarContainer">
    <h1>Math Magicians </h1>
    <nav className="Navbar">
      <Link to="/" className="NavBarLinks">
        Home
      </Link>
      <Link to="/Calculator" className="NavBarLinks">
        Calculator
      </Link>
      <Link to="/Quote" className="NavBarLinks">
        Quote
      </Link>
    </nav>
  </div>
);

export default Navbar;
