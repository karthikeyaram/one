import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';
import image38 from '../../Assets/gallery/img30.jpg'
import image39 from '../../Assets/gallery/img29 (1).jpg'
import image40 from '../../Assets/gallery/img29 (50).jpg'
import image41 from '../../Assets/gallery/img29 (49).jpg'
import image42 from '../../Assets/gallery/img29 (48).jpg'
import image43 from '../../Assets/gallery/img29 (47).jpg'
import image44 from '../../Assets/gallery/img29 (46).jpg'
import image45 from '../../Assets/gallery/img29 (45).jpg'
import image46 from '../../Assets/gallery/img29 (44).jpg'
import image47 from '../../Assets/gallery/img29 (43).jpg'
import image48 from '../../Assets/gallery/img29 (42).jpg'
import image49 from '../../Assets/gallery/img29 (41).jpg'
import image50 from '../../Assets/gallery/img29 (39).jpg'
import image51 from '../../Assets/gallery/img29 (38).jpg'
import image52 from '../../Assets/gallery/img29 (37).jpg'
import image53 from '../../Assets/gallery/img29 (36).jpg'
import image54 from '../../Assets/gallery/img29 (35).jpg'

const Gallery4 = () => {
  const [activeHeader, setActiveHeader] = useState('IsaiPerairignarkal');

  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const images = [
    { src: image38 },
    { src: image39 },
    { src: image40 },
    { src: image41 },
    { src: image42 },
    { src: image43 },
    { src: image44 },
    { src: image45 },
    { src: image46 },
    { src: image47 },
    { src: image48 },
    { src: image49 },
    { src: image50 },
    { src: image51 },
    { src: image52 },
    { src: image53 },
    { src: image54 },
  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.blog4 || [];

  const translations = {
    'DeivigaArulalarkal': 'தெய்வீக அருளாளர்கள்', 
    'IsaiArulalarkal': 'இசை அருளாளர்கள்',
    'IsaiKalaivanarkal': 'இசை கலைவாணர்கள்',
    'IsaiPerairignarkal': 'முஇசைப் பேரறிஞர்கள்',
    'PannIsaiPerarignarkal': 'பண் இசைப் பேரறிஞர்கள்',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    animation: 'fadeIn 1s ease-in-out',
  };

  const headerItemStyle = (name) => ({
    fontSize: '12px',
    fontWeight: '600',
    color: activeHeader === name ? '#F39C12' : '#333333',
    textTransform: 'capitalize',
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '5px',
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: activeHeader === name ? '0 0 10px rgba(243, 156, 18, 0.6)' : 'none',
    '&:hover': {
      color: '#F39C12',
      transform: 'scale(1.1)',
      boxShadow: '0 0 10px rgba(243, 156, 18, 0.4)',
    },
  });

  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...prev, entry.target]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const imageElements = document.querySelectorAll('.gallery-item');
    imageElements.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const galleryItemStyle = (isVisible, index) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: isVisible ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateX(0)'  // remove random transform effects for static view
      : 'translateX(0)',
    transition: `opacity 1s ease, transform 1s ease, transition-delay ${index * 0.3}s`,
  });

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };

  const imageNameStyle = {
    marginTop: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#FFF',
    textShadow: '0px 1px 1px ',
    color:'rgba(243, 156, 18, 0.6)',
    padding: '8px 12px',
    borderRadius: '5px',
    maxWidth: '100%',
    textAlign: 'center',
    transition: 'background 0.3s ease, transform 0.3s ease',
  };

  return (
    <div>
      <div className="header-container" style={headerStyle}>
        {headerNames.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            style={headerItemStyle(name)}
            onClick={() => setActiveHeader(name)}
          >
            {language === 'tamil' && translations[name] ? translations[name] : name}
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <h6 style={{ fontSize: '26px', fontWeight: '500', color: '#F39C12', marginBottom: '40px' }}>
        {language === 'tamil' && translations[activeHeader] ? translations[activeHeader] : activeHeader}
        </h6>
      </div>

      <div style={galleryContainerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            style={galleryItemStyle(visibleImages.includes(document.querySelector(`.gallery-item:nth-child(${index + 1})`)), index)}
          >
            <img src={image.src} alt={image.name} style={galleryImageStyle} />
            <div style={imageNameStyle}>
              {galleryd[0]?.gallery4?.[index]?.title || 'No Title Available'}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Ensure static layout for small screens */
          @media (max-width: 768px) {
            .header-container {
              flex-direction: column;
            }

            .header-container a {
              margin-bottom: 10px;
            }

            .gallery-item {
              transform: none !important;  /* Disable shake on small screens */
              opacity: 1 !important;        /* Ensure image is visible */
              transition: none !important;  /* Disable transition effects */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery4;
