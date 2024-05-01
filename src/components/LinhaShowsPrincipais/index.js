import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
//import { Link } from 'react-router-dom';

export default function LinhaShowsPrincipais(props) {
    return (
        <div className='LinhaShowsPrincipais'>
            <p className='show-data'>{props.dataShow}</p>
            <div>
                <p>{props.nomeShow}</p>
            </div>
            <img src={props.imagemArtista ?? imagemlogo} className="img-artista" alt={props.nomeArtista} />
        </div>
    )
}