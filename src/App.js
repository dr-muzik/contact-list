// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import "./Styles/index.scss";
import "./Styles/helpers.scss";
import ContactLists from "./Component/ContactLists";
// import Footer from "./Component/Footer";

import Contact from "./Component/Contact";

import Test from "./Component/Test";
// import DUMMY_DATA from "./DUMMY_DATA.json";

function App() {
  const [showContact, setShowContact] = useState(false);

  const [details, setDetails] = useState(null);

  const contactHandler = (el) => {
    setShowContact(true);
    setDetails(el);
    // console.log(details);
  };

  const logoutHandler = () => {
    setShowContact(false);
  };

  return (
    <div className="App">
      <main>
        {/* <Test /> */}
        {!showContact && <ContactLists getDetails={contactHandler} />}
        {showContact && (
          <Contact goBack={logoutHandler} contact={details} />
        )}{" "}
        {/* {!isActive && <NewContact />} */}
      </main>
    </div>
  );
}

export default App;
