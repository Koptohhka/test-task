import React from 'react';
import './ErrorScreen.scss';

const ErrorScreen = () => (
  <div className="error-screen">
    <p className="error-screen__message">Something went wrong...</p>
    <p className="error-screen__messafe">Check your internet connection adn try again</p>
  </div>
);

export default ErrorScreen;
