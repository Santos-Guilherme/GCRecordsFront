import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import { salvarAlbum, uploadImagemAlbum } from '../../Api/AlbumApi'; // Importe a função uploadImagemAlbum da API de Álbuns
import * as artistaApi from '../../Api/ArtistaApi';
import { toast } from 'react-toastify';

export default function AlbumCadastro() {
    const [listaArtistas, setListaArtistas] = useState([]);
    const [artista, setArtista] = useState('');
    const [nomeAlbum, setNomeAlbum] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [spotify, setSpotify] = useState('');
    const [fotoAlbum, setFotoAlbum] = useState(null);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const album = {
            nome: nomeAlbum,
            lancamento: dataLancamento,
            spotify: spotify,
            artista: artista
        };

        try {
            const albumInserido = await salvarAlbum(album);
            toast.success('Álbum cadastrado com sucesso!');
            // Após o cadastro do álbum, faz o upload da imagem se houver uma selecionada
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

    return (
        <div className='AlbumCadastro'>
            <div className='Header'>
                <Header />
            </div>
            <div className='Content'>
                <div className='titulo'>
                    <h1>Adicionar Álbum</h1>
                    <form className='QuadroCampos' onSubmit={handleSubmit}>
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
                            <div className='box'>
                                <div>
                                    <p>Foto do Álbum</p>
                                </div>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => setFotoAlbum(e.target.files[0])} 
                                />
                            </div>
                            <div className='adicionarretangulo'>
                                <button className='botaoadicionar' type='submit'>
                                    Adicionar
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
