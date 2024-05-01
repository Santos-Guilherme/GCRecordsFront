import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
//import { Link } from 'react-router-dom';

export default function MenuArtistaQuadro(props) {
    return (
        <div className='MenuArtistaQuadro'>
            <div className='artista'>
                <span>
                    <div><h1>{props.nomeArtista}</h1></div>
                    <img src={props.imagemArtista ?? imagemlogo} className="imagemArtista" alt={props.textoImagem} />
                </span>
            </div>
        </div>
    )
}