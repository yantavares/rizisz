import { useState } from "react";
import "./Presentes.css";
import Presente from "../Presente/Presente";
import totoro from "../../images/totoro.jpeg";

function Presentes() {
  return (
    <div className="presentes-container container">
      <Presente
        date={"25/06/23"}
        shouldOpen={true}
        picture={totoro}
        content={"Te amo meu bem, meu amor, minha NAMORADA!!!  "}
      />
      <Presente date={"Próximo date"} shouldOpen={false} content={"Nada"} />
      <Presente date={"Daqui 2 dates"} shouldOpen={false} content={"Nada"} />
      <Presente date={"Daqui 3 dates"} shouldOpen={false} content={"Nada"} />
    </div>
  );
}
export default Presentes;
