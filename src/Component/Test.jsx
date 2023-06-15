import React from "react";
import { useState } from "react";
import DUMMY from "../DUMMY_DATA.json";

const Test = () => {
  const [contact, setContact] = useState(DUMMY);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();

  console.log(contact);
  //   setContact((prevState) => [...prevState, JSON.parse(DUMMY)]);
  const fNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const handler = () => {
    const obj = {
      id: Math.random(),
      age: age,
      first_name: firstName,
      lName: lastName,
    };

    setContact((prevState) => [...prevState, obj]);
  };
  return (
    <div>
      <input type="text" placeholder="firstname" onChange={fNameHandler} />
      <input type="number" placeholder="age" onChange={lNameHandler} />
      <input type="text" placeholder="lastname" onChange={ageHandler} />
      <br />
      <br />
      <button onClick={handler}>send</button>
      <br />
      {contact.map((el) => (
        <li>{el.first_name}</li>
      ))}
    </div>
  );
};

export default Test;
