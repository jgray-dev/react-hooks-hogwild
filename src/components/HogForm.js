import { useState } from "react";

function HogForm({ allHogs, hogFormCallback }) {
  // Color for name field - changes if name is not valid/not unquie
  const [nameColor, setNameColor] = useState("black");

  //Get array of all names from allHogs array
  const allNames = allHogs.map((hog) => {
    return hog.name.toLowerCase();
  });

  function formSubmitted(e) {
    e.preventDefault();
    if (checkName(e.target.name.value)) {
      if (
        // Check all values are submitted entirely
        e.target.name.value !== "" &&
        e.target.specialty.value !== "" &&
        e.target.greased.value !== "" &&
        e.target.weight.value !== "" &&
        e.target.medal.value !== "" &&
        e.target.image.value !== ""
      ) {
        const newHog = {
          // Create new hog object using values to send to callback
          name: e.target.name.value,
          specialty: e.target.specialty.value,
          greased: Boolean(e.target.greased.value),
          weight: parseFloat(e.target.weight.value),
          "highest medal achieved": e.target.medal.value,
          image: e.target.image.value,
        };
        hogFormCallback(newHog);
      } else {
        alert("Please fill out the entire form!");
      }
    } else {
      alert("Please enter a unique hog name!");
    }
  }

  // Returns true if the name is unique, returns false if the name is NOT unquie and needs to be changed
  function checkName(name) {
    return !allNames.includes(name.toLowerCase());
  }

  function handleNameChange(e) {
    setNameColor(checkName(e.target.value) ? "black" : "red");
  }

  return (
    <form
      style={{ lineHeight: "2", width: "55%", textAlign: "right" }}
      onSubmit={(e) => formSubmitted(e)}
    >
      <label>
        <input
          type="text"
          name="name"
          placeholder="Enter hog name"
          style={{ color: nameColor }}
          onChange={handleNameChange}
        />
        <br></br>
        <input type="text" name="specialty" placeholder="Enter hog specialty" />
        <br></br>
        <input type="number" name="weight" placeholder="Enter hog weight" />
        <br></br>
        <input type="text" name="image" placeholder="Enter image URL" />
        <br></br>
        Greased?
        <select name="greased">
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <br></br>
        Highest medal achieved?
        <select name="medal">
          <option value="none">None</option>
          <option value="platinum">Platinum</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
        </select>
      </label>

      <br></br>
      <input type="submit" value="Submit new hog" />
    </form>
  );
}

export default HogForm;
