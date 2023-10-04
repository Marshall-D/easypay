/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowArrowLeftSm19 = ({ color = "#4D8177", className }) => {
  return (
    <svg
      className={`arrow-arrow-left-sm-19 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M7 12H17" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        className="path"
        d="M13 8L17 12L13 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowArrowLeftSm19.propTypes = {
  color: PropTypes.string,
};
