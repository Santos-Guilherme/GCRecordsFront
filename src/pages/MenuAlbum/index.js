import './index.scss';

import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

export default function MenuAlbum() {
    return (
        <div className='MenuAlbum'>
            <HeaderMenu></HeaderMenu>
            <div className='Quadromenu'>
                <div className='Content'>
                    <h1>Escolha a opção</h1>
                    <div className='retangulomenu'>
                        <a className='botao' href='/'>Ver Albuns</a>
                    </div>
                    <Link className='retangulomenu' to='/album/cadastro'>
                        <div>
                            <a className='botao' href='/'>Adicionar Album</a>
                        </div>
                    </Link>
                    <Link className='retangulomenu' to='/album/editar'>
                        <div>
                            <a className='botao' href='/'>Editar capa de album</a>
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