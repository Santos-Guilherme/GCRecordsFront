import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const [classOn, setClassOn] = useState(false);

    const navigate = useNavigate();
    const authToken = localStorage.getItem('authToken');

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <div className='Header'>
            <header>
                <div className="container">
                    <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                        <div className="menu-toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                        <nav>
                            <ul>
                                <Link to="/"><img className="logo-cyan" src="/assets/images/logo.png" alt="logo Cyan" /></Link>
                                <li>
                                    <Link to="/Artistas">Artistas</Link>
                                </li>
                                <li>
                                    <Link to="/lancamentos">Lançamentos</Link>
                                </li>
                                <li>
                                    <Link to="/shows">Shows</Link>
                                </li>
                                <li>
                                    <Link to="/sobre">Sobre</Link>
                                </li>
                                {authToken && (
                                    <li>
                                        <Link to="/menu" className='retangulo'>Menu</Link>
                                    </li>
                                )}
                                {authToken && (
                                    <li>
                                        <Link to="/login" onClick={handleLogout}>Sair<FiLogOut className="FiLogOut" /></Link>
                                    </li>
                                )}
                                {!authToken && (
                                    <li>
                                        <Link to="/login" onClick={handleLogout}><p className='retangulo'>Login <FiLogOut className="FiLogOut" /></p></Link>
                                    </li>
                                )}
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
