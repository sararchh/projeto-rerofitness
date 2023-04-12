import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesApp from './routes';
import './styles/globals.css'

import { MainProvider } from './contexts/trainingContext';
import { UserProvider } from './contexts/userContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainProvider>
      <UserProvider>
        <ToastContainer />
        <BrowserRouter>
        <RoutesApp />
        </BrowserRouter>
      </UserProvider>
    </MainProvider>
  </React.StrictMode>,
)
