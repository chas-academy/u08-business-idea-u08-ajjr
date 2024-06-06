import React from "react";
import HeroCarousel from "../../components/hero/HeroCarousel";
import Card from "../../components/card/Card";
import ProductGrid from "../../components/productgrid/ProductGrid";
import "../../components/card/card.css";
import "../../components/productgrid/productgrid.css";
import product8 from "../../images/product8.jpg";
import product9 from "../../images/product9.jpg";
import product12 from "../../images/product12.jpg";
import product14 from "../../images/product14.jpg";
import { useOutletContext } from "react-router-dom";

const images = [
  { src: product8, alt: "First slide" },
  { src: product9, alt: "Second slide" },
  { src: product12, alt: "Third slide" },
  { src: product14, alt: "Fourth slide" },
];

const Productdetail = () => {
  const { addToCart } = useOutletContext();
  return (
    <div>
      <div className="text-center my-4">
        <h2>Arians Victory</h2>
      </div>

      <HeroCarousel images={images} />

      <div className="container my-4">
        <div className="cards-container">
          <Card
            className="card-white"
            title="Arians Victory"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quasi deleniti inventore vitae, in iure dolor, ab maiores maxime illo sapiente vero! Suscipit obcaecati dolor neque nihil nam quaerat sunt! Fugit necessitatibus porro animi ab nobis cumque atque expedita dolore architecto sed aut corrupti asperiores, laborum, voluptatum at repellat, illum consequuntur nam aliquam veritatis. Inventore natus modi non! Dicta, cupiditate. Nulla ipsam, vitae tempora amet dolor omnis in iste nemo rem similique maxime deserunt qui nam illum, accusamus maiores laudantium cum quod quibusdam. Eos exercitationem ipsa tempora omnis consectetur debitis."
          />
          <Card
            className="card-gray"
            title="Recensioner"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut illum quod saepe autem quis dolorum similique cumque quidem, perferendis cupiditate? Tempora, magni ducimus beatae commodi explicabo incidunt id quo quod. Quos iusto cupiditate minus exercitationem nulla excepturi totam quae omnis ducimus alias sit dolorum cum, nobis reprehenderit voluptate, cumque aliquid obcaecati saepe tenetur? Mollitia quia, voluptate officiis porro quisquam excepturi. Ut accusamus aspernatur ea eos nihil beatae repudiandae delectus! Deserunt beatae cum architecto, deleniti provident fuga odio recusandae impedit, dignissimos adipisci nemo corporis perferendis? Ad libero eum nam repellat et."
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => addToCart(Productdetail)}
      >
        Lägg till i varukorg
      </button>

      <div className="container my-5">
        <div className="text-center">
          <h5>Relaterade Produkter</h5>
        </div>

        <ProductGrid />
      </div>
    </div>
  );
};

export default Productdetail;
