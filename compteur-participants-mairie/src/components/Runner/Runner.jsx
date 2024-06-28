import React from 'react';
import './Runner.css'; // Import des styles pour Runner

const Runner = ({ emoji }) => {
  return (
    <span className="runner">
      {emoji}
    </span>
  );
};

export default Runner;
