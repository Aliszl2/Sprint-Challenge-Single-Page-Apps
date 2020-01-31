import React, { useState } from "react";
import LocationCard from "./LocationCard";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import SearchForm from "./SearchForm";

export default function LocationsList(props) {
console.log(props);
    const [chars, fetchChars] = useState([]);
    const [searchInput, setSearchInput] = useState("");
                return (
            <div>
              <LocationCard 
              key={props.location.id}
              name={props.location.name}
              dimension={props.location.dimension}
              resident={props.location.resident}
              species={props.location.species}
              />
            </div>
        
          )
//     {props.location.map(character => {
//   return (
//     <div>
//       <LocationCard 
//       key={props.location.id}
//       name={props.location.name}
//       dimension={props.location.dimension}
//       resident={props.location.resident}
//       species={props.location.species}
//       />
//     </div>

//   )})};
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




