import './index.scss';
import imagemlogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import setinha from '../../assets/images/setinhavoltar.png';

export default function HeaderMenu() {
    return (
        <div className='HeaderMenu'>
            <header>
                <Link to='/menu'><img src={setinha} className='setinha' alt="setinha" /></Link>
                <Link to='/'><img src={imagemlogo} className="App-logo" alt="logo" /></Link>

                <Link className='retangulo' to='/login'>
                    <p className='botaologin'>Sair</p>
                </Link>
            </header>
        </div>
    )
}