import "./Presentes.css";
import Presente from "../Presente/Presente";
import totoro from "../../images/totoro.jpeg";
import castelo from "../../images/castelo.png";

function Presentes() {
  return (
    <div className="presentes-container container">
      <Presente
        date={"25/05/23"}
        shouldOpen={true}
        picture={totoro}
        content={"Te amo meu bem, meu amor, minha NAMORADA!!!  "}
      />
      <Presente
        date={"27/05/23"}
        shouldOpen={true}
        picture={castelo}
        content={"Pra lembrar de mim na sua parede (surpresa atrás)"}
      />
      <Presente date={"Daqui 2 dates"} shouldOpen={false} content={"Nada"} />
      <Presente date={"Daqui 3 dates"} shouldOpen={false} content={"Nada"} />
    </div>
  );
}
export default Presentes;
