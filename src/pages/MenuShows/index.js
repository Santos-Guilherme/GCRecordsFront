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

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Ver Shows</a>
                    </div>

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Adicionar Shows</a>
                    </div>

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Mudar local shows</a>
                    </div>

                    <div className='retangulomenu'>
                        <a className='botao' href=''>Desmarcar shows</a>
                    </div>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}