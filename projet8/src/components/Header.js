import React from "react";
import { NavLink } from "react-router-dom";
import logoRed from './logo_kasa1.png'

function Header() {
  return (
    <header className="header">
      <img src={logoRed} alt="Logo Kasa" className="header-logo" />
      <nav className="header-nav">
        <ul className="header-nav-list active">
          <li className="header-nav-item">
            <NavLink to="/"  className="header-nav-link">Accueil</NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="/a-propos"  className="header-nav-link">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
