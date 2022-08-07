import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { getProductsImage } from "../../services";
import style from "./Carousel.module.scss";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      const imgs = await getProductsImage();
      console.log(imgs);
      setImages(imgs);
    };
    wrapper();
  }, []);

  console.log(images);
  return (
    <div>
      <Slider {...settings} className={style.Container}>
        {/* <div className={style.Carousel_Container}> */}
          <h3>test</h3>
          {/* <div className={style.Image_Container}>
            <img
              src={images[0].image}
              alt={images[0].title}
              className={style._Image}
            />
          </div>
          <div className={style.Text_Container}>
            <p className={style._Title}>{images[0].title}</p>
          </div>
        </div>
        
        <div className={style.Carousel_Container}>
          <div className={style.Image_Container}>
            <img
              src={images[1].image}
              alt={images[1].title}
              className={style._Image}
            />
          </div>
          <div className={style.Text_Container}>
            <p className={style._Title}>{images[1].title}</p>
          </div>
        </div>


        <div className={style.Carousel_Container}>
          <div className={style.Image_Container}>
            <img
              src={images[2].image}
              alt={images[2].title}
              className={style._Image}
            />
          </div>
          <div className={style.Text_Container}>
            <p className={style._Title}>{images[2].title}</p>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
