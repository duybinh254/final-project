// import {useState, useEffect, useRef} from "react"
import { Routes, Route } from 'react-router-dom';
import "swiper/swiper.min.css"
import './App.css';
import Header from './component/Header';
import Footer from "./component/Footer"
import Home from "./pages/Home";
import Movies from './pages/MoviesPage/Movie';
import TV from './pages/TVpage/TV';
import Detail from './pages/Detail';
import WatchMovie from './pages/Watch/watchMovie';
import WatchTV from './pages/Watch/watchTV';
import Search from './pages/Search/Search';
import SearchResults from './pages/Search/Results';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Favorite from './pages/Favorite/Favorite';



function App() {
 
  return (
   
    <div className="App" >
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv_series" element={<TV />} />
      <Route path="/details/:media_type/:id" element={<Detail />} />
      <Route path="/watch/movie/:id" element={<WatchMovie />} />
      <Route path="/watch/tv/:id/season/:season/esp/:esp" element={<WatchTV />} />  
      <Route path="/search" element ={<Search />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorite" element={<Favorite />} />

    </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
