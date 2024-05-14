import { useEffect, useState } from "react";
import Search from "./search";


function Weather () {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    // Data Fetch From Api
    async function fetchWeatherData(param){
        setLoading(true)
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=38f1f9e2d179411794c3735604121090`);

            const data = await response.json();
            if(data){
                setWeatherData(data)
                setLoading(false)
            }
        }catch (error){
            setLoading(false);
            console.log(error);
        }
    }





    // this function Search whatevery is in the input box by clicking on button
     function handleSearch (){
        fetchWeatherData(search)

    }

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }


    //this function is for Current Data 
    function getCurrentDate () {
        return new Date().toLocaleDateString('en-us',{
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }
    

    useEffect(()=>{
        fetchWeatherData('mumbai')
    },[])

    console.log(weatherData)


    return(
        <div className="">
            <Search 
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />

            {
                loading ? <div className="loading">Loading...</div> : 
                <div>
                    {/* this is City Name */}
                    <div className="city-name">
                        <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                    </div>
                    {/* This is Curent Date */}
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>
                    {/* This is Current Temp */}
                    <div className="temperature ">
                        {kelvinToCelsius(weatherData?.main?.temp).toFixed(0)} °C
                    </div>
                    {/* This is description of weather */}
                    <p className="description">
                        {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ""}
                    </p>
                    {/* this is additional info of Weather */}
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p className="wind">
                                    {weatherData?.wind?.speed}m/s
                                </p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div className="more-weather-info">
                            <div>
                                <p className="humidity">
                                    {weatherData?.main?.humidity}%
                                </p>
                                <p>Humidity</p>
                            </div>
                        </div>

                    </div>
                </div>
            }
            
        </div>
    )
}

export default Weather;