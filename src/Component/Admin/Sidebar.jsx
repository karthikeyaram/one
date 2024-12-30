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