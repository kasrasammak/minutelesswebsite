import React from "react";
import "aos/dist/aos.css";




const Release = ({ fade, covers, tracklist, dl, releaseInfo }) => {



  console.log(tracklist.hasOwnProperty('href'))
  return(
    <div className="column" >
      <div  data-aos={fade} className="card" style={{color:"#f3f3f3",margin:"20px", marginLeft:"0px",padding:"10px",paddingRight:"0px"}}>
        <img id="img-releases" src= {covers} alt="image1"></img>
        <h2>{releaseInfo.album_name} </h2>
        <p className="title">{releaseInfo.title}</p>
        <p id="dl_link"><a target="_blank" rel="noopener noreferrer" href={dl} download>{releaseInfo.dl_text}</a></p>
        <span title="scroll down 4 more info">&#8964;</span> 
        <br></br>
        <br></br>   
        <br></br>
        <ul id="playlist"> 
          { 
            tracklist.map(data => <li><a target="_blank" rel="noopener noreferrer" href={data.href}>{data.title}</a></li>)
          }
        </ul>
        <br></br>
        {releaseInfo.description}
      </div>
    </div>        
  )
}

export default Release;