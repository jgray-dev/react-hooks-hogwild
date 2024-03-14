import React, { useState } from "react";

function HogCard({ hog }) {
  //Initialize the state variable
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  //Function to toggle the visibility
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };
  //Conditionally render additional information
  return (
    <div className="hog-card" onClick={toggleDetails}>
      <div>{hog.name}</div>
      <img src={hog.image} alt={hog.name} />
      {isDetailsVisible && (
        <div className="hog-details">
          <div>
            <strong>Specialty:</strong> {hog.specialty}
          </div>
          <div>
            <strong>Weight:</strong> {hog.weight}
          </div>
          <div>
            <strong>Greased:</strong> {hog.greased ? "Yes" : "No"}
          </div>
          <div>
            <strong>Highest Medal Achieved:</strong>{" "}
            {hog["highest medal achieved"]}
          </div>
        </div>
      )}
    </div>
  );
}

export default HogCard;
