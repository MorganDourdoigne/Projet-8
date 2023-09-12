// Le fichier App.js est le composant principal de votre application. Il utilise le module react-router-dom pour gérer la navigation entre les différentes pages de votre site.
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import APropos from "./pages/APropos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
