import React from 'react';
import './History.css'; // Import des styles pour History

const History = ({ history }) => {
  if (!history || !Array.isArray(history) || history.length === 0) {
    return <p>Aucun historique pour l'instant.</p>; // Message si l'historique est vide ou non défini
  }

  return (
    <div className="history">
      <h2>Historique des participants</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            Compteur : {entry.count}, Temps écoulé : {new Date(entry.time * 1000).toISOString().substr(11, 8)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
