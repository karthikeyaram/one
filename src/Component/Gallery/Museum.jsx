import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import jsondata from "../../Data/Data.json";
import image70 from '../../Assets/gallery/1 (1).jpg'
import image71 from '../../Assets/gallery/2.jpg'
import image72 from '../../Assets/gallery/3.jpg'
import image73 from '../../Assets/gallery/4.jpg'
import image74 from '../../Assets/gallery/5.jpg'
import image75 from '../../Assets/gallery/6.jpg'
import image76 from '../../Assets/gallery/7.jpg'
import image77 from '../../Assets/gallery/8.jpg'
import image78 from '../../Assets/gallery/9.jpg'
import image79 from '../../Assets/gallery/10.jpg'
import image80 from '../../Assets/gallery/11.jpg'
import image81 from '../../Assets/gallery/12.jpg'
import image82 from '../../Assets/gallery/13.jpg'
import image83 from '../../Assets/gallery/14.jpg'
import image84 from '../../Assets/gallery/15.jpg'
import image85 from '../../Assets/gallery/16.jpg'
import image86 from '../../Assets/gallery/17.jpg'
import image87 from '../../Assets/gallery/18.jpg'
import video from '../../Assets/gallery/video.mp4'

const Museum = () => {
  // const imageSources = [
  //   {image70},
  //   {image71},
  //   {image72},
  //   "4.jpg",
  //   "5.jpg",
  //   "6.jpg",
  //   "7.jpg",
  //   "8.jpg",
  //   "9.jpg",
  //   "10.jpg",
  //   "11.jpg",
  //   "12.jpg",
  //   "13.jpg",
  //   "14.jpg",
  //   "15.jpg",
  //   "16.jpg",
  //   "17.jpg",
  //   "18.jpg",
  // ];

  const imageSources = [
    { src: image70 },
    { src: image71 },
    { src: image72 },
    { src: image73 },
    { src: image74 },
    { src: image75 },
    { src: image76 },
    { src: image77 },
    { src: image78 },
    { src: image79},
    { src: image80},
    { src: image81},
    { src: image82},
    { src: image83},
    { src: image84},
    { src: image85},
    { src: image86},
    { src: image87},
  ];

  const { language } = useSelector((state) => state.language);
  const museumd = jsondata[language]?.museums || [];

  // const [shuffledImages, setShuffledImages] = useState(imageSources);

  // const shuffleImages = () => {
  //   const shuffled = [...shuffledImages];
  //   const randomIndex = Math.floor(Math.random() * shuffled.length);
  //   const firstImage = shuffled.shift();
  //   shuffled.splice(randomIndex, 0, firstImage);
  //   setShuffledImages(shuffled);
  // };

  // useEffect(() => {
  //   const interval = setInterval(shuffleImages, 1500);
  //   return () => clearInterval(interval);
  // }, [shuffledImages]);

 
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
        {/* <p style={{ fontSize: "1.2rem", marginTop: "0.5rem", fontWeight: "300" }}>
          {language === "tamil"
            ? "தமிழ் இசையின் பண்புகளை பாதுகாத்தல்"
            : "Preserving the rich heritage of Tamil music"}
        </p> */}
      </header>

      <main style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
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

        <section
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
            {imageSources.map((item, index) => (
              <div
                key={index}
                style={{
                  overflow: "hidden",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "opacity 0.5s ease-in-out",
                  opacity: 1,
                  animation: `fadeIn 1s ease-in-out`,
                }}
              >
                <img
                  src={item.src}
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
