import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";




const Card = ({ covers, tracklist, dl, release }) => {

  useEffect(() => {
      Aos.init({ duration:2000 });
  
    }, []); 

  console.log(tracklist.hasOwnProperty('href'))
  return(
    <div className="column" >
      <div  data-aos="fade-left" className="card" style={{color:"#f3f3f3",margin:"20px", marginLeft:"0px",padding:"10px",paddingRight:"0px"}}>
        <img src= {covers} alt="image1"style={{ width: "600px", height:"600px" }}></img>
        <h2>{release.album_name} </h2>
        <h3>{release.artist_name}</h3>
        <p className="title">{release.title}</p>
        <p id="dl_link"><a target= "_blank" href={dl} download>{release.dl_text}</a></p>
        <br></br>
        <ul id="playlist"> 
          { 
            tracklist.map(data => <li><a href={""}>{data.title}</a></li>)
          }
        </ul>
        <br></br>
        <p class="description">
          {release.description}
        </p>
      </div>
    </div>        
  )
}

export default Card;