import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className="goat"
            src="https://mercury.akamaized.net/i/3b70a5c12d2fe964a51144cc4803a403_234844_0.jpg"
            alt="Goat"
          />
        </div>
        <div>
          <img
            className="sheep"
            src="https://mercury.akamaized.net/i/3b70a5c12d2fe964a51144cc4803a403_234844_0.jpg"
            alt="Sheep"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
