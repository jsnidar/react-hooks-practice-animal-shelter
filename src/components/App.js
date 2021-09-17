import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const API = `http://localhost:3001/pets`
  const queryParamater = `?type=${filters.type}`

  const onChangeType = (type) => {
    setFilters({type: type})
  }

  const onFindPetsClick = () => {
    console.log(filters)
    if(filters.type === 'all') {
      fetch(API)
      .then(r => r.json())
      .then(petsArr => setPets(petsArr))
    }else{
      fetch(API + queryParamater)
      .then(r => r.json())
      .then(petsArr => setPets(petsArr))
    }
  }

  const onAdoptPet = (id) => {
    console.log(id)
    fetch(API + '/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isAdopted: true
      })
    })
    .then(r => r.json())
    .then(updatedPet => console.log(updatedPet))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick={onFindPetsClick} onChangeType={onChangeType} />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
