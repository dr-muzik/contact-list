import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Footer = ({ openAdd }) => {
  return (
    <div className="icon">
      <button onClick={openAdd}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          style={{ height: "30px", width: "60px" }}
        />
      </button>
    </div>
  );
};

export default Footer;
