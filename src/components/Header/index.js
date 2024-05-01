import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='Header'>
            <header>
                <Link to='/'><img src={imagemlogo} className="App-logo" alt="logo" /></Link>
                <ul>
                    <li className='artista'>
                        <Link to='/Artista'> Artista</Link>
                    </li>
                    <li className='lancamento'>
                        <Link to='/Lancamentos'> Lançamento</Link>
                    </li>
                    <li className='shows'>
                        <Link to='/Shows'> Shows</Link>
                    </li>
                    <li className='sobre'>
                        <Link to='/Sobre'> Sobre</Link>
                    </li>
                </ul>
                <span className='retangulo'>
                    <Link to='/login' className='botaologin' href>Login
                    </Link>
                </span>
            </header>
        </div>
    )
}