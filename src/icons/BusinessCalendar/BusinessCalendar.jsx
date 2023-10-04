/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BusinessCalendar = ({ className }) => {
  return (
    <svg
      className={`business-calendar ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 19.5C12.1978 19.5 12.3911 19.4414 12.5556 19.3315C12.72 19.2216 12.8482 19.0654 12.9239 18.8827C12.9996 18.7 13.0194 18.4989 12.9808 18.3049C12.9422 18.1109 12.847 17.9327 12.7071 17.7929C12.5673 17.653 12.3891 17.5578 12.1951 17.5192C12.0011 17.4806 11.8 17.5004 11.6173 17.5761C11.4346 17.6518 11.2784 17.78 11.1685 17.9444C11.0586 18.1089 11 18.3022 11 18.5C11 18.7652 11.1054 19.0196 11.2929 19.2071C11.4804 19.3946 11.7348 19.5 12 19.5ZM17 19.5C17.1978 19.5 17.3911 19.4414 17.5556 19.3315C17.72 19.2216 17.8482 19.0654 17.9239 18.8827C17.9996 18.7 18.0194 18.4989 17.9808 18.3049C17.9422 18.1109 17.847 17.9327 17.7071 17.7929C17.5673 17.653 17.3891 17.5578 17.1951 17.5192C17.0011 17.4806 16.8 17.5004 16.6173 17.5761C16.4346 17.6518 16.2784 17.78 16.1685 17.9444C16.0586 18.1089 16 18.3022 16 18.5C16 18.7652 16.1054 19.0196 16.2929 19.2071C16.4804 19.3946 16.7348 19.5 17 19.5ZM17 15.5C17.1978 15.5 17.3911 15.4414 17.5556 15.3315C17.72 15.2216 17.8482 15.0654 17.9239 14.8827C17.9996 14.7 18.0194 14.4989 17.9808 14.3049C17.9422 14.1109 17.847 13.9327 17.7071 13.7929C17.5673 13.653 17.3891 13.5578 17.1951 13.5192C17.0011 13.4806 16.8 13.5004 16.6173 13.5761C16.4346 13.6518 16.2784 13.78 16.1685 13.9444C16.0586 14.1089 16 14.3022 16 14.5C16 14.7652 16.1054 15.0196 16.2929 15.2071C16.4804 15.3946 16.7348 15.5 17 15.5ZM12 15.5C12.1978 15.5 12.3911 15.4414 12.5556 15.3315C12.72 15.2216 12.8482 15.0654 12.9239 14.8827C12.9996 14.7 13.0194 14.4989 12.9808 14.3049C12.9422 14.1109 12.847 13.9327 12.7071 13.7929C12.5673 13.653 12.3891 13.5578 12.1951 13.5192C12.0011 13.4806 11.8 13.5004 11.6173 13.5761C11.4346 13.6518 11.2784 13.78 11.1685 13.9444C11.0586 14.1089 11 14.3022 11 14.5C11 14.7652 11.1054 15.0196 11.2929 15.2071C11.4804 15.3946 11.7348 15.5 12 15.5ZM19 3.5H18V2.5C18 2.23478 17.8946 1.98043 17.7071 1.79289C17.5196 1.60536 17.2652 1.5 17 1.5C16.7348 1.5 16.4804 1.60536 16.2929 1.79289C16.1054 1.98043 16 2.23478 16 2.5V3.5H8V2.5C8 2.23478 7.89464 1.98043 7.70711 1.79289C7.51957 1.60536 7.26522 1.5 7 1.5C6.73478 1.5 6.48043 1.60536 6.29289 1.79289C6.10536 1.98043 6 2.23478 6 2.5V3.5H5C4.20435 3.5 3.44129 3.81607 2.87868 4.37868C2.31607 4.94129 2 5.70435 2 6.5V20.5C2 21.2956 2.31607 22.0587 2.87868 22.6213C3.44129 23.1839 4.20435 23.5 5 23.5H19C19.7956 23.5 20.5587 23.1839 21.1213 22.6213C21.6839 22.0587 22 21.2956 22 20.5V6.5C22 5.70435 21.6839 4.94129 21.1213 4.37868C20.5587 3.81607 19.7956 3.5 19 3.5ZM20 20.5C20 20.7652 19.8946 21.0196 19.7071 21.2071C19.5196 21.3946 19.2652 21.5 19 21.5H5C4.73478 21.5 4.48043 21.3946 4.29289 21.2071C4.10536 21.0196 4 20.7652 4 20.5V11.5H20V20.5ZM20 9.5H4V6.5C4 6.23478 4.10536 5.98043 4.29289 5.79289C4.48043 5.60536 4.73478 5.5 5 5.5H6V6.5C6 6.76522 6.10536 7.01957 6.29289 7.20711C6.48043 7.39464 6.73478 7.5 7 7.5C7.26522 7.5 7.51957 7.39464 7.70711 7.20711C7.89464 7.01957 8 6.76522 8 6.5V5.5H16V6.5C16 6.76522 16.1054 7.01957 16.2929 7.20711C16.4804 7.39464 16.7348 7.5 17 7.5C17.2652 7.5 17.5196 7.39464 17.7071 7.20711C17.8946 7.01957 18 6.76522 18 6.5V5.5H19C19.2652 5.5 19.5196 5.60536 19.7071 5.79289C19.8946 5.98043 20 6.23478 20 6.5V9.5ZM7 15.5C7.19778 15.5 7.39112 15.4414 7.55557 15.3315C7.72002 15.2216 7.84819 15.0654 7.92388 14.8827C7.99957 14.7 8.01937 14.4989 7.98079 14.3049C7.9422 14.1109 7.84696 13.9327 7.70711 13.7929C7.56725 13.653 7.38907 13.5578 7.19509 13.5192C7.00111 13.4806 6.80004 13.5004 6.61732 13.5761C6.43459 13.6518 6.27841 13.78 6.16853 13.9444C6.05865 14.1089 6 14.3022 6 14.5C6 14.7652 6.10536 15.0196 6.29289 15.2071C6.48043 15.3946 6.73478 15.5 7 15.5ZM7 19.5C7.19778 19.5 7.39112 19.4414 7.55557 19.3315C7.72002 19.2216 7.84819 19.0654 7.92388 18.8827C7.99957 18.7 8.01937 18.4989 7.98079 18.3049C7.9422 18.1109 7.84696 17.9327 7.70711 17.7929C7.56725 17.653 7.38907 17.5578 7.19509 17.5192C7.00111 17.4806 6.80004 17.5004 6.61732 17.5761C6.43459 17.6518 6.27841 17.78 6.16853 17.9444C6.05865 18.1089 6 18.3022 6 18.5C6 18.7652 6.10536 19.0196 6.29289 19.2071C6.48043 19.3946 6.73478 19.5 7 19.5Z"
        fill="#8D8E8D"
      />
    </svg>
  );
};
