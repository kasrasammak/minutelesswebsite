import React from 'react';

const Artist = ({ soundcloud, artistInfo }) => {

    return(
      <div className='gallery'>
        <div className="columnArtist">
          <div className="cardArtist" data-aos={artistInfo.fade}style={{width:"100%"}}>
            <img className="artist_img"src={artistInfo.profile} alt="artist_profile_pic"></img>
              <h2>{artistInfo.artist}</h2>
              <h5>{artistInfo.nickname}</h5>
              <p>{artistInfo.description}</p>
              <button className="button"><img alt="soundcloud_img"style={{height:"30px;",width:"30px",border:"none"}} src= { soundcloud }></img></button>
              <a href={artistInfo.soundcloud}></a>
              </div>
          </div>
          </div>  
    )
}

export default Artist;
