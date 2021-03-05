import React from 'react';
import { Component } from 'react';


const Artist = ({ soundcloud, artistInfo }) => {

    return(
        <div className = "responsive">
            <div className ="gallery">
                <div id="names">
                    <h2 style= {{color:"white"}}>{artistInfo.artist}</h2>
                    <h5>{artistInfo.nickname}</h5>
                 </div>

                 <div class="card middle">
      <div class="front">
      <img src={artistInfo.profile} alt="artist_profile_pic"></img>

      </div>
    <div class="back">
        <div class="back-content middle">
            <div id="artistText">
                <br></br>
              <br></br>
              <p>{artistInfo.description}</p>
              <br></br>
              <img id="soundcloud2" style={{borderRadius:"50%"}}src={artistInfo.icon} alt="ICONS"></img>                 
    </div>
          <div class="sm">
          </div>
        </div>
      </div>
    </div>
                <br></br>

         

                <a target = "_blank" href={artistInfo.soundcloud}><img  id="soundcloud" alt="soundcloud_img" src= { soundcloud }></img></a>

          
            </div>  

            
        </div>           
            
    ) 
    
}


export default Artist;
