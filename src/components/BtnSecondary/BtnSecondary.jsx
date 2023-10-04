/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MultimediaEqualizer2 } from "../../icons/MultimediaEqualizer2";
import "./style.css";

export const BtnSecondary = ({
  className,
  frameClassName,
  multimediaEqualizer2Color = "#B9BBC0",
  divClassName,
  hasDiv = true,
}) => {
  return (
    <div className={`BTN-SECONDARY ${className}`}>
      <div className={`div ${frameClassName}`}>
        <MultimediaEqualizer2
          className="multimedia-equalizer"
          color={multimediaEqualizer2Color}
        />
        <div className={`text-wrapper ${divClassName}`}>Filter</div>
      </div>
      {hasDiv && <div className="text-wrapper-2">All</div>}
    </div>
  );
};

BtnSecondary.propTypes = {
  multimediaEqualizer2Color: PropTypes.string,
  hasDiv: PropTypes.bool,
};
