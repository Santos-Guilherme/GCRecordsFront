import './index.scss';

import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu';

export default function MenuShows() {
    return (
        <div className='MenuShows'>
            <HeaderMenu></HeaderMenu>
            <div className='Quadromenu'>
                <div className='Content'>
                    <h1>Escolha a opção</h1>
                    <Link className='retangulomenu' to='/show/verif'>
                        <div>
                            <a className='botao' href='/'>Ver Shows</a>
                        </div>
                    </Link>
                    <Link className='retangulomenu' to='/show/cadastro'>
                        <div>
                            <p className='botao'>Adicionar Shows</p>
                        </div>
                    </Link>
                    <Link className='retangulomenu' to='/show/editar'>
                        <div>
                            <a className='botao' href='/'>Mudar local shows</a>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}