import './index.scss';

import Footer from '../../components/Footer';
import imagemlogo from '../../assets/images/logo.png';
import setinha from '../../assets/images/setinhavoltar.png';
import { Link } from 'react-router-dom';

export default function LoginOpcao() {
    return (
        <div className='LoginOpcao'>
            <header>
                <Link to='/Login'><img src={setinha} className='setinha' alt="setinha" /></Link>
                <Link to='/'><img src={imagemlogo} className="App-logo" alt="logo" /></Link>

                <span className='retangulo'>
                    <a className='botaologin' href>Sair</a>
                </span>
            </header>

            <div className='Quadromenu'>
            <div className='Content'>
                <h1>Escolha a opção</h1>

                <div className='retangulomenu'>
                    <a className='botao' href=''>Albuns</a>
                </div>

                <div className='retangulomenu'>
                    <a className='botao' href=''>Shows</a>
                </div>

                <div className='retangulomenu'>
                    <a className='botao' href=''>Artistas</a>
                </div>
            </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
} 