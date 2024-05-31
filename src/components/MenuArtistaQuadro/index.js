import { Link } from 'react-router-dom';
import './index.scss';
import { API_ADDRESS } from '../../Api/constant';

export default function MenuArtistaQuadro({ item }) {
    const imgSrc = item.imgSelfie ? `${API_ADDRESS}/${item.imgSelfie.replace(/\\/g, '/')}` : '/assets/images/perfil.png';

    return (
        <Link to={`/artista/${item.id}`}>
            <div className='MenuArtistaQuadro'>
                <div className='artista'>
                    <span>
                        <div><h1>{item.nome}</h1></div>
                        <img src={imgSrc} className="imagemArtista" alt={item.nome} />
                    </span>
                </div>
            </div>
        </Link>
    );
}
