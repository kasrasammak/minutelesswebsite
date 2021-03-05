import React from 'react';
import { Component } from 'react';


function Footer( {soundcloud }) {

    return(
      
        <div id="footer">
           <p>&copy; Copyright Webdesign by Denis Rysavy and Kasra Sammak | Minuteless Recordings 2020-2021.</p> 
           <div class="sm">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a pointer = "cursor" target = "_blank" href={"https://soundcloud.com/minutelessrecordings"}><img  id="soundcloud" alt="soundcloud_img" src= { soundcloud }></img></a>
          </div>
        </div>



    )
}


export default Footer;