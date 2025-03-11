import React from 'react';

function ProgressBar({ current, max }) {
  const breakPoint = (current / max) * 100;

  return (
    <div className="bar-container">
      <div className="progress-bar" style={{ width: `${breakPoint}%` }}></div>
    </div>
  );
}

export default ProgressBar;
