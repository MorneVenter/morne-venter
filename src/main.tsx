import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AnimatedCursor from 'react-animated-cursor';

const render = () => {
	const rootElement = document.getElementById('root');
	if (!rootElement) throw new Error('Root element not found.');
	const root = ReactDOM.createRoot(rootElement);
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
		</React.StrictMode>,
	);
};

render();
