import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import { useState } from 'react';
import * as artistaApi from '../../Api/ArtistaApi'

export default function ArtistaCadastro() {
    const [nome, setNome] = useState('');
    const [instagram, setInstagram] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    const [spotify, setSpotify] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState('');

    async function salvarArtista() {
        let corpo = {
            "nome": nome,
            "descBibliografia": descricao,
            "linkInstagram": instagram,
            "linkTiktok": tiktok,
            "linkTwitter": twitter,
            "linkYoutube": youtube,
            "linkSpotify": spotify,
            "imgCapa": "",
            "imgSelfie": ""
        }
        artistaApi.salvarArtista(corpo);
        limparCampos();
    };

    const limparCampos = () => {
        setNome('');
        setInstagram('');
        setTiktok('');
        setTwitter('');
        setYoutube('');
        setSpotify('');
        setDescricao('');
        setFoto('');
    };

    return (
        <div className='ArtistaCadastro'>
            <div className='Header'>
                <Header />
            </div>
            <div className='Content'>
                <div className='titulo'>
                    <h1> Adicionar Artista</h1>
                    <div className='QuadroCampos'>
                        <form className='campos'>
                            <div>
                                <div>
                                    <p>Nome do Artista</p>
                                </div>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Instagram</p>
                                </div>
                                <input
                                    type='text'
                                    value={instagram}
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>TikTok</p>
                                </div>
                                <input
                                    type='text'
                                    value={tiktok}
                                    onChange={(e) => setTiktok(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Twitter</p>
                                </div>
                                <input
                                    type='text'
                                    value={twitter}
                                    onChange={(e) => setTwitter(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Youtube</p>
                                </div>
                                <input
                                    type='text'
                                    value={youtube}
                                    onChange={(e) => setYoutube(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Spotify</p>
                                </div>
                                <input
                                    type='text'
                                    value={spotify}
                                    onChange={(e) => setSpotify(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Descrição</p>
                                </div>
                                <input
                                    type='text'
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Foto Do Artista</p>
                                </div>
                                <input
                                    type='text'
                                    value={foto}
                                    onChange={(e) => setFoto(e.target.value)}
                                />
                            </div>
                            <div className='adicionarretangulo'>
                                <button type='submit' className='botaoadicionar' onClick={salvarArtista}>Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
