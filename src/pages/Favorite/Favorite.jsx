import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {FaTimes}  from "react-icons/fa";

import MovieItem from "../../component/Movies/movieItem";
import "./favorite.css"

function Favorite() {

  const [movie, setMovie] = useState([])
useEffect (() => {
  const obj=JSON.parse(localStorage.getItem('key'));
  console.log(obj);
  setMovie(obj);
}
,[])
  
const handleRemove = (item) => {
  console.log(item)
  const obj = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : []
  
  
//  const confirm =  window.confirm ("Bạn có muốn xóa phim này khỏi danh sách yêu thích ?")
//  if (confirm) {

//   // localStorage.removeItem('key');
//   // setMovie()
//  }
}
  return (
   <section className="movie-favorite">
     <div className="container">
      <h1 style={{color: 'white',
                  fontSize:"20px",
                  marginBottom:"40px",
    }}>
      Danh sách phim yêu thích của bạn</h1>
      <div className="grid-layout grid-gap-20px-20px">
    {
      movie?.map((item) => (
        <div className="favorite-items">
          <Link key={item.id} to={`/details/movie/${item.id}`}>
          <MovieItem data={item} />
        </Link>
        <div className='remove-item'>
            <button onClick={handleRemove(item)}><FaTimes /></button>
        </div>
        </div> 
        
        
      ))
    
      
      }

    </div>
    </div>
   </section>
  )
}

export default Favorite