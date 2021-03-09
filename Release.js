import React from "react";
import "aos/dist/aos.css";




const Release = ({ download, covers, tracklist, dl, releaseInfo }) => {



  console.log(tracklist.hasOwnProperty('href'))
  return(
    <div className="responsive2" >
        <div className="gallery2">
      <div id="names">

        <h3 style={{color:"white"}}>{releaseInfo.artist_name}</h3>
        <h5>{releaseInfo.album_name} </h5>

        </div>

         

          <div class="card middle">
      <div class="front">
      <img  src= {covers} alt="image1"></img>
     
      </div>
      <div class="back">
        <div class="back-content middle">
          <h4>Tracklist</h4>
          <br></br>
          <ul id="playlist"> 
          { 
            tracklist.map(data => <li><a target="_blank" href={data.href}>{data.title}</a></li>)
          }
        </ul>
        <br></br>
        {releaseInfo.description}
        </div>
      </div>
    </div>

 
        <br></br>

        <a target = "_blank" href={ dl }><img id="soundcloud" src = { download }></img></a>

        <br></br>

        </div>
      </div>
           
  )
}

export default Release;