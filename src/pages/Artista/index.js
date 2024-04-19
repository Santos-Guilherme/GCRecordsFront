import './index.scss';
import logo from '../../assets/images/logo.png';
import imagemrod from '../../assets/images/Rodolfo o capitao 1.png';
import imagemmg from '../../assets/images/martin garrix.png';
import imagemnicki from '../../assets/images/nicki-nicole 2.png';
import imagemtate from '../../assets/images/tate mcrae (1).png';
import imagemveigh from '../../assets/images/veigh baby (1).png';


import imagemInstagram from '../../assets/images/instagram.png';
import imagemTiktok from '../../assets/images/tik-tok.png';
import imagemTwitter from '../../assets/images/twitter.png';
import imagemYoutube from '../../assets/images/youtube.png';

import { Link } from 'react-router-dom';

export default function Artista() {
    return (
        <div className='Artista-home'>
            <div className='Content'>
                <header>

                    <Link to={"/"}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>

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

                    </ul>
                    <span className='retangulo'>
                        <a className='botaologin' href>Login
                        </a>
                    </span>
                </header>
                <div className='secao1'>
                    <h1>Artistas</h1>
                </div>
                <div className='content-lista-artistas'>
                    <div className='artista'>
                        <span>
                            <div><h1>Nicki Nicole</h1></div>
                            <img src={imagemnicki} className="imagemArtista" alt="Nicki Nicole" />
                        </span>
                    </div>
                    <div className='artista'>
                        <span>
                            <div><h1>Tate McRae</h1></div>
                            <img src={imagemtate} className="imagemArtista" alt="Tate Mcrae" />
                        </span>
                    </div>
                    <div className='artista'>
                        <span>
                            <div><h1>Martin Garrix</h1></div>
                            <img src={imagemmg} className="imagemArtista" alt="Martin Garrix" />
                        </span>
                    </div>
                    <div className='artista'>
                        <span>
                            <div><h1>Veigh</h1></div>
                            <img src={imagemveigh} className="imagemArtista" alt="Veigh" />
                        </span>
                    </div>

                    <div className='artista'>
                        <span>
                            <div><h1>Rodolfo O Capitão</h1></div>
                            <img src={imagemrod} className="imagemArtista" alt="Rodolfo O Capitão" />
                        </span>
                    </div>
                </div>
                <footer>
                    <div className='links-foot'>
                        <div className='container-nav-foot'>
                            <Link to={"/Artista"}><p>Artista</p> </Link>
                            <Link to={"/Sobre"}><p>Sobre</p> </Link>
                        </div>
                        <div className='container-redes-foot'>
                            <div><img src={imagemInstagram} className="logo-redes" alt="logo" /><p>Instagram</p></div>
                            <div><img src={imagemTiktok} className="logo-redes" alt="logo" /><p>Tiktok</p></div>
                            <div><img src={imagemTwitter} className="logo-redes" alt="logo" /><p>Twitter</p></div>
                            <div><img src={imagemYoutube} className="logo-redes" alt="logo" /><p>Youtube</p></div>
                        </div>
                    </div>
                    <div className='container-logo-foot'>
                        <Link to={"/"}> <img src={logo} alt="logo" className='logo-foot' /></Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}