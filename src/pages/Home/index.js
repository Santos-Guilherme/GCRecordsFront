import './index.scss';
import alma from '../../assets/images/alma-album.jpeg';
import dospredios from '../../assets/images/Dos predios deluxe.jpeg';
import idem from '../../assets/images/idem.jpeg';
import thinklater from '../../assets/images/think-later-album.jpeg';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div className='Home'>
            <div>
                <Header></Header>
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
            <div className='Content-section'>
                <Link to={"/Shows"} >
                    <div className='secao2'>
                        <div>
                            <h1>Shows</h1>
                        </div>
                    </div>
                </Link>

                <div className='secao3'>
                    <Link to={"/Sobre"}>
                        <div className='Sobre-div'>
                            <h1>Sobre</h1>
                        </div>
                    </Link>
                </div>

            </div>

            

            <Footer></Footer>

        </div>

    )
}