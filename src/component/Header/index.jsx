import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import NavMenu from "./NavMenu";
import NavUser from "./NavUser";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

function Header() {
  const headerRef = useRef(null);

  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleFixedHeader = () => {
      const header = headerRef.current;
      const sticky = header.offsetTop;

      if (header) {
        //window.pageYOffset : trả về số pixel mà document đã được cuộn theo phương Y
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleFixedHeader);

    return () => window.removeEventListener("scroll", handleFixedHeader);
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div
        className="header-list"
        // style={{
        //   top: showMenu ? "0%" : "-100%",
        // }}
      >
        <Link to="/" className="header-logo">
          <span>PHIMHAY</span>
        </Link>

        <NavMenu />
      </div>
      
      <div className="header-info">
        <div className="header-search">
          <input
            className="input-search"
            type="text"
            placeholder="Tìm kiếm phim"
          />

          <button className="btn-search">Search</button>
        </div>
        
        {/* {user ? (
            <NavUser user={user} />
          ) : (
            <Link
              to="/login"
              className={`bnt-login ${loading ? "disabled-link" : ""}`}
            >
              Sign in
            </Link>
          )} */}
          <div className="sign-in">
              <button className="btn-sign-in">Sign in</button>
          </div> 
          
      </div>
      <div className="navbar-mobile">
          <Link to="/" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
      </div>
       
    </div>
  );
}

export default Header;
