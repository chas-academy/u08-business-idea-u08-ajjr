
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import holdingperfume from "../../images/holdingperfume.jpg";
import testers from "../../images/testers.jpg";
import productajjr from "../../images/productajjr.jpg";
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
import { useRef } from 'react';
import { Link, NavLink, Route, Routes, Outlet, BrowserRouter } from "react-router-dom";





function Home() {
  //Förberedelse för att visa cards från backend
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("api/products/bestsellers")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  const products = [
    { id: 1, name: 'Produkt 1', price: '100 kr', image: product1 },
    { id: 2, name: 'Produkt 2', price: '200 kr', image: product2 },
    { id: 3, name: 'Produkt 3', price: '300 kr', image: product3 },
    { id: 4, name: 'Produkt 4', price: '400 kr', image: product4 },
    { id: 5, name: 'Produkt 5', price: '500 kr', image: product5 },
    { id: 6, name: 'Produkt 6', price: '600 kr', image: product6 },
    { id: 7, name: 'Produkt 7', price: '700 kr', image: product7 },
    { id: 8, name: 'Produkt 8', price: '800 kr', image: product8 },
    { id: 9, name: 'Produkt 9', price: '900 kr', image: product9 },
    { id: 10, name: 'Produkt 10', price: '1000 kr', image: product10 },
  ];

  /* const products = [
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
  ]; */

  const scrollLeft1 = () => {
    carouselRef1.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight1 = () => {
    carouselRef1.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const scrollLeft2 = () => {
    carouselRef2.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight2 = () => {
    carouselRef2.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const scrollLeft3 = () => {
    carouselRef3.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight3 = () => {
    carouselRef3.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (

    <>


      <div className='discover'>
        <Link to="produkter">
          <img
            src={productajjr}
            alt="Landing Hero"
            className="img-fluid discover-hero"
          />
        </Link>



        <h2 className="my-4 discover-h2">
          <Link to="produkter">
            UPPTÄCK VÅR BREDA KOLLEKTION IDAG
          </Link>
        </h2>
        <h2 className="my-4 slogan-h2">
          "MEMORIES THAT LAST"
        </h2>
        <button className="buy-button" >
          <Link to="produkter">
            Köp nu
          </Link>
        </button>




      </div>

      <h3 className="text-center my-4">För honom</h3>

      <div className="container my-5 position-relative">
        <button className="carousel-btn left-btn" onClick={scrollLeft1}>
          &#x2C2;
        </button>
        <button className="carousel-btn right-btn" onClick={scrollRight1}>
          &#x2C3;
        </button>
        <div className="carousel-container py-4" ref={carouselRef1}>
          {products.map((product) => (
            <div className="card product-card mx-2" key={product.id}>
              <img src={product.image} className="card-img" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='pocket'>
        <img
          src={holdingperfume}
          alt="Collection"
          className="img-fluid pocket-hero"
          style={{ width: "100vw", height: "40vh", objectFit: "cover" }}
        />
        <h2 className="text-center my-4 pocket-h2">
          DIN SIGNATURDOFT I FICKAN
        </h2>
      </div>

      <h3 className="text-center my-4">För henne</h3>

      <div className="container my-5 position-relative">
        <button className="carousel-btn left-btn" onClick={scrollLeft2}>
          &#x2C2;
        </button>
        <button className="carousel-btn right-btn" onClick={scrollRight2}>
          &#x2C3;
        </button>
        <div className="carousel-container py-4" ref={carouselRef2}>
          {products.map((product) => (
            <div className="card product-card mx-2" key={product.id}>
              <img src={product.image} className="card-img" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='testers'>
        <img
          src={testers}
          alt="Testers"
          className="img-fluid tester-hero"
        />
        <h2 className="text-center my-4 tester-h2">
          <Link to="testers">
            OSÄKER PÅ VAD DU GILLAR? BESTÄLL VÅRA TESTERS NU!
          </Link>
        </h2>
        <h2 className="text-center my-4 aroma-h2">
          <Link to="testers">
            UTFORSKA NYA AROMER
          </Link>
        </h2>
        <button className="buy-button2" >
          <Link to="testers">
            Köp nu
          </Link>
        </button>
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



      <h3 className="text-center my-4">Bästsäljare</h3>

      <div className="container my-5 position-relative">
        <button className="carousel-btn left-btn" onClick={scrollLeft3}>
          &#x2C2;
        </button>
        <button className="carousel-btn right-btn" onClick={scrollRight3}>
          &#x2C3;
        </button>
        <div className="carousel-container py-4" ref={carouselRef3}>
          {products.map((product) => (
            <div className="card product-card mx-2" key={product.id}>
              <img src={product.image} className="card-img" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



    </>

  );

}

export default Home;
