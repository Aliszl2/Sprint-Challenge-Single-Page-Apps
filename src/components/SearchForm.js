import React from "react";

export default function SearchForm(props) {
  console.log(props);
  return (
    <section className="search-form">
      <form>
        <input
         type="text"
          placeholder="search" 
          id="search-bar"
          onChange={props.searchChanged}
          value={props.searchInput}
          />
      </form>
    </section>
  );
}

