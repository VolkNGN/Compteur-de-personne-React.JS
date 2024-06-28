import React from 'react';
import './History.css'; // Import des styles pour History

const History = ({ history }) => {
  if (!history || !Array.isArray(history) || history.length === 0) {
    return <p>Aucun historique pour l'instant.</p>; // Message si l'historique est vide ou non défini
  }

  return (
    <div className="history">
      <h2>Historique des réinitialisations</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>Compteur : {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
