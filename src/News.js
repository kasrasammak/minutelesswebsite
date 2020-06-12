import React ,{ useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function News(){
    useEffect(() => {
        Aos.init({ duration:2000 });
    
      }, []); 

    return(
    <div className="centerDoc">
            <h1 className="headers">News</h1>
            
            <img data-aos="fade-up" id="news" src="images/minuteless_live.jpg"></img>
      
    </div>
          
    )
}

export default News;