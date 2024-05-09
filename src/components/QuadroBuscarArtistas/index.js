import './index.scss';
import imagemlogo from '../../assets/images/logo.png';


export default function QuadroBuscarArtistas(props) {
    return (
        <div className='QuadroBuscarArtistas'>
            <div className='artista'>
                <span>
                    <div><h1>{props.nomeArtista}</h1>
                        <h1>{props.idArtista} </h1>
                    </div>
                    <img src={props.imagemArtista ?? imagemlogo} className="imagemArtista" alt={props.textoImagem} />
                </span>
            </div>
        </div>
    )
}