import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shows from './pages/Shows';
import Sobre from './pages/Sobre';
import Lancamentos from './pages/Lancamentos';
import ArtistaDetalhado from './pages/ArtistaDetalhado';
import Artista from './pages/Artista';
import Login from './pages/Login';
import PrivateRoute from './privateRoute'; 
import Menu from './pages/Menu';
import ArtistaCadastro from './pages/ArtistaCadastro';
import ArtistaEditar from './pages/ArtistaEditar';
import ArtistasVerif from './pages/ArtistasVerif';
import ShowsVerif from './pages/ShowsVerif';
import ShowsCadastro from './pages/ShowsCadastro';
import AlbumCadastro from './pages/AlbumCadastro';
import AlbumEditar from './pages/AlbumEditar';
import AlbumVerif from './pages/AlbumVerif';
import ArtistaVerifDetalhado from './pages/ArtistaVerifDetalhado';
import NotFound from './pages/NotFound';

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
        <Route path='*' element={<NotFound />} />
        
        {/* Protegidas */}
        <Route path='/menu' element={<PrivateRoute element={Menu} />} />
        <Route path='/artista/cadastro' element={<PrivateRoute element={ArtistaCadastro} />} />
        <Route path='/artista/editar/:id' element={<PrivateRoute element={ArtistaEditar} />} />
        <Route path='/artista/verif' element={<PrivateRoute element={ArtistasVerif} />} />
        <Route path='/artista/verif/:id' element={<PrivateRoute element={ArtistaVerifDetalhado} />} />
        <Route path='/show/cadastro' element={<PrivateRoute element={ShowsCadastro} />} />
        <Route path='/show/verif' element={<PrivateRoute element={ShowsVerif} />} />
        <Route path='/album/cadastro' element={<PrivateRoute element={AlbumCadastro} />} />
        <Route path='/album/editar/:id' element={<PrivateRoute element={AlbumEditar} />} />
        <Route path='/album/verif' element={<PrivateRoute element={AlbumVerif} />} />
      </Routes>
    </BrowserRouter>
  );
}
