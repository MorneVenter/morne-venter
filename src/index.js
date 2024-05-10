import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import AnimatedCursor from 'react-animated-cursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={24}
      outerSize={36}
      color='235, 64, 52'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
    <App />
  </React.StrictMode>
);
