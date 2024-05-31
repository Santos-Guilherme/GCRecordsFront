import React, { useEffect, useState } from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LinhaShowsPrincipais from '../../components/LinhaShowsPrincipais';
import * as artistaApi from '../../Api/ArtistaApi';
import * as showApi from '../../Api/ShowApi';
import axios from 'axios';

export default function Shows() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                setShows(await showApi.buscarShowsPrincipais());
            } catch (error) {
                console.error('Error fetching shows:', error);
            }
        };

        fetchShows();
    }, []);

    return (
        <div className='Shows'>
            <div className='Content'>
                <Header />
                <div className='shows-content'>
                    <div className='shows-title'>
                        <h1>Shows</h1>
                    </div>
                    <div className='shows-principais'>
                        {shows.map(show => (
                            <LinhaShowsPrincipais
                                key={show.id}
                                dataShow={show.dataShow}
                                nomeShow={show.nome}
                                nomeArtista={show.nomeArtista}
                                imagemArtista={show.imagemArtista}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
