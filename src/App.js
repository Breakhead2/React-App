import ExerciseComponent from './components/ExerciseComponent';
import './App.css';
import { useState } from 'react';
import PopupComponent from './components/PopupComponent';

function App() {
  const questions = [
    {
    id: 1,
    value: "I () glad to see you.",
    answers: ["are", "is", "am"],
    correct_answer: "am",
    },
    {
    id: 2,
    value: "You () our best friend.",
    answers: ["are", "is", "am"],
    correct_answer: "are",
    },
    {
    id: 3,
    value: "He () an execellent driver.",
    answers: ["are", "is", "am"],
    correct_answer: "is",
    },
  ];

  const [data, setData] = useState(questions);
  const [counter, setCounter] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [points, setPoints] = useState(0);
  const [repeat, setRepeat] = useState([]);

  const handleRepeat = () => {
    setIsEnd(false);
    setCounter(0);
    setPoints(0);
  }


  return (
    <div className="Exercise">
      {!isEnd && <ExerciseComponent data={data} counter={counter} setCounter={setCounter} setIsEnd={setIsEnd} setPoints={setPoints} points={points} setRepeat={setRepeat} />}
      {isEnd && <PopupComponent questions={data.length} points={points} handleRepeat={handleRepeat} repeat={repeat}/> }
    </div>
  );
}

export default App;
