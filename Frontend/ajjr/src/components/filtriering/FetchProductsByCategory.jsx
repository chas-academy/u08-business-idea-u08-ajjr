import axios from "axios";

const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/products/${category}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default fetchProductsByCategory;
