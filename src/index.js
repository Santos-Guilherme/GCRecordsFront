import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/fonts.css'
import './styles/reset.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-confirm-alert/src/react-confirm-alert.css';

import Navegacao from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Navegacao />
  </React.StrictMode>
);



