import React from 'react';

const LoadingScreen = ({ loadingText }) => {
  return (
    <div className="loadingOverlay">
      <div className="loadingContainer">
        <div className="loadingSpinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
