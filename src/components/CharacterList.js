import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
// import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, fetchChars] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  const searchChanged = event => {
    setSearchInput(event.target.value);
  };

  // const filteredChars = chars.filter(characters => 
  //   characters.name.toLowerCase().includes(searchInput.toLowerCase())
  // )
  // console.log(searchInput);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    console.log("CharacterList component mounted");
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log("Character data: ", response.data);
        console.log("Characters: ", response.data.results);
        fetchChars(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div className="CardContainer">
      {/* < search form component> */}
      <SearchForm 
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      searchChanged={searchChanged}
      />
      {chars.filter(characters => 
    characters.name.toLowerCase().includes(searchInput.toLowerCase())
  ).map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
          />

          // <section className="character-list">
          //   <h2>TODO: `array.map()` over your state here!</h2>
          // </section>
        );
      })}
    </div>
  );
}


