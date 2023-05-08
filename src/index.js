import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import Form_data from './Form_data.js';

const root = createRoot(document.getElementById('root'));
// root.render(<App />);

root.render(<Form_data/>);
