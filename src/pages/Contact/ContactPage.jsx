import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>CONTATO</h1>
      </div>

      <div className="contact-content-simple">
        {/* Coluna da Esquerda - Mapa */}
        <div className="map-section">
          <h3>Nossa Localização</h3>
          <iframe
            src="https://maps.google.com/maps?q=Rua%20Alberto%20Silva%2C%201216%2C%20Lagoa%20Seca%2C%20Natal%20-%20RN&output=embed"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Nossa Localização"
          ></iframe>
          <a 
            href="https://maps.apple.com/place?address=Rua%20Alberto%20Silva%2C%201216%2C%20Lagoa%20Seca%2C%20Natal%20-%20RN%2C%2059022-300%2C%20Brasil&map=hybrid&coordinate=-5.808351%2C-35.209516&name=Rua%20Alberto%20Silva%2C%201216" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            Ver mapa ampliado
          </a>
        </div>

        {/* Coluna da Direita - Informações */}
        <div className="info-section-simple">
          <div className="info-item">
            <h3>Endereço</h3>
            <a 
              href="https://maps.apple.com/place?address=Rua%20Alberto%20Silva%2C%201216%2C%20Lagoa%20Seca%2C%20Natal%20-%20RN%2C%2059022-300%2C%20Brasil&map=hybrid&coordinate=-5.808351%2C-35.209516&name=Rua%20Alberto%20Silva%2C%201216" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Rua Alberto Silva, 1216<br />
              Lagoa Seca, Natal - RN<br />
              CEP: 59022-300
            </a>
          </div>

          <div className="info-item">
            <h3>WhatsApp</h3>
            <a 
              href="https://api.whatsapp.com/send/?phone=5584994078838&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              84 99407-8838
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;