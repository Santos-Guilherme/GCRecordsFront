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
                const filteredAlbums = albums.filter(album => album.capa);
                if (filteredAlbums.length === 2) {
                    setAlbums(filteredAlbums);
                }
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchAlbums();
    }, [artistaId]);

    if (albums.length !== 2) {
        return null;
    }

    return (
        <div className='QuadroLancamentosPrincipais'>
            <div>
                <a href={albums[0].spotify} target='blank'><img
                    key={albums[0].id}
                    src={`${API_ADDRESS}/${albums[0].capa.replace(/\\/g, '/')}`}
                    className="img-album"
                    alt={albums[0].nome}
                /></a>
            </div>
            <div><p>{nomeArtista}</p></div>
            <div>
                <a href={albums[1].spotify} target='blank'><img
                    key={albums[1].id}
                    src={`${API_ADDRESS}/${albums[1].capa.replace(/\\/g, '/')}`}
                    className="img-album"
                    alt={albums[1].nome}
                /></a>
            </div>
        </div>
    );
}
