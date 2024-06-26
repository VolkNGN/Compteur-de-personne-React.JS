import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-ball"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
