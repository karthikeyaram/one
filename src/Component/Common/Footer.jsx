import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "../../Assets/css/Custom.css";
import { useSelector } from "react-redux";
import footData from "../../Data/Data.json";

const Footer = () => {
  const { language } = useSelector((state) => state.language);
  const footer = footData[language]?.footers || [];

  const footerData = {
    socialLinks: [
      {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/people/Tamil-Isai-Kalloori-Tamil-Isai-Sangam/100064832676981",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: <FaYoutube />,
        link: "https://www.youtube.com/channel/UCc52PkQqepI__b2vjg-dOkQ",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/tamil_isai_kalloori?igshid=rzk92bvhobqq",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: <FaPinterest />,
        link: "https://in.pinterest.com/tamilisaisangam/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  };

  return (
    <footer
      className="footer"
      style={{
      
        color: "white",
      }}
    >
      {/* Footer Bottom */}
      <div className="bottom">
        <div className="container1">
          <div className="row">
            {/* Connect with Us Section */}
            <div className="col-sm-4">
              <div className="connect-us">
                <h3>Connect with Us</h3>
                <ul className="follow-us clearfix">
                  {footerData.socialLinks.map((social, idx) => (
                    <li key={idx}>
                      <a href={social.link} target={social.target} rel={social.rel}>
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {footer.map((footerItem, index) => (
                <div key={index}>
                  {footerItem.titles.map((titleItem, titleIndex) => (
                    <div className="foot" key={titleIndex}>
                      <h3>{titleItem.title}</h3>
                      <h3 style={{ fontSize: "13px" }}>{titleItem.title1}</h3>
                      <h3>{titleItem.title2}</h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Address and Map Section */}
            <div className="col-sm-8" style={{ display: "flex", gap: "30px" }}>
              {/* Address Box */}
              <div
                className="address"
                style={{
                  marginTop:"20px",
                  backgroundColor: " rgba(38, 188, 207, 0.1)",
                  padding: "20px",
                  color:"white",
                fontSize:"900px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  flex: 1,
                }}
              >
                <h3>Our Address</h3>
                <div className="address-details" style={{color:"white" }}>
                  <p style={{color:"white"}}>
                    <strong>தமிழ் இசைச் சங்கம்</strong>
                    <br />
                    இராஜா அண்ணாமலை மன்றம்,
                    <br />
                    5, எஸ்பிளனேடு சாலை,
                    <br />
                    சென்னை, தமிழ் நாடு 600 108
                    <br />
                    +91 94449 25880 / 92822 35964
                    <br />
                    +91 44 2534 1958 / 2955 0107
                    <br />
                    <a href="mailto:info@tamilisaisangam.in" style={{color:"white"}}>
                      info@tamilisaisangam.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Map Section */}
              <div
                className="map"
                style={{
                  flex: 1,
                  height: "230px",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <h3>Find Us Here</h3>
                <div className="map-container" style={{ height: "140%" }}>
                  <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.1979599529645!2d80.27544!3d13.086637000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f53a6aaac27%3A0x3340167f0f9bd3c7!2sRaja%20Annamalai%20Mandram!5e0!3m2!1sen!2sus!4v1735040443215!5m2!1sen!2sus"
                    width="130%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
