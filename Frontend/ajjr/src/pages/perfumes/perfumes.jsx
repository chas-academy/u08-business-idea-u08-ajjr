/* 
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './perfumes.css'; // Importera CSS-filen

const Perfumes = () => {
    const carouselRef = useRef(null);

    const products = [
        { id: 1, name: 'Produkt 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Produkt 2', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Produkt 3', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Produkt 4', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Produkt 5', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Produkt 6', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Produkt 7', image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Produkt 8', image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Produkt 9', image: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Produkt 10', image: 'https://via.placeholder.com/150' },
    ];

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="container my-5 position-relative">
            <button className="carousel-btn left-btn" onClick={scrollLeft}>
                &#9664;
            </button>
            <button className="carousel-btn right-btn" onClick={scrollRight}>
                &#9654;
            </button>
            <div className="carousel-container" ref={carouselRef}>
                {products.map((product) => (
                    <div className="card product-card mx-2" key={product.id}>
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Perfumes;

 */

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './perfumes.css'; // Importera CSS-filen
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product2.jpg";
import product3 from "../../images/product3.jpg";
import product4 from "../../images/product4.jpg";
import product5 from "../../images/product5.jpg";
import product6 from "../../images/product6.jpg";
import product7 from "../../images/product7.jpg";
import product8 from "../../images/product8.jpg";
import product9 from "../../images/product9.jpg";
import product10 from "../../images/product10.jpg";
import product11 from "../../images/product11.jpg";
import product12 from "../../images/product12.jpg";
import product13 from "../../images/product13.jpg";
import product14 from "../../images/product14.jpg";
import product15 from "../../images/product15.jpg";
import product16 from "../../images/product16.jpg";
import product17 from "../../images/product17.jpg";
import product18 from "../../images/product18.jpg";

const Perfumes = () => {
    const [activeFilter, setActiveFilter] = useState(null); // State för att hantera aktivt filter

    const products = [
        { id: 1, name: 'Produkt 1', image: product1, price: '199 SEK' },
        { id: 2, name: 'Produkt 2', image: product2, price: '249 SEK' },
        { id: 3, name: 'Produkt 3', image: product3, price: '299 SEK' },
        { id: 4, name: 'Produkt 4', image: product4, price: '349 SEK' },
        { id: 5, name: 'Produkt 5', image: product5, price: '399 SEK' },
        { id: 6, name: 'Produkt 6', image: product6, price: '449 SEK' },
        { id: 7, name: 'Produkt 7', image: product7, price: '499 SEK' },
        { id: 8, name: 'Produkt 8', image: product8, price: '549 SEK' },
        { id: 9, name: 'Produkt 9', image: product9, price: '599 SEK' },
        { id: 10, name: 'Produkt 10', image: product10, price: '649 SEK' },
        { id: 11, name: 'Produkt 11', image: product11, price: '699 SEK' },
        { id: 12, name: 'Produkt 12', image: product12, price: '749 SEK' },
        { id: 13, name: 'Produkt 13', image: product13, price: '799 SEK' },
        { id: 14, name: 'Produkt 14', image: product14, price: '849 SEK' },
        { id: 15, name: 'Produkt 15', image: product15, price: '899 SEK' },
        { id: 16, name: 'Produkt 16', image: product16, price: '949 SEK' },
        { id: 17, name: 'Produkt 17', image: product17, price: '999 SEK' },
        { id: 18, name: 'Produkt 18', image: product18, price: '1049 SEK' },
    ];

    // Hantera klick på filterknappar
    const handleFilterClick = (filterId) => {
        setActiveFilter(filterId === activeFilter ? null : filterId); // Toggle aktivt filter
    };

    return (
        <div className=" m-0 p-0 test">
            <div className="mb-4">
                <img
                    src={product14}
                    alt="Landing Hero"
                    className="img-fluid"
                />
            </div>

            <div className="perfumes-page">
                {/* Filtreringssektion */}
                <div className="filter-section">
                    <button
                        className={`filter-btn ${activeFilter === 1 ? 'active' : ''}`}
                        onClick={() => handleFilterClick(1)}
                    >
                        Herr
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 2 ? 'active' : ''}`}
                        onClick={() => handleFilterClick(2)}
                    >
                        Dam
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 3 ? 'active' : ''}`}
                        onClick={() => handleFilterClick(3)}
                    >
                        Unisex
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 4 ? 'active' : ''}`}
                        onClick={() => handleFilterClick(4)}
                    >
                        Musk
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 5 ? 'active' : ''}`}
                        onClick={() => handleFilterClick(5)}
                    >
                        Oud
                    </button>
                </div>

                {/* Kort för produkter */}
                <div className=" my-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {products.map((product) => (
                            <div className="col" key={product.id}>
                                <div className="card product-card">
                                    <img src={product.image} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfumes;


