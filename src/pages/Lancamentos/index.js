import './index.scss';

import imagemlogo from '../../assets/images/logo.png';
import alma from '../../assets/images/alma-album.jpeg';
import dosprediosdeluxe from '../../assets/images/Dos predios deluxe.jpeg';
import idem from '../../assets/images/idem.jpeg';
import thinklater from '../../assets/images/think-later-album.jpeg';
import dospredio from '../../assets/images/dos predios.png';
import partedemi from '../../assets/images/parte de mi.png';
import sentio from '../../assets/images/Sentio-album.png';
import tatemcraealbum from '../../assets/images/tatemcrae-album2.png';
import querver from '../../assets/images/quer ver.png';
import memaltratou from '../../assets/images/me maltratou.png';

import imagemInstagram from '../../assets/images/instagram.png'
import imagemTiktok from '../../assets/images/tik-tok.png'
import imagemTwitter from '../../assets/images/twitter.png'
import imagemYoutube from '../../assets/images/youtube.png'

import { Link } from 'react-router-dom';

export default function Lancamentos() {
    return (
        <div className='Lancamentos'>
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

                <div className='lancamentos-content'>
                    <div className='lancamentos-title'>
                        <h1>Lançamentos</h1>
                    </div>

                    <div className='lancamentos-principais'>
                        <div className='linha-lancamentos'>
                            <img src={idem} className="img-album" alt="imagem album Idem - Martin Garrix" />
                            <p>Martin Garrix</p>
                            <img src={sentio} className="img-album" alt="imagem album Sentio - Martin Garrix" />
                        </div>

                        <div className='linha-lancamentos'>
                            <img src={alma} className="img-album" alt="imagem album Alma - Nicki Nicole" />
                            <p>Nicki Nicole</p>
                            <img src={partedemi} className="img-album" alt="imagem album Parte de Mi - Nicki Nicole" />
                        </div>

                        <div className='linha-lancamentos'>
                            <img src={querver} className="img-album" alt="imagem album Quer Ver - Rodolfo O Capitão" />
                            <p>Rodolfo O Capitão</p>
                            <img src={memaltratou} className="img-album" alt="imagem album Me Maltratou - Rodolfo O Capitão" />
                        </div>

                        <div className='linha-lancamentos'>
                            <img src={thinklater} className="img-album" alt="imagem album Think Later - Tate McRae" />
                            <p>Tate McRae</p>
                            <img src={tatemcraealbum} className="img-album" alt="imagem album I Used To Think I Could Fly - Tate McRae" />
                        </div>

                        <div className='linha-lancamentos'>
                            <img src={dosprediosdeluxe} className="img-album" alt="imagem album Dos Prédios Deluxe - Veigh" />
                            <p>Veigh</p>
                            <img src={dospredio} className="img-album" alt="imagem album Dos Prédios - Veigh" />
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
    );
}