/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UserInterfaceMagnifier } from "../../icons/UserInterfaceMagnifier";
import "./style.css";

export const Search = ({
  className,
  divClassName,
  frameClassName,
  userInterfaceMagnifierColor = "#4E4E4E",
  inputType = "text",
}) => {
  return (
    <div className={`SEARCH ${className}`}>
      <input className={`search-employee ${divClassName}`} placeholder="Search employee" type={inputType} />
      <div className={`frame ${frameClassName}`}>
        <UserInterfaceMagnifier className="user-interface" color={userInterfaceMagnifierColor} />
      </div>
    </div>
  );
};

Search.propTypes = {
  userInterfaceMagnifierColor: PropTypes.string,
  inputType: PropTypes.string,
};
