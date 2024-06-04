import React, { useEffect, useState } from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuadroLancamentosPrincipais from '../../components/QuadroLancamentosPrincipais';
import * as artistaApi from '../../Api/ArtistaApi';

export default function Lancamentos() {
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        const fetchArtistas = async () => {
            try {
                const artistas = await artistaApi.buscarArtistas();
                setArtistas(artistas);
            } catch (error) {
                console.error('Error fetching artists:', error);
            }
        };

        fetchArtistas();
    }, []);

    return (
        <div className='Lancamentos'>
            <div className='Content'>
                <Header />
                <div className='lancamentos-content'>
                    <div className='lancamentos-title'>
                        <h1>Lançamentos</h1>
                    </div>
                    <div className='lancamentos-principais'>
                        {artistas.map((artista) => (
                            <QuadroLancamentosPrincipais
                                key={artista.id}
                                artistaId={artista.id}
                                nomeArtista={artista.nome}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
