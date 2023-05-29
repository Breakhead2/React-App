const PopupComponent = ({ points, questions, handleRepeat, repeat }) => {
    const handleOnClick = () => {
        const popup = document.querySelector('.popup');
        popup.classList.add('hidden');
        handleRepeat();
    }
    const hadleClosePopup = () => {
        const popup = document.querySelector('.popup');
        popup.classList.add('hidden');
        // заглушка в дальнейшем будет вести на страничку с курсом
    }
    return (
        <div className="popup">
                {repeat.length !== 0 ? (
                    <>
                        <p>Вы завершили упражнение!</p>
                        <p>Но у вас есть ошибки. Чтобы закрыть упражнение, пройдите его без ошибок.</p>
                        <p>Вы набрали: { points } баллов из { questions }.</p>
                        <button onClick={handleOnClick}>Пройти повторно</button>
                        <button className="close" onClick={hadleClosePopup}>{"✖"}</button>
                    </>
                ) : (
                    <>
                        <p>Поздравляем!</p>
                        <p>Вы завершили упражнение без ошибок!</p>
                        <p>Вы набрали: { points } баллов из { questions }.</p>
                        <button className="close" onClick={hadleClosePopup}>{"✖"}</button>
                    </>
                )
            }
        </div>
    )  
}
export default PopupComponent;