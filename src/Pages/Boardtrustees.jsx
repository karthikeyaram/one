import React from "react";
import { useSelector } from "react-redux";
import boardData from "../Data/Data.json";
import "./page.css";
import img1 from '../Assets/head/acmuthiah.jpg';
import img2 from '../Assets/head/plakshmanan.jpg';
import img3 from '../Assets/head/devaki_muthiah.jpg';
import img4 from '../Assets/head/al_vadivelu.jpg';
import img5 from '../Assets/head/ashwin_muthiah.jpg';
import img6 from '../Assets/head/sakthi_thirunakarasu.jpg';
import img7 from '../Assets/head/vali_arun.jpg';
import img8 from '../Assets/head/rm_somasundram.jpg';
import img9 from '../Assets/head/ar_meiyappan.jpg';
import img10 from '../Assets/head/ar_nachiyappan.jpg';

const Boardtrustees = () => {
  const head = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 }
  ];

  const { language } = useSelector((state) => state.language);
  const board = boardData[language]?.board[0] || {};

  return (
    <div className="container1">
      <h1 className="text-center my-4">{board.title || "Board of Trustees"}</h1>
      <div className="row">
        {board.images?.map((member, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card-container">
              <div className="card text-center">
                <div className="card-front">
                  <div className="image-wrapper">
                    <img
                      src={head[index]?.image}
                      alt={`Head of ${member.title}`}
                      className="card-img-top"
                    />
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <h5 className="card-title">{member.title}</h5>
                    {member.subtitle && (
                      <p className="card-text">{member.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boardtrustees;
