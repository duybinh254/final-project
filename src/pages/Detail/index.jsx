import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../api'
import { Link } from 'react-router-dom'
import Cast from '../../component/cast/castList'
import "bootstrap/dist/css/bootstrap.css"

function Detail() {

  const param = useParams();
  const { media_type, id } = param;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetailsMovie = (media_type, id) => {
      fetch(`${apiConfig.baseUrl}/${media_type}/${id}?api_key=${apiConfig.apiKey}`)
        .then((res) => res.json())
        .then((details) => {
          setData(details);
          console.log(details);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };

    setLoading(true);
    getDetailsMovie(media_type, id);
  }, [id, media_type]);


  return (
    <div style={{backgroundColor: "#333"}}>
       <div className='container'>
       <Cast />
       </div>
    </div>
  )
}

export default Detail