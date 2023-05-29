const PopupComponent = ({ points, questions}) => {

    const hadleClosePopup = () => {
        const popup = document.querySelector('.popup');
        popup.classList.add('hidden');
        window.location.reload();
    }
    return (
        <div className="popup">
            <p>Поздравляем!</p>
            <p>Вы успешно завершили упражнение!</p>
            <p>Вы набрали: { points } баллов из { questions }.</p>
            <button className="close" onClick={hadleClosePopup}>{"✖"}</button>
        </div>
    )
}
export default PopupComponent;