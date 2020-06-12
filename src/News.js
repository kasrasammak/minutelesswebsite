import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function News(){

  useEffect(() => {
      Aos.init({ duration:2000 });
  
    }, []); 

  const flyer = "https://lh3.googleusercontent.com/65JfYNHWuito7Y23CkqcAUZnrZSReplUel0GKDlrmxo3PpP2MH_lMTnLD5dEeePzfSN1Nle4fYJHJVuhULYXxl349UHQZ9XFaJSVoA0rphtXDRt5r_FsJVf4VHuSSYBKtt9bCEJ3ig=w2400"
  
  return(
    <div className="centerDoc">
      <h1 className="headers">News</h1>    
      <img data-aos="fade-up" id="news" src={ flyer }></img>  
    </div>         
  )
}

export default News;