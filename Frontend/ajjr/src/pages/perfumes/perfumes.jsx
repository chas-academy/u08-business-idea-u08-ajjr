import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './perfumes.css';
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
import testers from "../../images/testers.jpg";
import { Link, useOutletContext } from "react-router-dom";

const Perfumes = () => {

  const [products, getProducts] = useState([]);
  const { addToCart } = useOutletContext();
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://u08-business-idea-u08-ajjr-39gd.onrender.com/api/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Use JWT if applicable
        },
      });
      const data = await response.json();

      if (Array.isArray(data)) {
        getProducts(data);
      } else {
        getProducts([]);
        console.error("Fetched orders are not an array:", data);
      }
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      getProducts([]);
    }
  };

  const tester = [
    { id: 1, name: 'Tester', image: testers, price: 40 },
    { id: 2, name: '3 Testers', image: testers, price: 100 },
    { id: 3, name: '5 Testers', image: testers, price: 150 },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId === activeFilter ? null : filterId);
  };

  return (
    <div className="m-0 p-0 test">
      <div className="mb-4">
        <img
          src={product14}
          alt="Landing Hero"
          className="img-fluid"
        />
      </div>

      <div className="perfumes-page">
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

        <div className="my-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((product) => (

              <div className="col" key={product._id}>
                <div className="card product-card">
                  <Link to="/productdetail">
                    <img
                      src={'https://u08-business-idea-u08-ajjr-39gd.onrender.com/api/' + product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price} SEK</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(product)}
                    >
                      Lägg till i varukorg
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
        <div className="my-5">
          <h3 className='my-5'>Testers</h3>
          <div className="d-flex justify-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {tester.map((tester) => (
              <div className="col" key={tester.id}>
                <div className="card product-card">
                  <img src={tester.image} className="card-img-top" alt={tester.name} />
                  <div className="card-body">
                    <h5 className="card-title">{tester.name}</h5>
                    <p className="card-text">{tester.price} SEK</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(tester)}
                    >
                      Lägg till i varukorg
                    </button>
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
