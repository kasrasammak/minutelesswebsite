import React from 'react';
import Min  from './Components/Texts/min_va_text.js'
import Und  from './Components/Texts/underwhelmed_text.js'
import Ard  from './Components/Texts/arduous_text.js'
import Pul  from './Components/Texts/pulviemscri_text.js'
import Rys  from './Components/Texts/rysavy2_text.js'
import Nox  from './Components/Texts/nox_text.js'


//RELEASES
//This will all go to backend when we implement one
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
    title: "03. Romeodark - 🅕🅡🅐🅖🅜🅔🅝🅣🅢",
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
const arduous = [
{
    href: "https://drive.google.com/file/d/1IRWdnnw4jqHV3iIUQ1rqFw9gaR18qv14/view?usp=sharing",
    title: "1 - Shore of Laments"
},
{
    href: "https://drive.google.com/file/d/1wau2P3qP5W0uVVnWGerW2opW0dr6QuZT/view?usp=sharing",
    title: "2 - x Fat Freddy - Praise the Strigiforme"
},
{
    href: "https://drive.google.com/file/d/1YvmIk8Z9d7A_c4TazW6XzUs18cJmvaEc/view?usp=sharing",
    title: "3 - Husk"
},
{
    href: "https://drive.google.com/file/d/1823iZWHWMHLPtkU6wKqaXUca4Wvce4M0/view?usp=sharing",
    title: "4 - dogeeseseegod"
},
{
    href: "https://drive.google.com/file/d/1VBlaxdk-cjeM1oSGXWyItfeE21TK91GW/view?usp=sharing",
    title: "5 - x Disektor - Foleyarium"
},
{
    href: "https://drive.google.com/file/d/1eCCS2qBiaaiivKdpKhEt55JSaz3-Blun/view?usp=sharing",
    title: "6 - Flagellate"
},
{
    href: "https://drive.google.com/file/d/1CZOsRXMkWjxxYRqT_GVDzxNVUeQiz5K-/view?usp=sharing",
    title: "7 - Visitor from Egnamis"
},
{
    href: "https://drive.google.com/file/d/1h5PHiTav1RRkjjBn2QZCrGDRfAzLEJO1/view?usp=sharing",
    title: "8 - Abstract Logics"
}
]
const pulviemscri = [
{
    href: "https://drive.google.com/file/d/11jgfV1jzHJ6bouTcI0UDjfEQV8sYuPGk/view?usp=sharing",
    title: "01. Kfaraday - 3Dti"
},
{
    href: "https://drive.google.com/file/d/1BfE5wa5EyeqfQ_y1OBsNKn51Q6d_bgBK/view?usp=sharing",
    title: "02. Dagshenma - Gurigan dyne"
},
{
    href: "https://drive.google.com/file/d/1KgHP6U8YuK-jVTj7DlYcSYBJwsI9OZRo/view?usp=sharing",
    title: "03. Dino Felipe - Apocal Malaise"
},
{
    href: "https://drive.google.com/file/d/1EBBrEzZklA1jOZSzeLyTg6XRiiJUSEYg/view?usp=sharing",
    title: "04. FishingCat & Athrotaxis - QQQQQQQQQQQQQQ---------untitled2-QQQQQQQQQQ^^^^^^^^QQQ800000000a"
},
{
    href: "https://drive.google.com/file/d/1Nc8eVbRp3H98waRTKkhkD3ULP6vIJ5KZ/view?usp=sharing",
    title: "05. Athrotaxis - flintapsia codumine rassiesk"
},
{
    href: "https://drive.google.com/file/d/1BN6rhgl46z2aISZxdCIIPkoxYbNy-9zb/view?usp=sharing",
    title: "06. Athrotaxis - damprense the volliomeugges"
},
{
    href: "https://drive.google.com/file/d/1jIvQe5u1BnHqTnegRUgan8iZF0ugapej/view?usp=sharing",
    title: "07. Athrotaxis - flintopnarea tranglosse"
},
{
    href: "https://drive.google.com/file/d/1cKisUJjd_M4WBTRNpnhs3kzkQh2-KIFt/view?usp=sharing",
    title: "08. Part A2 (Orochi Rmx) (Kazuaki Orochi)"
},
{
    href: "https://drive.google.com/file/d/1Xc1dhHww8Mp-SBqY5J5-0tXQvxcCIOKn/view?usp=sharing",
    title: "09. Robotic Joe - 12 Skeletons A2"
},
{
    href: "https://drive.google.com/file/d/1Tz4gF7LSs3p99VFaKL2ywoRqfG4SE1GY/view?usp=sharing",
    title: "10. dino felipe - for chronic pain (sounds of Athrotaxis)"
},
{
    href: "https://drive.google.com/file/d/1xubp1yo2RalzVfh5vYkdZE2EP3qcDWTB/view?usp=sharing",
    title: "11. Cyte - Thirteenth skeleton fucks the bicycle neuron(Cyte remix)"
},
{
    href: "https://drive.google.com/file/d/1r_WjjG5aF4JPuFYZ10AKct5xfet0wRQp/view?usp=sharing",
    title: "12. FishingCat - untitled2"
},
{
    href: "https://drive.google.com/file/d/1UDz-J_WoM2oahFm1mvON1qbUpZ69Mk8M/view?usp=sharing",
    title: "13. EW - Teejnuflo1a(template+riverclips)"
},
{
    href: "https://drive.google.com/file/d/10DskIe-GnojdVOTLPlLfc7SZbsd1J9nZ/view?usp=sharing",
    title: "14. Robotic Joe - 12 Skeletons B2"
},
{
    href: "https://drive.google.com/file/d/1JOCS-9v7GEUbIdFk63sGKBm-VPjWQI8S/view?usp=sharing",
    title: "15. Rainbow Vomit and Cum Bubbles - bathromaxes2"
},
{
    href: "https://drive.google.com/file/d/1iXFTOTsoTI0axJet7W3XXQ2v7kGQbMhf/view?usp=sharing",
    title: "16. Vypul - Amorphous Form"
},
{
    href: "https://drive.google.com/file/d/1h7dQTn1Tpok_-1HF9OSgwXI7ugb3cgk3/view?usp=sharing",
    title: "17. Moltandi - wadsthisone9"
}
]
const rysavy2 = [
{
    href: "",
    title: "01. die Dürre"
},
{
    href: "",
    title: "02. minutelessafterchill"
},
{
    href: "",
    title: "03. Mixed Up People Remix"
},
{
    href: "",
    title: "04. the gang"
},
{
    href: "",
    title: "05. LowBeat"
},
{
    href: "",
    title: "06. nevermind"
},
{
    href: "",
    title: "07. New Level of Happiness"
}
]
const covers = [
    "https://lh3.googleusercontent.com/CBsrSflHqrrAMW1WV8-gYAl28BhWe8NxwDwjvHHtvy7JbuWzCQ1uQ56W8BDBcZOUhHOFxPjfgCpx1uTKS3rGsNPBiLmzNTqb8_JjMlrcpLgEEUtFztCQeAmQtLh--qE3JltjfIg3=w2400",
    "https://lh3.googleusercontent.com/VuckXlWcs6qtJ-HuyhuOf9aRKCbR1Vnmwb_I5CSBKf-g4s12CV9AThtuawbpej_tLSjix-RMLriqjaIHK8VXFoScRgUFCPr842ErBs16akf3qG69QqkejyKF711Ce5M3A-dE5VpM=w2400",
    "https://lh3.googleusercontent.com/5fQX314vDdeMrFRUj3W6JJEnXbO9NU9upezlUU1ibGx3134_SAYMEqdW84Q_ytZXzMFMcXRZCH_Lb9d7pyKXqD6RHD8AuLBIwA4cmevJ0-04xsISEomaGXivPN8ALhaeQtp15Cbp=w2400",
    "https://lh3.googleusercontent.com/ftJbuZ0zYcYw5l_vextZP8XXTDvQFbcFSYUIxKjerDkie_pKa321NHDeo2fBMexUwYzvthL1yYWp3EQp1bvVve6A8u8qIQi6s7DckCKtudbzWFwFC5gA_bN_Mfo7NXUmwWlU2tdY=w2400",
    "https://lh3.googleusercontent.com/iIrFEJBNmB2CzfJJnqdLEENUwt_9HGyNfieLuczt3THx_VZdPOxXzJxkn-QvstoAGnnu6sR4A41qfbSiQ66_kbxkEGUjAiSupkXOyAqfxozIlMRvvS0eFJrxhW5QOjW4hLhC6VAILw=w2400"
  ]
