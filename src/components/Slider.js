import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file

const Slider = () => {
  const images = [
    'https://mercury.akamaized.net/i/3b70a5c12d2fe964a51144cc4803a403_234844_0.jpg',
    'https://mercury.akamaized.net/i/3ca2854bf041f71ba54ac801da914141_70768_0.jpg' ,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const translateValue = -currentIndex * 100;

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(${translateValue}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="slider-item">
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
