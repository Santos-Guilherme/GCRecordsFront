/* eslint-disable react-hooks/exhaustive-deps */
import './index.scss';
import * as artistaApi from '../../Api/ArtistaApi';
import * as albumApi from '../../Api/AlbumApi';
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';
import { useEffect, useState } from 'react';
import LinhaAlbuns from '../../components/LinhaAlbuns';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';

export default function AlbumVerif() {
    const [listaArtistas, setListaArtistas] = useState([]);
    const [filtroArtista, setFiltroArtista] = useState('');
    const [filtroAlbum, setFiltroAlbum] = useState('');
    const [filtroId, setFiltroId] = useState(null);
    const [listaAlbuns, setListaAlbuns] = useState([]);
    const [nenhumAlbumEncontrado, setNenhumAlbumEncontrado] = useState(false);

    const buscarArtistas = async () => {
        const info = await artistaApi.buscarArtistas();
        setListaArtistas(info);
    };

    const buscarAlbuns = async () => {
        let info = [];
        if (filtroId !== null && filtroId > 0) {
            const album = await albumApi.buscarAlbumPorId(filtroId);
            info = album ? [album] : [];
        } else if (filtroArtista.trim() === '' && filtroAlbum.trim() === '') {
            info = await albumApi.buscarTodosOsAlbuns();
        } else if (filtroArtista.trim() !== '') {
            info = await albumApi.buscarAlbumPorArtista(filtroArtista.trim());
        } else {
            info = await albumApi.buscarAlbumsPorNome(filtroAlbum.trim());
        }
        setListaAlbuns(Array.isArray(info) ? info : []);
        setNenhumAlbumEncontrado(info.length === 0);
    };

    useEffect(() => {
        buscarArtistas();
    }, []);

    useEffect(() => {
        buscarAlbuns();
    }, [filtroId, filtroAlbum, filtroArtista]);

    async function deletarAlbum(album) {
        confirmAlert({
            title: 'Remover Álbum',
            message: 'Tem certeza que deseja remover o álbum?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        await albumApi.deletarAlbumPorId(album.id);
                        toast.dark('✅ Álbum removido com sucesso.');
                        setFiltroId(null);
                        buscarAlbuns();
                    },
                },
                { label: 'Não' },
            ],
        });
    }

    return (
        <div className='AlbumVerif'>
            <div className='Content'>
                <HeaderMenu></HeaderMenu>
                <div className='secao1'>
                    <div></div>
                    <div>
                        <h1>Álbuns</h1>
                    </div>
                    <div>
                        <Link to='/album/cadastro'><button>Novo</button></Link>
                    </div>
                </div>
                <div className='filtros'>
                    <div className='titulo'>
                        <div>
                            <h2>Buscar por ID:</h2>
                        </div>
                        <input
                            type='number'
                            value={filtroId || ''}
                            onChange={(e) => {
                                const value = parseInt(e.target.value);
                                setFiltroId(value > 0 ? value : null);
                            }}
                        ></input>
                    </div>
                    <div className='titulo'>
                        <div>
                            <h2>Escolha um artista</h2>
                        </div>
                        <select onChange={(e) => setFiltroArtista(e.target.value)}>
                            <option value=''>Todos</option>
                            {listaArtistas.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='titulo'>
                        <div>
                            <h2>Filtrar por nome do álbum:</h2>
                        </div>
                        <input
                            type='text'
                            value={filtroAlbum}
                            onChange={(e) => setFiltroAlbum(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='content-lista-albuns'>
                    <div>
                        {nenhumAlbumEncontrado ? (
                            <p>Nenhum álbum encontrado.</p>
                        ) : (
                            listaAlbuns.map((item) => (
                                <LinhaAlbuns
                                    key={item.id}
                                    album={item}
                                    deletar={deletarAlbum}
                                ></LinhaAlbuns>
                            ))
                        )}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}
