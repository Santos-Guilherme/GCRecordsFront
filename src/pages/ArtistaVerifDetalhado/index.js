import Footer from '../../components/Footer';
import './index.scss';
import LinhaShows from '../../components/LinhaShows';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { buscarArtistasporId, removerArtista } from '../../Api/ArtistaApi';
import { API_ADDRESS } from '../../Api/constant';
import { buscarAlbumPorArtista } from '../../Api/AlbumApi';
import { buscarShowsPorArtista } from '../../Api/ShowApi';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import Header from '../../components/Header';

export default function ArtistaVerifDetalhado(props) {
    const { id } = useParams();
    const [artistaBuscado, setArtistaBuscado] = useState(null);
    const [albuns, setAlbuns] = useState([]);
    const [shows, setShows] = useState([]);
    const navigate = useNavigate();

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

    async function deletarArtista() {
        confirmAlert({
            title: 'Remover Artista',
            message: 'Tem certeza que vai remover o artista? Todos os albuns e shows deste artista serão excluídos também.',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        await removerArtista(id);
                        toast.dark('✅ Artista removido com sucesso.');
                        navigate('/artista/verif');
                    }
                },
                { label: 'Não' }
            ]
        });
    }

    const GoBack = () => {
        window.history.back();
    };

    return (
        <div className='ArtistaVerifDetalhado' key=''>
            <Header></Header>
            <div className='voltar'>
                <div>
                    <Link onClick={GoBack}><img src="/assets/images/voltar.png" className='setinha' alt="Voltar" /></Link>
                </div>
            </div>
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
                                <Link to={`/artista/editar/${artistaBuscado.id}`} className='funcao-page'>Alterar</Link>
                                <button onClick={deletarArtista} className='funcao-page'>Deletar</button>
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
