import React from "react";
import { Link } from "react-router-dom";
import logoRed from './logo_kasa1.png'

function Header() {
  return (
    <header className="header">
      <img src={logoRed} alt="Logo Kasa" className="header-logo" />
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
          <Link to="/" exact="true" className="header-nav-link">Accueil</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/a-propos" className="header-nav-link">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
