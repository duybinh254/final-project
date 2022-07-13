// import {useState, useEffect} from "react"
import { Routes, Route, Link } from 'react-router-dom';
// import Routes from "./config";
import "swiper/swiper.min.css"

import './App.css';
import Header from './component/Header';
// import axios from "axios"
// import Header from "./component/Header";
import Footer from "./component/Footer"
import Home from "./pages/Home";
import Movies from './pages/MoviesPage/Movie';
import TV from './pages/TVpage/TV';
import Detail from './pages/Detail';




function App() {

  
  return (
   
    <div className="App" >
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv_series" element={<TV />} />
      <Route path="/details/:media_type/:id" element={<Detail />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
