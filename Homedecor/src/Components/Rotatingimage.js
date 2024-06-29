import React, { useState, useEffect } from 'react';
import './Home.css'; // Import CSS for styling

const images = [
  
  'https://addresshome.com/cdn/shop/files/ban_1400x.jpg?v=1714212460',
  'https://addresshome.com/cdn/shop/files/Top_Banners3_1400x.jpg?v=1712641759',
  'https://addresshome.com/cdn/shop/files/Top_Banners_1400x.jpg?v=1712641759',
  'https://addresshome.com/cdn/shop/files/Amaara.jpg?v=1693029082',
  'https://addresshome.com/cdn/shop/collections/Candle1_1_2200x.jpg?v=1664447761',
  'https://addresshome.com/cdn/shop/collections/53-Lanterns_2200x.jpg?v=1664448145',
  'https://addresshome.com/cdn/shop/collections/49-Candleware_2200x.jpg?v=1664447614',
  'https://addresshome.com/cdn/shop/collections/49-Candleware_2200x.jpg?v=1664447614'
   ];
  

const Rotatingimage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="gallery">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Rotatingimage;
