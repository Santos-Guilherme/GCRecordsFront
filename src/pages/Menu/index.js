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
                    <div>
                        <Link className='retangulomenu' to='/artista/verif'>
                            <p className='botao'>Artistas</p>
                        </Link>
                    </div>
                    <div>
                        <Link className='retangulomenu' to='/album/verif'>
                            <p className='botao' >Albuns</p>
                        </Link>
                    </div>
                    <div>
                        <Link className='retangulomenu' to='/show/verif'>
                            <p className='botao'>Shows</p>
                        </Link>
                    </div>                    
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
} 