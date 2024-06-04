import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { buscarLogin } from '../../Api/LoginApi';

export default function Home() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const loginData = { nome: usuario, senha: senha };
        try {
            const data = await buscarLogin(loginData);
            toast.success('Login realizado com sucesso!');
            navigate('/menu');
        } catch (error) {
            toast.error(error.error);
        }
    };

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
                                <p>Usuário</p>
                            </div>
                            <input type='text' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        </div>
                        <div>
                            <div>
                                <p>Senha</p>
                            </div>
                            <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </div>
                    <div className='botao-login'>
                        <button className='entrarretangulo' onClick={handleLogin}>
                            <p className='botaoentrar'>Entrar</p>
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
