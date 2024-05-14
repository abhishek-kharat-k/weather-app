
import './App.css';

import Weather from './components/weather';
import Forecast from './components/forecast';
function App() {
  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather/>
      <section className='app'>
        <Forecast />
      </section>
    </div>
  );
}

export default App;
