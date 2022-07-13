import apiConfig from '../../api'
import {useEffect, useState} from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./movieitem.css"
const MovieItem = ({data}) => {

  const { poster_path } = data;


  return (
    
        <div className='movie-item'>
        <div className='movie-item-content'>
          <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="" />
          <div className='sub'>
          <p className='sub-title'>{data?.title}</p>
          </div>
        </div>
        
        </div>
    
  )
}

export default MovieItem