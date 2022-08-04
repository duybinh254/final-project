import {useState, useEffect, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./search.css"
import apiConfig from '../../api'

function Search() {
    document.title = "Phim hay | Tìm kiếm phim"
    const [keyword,setKeyword] = useState()
    const navigate = useNavigate()


    const onChangeInput  = (e) => {
      setKeyword(e.target.value)

    };
console.log(keyword);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (keyword.trim() === "") return;

    navigate(`/results?q=${keyword}`);
    
  }

  return (
    
    <div id='search'>
        <div className='container'>
            <form onSubmit={onSubmitForm}>
            <div className='search-container'>
            <p>Nhập tên phim, tên show TV hoặc tên diễn viên để tìm kiếm :</p>
            <div className="search-input">
            <input className="input-search"
            type="text"
            placeholder="Tìm kiếm phim..."
            value={keyword}
            onChange={onChangeInput}
            >
            </input>
            <input className="input-submit" type='submit' value="Search" />
            
            
            </div>
            </div>
            </form>
           
        </div>
    </div>
  )
}


export default Search