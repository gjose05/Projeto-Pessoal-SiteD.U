import './HomePage.css';
import InstagramFeed from '../../static/redesSociais/InstagramFeed';


function HomePage(){
    const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/ImagensDeFundo/ImagemFundo1.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const scrollToClothing = () => {
    const clothingSection = document.getElementById('clothing-section');
    if (clothingSection) {
      clothingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

    return(
        <div className='homepage-container' style={backgroundStyle}>
            <div className='parteEsquerda-PaginaInicial'>
                <div className='instagramfeed-container'>
                    <InstagramFeed/>
                </div>
            </div>
            
            <div className='parteDireita-PaginaInicial'>
                <div className='homepage-mostruariofeminino-container'>
                    <div className='text-mostruarioFeminino-paginaInicial'>
                        <h2 className='titulo-mostruario'>Feminino</h2>
                        <p className='descricao-mostruario'>Conheça a elegância D.U</p>
                        <button 
                            className='compre-agora-btn'
                            onClick={scrollToClothing}
                        >
                            COMPRE AGORA
                            <span className='linha-vermelha'></span>
                        </button>
                    </div>
                    
                    <div className='mostruarioFeminino-paginaInicial'>
                        <img 
                            src={process.env.PUBLIC_URL + "/images/Clothing/Feminina/ImagemAbout1.jpg"} 
                            alt="Coleção Feminina D.U"
                            className="image-homepage-mostruariofeminino"
                        />
                    </div>
                </div>

                <div className='homepage-mostruariomasculino-container'>
                    <div className='mostruarioMasculino-paginaInicial'>
                        <img 
                        src={process.env.PUBLIC_URL + "/images/Clothing/Masculina/ImagemAbout9.jpg"} 
                        alt="Coleção Masculina D.U"
                        className="image-homepage-mostruariomasculino"
                        />
                    </div>
                    
                    <div className='text-mostruarioMasculino-paginaInicial'>
                        <h2 className='titulo-mostruario'>Masculino</h2>
                        <p className='descricao-mostruario'>Explore o estilo D.U</p>
                        <button 
                            className='compre-agora-btn'
                            onClick={scrollToClothing}
                        >
                            COMPRE AGORA
                            <span className='linha-vermelha'></span>
                        </button>
                    </div>
                    </div>
            </div>
            

        </div>
    )
}

export default HomePage;
