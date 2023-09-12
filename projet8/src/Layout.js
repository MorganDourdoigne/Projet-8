/*contient la structure générale du site web, importe les composants 
et utilise Prop Children pour afficher le contenu spécifique à chaque page */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  return (
    <BrowserRouter>
      <Header />
      {props.children}
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
