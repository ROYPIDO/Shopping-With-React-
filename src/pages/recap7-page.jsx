import React from 'react';
import Shop from '../components/recap7/shop';

const Recap7Page = () => {
  return (
    <div className="concept-page">
      <span className="concept-badge">Redux Toolkit • REST API • Global State</span>
      <h2 className="concept-title">Shop with Cart</h2>
      <p className="concept-description">
        Products fetched asynchronously from DummyJSON API. Cart state managed
        globally with Redux Toolkit — add items and see the header badge update
        instantly.
      </p>
      <hr className="concept-divider" />
      <Shop />
    </div>
  );
};

export default Recap7Page;