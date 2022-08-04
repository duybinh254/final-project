import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState, useEffect } from "react";
import MovieItem from "../Movies/movieItem";
import { Link } from "react-router-dom";
import apiConfig from "../../api";
import "bootstrap/dist/css/bootstrap.css"
import useInnerWidth from "../Width"

const SliderPopular  = ({ type }) => {
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
            `${apiConfig.baseUrl}/movie/popular?api_key=${apiConfig.apiKey}&language=vi` 
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
            <Link to={`movies`}>
            <h3>Movie Popular</h3>
            </Link>
            <Link to={`/movies`}>
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
                <Link to={`/details/movie/${item.id}`}>
                  <MovieItem data={item} />
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
  
  
  
  export default SliderPopular