import './App.css';
import Header from '../components/header/Header';
import HomePage from '../pages/Home/HomePage';
import Catalogo from '../pages/Clothing/Catalogo';
import CollectionPage from '../pages/About/Sobre';
import ContactPage from '../pages/Contact/ContactPage';

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <Header/>
      </header>
      
      {/* Conteúdo principal com rotas/páginas */}
      <main>
        {/* Página Inicial */}
        <div className='header'></div>
        <div id="home-section" className='home-container-app'>
          <HomePage/>
        </div>
      
          <div id="clothing-section" className='mostruario-container-app'>
            <Catalogo />
          </div>

          <div id="about-section" className='sobre-container-app'>
            <CollectionPage/>
          </div>

          <div id="contact-section" className='paginaContatos'>
            <ContactPage/>
          </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2025 D.U. Todos os direitos reservados.</p>
        <p>Desenvolvido por Guilherme Jose Araujo Oliveira.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '12px' }}>
          <a
            href="https://github.com/gjose05"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'white', textDecoration: 'none' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.6 0-12 5.4-12 12 0 5.3 3.438 9.8 8.207 11.387.6.112.793-.263.793-.582 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.204.086 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.42-1.305.763-1.605-2.665-.3-5.467-1.33-5.467-5.927 0-1.308.47-2.376 1.236-3.215-.123-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.654.243 2.873.12 3.176.77.84 1.236 1.907 1.236 3.215 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.1.823 2.22 0 1.606-.015 2.9-.015 3.293 0 .322.19.698.8.58A12.007 12.007 0 0 0 24 12.297c0-6.6-5.4-12-12-12"/>
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/guilhermejose05/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'white', textDecoration: 'none' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452H16.89v-5.569c0-1.328-.025-3.038-1.852-3.038-1.853 0-2.136 1.445-2.136 2.939v5.668H9.34V9h3.415v1.561h.047c.476-.9 1.635-1.852 3.367-1.852 3.6 0 4.268 2.368 4.268 5.452v6.291zM5.337 7.433c-1.095 0-1.982-.888-1.982-1.983 0-1.096.887-1.984 1.982-1.984s1.983.888 1.983 1.984c0 1.095-.888 1.983-1.983 1.983zm1.78 13.019H3.557V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.541C0 23.22.792 24 1.771 24h20.451c.978 0 1.778-.78 1.778-1.729V1.73c0-.956-.8-1.73-1.779-1.73z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
