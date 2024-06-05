import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscarLogin } from '../../Api/LoginApi'; // Atualize o caminho conforme necessário
import { toast } from 'react-toastify';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginData = { nome: usuario, senha: senha };

    try {
      const response = await buscarLogin(loginData);
      console.log(response.token);
      localStorage.setItem('authToken', response.token);
      toast.success('Login realizado com sucesso!');
      navigate('/menu');
    } catch (error) {
      toast.error('Usuário ou senha inválidos');
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
            <button onClick={handleLogin}>Entrar</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
