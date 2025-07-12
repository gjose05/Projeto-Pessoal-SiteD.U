import React from 'react';
import './Sobre.css';
import ImageCarousel from './ImageCarousel';

const CollectionPage = () => {
    const handleShopNow = () => {
    const message = "Olá! Fiquei interessado nas roupas da loja. Poderia me ajudar?";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5584994078838&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="collection-container">
      <div className="collection-header">
        <h1>O BASICO PODE SER PODEROSO</h1>
        <button 
          className="shop-button" 
          onClick={handleShopNow}
        >
          Fale com a gente!
        </button>
      </div>

      <div className="gallery-layout">
        {/* Imagem à esquerda */}
        <div className="side-image left">
          <img 
            src="/images/ImagensDeFundo/imagemFundo3.jpg" 
            alt="Visual esquerdo da coleção"
          />
        </div>

        {/* Componente do Carrossel Personalizado */}
        <ImageCarousel />

        {/* Imagem à direita */}
        <div className="side-image right">
          <img 
            src="/images/ImagensDeFundo/imagemFundo4.jpg" 
            alt="Visual direito da coleção"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;