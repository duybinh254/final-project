import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Header() {
  const headerRef = useRef(null);
  // const overlayRef = useRef(null);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () =>{
       setSidebar(true);
      
  } ;
  const closeSidebar = () => setSidebar(false) ;


  const navigate = useNavigate()
  

  const handleClickLogin = () => { 
    navigate("/login")
  }

  useEffect(() => {
    const handleFixedHeader = () => {
      const header = headerRef.current;
      // console.log(header);
      const sticky = header.offsetTop;
      // console.log(sticky);

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
        className="header-list" >
        <Link to="/" className="header-logo">
          <span>PHIMHAY</span>
        </Link>

       
        <ul className="nav-menu-pc">
        <li>
        <NavLink activeclassname="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink  activeclassname="active" to="/movies">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/tv_series">
          TV Series
        </NavLink>
      </li>
        </ul>
        <nav className= {sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item">
      <li className="close-icon" onClick={closeSidebar} >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>{" "}
              </span>
            </li>
      <li>
        <NavLink activeclassname="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink  activeclassname="active" to="/movies">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/tv_series">
          TV Series
        </NavLink>
      </li>
    </ul>

        </nav>
      </div>
    
      <div className="header-info">
        <Link to="/favorite" className="header-heart">
          <button className="btn-heart"><FaIcons.FaHeart /> </button>
        </Link>
        <Link to="/search" className="header-search">
          <button className="btn-search"><FaIcons.FaSearch /></button>
        </Link>
        
        
          <div className="sign-in">
              <button onClick={handleClickLogin} className="btn-sign-in">Sign in</button>


                    
          </div> 
          <div className="navbar-mobile">
          <span className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </span>
      </div>
      </div>
      
    </div>
  );
}

export default Header;
