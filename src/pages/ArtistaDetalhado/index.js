import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.scss';
import imagem from '../../assets/images/nicki-nicole 2.png';
import imagem2 from '../../assets/images/nick-nicole-perfil.png';
import imagemInstagram from '../../assets/images/instagram.png';
import imagemTiktok from '../../assets/images/tik-tok.png';
import imagemTwitter from '../../assets/images/twitter.png';
import imagemYoutube from '../../assets/images/youtube.png';
import imagemSpotify from '../../assets/images/spotify.png'
import imagemAlbum1 from '../../assets/images/alma-album.jpeg'
import LinhaShows from '../../components/LinhaShows';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ArtistaDetalhado(props) {
    const { id } = useParams();
    const [artistaBuscado, setArtistaBuscado] = useState([]);
    useEffect(() => {
        const buscar = async () => {
            let url = 'http://localhost:8080/artista/'+ id;
        
            let r = await axios.get(url);
           let info = r.data;
         
            setArtistaBuscado(info);
        }
        buscar();
    })
    return (
        
        <div className='ArtistaDetalhado' key=''>
            <Header></Header>
            {artistaBuscado.map(item =>
            <div className='content' >
                <section className='secao1'>
                <h1>{item.nome?? 'teste'} </h1>
                <img src={item.imgCapaArtista ?? imagem} alt=""></img>
            </section>
            <section className='secao2'>
                <div className='paragrafo-bibliografia'>
                    <p> 
                        {item.descBibliografia ?? 'Nicki Nicole, uma figura chave na música latina urbana, estourou em 2019 com “Wapo Traketero”, acumulando mais de 154 milhões de visualizações e 91 milhões de streams. Nesse mesmo ano lançou sua primeira colaboração com Bizarrap, Music Sessions Vol. 13, ficando em primeiro lugar na Argentina e ocupando posições no Global Top por semanas. Desde então, ganhou prêmios como dois Spotify Awards e um Premio Lo Nuestro, e foi indicada ao Grammy Latino. Com seu álbum "Parte de Mi" e colaborações com artistas como Rauw Alejandro e Mon Laferte, ele ultrapassou 630 milhões de streams no Spotify. Internacionalmente, foi a primeira argentina a aparecer no “The Tonight Show” e em festivais como Coachella e Lollapalooza Paris. Em 2023 lançou "ALMA", álbum que durante 8 semanas se posicionou como o mais ouvido da Argentina, acumulando 480 milhões de streams globais. “ALMA” conta com grandes colaborações como Young Miko, Rels B, Milo J e YSY A. Continuou a sua ascensão com digressões pela América Latina e Europa. Seus shows internacionais como o Wizink Center na Espanha e colaborações notáveis como "Una Foto Remix" a consolidam como uma força influente na música urbana latina.'}
                    </p>
                </div>
                <div>
                    <div className='content-secao2'>
                        <img src={item.imgSelfieArtista ?? imagem2} alt='' className='imagem-perfil'></img>
                        <h2>Redes</h2>
                        <div className='redes-artista'>
                            <img src={imagemInstagram} className="logo-redes" alt="logo"/>
                            <img src={imagemTiktok} className="logo-redes" alt="logo" />
                            <img src={imagemTwitter} className="logo-redes" alt="logo" />
                            <img src={imagemYoutube} className="logo-redes" alt="logo" />
                            <img src={imagemSpotify} className="logo-redes" alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section id='album' className='secao3'>
                <h1>Albuns</h1>
                <div>
                    <img src={item.imagemAlbum1 ?? imagemAlbum1} alt='' className='img-album-artista'></img>
                    <img src={item.imagemAlbum2 ?? imagemAlbum1} alt='' className='img-album-artista'></img>
                    <img src={item.imagemAlbum3 ?? imagemAlbum1} alt='' className='img-album-artista'></img>
                </div>
            </section>
            <section id='show' className='secao4'>
                <h1>Shows</h1>
                <div>
                    <LinhaShows></LinhaShows>
                    <LinhaShows></LinhaShows>
                    <LinhaShows></LinhaShows>
                </div>
            </section>
            </div>
          )}
            
            <Footer></Footer>
        </div>
    )
}