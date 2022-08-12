import {useCallback, useEffect, useState} from "react";
import apiConfig from "../../api";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import TVitem from "../../component/TV/TVitem";
import 'boxicons';
const TV = () => {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [movies, setMovies] = useState([]);
    // const [loading, setLoading] = useState(false);
    document.title = "Phim hay | Phim bộ mới nhất"
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    
    

    const getTvShow = useCallback(() => {
      fetch(`${apiConfig.baseUrl}/tv/on_the_air?api_key=${apiConfig.apiKey}&page=${page}&&language=vi`)
        .then((res) => res.json())
        .then((data) => {
          setMovies((prev) => [...prev, ...data.results]);
          setTotalPage(data.total_pages);
          // setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // setLoading(false);
        });
    }, [page]);
  
    useEffect(() => {
      // setLoading(true);
      getTvShow();
    }, [page, getTvShow]);
  
    const LoadMore = () => {
      setPage(page + 1);
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
                paddingLeft:"12px",
                fontWeight:"700"
            }}
            >TV Series</h1>
    
            <div className="grid-layout grid-gap-20px-20px">
            {
              movies?.map((item) => (
                <Link key={item.id} to={`/details/tv/${item.id}`}>
                  <TVitem data={item} />
                </Link>
              ))
            
              
              }
            </div>

            <div className="scrollTop" onClick={scrollTop}>
        <box-icon size="sm" color="white" type="solid" name="to-top"></box-icon>
        
      </div>
            {page < totalPage ? (
            <div onClick={LoadMore} className="load-more">
              <button className="load-more-button">Load More</button>
            </div>
          ) : null}
        </div>
        </section>
    );
  };
  
  export default TV;