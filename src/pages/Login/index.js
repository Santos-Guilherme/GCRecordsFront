import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
     const [user, setUser] = useState('');
     const [senha, setSenha] = useState('');
    

    const buscar = async () => {
        let url = 'http://localhost:8080/login/entrar';
    
        let r = await axios.get(url);
        let info = r.data;
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

                    <Link to='/menu' className='entrarretangulo'>
                    <div>
                        <p className='botaoentrar' > Entrar</p>
                    </div>
                    </Link>

                    <h2>*Essa área é de acesso restrito somente para o proprietário da gravadora</h2>

                </div>

            </div>


            <Footer></Footer>



        </div>
    )
}