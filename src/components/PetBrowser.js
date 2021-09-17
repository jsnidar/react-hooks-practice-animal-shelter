import React from "react";

import Pet from "./Pet";

function PetBrowser({onAdoptPet, pets}) {

  const renderPets = pets.map(pet => <Pet key={pet.id} onAdoptPet={onAdoptPet} pet={pet} /> )
  return <div className="ui cards">{renderPets}</div>;
}

export default PetBrowser;
