import React, { useState, useEffect } from 'react';
import './App.css'; // Import des styles globaux
import Counter from './components/Counter/Counter'; // Import du composant Counter
import Button from './components/Button/Button'; // Import du composant Button
import Alert from './components/Alert/Alert'; // Import du composant Alert
import Runner from './components/Runner/Runner'; // Import du composant Runner
import History from './components/CounterHistory/History'; // Import du composant History
import ToggleButton from './components/ToggleButton/ToggleButton'; // Import du composant ToggleButton

const App = () => {
  // États de l'application
  const [count, setCount] = useState(0); // État pour le compteur
  const [alert, setAlert] = useState(''); // État pour les alertes
  const [runners, setRunners] = useState([]); // État pour les emojis coureurs
  const [counterHistory, setCounterHistory] = useState([]); // Historique des changements de compteur
  const [resetHistory, setResetHistory] = useState([]); // Historique des réinitialisations de compteur
  const [isDarkMode, setIsDarkMode] = useState(false); // État pour le mode sombre

  // Liste des emojis possibles pour les coureurs
  const emojis = ['🏃', '🏃‍♀️', '🏃‍♂️', '🏃', '🏃‍♀️', '🏃‍♂️', '🏃', '🏃‍♀️', '🏃‍♂️', '🍌'];

  // Fonction pour basculer entre le mode sombre et le mode clair
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1);
    setAlert('');
    setCounterHistory([...counterHistory, count + 1]);
  };

  // Fonction pour décrémenter le compteur
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setAlert('');
      setCounterHistory([...counterHistory, count - 1]);
    } else {
      setAlert('Le nombre de participants ne peut pas être inférieur à 0');
    }
  };

  // Fonction pour réinitialiser le compteur
  const reset = () => {
    setResetHistory([...resetHistory, count]); // Ajoute la valeur actuelle du compteur à l'historique des réinitialisations
    setCount(0);
    setAlert('');
    setRunners([]);
  };

  // Fonction pour le bouton rigolo
  const funAction = () => {
    setAlert('🎉 Vous avez appuyé sur le bouton rigolo ! 🎉');
  };

  // Effet pour ajouter des emojis coureurs lorsque le compteur atteint des multiples de 25
  useEffect(() => {
    const newRunners = Math.floor(count / 25);
    if (newRunners > runners.length) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      setRunners((prevRunners) => [...prevRunners, randomEmoji]);
    }
  }, [count, runners.length, emojis]);

  return (
    // Ajoute la classe dark-mode si isDarkMode est vrai
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Compteur de Participants</h1>
      <Counter count={count} /> {/* Affiche le compteur */}
      {alert && <Alert message={alert} />} {/* Affiche une alerte si elle existe */}
      <div className="button-container">
        <Button onClick={increment} label="Incrémenter" />
        <Button onClick={decrement} label="Décrémenter" />
        <Button onClick={reset} label="Réinitialiser" />
        <Button onClick={funAction} label="Bouton Rigolo" fun />
      </div>
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> {/* Bouton pour basculer entre les modes */}
      <div className="runners">
        {runners.map((runner, index) => (
          <Runner key={index} emoji={runner} /> /* Affiche les emojis coureurs */
        ))}
      </div>
      <History history={resetHistory} /> {/* Affiche l'historique des réinitialisations */}
    </div>
  );
};

export default App;
