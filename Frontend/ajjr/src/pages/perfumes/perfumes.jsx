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

const Perfumes = () => {
    const [activeFilter, setActiveFilter] = useState(null); // State för att hantera aktivt filter

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
        { id: 11, name: 'Produkt 11', image: 'https://via.placeholder.com/150' },
        { id: 12, name: 'Produkt 12', image: 'https://via.placeholder.com/150' },
        { id: 13, name: 'Produkt 13', image: 'https://via.placeholder.com/150' },
        { id: 14, name: 'Produkt 14', image: 'https://via.placeholder.com/150' },
        { id: 15, name: 'Produkt 15', image: 'https://via.placeholder.com/150' },
    ];

    // Hantera klick på filterknappar
    const handleFilterClick = (filterId) => {
        setActiveFilter(filterId === activeFilter ? null : filterId); // Toggle aktivt filter
    };

    return (
        <div className="perfumes-page">
            {/* Filtreringssektion */}
            <div className="filter-section">
                <button
                    className={`filter-btn ${activeFilter === 1 ? 'active' : ''}`}
                    onClick={() => handleFilterClick(1)}
                >
                    Filter 1
                </button>
                <button
                    className={`filter-btn ${activeFilter === 2 ? 'active' : ''}`}
                    onClick={() => handleFilterClick(2)}
                >
                    Filter 2
                </button>
                <button
                    className={`filter-btn ${activeFilter === 3 ? 'active' : ''}`}
                    onClick={() => handleFilterClick(3)}
                >
                    Filter 3
                </button>
                <button
                    className={`filter-btn ${activeFilter === 4 ? 'active' : ''}`}
                    onClick={() => handleFilterClick(4)}
                >
                    Filter 4
                </button>
                <button
                    className={`filter-btn ${activeFilter === 5 ? 'active' : ''}`}
                    onClick={() => handleFilterClick(5)}
                >
                    Filter 5
                </button>
            </div>

            {/* Kort för produkter */}
            <div className="container my-5">
                <div className="row row-cols-5 g-4">
                    {products.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card product-card">
                                <img src={product.image} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Perfumes;
