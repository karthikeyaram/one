import React from "react";
import { useSelector } from "react-redux";
import gusedata from "../Data/Data.json";

const Chiefguest = () => {
  const { language } = useSelector((state) => state.language);
  const tabled = gusedata[language]?.guest || [];
  const guest = gusedata[language]?.guest1 || [];

  return (
    <>
      <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            {tabled.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                  <h3 style={{ textAlign: "center" }}>{item.title1}</h3>
                  {item.para.map((paras, idx) => (
                    <div key={idx} className="col-md-12">
                      <p>{paras}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-md-12">
                <div className="tables-wrapper">
                  {/* First table column */}
                  <div className="table-container">
                    {tabled.map((item, index) => (
                      <div key={index} className="table-wrapper">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>{item["s.no"]}</th>
                              <th>{item.title}</th>
                              <th>{item.title3}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.data &&
                              item.data.map((dataItem, idx) => (
                                <tr key={idx}>
                                  <td>{dataItem.no}</td>
                                  <td>{dataItem.name}</td>
                                  <td>{dataItem.period}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>

                  {/* Second table column */}
                  <div className="table-container">
                    {guest.map((item, index) => (
                      <div key={index} className="table-wrapper">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>{item["s.no"]}</th>
                              <th>{item.title}</th>
                              <th>{item.title3}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.data &&
                              item.data.map((dataItem, idx) => (
                                <tr key={idx}>
                                  <td>{dataItem.no}</td>
                                  <td>{dataItem.name}</td>
                                  <td>{dataItem.period}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .tables-wrapper {
            display: block; // Stack tables vertically for smaller screens
            overflow: hidden;
          }

          .table-container {
            width: 100% !important;
            margin-bottom: 20px;
          }

          .table-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
            margin-bottom: 15px;
            border-radius: 5px; // Ensure no border clipping
            padding-bottom: 10px; // Add some space below the table
            border: 1px solid #ddd; // Add border to prevent table collapse
          }

          table {
            width: 100% !important;  // Ensure table uses full width in mobile
            font-size: 12px;  // Adjust font size for mobile view
            table-layout: fixed; // Prevent table layout shifting
          }

          thead th, tbody td {
            font-size: 12px; // Adjust font size for readability
            text-align: left;
          }

          // Ensures that the table cells are aligned correctly and avoid collapsing.
          th, td {
            padding: 10px;
          }

          // Ensure no horizontal scroll
          .table-wrapper {
            overflow-x: hidden;
          }
        }

        @media (min-width: 769px) {
          .tables-wrapper {
            display: flex; // Display tables side by side on larger screens
            justify-content: space-between;
          }

          .table-container {
            width: 48%;
            margin-bottom: 20px;
          }

          .table-wrapper {
            overflow-x: auto;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Chiefguest;
