import { Link } from 'react-router-dom';
import { API_ADDRESS } from '../../Api/constant';
import './index.scss';

export default function QuadroBuscarArtistas({ item, removerArtista }) {
    const imgSrc = item.imgSelfie ? `${API_ADDRESS}/${item.imgSelfie.replace(/\\/g, '/')}` : '/assets/images/perfil.png';

    return (
            <div className='QuadroBuscarArtistas'>
                <div className='artista'>
                    <span>
                        <div><h1>{item.nome}</h1>
                            <h1>{item.id} </h1>
                        </div>
                        <div className='imagens'>
                            <img src={imgSrc} className="imagemArtista" alt={item.nome} />
                            <div>
                                <img src='' alt='alterar'></img>
                                <button src='' alt='deletar' onClick={() => removerArtista(item)}>deletar</button>
                                
                            <Link to={`/artista/${item.id}`}><button>Ver artista</button></Link>
                            </div>
                        </div>
                    </span>
                </div>

            </div>
    )
}