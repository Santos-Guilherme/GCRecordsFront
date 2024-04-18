import './index.scss';
import logo from '../../assets/images/logo.png';
import alma from '../../assets/images/alma-album.jpeg';
import dospredios from '../../assets/images/Dos predios deluxe.jpeg';
import idem from '../../assets/images/idem.jpeg';
import thinklater from '../../assets/images/think-later-album.jpeg';


import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='Home'>
            <div className='Content'>
                <header>
                    <img src={logo} className="App-logo" alt="logo" />

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

                        <span className='retangulo'>
                            <li className='login'>
                                <Link to='/Login'> Login</Link>
                            </li>
                        </span>
                    </ul>
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

                    <h1>Shows</h1>

                </div>

            </div>

            <div className='secao3'>
                <div>
                    <h1>Sobre</h1>
                </div>

            </div>

        </div>

    )
}