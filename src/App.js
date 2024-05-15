import { useState } from 'react';
import './App.css';

import Weather from './components/weather';
import Forecast from './components/forecast';
function App() {


  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Weather App</h1>
      <button className='dark-btn' onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Weather/>
      <section className='app'>
        <Forecast />
      </section>
    </div>
  );
}

export default App;
