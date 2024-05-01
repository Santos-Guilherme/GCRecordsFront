import './index.scss';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';

export default function Menu() {
    return (
        <div className='Menu'>
            <HeaderMenu></HeaderMenu>

            <div className='Quadromenu'>
            <div className='Content'>
                <h1>Escolha a opção</h1>

                <div className='retangulomenu'>
                    <a className='botao' href='/'>Albuns</a>
                </div>

                <div className='retangulomenu'>
                    <a className='botao' href='/'>Shows</a>
                </div>

                <div className='retangulomenu'>
                    <a className='botao' href='/'>Artistas</a>
                </div>
            </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
} 