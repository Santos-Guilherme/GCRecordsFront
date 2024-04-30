import './index.scss';
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
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Lancamentos() {
    return (
        <div className='Lancamentos'>
            <div className='Content'>
                <Header></Header>

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

                <Footer></Footer>
            </div>
        </div>
    );
}