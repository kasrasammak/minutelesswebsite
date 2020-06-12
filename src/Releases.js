import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Card from './Components/Card.js'

function Releases(){

  useEffect(() => {
    Aos.init({ duration:2000 });

  }, []); 
  
  const covers = [
    "https://lh3.googleusercontent.com/CBsrSflHqrrAMW1WV8-gYAl28BhWe8NxwDwjvHHtvy7JbuWzCQ1uQ56W8BDBcZOUhHOFxPjfgCpx1uTKS3rGsNPBiLmzNTqb8_JjMlrcpLgEEUtFztCQeAmQtLh--qE3JltjfIg3=w2400",
    "https://lh3.googleusercontent.com/VuckXlWcs6qtJ-HuyhuOf9aRKCbR1Vnmwb_I5CSBKf-g4s12CV9AThtuawbpej_tLSjix-RMLriqjaIHK8VXFoScRgUFCPr842ErBs16akf3qG69QqkejyKF711Ce5M3A-dE5VpM=w2400",
    "https://lh3.googleusercontent.com/5fQX314vDdeMrFRUj3W6JJEnXbO9NU9upezlUU1ibGx3134_SAYMEqdW84Q_ytZXzMFMcXRZCH_Lb9d7pyKXqD6RHD8AuLBIwA4cmevJ0-04xsISEomaGXivPN8ALhaeQtp15Cbp=w2400",
    "https://lh3.googleusercontent.com/ftJbuZ0zYcYw5l_vextZP8XXTDvQFbcFSYUIxKjerDkie_pKa321NHDeo2fBMexUwYzvthL1yYWp3EQp1bvVve6A8u8qIQi6s7DckCKtudbzWFwFC5gA_bN_Mfo7NXUmwWlU2tdY=w2400",
    "https://lh3.googleusercontent.com/iIrFEJBNmB2CzfJJnqdLEENUwt_9HGyNfieLuczt3THx_VZdPOxXzJxkn-QvstoAGnnu6sR4A41qfbSiQ66_kbxkEGUjAiSupkXOyAqfxozIlMRvvS0eFJrxhW5QOjW4hLhC6VAILw=w2400"
  ]

  const minuteless = [
    { 
      href: "https://drive.google.com/file/d/1RlW_C3-Hp3j1aRVEsuU4xkjuF_TliPlm/view?usp=sharing", 
      title: "01. doob - ltt" 
    },
    { 
      href: "https://drive.google.com/file/d/1krebSfhMv7YbvjD_uHhC1wVKSBAJa0Os/view?usp=sharing",
      title: "02. Rysavy - Crush"
    },
    {
      href: "https://drive.google.com/file/d/1GrxMZ8PUS7A3u4p0KrNRxh3H72TREYgV/view?usp=sharing",
      title: "3. Romeodark - 🅕🅡🅐🅖🅜🅔🅝🅣🅢",
    },
    { 
      href: "https://drive.google.com/file/d/1Mug67TkD6fxjo8vCp7PUIX9lGYlZXyhT/view?usp=sharing",
      title: "04. Tenebral Cortex-Lost Between Dimensions",
    },
    { 
      href: "https://drive.google.com/file/d/1qzHJja_jq7dqievv-g9XsnZPkAW7Wo6F/view?usp=sharing",
      title: "05. Businessman - Swirl Click"
    },
    { 
      href: "https://drive.google.com/file/d/1aDHFGYVPIEgyPxo1ZNP20JIN7onxO0A-/view?usp=sharing",
      title: "06. Enigmachina - Unintention"
    },
    { 
      href: "https://drive.google.com/file/d/1hhdmX5hKKERjC-m-kVOvSmP-Ky8zYDbo/view?usp=sharing",
      title: "07. K-Owl - Mixed Up People"
    },
    {
      href: "https://drive.google.com/file/d/1Ljc99F7j2f4xZr5oaGPsyNnyh4UhJwuC/view?usp=sharing",
      title: "08. Audionimus - Farmer Seeds"
    },
    {
      href: "https://drive.google.com/file/d/1wmNQ7RJ-pPwNOeDJs9EnBhbFFd3WwHwF/view?usp=sharing",
      title: "09. Nox - Waking Down"
    },
    {
      href: "https://drive.google.com/file/d/1aERFL5inqo3wVsKeE9nSQny4Lpla7v1T/view?usp=sharing",
      title: "10. Fractal Terrorist - o-[qp]-o"
    },
    {
      href: "https://drive.google.com/file/d/1zVsDOBDrnBtFI-EjMdcJoQTQq3ywJViB/view?usp=sharing",
      title: "11. Gobbo - Nmetum"
    },
    {
      href: "https://drive.google.com/file/d/1x3hyveEFITOFDnoFJmv2IGdMlrqORi22/view?usp=sharing",
      title: "12. Voj - Ab Anit"
    },
    {
      href: "https://drive.google.com/file/d/1_7LN9H5qQDL8-fbDSsJl26XLt7B8Vw4R/view?usp=sharing",
      title: "13. Mirror Me - no minutes just chillin'"
    },
    {
      href: "https://drive.google.com/file/d/1if5roFbXyAvkO0iSncvCel0iEUrFwj9J/view?usp=sharing",
      title: "14. Interior Conflict - Scorpio's Dilemma"
    },
    { 
      href: "https://drive.google.com/file/d/1EKe9Y_320Xt5V4p_du9OKpzlZ_c-fazS/view?usp=sharing",
      title: "15. Beepetc. - Re:mind"
    }
  ]

  const underwhelmed = [
    { 
      href: "https://drive.google.com/file/d/1nevx8f961EhmCvc5fRW4hq0QAjTsxKVU/view?usp=sharing", 
      title: "01. minuteless" },
    { 
      href: "https://drive.google.com/file/d/1cmlX8RdP-u9cr0ckwWxKvgOq4oSPj19w/view?usp=sharing", 
      title:  "02. take_a_trip"
    },
    { 
      href: "https://drive.google.com/file/d/1wyxyqrSscl4UUCB3OQFn8InWnp5d3tNR/view?usp=sharing", 
      title:  "03. lets_roll"
    },
    { 
      href: "https://drive.google.com/file/d/1NMaVpybfKK9uTJQ6bdiLD0t82u9tcE6p/view?usp=sharing", 
      title: "04. beat_it"
    },
    { 
      href: "https://drive.google.com/file/d/1jocZCXK-lnE7xxzYNxxpwgcUKqEab9m0/view?usp=sharing", 
      title: "05. processing_data"
    },
    { 
      href: "https://drive.google.com/file/d/1mmdyUMGd3fO5tRyskJ3NxZREhWQuTonE/view?usp=sharing", 
      title: "06. buzzzd" 
    },
    { 
      href: "https://drive.google.com/file/d/1nSVSlrVpkDEES_SbveBwn7je6BryAh5w/view?usp=sharing", 
      title: "07. stepping" 
    },
    { 
      href: "https://drive.google.com/file/d/1o5vlUGhafcA4XQKQvM7X6NAoPm3Bzixt/view?usp=sharing", 
      title: "08. too_high" 
    },
    { 
      href: "https://drive.google.com/file/d/1LnOhdncOJrX5iDj_vneFskz9Ld2XQA6C/view?usp=sharing", 
      title: "09. names" 
    },
    { 
      href: "https://drive.google.com/file/d/1pS-9URXn612Biwgvq-v410QIcKi-9Ny-/view?usp=sharing", 
      title: "10. out_of_space" 
    }
  ] 

  const dl = [
    "https://drive.google.com/drive/folders/1oJjItBypWsJUCULm_YsKeVI_P-9pMPwc?usp=sharing",
    "https://drive.google.com/drive/folders/1DQTvygOl2Djqjv0zyb6C3v0JMiBt4xou?usp=sharing"
  ]

  const release = [
    {
      album_name: "minuteless va",
      artist_name: "",
      title: "compiled by Kasra Sammak aka K-Owl",
      dl_text: "Download Full Album Here",
      description: "This is the first release of Minuteless Recordings. Compiled by Kasra Sammak of K-Owl. It is a collection of tracks from 15 different artists. The intent behind this compilation was to create something new and interesting. Who knows how close we were. All the production behind this compilation was done in-house: Tracks written and produced by artists themselves. Mastering by Ioannis Karapostolis of Tenebral Cortex with the exemption of tracks  03 Romeodark - 🅕🅡🅐🅖🅜🅔🅝🅣🅢 and 12 Voj - Ab Anit which were self-mastered. Artwork by Kasra Sammak. Artwork is a blend of hand-drawings made by various artists from this compilation. No other images were used to make this artwork. We hope you enjoy! Love, Minuteless Team"
    },
    {
      album_name: "underwhelmed",
      artist_name: "rysavy",
      title: "written and produced by Denis Rysavy.",
      dl_text: "Download Full Album Here",
      description: "This is the second release of Minuteless Recordings. Produced and written by Denis Rysavy. It is a collection of ten tracks. Artwork by Henry Fynn aka Nox. Love, Minuteless Team"
    }
  ]
  return(
    <div>
      <h1 className="headers" >RELEASES</h1>
      <div className="centerDoc">
        <Card 
          covers = {covers[0]}
          tracklist = { minuteless }
          dl = {dl[0]}
          release = {release[0]}
         />
        <Card 
          covers = {covers[1]}
          tracklist = { underwhelmed }
          dl = {dl[1]}
          release = {release[1]}
         />
          
        <div className="column" >
          <div  data-aos="fade-right" id = "rysavyAlbum"className="card" style={{color:"#f3f3f3", margin:"20px",marginLeft:"0px",padding:"20px"}}>
            <img src= { covers[1] } alt="image1"style={{ width: "600px", height:"600px" }}></img>
            <h2>underwhelmed<br></br>by rysavy</h2>
            <p className="title">written and produced by Denis Rysavy.</p>
            <p id="dl_link"><a href={dl[1]} download>Download Full Album Here</a></p>
            <br></br>
            <ul id="playlist"  style={{color:"#f3f3f3",textAlign:"center"}}>
              { underwhelmed.map(data => <li><a target="_blank" href={ data.href }>{ data.title }</a></li>) }
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
            <img src={ covers[2] } alt="image1"style={{ width: "600px", height:"600px" }}></img>
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
                <li>7 - Visitor from Egnamis</li>
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
            <img src= { covers[3] } alt="image1"style={{ width: "600px", height:"600px" }}></img>
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
          <img src={ covers[4] } alt="image1"style={{ width: "600px", height:"600px" }}></img>
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


