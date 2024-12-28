import React from "react";
import { useSelector } from "react-redux";
import pandata from "../Data/Data.json";

const Pannresearch = () => {
  const { language } = useSelector((state) => state.language);
  const president = pandata[language]?.panresearch || [];
  const table = pandata[language]?.table || []; 
  const tabled = pandata[language]?.table2 || [];

  return (
    <div className="about inner padding-lg">
      <div className="container1">
        <div className="row">
          {president.map((item, index) => (
            <div className="col-md-12" key={index}>
              <div className="row">
                <div className="col-md-5">
                  <div className="video-block">
                    <img
                      src={item.head1?.thumbnail}
                      alt="Video Thumbnail"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <h2>{item.content?.title}</h2>
                  {item.content?.paragraphs?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <div className="col-md-12">
                  {item.content?.para?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* First Table */}
          <div className="col-md-6 table-container" style={{ marginBottom: "20px" }}>
            {table.map((item, index) => (
              <div key={index} className="table-wrapper">
                <div
                  style={{
                    overflowX: "auto",  // Horizontal scrolling for mobile view
                    maxWidth: "100%",  // Ensure the table fits inside the container
                    marginBottom: "15px", // Add space between tables
                  }}
                >
                  <table
                    className="table table-bordered"
                    style={{
                      width: "100%", // Ensure full width of the table container
                      tableLayout: "auto", // Auto layout for table columns
                    }}
                  >
                    <thead>
                      <tr>
                        <th>{item["s.no"]}</th>
                        <th>{item.title}</th>
                        <th>{item.title2}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.data.map((dataItem, idx) => (
                        <tr key={idx}>
                          <td>{dataItem.no}</td>
                          <td>{dataItem.name}</td>
                          <td>{dataItem.subname}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Second Table */}
          <div className="col-md-6 table-container" style={{ marginBottom: "20px" }}>
            {tabled.map((item, index) => (
              <div key={index} className="table-wrapper">
                <div
                  style={{
                    overflowX: "auto",  // Horizontal scrolling for mobile view
                    maxWidth: "100%",  // Ensure the table fits inside the container
                    marginBottom: "15px", // Add space between tables
                  }}
                >
                  <table
                    className="table table-bordered"
                    style={{
                      width: "100%", // Ensure full width of the table container
                      tableLayout: "auto", // Auto layout for table columns
                    }}
                  >
                    <thead>
                      <tr>
                        <th>{item["s.no"]}</th>
                        <th>{item.title}</th>
                        <th>{item.title2}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.data.map((dataItem, idx) => (
                        <tr key={idx}>
                          <td>{dataItem.no}</td>
                          <td>{dataItem.name}</td>
                          <td>{dataItem.subname}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Media Queries for Mobile Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .col-md-6 {
            width: 100% !important;  // Stack tables in mobile view
            padding-left: 0;
            padding-right: 0;
          }

          .table-container {

            margin-bottom: 20px; // Space between tables
          }

          table {
            width: 100% !important;  // Ensure table uses full width in mobile
            font-size: 5px; // Adjust font size for mobile view
          }

          thead th, tbody td {
           font-size: 8px; 
            text-align: left; // Align text to the left for readability
          }

          .table-wrapper {
            overflow-x: auto;  // Ensure horizontal scrolling
            -webkit-overflow-scrolling: touch; // Smooth scrolling for iOS
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Pannresearch;
