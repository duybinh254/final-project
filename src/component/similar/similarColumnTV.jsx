import { useState, useEffect } from "react";
import apiConfig from "../../api";
import { useParams, Link } from "react-router-dom";
import "./similarColumn.css"


function SimilarColumnTV() {

  const params = useParams();

  const { id } = params;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getSimilar = (id) => {
      fetch(`${apiConfig.baseUrl}/tv/${id}/similar?api_key=${apiConfig.apiKey}&language=vi`)
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((err) => {
          console.log(err);
        });
    };

    getSimilar(id);
  }, [id]);



  return (

    <div className="similar-column">
        
    <ul className="similar-column-list">
    {data.map((item) => (
            <Link className="similar-column-list-item" key={item.id} to={`/details/tv/${item.id}`}>
                <li>
                    <img className='similar-column-img' src={ `https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""  />
                </li>

                <p className="similar-column-title">{item.name}</p>
            </Link>
        ))}

    </ul>
</div>
    )
}

export default SimilarColumnTV