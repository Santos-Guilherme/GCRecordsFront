import './index.scss';

import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu';

export default function MenuArtista() {
    return (
        <div className='MenuArtista'>

            <HeaderMenu></HeaderMenu>
            <div className='Quadromenu'>
                <div className='Content'>
                    <h1>Escolha a opção</h1>

                    <Link className='retangulomenu' to='/seusartistas'>
                    <div>
                        <a className='botao' href='/'>Ver Artista</a>
                    </div>
                    </Link>

                    <Link className='retangulomenu' to='/adicionarartistas'>
                    <div>
                        <a className='botao' href='/'>Adicionar Artista</a>
                    </div>
                    </Link>

                    <Link className='retangulomenu' to='/editarartistas'>
                    <div>
                        <a className='botao' href='/'>Editar artista</a>
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