import { useState } from "react";
import "./Presentes.css";
import unb from "../../images/UnB.png";
import DevIcon from "devicon-react-svg";
import brazil from "../../images/brazil.png";
import usa from "../../images/usa.png";
import Presente from "../Presente/Presente";

function Presentes() {
  return (
    <div className="presentes-container container">
      <Presente />
      <Presente />
      <Presente />
      <Presente />
    </div>
  );
}
export default Presentes;
