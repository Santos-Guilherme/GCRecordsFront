import './index.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const authToken = localStorage.getItem('authToken');

    return (
        <div className='Header'>
            <header>
                <Link to='/'><img src="/assets/images/logo.png" className="App-logo" alt="logo" /></Link>
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
                {authToken ? (
                    <button className='retangulo' onClick={handleLogout}>
                        <p className='botaologin'>Sair</p>
                    </button>
                ) : (
                    <Link className='retangulo' to='/login'>
                        <p className='botaologin'>Login</p>
                    </Link>
                )}
            </header>
        </div>
    );
}
