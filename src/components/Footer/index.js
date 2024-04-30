import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import imagemInstagram from '../../assets/images/instagram.png';
import imagemTiktok from '../../assets/images/tik-tok.png';
import imagemTwitter from '../../assets/images/twitter.png';
import imagemYoutube from '../../assets/images/youtube.png';

export default function Footer() {
    return (
        <div className='Footer'>
            <footer>
                <div className='links-foot'>
                    <div className='container-nav-foot'>
                        <p><Link to='/Artista'> Artista</Link></p>
                        <p><Link to='/Sobre'> Sobre</Link></p>
                    </div>
                    <div className='container-redes-foot'>
                        <div><img src={imagemInstagram} className="logo-redes" alt="logo" /><p>Instagram</p></div>
                        <div><img src={imagemTiktok} className="logo-redes" alt="logo" /><p>Tiktok</p></div>
                        <div><img src={imagemTwitter} className="logo-redes" alt="logo" /><p>Twitter</p></div>
                        <div><img src={imagemYoutube} className="logo-redes" alt="logo" /><p>Youtube</p></div>
                    </div>
                </div>
                <div className='container-logo-foot'>
                    <Link to='/'><img src={imagemlogo} alt="logo" className='logo-foot' /></Link>
                </div>
            </footer>
        </div>
    )
}