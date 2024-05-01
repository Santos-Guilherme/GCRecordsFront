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

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Ver Artista</a>
                    </div>

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Adicionar Artista</a>
                    </div>

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Editar artista</a>
                    </div>

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Excluir Artista</a>
                    </div>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}