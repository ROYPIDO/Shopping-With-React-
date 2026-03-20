import React from 'react';
import Recap6Child from '../components/recap6-child';

const Recap6Page = () => {
  return (
    <div className="concept-page">
      <span className="concept-badge">useEffect</span>
      <h2 className="concept-title">Side Effects with useEffect</h2>
      <p className="concept-description">
        useEffect runs after every render where its dependency changes. Here it
        filters employees by department and computes salary totals reactively.
      </p>
      <hr className="concept-divider" />

      <div className="concept-demo-card">
        <Recap6Child />
      </div>
    </div>
  );
};

export default Recap6Page;