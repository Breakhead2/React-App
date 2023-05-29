import { useState } from "react";
import style from "./ExerciseComponent.module.css";

const ExerciseComponent = ({ data, counter, setCounter, setIsEnd, setPoints, points }) => {

    const questionArr = data[counter].value.split("()");
    const [answer, setAnswer] = useState("");

    const handleNext = () => {
        if (counter < data.length - 1)
        {
            let buttons = document.querySelectorAll('.answer');
            for(let button of buttons){
                button.classList.remove("correct");
            }
            setCounter(counter+1);
            setAnswer("");
        }else{
            setIsEnd(true);
        }
    }

    const handleAnswer = (e) => {
        e.preventDefault();
        if(e.target.value === data[counter].correct_answer){
            setAnswer(e.target.value);
            setPoints(points + 1);
    
            let wrongButtons = document.querySelectorAll('.wrong');
            for(let button of wrongButtons){
                button.classList.remove('wrong');
            }
            e.target.classList.remove("wrong");
            e.target.classList.add("correct");
            setTimeout(handleNext, 1000);
        } else {
            e.target.classList.add("wrong");
        }
    }

    return (
        <div className={style.wrapper}>  
            <div className={style.topBar}> 
                <div className={style.heading}>Выберите правильный ответ</div>
                <div className={style.counter}>Вопрос { counter + 1 } из { data.length }</div>
            </div>
            <form className={style.form} id="myForm">
                <div className={style.question}>
                    {questionArr[0]}
                    <input type='text' value={answer} readOnly/>
                    {questionArr[1]}
                </div>
                <div className={style.buttons}>
                    {data[counter].answers.map((item, index) => { return <button id="btn_answer" className="answer" key={index} value={item} onClick={handleAnswer}>{item}</button>})}
                </div>
            </form>
        </div>
    )
}

export default ExerciseComponent;