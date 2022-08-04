import React, { useEffect, useState } from "react";
import apiConfig from "../../api"
import { Link } from "react-router-dom";
import"./banner.css"

const Banner = () => {
    const [banner, setBanner] = useState();
  
    useEffect(() => {
      function getBanner() {
        fetch(`${apiConfig.baseUrl}/trending/movie/week?api_key=${apiConfig.apiKey}&language=vi`)
          .then((res) => res.json())
          .then((data) => {
            const random = Math.floor(Math.random() * 20);          
  console.log(data);
            setBanner(data.results[random]);
          })
          .catch((err) => console.log(err));
      }
      
      getBanner();
    }, []);
    const image= `url(https://image.tmdb.org/t/p/original${banner?.backdrop_path})`
    console.log(image);
    console.log(banner);
    return (
      <div
        className="banner"
        style={{
          // lấy ảnh background
          backgroundImage: `url(https://image.tmdb.org/t/p/original${banner?.backdrop_path})`,
        }}
      >
        <div className="banner-content">
          <div className="banner-info">
            <h1 className="banner-info-title">{banner?.title}</h1>
            <p className="banner-info-overview">{banner?.overview}</p>
            <div className="banner-button">
              
              <Link
                to={`/details/movie/${banner?.id}`}
                className="banner-button-link"
              >
                View Info
              </Link>
              <Link
                to={`watch/movie/${banner?.id}`}
                className="banner-button-link btn-watch"
              >
                Watch Now
              </Link>
            </div>
          </div>
          <div className="banner-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${banner?.poster_path}`}
              alt={banner?.title}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;