import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
//import { Link } from 'react-router-dom';

export default function QuadroLancamentosPrincipais(props) {
    return (
        <div className='QuadroLancamentosPrincipais'>
            <img src={props.lancamento1 ?? imagemlogo} className="img-album" alt={props.textoLancamento1} />
            <p>{props.nomeArtista}</p>
            <img src={props.lancamento2 ?? imagemlogo} className="img-album" alt={props.textoLancamento2} />
        </div>
    )
}