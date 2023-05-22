import "./Dates.css";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import yan from "../../images/yan.png";

function Dates() {
  return (
    <div className="links">
      <div className="card-client">
        <div className="user-picture">
          <img src={yan} alt="yan (me)" />
        </div>
        <p className="name-client">
          {" "}
          Yan Tavares de Oliveira
          <span>Computer Engineering</span>
        </p>
        <div className="social-media">
          <a href="https://github.com/yantavares">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <span className="tooltip-social">Github</span>
          </a>
          <a href="https://www.instagram.com/yantavares__/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span className="tooltip-social">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/yantavares01/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <span className="tooltip-social">LinkedIn</span>
          </a>
        </div>
        <div className="email">
          <p className="email-address">yantdo1@gmail.com</p>
          <button
            className="btn btn-gh btn-em"
            onClick={() => navigator.clipboard.writeText("yantdo1@gmail.com")}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dates;
