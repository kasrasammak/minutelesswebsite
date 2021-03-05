import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { artistInfo, soundcloud } from './consts.js'
import Artist from './Components/Artist.js'


function Artists(){

  useEffect(() => {
    Aos.init({ duration:2000 });

  }, []); 

  return(
    <div className="centerDoc">
      <h1 className="headers">ARTISTS</h1>
        { artistInfo.map(data => 
          <Artist 
            artistInfo={data}
            soundcloud={soundcloud}
          />

          )}
           <div id="spacer2"></div>
           
    </div>
   
  )
}

export default Artists;