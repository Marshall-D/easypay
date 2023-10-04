/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Scroll = ({
  className,
  polygon = "https://c.animaapp.com/ALsvK82i/img/polygon-2-1.svg",
  rectangleClassName,
  img = "https://c.animaapp.com/ALsvK82i/img/polygon-3-1.svg",
}) => {
  return (
    <div className={`SCROLL ${className}`}>
      <div className="frame-2">
        <img className="polygon" alt="Polygon" src={polygon} />
        <div className={`rectangle ${rectangleClassName}`} />
      </div>
      <img className="polygon" alt="Polygon" src={img} />
    </div>
  );
};

Scroll.propTypes = {
  polygon: PropTypes.string,
  img: PropTypes.string,
};
