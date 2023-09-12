import React from "react";

function Banner(props) {
  return (
    <div className="banner">
    <img src={props.image} alt="Paysage" />
    {props.children}</div>
  );
}

export default Banner;
