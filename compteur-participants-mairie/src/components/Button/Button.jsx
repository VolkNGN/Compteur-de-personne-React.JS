import React from 'react';
import './Button.css'; // Import des styles pour Button

const Button = ({ onClick, label, fun, type }) => {
  // Déterminez la classe CSS à appliquer en fonction du type de bouton
  const buttonClass = `button ${fun ? 'fun-button' : ''} ${type ? `timer-button ${type}-button` : ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
