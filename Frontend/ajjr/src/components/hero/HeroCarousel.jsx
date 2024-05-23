import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarousel = ({ images }) => {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        src={image.src}
                        className="d-block w-100"
                        style={{ height: "100vh", objectFit: "cover" }}
                        alt={image.alt}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HeroCarousel;
