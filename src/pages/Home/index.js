import './index.scss';
import '/gcrecordsfront/src/public/CSS/reset.css'
//import logo from '/gcrecordsfront/src/public/images/GCRecords/image.jpeg';
import '/gcrecordsfront/src/public/CSS/fonte.css';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='Home'>
            <div className='Content'>
                <header>
                
                <ul className='lista'>
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

                    <span className='retangulo'>
                        <li className='login'>
                            <Link to='/Login'> Login</Link>
                        </li>
                    </span>
                </ul>
                </header>

                <div >
                    
                </div>


            </div>

        </div>

    )
}