import axios from "axios";

const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `http://localhost:5173/produkter/${category}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default fetchProductsByCategory;
