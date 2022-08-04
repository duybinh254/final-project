import MovieItem from "../../component/Movies/movieItem";
import {useCallback, useEffect, useState} from "react";
import apiConfig from "../../api";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import 'boxicons';
// import InfiniteScroll from 'react-infinite-scroll-component';


const Movies = () => {
const [page, setPage] = useState(1)
const [totalPage, setTotalPage] = useState()
const [movie, setMovie] = useState([])
const [loading, setLoading] = useState(false);

document.title = "Phim hay | Phim lẻ mới nhất"
const fetchMovie = useCallback(() => {
    fetch (`${apiConfig.baseUrl}/movie/upcoming?api_key=${apiConfig.apiKey}&language=vi&page=${page}`)
    .then(response => response.json())
    .then(data => {
        setMovie((prev) =>[...prev, ...data.results])
        setTotalPage(data.total_pages)
        console.log(data.total_pages);
        setLoading(false)
    })
    .catch((err) => {
        setLoading(false);
        console.log(err);
      });
},[page])


  const scrollTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

useEffect(() => {
    setLoading(true);
    fetchMovie()
},[page, fetchMovie])

const LoadMore =() => {
    
    setPage(page + 1)
    
};

return (
    <section id="movies" style={{
        backgroundColor:"#333",
        
    }}>
        
        <div className="container" style={{
            paddingTop:"80px"
        }}>
        <h1
        style={{
            color: 'white',
            fontSize:"20px",
            marginBottom:"20px",

            fontWeight:"700"
        }}
        >Movies</h1>

        <div className="grid-layout grid-gap-20px-20px">
        {!loading ? (
          movie?.map((item) => (
            <Link key={item.id} to={`/details/movie/${item.id}`}>
              <MovieItem data={item} />
            </Link>
          ))
        ) : (
            <div> 
                    
                    <div></div>
            </div>
        )
          
          }
        </div>

        <div className="scrollTop" onClick={scrollTop}>
        <box-icon size="sm" color="white" type="solid" name="to-top"></box-icon>
        
      </div>

      {
        page < totalPage ? (
        <div  className="load-more">
          <button onClick={LoadMore} className="load-more-button">Load More</button>
        </div>
      ) : null
      }
    </div>
    </section>

)
}

export default Movies