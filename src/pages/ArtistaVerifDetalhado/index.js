import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';
import './index.scss';
import LinhaShows from '../../components/LinhaShows';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { buscarArtistasporId } from '../../Api/ArtistaApi';
import { API_ADDRESS } from '../../Api/constant';
import { buscarAlbumPorArtista } from '../../Api/AlbumApi';
import { buscarShowsPorArtista } from '../../Api/ShowApi';

export default function ArtistaVerifDetalhado(props) {
    const { id } = useParams();
    const [artistaBuscado, setArtistaBuscado] = useState(null);
    const [albuns, setAlbuns] = useState([]);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            let info = await buscarArtistasporId(id);
            setArtistaBuscado(info);
        }
        const buscarAlbuns = async () => {
            let infoAlbuns = await buscarAlbumPorArtista(id);
            setAlbuns(infoAlbuns);
        }
        const buscarShows = async () => {
            let infoShows = await buscarShowsPorArtista(id);
            setShows(infoShows);
        }
        buscar();
        buscarAlbuns();
        buscarShows();
    }, [id]);

    return (
        <div className='ArtistaVerifDetalhado' key=''>
            <HeaderMenu></HeaderMenu>
            {artistaBuscado ? (
                <div className='content'>
                    <section className='secao1'>
                        <h1>{artistaBuscado.nome}</h1>
                        <img src={`${API_ADDRESS}/${artistaBuscado.capa}`} alt=""></img>
                    </section>
                    <section className='secao2'>
                        <div className='paragrafo-biografia'>
                            <p>
                                {artistaBuscado.biografia ?? "..."}
                            </p>
                        </div>
                        <div>
                            <div className='content-secao2'>
                                <img src={`${API_ADDRESS}/${artistaBuscado.selfie}`} alt='' className='imagem-perfil'></img>
                                <h2>Redes</h2>
                                <div className='redes-artista'>
                                    <a href={artistaBuscado.instagram} target="_blank" rel="noopener noreferrer"><img src="/assets/images/redes/instagram.png" className="logo-redes" alt="Instagram" /></a>
                                    <a href={artistaBuscado.youtube} target="_blank" rel="noopener noreferrer"><img src="/assets/images/redes/youtube.png" className="logo-redes" alt="Youtube" /></a>
                                    <a href={artistaBuscado.tiktok} target="_blank" rel="noopener noreferrer"><img src="/assets/images/redes/tik-tok.png" className="logo-redes" alt="Tiktok" /></a>
                                    <a href={artistaBuscado.twitter} target="_blank" rel="noopener noreferrer"><img src="/assets/images/redes/twitter.png" className="logo-redes" alt="Twitter" /></a>
                                    <a href={artistaBuscado.spotify} target="_blank" rel="noopener noreferrer"><img src="/assets/images/redes/spotify.png" className="logo-redes" alt="Spotify" /></a>
                                </div>
                                <Link to={`/artista/editar/${artistaBuscado.id}`}>Alterar</Link>
                                <button>Deletar</button>
                            </div>
                        </div>
                    </section>
                    <section id='album' className='secao3'>
                        <h1>Albuns</h1>
                        <div>
                            {albuns.map((album) => (
                                <div className='imagem-album' key={album.id}>
                                    <a href={album.spotify} target='blank'><img src={`${API_ADDRESS}/${album.capa}`} alt={album.nome} className='img-album-artista'></img></a>
                                    <p>{album.nome}</p>
                                    <p>Id: {album.id}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id='show' className='secao4'>
                        <h1>Shows</h1>
                        <div>
                            {shows.map((show) => (
                                <LinhaShows nome={show.nome} data={show.data}></LinhaShows>
                            ))}
                        </div>
                    </section>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
            <Footer></Footer>
        </div>
    )
}
