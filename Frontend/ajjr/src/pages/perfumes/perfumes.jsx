import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./perfumes.css";
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
import { Link, useOutletContext, useSearchParams } from "react-router-dom";

const Perfumes = () => {
  const [products, getProducts] = useState([]);
  const { addToCart } = useOutletContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(
    searchParams.get("category")
  );

  useEffect(() => {
    if (searchParams.get("category")) {
      setActiveFilter(searchParams.get("category"));
    }
    setFilteredProducts(
      products.filter((product) => product.category === activeFilter)
    );
  }, [searchParams, activeFilter]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Use JWT if applicable
          },
        }
      );
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

  const handleFilterClick = (filterId = "") => {
    setActiveFilter(filterId === activeFilter ? null : filterId);
    setSearchParams({ category: filterId });
  };

  return (
    <div className="m-0 p-0 test">
      <div className="mb-4">
        <img src={product14} alt="Landing Hero" className="img-fluid" />
      </div>

      <div className="perfumes-page">
        <div className="filter-section">
          <button
            className={`filter-btn ${activeFilter === "herr" ? "active" : ""}`}
            onClick={() => handleFilterClick("herr")}
          >
            Herr
          </button>
          <button
            className={`filter-btn ${activeFilter === "dam" ? "active" : ""}`}
            onClick={() => handleFilterClick("dam")}
          >
            Dam
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "unisex" ? "active" : ""
            }`}
            onClick={() => handleFilterClick("unisex")}
          >
            Unisex
          </button>
          <button
            className={`filter-btn ${activeFilter === "musk" ? "active" : ""}`}
            onClick={() => handleFilterClick("musk")}
          >
            Musk
          </button>
          <button
            className={`filter-btn ${activeFilter === "oud" ? "active" : ""}`}
            onClick={() => handleFilterClick("oud")}
          >
            Oud
          </button>
        </div>

        <div className="my-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {filteredProducts.map((product) => (
              <div className="col" key={product._id}>
                <div className="card product-card">
                  {/*   <Link to="/productdetail">
                     <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    /> 
                  </Link> */}

                  <Link to="/productdetail">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/` + product.image}
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
      </div>
    </div>
  );
};

export default Perfumes;
