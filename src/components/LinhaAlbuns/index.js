import { useEffect, useState } from 'react';
import './index.scss';
import { API_ADDRESS } from '../../Api/constant';
import { Link } from 'react-router-dom';

export default function LinhaAlbuns({ album, deletar }) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const formatAlbumDate = (dateString) => {
            const date = new Date(dateString);
            const albumYear = date.getFullYear();
            return albumYear;
        };
        setFormattedDate(formatAlbumDate(album.lancamento));
    }, [album.lancamento]);

    return (
        <div className='LinhaAlbuns'>
            <p>{album.nome}</p>
            <p>({album.artista})</p>
            <p>Id: {album.id}</p>
            <div className='capa-album'>
                <img src={`${API_ADDRESS}/${album.capa}`} alt={`Capa do Álbum ${album.nome}`} ></img>
            </div>
            <p>{formattedDate}</p>
            <p></p>
            <div className='icon-fuction'>
                <Link to={`/album/editar/${album.id}`}><img src='/assets/images/alterar.png' alt='' className='icon-function-img'></img></Link>
                <img src='/assets/images/excluir.png' alt='' className='icon-function-img' onClick={() => deletar(album)}></img>
            </div>
        </div>
    )
}
