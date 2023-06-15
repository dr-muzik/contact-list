import React from "react";
// import Wrapper from "./Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faFemale,
  faImagePortrait,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Card from "./UI/Card";

const Contact = (props) => {
  const backPageHandler = () => {
    props.goBack();
  };
  /* const contactHandler = () => {
    return console.log(props.contact);
  }; */
  return (
    <Card className="contact_detail">
      <div className="phone">
        <div className="name">
          <div className="icon_heading">
            <button onClick={backPageHandler}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <h3>Contact Details</h3>
          </div>
          <div className="name_picholder">
            <FontAwesomeIcon
              icon={faImagePortrait}
              style={{ height: "100px", width: "150px" }}
            />
            <p>{`${props.contact.first_name} ${props.contact.last_name}`}</p>
          </div>
        </div>
        <div className="data">
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            {props.contact.email}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faFemale} />
            </span>{" "}
            {props.contact.gender}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            {props.contact.ip_address}
          </p>
          <br />
        </div>
      </div>
    </Card>
  );
};

export default Contact;
