import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function News(){

  useEffect(() => {
      Aos.init({ duration:2000 });
  
    }, []); 

  const flyer = "https://lh3.googleusercontent.com/65JfYNHWuito7Y23CkqcAUZnrZSReplUel0GKDlrmxo3PpP2MH_lMTnLD5dEeePzfSN1Nle4fYJHJVuhULYXxl349UHQZ9XFaJSVoA0rphtXDRt5r_FsJVf4VHuSSYBKtt9bCEJ3ig=w2400"
  const flyer1 ="https://lh3.googleusercontent.com/sDE4UjUsMwHKmy-aQ_xa9h_sDTTzn9R7SfRxULPmU0arczcuC2c0jnJ2irNSM4v1yVz_ZCnBFIxzZ4n33xrAZOvtCDLtGJr0JccGMi__3CkIbbwkfKmgyFyGPPrkXEhpWakplYvT8CjgMHyy8q-i5JStd0R2RsyIKDS7fXI9u7BQqV2hBBmXPelp5FdaJZPS32TLgLDvV3RQTt_Bcl20PANxf3Azt1mJm1ZJnDGrnEy3-vDjCVtjyVtcxlxfAbbETu9l3PG-iEDV1SZOn5CopzJ0fzVJYh-HbJK9FKqH2Tu0P59hyJG3SiU-gxxIAGetBPD8U9HoNfnYJcu6y0MAkNUOSjMMkLTpw3y8bBbuqS5lBwQPXzWY5GXV9Md9Nt0UY7K1iibOO3VLHUVjvQxQ_rgANYvkTT27DO1wiswRLSqt_Vd-YpM494QkAbtoq44cI1f6Hm9uLZrh7HMwykyS2NP_GeGEPPgav2EcdRCyNk3PuP9-FsQM7kf8XT-AKAMJSG5Qi4_1titMnYscv437FSryyLKiE4Hfdm3PXjQX1L-E6fA8o1PBfFnLc5nzvawMsRNFrjV7rtZ_gMU4p6oi3I7tN-HhfRkPftAj7SU9wfEuzk2Q2q_QNPWV138XlOIYuN_-7hecsZLM06pv6AJ7AAz2OSchwqtCvNqEloBCHI7Nf2A40rOVYjw4xmg=w707-h969-no?authuser=0"
  const Aaron = "https://lh3.googleusercontent.com/15Zp-BYhN3X2XPAxOrwZ9RpnqMdb8nAMiQ1EBtsGIj38dmfDRqZmxtIKJG3pWxlgHXSqv5UMeV9je1O9DvOOlqMU7W2r7Vo_t-pOXjqpFNQCIABPMip9mqOiZu9XOI_d_4IaL9sJCgNzrkDeJoIMc_09XoZ9adTNBZbxFPZjqEqKtm0xYkPWn0WpKQd66zyqv0WsnSlvJRlp8VKR7y2xM7Ume8jh_u-XsQoKtOFPxUtQok5qxFpjcJwSSwWJMcrJvBVUG5KIXspVT0jOPcXXFmu6YTEwHoqUN-Ek0TR-UseSogd_7nMmY7-9hA4bj8owGjsXVX6mBs5BVzsnqEWwzHPrd7EeDbY_1st3sQEySFz-1DePeg5YV22qQNpnzd9pX2cliXfOkOYTg8oaAKzzEjN9u_yqc6bi0Fbhm6TrfljVyMc8cQOdf2MYgMhbSglgf29qAoXPN32lEqNKQTNOMH-8q4LxvsykcvCa5tum7at1SHSV1BlLFMzi4xDdELOsB3JDXMzBG2lhXiKKvzCfjEW64Ny3iFfilLC6o9X1pK4m-C_JZW0V2LK9tpFitwxsqYejSet_MosyZL22ETGMZnA0YOoDQ5uTTzM0Q_M5RtAPTGbRFI45A71R0aYF51C0Hwq2nJQ7FrtkVP7qIUnPXrsh8k_eGDpI45V9z8o2YouZhkMcsWRyVmjfKaY=w256-h419-no?authuser=0"
  const Eleanor ="https://lh3.googleusercontent.com/kEwUUiIuMQ1Eu-j8XEF28FSvxfzuqe9PKdSJqP__Ijm088EQf8lzjlQ-NCyWyMstR1W5AjdgjKiQ4fmPCCwQpI_1Mhz3tCYaQMMYNpDO4S5bjMueNE4cixxbsFMEDyiTE-_BboJGX12NNUmM0IBWspPYZtOBMGiu4koro9x0XSwrBPoINPAVCicrRVpirdzHzwgYQ-ydcIjfAS8-FfvCiXav3on8s9LIgS62WT4FEI8sjktBPQKTKEDspnmEXlmwKg2wC3aNFo3miWi84QolGfT71V_K1wohCbjNun37k8cDAa4SapgFU2I-G_c7wtQpLp20H6P8QK6525pBZjjYSXxUUEXIRJGK2yG5_rPnofwQN37vDzya9zKjmd8v14dCCyT5QAjTzkkDCrcX4llHn84LGNKKH5sbtaDzVce60xctfdH1hZBiIxITfbobgeVyZW53jN-BdWCvZGBrNTEyNX_LN7WwMtr-vRO3tdJ6XksdcP03X6cvq5-ENna401S9-XMjHYLRIieXu5XaCtJ8gaaKdIPd3he2G8CYJ7NQsqxzsm5ljoPkC7jSdGCxQGJAeHTahzq1q4RPlOL-km-6_D7gRHZ2L-tWW_hZSn4pUcjbT4MgYUyFLGr2ADIwNArhl-qW67_TnyHncQ0PM0kL6Vg2R8ff9dNsmIhp4WnYNwq37IOdi_3X0JN3Ngg=w306-h230-no?authuser=0"
  
  return(
    <div className="centerDoc">
      <h1 className="headers">News</h1>    
        <img data-aos="fade-up" className="news" src={ flyer } alt="flyer_image"></img>  
        <br></br>
        <h3 style = {{marginBottom:"100px"}}>Artist Alert  :  " Welcome <span style = {{ color: "pink" }}>Eno Gata </span>from Audionimus to Minuteless Recordings ! "</h3>
        <img  style = {{ height:"350px", width:"350px"}} className="news" src={ Aaron }></img>
        <br></br>
        <h3 style = {{marginBottom:"100px"}}>Artist Alert  :  " Welcome <span style = {{ color:"forestgreen" }}>Alien Lazer Baby </span> to Minuteless Recordings ! "</h3>
        <br></br>
        <img  style = {{ height:"350px", width:"350px"}} className="news" src={ Eleanor }></img>
        <h3 style = {{color:"orange"}}>Minuteless Recordings Covid 19 Lockdown Livestream #2 ! <br></br>
        <br></br>
        Starting Friday 13th , November 2020</h3>
        <br></br>
        <img data-aos="fade-up" className="news" src={ flyer1 } alt="flyer_image1"></img>  
        <div style = {{ height:"200px"}}></div>


      
    </div>         
  )
}

export default News;