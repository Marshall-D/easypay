/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowChevronRight = ({ color = "#515251", className }) => {
  return (
    <svg
      className={`arrow-chevron-right ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 22 24"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.5 10L11 14L7.5 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
};

ArrowChevronRight.propTypes = {
  color: PropTypes.string,
};
