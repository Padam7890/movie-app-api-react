import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

import Search from "../Components/Search";

const Sidebar = () => {
  return (
    <>
      <div className="preheader">
         <div className="logo">
             <p>Movies</p>
         </div>
         <div className="search">
             <Search/>
           
         </div>
      </div>
      <div className="container">
        <div className="navbar-cont">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="/trending" className="text-xl">
            Trending
          </Link>
          <Link to="/coming-soon" className="text-xl">
            Comming Soon
          </Link>
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
