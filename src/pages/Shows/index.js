import './index.scss';

import { Link } from 'react-router-dom';

export default function Shows() {
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
                <h1>Shows</h1>
            </div>

            <div>
            <p>1 ago</p>
            <p>LollaPalooza Chicago</p>
            <img src="" className="App-logo" alt="logo" />
            </div>

            <div>
            <p>19 abr</p>
            <p>Coachella</p>
            <img src="" className="App-logo" alt="logo" />
            </div>

            <div>
            <p>11 out</p>
            <p>Tomorrowland</p>
            <img src="" className="App-logo" alt="logo" />
            </div>

            <div>
            <p>13 set</p>
            <p>Rock in Rio</p>
            <img src="" className="App-logo" alt="logo" />
            </div>

            <div>
            <p>27 nov</p>
            <p>Planeta Atlantida</p>
            <img src="" className="App-logo" alt="logo" />
            </div>
        </div>
    )
}