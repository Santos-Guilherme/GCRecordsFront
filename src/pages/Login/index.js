import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
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

                    
                    <div className='entrarretangulo'>
                        <a className='botaoentrar' href=''> Entrar</a>
                    </div>


                    <h2>*Essa área é de acesso restrito somente para o proprietário da gravadora</h2>

                </div>

            </div>


            <Footer></Footer>



        </div>
    )
}