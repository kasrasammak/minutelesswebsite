import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Artists(){

  useEffect(() => {
    Aos.init({ duration:2000 });

  }, []); 

    return(
        <div className="centerDoc">
            <h1 className="headers">ARTISTS</h1>
            <div className="row">
              <div className="column">
                <div className="card" data-aos="fade-left" style={{width:"100%"}}>
                  <img src="images/doob.jpg" alt="image1"style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>doob</h2>
                    <p>the schwiggle</p>
                    <p>The human behind the Project doob, is called Joe Nemcok, he lives in New York and has Slovakian roots. Believe it or not. But he is a real person.</p>
                    <a href="https://soundcloud.com/jdoobn" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></p></a>
                </div>
              </div>
              <div className="column">
                <div  data-aos="fade-right" className="card" style={{width:"100%"}}>
                  <img src="images/jovan.jpg" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>NIHILIJ / VOJ</h2>
                    <p> the fraggle</p>
                    <p>Our one and Only Jovan M. Theres not much to say, he lives in California and plays piano.</p>
                    <a href="https://soundcloud.com/definitely-jovan" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></p></a>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-right" className="card" style={{width:"100%"}}>
                  <img src="images/rysavy.jpg" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>RYSAVY</h2>
                    <p>the whomble</p>
                    <p>Rysavy, is the project of Denis Rysavy, Turkish and German roots, he is currently living in Germany.</p>
                    <a href="https://soundcloud.com/denis-rysavy" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></p></a>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-left" className="card" style={{width:"100%"}}>
                  <img src="images/k-owl.jpg" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>K-OWL</h2>
                    <p>the skripple</p>
                    <p>K-Owl - living legend Kasra Sammak, Persian roots, from USA, currently housing in Berlin with his cat Bear.</p>
                    <a href="https://soundcloud.com/k-owl" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></p></a>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-left" className="card" style={{width:"100%"}}>
                  <img src="images/enigmachina.jpg" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>ENIGMACHINA</h2>
                    <p>the wump</p>
                    <p>Alban Rumpf is the person behind the  Enigmachina Project, chilling in Oldenburg with his girl and some cats.</p>
                    <p><a href="https://soundcloud.com/theongoingarcanum" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></a></p>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-right"className="card" style={{width:"100%"}}>
                  <img src="images/nox.jpg" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>NOX</h2>
                    <p>the winkle</p>
                    <p>Bremens one and only Nox ( Henry Fynn ) is actually a talented artist: check out his Instagram : <br></br><a href="https://www.instagram.com/henry_fynn/?hl=de" target="_blank" >CLICK HERE</a></p>
                    <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></a></p>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-right" className="card" style={{width:"100%"}}>
                  <img src="images/tenebral_cortex1.jpg" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>TENEBRAL CORTEX</h2>
                    <p> the quirkle</p>
                    <p>Tenebral Cortex emerges from the mind of french/greek artist Ioannis Karapostolis of Greece. <br></br>He is currently living in France.</p>
                    <p><a href="https://soundcloud.com/tenebralcortex" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></a></p>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-left"className="card" style={{width:"100%"}}>
                  <img src="images/beep.png" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>Beep etc.</h2>
                    <p>the weeble</p>
                    <p>Beep etc. is Tanis Nielsen from Denmark!</p>
                    <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></a></p>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-left"className="card" style={{width:"100%"}}>
                  <img src="images/tsev.png" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>tsev</h2>
                    <p>the wubble</p>
                    <p>tsev is Mario from Greece!</p>
                    <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></a></p>
                </div>
              </div>
              <div className="column">
                <div data-aos="fade-left"className="card" style={{width:"100%"}}>
                  <img src="images/disektor.jpg" alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
                    <h2>Disektor</h2>
                    <p>the crunkle</p>
                    <p>Disektor is Simo Masouri from Morocco!</p>
                    <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src="images/sc.png"></img></button></a></p>
                </div>
              </div>
          </div>
      </div>

    )
}

export default Artists;