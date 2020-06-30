import React from 'react';

function Home(){

    const logo = "https://lh3.googleusercontent.com/8S8tDfYlYMQgkDvzuann7_mEpvjlaeTVXoR4337FfIwJ_kuG9pp57ezr69G71GcjwcLUgaefPpEbcnFZzSSmrwD_8Y-snEeixzA6W9Us45AK_goKZyMnmaqekvpxckrhtpIADZtosw=w2400"

    return(
        <div id="homeMessage" >   
            <div style={{
                 fontFamily: 'Raleway, sans-serif',
                 position:"absolute",
                 color:"#F3F3F3",
                 top:"150px",left:"40px"}} id="logoLeft">MINUTELESS</div>


        <div id="centerPic">
            <img src= { logo }></img>
        </div>               
            <div style={{
                 fontFamily: 'Raleway, sans-serif',
                 position:"absolute",
                 color:"white",
                 bottom:"150px",right:"40px"}} id="logoRight">RECORDINGS</div>
        </div>      
    )
}

export default Home;
