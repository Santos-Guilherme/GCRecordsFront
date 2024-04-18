import './index.scss';

import imagemlogo from '../../assets/images/logo.png';
import imagemrod from '../../assets/images/Rodolfo o capitao 1.png'
import imagemmg from '../../assets/images/martin garrix.png'
import imagemnicki from '../../assets/images/nicki-nicole 2.png'
import imagemtate from '../../assets/images/tate mcrae (1).png'
import imagemveigh from '../../assets/images/veigh baby (1).png'

import imagemInstagram from '../../assets/images/instagram.png'
import imagemTiktok from '../../assets/images/tik-tok.png'
import imagemTwitter from '../../assets/images/twitter.png'
import imagemYoutube from '../../assets/images/youtube.png'

import { Link } from 'react-router-dom';

export default function Shows() {
    return (
        <div className='Shows'>
            <div className='Content'>
                <header>
                    <Link to={'/'}>
                        <img src={imagemlogo} className="App-logo" alt="logo" />
                    </Link>
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

                <div className='shows-content'>
                    <div className='shows-title'>
                        <h1>Shows</h1>
                    </div>
                    <div className='shows-principais'>
                        <div className='linha-show'>
                            <p className='show-data'>1 ago</p>
                            <div>
                                <p>LollaPalooza Chicago</p>
                            </div>
                            <img src={imagemnicki} className="img-artista" alt="imagem nicki nicole" />
                        </div>

                        <div className='linha-show'>
                            <p className='show-data'>19 abr</p>
                            <div>
                                <p>Coachella</p>
                            </div>
                            <img src={imagemtate} className="img-artista" alt="imagem tate mcrae" />
                        </div>

                        <div className='linha-show'>
                            <p className='show-data'>11 out</p>
                            <div>
                                <p>Tomorrowland</p>
                            </div>
                            <img src={imagemmg} className="img-artista" alt="imagem martin garrix" />
                        </div>

                        <div className='linha-show'>
                            <p className='show-data'>13 set</p>
                            <div>
                                <p>Rock in Rio</p>
                            </div>
                            <img src={imagemveigh} className="img-artista" alt="imagem veigh" />
                        </div>

                        <div className='linha-show'>
                            <p className='show-data'>27 nov</p>
                            <div>
                                <p>Planeta Atlantida</p>
                            </div>
                            <img src={imagemrod} className="img-artista" alt="imagem rodolfo capitão" />
                        </div>
                    </div>
                </div>

                <footer>
                    <div className='links-foot'>
                        <div className='container-nav-foot'>
                            <Link to={'/artista'}>
                                <p>Artista</p>
                            </Link>
                            <Link to={'/sobre'}>
                                <p>Sobre</p>
                            </Link>
                        </div>
                        <div className='container-redes-foot'>
                            <div><img src={imagemInstagram} className="logo-redes" alt="logo" /><p>Instagram</p></div>
                            <div><img src={imagemTiktok} className="logo-redes" alt="logo" /><p>Tiktok</p></div>
                            <div><img src={imagemTwitter} className="logo-redes" alt="logo" /><p>Twitter</p></div>
                            <div><img src={imagemYoutube} className="logo-redes" alt="logo" /><p>Youtube</p></div>
                        </div>
                    </div>
                    <div className='container-logo-foot'>
                        <Link to={'/'}>
                            <img src={imagemlogo} alt="logo" className='logo-foot' />
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}