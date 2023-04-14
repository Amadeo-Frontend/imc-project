import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(0);
  const [classificacao, setClassificacao] = useState("");

  function handleAlturaChange(event) {
    setAltura(Number(event.target.value));
  }

  function handlePesoChange(event) {
    setPeso(Number(event.target.value));
  }

  function calcularIMC() {
    const novoIMC = peso / (altura * altura);
    setIMC(novoIMC);

    if (novoIMC < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (novoIMC < 25) {
      setClassificacao("Peso normal");
    } else if (novoIMC < 30) {
      setClassificacao("Sobrepeso");
    } else if (novoIMC < 35) {
      setClassificacao("Obesidade grau 1");
    } else if (novoIMC < 40) {
      setClassificacao("Obesidade grau 2");
    } else {
      setClassificacao("Obesidade grau 3");
    }
  }

  return (
    <div
      className="container mt-5 h-100 d-flex align-items-center justify-content-center flex-column "
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <h1>Calculadora de IMC</h1>
      <div className="mb-3">
        <label htmlFor="altura" className="form-label mt-3">
          Altura (m)
        </label>
        <input
          type="number"
          step="0.01"
          className="form-control bg-primary bg-opacity-75"
          id="altura"
          placeholder="Digite sua altura"
          value={altura}
          onChange={handleAlturaChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="peso" className="form-label">
          Peso (kg)
        </label>
        <input
          type="number"
          step="0.01"
          className="form-control bg-primary bg-opacity-75"
          id="peso"
          placeholder="Digite seu peso"
          value={peso}
          onChange={handlePesoChange}
        />
      </div>
      <button className="button-71 mb-3" onClick={calcularIMC}>
        Calcular IMC
      </button>

      {imc !== 0 && (
        <div className="bg-primary rounded p-2">
          <p className=" text-center text-white">Seu IMC é: {imc.toFixed(2)}</p>
          <p className=" text-center text-white">
            Sua classificação é: {classificacao}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
