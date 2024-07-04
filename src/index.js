import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PayPalButton from './components/PaypalButton/PaypalButton'; // Assurez-vous que le chemin est correct

const rootElement = document.getElementById('root');

class AppWithPayPalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode }, () => {
      document.body.classList.toggle('dark-mode', this.state.isDarkMode);
    });
  };

  render() {
    return (
      <React.StrictMode>
        <App toggleDarkMode={this.toggleDarkMode} isDarkMode={this.state.isDarkMode} />
        <PayPalButton isDarkMode={this.state.isDarkMode} />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<AppWithPayPalButton />, rootElement);
