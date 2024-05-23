import React from "react";
import HeroCarousel from "../../components/hero/HeroCarousel";
import Card from "../../components/card/Card";
import ProductGrid from "../../components/productgrid/ProductGrid";
import "../../components/card/card.css";
import "../../components/productgrid/productgrid.css";

const images = [
    { src: "/src/images/product8.jpg", alt: "First slide" },
    { src: "/src/images/product9.jpg", alt: "Second slide" },
    { src: "/src/images/product12.jpg", alt: "Third slide" },
    { src: "/src/images/product14.jpg", alt: "Fourth slide" },
];

const Productdetail = () => {
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