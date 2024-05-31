import './index.scss';
import * as artistaApi from '../../Api/ArtistaApi'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuArtistaQuadro from '../../components/MenuArtistaQuadro';
import { useEffect, useState } from 'react';

export default function Artista() {
    const [listaArtistas, setListaArtistas] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            const info = await artistaApi.buscarArtistas();
            setListaArtistas(info);
        }
        buscar();
    }, []);

    return (
        <div className='Artista-home'>
            <div className='Content'>
                <Header />
                <div className='secao1'>
                    <h1>Artistas</h1>
                </div>
                <div className='content-lista-artistas'>
                    {listaArtistas.map(item =>
                        <MenuArtistaQuadro item={item} key={item.id} />
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
}
