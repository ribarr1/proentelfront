import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LoginContainer from './screens/login/container/LoginContainer';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No root element found with id="root"');
}

const root = createRoot(rootElement);
root.render(<LoginContainer />);
registerServiceWorker();