import { useState, useEffect } from "react";
import StarRatings from 'react-star-ratings';
import EmbedVideoMovie from "../../component/embedVideo/EmbedVideoMovie";
import apiConfig from "../../api";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./watch.css"
import Similar from "../../component/similar/Similar";
import SimilarColumn from "../../component/similar/similarColumn";

function WatchMovie () {
    const params = useParams();

  const [info, setInfo] = useState({});

  const { id } = params;

  useEffect(() => {
  
    const getInfo = (id) => {
        fetch(`${apiConfig.baseUrl}/movie/${id}?api_key=${apiConfig.apiKey}&language=vi `)
          .then((res) => res.json())
          .then((data) => setInfo(data));
          
      };
  
      getInfo(id);

    },[id])

    document.title = info.title
    return(
        <div id="watch-movie-page">
            <div className="container">
            <div className="watch-movie-container">
                <div className="watch-wrap">
                <EmbedVideoMovie id={id} />
                <div className="watch-movie-info">
                <h1 className="watch-movie-title">{info.title}</h1>
                <p className="watch-movie-release">Ngày phát hành :  {info.release_date}</p>
                <div className='rating'>
                  <StarRatings
                      rating={info.vote_average}
                      starRatedColor ="#e74c3c"
                      numberOfStars={10}
                      name="rating"
                      starDimension='20px'
                      starSpacing='2px'



                    />
                
                  <div className='rating-para'>
                  ( {info.vote_count} vote )
                  </div>
           
            </div>
                <div className='detail-movie-genres'>
                {/* { data.genres.map((item) =>{
                  <button key={item.id} content={item.name} />
                })} */}
                {info.genres &&
                  info.genres.map((item) => (
                    <button className='btn-genres' key={item.id}>{item.name}</button>
                  ))}
            </div>
                <p className="watch-movie-description">{info.overview}</p>
                
                
            
            </div>
                </div>
            <div className="watch-movie-similar">
                <h3 style={{fontSize:"16px",
                fontWeight:'600',
                            marginBottom:"15px"
              
                }}
                
                
                >Có thể bạn cũng thích </h3>
                <SimilarColumn />

            </div>
            </div>
            
            <Similar />
        </div>
        </div>

    )
}

export default WatchMovie