import "../Styles/modal.css";

function Modal({ value, handleModal }) {

    return (
        <div id="modal">
            <div className="top-bar">
                <i onClick={handleModal} className="fa-solid fa-xmark"></i>
            </div>
            <div className="image-container">
                <img src={value.thumbnail.large} alt=""></img>
            </div>
            <div className="details">
                <h3>{value.title}</h3>
                <p className="content">{value.content}</p>
            </div>
            <div className="author">
                <img src={value.author.avatar} alt="Img"></img>
                <p>
                    {value.author.name} - {value.author.role}
                </p>
            </div>
        </div>
    );
}

export default Modal;