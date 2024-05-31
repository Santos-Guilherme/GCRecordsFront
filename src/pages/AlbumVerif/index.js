import './index.scss';
import * as artistaApi from '../../Api/ArtistaApi'
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';
import { useEffect, useState } from 'react';

export default function AlbumVerif() {
    const [listaArtistas, setListaArtistas] = useState([]);

    const buscar = async () => {
        const info = await artistaApi.buscarArtistas();
        setListaArtistas(info);
    }

    useEffect(() => {
        buscar();
    })

    return(
        <div className='AlbumVerif'>
        <div className='Content'>
            <HeaderMenu></HeaderMenu>
            <div className='secao1'>
                <h1>Albuns</h1>
            </div>
            <div className='titulo'>
                <div>
                    <h2>Escolha um artista</h2>
                </div>
                <select>
                {listaArtistas.map(item => <option>{item.nome}</option>)}
                </select>
            </div>
            <div className='content-lista-artistas'>
            </div>
            <Footer></Footer>
        </div>
    </div>
    );
}