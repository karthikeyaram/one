import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';
import image21 from '../../Assets/gallery/img32.jpg'
import image22 from '../../Assets/gallery/img27 (1).jpg'
import image23 from '../../Assets/gallery/img27 (2).jpg'
import image24 from '../../Assets/gallery/img27 (3).jpg'
import image25 from '../../Assets/gallery/img27 (4).jpg'
import image26 from '../../Assets/gallery/img27 (5).jpg'
import image27 from '../../Assets/gallery/img27 (6).jpg'
import image28 from '../../Assets/gallery/img27 (7).jpg'
import image29 from '../../Assets/gallery/img27 (8).jpg'
import image30 from '../../Assets/gallery/img27 (9).jpg'
import image31 from '../../Assets/gallery/img27 (10).jpg'
import image32 from '../../Assets/gallery/img27 (11).jpg'
import image33 from '../../Assets/gallery/img27 (12).jpg'
import image34 from '../../Assets/gallery/img27 (13).jpg'
import image35 from '../../Assets/gallery/img27 (14).jpg'
import image36 from '../../Assets/gallery/img27 (15).jpg'
import image37 from '../../Assets/gallery/img27 (17).jpg'

const IsaiKalaivanarkal = () => {
  const [activeHeader, setActiveHeader] = useState('IsaiKalaivanarkal');

  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const translations = {
    'DeivigaArulalarkal': 'தெய்வீக அருளாளர்கள்',
    'IsaiArulalarkal': 'இசை அருளாளர்கள்',
    'IsaiKalaivanarkal': 'இசை கலைவாணர்கள்',
    'IsaiPerairignarkal': 'முஇசைப் பேரறிஞர்கள்',
    'PannIsaiPerarignarkal': 'பண் இசைப் பேரறிஞர்கள்',
  };

  const images = [
    { src: image21 },
    { src: image22 },
    { src: image23 },
    { src: image24 },
    { src: image25 },
    { src: image26 },
    { src: image27 },
    { src: image28 },
    { src: image29 },
    { src: image30 },
    { src: image31 },
    { src: image32 },
    { src: image33 },
    { src: image34 },
    { src: image35 },
    { src: image36 },
    { src: image37 },

  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.blog3 || [];

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
      ? index % 2 === 0
        ? 'translateX(0)'
        : 'translateX(0)'
      : index % 2 === 0
      ? 'translateX(-100px)'
      : 'translateX(100px)',
    transition: `opacity 1s ease, transform 1s ease, transition-delay ${index * 0.3}s`, // Sequential delay for each image
  });

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };

  const imageNameStyle = {
    marginTop: '10px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#FFF',
    textShadow: '0px 1px 1px ',
    color: 'rgba(243, 156, 18, 0.6)',
    padding: '8px 12px',
    borderRadius: '5px',
    maxWidth: '100%',
    textAlign: 'center',
    transition: 'background 0.3s ease, transform 0.3s ease',
  };

  return (
    <div>
      <div style={headerStyle} className="header-container">
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

            {/* Display the first title from galleryd under the image */}
            <div style={imageNameStyle}>
              {galleryd[0]?.gallery3?.[index]?.title || 'No Title Available'}
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

          @keyframes slideInFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInFromRight {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Remove shaking effect on small screens */
          @media (max-width: 768px) {
            .gallery-item {
              transform: none !important;  /* Disable transform effect */
              transition: none !important; /* Disable transition effect */
              opacity: 1 !important;      /* Ensure images are visible */
            }

            .header-container {
              flex-direction: column;
              align-items: center;
            }

            .header-container a {
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IsaiKalaivanarkal;
