import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
import imagemGrupo from '../../assets/images/sobre-foto-grupo.png';
import imagemSobre1 from '../../assets/images/sobre-mc-studio.png';
import imagemSobre2 from '../../assets/images/sobre-crianca-fone.png';


import { Link } from 'react-router-dom';


export default function Sobre() {
    return (
        <div className='Sobre'>
            <div className='Content'>
                <header>
                    <img src={imagemlogo} className="App-logo" alt="logo" />
                    <ul>
                        <li className='artista'>
                            <Link to='/Artista'> Artista</Link>
                        </li>
                        <li className='lancamento'>
                            <Link to='/Lancamentos'> Lançamento</Link>
                        </li>
                        <li className='shows'>
                            <Link to='/Shows'> Shows</Link>
                        </li>
                        <li className='sobre'>
                            <Link to='/Sobre'> Sobre</Link>
                        </li>
                    </ul>
                    <span className='retangulo'>
                        <a className='botaologin' href>Login
                        </a>
                    </span>
                </header>

                <div>
                    <h1>Quem somos</h1>
                </div>
                <div className='div-paragrafo'>
                    <p>Somos uma gravadora brasileira com foco em levar para todas as comunidades o mais alto nivel de musica e cultura.</p>
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
                    <p>G4MP3R Code Records disponibiliza albuns de artistas mundias e nacionais com preços acessiveis para o pessoal da quebrada.</p>
                    <img src={imagemSobre2} className="Imagem-Sobre" alt="Imagem de uma criança segurando um fone de ouvido na cabeça" />
                </div>
                <footer>
                    
                </footer>
            </div>
        </div>
    )
}