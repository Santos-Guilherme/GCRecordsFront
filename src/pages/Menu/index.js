import './index.scss';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className='Menu'>
            <HeaderMenu></HeaderMenu>

            <div className='Quadromenu'>
            <div className='Content'>
                <h1>Escolha a opção</h1>

                <div className='retangulomenu'>
                    <Link className='botao' to='/menualbum'>Albuns</Link>
                </div>

                <div className='retangulomenu'>
                    <Link className='botao' to='/menushows'>Shows</Link>
                </div>

                <div className='retangulomenu'>
                    <Link className='botao' to='/menuartista'>Artistas</Link>
                </div>
            </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
} 