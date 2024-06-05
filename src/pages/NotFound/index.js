import './index.scss';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function NotFound() {
    return (
        <div className='NotFound'>
            <Header></Header>
            <div className='content-not-found'>
                <img src='/assets/images/notfound.png' alt='Página não encontrada'></img>
            </div>
            <Footer></Footer>
        </div>
    )
}