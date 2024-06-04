import './index.scss';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
    const GoBack = () => {
        window.history.back();
    };

    return (
        <div className='HeaderMenu'>
            <header>
                <Link onClick={GoBack}><img src="/assets/images/voltar.png" className='setinha' alt="Voltar" /></Link>
                <Link to='/menu'><img src="/assets/images/logo.png" className="App-logo" alt="logo" /></Link>

                <Link className='retangulo' to='/login'>
                    <p className='botaologin'>Sair</p>
                </Link>
            </header>
        </div>
    )
}