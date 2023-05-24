import { useState } from "react";
import "./Presentes.css";
import Presente from "../Presente/Presente";

function Presentes() {
  return (
    <div className="presentes-container container">
      <Presente date={"14/14/14"} shouldOpen={true} content={"Nada"} />
      <Presente date={"14/14/14"} shouldOpen={false} content={"Nada"} />
      <Presente date={"14/14/14"} shouldOpen={false} content={"Nada"} />
      <Presente date={"14/14/14"} shouldOpen={false} content={"Nada"} />
    </div>
  );
}
export default Presentes;
