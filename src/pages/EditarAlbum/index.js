import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';

export default function EditarAlbum() {
    return (
        <div className='AdicionarShows'>
            <div className='Header'>
                <Header></Header>
            </div>

            <div className='Content'>

                <div className='titulo'>

                    <h1> Editar Capa do Album</h1>



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

                            <div className='box'>
                                <div >
                                    <p>Foto do Album</p>
                                </div>

                                <input type="file" accept="image, text" name="file"></input>

                            </div>

                            <div className='adicionarretangulo'>
                                <a className='botaoadicionar' href='/'> Editar</a>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>


        </div>

    )

}