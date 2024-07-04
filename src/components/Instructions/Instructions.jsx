import React from 'react';
import './Instructions.css'; // Import des styles pour Instructions

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>Mode d'emploi</h2>
      <ul>
        <li>Lancer le chronomètre en cliquant sur "Démarrer".</li>
        <li>Cliquez sur "Incrémenter" pour augmenter le nombre de participants.</li>
        <li>Cliquez sur "Décrémenter" pour diminuer le nombre de participants si nécessaire.</li>
        <li>Cliquez sur "Réinitialiser" pour compter en petits groupes en fonction du timer.</li>
        <li>NE PAS CLIQUER SUR LE BOUTON RIGOLO ! (si c'est trop tard rafraichir la page)</li>
        <li>Cliquez sur "Vider l'historique" pour supprimer toutes les informations enregistrées.</li>
        <li> Applaudissez très fort pour que Maëlie laisse un pourboire, à la fin de la présentation! </li>
      </ul>
    </div>
  );
};

export default Instructions;
