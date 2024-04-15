import './index.scss';

import { Link } from 'react-router-dom';

export default function Lancamentos() {
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
            <h1>Lançamentos</h1>
        </div>

        <div>
        <img src="" className="App-logo" alt="logo" />
        <p>Martin Garrix</p>
        <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
        <img src="" className="App-logo" alt="logo" />
        <p>Nicki Nicole</p>
        <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
        <img src="" className="App-logo" alt="logo" />
        <p>Rodolfo Capitão</p>
        <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
        <img src="" className="App-logo" alt="logo" />
        <p>Tate McRae</p>
        <img src="" className="App-logo" alt="logo" />
        </div>

        <div>
        <img src="" className="App-logo" alt="logo" />
        <p>Veigh</p>
        <img src="" className="App-logo" alt="logo" />
        </div>
        </div>
    );
}