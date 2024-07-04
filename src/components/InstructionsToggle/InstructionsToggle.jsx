import React, { useState } from 'react';
import './InstructionsToggle.css'; // Import des styles pour InstructionsToggle
import Instructions from '../Instructions/Instructions'; // Import du composant Instructions

const InstructionsToggle = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="instructions-toggle">
      <button onClick={toggleInstructions} className="toggle-button">
        ?
      </button>
      {showInstructions && (
        <div className="instructions-wrapper">
          <Instructions />
        </div>
      )}
    </div>
  );
};

export default InstructionsToggle;
