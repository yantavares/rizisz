import "./App.css";
import Button from "../Button/Button.js";
import Header from "../Header/Header";
import Presentes from "../Presentes/Presentes";
import { useState } from "react";
import Filmes from "../Filmes/Filmes";
import Dates from "../Dates/Dates";

function App() {
  const [isSet, setIsSet] = useState(1);
  return (
    <div className="app">
      <Header />
      <section className="buttons">
        <Button isSet={isSet} setIsSet={setIsSet} msg={"PRESENTES"} state={1} />
        <Button isSet={isSet} setIsSet={setIsSet} msg={"FILMES"} state={2} />
        <Button isSet={isSet} setIsSet={setIsSet} msg={"DATES"} state={3} />
      </section>
      {isSet === 1 && <Presentes />}
      {isSet === 2 && <Filmes />}
      {isSet === 3 && <Dates />}
    </div>
  );
}

export default App;
