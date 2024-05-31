import './index.scss';
import * as artistaApi from '../../Api/ArtistaApi'
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';
import { useEffect, useState } from 'react';

export default function ShowsVerif() {

    const [listaArtistas, setListaArtistas] = useState([]);

    const buscar = async () => {
        const info = await artistaApi.buscarArtistas();
        setListaArtistas(info);
    }

    useEffect(() => {
        buscar();
    })

    return (
        <div className='ShowsVerif'>
            <div className='Content'>
                <HeaderMenu></HeaderMenu>
                <div className='secao1'>
                    <h1>Shows</h1>
                </div>
                <div className='titulo'>
                    <div>
                        <h2>Filtro Por Artista</h2>
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