import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function Dropdown() {
    const { id } = useParams();
    const logement = data.find((logement) => logement.id === id);

    // Créer un état local pour chaque collapse
    const [openDescribe, setOpenDescribe] = useState(false);
    const [openEquipment, setOpenEquipment] = useState(false);
    return (
        <div className="container_collapses">
          <div className="column">
          <div className="description">
            <h3 className="texte_des">Description</h3>
            {/* Ajouter un attribut onClick qui modifie l'état */}
            <button onClick={() => setOpenDescribe(!openDescribe)}className={openDescribe ? "rotate" : ""}><FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>
          {/* condition ternaire pour le contenu  en fonction son l'état */}
          {openDescribe ? <p className="text_describe">{logement.description}</p> : null}
          </div>

          <div className="column">
          <div className="description">
            <h3 className="texte_des">Équipements</h3>
            {/* onClick qui modifie l'état */}
            <button onClick={() => setOpenEquipment(!openEquipment)} className={openEquipment ? "equip rotate" : "equipment"}>
            <FontAwesomeIcon icon={faChevronUp} /></button>
    </div>
    {/*condition ternaire pour le contenu  en fonction son l'état */}
    {openEquipment ? (
    <ul className="text_describe">{logement.equipments.map((equipment) => (<li key={equipment}>{equipment}</li>))}</ul>
       ) : null}
        </div>
        </div>
    )
    
}

export default Dropdown;