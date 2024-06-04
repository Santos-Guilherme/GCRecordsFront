import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Sobre() {
    return (
        <div className='Sobre'>
            <div className='Content'>
                <Header></Header>

                <div className='div-paragrafo'>
                    <div className='content-paragrafo'>
                        <div>
                            <h1>Quem somos</h1>
                        </div>
                        <div className='div-paragrafo'>
                            <p>Somos uma gravadora brasileira com foco em levar para todas as comunidades o mais alto nível de música e cultura.</p>
                        </div>
                    </div>
                    <img src="/assets/images/pagina-sobre/pecinhas.jpg" className="Imagem-Sobre" alt="Imagem do integrantes fundadores e desenvolvedores da GCRecords" />
                </div>

                <div className='div-paragrafo'>
                    <img src="/assets/images/pagina-sobre/sobre-mc-studio.png" className="Imagem-Sobre" alt="Imagem de um dos MC's da GCRecords em seu studio" />
                    <div className='content-paragrafo'>
                        <div>
                            <h1>Objetivo</h1>
                        </div>
                        <div className='div-paragrafo'>
                            <p>Nossa missão é proporcionar a excelência da cultura musical a todas as comunidades.</p>
                        </div>
                    </div>
                </div>

                <div className='div-paragrafo'>
                    <div className='content-paragrafo'>
                        <div>
                            <h1>Impacto Social</h1>
                        </div>
                        <div className='div-paragrafo'>
                            <p>G4MP3R Code Records disponibiliza albuns de artistas mundias e nacionais com preços acessíveis para o pessoal da quebrada.</p>
                        </div>
                    </div>
                    <img src="/assets/images/pagina-sobre/sobre-crianca-fone.png" className="Imagem-Sobre" alt="Imagem de uma criança segurando um fone de ouvido na cabeça" />
                </div>

                <Footer></Footer>
            </div>
        </div>
    )
}
