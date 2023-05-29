const PopupComponent = ({ points, questions, handleRepeat, setIsEnd, setCounter, repeat }) => {
    const hadleClosePopup = () => {
        const popup = document.querySelector('.popup');
        popup.classList.add('hidden');
        window.location.reload();
    }
    const handleOnClick = () => {
        const popup = document.querySelector('.popup');
        popup.classList.add('hidden');
        setIsEnd(false);
        setCounter(0);
        handleRepeat();
    }
    return (
        <div className="popup">
            <p>Поздравляем!</p>
            <p>Вы завершили упражнение!</p>
            <p>Вы набрали: { points } баллов из { questions }.</p>
            <button className="close" onClick={hadleClosePopup}>{"✖"}</button>
            {repeat.length === 0 ? "" : <button onClick={handleOnClick}>Исправить ошибки</button>}
        </div>
    )
}
export default PopupComponent;