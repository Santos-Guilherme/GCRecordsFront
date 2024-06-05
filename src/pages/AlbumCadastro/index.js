import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { salvarAlbum, uploadImagemAlbum } from '../../Api/AlbumApi';
import * as artistaApi from '../../Api/ArtistaApi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function AlbumCadastro() {
    const [listaArtistas, setListaArtistas] = useState([]);
    const [artista, setArtista] = useState('');
    const [nomeAlbum, setNomeAlbum] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [spotify, setSpotify] = useState('');
    const [fotoAlbum, setFotoAlbum] = useState(null);
    const [imgPreviewAlbum, setImgPreviewAlbum] = useState(null);

    useEffect(() => {
        buscarArtistas();
    }, []);

    const buscarArtistas = async () => {
        try {
            const artistas = await artistaApi.buscarArtistas();
            setListaArtistas(artistas);
        } catch (error) {
            console.error('Erro ao buscar artistas:', error);
            toast.error('Erro ao buscar artistas.');
        }
    };

    const GoBack = () => {
        window.history.back();
    };

    const cadastrarAlbum = async (e) => {
        e.preventDefault();

        const album = {
            "nome": nomeAlbum,
            "lancamento": dataLancamento,
            "spotify": spotify,
            "artista": artista
        };

        try {
            const albumInserido = await salvarAlbum(album);
            toast.success('Álbum cadastrado com sucesso!');
            if (fotoAlbum) {
                const formData = new FormData();
                formData.append('imagemCapa', fotoAlbum);
                await uploadImagemAlbum(albumInserido.id, formData);
                toast.success('Imagem do álbum atualizada com sucesso!');
            }
            limparCampos();
        } catch (error) {
            console.error('Erro ao salvar o álbum:', error);
            toast.error('Erro ao salvar o álbum.');
        }
    };

    const limparCampos = () => {
        setArtista('');
        setNomeAlbum('');
        setDataLancamento('');
        setSpotify('');
        setFotoAlbum(null);
    };

    const handleImageAlbumChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFotoAlbum(file);
            setImgPreviewAlbum(URL.createObjectURL(file));
        }
    };
    

    return (
        <div className='AlbumCadastro'>
            <div className='Header'>
                <Header />
            </div>
            <div className='voltar'>
                <div>
                    <Link onClick={GoBack}><img src="/assets/images/voltar.png" className='setinha' alt="Voltar" /></Link>
                </div>
            </div>
            <div className='Content'>
                <div className='titulo'>
                    <h1>Adicionar Álbum</h1>
                    <form className='QuadroCampos' onSubmit={cadastrarAlbum}>
                        <div className='campos'>
                            <div>
                                <div>
                                    <p>Artista</p>
                                </div>
                                <select
                                    value={artista}
                                    onChange={(e) => setArtista(e.target.value)}
                                    required
                                >
                                    <option value=''>Selecione um artista</option>
                                    {listaArtistas.map((artista) => (
                                        <option key={artista.id} value={artista.id}>{artista.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div>
                                    <p>Nome do Álbum</p>
                                </div>
                                <input
                                    type='text'
                                    value={nomeAlbum}
                                    onChange={(e) => setNomeAlbum(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Data de Lançamento</p>
                                </div>
                                <input
                                    type='date'
                                    value={dataLancamento}
                                    onChange={(e) => setDataLancamento(e.target.value)}
                                    required
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
                                    <p>Foto do Álbum</p>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageAlbumChange}
                                />
                                <div className='imagem-preview-album'>
                                    <div>
                                        {imgPreviewAlbum && (
                                            <img src={imgPreviewAlbum} alt="pré-visualização do álbum" className="img-preview" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            
                                <button className='botaoadicionar' type='submit'>
                                    Adicionar
                                </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
