import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Artists(){

  useEffect(() => {
    Aos.init({ duration:2000 });

  }, []); 

  const doob = "https://lh3.googleusercontent.com/Lx_chBZ9DU5fIrG-6FvpwHkasK4lWw5-fsbHmtmPdk9N3_A524bNOWxtMoNLgSWRvjnYNPPSfTjCE6-lpwNfkW9hncTpC9Y0o88F8BEBBXdoizNDgGroH16F7uwePQxTOzg-T0P5=w2400"
  const jovan = "https://lh3.googleusercontent.com/eIZbcJrvkWNu3FbaYRfFhTnEQlxx3NxYRAoBRRVyJxoGEk-7Z8jkokRJB-R5sqrgV4xTgKQ4RwU4FMZ4HeQMg57IJwpdQDP88CO6aD4XgQD-DJhcRD1dAFsh2S-nj-wtpuJ7DRvM=w2400"
  const rysavy = "https://lh3.googleusercontent.com/B_stUs1_q36eOYuYP-tL0zFohwYXp-EhiwmA8hxSVDpkv76AoShvh7NVajPCCRITmbk3VKJps2VUpPyPasfT2slM3KSMfBv7g0xrD_64wqGDQUZP-t804r9YDCIeqQC1Oa89IUxh=s291-p-k"
  const k_owl = "https://lh3.googleusercontent.com/7ZreDp5tBipuc5U4iw_l321Ya2X4RDHexEH8XFAms7mjZdhEP6ZczDNNQB2qXusypLsX5IFEudcyQz8s9Chz2akzQx_C1uLWCty0ZHLEuz49EuJw_NjyZN9nu9_tZd-urRErB8-K=w2400"
  const enigmachina = "https://lh3.googleusercontent.com/_WzG_a86JwW18_vMlpCvGYJhxl9Q1sH3s_yLrO7HCfGCsTZdtg5ui6GhO8mTwKLPrIbRlDaDoNQZogV5is-LGcbdcPOfw_ljoT3o9Vnpe27T4Onad4y8pADfEAgDWMhz5A3wKLZl=w2400"
  const nox = "https://lh3.googleusercontent.com/zAARbforVpmjcKMM6JmQ6FX7DX2mWwlgxTURZodZkWzsfoCTEDSbd3S2pNu6w7x9S97dFg3GbBDXqmStq_IVa3V8yjnnODUbbyxnh2yqy-O02g68At_RyMUSqjuOGBrGYegD0QY5=w2400"
  const tenebral_cortex = "https://lh3.googleusercontent.com/lUgmrKfyU44gl8KX-CUuUMekmh2CruaiyZo-WrLR9GdU0JDaGfgTDwt66ySp62jbFk8-BRUOSvQd__WmKVOz6U09mcls92FckmxxRZrLbPxacLMPnicHchy6WZ-ObCmbvi2M1Cyh=w2400"
  const beep_etc = "https://lh3.googleusercontent.com/YfFvlkf7Sa46wIB1hlrgEfFdYW_kD1fwB9e2lin8puZwe_M4KNexwW9vxffT-2Y92C7TWW-lwPm5UnMMeN6p65Sf834DPvdnoJxygqDpu2KJ-2xxDmbfQkWTmtUli3_NNeSR-Er3=w2400"
  const tsev = "https://lh3.googleusercontent.com/Tm0ajujhKfq65QajSvNIvGuyiBJJLeljzYsuMe6mX2EyAtc9fBa0yHr0cwv-VxvL5VIlnfJA_Qp02IXJgjSxHEO95B3_i3iKXIDjp9Mlrhl_nBAhKngAv0scqDLHsbWQQTLo_arK=w2400"
  const disektor = "https://lh3.googleusercontent.com/ak9bc6IsHWIhL3XCBD9EM5QKs7TqS5R2Cwc9dfAslblDFl56gAPPft74XRBjKPbD50IdZK-UUeAyetpGH9ETtgKiPyODJG45CKArqlOymvY72Y6cvZHWRvZnJVp4iMKd2rlUXbu3=w2400"
  
  const soundcloud = "https://lh3.googleusercontent.com/kaGNknUvQbftdzBemEdfdg50FJgYGOEQDUHMrfldLwTeVlSUXhKRs5nnEluXZPC9eqxOj-KaZSd5OLAP0dsv_DVOeaoGOuRWG5Di1p6-r0H1JmIfUR2-pS03nrOtPeffFiZsqsNSeQ=w2400"
  
  return(
    <div className="centerDoc">
      <h1 className="headers">ARTISTS</h1>
      <div className="row">
        <div className="column">
          <div className="card" data-aos="fade-left" style={{width:"100%"}}>
            <img src={ doob } alt="image1"style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>doob</h2>
              <p>the schwiggle</p>
              <p>The human behind the Project doob, is called Joe Nemcok, he lives in New York and has Slovakian roots. Believe it or not. But he is a real person.</p>
              <a href="https://soundcloud.com/jdoobn" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src= { soundcloud }></img></button></p></a>
          </div>
        </div>
        <div className="column">
          <div  data-aos="fade-right" className="card" style={{width:"100%"}}>
            <img src= { jovan } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>nihilij | voj</h2>
              <p> the fraggle</p>
              <p>Our one and Only Jovan M. Theres not much to say, he lives in California and plays piano.</p>
              <a href="https://soundcloud.com/definitely-jovan" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></p></a>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-right" className="card" style={{width:"100%"}}>
            <img src={ rysavy } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>rysavy</h2>
              <p>the whomble</p>
              <p>Rysavy, is the project of Denis Rysavy, Turkish and German roots, he is currently living in Germany.</p>
              <a href="https://soundcloud.com/denis-rysavy" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></p></a>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-left" className="card" style={{width:"100%"}}>
            <img src={ k_owl } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>k-owl</h2>
              <p>the skripple</p>
              <p>K-Owl - living legend Kasra Sammak, Persian roots, from USA, currently housing in Berlin with his cat Bear.</p>
              <a href="https://soundcloud.com/k-owl" target="_blank"><p ><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></p></a>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-left" className="card" style={{width:"100%"}}>
            <img src={ enigmachina } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>enigmachina</h2>
              <p>the wump</p>
              <p>Alban Rumpf is the person behind the  Enigmachina Project, chilling in Oldenburg with his girl and some cats.</p>
              <p><a href="https://soundcloud.com/theongoingarcanum" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></a></p>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-right"className="card" style={{width:"100%"}}>
            <img src= { nox } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>nox</h2>
              <p>the winkle</p>
              <p>Bremens one and only Nox ( Henry Fynn ) is actually a talented artist: <br></br>check out his <a href="https://www.instagram.com/henry_fynn/?hl=de" target="_blank" >Instagram </a></p>
              <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></a></p>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-right" className="card" style={{width:"100%"}}>
            <img src= {tenebral_cortex} alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>tenebral cortex</h2>
              <p> the quirkle</p>
              <p>Tenebral Cortex emerges from the mind of french/greek artist Ioannis Karapostolis of Greece. <br></br>He is currently living in France.</p>
              <p><a href="https://soundcloud.com/tenebralcortex" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></a></p>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-left"className="card" style={{width:"100%"}}>
            <img src= { beep_etc } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>beep etc.</h2>
              <p>the weeble</p>
              <p>beep etc. is Tanis Nielsen from Denmark!</p>
              <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></a></p>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-left"className="card" style={{width:"100%"}}>
            <img src= { tsev } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>tsev</h2>
              <p>the wubble</p>
              <p>tsev is Mario from Greece!</p>
              <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></a></p>
          </div>
        </div>
        <div className="column">
          <div data-aos="fade-left"className="card" style={{width:"100%"}}>
            <img src= { disektor } alt="image2" style={{marginTop:"50px" ,width:"500px",height:"500px"}}></img>
              <h2>disektor</h2>
              <p>the crunkle</p>
              <p>disektor is Simo Masouri from Morocco!</p>
              <p><a href="https://soundcloud.com/nox_sound" target="_blank"><button className="button"><img style={{height:"30px;",width:"30px",border:"none"}} src={ soundcloud }></img></button></a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artists;