import { Link } from 'react-router-dom';
import { API_ADDRESS } from '../../Api/constant';
import './index.scss';

export default function QuadroBuscarArtistas({ item, removerArtista }) {
    const imgSrc = item.selfie ? `${API_ADDRESS}/${item.selfie.replace(/\\/g, '/')}` : '/assets/images/perfil2.png';

    return (
        <div className='QuadroBuscarArtistas'>
            <div className='artista'>
                <span>
                    <div><h1>{item.nome}</h1>
                        <h1>Id: {item.id} </h1>
                    </div>
                    <div className='imagens'>
                        <img src={imgSrc} className="imagemArtista" alt={item.nome} />
                        <div>
                            <div className='botao-function'>
                                <Link to={`/artista/editar/${item.id}`}><button>Alterar</button></Link>
                            </div>
                            <div className='botao-function'>
                                <button onClick={() => removerArtista(item)}>deletar</button>
                            </div>
                            <div className='botao-function'>
                                <Link to={`/artista/verif/${item.id}`}><button>Ver artista</button></Link>
                            </div>
                        </div>
                    </div>
                </span>
            </div>

        </div>
    )
}