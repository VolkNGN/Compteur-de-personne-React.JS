import React from 'react';
import './Button.css'; // Import des styles pour Button

const Button = ({ onClick, label, fun }) => {
  return (
    <button className={`button ${fun ? 'fun-button' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
