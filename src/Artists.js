import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { artistInfo } from './consts.js'
import Artist from './Components/Artist.js'


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
        { artistInfo.map(data => 
          <Artist 
            artistInfo={data}
            soundcloud={soundcloud}
          />
          )}
      </div>
    </div>
  )
}

export default Artists;