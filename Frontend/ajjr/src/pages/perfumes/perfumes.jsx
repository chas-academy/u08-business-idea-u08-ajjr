import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./perfumes.css";
import product14 from "../../images/product14.jpg";
import testers from "../../images/testers.jpg";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";

const Perfumes = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useOutletContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(
    searchParams.get("category")
  );

  useEffect(() => {
    if (activeFilter) {
      setFilteredProducts(
        products.filter((product) => product.category === activeFilter)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, activeFilter]);

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
        setProducts(data);
      } else {
        setProducts([]);
        console.error("Fetched products are not an array:", data);
      }
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setProducts([]);
    }
  };

  const handleFilterClick = (filterId = "") => {
    setActiveFilter(filterId === activeFilter ? null : filterId);
    setSearchParams({ category: filterId });
  };

  const tester = [
    { id: 1, name: "Tester", image: testers, price: 40 },
    { id: 2, name: "3 Testers", image: testers, price: 100 },
    { id: 3, name: "5 Testers", image: testers, price: 150 },
  ];

  return (
    <>
      <div className="m-0 p-0 test">
        <div className="mb-4">
          <img src={product14} alt="Landing Hero" className="img-fluid" />
        </div>

        <div className="perfumes-page">
          <div className="filter-section">
            <button
              className={`filter-btn ${
                activeFilter === "herr" ? "active" : ""
              }`}
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
              className={`filter-btn ${
                activeFilter === "musk" ? "active" : ""
              }`}
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
      <div className="my-5">
        <h3 className="my-5">Testers</h3>
        <div className="d-flex justify-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {tester.map((tester) => (
            <div className="col" key={tester.id}>
              <div className="card product-card">
                <img
                  src={tester.image}
                  className="card-img-top"
                  alt={tester.name}
                />
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
    </>
  );
};

export default Perfumes;
