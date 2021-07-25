import React from 'react';

import { Footer } from './style';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MyFooter = () => {
  return (
    <Footer>
      <div className="copy">
        <p>Desafio#2 Hiring Coders 2021</p>
        <p>&copy; Todos os Diretos Reservados</p>
      </div>
      <nav>
        <a href="https://github.com/MathFantin"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/matheus-fantin-345720b4/"><FaLinkedin /></a>
      </nav>
    </Footer>
  );
}

export default MyFooter;