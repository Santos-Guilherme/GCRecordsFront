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
                        <Link to='/artistas'> Artistas</Link>
                    </li>
                    <li className='lancamento'>
                        <Link to='/lancamentos'> Lançamento</Link>
                    </li>
                    <li className='shows'>
                        <Link to='/shows'> Shows</Link>
                    </li>
                    <li className='sobre'>
                        <Link to='/sobre'> Sobre</Link>
                    </li>
                </ul>
                <Link className='retangulo' to='/login'>
                    <p className='botaologin'>Login</p>
                </Link>
            </header>
        </div>
    )
}