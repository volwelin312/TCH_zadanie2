import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      Architektura usługi "Fib Calc"
      <br />
      <img src={arch} alt="arch" />
      <h3>Do aplikacji zostało dodane wyświetlanie pięciu ostatnich wprowadzonych wartości k oraz historia ostatnich obliczeń</h3>
    </div>
  );
};
