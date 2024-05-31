import React, { useEffect, useState } from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LinhaShowsPrincipais from '../../components/LinhaShowsPrincipais';
import * as showApi from '../../Api/ShowApi'; // Adjust the import path as needed
import { API_ADDRESS } from '../../Api/constant';

export default function Shows() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const fetchedShows = await showApi.buscarShowsPrincipais();
                setShows(fetchedShows);
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
                                fk_idArtista ={show.fk_idArtista}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
