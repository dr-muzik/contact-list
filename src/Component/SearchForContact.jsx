import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Card from "./UI/Card";

const SearchForContact = ({ showSearch, contactFilter, showDetails }) => {
  const [filterContact, setFilterContact] = useState("");

  const filterHandler = (e) => {
    setFilterContact(e.target.value);
  };

  return (
    <div className="layout">
      <div className="header">
        <div className="back">
          <FontAwesomeIcon icon={faArrowLeft} onClick={showSearch} />
        </div>

        <div className="input">
          <FontAwesomeIcon icon={faSearch} style={{ paddingInline: "5px" }} />
          <input onChange={filterHandler} type="search" />
        </div>
      </div>
      <div className="body">
        {contactFilter.filter((el) =>
          (
            <button
              key={el.id}
              className="btn"
              onClick={() => showDetails(el.id)}
            >
              {el.first_name}
            </button>
          ).includes(filterContact)
        )}
      </div>
    </div>
  );
};

export default SearchForContact;
