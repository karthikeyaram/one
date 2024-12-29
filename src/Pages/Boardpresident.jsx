import React from "react";
import { useSelector } from "react-redux";
import presidentdata from "../Data/Data.json"
import img1 from '../Assets/head/sundaramoorthi_bg.jpg'
import img2 from '../Assets/head/gokulakrishnan.jpg'
import img3 from '../Assets/head/sriram.jpg'
import img4 from '../Assets/head/chidambaram_chettiar.jpg'
import img5 from '../Assets/head/magarajan.jpg'
import img6 from '../Assets/head/narayana_swamy_pillai.jpg'
import img7 from '../Assets/head/rathinasabapathy_mudaliar.jpg'
import img8 from '../Assets/head/shanmugam_chettiar.jpg'
import img9 from '../Assets/head/muthiah_chettiar.jpg'
import img10 from '../Assets/head/annamalai_chettiar.jpg'

const Boardpresident = () => {
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
  const president = presidentdata[language]?.presidents[0] || {};

  return (
    <>
      <div className="container1">
        <h1 className="text-center my-4">
          {president.title || "Board of Trustees"}
        </h1>
        <div className="row">
          {president.images?.map((member,index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={member.index}>
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
    </>
  );
};

export default Boardpresident;
