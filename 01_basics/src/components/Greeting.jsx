import React from "react";

const personName = "Kaif"
const date = new Date()

const Greeting = () => {
  return (
    <div>
      <h1>Salam alay kum {personName}</h1>
      <p>Today's date is {date.getDate()}</p>
    </div>
  );
};

export default Greeting;
