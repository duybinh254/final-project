import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api";
import CastItem from "./castItem";
import "./cast.css"

//useParams để truy cập đến các thành phần trên đường dẫn url

function Cast () {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false)
    const params = useParams ()
    const {media_type, id} = params
    console.log(params.id);


    useEffect (() => {
        const getCast = (media_type, id) => {
            fetch(`${apiConfig.baseUrl}/${media_type}/${id}/credits?api_key=${apiConfig.apiKey}`)
              .then((res) => res.json())
              .then((cast) => {
                setCast(cast.cast.slice(0, 10));
                setLoading(false);
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          };
      
          setLoading(true);
          getCast(media_type, id);
        }, [media_type, id]);
      
    

    return (
        <div >
      <h3 className="cast-title">Diễn viên</h3>
      <div className="cast grid-gap-20px-20px grid-layout">
        {loading ? (
          <>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div/>
            <div />
            <div />
            <div />
          </>
        ) : (
          cast.map((item) => <CastItem data={item} key={item.id} />)
        )}
      </div>
    </div>
    )

}

export default Cast