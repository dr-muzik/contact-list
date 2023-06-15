import { useState } from "react";
import DUMMY from "../DUMMY_DATA.json";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./UI/Card";
import NewContact from "./NewContact";
import SearchForContact from "./SearchForContact";

const ContactLists = (props) => {
  const [contact, setContact] = useState(DUMMY);
  const [showAdd, setShowAdd] = useState(false);
  const [searchState, setSearchState] = useState(false);

  const detailsHandler = (id) => {
    contact.map((el) => el.id === id && props.getDetails(el));
  };

  return (
    <Card className="bkg-color">
      {showAdd ? (
        <NewContact
          closeAdd={() => setShowAdd(false)}
          addContact={setContact}
          contact={contact}
        />
      ) : (
        <div className="phone">
          {searchState ? (
            <SearchForContact
              showSearch={() => setSearchState(false)}
              contactFilter={contact}
              showDetails={detailsHandler}
            />
          ) : (
            <div>
              <Header openAdd={() => setSearchState(true)} />
              <div className="data">
                {contact
                  .sort((a, b) => {
                    let fa = a.first_name.toLowerCase(),
                      fb = b.first_name.toLowerCase();

                    if (fa < fb) return -1;
                    if (fa > fb) return 1;
                    else return 0;
                  })
                  .map((data) => (
                    <button
                      key={data.id}
                      className="btn"
                      onClick={() => detailsHandler(data.id)}
                    >
                      {data.first_name}
                    </button>
                  ))}
              </div>
              <Footer openAdd={() => setShowAdd(true)} />
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default ContactLists;
