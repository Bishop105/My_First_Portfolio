import React from 'react';

const SearchBar = ({ city, setCity, fetchWeather }) => {
    return (
        <div className="flex justify-center mt-5">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name" 
                className="border border-gray-300 rounded-l-md p-2 w-full md:auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                onClick={fetchWeather} 
                className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600 transition duration-200"
            >
                Get Weather
            </button>
        </div>
    );
};

export default SearchBar;
