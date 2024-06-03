import React from "react";
import "../productgrid/productgrid.css";
import product1 from "../../images/product1.jpg"
import product2 from "../../images/product2.jpg"
import product3 from "../../images/product3.jpg"
import product4 from "../../images/product4.jpg"

const ProductGrid = () => {
    const products = [
        { src: { product1 }, title: "Victory" },
        { src: { product2 }, title: "The Don" },
        { src: { product3 }, title: "Nuit Sombre" },
        { src: { product4 }, title: "Empire" },
    ];

    return (
        <div className="card-container">
            {products.map((product, index) => (
                <div key={index} className="card">
                    <img
                        src={product.src}
                        className="card-img-top "
                        alt={product.title}
                    />
                    <div className="card-body2">
                        <p className="card-text">{product.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;