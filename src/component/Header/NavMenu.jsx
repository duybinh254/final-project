import {useState} from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {

  
 

  return (
    <ul className="nav-menu">
      <li className="close-icon" >
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
  );
};

export default NavMenu;