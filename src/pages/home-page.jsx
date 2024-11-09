import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to My Shopping site!</h1>
        <p>
        We will be at your service soon
        </p>
        <button className="cta-button">
          <a href="#contact">Get in Touch</a>
        </button>
      </header>
    </div>
  );
}

export default HomePage;
