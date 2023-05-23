import "./Button.css";
import {
  faGifts,
  faClapperboard,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ isSet, setIsSet, msg, state }) {
  return (
    <>
      <button
        onClick={() => {
          setIsSet((prev) => {
            return prev === state ? 0 : state;
          });
        }}
        className={isSet === state ? "btn-active btn" : "btn"}
      >
        {msg === "PRESENTES" && (
          <FontAwesomeIcon style={{ color: "aliceblue" }} icon={faGifts} />
        )}
        {msg === "FILMES" && (
          <FontAwesomeIcon
            style={{ color: "aliceblue" }}
            icon={faClapperboard}
          />
        )}
        {msg === "DATES" && (
          <FontAwesomeIcon style={{ color: "aliceblue" }} icon={faCalendar} />
        )}

        {msg}
      </button>
    </>
  );
}
export default Button;
