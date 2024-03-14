import React, { useState } from "react";
import Nav from "./Nav";
import HogForm from "./HogForm";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
  const [allHogs, updateAllHogs] = useState(hogs);

  // This function is ONLY going to be called when adding a hog - AFTER it has been verified to be a unique name and valid hog
  function hogFormCallback(newHog) {
    console.log("hogFormCallback");
    updateAllHogs([...allHogs, newHog]);
  }

  console.log("All hogs: ", allHogs);

  return (
    <div className="App">
      <Nav />
      <HogList allHogs={allHogs} />
      <HogForm allHogs={allHogs} hogFormCallback={hogFormCallback} />
    </div>
  );
}

export default App;
