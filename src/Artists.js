import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { artistInfo, soundcloud } from './consts.js'
import Artist from './Components/Artist.js'
import Header from './Components/Header.js'


function Artists(){

  useEffect(() => {
    Aos.init({ duration:2000 });

  }, []); 

  return(

    <div className="centerDoc2">
    <h1 id="artist-header" className="headers">ARTISTS</h1>
      <div className='gallery'>
      <div className="row">
      <a title="scroll-left"class="prev">&#10094;</a>
        { artistInfo.map(data => 
          <Artist 
            artistInfo={data}
            soundcloud={soundcloud}
          />
          )}
      <a title="scroll-right"class="next">&#10095;</a>
          </div>
      </div>
    </div>
   
  )
}

export default Artists;