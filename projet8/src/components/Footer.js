import React from "react";
import logoBlack from './logoBlack.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={logoBlack} alt="Logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
