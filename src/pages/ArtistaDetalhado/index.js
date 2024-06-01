import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.scss';
import LinhaShows from '../../components/LinhaShows';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscarArtistasporId } from '../../Api/ArtistaApi';
import { API_ADDRESS } from '../../Api/constant';
import { buscarAlbumPorArtista } from '../../Api/AlbumApi';
import { buscarShowsPorArtista } from '../../Api/ShowApi';

export default function ArtistaDetalhado(props) {
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
        <div className='ArtistaDetalhado' key=''>
            <Header></Header>
            {artistaBuscado ? (
                <div className='content'>
                    <section className='secao1'>
                        <h1>{artistaBuscado.nome}</h1>
                        <img src={`${API_ADDRESS}/${artistaBuscado.selfie}`} alt=""></img>
                    </section>
                    <section className='secao2'>
                        <div className='paragrafo-bibliografia'>
                            <p>
                                {artistaBuscado.biografia ?? "..."}
                            </p>
                        </div>
                        <div>
                            <div className='content-secao2'>
                                <img src={`${API_ADDRESS}/${artistaBuscado.selfie}`} alt='' className='imagem-perfil'></img>
                                <h2>Redes</h2>
                                <div className='redes-artista'>
                                    <a href={artistaBuscado.instagram}><img src="/assets/images/redes/instagram.png" className="logo-redes" alt="logo" /></a>
                                    <a href={artistaBuscado.youtube}><img src="/assets/images/redes/youtube.png" className="logo-redes" alt="logo" /></a>
                                    <a href={artistaBuscado.tiktok}><img src="/assets/images/redes/tik-tok.png" className="logo-redes" alt="logo" /></a>
                                    <a href={artistaBuscado.twitter}><img src="/assets/images/redes/twitter.png" className="logo-redes" alt="logo" /></a> 
                                    <a href={artistaBuscado.spotify}><img src="/assets/images/redes/spotify.png" className="logo-redes" alt="logo" /></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='album' className='secao3'>
                        <h1>Albuns</h1>
                        <div>
                        { albuns.map((album) => (
                            <div className='imagem-album' key={album.id}>
                            <img src={`${API_ADDRESS}/${album.capa}`} alt={album.nome} className='img-album-artista'></img>
                            </div>
                        ))}
                        </div>
                    </section>
                    <section id='show' className='secao4'>
                        <h1>Shows</h1>
                        <div>
                        { shows.map((show) => (
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
