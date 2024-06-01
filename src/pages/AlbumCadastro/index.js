import React, { useState } from 'react';
import './index.scss';
import Header from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import { salvarAlbum } from '../../Api/AlbumApi'; 

export default function AlbumCadastro() {
    const [artista, setArtista] = useState('');
    const [nomeAlbum, setNomeAlbum] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [spotify, setSpotify] = useState('');
    const [fotoAlbum, setFotoAlbum] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const album = {
            "nome": nomeAlbum,
            "dataLancamento": dataLancamento,
            "linkSpotify": spotify,
            "imgCapa": "",
            "fk_idArtista": artista
        };

        try {
            const albumInserido = await salvarAlbum(album);
            alert('Album salvo com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar o album:', error);
            alert('Erro ao salvar o album.');
        }
    };

    return (
        <div className='AlbumCadastro'>
            <div className='Header'>
                <Header />
            </div>
            <div className='Content'>
                <div className='titulo'>
                    <h1> Adicionar Album</h1>
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
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Nome do Album</p>
                                </div>
                                <input 
                                    type='text' 
                                    value={nomeAlbum} 
                                    onChange={(e) => setNomeAlbum(e.target.value)} 
                                />
                            </div>
                            <div>
                                <div>
                                    <p>Data de Lançamento</p>
                                </div>
                                <input 
                                    type='text' 
                                    value={dataLancamento} 
                                    onChange={(e) => setDataLancamento(e.target.value)} 
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
                                    <p>Foto do Album</p>
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
