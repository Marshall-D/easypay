/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowsSwitch = ({ className }) => {
  return (
    <svg
      className={`arrows-switch ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.2497 7.74998H7.55482L10.0309 5.28451C10.1721 5.1434 10.2515 4.95201 10.2515 4.75245C10.2515 4.55289 10.1721 4.3615 10.0309 4.22039C9.88956 4.07928 9.69794 4 9.49813 4C9.29832 4 9.10669 4.07928 8.96541 4.22039L5.21385 7.9673C5.14554 8.03857 5.09199 8.12261 5.05628 8.2146C4.98124 8.39704 4.98124 8.60168 5.05628 8.78413C5.09199 8.87611 5.14554 8.96015 5.21385 9.03142L8.96541 12.7783C9.03516 12.8486 9.11814 12.9043 9.20958 12.9424C9.30101 12.9804 9.39908 13 9.49813 13C9.59718 13 9.69525 12.9804 9.78668 12.9424C9.87811 12.9043 9.9611 12.8486 10.0309 12.7783C10.1012 12.7087 10.157 12.6258 10.1951 12.5345C10.2332 12.4431 10.2528 12.3452 10.2528 12.2463C10.2528 12.1473 10.2332 12.0494 10.1951 11.9581C10.157 11.8668 10.1012 11.7839 10.0309 11.7142L7.55482 9.24874H13.2497C13.4487 9.24874 13.6395 9.16979 13.7802 9.02925C13.9209 8.88872 14 8.69811 14 8.49936C14 8.30061 13.9209 8.11 13.7802 7.96947C13.6395 7.82893 13.4487 7.74998 13.2497 7.74998Z"
        fill="black"
      />
      <path
        className="path"
        d="M10.7503 15.75H16.4452L13.9691 13.2845C13.8279 13.1434 13.7485 12.952 13.7485 12.7524C13.7485 12.5529 13.8279 12.3615 13.9691 12.2204C14.1104 12.0793 14.3021 12 14.5019 12C14.7017 12 14.8933 12.0793 15.0346 12.2204L18.7862 15.9673C18.8545 16.0386 18.908 16.1226 18.9437 16.2146C19.0188 16.397 19.0188 16.6017 18.9437 16.7841C18.908 16.8761 18.8545 16.9602 18.7862 17.0314L15.0346 20.7783C14.9648 20.8486 14.8819 20.9043 14.7904 20.9424C14.699 20.9804 14.6009 21 14.5019 21C14.4028 21 14.3048 20.9804 14.2133 20.9424C14.1219 20.9043 14.0389 20.8486 13.9691 20.7783C13.8988 20.7087 13.843 20.6258 13.8049 20.5345C13.7668 20.4431 13.7472 20.3452 13.7472 20.2463C13.7472 20.1473 13.7668 20.0494 13.8049 19.9581C13.843 19.8668 13.8988 19.7839 13.9691 19.7142L16.4452 17.2487H10.7503C10.5513 17.2487 10.3605 17.1698 10.2198 17.0293C10.0791 16.8887 10 16.6981 10 16.4994C10 16.3006 10.0791 16.11 10.2198 15.9695C10.3605 15.8289 10.5513 15.75 10.7503 15.75Z"
        fill="black"
      />
    </svg>
  );
};