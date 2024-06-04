import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {

    const buscar = async () => {
    }

    return (
        <div className='Login'>
            <div className='Header'>
                <Header></Header>
            </div>
            <div className='Content'>
                <div className='retangulo1'>
                    <h1>Login</h1>
                    <div className='campos'>
                        <div>
                            <div>
                                <p >Usuário </p>
                            </div>
                            <input type='text'></input>
                        </div>
                        <div>
                            <div>
                                <p>Senha</p>
                            </div>
                            <input type='password'></input>
                        </div>
                    </div>
                    <div className='botao-login'>
                        <Link to='/menu' className='entrarretangulo'>
                            <p className='botaoentrar' onClick={buscar}> Entrar</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}