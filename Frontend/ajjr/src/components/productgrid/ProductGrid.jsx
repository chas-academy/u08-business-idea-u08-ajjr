import React from "react";
import "../productgrid/productgrid.css";

const ProductGrid = () => {
    const products = [
        { src: "src/images/product1.jpg", title: "Victory" },
        { src: "src/images/product2.jpg", title: "Victory" },
        { src: "src/images/product3.jpg", title: "Victory" },
        { src: "src/images/product4.jpg", title: "Victory" },
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