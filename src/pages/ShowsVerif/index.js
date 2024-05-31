import './index.scss';
import Footer from '../../components/Footer';
import HeaderMenu from '../../components/HeaderMenu';

export default function ShowsVerif() {
    return (
        <div className='ShowsVerif'>
            <div className='Content'>
                <HeaderMenu></HeaderMenu>
                <div className='secao1'>
                    <h1>Shows</h1>
                </div>
                <div className='titulo'>
                    <div>
                        <h2>Filtro Por Artista</h2>
                    </div>
                    <input type='text'></input>
                </div>
                <div className='content-lista-artistas'>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}