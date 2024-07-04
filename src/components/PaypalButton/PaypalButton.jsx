import React from 'react';
import './PaypalButton.css'; // Assurez-vous que ce chemin est correct
import paypalLogo from './Paypal-Logo.png'; // Assurez-vous que l'icône PayPal est dans le même dossier

const PayPalButton = ({ isDarkMode }) => {
  return (
    <div className={`paypal-button-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <a
        href="https://paypal.me/VolkWebCo?country.x=FR&locale.x=fr_FR" // Remplacez YOUR_BUTTON_ID par votre ID de bouton PayPal
        target="_blank"
        rel="noopener noreferrer"
        className="paypal-button"
      >
        <img src={paypalLogo} alt="PayPal" className="paypal-logo" /> Soutenez mon travail avec PayPal :)
      </a>
    </div>
  );
};

export default PayPalButton;
