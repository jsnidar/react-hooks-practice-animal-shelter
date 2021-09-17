import React, {useState} from "react";

function Pet({pet, onAdoptPet}) {

  const [isAdopted, setIsAdopted] = useState(pet.isAdopted)

  const alreadyAdopted = <button className="ui disabled button">Already adopted</button>

  const handleAdopt = () => {
    onAdoptPet(pet.id)
    setIsAdopted(true)
  }

  const adopt = <button onClick={handleAdopt} className="ui primary button">Adopt pet</button>


  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        {pet.gender === "male" ? '♂' : '♀'}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age} </p>
          <p>Weight: {pet.weight} </p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? alreadyAdopted : adopt}
      </div>
    </div>
  );
}

export default Pet;
