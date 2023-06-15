import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = ({ openAdd }) => {
  return (
    <div className="icons">
      <h2>Contacts</h2>
      <div className="left">
        <FontAwesomeIcon
          onClick={openAdd}
          style={{ paddingInlineEnd: "20px" }}
          icon={faMagnifyingGlass}
        />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

export default Header;
