import { useState } from "react"
import '../Styles/Card.css'
import Modal from "./Modal";


function Card({ cardData }) {
    const [second, setSecond] = useState(false)
    const [modal,setModal] = useState(false)
    const handleSwitch = () => {
        setSecond(!second);
    };
    const handleModal = () => {
        setModal(!modal);
    };
    const dateString = new Date(cardData.date * 1000).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="card">
            {/* <div id="card"> */}
            {second ? (
                <p className="smallImage">
                    <img
                        className="image"
                        src={cardData.thumbnail.small}
                        alt="Img Small"
                    ></img>
                    <span>
                        <a onClick={handleModal} className="button" type="button">
                            Learn More
                        </a>
                    </span>
                </p>
            ) : (
                <p className="largeImage">
                    <img
                        className="image"
                        src={cardData.thumbnail.large}
                        alt="Img Large"
                    ></img>
                    <span>
                        <a onClick={handleModal} className="button" type="button">
                            Learn More
                        </a>
                    </span>
                </p>
            )}
            {/* </div> */}
            <div className="radio">
                <label>
                    <input onClick={handleSwitch} type="radio" checked={!second}></input>
                    <span className="circle"></span>
                </label>
                <label>
                    <input onClick={handleSwitch} type="radio" checked={second}></input>
                    <span className="circle"></span>
                </label>
            </div>
            <div className="card-detail">
                <h3>{cardData.title}</h3>
                <p className="content">{cardData.content}</p>
                <div className="foot-detail">
                    <p>
                        {cardData.author.name} - {cardData.author.role}
                    </p>
                    <p>{dateString}</p>
                </div>
            </div>
            <div className="learn-more">
                <a className="button" type="button">
                    Learn More
                </a>
            </div>
            {modal && (
                <div className="backdrop-Landing">
                    <Modal value={cardData} handleModal={handleModal} />

                </div>
            )}
        </div>
    )
}

export default Card
