import React from "react";
import landingpicture from "../../images/landingpicture.jpg";
import holdingperfume from "../../images/holdingperfume.jpg";
import productpage from "../../images/produktpageimg.jpg";
import testers from "../../images/testers.jpg";

function Home() {
  //Förberedelse för att visa cards från backend
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("api/products/bestsellers")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  return (
    <div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <img
              src={landingpicture}
              alt="Landing Hero"
              className="img-fluid"
              style={{ width: "100vw", height: "80vh", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h2 className="text-center">UPPTÄCK VÅR BREDA KOLLEKTION IDAG</h2>
          </div>
          <div className="col-md-6">
            <img
              src={holdingperfume}
              alt="Collection"
              className="img-fluid"
              style={{ width: "100vw", height: "40vh", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="row align-items-center reverse-columns">
          <div className="col-md-6">
            <img
              src={testers}
              alt="Testers"
              className="img-fluid"
              style={{ width: "100vw", height: "40vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-center">
              OSÄKER PÅ VAD DU GILLAR? BESTÄLL VÅRA TESTERS
            </h2>
          </div>
        </div>

        {/* Förberedelse för att dra från backend */}
        {/* <div className="container">
      <div className="row my-4">
        <div className="col-12">
          <h3 className="text-center">Bästsäljare</h3>
        </div>
        {products.map(product => (
          <div key={product._id} className="col-md-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))} */}

        <div className="row my-4">
          <div className="col-12">
            <h3 className="text-center">Bästsäljare</h3>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ border: "none" }}>
              <img src={productpage} className="card-img-top" alt="Product" />
              <div className="card-body" style={{ background: "#fffde7" }}>
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Product Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
