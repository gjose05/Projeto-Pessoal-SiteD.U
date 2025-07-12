import './Header.css';
import Instagram from '../../static/redesSociais/Instagram';
import WhatsApp from '../../static/redesSociais/Whatsapp';
import React, { useState } from 'react';


function Header(){
    const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(`${sectionId}-section`);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };


    return(
        <div className='navbar-container'>
            <div className='image-navbar-container'>
                <div className='image-navbar'>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Logos/logoDU_branco.png"}
                        alt="Logo DU Navbar"
                        className="logoDU-image-navbar"
                        />
                </div>
                <div className='DUname-container'>
                    <div className='DUname-text'>
                        <p>
                            D.U
                        </p>
                    </div>
                </div>
            </div>

            <div className='buttons-navbar-container'>
                <div className='buttons-navbar'>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                        <button 
                            className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={() => scrollToSection('home')}
                        >
                            Home
                            <span className="nav-indicator"></span>
                        </button>
                        </li>
                        <li className="navbar-item">
                        <button 
                            className={`navbar-link ${activeSection === 'clothing' ? 'active' : ''}`}
                            onClick={() => scrollToSection('clothing')}
                        >
                            Catálogo
                            <span className="nav-indicator"></span>
                        </button>
                        </li>
                        <li className="navbar-item">
                        <button 
                            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={() => scrollToSection('about')}
                        >
                            Sobre
                            <span className="nav-indicator"></span>
                        </button>
                        </li>
                        <li className="navbar-item">
                        <button 
                            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => scrollToSection('contact')}
                        >
                            Contato
                            <span className="nav-indicator"></span>
                        </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='redeSocial-navbar-container'>
                <div className='redeSocial-navbar'>
                    <Instagram showText={false} url = 'https://www.instagram.com/d.u.br/'/>
                    <WhatsApp/>
                </div>
            </div>
        </div>
    )
}

export default Header;