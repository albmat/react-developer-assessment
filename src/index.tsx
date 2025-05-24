import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './mock';
import './styles/index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();
/**
 * This file can be ignored, please work in ./components/App.tsx
 */

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
