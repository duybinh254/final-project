import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../api'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
import Cast from '../../component/cast/castList'
import "bootstrap/dist/css/bootstrap.css"
import "./detail.css"
import 'boxicons';



function Detail() {

  const param = useParams();
  const { media_type, id } = param;
  const [data, setData] = useState({});
  const [trailers, setTrailers] = useState([])
  // const [loading, setLoading] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const getDetailsMovie = (media_type, id) => {
      fetch(`${apiConfig.baseUrl}/${media_type}/${id}?api_key=${apiConfig.apiKey}&language=vi`)
        .then((res) => res.json())
        .then((details) => {
          setData(details);
          console.log(details);
          
          // setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // setLoading(false);
        });
    };

    // setLoading(true);
    getDetailsMovie(media_type, id);
  }, [id, media_type]);
console.log(data.backdrop_path);
console.log(data.genres);


useEffect (() => {
  const getTrailer = (media_type, id) => {
    fetch(`${apiConfig.baseUrl}/${media_type}/${id}/videos?api_key=${apiConfig.apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setTrailers(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getTrailer(media_type, id);
}, [id, media_type]);



  document.title = data.title || data.name;

  return (
    
   <div id='details'>
      <div className='detail'
      style={{
        // lấy ảnh background
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`
      }}
        
      >

      <div className='container'>
        <div className='detail-container'>
        <div className='detail-movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
        </div>
        <div className='detail-movie-info'>
            <h1 className='detail-movie-info-title'>{data.title || data.name}</h1>
            <p className="detail-movie-info-description">{data.overview}</p>
            <p className='detail-movie-release'>
                { data.release_date 
                  ? `Ngày phát hành : ${data.release_date}`
                  : `First episode : ${data.first_air_date}`
                }

            </p>
            <div className='detail-movie-genres'>
                {/* { data.genres.map((item) =>{
                  <button key={item.id} content={item.name} />
                })} */}
                {data.genres &&
                  data.genres.map((item) => (
                    <button className='btn-genres' key={item.id}>{item.name}</button>
                  ))}
            </div>
            <div className='rating'>
                  <StarRatings
                      rating={data.vote_average}
                      starRatedColor ="#e74c3c"
                      numberOfStars={10}
                      name="rating"
                      starDimension='20px'
                      starSpacing='2px'



                    />
                
                  <div className='rating-para'>
                  ( {data.vote_count} vote )
                  </div>
            </div>
            
            <div className='watch'>

            <a className='watch-link watch-trailer' href="#trailer">
                  Watch Trailer
                </a>

                <Link className='watch-link watch-now'
                  to={
                    media_type === "tv" 
                    ? `/watch/tv/${id}/season/1/esp/1`
                    : `/watch/movie/${id}`
                    
                  } 

                  

                >
                  Watch Now
                </Link>
                
            </div>
        </div>

       
        </div>
      </div>
      </div>

<div style={{backgroundColor: "#333"}}>
          <div className='container'>
              <Cast />
          </div>
      </div>


      <div id='trailer'> 
        <div className='container'>
          <div>
            <h3 style={{
              color:"#fff"
            }}>Trailer</h3>
          </div>
            <div className="trailer-content">
              { !trailers.length === 0 ? (
                <h1>Không tìm thấy trailer</h1>
              ) : (
                trailers.slice(0,5).map((trailer) => (
                 
                  <div key={trailer.id} className="trailer-video">
                <h1 className="trailer-name">{trailer.name}</h1>
                <iframe
                  style={{
                    height: "100%",
                    aspectRatio:"2/1"
                  }}
                  width="100%"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="fullscreen"
                />
              </div>
                ))
              )

              }
            </div>
        </div>

      </div>
      
      <div className="scrollTop" onClick={scrollTop}>
        <box-icon size="sm" color="white" type="solid" name="to-top"></box-icon>
        
      </div>       
      
   </div>
  )
}

export default Detail