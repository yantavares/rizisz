import "./Presente.css";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Presente({ date, shouldOpen, picture, content }) {
  return (
    <>
      <div className={shouldOpen ? "book align" : "book-close align"}>
        <img src={picture} alt="gift" style={{ height: "120px" }} />
        <p>{content}</p>
        <div className="cover">
          <p>{date}</p>
          {shouldOpen ? (
            <FontAwesomeIcon style={{ color: "black" }} icon={faLockOpen} />
          ) : (
            <FontAwesomeIcon style={{ color: "black" }} icon={faLock} />
          )}
        </div>
      </div>
    </>
  );
}
export default Presente;
