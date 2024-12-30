body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  .dashboard-container {
    display: flex;
  }
  
  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    color: rgb(0, 0, 0);
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
  
  .sidebar .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .sidebar .logo img {
    width: 235px; /* Adjust the logo size */
    height: auto;
    border-radius: 10px; /* Optional: Rounded corners */
    margin-bottom: 10px; 
    
  }
  .sidebar .menu-item:hover {
    background-color: #7e7e7e;
  }
  
  .sidebar .menu-item a.active {
    background-color: rgb(109, 109, 109);
    color: white;
  }
  .sidebar .dropdown {
    padding-left: 15px;
  }
  
  .sidebar .dropdown .menu-item {
    padding: 8px 15px;
  }
  .sidebar .dropdown .menu-item a.active {
    background-color: rgb(158, 158, 158);
    color: white;
  }
  
  .sidebar .dropdown .menu-item:hover {
    background-color: #e9ecef;
  }
  
  .sidebar .logo h2 {
    font-size: 20px;
    margin: 0;
    color: rgb(255, 255, 255);
  }
  
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar .menu-item {
    padding: 15px;
    cursor: pointer;
  }
  
  .sidebar .menu-item a {
    text-decoration: none;
    color: rgb(0, 0, 0);
  }
  
  .sidebar .dropdown {
    margin-left: 20px;
    list-style: none;
  }
  
  .topbar {
    background-color: #34495e;
    color: white;
    padding: 15px;
    position: fixed;
    width: calc(100% - 250px);
    left: 250px;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .main-content {
    margin-left: 250px;
    margin-top: 60px;
    padding: 20px;
  }
  .sidebar .dropdown {
    margin-left: 20px;
  }
  
  /* Keep the submenu hidden, only show when the corresponding index is active */
  .sidebar .menu-item.active .dropdown {
    display: block;
  }
  .main-content {
    padding: 20px;
    overflow-y: auto;
    height: calc(100vh - 50px); /* Ensure space for the top bar */
  }

  /* -----------sidebar------------ */
  
.dashboard-container {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #ebebeb;
  color: rgb(0, 0, 0);
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.main-content {
  margin-left: 250px;
  margin-top: 60px;
  padding: 65px;
  display: flex;
  flex-direction: column;
  width: 1200px;

}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ebebeb;
  color: rgb(0, 0, 0);
  height: 80px;
  padding: 0 20px;
  position: fixed;
  width: calc(100% - 250px);
  left: 250px;
  top: 0;
  z-index: 1000;
}

.topbar .notifications,
.topbar .messages {
  cursor: pointer;
}

.topbar .icon {
  font-size: 20px;
}

.topbar .profile-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.topbar .profile-icon {
  font-size: 24px;
  margin-right: 10px;
}

.topbar .admin-name {
  font-size: 16px;
  font-weight: bold;
}

.topbar .dropdown-menu {
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  list-style: none;
 
}

.topbar .dropdown-menu li {
  padding: 5px 10px;
}

.topbar .dropdown-menu li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.topbar .dropdown-menu li a:hover {
  background-color: #797979;
  color: white;
}

.topbar .dropdown-menu li a svg {
  margin-right: 8px;
}

.topbar .profile-dropdown:hover .dropdown-menu {
  display: block;
}

/* -----imageupload----- */
.gallery-upload-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.input-group {
  width: 100%;
  margin-bottom: 15px;
}

.input-group label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

.input-group input {
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
}

.input-group input:focus {
  border-color: #007bff;
  outline: none;
}

.image-preview-container {
  width: 50%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.image-preview {
  max-width: 20%;
  max-height: 200px;
  border-radius: 5px;
  object-fit: cover;
}

.image-placeholder {
  width: 100%;
  height: 130px;
  border: 1px dashed #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
}

.upload-button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 50%;
  margin-top: 20px;
}

.upload-button:hover {
  background-color: #0056b3;
}

.upload-button:active {
  background-color: #003f7f;
}

/* ------------- */
/* -----------addcourse----------- */
.course-form {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px; /* Spacing between columns and rows */
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Full-width elements spanning both columns */
.form-group.full-width {
  grid-column: span 2; /* Span across both columns */
}

.submit-btn {
  grid-column: span 2; /* Center submit button */
  background-color: #2980b9;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-self: center; /* Center align button */
}

.submit-btn:hover {
  background-color: #1e6a8a;
}



// ------------////


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/img/logo_new.jpg";

const Sidebar = ({ menuItems = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const handleMenuClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle submenu visibility
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${openIndex === index ? "open" : ""}`}
          >
            {item.submenu ? (
              <>
                <span onClick={() => handleMenuClick(index)}>
                  {item.title}
                </span>
                {openIndex === index && (
                  <ul className="dropdown">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`menu-item ${
                          location.pathname === `/admin/${subItem.path}`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link to={`/admin/${subItem.path}`}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={`/admin/${item.path}`}
                className={location.pathname === `/admin/${item.path}` ? "active" : ""}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;



// --------------//
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
        { title: "Transaction Details", path: "tansaction" },
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

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;


// ------------//
import React from "react";
import { FaBell, FaEnvelope, FaUserCircle, FaCog, FaQuestionCircle, FaLock, FaSignOutAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="notifications">
        <FaBell className="icon" />
      </div>
      <div className="messages">
        <FaEnvelope className="icon" />
      </div>
      <div className="profile-dropdown">
        <FaUserCircle className="profile-icon" />
        <span className="admin-name">Admin Name</span>
        <ul className="dropdown-menu">
          <li>
            <a href="/profile">
              <FaUserCircle /> Profile
            </a>
          </li>
          <li>
            <a href="/settings">
              <FaCog /> Settings
            </a>
          </li>
          <li>
            <a href="/help">
              <FaQuestionCircle /> Help
            </a>
          </li>
          <li>
            <a href="/logout">
              <FaSignOutAlt /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
