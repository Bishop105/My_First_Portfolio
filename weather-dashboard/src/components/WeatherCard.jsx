import React from 'react';

const WeatherCard = ({ weatherData }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 max-w-sm mx-auto mt-5">
            <h2 className="text-2xl font-bold text-center">{weatherData.name}</h2>
            <p className="text-xl text-center">Temperature: {weatherData.main.temp} °C</p>
            <p className="text-md text-center">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-md text-center">Wind Speed: {weatherData.wind.speed} m/s</p>
            <img 
                className="mx-auto mt-3" 
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
                alt="Weather icon" 
            />
        </div>
    );
};

export default WeatherCard;
