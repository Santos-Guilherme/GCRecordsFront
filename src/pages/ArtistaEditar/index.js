import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as artistaApi from '../../Api/ArtistaApi';
import { toast } from 'react-toastify';

export default function ArtistaEditar() {
    const { id } = useParams();
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

    useEffect(() => {
        async function carregarArtista() {
            try {
                const artista = await artistaApi.buscarArtistasporId(id);
                setNome(artista.nome);
                setInstagram(artista.instagram);
                setTiktok(artista.tiktok);
                setTwitter(artista.twitter);
                setYoutube(artista.youtube);
                setSpotify(artista.spotify);
                setDescricao(artista.biografia);
            } catch (err) {
                toast.error('Erro ao carregar artista.');
            }
        }
        carregarArtista();
    }, [id]);

    async function salvarAlteracoes(e) {
        e.preventDefault();

        if (!nome || !descricao || !fotoCapa || !fotoSelfie) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        try {
            let corpo = {
                "nome": nome,
                "biografia": descricao,
                "instagram": instagram,
                "tiktok": tiktok,
                "twitter": twitter,
                "youtube": youtube,
                "spotify": spotify
            };

            await artistaApi.atualizarArtista(id, corpo);

            const formData = new FormData();
            formData.append('imagemCapa', fotoCapa);
            formData.append('imagemSelfie', fotoSelfie);

            await artistaApi.uploadImages(id, formData);
            toast.success('Artista atualizado com sucesso!');

        } catch (err) {
            toast.error('Erro ao atualizar artista.');
        }
    };

    return (
        <div className='ArtistaEditar'>
            <div className='Header'>
                <Header></Header>
            </div>
            <div className='Content'>
                <div className='titulo'>
                    <h1>Editar Artista</h1>
                    <div className='QuadroCampos'>
                        <form className='campos' onSubmit={salvarAlteracoes}>
                            {error && <div className="error">{error}</div>}
                            <div>
                                <div>
                                    <p>Nome do Artista</p>
                                </div>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
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
                                    required
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Foto de Capa</p>
                                </div>
                                <input
                                    type='file'
                                    onChange={(e) => setFotoCapa(e.target.files[0])}
                                    required
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Foto Selfie</p>
                                </div>
                                <input
                                    type='file'
                                    onChange={(e) => setFotoSelfie(e.target.files[0])}
                                    required
                                />
                            </div>
                            <div className='editarretangulo'>
                                <button type='submit' className='botaoeditar'>Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
