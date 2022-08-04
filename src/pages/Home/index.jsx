import React from 'react'

import Banner from "../../component/banner"
import SliderMovie from '../../component/Slider/sliderMoive'
import SliderPopular from '../../component/Slider/sliderPopular'
import TVtrending from '../../component/Slider/tvtrending'
import TVpopular from '../../component/Slider/tvpopular'

function Home(props) {
document.title ="Phim hay"

  return (
    <div>
     
      <Banner />
    <SliderMovie />
    <SliderPopular />
    <TVtrending />
    <TVpopular />
    
    </div>
  
  )
}



export default Home