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
import QuadroLancamentosPrincipais from '../../components/QuadroLancamentosPrincipais';

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
                        <QuadroLancamentosPrincipais lancamento1={idem} lancamento2={sentio} nomeArtista="Martin Garrix" textoLancamento1="Idem" textoLancamento2="sentio"></QuadroLancamentosPrincipais>
                        <QuadroLancamentosPrincipais lancamento1={alma} lancamento2={partedemi} nomeArtista="Nicki Nicole" textoLancamento1="Alma" textoLancamento2="Parte de Mi"></QuadroLancamentosPrincipais>
                        <QuadroLancamentosPrincipais lancamento1={querver} lancamento2={memaltratou} nomeArtista="Rodolfo O Capitão" textoLancamento1="Quer Ver" textoLancamento2="Me Maltratou"></QuadroLancamentosPrincipais>
                        <QuadroLancamentosPrincipais lancamento1={thinklater} lancamento2={tatemcraealbum} nomeArtista="Tate McRae" textoLancamento1="Think Later" textoLancamento2="I Used To Think I Could Fly"></QuadroLancamentosPrincipais>
                        <QuadroLancamentosPrincipais lancamento1={dosprediosdeluxe} lancamento2={dospredio} nomeArtista="Veigh" textoLancamento1="Dos Prédios Deluxe" textoLancamento2="Dos Prédios"></QuadroLancamentosPrincipais>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
}