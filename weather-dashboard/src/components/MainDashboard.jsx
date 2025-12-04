import React from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';

const MainDashboard = ({ city, setCity, fetchWeather, weatherData, error }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-5">Weather Dashboard</h1>
            <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
            {error && <ErrorMessage message={error} />}
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
};

export default MainDashboard;
