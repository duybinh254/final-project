import apiConfig from '../../api'
import {useEffect, useState} from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./TVitem.css"
const TVitem = ({data}) => {

  const { poster_path } = data;
  console.log(data?.name);

  return (
    <div className='container'>
        <div className='movie-item'>
        <div className='movie-item-content'>
          <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="" />
          <div className='sub'>
          <p className='sub-title'>{data?.name}</p>
          
          </div>
        </div>
        
        </div>
    </div>
  )
}

export default TVitem