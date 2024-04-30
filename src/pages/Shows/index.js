import './index.scss';
import imagemrod from '../../assets/images/Rodolfo o capitao 1.png'
import imagemmg from '../../assets/images/martin garrix.png'
import imagemnicki from '../../assets/images/nicki-nicole 2.png'
import imagemtate from '../../assets/images/tate mcrae (1).png'
import imagemveigh from '../../assets/images/veigh baby (1).png'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Shows() {
    return (
        <div className='Shows'>
            <div className='Content'>
                <Header></Header>

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

                <Footer></Footer>
            </div>
        </div>
    )
}