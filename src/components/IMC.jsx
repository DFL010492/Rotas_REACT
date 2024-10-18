import React, { useState } from 'react';
import './Todos.css';

function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const pesoNumerico = parseFloat(peso);
    const alturaNumerica = parseFloat(altura) / 100;

    if (pesoNumerico > 0 && alturaNumerica > 0) {
      const imcCalculado = pesoNumerico / (alturaNumerica ** 2);
      setIMC(imcCalculado.toFixed(2));
      classificarIMC(imcCalculado);
    }
  };

  const classificarIMC = (imcValor) => {
    let classificacaoResultado = '';

    switch (true) {
      case imcValor < 18.5:
        classificacaoResultado = 'Abaixo do peso';
        break;
      case imcValor >= 18.5 && imcValor < 24.9:
        classificacaoResultado = 'Peso normal';
        break;
      case imcValor >= 25 && imcValor < 29.9:
        classificacaoResultado = 'Sobrepeso';
        break;
      case imcValor >= 30 && imcValor < 34.9:
        classificacaoResultado = 'Obesidade Grau I';
        break;
      case imcValor >= 35 && imcValor < 39.9:
        classificacaoResultado = 'Obesidade Grau II';
        break;
      default:
        classificacaoResultado = 'Obesidade Grau III (mórbida)';
        break;
    }

    setClassificacao(classificacaoResultado);
  };

  return (
    <>
      <div>
        <h1><b>Calculadora de IMC</b></h1>
      </div>
      <div>
        <p><b>Coloque o peso em Kg.</b></p>
        <input 
          type="number" 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
          placeholder="Ex: 70 (Kg)"  // Placeholder para o peso
        />
      </div>
      <div>
        <p><b>Coloque a Altura em cm.</b></p>
        <input 
          type="number" 
          value={altura} 
          onChange={(e) => setAltura(e.target.value)} 
          placeholder="Ex: 175 (cm)"  // Placeholder para a altura
        />
      </div>
      <div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc && (
          <div>
            <h2>Seu IMC é: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default IMC;
