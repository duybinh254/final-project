import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import apiConfig from "../../api";
import EmbedVideoTv from "../../component/TV/EmbedVideoTv";
import "./watch.css"
import SimilarColumnTV from "../../component/similar/similarColumnTV";
import TVtrending from "../../component/Slider/tvtrending";

function WatchTV() {
  const { esp, season, id } = useParams();
  const [seasonTv, setSeasonTv] = useState(1);
  const [espTv, setEspTv] = useState(1);
  const [seasonData, setSeasonData] = useState([]);
  const [seasonCurrent, setSeasonCurrent] = useState(Number(season));
  const [espCurrent, setEspCurrent] = useState();
  const [nameTv, setNameTv] = useState();

  useEffect(() => {
    setEspTv(esp);
    setSeasonTv(season);
  }, [esp, season]);

  useEffect(() => {
    setSeasonCurrent(Number(season));
  }, [season, esp]);

  useEffect(() => {
    const getInfoTv = (id) => {
      fetch(`${apiConfig.baseUrl}/tv/${id}?api_key=${apiConfig.apiKey}&language=vi`)
        .then((res) => res.json())
        .then((data) => {
          setSeasonData(data.seasons);
          setNameTv(data.name);
          console.log(data.name);
        });
    };

    getInfoTv(id);
  }, [id]);

  useEffect(() => {
    const getEspCurrent = (id, season, esp) => {
      fetch(
        `${apiConfig.baseUrl}/tv/${id}/season/${season}/episode/${esp}?api_key=${apiConfig.apiKey}&language=vi`
      )
        .then((res) => res.json())
        .then((data) => {
          setEspCurrent(data);
          console.log(data);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getEspCurrent(id, season, esp);
  }, [esp, season, id]);
  document.title = nameTv
  return (
    <div className="container">
      

      <div className="watch-tv-container">
        <div className="watch-wrap">
          <EmbedVideoTv id={id} espTv={esp} seasonTv={season} />
          <div className="watch-movie-info">
          <h1 className="watch-movie-title">{nameTv}</h1>
          <div className='rating'>
                  <StarRatings
                      rating={espCurrent?.vote_average}
                      starRatedColor ="#e74c3c"
                      numberOfStars={10}
                      name="rating"
                      starDimension='20px'
                      starSpacing='2px'



                    />
                
                  <div className='rating-para'>
                  ( {espCurrent?.vote_count} vote )
                  </div>
           
            </div>
          <p className="watch-tv-season">Season {seasonCurrent} |    Episode {espCurrent?.episode_number}</p>
          
          <p>First espisode:   {espCurrent?.air_date}</p>

          <p className="watch-tv-esp-name">{espCurrent?.name}</p>
          <p className="watch-tv-esp-overview">{espCurrent?.overview}</p>
         
      </div>

     

        </div>

        <div className="watch-movie-similar">
                <h3 style={{fontSize:"16px",
                fontWeight:'600',
                            marginBottom:"15px"
              
                }}
                
                
              >Có thể bạn cũng thích </h3>
              <SimilarColumnTV />
               

            </div>

        
      </div>

      <TVtrending />

    </div>
  );
}

export default WatchTV;