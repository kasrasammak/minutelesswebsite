import React from 'react';

function Footer(){

    return(

        <div title="scroll"id="footer">
            <p id="p-footer"style={{margin:"5px",paddingBottom:"0px"}}>&copy;2020-2022  Webdesign by Denis Rysavy and Kasra Sammak<br></br><br></br> | Minuteless Recordings | </p> 
            <br></br>
            <br></br>
                <div id='icons'>
                    <a  target="_blank" href="https://soundcloud.com/minutelessrecordings"> <i class="fa fa-soundcloud" aria-hidden="true"></i></a>
                    <a  target="_blank" href="https://www.instagram.com/henry_fynn/"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a  target="_blank" href="https://www.twitch.tv/minutelessrecordings"><i class="fa fa-twitch" aria-hidden="true"></i></a>                 
                    <a  target="_blank" href="https://www.youtube.com/user/mrborisak"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                    <a  target="_blank" href="https://github.com/kasrasammak"><i class="fa fa-github" aria-hidden="true"></i></a>
                </div>
        </div>
    )
}

export default Footer;