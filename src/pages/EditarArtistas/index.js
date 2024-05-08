import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';

export default function EditarArtistas() {
    return (
        <div className='EditarArtistas'>
            <div className='Header'>
                <Header></Header>
            </div>

            <div className='Content'>

                <div className='titulo'>

                    <h1> Editar Artista</h1>



                    <div className='QuadroCampos'>

                        <div className='campos'>


                            <div>
                                <div>
                                    <p>Nome do Artista</p>
                                </div>

                                <input type="text"></input>

                            </div>

                            <div>
                                <div>
                                    <p>Instagram</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>TikTok</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>X</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>Youtube</p>
                                </div>

                                <input type='text'></input>
                            </div>

                            <div>
                                <div>
                                    <p>Spotify</p>
                                </div>

                                <input type='text'></input>
                            </div>

                            <div>
                                <div>
                                    <p>Descrição</p>
                                </div>
                                <input type='text'></input>
                            </div>

                            <div>
                                <div>
                                    <p>Foto Do Artista</p>
                                </div>

                                <input type=''></input>
                                <input type=''></input>
                            </div>

                            

                            <div className='editarretangulo'>
                                <a className='botaoeditar' href='/'> Editar</a>
                            </div>



                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>


        </div>

    )

}