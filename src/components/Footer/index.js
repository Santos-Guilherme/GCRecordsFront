import './index.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='Footer'>
            <footer>
                <div className='links-foot'>
                    <div className='container-nav-foot'>
                        <p><Link to='/artistas'> Artistas</Link></p>
                        <p><Link to='/sobre'> Sobre</Link></p>
                    </div>
                    <div className='container-redes-foot'>
                        <a href='www.instagram.com'><img src="/assets/images/redes/instagram.png" className="logo-redes" alt="logo" /><p>Instagram</p></a>
                        <a href='www.instagram.com'><img src="/assets/images/redes/tik-tok.png" className="logo-redes" alt="logo" /><p>Tiktok</p></a>
                        <a href='www.instagram.com'><img src="/assets/images/redes/twitter.png" className="logo-redes" alt="logo" /><p>Twitter</p></a>
                        <a href='www.instagram.com'><img src="/assets/images/redes/youtube.png" className="logo-redes" alt="logo" /><p>Youtube</p></a>
                    </div>
                </div>
                <div className='container-logo-foot'>
                    <Link to='/'><img src="/assets/images/logo.png" alt="logo" className='logo-foot' /></Link>
                </div>
            </footer>
        </div>
    )
}