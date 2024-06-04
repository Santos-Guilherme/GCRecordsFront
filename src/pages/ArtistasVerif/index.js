import './index.scss';
import * as artistaApi from '../../Api/ArtistaApi'
import Footer from '../../components/Footer';
import QuadroBuscarArtistas from '../../components/QuadroBuscarArtistas';
import { useEffect, useState } from 'react';
import HeaderMenu from '../../components/HeaderMenu';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'
import { Link } from 'react-router-dom';

export default function ArtistasVerif() {
    const [listaArtistas, setListaArtistas] = useState([]);
    const [filtro, setFiltro] = useState('');

    const buscar = async () => {
        let info;
        if (filtro.trim() === '') {
            info = await artistaApi.buscarArtistas();
        } else if (!isNaN(filtro.trim())) {
            info = await artistaApi.buscarArtistasporId(filtro.trim());
            if (!info) {
                toast.error('Artista não encontrado.');
            } else {
                setListaArtistas([info]);
            }
            return;
        } else {
            info = await artistaApi.filtrarArtistasPorNome(filtro.trim());
        }
        setListaArtistas(info);
    }

    useEffect(() => {
        buscar();
    },);

    async function removerArtista(artista) {
        confirmAlert({
            title: 'Remover Artista',
            message: 'Tem certeza que vai remover o artista?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        await artistaApi.removerArtista(artista.id);
                        toast.dark('✅ Artista removido com sucesso.');

                        buscar();
                    }
                },
                { label: 'Não' }
            ]
        });
    }

    return (
        <div className='ArtistasVerif'>
            <div className='Content'>
                <HeaderMenu></HeaderMenu>
                <div className='secao1'>
                    <div className='secao1-content'></div>
                    <div className='secao1-content'><h1>Seus Artistas</h1></div>
                    <Link className='secao1-content' to={'/artista/cadastro'}><button>Novo</button></Link>
                </div>
                <div className='titulo'>
                    <div className='titulo2'>
                        <h2>Procurar Artista:</h2>
                    </div>
                    <input type='text' value={filtro} onChange={(e) => setFiltro(e.target.value)} placeholder="Nome ou Id"></input>
                </div>
                <div className='content-lista-artistas'>
                    {listaArtistas.map(item =>
                        <QuadroBuscarArtistas key={item.id} item={item} removerArtista={removerArtista}></QuadroBuscarArtistas>
                    )}
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}