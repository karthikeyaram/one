import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import jsondata from "../../Data/Data.json";
import image70 from '../../Assets/gallery/1 (1).jpg';
import image71 from '../../Assets/gallery/2.jpg';
import image72 from '../../Assets/gallery/3.jpg';
import image73 from '../../Assets/gallery/4.jpg';
import image74 from '../../Assets/gallery/5.jpg';
import image75 from '../../Assets/gallery/6.jpg';
import image76 from '../../Assets/gallery/7.jpg';
import image77 from '../../Assets/gallery/8.jpg';
import image78 from '../../Assets/gallery/9.jpg';
import image79 from '../../Assets/gallery/10.jpg';
import image80 from '../../Assets/gallery/11.jpg';
import image81 from '../../Assets/gallery/12.jpg';
import image82 from '../../Assets/gallery/13.jpg';
import image83 from '../../Assets/gallery/14.jpg';
import image84 from '../../Assets/gallery/15.jpg';
import image85 from '../../Assets/gallery/16.jpg';
import image86 from '../../Assets/gallery/17.jpg';
import image87 from '../../Assets/gallery/18.jpg';
import video from '../../Assets/gallery/video.mp4';

const Museum = () => {
  const imageSources = [
    image70,
    image71,
    image72,
    image73,
    image74,
    image75,
    image76,
    image77,
    image78,
    image79,
    image80,
    image81,
    image82,
    image83,
    image84,
    image85,
    image86,
    image87,
  ];

  const { language } = useSelector((state) => state.language);
  const museumd = jsondata[language]?.museums || [];

  const headings = {
    tamil: {
      library: "தொல் இசை களஞ்சியம்",
      membership: "உறுப்பினர் விவரங்கள்",
      video: "அறிமுகக் காணொளி",
      gallery: "காட்சியகம்",
    },
    english: {
      library: "Ancient Music Museum",
      membership: "Membership Details",
      video: "Introduction Video",
      gallery: "Gallery",
    },
  };

  const selectedHeadings = headings[language] || headings.english;

  // State to manage shuffled images
  const [shuffledImages, setShuffledImages] = useState(imageSources);

  useEffect(() => {
    // Shuffle images every 2 seconds
    const shuffleAndFade = () => {
      const shuffled = [...imageSources].sort(() => Math.random() - 0.5);
      setShuffledImages(shuffled);
    };

    const interval = setInterval(shuffleAndFade, 2000); // 2 seconds interval
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "2rem" }}>
      <header
        style={{
          background: "linear-gradient(to right, #3fa3e0,rgb(58, 133, 173),rgb(20, 61, 126))",
          color: "#ffffff",
          textAlign: "center",
          padding: "2rem 1rem",
          marginBottom: "1.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "0.05em" }}>
          {selectedHeadings.library}
        </h1>
      </header>

      <main style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {/* Membership Details Section */}
        <section
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            flex: "1 1 45%",
            minWidth: "300px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem",
            }}
          >
            {selectedHeadings.membership}
          </h2>

          {museumd.map((museum, index) => (
            <div key={index} style={{ padding: "20px" }}>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  marginBottom: "20px",
                }}
              >
                {Object.entries(museum.membership_details).map(([key, detail]) => (
                  <div
                    key={key}
                    style={{ fontSize: "1.3rem", marginBottom: "12px", fontWeight: "500" }}
                  >
                    <strong style={{ color: "#2563eb" }}>{detail.label}: </strong>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Video Section */}
        <section
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            flex: "1 1 45%",
            minWidth: "300px",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem",
            }}
          >
            {selectedHeadings.video}
          </h2>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section
          style={{
        
       
            borderRadius: "0.5rem",
            padding: "2rem",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2563eb",
              borderBottom: "3px solid #93c5fd",
              marginBottom: "1rem",
            }}
          >
            {selectedHeadings.gallery}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "1.5rem",
            }}
          >
            {shuffledImages.map((src, index) => (
              <div
                key={index}
                style={{
                  overflow: "hidden",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  opacity: 0.8,
                  transition: "opacity 1.5s ease-in-out",
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Museum;
