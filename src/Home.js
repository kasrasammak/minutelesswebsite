import React from 'react';

function Home(){

    const logo = "https://lh3.googleusercontent.com/hBan1-ORAnMMr5AUBLdKocXQt7u56qDcvd1z0htVcsflcDeFL8-UY2hA50at2wJQG1-eCCvR12FMQ-XkY4pTubC5Do9SDWPRApImREPDYk5-2Az7psSI8hsET0UEMi2equJvQ7Y-vw=w2400"

    return(
        <div id="homeMessage" >   
            <div style={{
                 fontFamily: 'Raleway, sans-serif',
                 position:"absolute",
                 color:"#F3F3F3",
                 top:"150px",left:"40px"}} id="logoLeft">MINUTELESS</div>


        <div id="centerPic">
            <img alt="minuteless_logo" src= { logo }></img>
        </div>               
            <div style={{
                 fontFamily: 'Raleway, sans-serif',
                 position:"absolute",
                 color:"white",
                 bottom:"150px",
                 right:"40px"}} id="logoRight">RECORDINGS</div>
        </div>
    
    )
}

export default Home;
