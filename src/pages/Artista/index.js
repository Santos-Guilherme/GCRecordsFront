import './index.scss';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuArtistaQuadro from '../../components/MenuArtistaQuadro';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Artista() {
    const [listaArtistas, setListaArtistas] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            let url = 'http://localhost:8080/artista';
        
            let r = await axios.get(url);
            let info = r.data;
        
            setListaArtistas(info);
        }
        buscar();
    })
    
    return (
        <div className='Artista-home'>
            <div className='Content'>
                <Header></Header>
                <div className='secao1'>
                    <h1>Artistas</h1>
                </div>
                <div className='content-lista-artistas'>
                    {listaArtistas.map(item =>
                        <Link to={`/artista/${item.id}`}><MenuArtistaQuadro nomeArtista={item.nome} key={item.id}></MenuArtistaQuadro></Link>
                    )}
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}