const dl = [
"https://drive.google.com/drive/folders/1oJjItBypWsJUCULm_YsKeVI_P-9pMPwc?usp=sharing",
"https://drive.google.com/drive/folders/1DQTvygOl2Djqjv0zyb6C3v0JMiBt4xou?usp=sharing",
"https://drive.google.com/drive/folders/15FwSTmChke0k7bbtPiCnDvejYCaHqsX-?usp=sharing",
"https://drive.google.com/drive/folders/1ocpx2A7tPZjNL88HT3kquzruoXpM3uku?usp=sharing"
]
const releaseInfo = [
{
    album_name: "minuteless debut va",
    artist_name: "",
    title: "compiled by Kasra Sammak of K-Owl",
    dl_text: "Download Full Album Here",
    description: <Min/>
},
{
    album_name: "underwhelmed",
    artist_name: "rysavy",
    title: "written and produced by Denis Rysavy.",
    dl_text: "Download Full Album Here",
    description: <Und/>
},
{
    album_name: "arduous recursion",
    artist_name: "tenebral cortex",
    title: "written and produced by Ioannis Karapostolis.",
    dl_text: "Download Full Album Here",
    description: <Ard/>
},
{
    album_name: "pulviemscri textra",
    artist_name: "",
    title: "written and produced by various artists",
    dl_text: "out now!!!",
    description: <Pul/>
},
{
    album_name: "not yet titled",
    artist_name: "rysavy",
    title: "written and produced by Rysavy",
    dl_text: "Coming soon!",
    description: <Rys/>
},
]
export const releases = [
    {
        "cover": covers[0],
        "dl": dl[0],
        "releaseInfo": releaseInfo[0],
        "tracklists": minuteless,
        "fade": "fade-left"
    },
    {
        "cover": covers[1],
        "dl": dl[1],
        "releaseInfo": releaseInfo[1],
        "tracklists": underwhelmed,
        "fade": "fade-right"
    },
    {
        "cover": covers[2],
        "dl": dl[2],
        "releaseInfo": releaseInfo[2],
        "tracklists": arduous,
        "fade": "fade-left"
    },
    {
        "cover": covers[3],
        "dl": dl[3],
        "releaseInfo": releaseInfo[3],
        "tracklists": pulviemscri,
        "fade": "fade-right"
    },
    {
        "cover": covers[4],
        "dl": "",
        "releaseInfo": releaseInfo[4],
        "tracklists": rysavy2,
        "fade": "fade-left"
    },
]

