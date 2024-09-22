import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.tsx';
import './index.css';
import PersonList from './components/PersonList/PersonList.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <PersonList />
  </StrictMode>,
);
