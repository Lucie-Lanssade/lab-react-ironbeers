import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/accueil.png';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={homeIcon} alt="home"></img>
      </Link>
    </div>
  );
}

export default Header;
