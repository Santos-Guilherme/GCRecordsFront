import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';

export default function AdicionarAlbum() {
    return (
        <div className='AdicionarShows'>
            <div className='Header'>
                <Header></Header>
            </div>

            <div className='Content'>

                <div className='titulo'>

                    <h1> Adicionar Album</h1>



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
                                    <p>Nome do Album</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>Ano do Album</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>Spotify</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div className='box'>
                                <div >
                                    <p>Foto do Album</p>
                                </div>

                                <input type="file" accept="image, text" name="file"></input>

                            </div>

                            <div className='adicionarretangulo'>
                                <a className='botaoadicionar' href='/'> Adicionar</a>
                            </div>



                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>


        </div>

    )

}