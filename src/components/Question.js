import React, { useState } from "react";
import "../styles.css";
import { nanoid } from "nanoid";

const Question = (props) => {
  const [isHeld, setIsHeld] = useState(false);

  const answers = [];

  // PUT ALL ANSWERS IN AN ARRAY
  const correctAnswer = props.answers.correct.value;
  answers.push(correctAnswer);

  const incorrectAnswer = props.answers.incorrect;

  for (let i = 0; i < Object.keys(incorrectAnswer).length; i++) {
    answers.push(incorrectAnswer[i].value);
  }

  answers.sort(() => Math.random() - 0.5);

  // GET THE ID OF EACH ANSWER
  const id = [];
  const correctId = props.answers.correct.id;
  id.push(correctId);

  for (let i = 0; i < Object.keys(incorrectAnswer).length; i++) {
    id.push(incorrectAnswer[i].id);
  }

  const allAnswers = answers.map((answer) => {
    return {
      id: nanoid(5),
      value: answer,
      isHeld: false,
    };
  });

  console.log(allAnswers);

  // function handleClick(e) {
  //   e.target.textContent === props.answers.correct.value
  //     ? console.log("correct")
  //     : console.log("incorrect");
  //   console.log(e);
  // }

  return (
    <div className="question--container">
      <h3 className="question--title">{props.title}</h3>
      <ul>{}</ul>
      <hr />
    </div>
  );
};

export default Question;
