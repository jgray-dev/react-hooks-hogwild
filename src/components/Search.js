import { useState } from "react";

function Search({ allHogs, updateFilteredHogsCallback }) {
  const [searchNameColor, setSearchNameColor] = useState("black");

  function submitSearchForm(e) {
    e.preventDefault();
    const nameSearch = e.target.namesearch.value;
    const greased = e.target.greased.value;
    const sort = e.target.sort.value;
    console.log(nameSearch, greased, sort);
  }

  const allNames = allHogs.map((hog) => {
    return hog.name.toLowerCase();
  });
  const namesString = allNames.join("");

  // Automatically change search color to green if a search will return a valid pig
  // Default to black for other searches
  function handleNameSearch(e) {
    setSearchNameColor(
      namesString.includes(e.target.value.toLowerCase()) ? "#29b802" : "black",
    );
  }

  return (
    <div
      className="search"
      style={{ lineHeight: "2", width: "55%", textAlign: "right" }}
    >
      <form onSubmit={(e) => submitSearchForm(e)}>
        <input
          type="text"
          name="namesearch"
          placeholder="Filter by name..."
          style={{ color: searchNameColor }}
          onChange={(e) => handleNameSearch(e)}
        />
        <br></br>
        Show greased?:
        <select name="greased">
          <option value="">Default (both)</option>
          <option value="true">Only greased</option>
          <option value="false">Only ungreased</option>
        </select>
        <br></br>
        Sort by:
        <select name="sort">
          <option value="">Default</option>
          <option value="weight">Weight</option>
          <option value="medal">Highest medal achieved</option>
        </select>
        <br></br>
        <input type="submit" value="Submit search" />
      </form>
    </div>
  );
}

export default Search;
