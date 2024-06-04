import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shows from './pages/Shows';
import Sobre from './pages/Sobre';
import Lancamentos from './pages/Lancamentos';
import ArtistaDetalhado from './pages/ArtistaDetalhado';
import Artista from './pages/Artista';
import Login from './pages/Login';

import Menu from './pages/Menu';

import ArtistaCadastro from './pages/ArtistaCadastro';
import ArtistaEditar from './pages/ArtistaEditar'
import ArtistasVerif from './pages/ArtistasVerif';

import ShowsVerif from './pages/ShowsVerif';
import ShowsCadastro from './pages/ShowsCadastro';

import AlbumCadastro from './pages/AlbumCadastro';
import AlbumEditar from './pages/AlbumEditar'
import AlbumVerif from './pages/AlbumVerif';
import ArtistaVerifDetalhado from './pages/ArtistaVerifDetalhado';




export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/lancamentos' element={<Lancamentos />} />
        <Route path='/artistas' element={<Artista />} />
        <Route path='/artista/:id' element={<ArtistaDetalhado />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />

        <Route path='/artista/cadastro' element={<ArtistaCadastro />} />
        <Route path='/artista/editar/:id' element={<ArtistaEditar />} />
        <Route path='/artista/verif' element={<ArtistasVerif />} />
        <Route path='/artista/verif/:id' element={<ArtistaVerifDetalhado />} />

        <Route path='/show/cadastro' element={<ShowsCadastro />} />
        <Route path='/show/verif' element={<ShowsVerif />} />

        <Route path='/album/cadastro' element={<AlbumCadastro />} />
        <Route path='/album/editar/:id' element={<AlbumEditar />} />
        <Route path='/album/verif' element={<AlbumVerif />} />

      </Routes>
    </BrowserRouter>
  )
};
