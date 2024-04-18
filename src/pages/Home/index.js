import './index.scss';
import logo from '../../assets/images/logo.png';
import alma from '../../assets/images/alma-album.jpeg';
import dospredios from '../../assets/images/Dos predios deluxe.jpeg';
import idem from '../../assets/images/idem.jpeg';
import thinklater from '../../assets/images/think-later-album.jpeg';

import imagemInstagram from '../../assets/images/instagram.png';
import imagemTiktok from '../../assets/images/tik-tok.png';
import imagemTwitter from '../../assets/images/twitter.png';
import imagemYoutube from '../../assets/images/youtube.png';


import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='Home'>
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



            </div>

            <div className='secao1' >
                <div>

                    <h1>Música</h1>

                </div>



            </div>

            <div className='lancamentos'>


                <h2>Ultimos Lançamentos</h2>



                <div >
                    <img src={alma} className="imagemlancamento" alt="album" />
                    <img src={idem} className="imagemlancamento" alt="album" />
                    <img src={dospredios} className="imagemlancamento" alt="album" />
                    <img src={thinklater} className="imagemlancamento" alt="album" />

                </div>


            </div>


            <div className='secao2'>

                <div>

                    <Link to={"/Shows"} ><h1>Shows</h1> </Link>
                </div>

            </div>

            <div className='secao3'>
                <div>
                    <Link to= {"/Sobre"}><h1>Sobre</h1> </Link>
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

    )
}