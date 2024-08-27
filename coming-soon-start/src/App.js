import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';

function App() {
  // Set the countdown target date (e.g., September 5, 2024)
  const targetDate = new Date('2024-09-05T00:00:00Z').getTime();

  return (
    <section className="container">
      <div className="overlay"></div>
      <div className="clock_content">
        <h1>We are almost there</h1>
        <h3>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={targetDate}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <footer className="footer mt-8">
          <div className="flex space-x-4 justify-center mb-4">
            <a href="https://www.facebook.com/people/Pepperflick/61561972456518/" className="text-gray-500 hover:text-gray-700 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/pepperflick/" className="text-gray-500 hover:text-gray-700 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2024 Copyright: Pepperflick | All Rights Reserved</p>
        </footer>
      </div>
    </section>
  );
}

export default App;
