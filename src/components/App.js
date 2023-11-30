import React, { useState } from "react";
import DuckList from "./DuckList";
import DuckDisplay from "./DuckDisplay";
import DuckForm from "./DuckForm";
import { useEffect } from "react";

function App() {
  const [ducks, setDucks] = useState([]);
  const [featuredDuck, setFeaturedDuck] = useState({});
  const [duckFormOpen, setDuckFormOpen] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4001/ducks")
      .then((res) => res.json())
      .then((data) => setDucks(data));
  }, []);

  function handleDuckClick(ducks) {
    setFeaturedDuck(ducks);
  }

  function handleDuckFormClick() {
    setDuckFormOpen(!duckFormOpen);
  }

  function postNewDuck(newDuck) {
    fetch("http://localhost:4001/ducks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDuck),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedDucks = [...ducks, data];
        setDucks(updatedDucks);
      });
  }

  return (
    <div className="App">
      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList
        key={ducks.id}
        ducks={ducks}
        handleDuckClick={handleDuckClick}
      />

      <DuckDisplay featuredDuck={featuredDuck} />

      <button onClick={() => handleDuckFormClick()}>
        {duckFormOpen ? "Close" : "Open"} Duck Form
      </button>

      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      {duckFormOpen ? <DuckForm postNewDuck={postNewDuck} /> : null}
    </div>
  );
}

export default App;
