import './index.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='Header'>
            <header>
                <Link to='/'><img src="/assets/images/logo.png" className="App-logo" alt="logo" /></Link>
                <ul>
                    <i className='fa fa-camera camera'></i>
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