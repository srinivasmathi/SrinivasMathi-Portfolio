import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Card({imgURL,cardTitle,cardContent,link }) {
    return (
        <>
            <div className="card">
                <img className="card-img" src={imgURL} alt="Card image"/>
                <h3 className="card-title">{cardTitle}</h3>
                <p className="card-content">{cardContent}</p>
                <a className="card-link" href={link}>Know more<FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
        </>
    );
}