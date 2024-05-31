import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { buscarLancamentos } from '../../Api/AlbumApi'; // Adjust the import path as needed
import { API_ADDRESS } from '../../Api/constant';

export default function Home() {
    const [lancamentos, setLancamentos] = useState([]);

    useEffect(() => {
        const fetchLancamentos = async () => {
            try {
                const albums = await buscarLancamentos();
                setLancamentos(albums);
            } catch (error) {
                console.error('Error fetching latest albums:', error);
            }
        };

        fetchLancamentos();
    }, []);

    return (
        <div className='Home'>
            <div>
                <Header />
            </div>
            <div className='secao1'>
                <div>
                    <h1>Música</h1>
                </div>
            </div>
            <div className='lancamentos'>
                <h2>Últimos Lançamentos</h2>
                <div>
                    {lancamentos.map((album) => (
                        album.imgCapa && (
                            <img
                                key={album.id}
                                src={`${API_ADDRESS}/${album.imgCapa.replace(/\\/g, '/')}`}
                                className="imagemlancamento"
                                alt={album.nome}
                            />
                        )
                    ))}
                </div>
            </div>
            <div className='Content-section'>
                <Link to={"/Shows"}>
                    <div className='secao2'>
                        <div>
                            <h1>Shows</h1>
                        </div>
                    </div>
                </Link>
                <div className='secao3'>
                    <Link to={"/Sobre"}>
                        <div className='Sobre-div'>
                            <h1>Sobre</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
