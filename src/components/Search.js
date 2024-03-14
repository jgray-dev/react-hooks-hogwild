import { useState } from "react";

function Search({ allHogs, updateFilteredHogsCallback }) {
  const [searchNameColor, setSearchNameColor] = useState("black");
  const allNames = allHogs.map((hog) => {
    return hog.name;
  });
  const namesString = allNames.join("");

  function submitSearchForm(e) {
    e.preventDefault();
    if (
      namesString
        .toLowerCase()
        .includes(e.target.namesearch.value.toLowerCase())
    ) {
      const nameSearch = e.target.namesearch.value;
      let searchedHogs = [...allHogs];
      if (nameSearch !== "") {
        searchedHogs = filterNames(nameSearch);
      }
      const greased = e.target.greased.value;
      let greasedHogs = [...searchedHogs];
      if (greased !== "") {
        greasedHogs = filterGrease(greased, greasedHogs);
      }
      if (greasedHogs.length === 0) {
        alert("No hogs found matching that filter!");
      } else {
        updateFilteredHogsCallback(greasedHogs);
      }
    } else {
      alert("No hogs found with that name");
    }
  }

  function filterGrease(bool, hogs) {
    return hogs.filter((hog) => {
      return `${hog.greased}` === `${bool}`;
    });
  }

  function filterNames(search) {
    return allHogs.filter((hog) => {
      return hog.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  // Automatically change search color to green if a search will return a valid pig
  // Default to black for other searches
  function handleNameSearch(e) {
    setSearchNameColor(
      namesString.toLowerCase().includes(e.target.value.toLowerCase())
        ? "#29b802"
        : "black",
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
        <input type="submit" value="Submit search" />
      </form>
    </div>
  );
}

export default Search;
