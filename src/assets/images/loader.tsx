import React from 'react';

export const Spinner = () => (
  <svg width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <path d="M10 50A40 40 0 0 0 90 50A40 43.9 0 0 1 10 50" fill="#b3c1ff" stroke="none">
          <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.95;360 50 51.95"></animateTransform>
      </path>
  </svg>
);
