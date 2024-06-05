import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { salvarShow, verificarShowExistente } from '../../Api/ShowApi';
import * as artistaApi from '../../Api/ArtistaApi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function AdicionarShows() {
    const [artistas, setArtistas] = useState([]);
    const [artistaSelecionado, setArtistaSelecionado] = useState('');
    const [nomeShow, setNomeShow] = useState('');
    const [lugar, setLugar] = useState('');
    const [horario, setHorario] = useState('');
    const [data, setData] = useState('');
    const [principal, setPrincipal] = useState(false);

    useEffect(() => {
        const carregarArtistas = async () => {
            try {
                const resposta = await artistaApi.buscarArtistas();
                setArtistas(resposta);
            } catch (error) {
                console.error('Erro ao carregar artistas:', error);
            }
        };

        carregarArtistas();
    }, []);

    const handleAdicionarShow = async () => {
        try {
            const dataHora = `${data}T${horario}:00`;
            const response = await verificarShowExistente(artistaSelecionado, dataHora);
            const existe = response.existe;

            if (existe) {
                toast.error('O artista já tem um show agendado para este dia e horário.');
                return;
            }

            const novoShow = {
                "nome": nomeShow,
                "artista": artistaSelecionado,
                "endereco": lugar,
                "data": dataHora,
                "festival": principal,
            };
            await salvarShow(novoShow);
            toast.success('Show adicionado com sucesso!');
        } catch (error) {
            toast.error('Erro ao adicionar show.');
            console.error('Erro ao adicionar show:', error);
        }
    };

    const GoBack = () => {
        window.history.back();
    };

    return (
        <div className='AdicionarShows'>
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
                    <h1>Adicionar Shows</h1>
                    <div className='QuadroCampos'>
                        <div className='campos'>
                            <div>
                                <div>
                                    <p>Nome do Show</p>
                                </div>
                                <input type='text' value={nomeShow} onChange={(e) => setNomeShow(e.target.value)} />
                            </div>
                            <div>
                                <div>
                                    <p>Artista</p>
                                </div>
                                <select value={artistaSelecionado} onChange={(e) => setArtistaSelecionado(e.target.value)}>
                                    <option value="">Selecione um artista</option>
                                    {artistas.map((artista) => (
                                        <option key={artista.id} value={artista.id}>
                                            {artista.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div>
                                    <p>Lugar</p>
                                </div>
                                <input type='text' value={lugar} onChange={(e) => setLugar(e.target.value)} />
                            </div>
                            <div>
                                <div>
                                    <p>Horário</p>
                                </div>
                                <input type='time' value={horario} onChange={(e) => setHorario(e.target.value)} />
                            </div>
                            <div>
                                <div>
                                    <p>Data</p>
                                </div>
                                <input type='date' value={data} onChange={(e) => setData(e.target.value)} />
                            </div>
                            <div className='box'>
                                <div>
                                    <p>Adicionar a Principais shows?</p>
                                </div>
                                <input type='checkbox' checked={principal} onChange={(e) => setPrincipal(e.target.checked)} />
                            </div>
                            <div className='adicionarretangulo'>
                                <button className='botaoadicionar' onClick={handleAdicionarShow}>
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
