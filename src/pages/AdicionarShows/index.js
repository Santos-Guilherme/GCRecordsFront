import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';

export default function AdicionarShows() {
    return (
        <div className='AdicionarShows'>
            <div className='Header'>
                <Header></Header>
            </div>

            <div className='Content'>

                <div className='titulo'>

                    <h1> Adicionar Shows</h1>



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
                                    <p>Lugar</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>Horario</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div>
                                <div>
                                    <p>Data</p>
                                </div>

                                <input type='text'></input>

                            </div>

                            <div className='box'>
                                <div >
                                    <p>Adicionar a Principais shows?</p>
                                </div>

                                <input type='checkbox'></input>

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