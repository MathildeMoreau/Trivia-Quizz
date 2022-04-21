import React from "react";
import "../styles.css";

const Question = (props) => {
  const combinedAnswers = [
    props.answers.correct,
    ...Object.values(props.answers.incorrect),
  ];

  const randomAnswers = combinedAnswers.sort(() => Math.random() - 0.5);

  // e.target.textContent === props.answers.correct.value
  //   ? console.log("correct")
  //   : console.log("incorrect");

  return (
    <div className="question--container">
      <h3 className="question--title">{props.title}</h3>
      <ul>
        {randomAnswers.map((answer) => (
          <li key={answer.id}>{answer.value}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Question;
