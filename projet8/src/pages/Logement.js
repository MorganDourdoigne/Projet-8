import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Dropdown from "../components/Dropdown";
import data from "../data.json";
import NotFound from "./NotFound";




function Logement() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);



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
    <img className="background_img" src={logement.host.picture} alt="hote" />
  </div>
  <div className="rating">
    {[...Array(5)].map((e, i) => (
      <span key={i} className={i < parseInt(logement.rating) ? "star" : "star_gray"}>
        ★
      </span>
    ))}
  </div>
 </div>
 </div>
      <div>
        <Dropdown id={id}/>  
      </div>
        
      </div>
    </div>
  );
}

export default Logement;
