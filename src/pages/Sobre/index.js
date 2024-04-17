import './index.scss';
import logo from '../../assets/images/logo.png';


import { Link } from 'react-router-dom';


export default function Sobre() {
    return (
        <div className='Sobre'>
            <div className='Content'>
                <header>
                    <img src={logo} className="App-logo" alt="logo" />
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
                        <a className='botaologin' href>Login
                        </a>
                    </span>
                </header>

                <div>
                    <h1>Quem somos</h1>
                </div>
                <div className='div-paragrafo'>
                    <img src="" className="App-logo" alt="logo" />
                    <p>Somos uma gravadora brasileira com foco em levar para todas as comunidades o mais alto nivel de musica e cultura.</p>
                </div>

                <div>
                    <h1>Objetivo</h1>
                </div>
                <div className='div-paragrafo'>
                    <img src="" className="App-logo" alt="logo" />
                    <p>Nossa missão é proporcionar a excelência da cultura musical a todas as comunidades.</p>
                </div>

                <div>
                    <h1>Impacto Social</h1>
                </div>
                <div className='div-paragrafo'>
                    <img src="" className="App-logo" alt="logo" />
                    <p>G4MP3R Code Records disponibiliza albuns de artistas mundias e nacionais com preços acessiveis para o pessoal da quebrada.</p>
                </div>

            </div>
        </div>
    )
}