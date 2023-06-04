import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

function App() {
  return (
    <div className="App">
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
