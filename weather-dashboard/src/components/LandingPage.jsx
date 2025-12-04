import React from 'react';
import PropTypes from 'prop-types';

const LandingPage = ({ onGetStarted }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Weather Dashboard</h1>
            <h2 className="text-lg mb-5">"Your Weather, Your Way"</h2>
            <p className="mb-5">Welcome to the Weather Dashboard! Get real-time weather updates for your city.</p>
            <button 
                onClick={onGetStarted} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200" aria-label='Get started with weather updates'
            >
                Get Started
            </button>
            <footer className="mt-10 text-sm">
                © 2025 Weather Dashboard
            </footer>
        </div>
    );
    
};

LandingPage.propTypes = {
    onGetStarted: PropTypes.func.isRequired,
};

export default LandingPage;
