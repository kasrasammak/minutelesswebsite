import React from "react";
import "aos/dist/aos.css";




const Release = ({ fade, covers, tracklist, dl, releaseInfo }) => {



  console.log(tracklist.hasOwnProperty('href'))
  return(
    <div className="column" >
      <div  data-aos={fade} className="card" style={{color:"#f3f3f3",margin:"20px", marginLeft:"0px",padding:"10px",paddingRight:"0px"}}>
        <img src= {covers} alt="image1"style={{ width: "400px", height:"400px", borderRadius: "25px" }}></img>
        <h2>{releaseInfo.album_name} </h2>
        <h3>{releaseInfo.artist_name}</h3>
        <p className="title">{releaseInfo.title}</p>
        <p id="dl_link"><a href={dl} download>{releaseInfo.dl_text}</a></p>
        <br></br>
        <ul id="playlist"> 
          { 
            tracklist.map(data => <li><a href={data.href}>{data.title}</a></li>)
          }
        </ul>
        <br></br>
        {releaseInfo.description}
      </div>
    </div>        
  )
}

export default Release;