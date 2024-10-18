import React from 'react';
import { Link } from 'react-router-dom';
import './Todos.css';

const Home = () => {
  return (
    <div className='container'>
      <h1>Bem-vindo!</h1>
      <p>Escolha uma das opções abaixo:</p>
      <div className="button-group">
        <Link to="/login">
          <button>Acessar Login</button>
        </Link>
        <Link to="/imc">
          <button>Calculadora de IMC</button>
        </Link>
        <Link to="/Sobre">
          <button>Sobre Mim</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
