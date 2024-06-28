import React, { useState, useEffect, useRef } from 'react';
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
  const [isRunning, setIsRunning] = useState(false); // État pour le chronomètre en cours
  const [elapsedTime, setElapsedTime] = useState(0); // Temps écoulé pour le chronomètre
  const timerRef = useRef(null); // Référence pour le timer

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

  // Fonction pour démarrer le chronomètre
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Fonction pour mettre le chronomètre en pause
  const pauseTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  // Fonction pour arrêter et réinitialiser le chronomètre
  const stopTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
    clearInterval(timerRef.current);
  };

  // Fonction pour réinitialiser le compteur et inclure le temps écoulé dans l'historique
  const reset = () => {
    setResetHistory([...resetHistory, { count, time: elapsedTime }]);
    setCount(0);
    setAlert('');
    setRunners([]);
    
  };

  // Fonction pour vider l'historique des réinitialisations
  const clearHistory = () => {
    setResetHistory([]); // Vider l'historique des réinitialisations
  };

  // Fonction pour le bouton rigolo
  const funAction = () => {
    setAlert('🎉 Vous avez appuyé sur le bouton rigolo ! 🎉');
  };

  // Effet pour ajouter des emojis coureurs lorsque le compteur atteint des multiples de 25
  useEffect(() => {
    const newRunners = Math.floor(count / 5);
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
      
      <div className="runners">
        {runners.map((runner, index) => (
          <Runner key={index} emoji={runner} /> /* Affiche les emojis coureurs */
        ))}
      </div>
        <Button onClick={startTimer} label="▶️ Démarrer" type="start" /> {/* Bouton pour démarrer le chronomètre */}
        <Button onClick={pauseTimer} label="⏸ Pause" type="pause" /> {/* Bouton pour mettre en pause le chronomètre */}
        <Button onClick={stopTimer} label="⏹ Arrêter" type="stop" /> {/* Bouton pour arrêter et réinitialiser le chronomètre */}
      <div className="timer">
        {/* Affiche le temps écoulé */}
        Temps écoulé: {new Date(elapsedTime * 1000).toISOString().substr(11, 8)}
      </div>
      <History history={resetHistory} /> {/* Affiche l'historique des réinitialisations */}
      <Button onClick={clearHistory} label="Vider l'historique" /> {/* Bouton pour vider l'historique */}
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> {/* Bouton pour basculer entre les modes */}
    </div>
  );
};

export default App;
