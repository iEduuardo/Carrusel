import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss"
import slides from "../../helper/slides.json"
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function Carrusel(props) {
    const settings = {
        // className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 1,
        // speed: 10,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
        <Slider {...settings} className="centerModeSlide"
            autoplay
            autoplaySpeed={6000}
            dots
            // arrows={false}
            >
            {slides.map((item, index) => (
                <div key={index} className="image-container">
                    <img className="imgSlideCar" src={item.URL} alt={item.Name} />
                    {item.Name || item.Year ? (
                        <div className="overlay">
                            {item.Name ? <p>{item.Name}</p> : null}
                            {item.Year ? (
                                <Button className="overlayButton" type="dashed" size="medium" shape="round" href={item.URL} icon={<DownloadOutlined />}>
                                    Información
                                </Button>
                            ) : null}
                        </div>
                    ) : null} 
                </div>
            ))}
        </Slider>
        <br/>
        <p>43 palabras 240 caracteres</p>
        <p>Archivos pueden tener limite de peso Por ejemplo 10Mb</p>
        <p>Se puede limitar el tipo de archivo e imagen a subir</p>
        <p>El tamaño del botón puede cambiar</p>
        <p>Se pueden ocular puntos de carrusel y flechas</p>
        <p>Tamaño máximo </p>
        </>
    );
}

export default Carrusel;
