import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import setinha from '../../assets/images/setinhavoltar.png';

export default function HeaderMenu() {
    return (
        <div className='HeaderMenu'>
            <header>
                <Link to='/login'><img src={setinha} className='setinha' alt="setinha" /></Link>
                <Link to='/'><img src={imagemlogo} className="App-logo" alt="logo" /></Link>

                <span className='retangulo'>
                    <a className='botaologin' href>Sair</a>
                </span>
            </header>
        </div>
    )
}