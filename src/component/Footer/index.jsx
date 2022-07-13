import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import "./footer.css";
import { facebook } from "react-bootstrap-icons";
import "@fortawesome/fontawesome-free/css/all.min.css"

function Footer() {
  return (
    <section id="footer">
      <div className="container ">
        <div className="row footer">
          <div className="col-lg-4 col-md-4 col-12 logo">
            <a href="/">
              <h3>PHIMHAY</h3>
            </a>
            <p className="follow-me logo-para">Xem phim mới miễn phí nhanh chất lượng cao. Xem Phim online Việt Sub, Thuyết minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất lượng cao</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12 sub-menu">
            <h5>Quick Link</h5>
            <ul className="ul-menu">
              <li>
                <Link activeclassname="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link activeclassname="active" to="/movies">
                  Movies
                </Link>
              </li>
              <li>
                <Link activeclassname="active" to="/tv_series">
                  TV Series
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-12 social">
            <h5>Follow Us</h5>
            <div className="follow-info">
            <p className="follow-me">Theo dõi ngay để nhận ngay thông báo mới nhất tại:</p>
            <div className="footer-icon">
              <span>
              <i class="fa-brands fa-facebook-square"></i>
              </span>
              <span>
              <i class="fa-brands fa-instagram"></i>
              </span>
              <span style={{color:"#e74c3c"}}><i class="fa-brands fa-twitter"></i></span>
            </div>
            </div>
          </div>
        </div>
        <div className="copy">
            <p className="footer-para">Copyright 2022 PHIMHAY by <mark>BDB</mark></p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
