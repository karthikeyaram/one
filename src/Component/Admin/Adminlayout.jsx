import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import {Routes,Route,useNavigate} from "react-router-dom";       
import './Admin.css';
import Staffdetails from "./Staffdetails";

const Adminlayout = () => {


  const [menuItems] = useState([
    {
      title: "Dashboard",
      path: "admin",
    },
    {
      title: "User Details",
      path: "userdetails",
    },
    {
      title: "All Details",
      submenu: [
        { title: "Payment Details", path: "paymentdetails" },
        {
          title: "Transaction Details", path: "tansaction",
        }, { title: "Audio File", path: "audiofile", },
        {
          title: "Register Course", path: "registercourse",
        },
      ],
    },

    {
      title: "Upload",
      submenu: [
        { title: "Gallery Upload", path: "galleryupload" },
        { title: "Image/Video Upload", path: "imageupload" },
      ],
    },
    {
      title: "Add Course",
      path: "addcourse",
    },
    {
      title: "Add Fee structure for Course",
      path: "addfeecourse",
    },
    {
      title: "Student Registered Course Details",
      path: "couse details",
    },
    {
      title: "Staff Details",
      path: "staffdetails",
    },
    {
      title: "Contact us enquiy Details",
      path: "exquiery",
    }
  ]);


  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
        <Topbar />
        <div className="main d-flex">
          <div className="sidebarwrapper">
            <Sidebar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<Staffdetails/>}/>
            </Routes>
          </div>
        </div>
    </>
  );
};

export default Adminlayout;
