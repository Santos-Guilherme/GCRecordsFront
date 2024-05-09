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
import ArtistaDetalhado from './pages/ArtistaDetalhado';
import Artista from './pages/Artista';
import Login from './pages/Login';
import Menu from './pages/Menu';
import AdicionarShows from './pages/AdicionarShows';
import MenuAlbum from './pages/MenuAlbum';
import MenuArtista from './pages/MenuArtista';
import MenuShows from './pages/MenuShows';
import AdicionarAlbum from './pages/AdicionarAlbum';
import AdicionarArtistas from './pages/AdicionarArtistas';
import EditarArtistas from './pages/EditarArtistas'
import EditarAlbum from './pages/EditarAlbum'
import NossosArtista from './pages/NossosArtistas';
import NossosShows from './pages/NossosShows';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/sobre' element = {<Sobre />}/>
      <Route path='/shows' element = {<Shows />}/>
      <Route path='/lancamentos' element = {<Lancamentos />}/>
      <Route path='/artistas' element = {<Artista />}/>
      <Route path='/artista/:id' element = {<ArtistaDetalhado key='1'/>}/>
      <Route path='/login' element = {<Login />}/>
      <Route path='/menu' element = {<Menu />}/>
      <Route path='/adicionarshows' element = {<AdicionarShows />}/>
      <Route path='/menualbum' element = {<MenuAlbum />}/>
      <Route path='/menuartista' element = {<MenuArtista />}/>
      <Route path='/menushows' element = {<MenuShows />}/>
      <Route path='/adicionaralbum' element = {<AdicionarAlbum />}/>
      <Route path='/adicionarartistas' element = {<AdicionarArtistas />}/>
      <Route path='/editarartistas' element = {<EditarArtistas />}/>
      <Route path='/editaralbum' element = {<EditarAlbum />}/>
      <Route path='/seusartistas' element = {<NossosArtista />}/>
      <Route path='/nossosshows' element = {<NossosShows />} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
