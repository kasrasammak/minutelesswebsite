import React from 'react';

function Home(){

    return(
        <div id="homeMessage" >   
            <div style={{
                 fontFamily: 'Raleway, sans-serif',
                 fontSize:"65px",
                 position:"absolute",
                 color:"#F3F3F3",
                 top:"150px",left:"40px"}} id="logoLeft">MINUTELESS</div>


        <div id="centerPic">
            <img src="images/uhr.jpg"></img>
        </div>               
            <div style={{
                fontSize:"65px",
                 fontFamily: 'Raleway, sans-serif',
                 position:"absolute",
                 color:"white",
                 bottom:"150px",right:"40px"}} id="logoRight">RECORDINGS</div>
        </div>      
    )
}

export default Home;
