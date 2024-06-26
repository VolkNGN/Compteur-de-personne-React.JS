import React from 'react';
import './Runner.css';

const Runner = ({ emoji }) => {
  return (
    <span className="runner">
      {emoji}
    </span>
  );
};

export default Runner;
