import React from 'react';
import './Counter.css'; // Import des styles pour Counter

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <h2>Nombre de participants : {count}</h2> {/* Affiche le nombre de participants */}
    </div>
  );
};

export default Counter;
