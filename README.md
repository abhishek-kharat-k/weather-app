
# Weather App

This is a simple weather application built using React.js. It allows users to search for weather information for a specific city and view both current weather conditions and a five-day forecast.

## Local Setup

To set up this project locally, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/abhishek-kharat-k/weather-app.git
   ```

2. **Navigate to Project Directory**:
   ```
   cd weather-app
   ```

3. **Install Dependencies**:
   ```
   npm install
   ```

4. **Set Up API Keys**:
   - Sign up for an account and obtain API keys from [OpenWeatherMap](https://openweathermap.org/) for both current weather and forecast APIs.
   - Replace `YOUR_WEATHER_API_KEY` in `Weather.js` and `Forecast.js` with your respective API keys.

5. **Run the Development Server**:
   ```
   npm start
   ```

6. **Open in Browser**:
   Visit `http://localhost:3000` in your web browser to view the application.

## Project Structure

The project structure is as follows:

- **`/src`**: Contains all the source code files.
  - **`/components`**: Contains React components.
    - **`App.js`**: The main component rendering the Weather App.
    - **`Weather.js`**: Component responsible for displaying current weather information.
    - **`Forecast.js`**: Component displaying the five-day weather forecast.
    - **`Search.js`**: Component for the search functionality.
  - **`App.css`**: Stylesheet for the application.

## Usage

- Upon launching the application, you'll see the main page displaying weather information for a default city (Mumbai in this case).
- To search for weather in a different city, type the city name in the input field and click the "Search" button.
- The current weather information for the searched city will be displayed, along with a five-day forecast.

## APIs Used

This project uses two APIs from OpenWeatherMap:
- **Current Weather API**: 
  ```
  https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=YOUR_WEATHER_API_KEY
  ```
- **Forecast API**: 
  ```
  https://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=YOUR_WEATHER_API_KEY
  ```

Make sure you replace `YOUR_WEATHER_API_KEY` with your actual API key.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.
