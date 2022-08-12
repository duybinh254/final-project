import  { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MovieItem from "../../component/Movies/movieItem";
import apiConfig from "../../api";
import "./search.css"


function SearchResults() {


    const location = useLocation();  //lấy thông tin URL
    console.log(location);
    const paramsString = location.search  
    const searchParams = new URLSearchParams(paramsString)  
    const keyword = searchParams.get("q");
  
    const [results, setResults] = useState([]);
  
    const [page, setPage] = useState(1);
  
    const [totalPage, setTotalPage] = useState();
  
    
  
    const LoadMore = () => {
      setPage(page + 1);
    };
  
    const searchKeywordforUser = useCallback(
      (keyword) => {
        if (keyword.trim() === "") return;
        fetch(
          `${apiConfig.baseUrl}/search/multi?api_key=${apiConfig.apiKey}&query=${keyword}&page=${page}`
        )
          .then((res) => res.json())
          .then((data) => {
            setTotalPage(data.total_pages);
            console.log(setTotalPage(data.total_pages));
            setResults((prev) => [...prev, ...data.results]); 
            console.log(data.results);            
          })
          .catch((err) => {
            console.log(err);
           
          });
      },
      [page]
    );
  
    useEffect(() => {
     
      searchKeywordforUser(keyword);
    }, [page, keyword, searchKeywordforUser]);
  
    if ( results.length === 0) {
      return (
        <div className="non-results">
          <h1>Không có kết quả tìm kiếm cho {`"${keyword}"`} !</h1>
        </div>
      );
    }
  
    return (
      <div id="search-results" style={{
        marginTop:"130px"
      }}>
        <div className="container">
        
        <div className="searchResults">
          <h1 className="searchResults-title">Kết quả tìm kiếm cho {`"${keyword}"`}</h1>
          <div className="grid-layout grid-gap-20px-20px">
            {
              results.map((result) => (
                <Link
                  key={result.id}
                  to={`/details/${result.media_type}/${result.id}`}
                >
                  <MovieItem data={result} />
                </Link>
              ))
            }
          </div>
        </div>
        {page < totalPage ? (
          <div onClick={LoadMore} className="load-more">
            <button className="load-more-button">Load More</button>
          </div>
        ) : null}
      </div>
      </div>
    );
  }
  
  export default SearchResults;