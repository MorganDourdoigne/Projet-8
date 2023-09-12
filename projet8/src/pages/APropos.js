import Banner from "../components/Banner";
import imgAbout from "./ImgAbout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function APropos() {
  const [openFiabilite, setOpenFiabilite] = useState(false);
  const [openRespect, setOpenRespect] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);

  return (
    <div className="a-propos">
      <Banner image={imgAbout} title="A propos de Kasa" />
      <div className="containerCollapses">
        <div className="margin_bottom">
          <div className="titleCollapse">
            <h2 id="police">Fiabilité</h2>
            <button
              onClick={() => setOpenFiabilite(!openFiabilite)}
              className={openFiabilite ? "rotate" : ""}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>
          {openFiabilite ? (
            <p className="pCollapse content">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          ) : null}
        </div>

        <div className="margin_bottom">
          <div className="titleCollapse">
            <h2 id="police1">Respect</h2>
            <button
              onClick={() => setOpenRespect(!openRespect)}
              className={openRespect ? "rotate" : ""}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>
          {openRespect ? (
            <p className="pCollapse content">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          ) : null}
        </div>

        <div className="margin_bottom">
          <div className="titleCollapse">
            <h2 id="police2">Service</h2>
            <button
              onClick={() => setOpenService(!openService)}
              className={openService ? "rotate" : ""}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>
          {openService ? (
            <p className="pCollapse content">
              Notre service client est à votre disposition pour répondre à
              toutes vos questions et vous aider à trouver le logement idéal.
            </p>
          ) : null}
        </div>

        <div className="margin_bottom">
          <div className="titleCollapse">
            <h2 id="police3">Sécurité</h2>
            <button
              onClick={() => setOpenSecurity(!openSecurity)}
              className={openSecurity ? "rotate" : ""}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>
          {openSecurity ? (
            <p className="pCollapse content">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux criètes de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default APropos;
