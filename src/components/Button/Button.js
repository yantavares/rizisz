import "./Button.css";
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
        {msg}
      </button>
    </>
  );
}
export default Button;
