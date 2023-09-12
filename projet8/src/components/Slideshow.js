import React, { useState, useEffect } from "react";
import leftArrow from "./arrow_left.png";
import rightArrow from "./arrow_right.png";
import data from "../data.json";

// (f) composant Slideshow props l'ID
function Slideshow({ id }) {
  // L'état qui stocke l'index de l'image actuelle
  const [index, setIndex] = useState(0);
  const home = data.find((item) => item.id === id);
  // variable contenant les images du logement
  const pictures = home.pictures;

  // effet => met à jour le carousel en fonction de l'id du logement
  useEffect(() => {
    // vérification =>index ne dépasse pas la longueur du tableau
    if (index >= pictures.length) {
      // Si oui, début du tableau
      setIndex(0);
    } else if (index < 0) {
      // si oui on va à la fin du tableau
      setIndex(pictures.length - 1);
    }
  }, [id, index, pictures.length]);

  // (f) augmente l'index img quand on clique sur la flèche droite
  function nextImage() {
    setIndex(index + 1);
  }
  // (f) augmente l'index img quand on clique sur la flèche gauche
  function previousImage() {
    setIndex(index - 1);
  }

  const multipleImages = pictures.length > 1;

  return (
    <div className="slideshow">
      <img
        className="slideshow_img"
        src={pictures[index]}
        alt={`Logement ${index + 1}`}
      />
      {multipleImages && (
        <p className="image_number">
          {index + 1}/{pictures.length}
        </p>
      )}
      {multipleImages && (
        <button onClick={previousImage}>
          <img className="arrow arrow_left" src={leftArrow} alt="Gauche" />
        </button>
      )}
      {multipleImages && (
        <button onClick={nextImage}>
          <img className=" arrow arrow_right" src={rightArrow} alt="Droite" />
        </button>
      )}
    </div>
  );
}

export default Slideshow;
