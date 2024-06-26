import React from 'react';
import './Alert.css'; // Import des styles pour Alert

const Alert = ({ message }) => {
  return (
    <div className="alert">
      {message}
    </div>
  );
};

export default Alert;
