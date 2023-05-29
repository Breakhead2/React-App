import ExerciseComponent from './components/ExerciseComponent';
import './App.css';
import { useState } from 'react';

function App() {
  const questions = [
    {
    id: 1,
    value: "I () glad to see you",
    answers: ["are", "is", "am"],
    correct_answer: "am",
    },
    {
    id: 2,
    value: "You () our best friend",
    answers: ["are", "is", "am"],
    correct_answer: "are",
    },
    {
    id: 3,
    value: "He () an execellent driver",
    answers: ["are", "is", "am"],
    correct_answer: "is",
    },
  ];

  const [data, setData] = useState(questions);
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <ExerciseComponent data={data} counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
