import './index.scss';
import imagemGrupo from '../../assets/images/sobre-foto-grupo.png';
import imagemSobre1 from '../../assets/images/sobre-mc-studio.png';
import imagemSobre2 from '../../assets/images/sobre-crianca-fone.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Sobre() {
    return (
        <div className='Sobre'>
            <div className='Content'>
                <Header></Header>

                <div>
                    <h1>Quem somos</h1>
                </div>
                <div className='div-paragrafo'>
                    <p>Somos uma gravadora brasileira com foco em levar para todas as comunidades o mais alto nível de música e cultura.</p>
                    <img src={imagemGrupo} className="Imagem-Sobre" alt="Imagem do integrantes fundadores e desenvolvedores da GCRecords" />
                </div>

                <div>
                    <h1>Objetivo</h1>
                </div>
                <div className='div-paragrafo'>
                    <img src={imagemSobre1} className="Imagem-Sobre" alt="Imagem de um dos MC's da GCRecords em seu studio" />
                    <p>Nossa missão é proporcionar a excelência da cultura musical a todas as comunidades.</p>
                </div>

                <div>
                    <h1>Impacto Social</h1>
                </div>
                <div className='div-paragrafo'>
                    <p>G4MP3R Code Records disponibiliza albuns de artistas mundias e nacionais com preços acessíveis para o pessoal da quebrada.</p>
                    <img src={imagemSobre2} className="Imagem-Sobre" alt="Imagem de uma criança segurando um fone de ouvido na cabeça" />
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}