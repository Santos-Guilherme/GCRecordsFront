import React, { useEffect, useState } from 'react';
import './index.scss';
import * as albumApi from '../../Api/AlbumApi';
import { API_ADDRESS } from '../../Api/constant';

export default function QuadroLancamentosPrincipais({ artistaId, nomeArtista }) {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const albums = await albumApi.buscarUltimosDoisAlbunsPorArtista(artistaId);
                const filteredAlbums = albums.filter(album => album.imgCapa);
                if (filteredAlbums.length === 2) {
                    setAlbums(filteredAlbums);
                }
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchAlbums();
    }, [artistaId]);

    // Only render if there are exactly 2 albums with cover images
    if (albums.length !== 2) {
        return null;
    }

    return (
        <div className='QuadroLancamentosPrincipais'>
            <div>
                <img
                    key={albums[0].id}
                    src={`${API_ADDRESS}/${albums[0].imgCapa.replace(/\\/g, '/')}`}
                    className="img-album"
                    alt={albums[0].nome}
                />
            </div>
            <div><p>{nomeArtista}</p></div>
            <div>
                <img
                    key={albums[1].id}
                    src={`${API_ADDRESS}/${albums[1].imgCapa.replace(/\\/g, '/')}`}
                    className="img-album"
                    alt={albums[1].nome}
                />
            </div>
        </div>
    );
}
