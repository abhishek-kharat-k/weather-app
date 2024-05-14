import { useEffect, useState } from "react";

function Forecast() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchForecastData() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=38f1f9e2d179411794c3735604121090`);
        const data = await response.json();
        if (data && data.list) {
          setForecastData(data.list.filter((item, index) => index % 8 === 0).slice(0, 5)); // Assuming forecast data is provided in 3-hour intervals, we select every 8th item to get daily data
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    fetchForecastData();
  }, []);

  return (
    <div className="forecast-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="row">
          {forecastData.map((day, index) => (
            <div key={index} className="forecast-card">
              <div className="flex">
                <h1>{new Date(day.dt * 1000).toLocaleDateString('en-us', { weekday: 'long' })}</h1>
                <h4>{day.weather[0].description}</h4>
                <p>Temperature: {Math.round(day.main.temp - 273.15)} °C</p>
                <div className="wind-humidity">
                <p>Wind Speed: {day.wind.speed} m/s</p>
                <p>Humidity: {day.main.humidity}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Forecast;