//ARTISTS
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

// const profiles = [doob, jovan, rysavy, k_owl, enigmachina, nox, tenebral_cortex, beep_etc, tsev, disektor]

export const soundcloud = "https://lh3.googleusercontent.com/kaGNknUvQbftdzBemEdfdg50FJgYGOEQDUHMrfldLwTeVlSUXhKRs5nnEluXZPC9eqxOj-KaZSd5OLAP0dsv_DVOeaoGOuRWG5Di1p6-r0H1JmIfUR2-pS03nrOtPeffFiZsqsNSeQ=w2400"

export const artistInfo = [
    {
        "artist": "doob",
        "nickname": "the schwiggle",
        "description": "The human behind the Project doob, is called Joe Nemcok, he lives in New York and has Slovakian roots. Believe it or not, he is a real person.",
        "soundcloud": "https://soundcloud.com/jdoobn",
        "profile": doob,
        "fade": "fade-left"
    },
    {
        "artist": "nihilij | voj",
        "nickname": "the fraggle",
        "description": "Our one and Only Jovan M. Theres not much to say, he lives in California and plays piano.",
        "soundcloud": "https://soundcloud.com/definitely-jovan",
        "profile": jovan,
        "fade": "fade-right"
    },
    {
        "artist": "rysavy",
        "nickname": "the whomble",
        "description": "Rysavy, is the project of Denis Rysavy, Turkish and German roots, he is currently living in Germany.",
        "soundcloud": "https://soundcloud.com/denis-rysavy",
        "profile": rysavy,
        "fade": "fade-left"
    },
    {
        "artist": "k-owl",
        "nickname": "the skripple",
        "description": "K-Owl - living legend Kasra Sammak, Persian roots, from USA, currently housing in Berlin with his cat Bear.",
        "soundcloud": "https://soundcloud.com/k-owl",
        "profile": k_owl,
        "fade": "fade-right"
    },
    {
        "artist": "enigmachina",
        "nickname": "the wump",
        "description": "Alban Rumpf is the person behind the  Enigmachina Project, chilling in Oldenburg with his girl and some cats.",
        "soundcloud": "https://soundcloud.com/theongoingarcanum",
        "profile": enigmachina,
        "fade": "fade-left"
    },
    {
        "artist": "nox",
        "nickname": "the winkle",
        "description": <Nox/>,
        "soundcloud": "https://soundcloud.com/nox_sound",
        "profile": nox,
        "fade": "fade-right"
    },
    {
        "artist": "tenebral cortex",
        "nickname": "the quirkle",
        "description": "Tenebral Cortex emerges from the mind of french/greek artist Ioannis Karapostolis of Greece. He is currently living in France.",
        "soundcloud": "https://soundcloud.com/tenebralcortex",
        "profile": tenebral_cortex,
        "fade": "fade-left"
    },
    {
        "artist": "beep etc.",
        "nickname": "the weeble",
        "description": "beep etc. is Tanis Nielsen from Denmark",
        "soundcloud": "https://soundcloud.com/beepetc",
        "profile": beep_etc,
        "fade": "fade-right"
    },
    {
        "artist": "tsev",
        "nickname": "the wubble",
        "description": "tsev is Mario from Greece",
        "soundcloud": "https://soundcloud.com/chev-5",
        "profile": tsev,
        "fade": "fade-left",
    },
    {
        "artist": "disektor",
        "nickname": "the crunkle",
        "description": "disektor is Simo Mansouri from Morocco",
        "soundcloud": "https://soundcloud.com/disektor",
        "profile": disektor,
        "fade": "fade-right"
    }
]
