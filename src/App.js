import "./styles.css";
import { useEffect, useState } from "react";
import Question from "./components/Question";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState([]);

  // DISPLAY RESULTS WHEN THE PAGE IS RELOADED ONLY
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=7&difficulty=easy")
      .then((res) => res.json())
      .then((response) => {
        setData(
          response.results.map((dataUnit) => ({
            id: nanoid(),
            correctAnswer: dataUnit.correct_answer,
            questionTitle: dataUnit.question,
            choices: {
              correct: {
                value: dataUnit.correct_answer,
                id: nanoid(5),
                isHeld: false,
              },
              incorrect: {
                ...dataUnit.incorrect_answers.map((incorrect) => ({
                  id: nanoid(5),
                  value: incorrect,
                  isHeld: false,
                })),
              },
            },
          }))
        );
      });
  }, []);

  const questionsItems = data.map((dataUnit) => {
    return (
      <Question
        key={dataUnit.id}
        title={dataUnit.questionTitle}
        answers={dataUnit.choices}
      />
    );
  });

  return (
    <div className="App">
      <h2>Hello world 👋</h2>
      <div className="game--container">{questionsItems}</div>
      <button>Check answers</button>
    </div>
  );
}

export default App;
