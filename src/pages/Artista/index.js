import './index.scss';

import { Link } from 'react-router-dom';

export default function Artista () {
    return (
        <div className='Header'>
        <header>
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
                <li className='login'>
                   <Link to='/Login'> Login</Link> 
                </li>
            </ul>
        </header>

        <div>
            <h1>Artistas</h1>
        </div>

        <div>
            <h1>Nicki Nicole</h1>
            <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
            <h1>Tate McRae</h1>
            <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
            <h1>Martin Garrix</h1>
            <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
            <h1>Veigh</h1>
            <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
            <h1>Rodolfo O Capitão</h1>
            <img src="" className="App-logo" alt="logo" />
        </div>
        </div>
    );
}