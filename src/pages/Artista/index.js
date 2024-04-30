import './index.scss';
import imagemrod from '../../assets/images/Rodolfo o capitao 1.png';
import imagemmg from '../../assets/images/martin garrix.png';
import imagemnicki from '../../assets/images/nicki-nicole 2.png';
import imagemtate from '../../assets/images/tate mcrae (1).png';
import imagemveigh from '../../assets/images/veigh baby (1).png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Artista() {
    return (
        <div className='Artista-home'>
            <div className='Content'>
                <Header></Header>
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
                <Footer></Footer>
            </div>
        </div>
    );
}