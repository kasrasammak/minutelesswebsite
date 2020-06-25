import React from 'react';

const Artist = ({ soundcloud, artistInfo }) => {

    return(
        <div className="column">
          <div className="card" data-aos={artistInfo.fade}style={{width:"100%"}}>
            <img src={artistInfo.profile} alt="artist_profile_pic"style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>{artistInfo.artist}</h2>
              <h5>{artistInfo.nickname}</h5>
              <p>{artistInfo.description}</p>
              <a href={artistInfo.soundcloud}><p ><button className="button"><img alt="soundcloud_img"style={{height:"30px;",width:"30px",border:"none"}} src= { soundcloud }></img></button></p></a>
          </div>
        </div>       
    )
}

export default Artist;
