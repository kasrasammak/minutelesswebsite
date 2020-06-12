import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Releases(){

  useEffect(() => {
    Aos.init({ duration:2000 });

  }, []); 

    return(
        <div>
          <h1 className="headers" >RELEASES</h1>
          <div className="centerDoc">
          <div className="column" >
            <div  data-aos="fade-left" className="card" style={{color:"#f3f3f3",margin:"20px", marginLeft:"0px",padding:"10px",paddingRight:"0px"}}>
              <img src="images/min5.jpg" alt="image1"style={{ width: "600px", height:"600px" }}></img>
              <h2>minuteless self-titled va</h2>
              <p className="title">compiled by Kasra Sammak aka K-Owl</p>
              <p id="dl_link"><a href="https://drive.google.com/drive/folders/1oJjItBypWsJUCULm_YsKeVI_P-9pMPwc?usp=sharing" download>Download Full Album Here</a></p>
              <br></br>
              <ul id="playlist"  style={{color:"#f3f3f3"}}> 
                <li><a target="_blank" href="https://drive.google.com/file/d/1RlW_C3-Hp3j1aRVEsuU4xkjuF_TliPlm/view?usp=sharing">01. doob - Itt</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1krebSfhMv7YbvjD_uHhC1wVKSBAJa0Os/view?usp=sharing">02. Rysavy - Crush</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1GrxMZ8PUS7A3u4p0KrNRxh3H72TREYgV/view?usp=sharing">03. Romeodark - 🅕🅡🅐🅖🅜🅔🅝🅣🅢</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1Mug67TkD6fxjo8vCp7PUIX9lGYlZXyhT/view?usp=sharing">04. Tenebral Cortex-Lost Between Dimensions</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1qzHJja_jq7dqievv-g9XsnZPkAW7Wo6F/view?usp=sharing">05. Businessman - Swirl Click</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1aDHFGYVPIEgyPxo1ZNP20JIN7onxO0A-/view?usp=sharing">06. Enigmachina - Unintention</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1hhdmX5hKKERjC-m-kVOvSmP-Ky8zYDbo/view?usp=sharing">07. K-Owl - Mixed Up People</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1Ljc99F7j2f4xZr5oaGPsyNnyh4UhJwuC/view?usp=sharing">08. Audionimus - Farmer Seeds</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1wmNQ7RJ-pPwNOeDJs9EnBhbFFd3WwHwF/view?usp=sharing">09. Nox - Waking Down</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1aERFL5inqo3wVsKeE9nSQny4Lpla7v1T/view?usp=sharing">10. Fractal Terrorist - o-[qp]-o</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1zVsDOBDrnBtFI-EjMdcJoQTQq3ywJViB/view?usp=sharing">11. Gobbo - Nmetum</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1x3hyveEFITOFDnoFJmv2IGdMlrqORi22/view?usp=sharing">12. Voj - Ab Anit</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1_7LN9H5qQDL8-fbDSsJl26XLt7B8Vw4R/view?usp=sharing">13. Mirror Me - no minutes just chillin'</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1if5roFbXyAvkO0iSncvCel0iEUrFwj9J/view?usp=sharing">14. Interior Conflict - Scorpio's Dilemma</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1EKe9Y_320Xt5V4p_du9OKpzlZ_c-fazS/view?usp=sharing">15. Beepetc. - Re:mind</a></li>
              </ul>
              <br></br>
              <p class="description">
                This is the first release of Minuteless Recordings. <br></br>
                Compiled by Kasra Sammak of K-Owl. <br></br>
                It is a collection of tracks from 15 different artists. <br></br>
                The intent behind this compilation was<br></br>
                to create something new and interesting. <br></br>
                Who knows how close we were. <br></br>
                All the production behind this compilation was done in-house: <br></br>
                Tracks written and produced by artists themselves.<br></br>
                Mastering by Ioannis Karapostolis of Tenebral Cortex<br></br>
                with the exemption of tracks  03 Romeodark - 🅕🅡🅐🅖🅜🅔🅝🅣🅢 and 12 Voj - Ab Anit <br></br>
                which were self-mastered.<br></br>
                Artwork by Kasra Sammak.<br></br>
                Artwork is a blend of hand-drawings made by various artists from this compilation.<br></br>
                No other images were used to make this artwork. <br></br>
                you may  download it for free.<br></br>
                We hope you enjoy!<br></br><br></br>
                        <br></br>
                Love,<br></br>
                Minuteless Team
              </p>
            </div>
          </div>
          
          <div className="column" >
            <div  data-aos="fade-right" id = "rysavyAlbum"className="card" style={{color:"#f3f3f3", margin:"20px",marginLeft:"0px",padding:"20px"}}>
              <img src="images/2017-08-01-19-34-53.jpg" alt="image1"style={{ width: "600px", height:"600px" }}></img>
              <h2>underwhelmed<br></br>by rysavy</h2>
              <p className="title">written and produced by Denis Rysavy.</p>
              <p id="dl_link"><a href="https://drive.google.com/drive/folders/1DQTvygOl2Djqjv0zyb6C3v0JMiBt4xou?usp=sharing" download>Download Full Album Here</a></p>
              <br></br>
              <ul id="playlist"  style={{color:"#f3f3f3",textAlign:"center"}}>
              <br></br>
                <li><a target="_blank" href="https://drive.google.com/file/d/1nevx8f961EhmCvc5fRW4hq0QAjTsxKVU/view?usp=sharing">01. minuteless</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1cmlX8RdP-u9cr0ckwWxKvgOq4oSPj19w/view?usp=sharing">02. take_a_trip</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1wyxyqrSscl4UUCB3OQFn8InWnp5d3tNR/view?usp=sharing">03. lets_roll</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1NMaVpybfKK9uTJQ6bdiLD0t82u9tcE6p/view?usp=sharing">04. beat_it</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1jocZCXK-lnE7xxzYNxxpwgcUKqEab9m0/view?usp=sharing">05. processing_data</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1mmdyUMGd3fO5tRyskJ3NxZREhWQuTonE/view?usp=sharing">06. buzzzd</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1nSVSlrVpkDEES_SbveBwn7je6BryAh5w/view?usp=sharing">07. stepping</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1o5vlUGhafcA4XQKQvM7X6NAoPm3Bzixt/view?usp=sharing">08. too_high</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1LnOhdncOJrX5iDj_vneFskz9Ld2XQA6C/view?usp=sharing">09. names</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1pS-9URXn612Biwgvq-v410QIcKi-9Ny-/view?usp=sharing">10. out_of_space</a></li>
              </ul>
              <br></br>
              <p class="description">
                This is the second release of Minuteless Recordings. <br></br>
                Produced and written by Denis Rysavy <br></br>
                It is a collection of ten tracks. <br></br>
                <br>
                </br>download is for free.<br></br>
                Artwork by Henry Fynn aka Nox.<br></br>
                
                <br></br>
                Love,<br></br>
                Minuteless Team
              </p>              
            </div>
          </div>
          <div className="column" >
            <div  data-aos="fade-right"  id = "rysavyAlbum"className="card" style={{color:"#f3f3f3",margin:"20px",marginLeft:"0px",padding:"20px"}}>
              <img src="images/arduous recursion.jpg" alt="image1"style={{ width: "600px", height:"600px" }}></img>
                <h2>arduous recursion<br></br> tenebral cortex</h2>
                <p className="title">written and produced by Ioannis Karapostolis.</p>
                <p class="comingsoon">To be released on July 1st, 2020</p>
                <ul id="playlist"  style={{color:"rgb(7, 98, 126)",textAlign:"center"}}> 
                  <li>1 - Shore of Laments</li>
                  <li>2 - x Fat Freddy - Praise the Strigiforme</li>
                  <li>3 - Husk</li>
                  <li>4 - dogeeseseegod</li>
                  <li>5 - x Disektor - Foleyarium </li>
                  <li>6 - Flagellate</li>
                  <li>7 -Visitor from Egnamis</li>
                  <li>8 - Abstract Logics</li>
                </ul>
                <br></br>
                <p class="description">
                  Our third release :  <br></br>
                  Produced and written by Ioannis Karapostolis.<br></br>
                  It is a collection of eight twisted tracks. <br></br>
                  Feel free to grab it ! <br></br><br></br>
                  Artwork by arsmoriendi:<br></br>
                  <a href="https://www.instagram.com/arsmoriendi____/" target="_blank">Instagram</a><br></br>
                  <br></br>   
                  Love,<br></br>
                  Minuteless Team
                </p>
                
                <br></br>
          </div>
          </div>

          <div className="column" >
            <div  data-aos="fade-left" id = "rysavyAlbum"className="card" style={{color:"#f3f3f3",margin:"20px",marginLeft:"0px",padding:"20px"}}>
              <img src="images/fuvicks1.jpg" alt="image1"style={{ width: "600px", height:"600px" }}></img>
              <h2>pulviemscri textra</h2>
              <p className="title">written and produced by Various Artists</p>
              <p class="comingsoon">Coming Soon!</p>
              <br></br>
              <ul id="playlist"  style={{color:"rgb(7, 98, 126)"}}> 
                <li>01. Kfaraday - 3Dti</li>
                <li>02. Dagshenma - Gurigan dyne</li>
                <li>03. Dino Felipe - Apocal Malaise</li>
                <li>04. FishingCat & Athrotaxis - QQQQQQQQQQQQQQ---------untitled2-QQQQQQQQQQ^^^^^^^^QQQ800000000a</li>
                <li>05. Athrotaxis - flintapsia codumine rassiesk</li>
                <li>06. Athrotaxis - damprense the volliomeugges</li>
                <li>07. Athrotaxis - flintopnarea tranglosse</li>
                <li>08. Part A2 (Orochi Rmx) (Kazuaki Orochi</li>

                <li>09. Robotic Joe - 12 Skeletons A2</li>

                <li>10. dino felipe - for chronic pain (sounds of Athrotaxis)</li>
                <li>11. Cyte - Thirteenth skeleton fucks the bicycle neuron(Cyte remix)</li>
                <li>12. FishingCat - untitled2</li>
                <li>13. EW - Teejnuflo1a(template+riverclips)</li>
                <li>14. Robotic Joe - 12 Skeletons B2</li>
                <li>15. Rainbow Vomit and Cum Bubbles - bathromaxes2</li>
                <li>16. Vypul - AthroTaxis Remix V5</li>
                <li>17. Moltandi - wadsthisone9</li>
              </ul>
              <p class="description">
                This is the fourth release of Minuteless Recordings. <br></br>
                Produced and written by various artists. <br></br>
                It is sort of like a self-organized VA. <br></br>
                Enjoy..
                <br></br>
                <br></br>
                Download is for free.<br></br>
                Artwork by Nick Beeby of Athrotaxis.<br></br>
                
                <br></br>
                Love,<br></br>
                Minuteless Team
              </p>
            </div>
          </div>
          
          <div className="column" >
            <div  data-aos="fade-left" id = "rysavyAlbum"className="card" style={{color:"#f3f3f3", margin:"20px",marginLeft:"0px",padding:"20px"}}>
            <img src="images/2017-08-13-23-10-51.jpg" alt="image1"style={{ width: "600px", height:"600px" }}></img>
              <h2>rysavy</h2>
              <p className="title">written and produced by Denis Rysavy.</p>
              <p class="comingsoon">Coming Soon!</p>
              <br></br>
              <ul id="playlist"  style={{color:"rgb(7, 98, 126)", textAlign:"center"}}> 
                <li>01. Die Dürre</li>
                <li>02. minutelessaferchill</li>
                <li>03. Mixed Up People Remix</li>
                <li>04. the gang</li>
                <li>05. LowBeat</li>
                <li>06. nevermind</li>
                <li>07. New Level Of Happiness</li>
              </ul>
              <br></br>
              <p class="description">
                Produced and written by Denis Rysavy of RYSAVY. <br></br>
                It is a collection of seven tracks. <br></br>
                This album is compiled by kasra K.OWL<br></br>
                All music was produced between 2018 - 2019<br></br>
                Enjoy..
                <br></br>
                <br></br>download is for free.<br></br>

                Artwork by Henry Fynn aka NOX.<br></br>
                
                <br></br>
                Love,<br></br>
                Minuteless Team
              </p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Releases;


