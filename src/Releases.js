import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Release from './Components/Release.js'
import { releases } from './consts.js'

function Releases(){

  useEffect(() => {
    Aos.init({ duration:2000 });

  }, []); 
  
  return(
    <div>
      <h1 className="headers" >RELEASES</h1>
      <div className="centerDoc">
        {
          releases.map(data => 
            <Release 
              covers = {data.cover}
              tracklist = {data.tracklists}
              dl = {data.dl}
              releaseInfo = {data.releaseInfo}
            />)
        }
      </div>  
    </div>  
  )
}

export default Releases;


