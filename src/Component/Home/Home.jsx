import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import homeData from "../../Data/Data.json";
import { Link } from "react-router-dom"; 

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const slides = [
    {
      title: "Explore the World of",
      spatitile: "Our Graduates",
      description: "",
      buttonLink: "about.html",
      Image: require("../../Assets/banner/slider_01.jpg"),
    },
    {
      title: "Join the Journey of",
      spatitile: "Innovation",
      description:
        "Experience the pinnacle of technology and creativity with us.",
      buttonLink: "services.html",
      Image: require("../../Assets/banner/slider_02.jpg"),
    },
    {
      title: "Build Your",
      spatitile: "Dream Career",
      description: "Empower your future with our world-class education.",
      buttonLink: "career.html",
      Image: require("../../Assets/banner/slider_03.jpg"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const margazhiSpecial = homeData[language]?.home[0]?.margazhispecial || [];
  const categorys = homeData[language]?.home[1]?.margazhispecial || [];
  const head = homeData[language]?.cardtitle || [];

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {slides.map((slide, index) => (
            <div
              className="slidei"
              key={index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${slide.Image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
              }}
            >
              {/* Optional content like titles, descriptions, buttons */}
              
            </div>
          ))}
        </div>
      </div>

      {/* Improved Cards Section */}
      {head.map((item, index) => (
  <div className="about" key={index}>
    <div className="container1">
      <ul
        className="row our-links"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          padding: "0",
          listStyleType: "none",
          flexWrap: "wrap", // Allow wrapping on smaller screens
        }}
      >
        {/* Card 1 */}
        <li
          className="col-sm-4 apply-online clearfix equal-hight"
          style={{
            textAlign: "center",
            padding: "30px",
            background: "linear-gradient(135deg, #00A6D6,rgb(53, 81, 110))",
            borderRadius: "12px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            flex: "1 1 calc(33.333% - 20px)", // For desktop view (3 cards in a row)
          }}
        >
          <Link to="/competition-form" style={{ textDecoration: "none" }}>
            <div className="detail">
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  width: "190px",
                  marginLeft: "20px",
                }}
              >
                {item.title1}
              </h3>
            </div>
          </Link>
        </li>

        {/* Card 2 */}
        <li
          className="col-sm-4 prospects clearfix equal-hight"
          style={{
            textAlign: "center",
            padding: "30px",
            background: "linear-gradient(135deg, #FF6A00, #FFA500)",
            borderRadius: "12px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            flex: "1 1 calc(33.333% - 20px)", // For desktop view (3 cards in a row)
          }}
        >
          <Link to="/prospects" style={{ textDecoration: "none" }}>
            <div className="detail">
              <h3
                style={{
                  marginTop: "40px",
                  fontSize: "1.5rem",
                  color: "#fff",
                  fontWeight: "600",
                  marginBottom: "10px",
                  width: "250px",
                  marginRight: "20px",
                  textAlign: "center",
                }}
              >
                {item.title2}
              </h3>
            </div>
          </Link>
        </li>

        {/* Card 3 */}
        <li
          className="col-sm-4 certification clearfix equal-hight"
          style={{
            textAlign: "center",
            padding: "30px",
            background: "linear-gradient(135deg, #00A6D6,rgb(53, 81, 110))",
            borderRadius: "12px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            flex: "1 1 calc(33.333% - 20px)", // For desktop view (3 cards in a row)
          }}
        >
          <Link to="/certification" style={{ textDecoration: "none" }}>
            <div className="detail">
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  fontWeight: "600",
                  marginTop: "40px",
                  textAlign: "center",
                }}
              >
                {item.title3}
              </h3>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </div>
))}

      {/* Margazhi Special */}
      <div className="news-events padding-lg">
        <div className="container1">
          {margazhiSpecial.map((special, index) => (
            <div key={index}>
              <h2
                style={{
                  fontSize: "2.5rem", // Increased font size for the title
                  color: "#00A6D6",
                  fontWeight: "700", // Bold title for emphasis
                  marginBottom: "20px",
                  textAlign: "center",
                  letterSpacing: "1px", // Added letter spacing for better readability
                }}
              >
                <span>{special.title}</span> {special.subtitle}
              </h2>
              <ul className="row cs-style-3">
                {special.card &&
                  special.card.map((card) => (
                    <li
                      key={card.id}
                      className="col-sm-4"
                      style={{
                        listStyle: "none",
                        padding: "15px",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <div className="inner" style={{ position: "relative" }}>
                        <figure
                          className="card-figure"
                          style={{ position: "relative" }}
                        >
                          <img
                            src={card.image}
                            alt={card.cardtitle}
                            className="card-image"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "10px",
                              transition: "transform 0.3s ease",
                            }}
                          />
                          <div
                            className="card"
                            style={{
                              position: "absolute",
                              bottom: "0",
                              left: "0",
                              right: "0",
                              background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
                              color: "#fff",
                              borderRadius: "0 0 10px 10px",
                              padding: "20px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              width: "100%",
                              height: "100px", // Adjusted height for better text spacing
                              boxSizing: "border-box",
                            }}
                          >
                            <h5
                              className="card-title"
                              style={{
                                fontSize: "1.6rem", // Slightly bigger font for the card title
                                fontWeight: "700", // Bold weight for emphasis
                                marginBottom: "8px", // Increased margin for better spacing
                                textShadow:
                                  "2px 2px 5px rgba(0, 0, 0, 0.7)", // Added text shadow for better readability
                              }}
                            >
                              {card.cardtitle}
                            </h5>
                            <h6
                              className="card-content"
                              style={{
                                fontSize: "1.1rem", // Slightly increased font size for better readability
                                lineHeight: "1.6", // Increased line height for a cleaner layout
                                color: "#f1f1f1", // Lighter text color for contrast
                                marginTop: "5px", // Added margin top to create space between title and content
                                letterSpacing: "0.5px", // Added slight letter spacing for better readability
                              }}
                            >
                              {card.cardcontent}
                            </h6>
                          </div>
                        </figure>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Add Media Query for mobile responsiveness */}
      <style jsx>{`
    @media (max-width: 768px) {
      .slidei {
     
        background-size: contain; /* Ensures the entire image fits within the container */
        background-position: center center; /* Centers the image in the container */
      }
    }
  `}</style>
    </>
  );
};

export default Banner;
