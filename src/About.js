import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function About(){

    const video1 = "https://www.youtube.com/embed/txKtLuoPm-g"
    const video2 = "https://www.youtube.com/embed/50PjIeuWlII"

    useEffect(() => {
        Aos.init({ duration:2000 });
    
      }, []); 

    return(
    <div className="centerDoc">
        <h1 className="headers">ABOUT US</h1>
        <div id="divLeft">
            <p class="text_about">Minuteless Recordings is a music label of its own.
            <br></br>
            <br></br>
                And its not only about music:  mathematics, philosophy, language, programming, it is where the intersection of various disciplines converges at art and community. <br></br><br></br>
                It is a way of life, a way of thinking forward, a way of exploration.<br></br><br></br> 
                In the end there's many terms you could use to describe it,
                and we could even use different languages,<br></br><br></br>
                <p id="you-know">but when you know it's minuteless, you just know. </p><br></br>
                Certainty and doubt don't even exist in the paradigm you are in anymore,
                your belief system has effectively disintegrated.
                <br></br><br></br>
                But when you come back to reality, you realize that you could, if you really tried, attempt to describe it.
                <br></br><br></br>
                But we wont do that here.
                <br></br>
                <br></br>
                In this portal you can find our music  as well as some information about our artists. But be sure
                that there is more to come so stay tuned .. ! "
                <br></br>
                <br></br>
                <br></br>
                <div id="contact">
                    Contact:
                    <br></br>
                    <br></br>
                    <i class="fa fa-soundcloud" aria-hidden="true"></i>
                    <a href="http://soundcloud.com/minutelessrecordings">Soundcloud</a>
                    <br></br>
                    <i class="fa fa-twitch" aria-hidden="true"></i>
                    <a href="http://twitch.tv/minutelessrecordings">Twitch</a>
                    <br></br>
                    <br></br>
                    <div>Paypal / E-mail: minutelessrecordings@gmail.com</div><br></br>
                    Write us! <br></br>
                    We accept donations :) <br></br><br></br>                 
                </div>
                
            </p> 
            {/* <video  data-aos="fade-right" id="video2" controls="true" src={ video1 }></video>
            <video  data-aos="fade-left" controls="true" src={ video2 }></video> */}

            <h2 className='headers'>VIDEOS</h2>
            <iframe title="k-owl_video" class="video" data-aos="fade-right" width="560" height="315" src={video1} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title="doob_video" class="video" data-aos="fade-left" width="560" height="315" src={video2} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <br></br>     
        </div>
    </div>
          
    )
}

export default About;