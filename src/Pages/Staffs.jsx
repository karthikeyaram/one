import React, { useState, useEffect } from 'react';

function Staff() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'staff-1.jpg', // Replace with the correct image paths
    'staff-2.jpg',
    'staff-3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px'
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    padding:"10px",
    textAlign: 'center',
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: 'white',
    background: "linear-gradient(to right, #3fa3e0,rgb(58, 133, 173),rgb(20, 61, 126))",
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '80%',
    height: '400px',
    maxWidth: '600px',
    overflow: 'hidden'
  };

  const staffImageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Default for larger screens
    opacity: 0,
    transition: 'opacity 1s ease-in-out'
  };

  const fadeInStyle = {
    opacity: 1
  };

  const fadeOutStyle = {
    opacity: 0
  };

  const responsiveImageStyle = {
    objectFit: 'contain' // Ensure full visibility on smaller screens
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Staffs</h1>
      <div style={imageContainerStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Staff ${index + 1}`}
            style={{
              ...staffImageStyle,
              ...(currentIndex === index ? fadeInStyle : fadeOutStyle),
              ...(window.innerWidth <= 768 ? responsiveImageStyle : {}) // Apply responsive styles for mobile
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Staff;
