import './index.scss';
import logo from '../../assets/images/logo.png';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='Home'>
            <div className='Content'>
                <header>
                <img src={logo} className="App-logo" alt="logo" />

                <ul className='lista'>
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

                    <span className='retangulo'>
                        <li className='login'>
                            <Link to='/Login'> Login</Link>
                        </li>
                    </span>
                </ul>
                </header>

                <div >
                    
                </div>


            </div>

        </div>

    )
}