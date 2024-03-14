import { useState } from "react";
import HogCard from "./HogCard";
import Search from "./Search";

function HogList({ allHogs }) {
  const [filteredHogs, updateFilteredHogs] = useState(allHogs);

  function updateFilteredHogsCallback(filtered) {
    console.log("Called back update filtered hogs: ", filtered);
    updateFilteredHogs(filtered);
  }

  const showHogs = allHogs.map((hog) => (
    <HogCard key={hog.name} hog={hog} class="ui eight wide column" />
    //<div key={hog.name}> {hog.name} </div>
  ));

  return (
    <div id="hog-container">
      <Search
        allHogs={allHogs}
        updateFilteredHogsCallback={updateFilteredHogsCallback}
      />
      <div id="hog-list" class="ui grid container">
        {showHogs}
      </div>
    </div>
  );
}

export default HogList;
