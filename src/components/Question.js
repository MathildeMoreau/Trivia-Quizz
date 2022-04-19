import React, { useState } from "react";
import "../styles.css";
import { nanoid } from "nanoid";

const Question = (props) => {
  const [isHeld, setIsHeld] = useState(false);

  // SHUFFLE ANSWERS
  const choices = props.answers;
  console.log(choices);

  choices.sort(() => Math.random() - 0.5);

  // MAP EACH ANSWER
  const answers = choices.map((dataUnit) => {
    console.log(dataUnit);
    return (
      <li className={isHeld && "active"} isHeld={isHeld} onClick={help}>
        {dataUnit}
      </li>
    );
  });

  function help(event) {
    console.log(event.target.parentElement);
  }

  return (
    <div className="question--container">
      <h3 className="question--title">{props.title}</h3>
      <ul>{answers}</ul>
      <hr />
    </div>
  );
};

export default Question;
