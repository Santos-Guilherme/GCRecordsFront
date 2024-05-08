import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';

export default function EditarShow() {
    return (
        <div className='AdicionarShows'>
            <div className='Header'>
                <Header></Header>
            </div>

            <div className='Content'>

                <div className='titulo'>

                    <h1> Mudar local do show</h1>



                    <div className='QuadroCampos'>

                        <div className='campos'>


                            <div>
                                <div>
                                    <p>Artista</p>
                                </div>

                                <input type="text"></input>

                            </div>

                            <div>
                                <div>
                                    <p>Data</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>Novo local do show</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div className='adicionarretangulo'>
                                <a className='botaoadicionar' href='/'> Configurar</a>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>


        </div>

    )

}