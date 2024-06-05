import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import * as artistaApi from '../../Api/ArtistaApi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function ArtistaCadastro() {
    const [nome, setNome] = useState('');
    const [instagram, setInstagram] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    const [spotify, setSpotify] = useState('');
    const [descricao, setDescricao] = useState('');
    const [fotoCapa, setFotoCapa] = useState(null);
    const [fotoSelfie, setFotoSelfie] = useState(null);
    const [error, setError] = useState('');
    const [imgPreviewCapa, setImgPreviewCapa] = useState(null);
    const [imgPreviewSelfie, setImgPreviewSelfie] = useState(null);

    async function salvarArtista(e) {
        e.preventDefault();

        if (!nome || !instagram || !tiktok || !twitter|| !youtube || !spotify || !descricao || !fotoCapa || !fotoSelfie) {
            toast.warning('Todos os campos são obrigatórios!');
            return;
        }

        try {
            const artistaExistente = await artistaApi.buscarArtistaPorNome(nome);
            if (artistaExistente) {
                toast.warning('Já existe um artista com esse nome.');
                return;
            }

            let corpo = {
                nome,
                biografia: descricao,
                instagram: instagram,
                tiktok: tiktok,
                twitter: twitter,
                youtube: youtube,
                spotify: spotify,
            };

            const artistaResponse = await artistaApi.salvarArtista(corpo);
            const artistaId = artistaResponse.id;

            const formData = new FormData();
            formData.append('imagemCapa', fotoCapa);
            formData.append('imagemSelfie', fotoSelfie);

            await artistaApi.uploadImages(artistaId, formData);
            limparCampos();
            toast.success('Artista cadastrado com sucesso!');

        } catch (err) {
            console.error('Erro ao cadastrar artista:', err);
            if (err.response) {
                console.error('Resposta do servidor:', err.response.data);
            }
        }
    };

    const limparCampos = () => {
        setNome('');
        setInstagram('');
        setTiktok('');
        setTwitter('');
        setYoutube('');
        setSpotify('');
        setDescricao('');
        setFotoCapa(null);
        setFotoSelfie(null);
        setError('');
        setImgPreviewCapa(null);
        setImgPreviewSelfie(null);
    };

    const handleImageCapaChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFotoCapa(file);
            setImgPreviewCapa(URL.createObjectURL(file));
        }
    };

    const handleImageSelfieChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFotoSelfie(file);
            setImgPreviewSelfie(URL.createObjectURL(file));
        }
    };

    const GoBack = () => {
        window.history.back();
    };

    return (
        <div className='ArtistaCadastro'>
            <div className='Header'>
                <Header />
            </div>
            <div className='voltar'>
                <Link onClick={GoBack}><img src="/assets/images/voltar.png" className='setinha' alt="Voltar" /></Link>
            </div>
            <div className='Content'>
                <div className='titulo'>
                    <h1>Adicionar Artista</h1>
                    <div className='QuadroCampos'>
                        <form className='campos' onSubmit={salvarArtista}>
                            {error && <div className="error">{error}</div>}
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
                                    <p>Foto de Capa</p>
                                </div>
                                <input
                                    type='file'
                                    onChange={handleImageCapaChange}
                                />
                                <div className='imagem-preview-capa'>
                                    <div>
                                        {imgPreviewCapa && (
                                            <img src={imgPreviewCapa} alt="pré-visualização da capa" className="img-preview" />
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <p>Foto Selfie</p>
                                </div>
                                <input
                                    type='file'
                                    onChange={handleImageSelfieChange}
                                />
                                <div className='imagem-preview-selfie'>
                                    <div>
                                        {imgPreviewSelfie && (
                                            <img src={imgPreviewSelfie} alt="pré-visualização da selfie" className="img-preview" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='adicionarretangulo'>
                                <button type='submit' className='botaoadicionar'>Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
