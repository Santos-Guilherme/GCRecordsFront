import './index.scss';
import imagemnicki from '../../assets/images/nicki-nicole 2.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuadroBuscarArtistas from '../../components/QuadroBuscarArtistas';

export default function NossosArtista() {
    return (
        <div className='Artista-home'>
            <div className='Content'>
                <Header></Header>
                <div className='secao1'>
                    <h1>Seus Artistas</h1>
                </div>

                <div className='titulo'>
                    <div className='titulo2'>
                        <h2>Procurar Artista:</h2>
                    </div>
                <input type='text'></input>
                </div>



                <div className='content-lista-artistas'>
                    <QuadroBuscarArtistas idArtista = 'Id 01' imagemArtista={imagemnicki} textoImagem='Nicki Nicole' nomeArtista={'Nicki Nicole'}></QuadroBuscarArtistas>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}