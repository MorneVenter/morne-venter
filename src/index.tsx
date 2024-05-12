import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AnimatedCursor from 'react-animated-cursor';
import { App } from './app/App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AnimatedCursor
        innerSize={24}
        outerSize={36}
        color='235, 64, 52'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <App />
    </StrictMode>
  );
}
