import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import { uploadImagemAlbum, buscarAlbumPorId } from '../../Api/AlbumApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AlbumEditar() {
    const { id } = useParams();
    const [artista, setArtista] = useState('');
    const [nomeAlbum, setNomeAlbum] = useState('');
    const [fotoAlbum, setFotoAlbum] = useState(null);
    const [albumId, setAlbumId] = useState('');

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
        } catch (error) {
            console.error('Erro ao buscar detalhes do álbum:', error);
            toast.error('Erro ao buscar detalhes do álbum.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imagemCapa', fotoAlbum);

        try {
            await uploadImagemAlbum(albumId, formData);
            toast.success('Capa do álbum editada com sucesso!');
            // Redirecione ou faça outras ações após a edição bem-sucedida
        } catch (error) {
            console.error('Erro ao editar a capa do álbum:', error);
            toast.error('Erro ao editar a capa do álbum.');
            // Trate erros aqui
        }
    };

    return (
        <div className='AlbumEditar'>
            <div className='Header'>
                <Header />
            </div>
            <div className='Content'>
                <div className='titulo'>
                    <h1>Editar Capa do Álbum</h1>
                    <form className='QuadroCampos' onSubmit={handleSubmit}>
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
                            <div className='box'>
                                <div>
                                    <p>Foto do Álbum</p>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setFotoAlbum(e.target.files[0])}
                                    required
                                />
                            </div>
                            <div className='adicionarretangulo'>
                                <button className='botaoadicionar' type='submit'>
                                    Editar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
