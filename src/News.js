import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function News(){

  useEffect(() => {
      Aos.init({ duration:2000 });
  
    }, []); 

  const flyer = "https://lh3.googleusercontent.com/65JfYNHWuito7Y23CkqcAUZnrZSReplUel0GKDlrmxo3PpP2MH_lMTnLD5dEeePzfSN1Nle4fYJHJVuhULYXxl349UHQZ9XFaJSVoA0rphtXDRt5r_FsJVf4VHuSSYBKtt9bCEJ3ig=w2400"
  const flyer2 = "https://lh3.googleusercontent.com/Zwns8rWFCOp7ZCWc2-Fdbki4ffrfoi1CNYbCQWdW9Nb3aMLEdK9lkXEjUjR1KcOjI80Udn32qF-6rZebQV1HoG_ib1QLmspI_ZEOFeDQfk0C7_pZMTuFytx2oy_E00cbC2HoMMsCXw=w2400"
  return(
    <div className="centerDoc">
      <h1 className="headers">News</h1>  
      <div color="white">
        More news coming soon!  
      </div>
      <div>--------------------------------------------------------- </div>
      <div>--------------------------------------------------------- </div>
      <div>
        <img data-aos="fade-up" id="news" src={ flyer2 } alt="flyer_image" width="666px"></img>   
      </div>
      <div>--------------------------------------------------------- </div>
      <div>--------------------------------------------------------- </div>
      <div>
        <img data-aos="fade-up" id="news" src={ flyer } alt="flyer_image"></img>   
      </div>
    </div>         
  )
}

export default News;