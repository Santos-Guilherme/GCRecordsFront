import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/fonts.css';
import './assets/styles/reset.css';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shows from './pages/Shows';
import Sobre from './pages/Sobre';
import Lancamentos from './pages/Lancamentos';
import Artista from './pages/Artista';
import Login from './pages/Login';
import Menu from './pages/Menu';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/sobre' element = {<Sobre />}/>
      <Route path='/shows' element = {<Shows />}/>
      <Route path='/lancamentos' element = {<Lancamentos />}/>
      <Route path='/artista' element = {<Artista />}/>
      <Route path='/login' element = {<Login />}/>
      <Route path='/menu' element = {<Menu />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
