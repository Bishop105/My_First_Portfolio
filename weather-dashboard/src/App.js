import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainDashboard from './components/MainDashboard';
import reportWebVitals from './reportWebVitals';

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [isLanding, setIsLanding] = useState(true);

    const fetchWeather = async () => {
        setError(''); // Reset error state
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
            if (!response.ok) throw new Error('City not found'); // Handle 404 errors
            const data = await response.json();
            setWeatherData(data); // Set the fetched weather data
            setIsLanding(false); // Navigate to the main dashboard
        } catch (err) {
            setError(err.message); // Set error message if fetch fails
        }
    };

    return (
        <div>
            {isLanding ? (
                <LandingPage onGetStarted={() => setIsLanding(false)} />
            ) : (
                <MainDashboard
                    city={city}
                    setCity={setCity}
                    fetchWeather={fetchWeather}
                    weatherData={weatherData}
                    error={error} />
            )}
        </div>
    );
}
reportWebVitals();
export default App;
