import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faCamera,
  faCheck,
  faEnvelope,
  faImagePortrait,
  faMobileScreen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./UI/Card";
import { useState } from "react";
import DUMMY from "../DUMMY_DATA.json";

const NewContact = ({ closeAdd, addContact, contact }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const numberHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const addHandler = () => {
    const num = Math.random() * 1000;
    const obj = {
      id: num,
      first_name: firstName,
      last_name: lastName,
      ip_address: phone,
      email: email,
    };

    addContact((prevElement) => [...prevElement, obj]);

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  return (
    <Card>
      <div className="layout">
        <div className="top">
          <div className="top_left">
            <button onClick={closeAdd} style={{ paddingInlineEnd: "30px" }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            Create Contact
          </div>
          <div className="top_right">
            <button onClick={closeAdd}>
              <FontAwesomeIcon icon={faCheck} onClick={addHandler} />
            </button>
          </div>
        </div>
        <div className="middle">
          <FontAwesomeIcon
            icon={faCamera}
            style={{ height: "100px", width: "150px" }}
          />
        </div>
        <div className="bottom">
          <div className="memory">
            <div className="memory_left">
              <FontAwesomeIcon icon={faMobileScreen} />
            </div>
            <div className="memory_right">save to memory</div>
          </div>
          <div className="name">
            <div className="name_left">
              <FontAwesomeIcon icon={faImagePortrait} />
            </div>
            <div className="name_right">
              <div className="name_right_up">
                <input
                  value={firstName}
                  type="text"
                  placeholder="first Name"
                  onChange={firstNameHandler}
                />
              </div>
              <div className="name_right_down">
                <input
                  value={lastName}
                  type="text"
                  placeholder="Last Name"
                  onChange={lastNameHandler}
                />
              </div>
            </div>
          </div>
          <div className="number">
            <div className="number_left">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="number_right">
              <input
                value={phone}
                type="number"
                placeholder="Phone number"
                onChange={numberHandler}
              />
            </div>
          </div>
          <div className="mail">
            <div className="mail_left">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="mail_right">
              <input
                value={email}
                type="text"
                placeholder="Email"
                onChange={emailHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewContact;
