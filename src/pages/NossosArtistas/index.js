import './index.scss';
import imagemrod from '../../assets/images/Rodolfo o capitao 1.png';
import imagemng from '../../assets/images/martin garrix.png';
import imagemnicki from '../../assets/images/nicki-nicole 2.png';
import imagemtate from '../../assets/images/tate mcrae (1).png';
import imagemveigh from '../../assets/images/veigh baby (1).png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuArtistaQuadro from '../../components/MenuArtistaQuadro';
import { Link } from 'react-router-dom';

export default function NossosArtista() {
    return (
        <div className='Artista-home'>
            <div className='Content'>
                <Header></Header>
                <div className='secao1'>
                    <h1>Seus Artistas</h1>
                </div>
                <input type='text'></input>
                <div className='content-lista-artistas'>
                    <Link to='/artista'><MenuArtistaQuadro imagemArtista={imagemnicki} textoImagem='Nicki Nicole' nomeArtista={'Nicki Nicole'}></MenuArtistaQuadro></Link>
                    <MenuArtistaQuadro imagemArtista={imagemtate} textoImagem='Tate McRae' nomeArtista={'Tate McRae'}></MenuArtistaQuadro>
                    <MenuArtistaQuadro imagemArtista={imagemng} textoImagem='Martin Garrix' nomeArtista={'Martin Garrix'}></MenuArtistaQuadro>
                    <MenuArtistaQuadro imagemArtista={imagemveigh} textoImagem='Veigh' nomeArtista={'Veigh'}></MenuArtistaQuadro>
                    <MenuArtistaQuadro imagemArtista={imagemrod} textoImagem='Rodolfo O Capitão' nomeArtista={'Rodolfo O Capitão'}></MenuArtistaQuadro>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}