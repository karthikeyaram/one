import React from 'react';
import { MdDashboard } from "react-icons/md";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <button className="btn ">
              <span className="icon"><MdDashboard/>
              </span>
              Dashboard
              <span className="arrow">
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;