import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';

// Load Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Epilogue:wght@300;400;500;600&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
