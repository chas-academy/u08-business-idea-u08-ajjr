import React, { useState, useEffect } from "react";
import fetchProductsByCategory from "../filtriering/FetchProductsByCategory";

const ProductList = ({ match }) => {
  const { category } = match.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductsByCategory(category);
      setProducts(data);
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
