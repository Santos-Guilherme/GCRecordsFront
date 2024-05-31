import './index.scss';
import * as artistaApi from '../../Api/ArtistaApi'
import Footer from '../../components/Footer';
import QuadroBuscarArtistas from '../../components/QuadroBuscarArtistas';
import { useEffect, useState } from 'react';
import HeaderMenu from '../../components/HeaderMenu';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'

export default function ArtistasVerif() {
    const [listaArtistas, setListaArtistas] = useState([]);

    const buscar = async () => {
        const info = await artistaApi.buscarArtistas();
        setListaArtistas(info);
    }

    useEffect(() => {
        buscar();
    })

    async function removerArtista(artista) {
        confirmAlert({
            title: 'Remover Artista',
            message: 'Tem certeza que vai remover o artista?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        await artistaApi.removerArtista(artista.id);
                        toast.dark('✅ Aluno removido com sucesso.');

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
                    <div></div>
                    <div><h1>Seus Artistas</h1></div>
                    <div><button>Novo</button></div>
                </div>
                <div className='titulo'>
                    <div className='titulo2'>
                        <h2>Procurar Artista:</h2>
                    </div>
                    <input type='text'></input>
                </div>
                <div className='content-lista-artistas'>
                    {listaArtistas.map(item =>
                        <QuadroBuscarArtistas item={item} removerArtista={removerArtista}></QuadroBuscarArtistas>
                    )}

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}