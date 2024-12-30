import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import "./Admin.css";
import Staffdetails from "./Staffdetails";
import Dashboard from "./Dashboard";
import Userdetails from "./Userdetails";
import Galleryupload from "./Galleryupload";
import Imagevideoupload from "./Imagevideoupload";
import Addcourse from "./Addcourse";
import Addstaff from "./Addstaff";
import Paymentdetails from "./Paymentdetails";
import Transactiondetails from "./Transactiondetails";

const Adminlayout = () => {
  const [menuItems] = useState([
    {
      title: "Dashboard",
      path: "dashboard",
    },
    {
      title: "User Details",
      path: "userdetails",
    },
    {
      title: "All Details",
      submenu: [
        { title: "Payment Details", path: "paymentdetails" },
        { title: "Transaction Details", path: "tansactiondetails" },
        { title: "Audio File", path: "audiofile" },
        { title: "Register Course", path: "registercourse" },
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
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="admin-layout">
      <Topbar />
      <div className="dashboard-container">
        <Sidebar menuItems={menuItems || []} />
        <div className="main-content">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userdetails" element={<Userdetails />} />
            <Route path="staffdetails" element={<Staffdetails />} />
            <Route path="galleryupload" element={<Galleryupload />} />
            <Route path="imageupload" element={<Imagevideoupload />} />
            <Route path="addcourse" element={<Addcourse/>} />
            <Route path="staffdetails" element={<Staffdetails/>} />
            <Route path="staffdetails/addstaff" element={<Addstaff/>} />
            <Route path="editstaff:id" element={<Addstaff/>} />
            <Route path="paymentdetails" element={<Paymentdetails/>} />
            <Route path="tansactiondetails" element={<Transactiondetails/>} />


          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;