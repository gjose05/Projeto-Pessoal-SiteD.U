import React, { useState } from 'react';
import './Catalogo.css';

const Catalogo = () => {
  const [filter, setFilter] = useState('all');
  
  const products = [
    { id: 1, name: 'TEE D.U CINZA', price: 69.90, category: 'women', image:'/images/Clothing/Feminina/CatálogoD.U-images-1.jpg' },
    { id: 2, name: 'TEE D.U PRETA', price: 69.90, category: 'women', image: '/images/Clothing/Feminina/CatálogoD.U-images-2.jpg' },
    { 
      id: 3, 
      name: 'Camiseta Linha Premium', 
      price: 79.90, 
      category: 'men', 
      image: '/images/Clothing/Masculina/Camiseta1/CatálogoD.U-Masculino1.jpg' 
    },
    { id: 4, name: 'TEC-D.U', price: 129.90, category: 'men', image: '/images/Clothing/Masculina/Camiseta2/CatálogoD.U-Masculino2.jpg' },
    { id: 5, name: 'TEE D.U OFF WHITE', price: 69.90, category: 'women', image: '/images/Clothing/Feminina/CatálogoD.U-images-3.jpg' },
    { id: 6, name: 'Camiseta Linha Premium', price: 79.90, category: 'men', image: '/images/Clothing/Masculina/Camiseta3/CatálogoD.U-Masculino3.jpg' },
    { id: 7, name: 'TEE "MAKE IT SIMPLE"', price: 79.90, category: 'women', image: '/images/Clothing/Feminina/CatálogoD.U-images-4.jpg' },
    { id: 8, name: 'Camiseta Linha Premium', price: 79.90, category: 'men', image: '/images/Clothing/Masculina/Camiseta4/CatálogoD.U-Masculino4.jpg' },
    { id: 9, name: 'TEE "POWER"', price:79.90, category: 'women', image: '/images/Clothing/Feminina/CatálogoD.U-images-5.jpg' },
    { id: 10, name: 'TEE "CREATE YOUR HAPPINES"', price: 79.90, category: 'women', image: '/images/Clothing/Feminina/CatálogoD.U-images-6.jpg'}
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

    const handleBuyClick = (productName) => {
    const message = `Olá! Me interessei pela peça "${productName}" e gostaria de comprar. Poderia me ajudar?`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5584994078838&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="catalogo-container">
      <div className="catalogo-header">
        <div className="catalogo-title">
          <h1>CATÁLOGO</h1>
        </div>
        <div className="filter-buttons">
          <button 
            onClick={() => setFilter('all')} 
            className={filter === 'all' ? 'active' : ''}
          >
            TODOS
          </button>
          <button 
            onClick={() => setFilter('women')} 
            className={filter === 'women' ? 'active' : ''}
          >
            FEMININO
          </button>
          <button 
            onClick={() => setFilter('men')} 
            className={filter === 'men' ? 'active' : ''}
          >
            MASCULINO
          </button>
        </div>
      </div>
      
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img 
                src={process.env.PUBLIC_URL + product.image} 
                alt={product.name}
                className="product-image"
                    />
                    <button className="buy-button"
                    onClick={() => handleBuyClick(product.name)}
                    >
                COMPRAR
                </button>
            </div>
            <div className="product-info">
              <div className="price">R$ {product.price.toFixed(2)}</div>
              <div className="name">{product.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;