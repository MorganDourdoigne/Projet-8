import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import data from "../data.json";
import NotFound from "./NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Logement() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  // Créer un état local pour chaque collapse
  const [openDescribe, setOpenDescribe] = useState(false);
  const [openEquipment, setOpenEquipment] = useState(false);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div className="container_logement">
      <Slideshow id={id} />
      <div>
        <div className="conteneur122">
          <div className="conteneura">
            <div className="display_name">
              <h2 className="logement-title">{logement.title}</h2>
            </div>
            <h3 className="logement-location">{logement.location}</h3>
            <div className="display_rating">
              <ul className="tags">
                {logement.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="conteneurb">
            <div className="display_hote">
              <h2 className="name">{logement.host.name}</h2>
              <img
                className="background_img"
                src={logement.host.picture}
                alt="hote"
              />
            </div>
            <div className="rating">
              {[...Array(5)].map((e, i) => (
                <span
                  key={i}
                  className={
                    i < parseInt(logement.rating) ? "star" : "star_gray"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="container_collapses">
          <div className="column">
            <div className="description">
              <h3 className="texte_des">Description</h3>
              {/* Ajouter un attribut onClick qui modifie l'état */}
              <button
                onClick={() => setOpenDescribe(!openDescribe)}
                className={openDescribe ? "rotate" : ""}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            </div>
            {/* condition ternaire pour le contenu  en fonction son l'état */}
            {openDescribe ? (
              <p className="text_describe">{logement.description}</p>
            ) : null}
          </div>

          <div className="column">
            <div className="description">
              <h3 className="texte_des">Équipements</h3>
              {/* onClick qui modifie l'état */}
              <button
                onClick={() => setOpenEquipment(!openEquipment)}
                className={openEquipment ? "equip rotate" : "equipment"}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            </div>
            {/*condition ternaire pour le contenu  en fonction son l'état */}
            {openEquipment ? (
              <ul className="text_describe">
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
