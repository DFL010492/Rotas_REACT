import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";  
import './Todos.css'; 

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <>
      {}
      <button onClick={toggleMenu} className="menu-button">
        <FaBars size={24} color="#9e1a1a93" />
      </button>

      {/* Menu de navegação que aparece ou desaparece */}
      {isMenuOpen && (
        <nav>
          <ul className="menu-list">
            <li>
              <Link to="/" onClick={toggleMenu}>Bem-vindo</Link> {}
            </li>
            <li>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </li>
            <li>
              <Link to="/imc" onClick={toggleMenu}>IMC</Link>
            </li>
            <li>
              <Link to="/sobre" onClick={toggleMenu}>Sobre Mim</Link>
            </li>
          </ul>
        </nav>
      )}

      <Outlet /> {/* Renderiza o conteúdo baseado na rota */}
    </>
  );
};

export default Layout;
