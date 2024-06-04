/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './index.scss';
import * as artistaApi from '../../Api/ArtistaApi';
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';
import { cancelarShow, buscarShowPorId, consultarShowsData, consultarShowsPrincipaisData, consultarShowsPorArtistaeData, consultarShowsArtistaPrincipaisData } from '../../Api/ShowApi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
const hoje = new Date();
const dataFuturo = new Date(hoje);
dataFuturo.setFullYear(hoje.getFullYear() + 3);

export default function ShowsVerif() {
    const [listaShows, setListaShows] = useState([]);
    const [listaArtistas, setListaArtistas] = useState([]);
    const [filtroId, setFiltroId] = useState(null);
    const [artistaSelecionado, setArtistaSelecionado] = useState(null);
    const [dataInicio, setDataInicio] = useState(hoje.toISOString().split('T')[0]);
    const [dataFim, setDataFim] = useState(dataFuturo.toISOString().split('T')[0]);
    const [principal, setPrincipal] = useState(false);
    const [nenhumShowEncontrado, setNenhumShowEncontrado] = useState(false);

    const buscarShows = async () => {
        try {
            let shows;
            if (filtroId !== null && filtroId > 0) {
                shows = await buscarShowPorId(filtroId);
            } else if (artistaSelecionado) {
                if (principal) {
                    shows = await consultarShowsArtistaPrincipaisData(artistaSelecionado, dataInicio, dataFim);
                } else {
                    shows = await consultarShowsPorArtistaeData(artistaSelecionado, dataInicio, dataFim);
                }
            } else {
                if (principal) {
                    shows = await consultarShowsPrincipaisData(dataInicio, dataFim);
                } else {
                    shows = await consultarShowsData(dataInicio, dataFim);
                }
            }
            setListaShows(shows);
            setNenhumShowEncontrado(shows.length === 0);
        } catch (error) {
            console.error('Erro ao buscar shows:', error);
        }
    }

    const buscarArtistas = async () => {
        try {
            const artistas = await artistaApi.buscarArtistas();
            setListaArtistas(artistas.map(artist => ({ id: artist.id, nome: artist.nome })));
        } catch (error) {
            console.error('Erro ao buscar artistas:', error);
        }
    }

    const handleExcluirShow = async (id) => {
        confirmAlert({
            title: 'Cancelar Show',
            message: 'Tem certeza que deseja cancelar o show?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try {
                            await cancelarShow(id);
                            toast.dark('✅ Show cancelado com sucesso.');
                            buscarShows();
                        } catch (error) {
                            console.error('Erro ao excluir show:', error);
                            toast.error('Erro ao excluir show.');
                        }
                    },
                },
                { label: 'Não' },
            ],
        });
    };

    useEffect(() => {
        buscarShows();
        buscarArtistas();
    }, [filtroId, artistaSelecionado, dataInicio, dataFim, principal]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className='ShowsVerif'>
            <div className='Content'>
                <HeaderMenu />
                <div className='secao1'>
                    <div></div>
                    <div>
                        <h1>Show</h1>
                    </div>
                    <div>
                        <Link to='/show/cadastro'><button>Novo</button></Link>
                    </div>
                </div>
                <div className='filtros'>
                    <div className='titulo'>
                        <h2>Buscar por ID:</h2>
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
                        <h2>Escolha um artista</h2>
                        <select onChange={(e) => setArtistaSelecionado(e.target.value)}>
                            <option value="">Todos os artistas</option>
                            {listaArtistas.map(item => <option key={item.id} value={item.id}>{item.nome}</option>)}
                        </select>
                    </div>
                    <div className='titulo'>
                        <h2>Data Início:</h2>
                        <input
                            type='date'
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                        />
                    </div>
                    <div className='titulo'>
                        <h2>Data Fim:</h2>
                        <input
                            type='date'
                            value={dataFim}
                            onChange={(e) => setDataFim(e.target.value)}
                        />
                    </div>
                    <div className='titulo'>
                        <h2>Festival:</h2>
                        <input
                            type='checkbox'
                            checked={principal}
                            onChange={(e) => setPrincipal(e.target.checked)}
                        />
                    </div>
                </div>
                <div className='content-lista-shows'>
                    <table>
                        <thead>
                            <tr>
                                <th className='info-tabela'>ID</th>
                                <th className='info-tabela'>Data</th>
                                <th className='info-tabela'>Nome</th>
                                <th className='info-tabela'>Artista</th>
                                <th className='info-tabela'>Festival</th>
                                <th className='funcao-tabela'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nenhumShowEncontrado ? (
                                <tr>
                                    <td colSpan="6">Nenhum show encontrado.</td>
                                </tr>
                            ) : (
                                listaShows.map(show => (
                                    <tr key={show.id}>
                                        <td className='info-tabela'>{show.id}</td>
                                        <td className='info-tabela'>{formatDate(show.data)}</td>
                                        <td className='info-tabela'>{show.nome}</td>
                                        <td className='info-tabela'>{show.nomeArtista}</td>
                                        <td className='info-tabela'><input type="checkbox" checked={show.festival} readOnly /></td>
                                        <td className='funcao-tabela'>
                                            <img className='imagem-funcao-tabela' src='/assets/images/excluir.png' alt='excluir' onClick={() => handleExcluirShow(show.id)}></img>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </div>
    );
}
