import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div className="bg-red-500 text-white text-center p-3 rounded-md mt-5">
            {message}
        </div>
    );
};

export default ErrorMessage;
