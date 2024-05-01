import './index.scss';
import imagemrod from '../../assets/images/Rodolfo o capitao 1.png'
import imagemmg from '../../assets/images/martin garrix.png'
import imagemnicki from '../../assets/images/nicki-nicole 2.png'
import imagemtate from '../../assets/images/tate mcrae (1).png'
import imagemveigh from '../../assets/images/veigh baby (1).png'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LinhaShowsPrincipais from '../../components/LinhaShowsPrincipais';

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
                        <LinhaShowsPrincipais dataShow='1 ago' nomeShow={'LollaPalooza Chicago'} imagemArtista={imagemnicki} nomeArtista={'Nicki Nicole'}></LinhaShowsPrincipais>
                        <LinhaShowsPrincipais dataShow='19 abr' nomeShow={'Coachella'} imagemArtista={imagemtate} nomeArtista={'Tate Mcrae'}></LinhaShowsPrincipais>
                        <LinhaShowsPrincipais dataShow='11 out' nomeShow={'Tomorrowland'} imagemArtista={imagemmg} nomeArtista={'Martin Garrix'}></LinhaShowsPrincipais>
                        <LinhaShowsPrincipais dataShow='13 set' nomeShow={'Rock in Rio'} imagemArtista={imagemveigh} nomeArtista={'Veigh'}></LinhaShowsPrincipais>
                        <LinhaShowsPrincipais dataShow='27 nov' nomeShow={'Planeta Atlantida'} imagemArtista={imagemrod} nomeArtista={'Rodolfo o Capitão'}></LinhaShowsPrincipais>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    )
}