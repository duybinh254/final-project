import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState, useEffect } from "react";
import TVitem from "../TV/TVitem";
import { Link } from "react-router-dom";
import apiConfig from "../../api";
import "bootstrap/dist/css/bootstrap.css"
import useInnerWidth from "../Width"
import "./slider.css"


const TVtrending  = ({ type }) => {
  SwiperCore.use([Navigation])
    const [movie, setMovie] = useState([]);

    const [loading, setLoading] = useState(true);

    const width = useInnerWidth()
    console.log(width);
    let item ;

    if (width >= 1024) {
      item = 5;
    } else if (width < 1024 && width >= 740) {
      item = 4;
    } else if (width < 740 && width >= 500) {
      item = 3;
    } else {
      item = 2;
    }

    useEffect(() => {
      const getMovie = () => {
        fetch(
          // type === "trending"
             `${apiConfig.baseUrl}/trending/tv/week?api_key=${apiConfig.apiKey}`
            // : `${apiConfig.baseUrl}/movie/${type}/?api_key=${apiConfig.apiKey}`
            
        )
          .then((res) => res.json())
          .then( (data) => {
             setMovie(data.results);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      };
  
      setLoading(true);
      getMovie();
    }, [type]);
  
    return (
      <section id="movie">
        <div className="container new-movies">
        
        <div className="title">
          <h3>TV Trending</h3>
          <Link to={`/TV/${type}`}>
            <button className="btn-more">View more</button> 
          </Link>
        </div>
       
        
     
      <Swiper
      navigation
      grabCursor={true}
      spaceBetween={20}
      slidesPerView={item} >

          {!loading ? (
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/details/TV/${item.id}`}>
                <TVitem data={item} />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <div className="grid-layout grid-gap-20px-20px">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </Swiper>
      </div>

      </section>
    );
  };



export default TVtrending

