import { useState } from "react";

function HogForm({ allHogs, hogFormCallback }) {
  // Color for name field - changes if name is not valid/not unquie
  const [nameColor, setNameColor] = useState("black");
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
        e.target.weight.value !== "" &&
        e.target.greased.value !== "" &&
        e.target.medal.value !== ""
      ) {
        const newHog = {
          // Create new hog object using values to send to callback
          name: e.target.name.value,
          specialty: e.target.specialty.value,
          weight: parseFloat(e.target.weight.value),
          greased: Boolean(e.target.greased.value),
          "highest medal achieved": e.target.medal.value,
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
        Name:
        <input
          type="text"
          name="name"
          style={{ color: nameColor }}
          onChange={handleNameChange}
        />
        <br></br>
        Specialty:
        <input type="text" name="specialty" />
        <br></br>
        Weight:
        <input type="number" name="weight" />
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

//On submit, call hogFormCallback(newHog)
export default HogForm;

// Hog template
//  {
//  name: "Babe",
//    specialty: "Being incredibly cute",
//    greased: false,
//    weight: 2.0,
//    "highest medal achieved": "bronze",
//    image:
//  "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
//  }

//{
//  "name": "asd",
//    "specialty": "asda",
//    "weight": "123",
//    "greased": "true",
//    "highest medal achieved": "gold"
//}
