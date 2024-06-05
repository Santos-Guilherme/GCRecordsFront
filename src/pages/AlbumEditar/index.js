import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { uploadImagemAlbum, buscarAlbumPorId } from '../../Api/AlbumApi';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_ADDRESS } from '../../Api/constant';

export default function AlbumEditar() {
    const { id } = useParams();
    const [artista, setArtista] = useState('');
    const [nomeAlbum, setNomeAlbum] = useState('');
    const [fotoAlbum, setFotoAlbum] = useState(null);
    const [albumId, setAlbumId] = useState('');
    const [imgPreviewAlbum, setImgPreviewAlbum] = useState(null);

    useEffect(() => {
        setAlbumId(id);
        buscarDetalhesAlbum(id);
    }, [id]);

    const buscarDetalhesAlbum = async (albumId) => {
        try {
            const album = await buscarAlbumPorId(albumId);
            console.log('Detalhes do álbum:', album);
            setArtista(album.artista);
            setNomeAlbum(album.nome);
            setImgPreviewAlbum(`${API_ADDRESS}/${album.capa}`);
        } catch (error) {
            console.error('Erro ao buscar detalhes do álbum:', error);
            toast.error('Erro ao buscar detalhes do álbum.');
        }
    };

    const EditarAlbum = async (e) => {
        e.preventDefault();

        if (!fotoAlbum) {
            toast.info('Nenhuma alteração na capa do álbum.');
            return;
        }

        const formData = new FormData();
        formData.append('imagemCapa', fotoAlbum);

        try {
            await uploadImagemAlbum(albumId, formData);
            toast.success('Capa do álbum editada com sucesso!');
        } catch (error) {
            console.error('Erro ao editar a capa do álbum:', error);
            toast.error('Erro ao editar a capa do álbum.');
        }
    };

    const GoBack = () => {
        window.history.back();
    };

    return (
        <div className='AlbumEditar'>
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
                    <h1>Editar Capa do Álbum</h1>
                    <form className='QuadroCampos' onSubmit={EditarAlbum}>
                        <div className='campos'>
                            <div>
                                <div>
                                    <p>Artista</p>
                                </div>
                                <input
                                    type="text"
                                    value={artista}
                                    onChange={(e) => setArtista(e.target.value)}
                                    disabled
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Nome do Álbum</p>
                                </div>
                                <input
                                    type='text'
                                    value={nomeAlbum}
                                    onChange={(e) => setNomeAlbum(e.target.value)}
                                    disabled
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Foto do Álbum</p>
                                </div>
                                <input className='imagem-input'
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        setFotoAlbum(e.target.files[0]);
                                        setImgPreviewAlbum(URL.createObjectURL(e.target.files[0]));
                                    }}
                                    required
                                />
                                <div className='imagem-preview-album'>
                                    <div>
                                        {imgPreviewAlbum && (
                                            <img src={imgPreviewAlbum} alt="pré-visualização da capa do álbum" className="img-preview" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            
                                <button className='botaoadicionar' type='submit'>
                                    Editar
                                </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
