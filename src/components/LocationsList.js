import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";
import { Link } from "react-router-dom";
// import SearchForm from "./SearchForm";

export default function LocationsList() {

    const [chars, fetchChars] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [location, fetchLocation] = useState([]);
    

  return (
    <div>
      <LocationCard 
      key={location.id}
      name={location.name}
      dimension={location.dimension}
      resident={location.resident}
      species={location.species}
      />
    </div>


  );
}

// import styled from "styled-components";





//   return (
//     <div className="CardContainer">
    
//       {chars.filter(characters => 
//     characters.name.toLowerCase().includes(searchInput.toLowerCase())
//   ).map(character => {
//         return (
//           <CharacterCard         />
//         );
//       })}
//     </div>
//   );




