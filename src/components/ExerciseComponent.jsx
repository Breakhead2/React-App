import { useState } from "react";

const ExerciseComponent = ({ data, counter, setCounter }) => {

    const questionArr = data[counter].value.split("()");
    const [answer, setAnswer] = useState("");
    const [points, setPoints] = useState(0);

    const handleNext = (e) => {
        e.preventDefault();
        if (counter < data.length - 1){
            setCounter(counter+1);
            setAnswer("");
        }else{
            console.log(points);
        }
    }

    const handleAnswer = (e) => {
        e.preventDefault();
        setAnswer(e.target.value);
        if(e.target.value === data[counter].correct_answer){
            setPoints(points + 1);
        }
    }

    return (
        <form>
            <div>
                {questionArr[0]}
                <input type='text' value={answer} readOnly/>
                {questionArr[1]}
            </div>
            <div>
                {data[counter].answers.map((item, index) => { return <button key={index} value={item} onClick={handleAnswer}>{item}</button>})}
            </div>
            <button onClick={handleNext}>Следующий</button>
        </form>
    )
}

export default ExerciseComponent;