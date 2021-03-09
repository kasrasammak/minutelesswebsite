import React from 'react';
import Min  from './Components/Texts/min_va_text.js'
import Und  from './Components/Texts/underwhelmed_text.js'
import Ard  from './Components/Texts/arduous_text.js'
import Pul  from './Components/Texts/pulviemscri_text.js'
import Rys  from './Components/Texts/rysavy2_text.js'
import Nox  from './Components/Texts/nox_text.js'
import Rys25  from './Components/Texts/rysavy-25_text.js'



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
    href: "https://drive.google.com/file/d/1SO5V0dkkOFq8vyWZG_iYYM6N4QnDPTmT/view?usp=sharing",
    title: "01. die Dürre"
},
{
    href: "https://drive.google.com/file/d/1lJX4_-814xMqisX6VdYye8iG3vblyU7R/view?usp=sharing",
    title: "02. minutelessafterchill"
},
{
    href: "https://drive.google.com/file/d/1p5HJcGAlx6lXbC71vQYcTrConsG2HpM7/view?usp=sharing",
    title: "03. Mixed Up People Remix"
},
{
    href: "https://drive.google.com/file/d/1bpbSn0cyoAnEbQJ8BVtN78G3CjNa89AF/view?usp=sharing",
    title: "04. the gang"
},
{
    href: "https://drive.google.com/file/d/1kmnjTr7RWwOpQOFbaDYDmAGT65HVU-il/view?usp=sharing",
    title: "05. LowBeat"
},
{
    href: "https://drive.google.com/file/d/1rYjc7eUlGV0hP16cbDrnj1I1mG1Mqpgr/view?usp=sharing",
    title: "06. nevermind"
},
{
    href: "https://drive.google.com/file/d/10rY8mTdPCB-QljkCHYFBh8LLvwGrxAe9/view?usp=sharing",
    title: "07. New Level of Happiness"
}
]

const rysavy25 = [
    {
        href: "https://drive.google.com/file/d/1K_orqMkQ784kGojgFCty3yZXahuk8fp1/view?usp=sharing",
        title: "01. Total Rysavy"
    },
    {
        href: "https://drive.google.com/file/d/1H-BplHM4mpw_dbjfGJkcY7vporVac_f7/view?usp=sharing",
        title: "02. Chaos"
    },
    {
        href: "https://drive.google.com/file/d/1okQxGHlAczEgJYbaZk_FPQSOjXhW9GLw/view?usp=sharing",
        title: "03. Damn"
    },
    {
        href: "https://drive.google.com/file/d/1VoxzkUlA0lbHxRdltl6oTmLXylv7xwwu/view?usp=sharing",
        title: "04. Dont Fuck With The Witch"
    },
    {
        href: "https://drive.google.com/file/d/1SCec6D0gkIuMxwzu9EFI-IZL9wYdOUEd/view?usp=sharing",
        title: "05. Goodbye"
    },
    {
        href: "https://drive.google.com/file/d/1Ng4O0XB9bBC2qYr0l2EEWuUdp601-iQ4/view?usp=sharing",
        title: "06. Oxy oder Heroin"
    },
    {
        href: "https://drive.google.com/file/d/1eIWI5ciTSGZVhqkxNBJBJ7YGctHuw3CH/view?usp=sharing",
        title: "07. Broken Youth feat Karl"
    },
    {
        href: "https://drive.google.com/file/d/1tlprdb9grZgMbIp2H8zIkJGx2zmnjFIP/view?usp=sharing",
        title: "08. Keta"
    },
    {
        href: "https://drive.google.com/file/d/1ntMA5Spzl4DzHYUObSM7kYBRlxnjUz5m/view?usp=sharing",
        title: "09. FU-Winterdepri"
    },
    {
        href: "https://drive.google.com/file/d/1mF-1NSn_HidWeL5St0GlmX9-u-Ebfrwd/view?usp=sharing",
        title: "10. Lockdown fun "
    },
    {
        href: "https://drive.google.com/file/d/1pUfPAszciQFdfg7aDwy8tCnlNC0BPQA-/view?usp=sharing",
        title: "11. Minuteless"
    },
    {
        href: "https://drive.google.com/file/d/19KIc-V6nnKgUKOlyrTSbWHtwD79-NkH7/view?usp=sharing",
        title: "12. Mystery"
    },
    {
        href: "https://drive.google.com/file/d/14zAkS3pWuZ33mmDSSTSvV7NQ2-hJvX-H/view?usp=sharing",
        title: "13. New dub "
    },
    {
        href: "https://drive.google.com/file/d/1u2VS58dWq-lhIaCZvSdDry2o5yae4DEw/view?usp=sharing",
        title: "14. No Beat chill "
    },
    {
        href: "https://drive.google.com/file/d/1gJuTI8w-rFCI6aUPxMmNcGw6b_-SGquD/view?usp=sharing",
        title: "15. SchöneSachensindSchön"
    },
    {
        href: "https://drive.google.com/file/d/1s4wFqpSZqPdp5-IrQn-C-3Arrh2qKeO0/view?usp=sharing",
        title: "16. SchöneSachensindSchön DropDown"
    },
    {
        href: "https://drive.google.com/file/d/1NHthmamFM2-9p7U6zsDVOizID2d1-CYO/view?usp=sharing",
        title: "17. Sonntag"
    },
    {
        href: "https://drive.google.com/file/d/1gsaMU-dFiLFr-QYP4oC36XY_8PgU4oUk/view?usp=sharing",
        title: "18. Source"
    },
    {
        href: "https://drive.google.com/file/d/13mHjGKnvLB1fQRXCHNdScuDGoFFuajlk/view?usp=sharing",
        title: "19. Weirdness"
    },
    {
        href: "https://drive.google.com/file/d/1ShRZab0l1jTkiu0SVdLWw63tDG8ybqDj/view?usp=sharing",
        title: "20. Weired Acid"
    },
    {
        href: "https://drive.google.com/file/d/1rGU4ioZFN8LE7rlSmqzXTfBYqMzjc2L6/view?usp=sharing",
        title: "21. Weiter"
    },
    {
        href: "https://drive.google.com/file/d/1I8Quf8mVF3mZLeLe1XI6WXzadiVi3hQY/view?usp=sharing",
        title: "22. Its Okay"
    },
    {
        href: "https://drive.google.com/file/d/1xJDGUTXHirBJ2cPzgc3SQd4MUYvLPbDX/view?usp=sharing",
        title: "23. Yusuf "
    },
    {
        href: "https://drive.google.com/file/d/1IJ6GPCWvxWIEnJnr09xWwdllJeS0V7ik/view?usp=sharing",
        title: "24. Yani"
    },
    {
        href: "https://drive.google.com/file/d/14u9mIxgV_Jm9Z398aoOHQkZy1YGaiYCz/view?usp=sharing",
        title: "25. Yoro"
    }
    ]



const covers = [
    "https://lh3.googleusercontent.com/CBsrSflHqrrAMW1WV8-gYAl28BhWe8NxwDwjvHHtvy7JbuWzCQ1uQ56W8BDBcZOUhHOFxPjfgCpx1uTKS3rGsNPBiLmzNTqb8_JjMlrcpLgEEUtFztCQeAmQtLh--qE3JltjfIg3=w2400",
    "https://lh3.googleusercontent.com/VuckXlWcs6qtJ-HuyhuOf9aRKCbR1Vnmwb_I5CSBKf-g4s12CV9AThtuawbpej_tLSjix-RMLriqjaIHK8VXFoScRgUFCPr842ErBs16akf3qG69QqkejyKF711Ce5M3A-dE5VpM=w2400",
    "https://lh3.googleusercontent.com/5fQX314vDdeMrFRUj3W6JJEnXbO9NU9upezlUU1ibGx3134_SAYMEqdW84Q_ytZXzMFMcXRZCH_Lb9d7pyKXqD6RHD8AuLBIwA4cmevJ0-04xsISEomaGXivPN8ALhaeQtp15Cbp=w2400",
    "https://lh3.googleusercontent.com/ftJbuZ0zYcYw5l_vextZP8XXTDvQFbcFSYUIxKjerDkie_pKa321NHDeo2fBMexUwYzvthL1yYWp3EQp1bvVve6A8u8qIQi6s7DckCKtudbzWFwFC5gA_bN_Mfo7NXUmwWlU2tdY=w2400",
    "https://lh3.googleusercontent.com/iIrFEJBNmB2CzfJJnqdLEENUwt_9HGyNfieLuczt3THx_VZdPOxXzJxkn-QvstoAGnnu6sR4A41qfbSiQ66_kbxkEGUjAiSupkXOyAqfxozIlMRvvS0eFJrxhW5QOjW4hLhC6VAILw=w2400",
    "https://lh3.googleusercontent.com/_pjs5oeAt1WPVVPcDrTriQaLLm_AyU7oGXSrIs7VQyfz1FNlDyHr_fJ6STVKoz9SUEwq5xLmglKNIGSTAop2wVfv_tgaYT4z4T4TjOeWZ7XQH6O87xdl-B9ua9_BP7Tw8cnO3ZgZTA=w2400"

  ]
const dl = [
"https://drive.google.com/drive/folders/1oJjItBypWsJUCULm_YsKeVI_P-9pMPwc?usp=sharing",
"https://drive.google.com/drive/folders/1DQTvygOl2Djqjv0zyb6C3v0JMiBt4xou?usp=sharing",
"https://drive.google.com/drive/folders/15FwSTmChke0k7bbtPiCnDvejYCaHqsX-?usp=sharing",
"https://drive.google.com/drive/folders/1ocpx2A7tPZjNL88HT3kquzruoXpM3uku?usp=sharing",
"https://drive.google.com/drive/folders/11w1A7Sm76mmXyCcS8sBnXRZaEf8w5i5X?usp=sharing",
"https://drive.google.com/drive/folders/1CVqjpQoajy272B_odxQu-iElNKI7ukTU?usp=sharing"

]
const releaseInfo = [
{
    album_name: "minuteless debut va",
    artist_name: "various artists",
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
    artist_name: "various artists",
    title: "written and produced by various artists",
    dl_text: "Download Full Album Here",
    description: <Pul/>
},
{
    album_name: "not yet titled",
    artist_name: "rysavy",
    title: "written and produced by Rysavy",
    dl_text: "Download Full Album Here",
    description: <Rys/>
},
{
    album_name: "RYSAVY-25",
    artist_name: "rysavy",
    title: "written and produced by Rysavy",
    dl_text: "Out now!",
    description: <Rys25/>
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
        "dl": dl[4],
        "releaseInfo": releaseInfo[4],
        "tracklists": rysavy2,
        "fade": "fade-left"
    },
    {
        "cover": covers[5],
        "dl": dl[5],
        "releaseInfo": releaseInfo[5],
        "tracklists": rysavy25,
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
const eno_gata = "https://lh3.googleusercontent.com/QywILRYzUnS4tC0z91zDi0L1H7KrikkvTU0F8rwXMFugq4CfWR-_Z99XJndsik9qYIOB_dBHvAIgxNCrjfeMlTyv7dFsx0d7wq7smW0xuy_WvWp02sxTPhUHVVNhghd0y9cKJ-JXxSS6KOU9IaoD9RzY0laf9ScSKXWmf594eZ6oJUPHRbLvf8wbW7yOss9omhCRsFEsif0943cqpZB9WSKnPWqMAXJN0gPMg6YSxhwpepJLLhKnSR3uJ7cJlcFKyEM0K98ewq6dCwFERWiXHxnFgyPMNeYWLMSwJPWbKio_BgDlL3x0G6FKaXUFugs3mwnu6r75WZW0RgvxQLJx_4gnAAbm_jvTfrNYsVJ5HPqcxuslxyubR7rcFAMQHRF-g0R4sGq3l7_fSfvO-EKoRTpcFUrQjRByTA9SR5G02rpNsBwBB0EXdr564qF2JYSVIi-kLifTzcYV0HEoB5IY1i60OxsfpmFcg4e9yCJME5dna59-mmARMyF2711jCzc7UiDrMnPMZb34-X__8YsDYCkk1UjFV2KHC-B0uV52VzZBH0u5V4WOsO1J8lO5Gzdny43FYWXYdY90y-ptrvJO8LCMl5RRbH0KB5RZePw2w2hDWVAivvPMqAsYE_3hKIIvu3lkZ0Zq3srRd9XXhoKnZbtwhkG3iVHCP3c9I98TELNTOnZoN_Tk65rZy-0=w627-h970-no?authuser=0" 
const alien_lazer_baby = "https://lh3.googleusercontent.com/NOPJ-joPLiXe4wgyw-Px3m3KNSHXZ9-KiZPGh8eUYPVMmagLPCgaH0POju7_Cc3eUprOvdTzm93TH21XcQV6WPMsApDkZ71DkZ8AEYcvpTb7MM9zFP-kZ6Wj2ez_oP7owisyTEUwX83lUeFz1tD7zQPVXLVZloXkxSbC2blebS9xomntAsUKCfVW-6YyVMGA6leoK549QW8YQ45axeGortMuKgAziAOOIUjBx_3Datbzl21k09FSu-lqMd4-cDhPMngafRjdeIToNBZkwaMym2PEj0px3NOLyepAIruaB0MmJX7mM2pf8NjU6zPy_7FUGQlIISwHqWwpYurH5fbP0ioRtWa671B4x5Bvu291z-2R4kcDKnkE1hdmC29zT_gELjSafeNSRgsOGcq1n4dfcUoPyQUnqoDpRFYuE8baoEDhdDV6kokakKDdImwXXHvb3x-p_VA0EFNmmmcolvubjwB-2cKDlfvtLHzS6c9U1izZUWR1nBS5T3mvKr5Cw8SLPF15gYpQtvNBLMvDKv33NdsOn68oc0Z7f4458jII-tRfzZQnoIr1coUKVzvJ52tsm79WGN6TGngN4WZ8OTaS__maMPrXqsWmcar4rSwV_cvLQnSuQ48f9nsLlWNSMleaXJyRP-GlQ3mNrbyC6wxx5o-wAkQzmAVyeAvSbLmO_3PH04BVDwGmQErWDj0=s969-no?authuser=0"

//ARTIST ICONS 

 const doob_ICON ="https://lh3.googleusercontent.com/o_nJCZod8U0sl1ipIN75BWET6uw4Uasma3coWt_YF6czWgmkMIgQNRMa6n3wXUnLGNCmsZFXNbVzyWn4H5MKO947ClYmC94jSly6-2kOiRhV3smCPxLhgbXA4L0UDzeDSQG5rHy05PLHdINPM6U56N-aPFwtG4z_dUvwDIofGLQoNOvCD_xsQDyXBCl3NcXNKhp-RWHisNPKmNCIppSXM_FzrT5L8eO1ok_VDGZY7VwI_RDpukKeHniv2wuBDcnv3LD3LE1MBCbo-pierfG6bt5rsTxcZ6in4TaE5IbBDyB5GuQCg6iL8_gh1V0h4fgm_3EYPBHeC3PdoiC3SKWcZzuWL-irzWiiVULEDIQJDQmVUs9_A2Z8MPTd20WvEuBdKXPs6Xxg6V2y8RkZDDhT4KJy7CoGfg5WKCmZjxYVZv-8B6Bzkl4iVoTMf4FsKWgq5-iQwBMPdA9IH-7vXV1UI-ecg_09mCwYpZVbfZeY-GF2vlU53K0r_DBsXvgyzrD7qDhVhM9gyhC0SBy3t9DKhJlUbCgNH57aRs8D0gNWCyc_HJo3cNPxROZw2gTRtppxV_wdtbd8TR4DBMPhz2jgER64zpS5ILMAc_6WbSwZN-2jsAhKO7DYNwkRu1yZxaDiu3b23d7D4R3Hsnzl6Ky-Dtd3X0C7ZQ6j_BkP1lSmKjHF2S_TiKMGRWguIoF3=w219-h220-no?authuser=0"
 const jovan_ICON ="https://lh3.googleusercontent.com/QJ7yWCjfUJV7SJtLH0XU-sdH7zPXzeEbXBPQtafg55OO9qgzq0uawoakNGbQVIKsXDmN8-3juYu5u6tk91MKS7d62iM8ePqXTg9iKHadm9W1mD0oVGvu4BjsPtXwj82ZWVwFCizfXjudjfQRgAesdBFn31S1mf9O4rAILV9jGOHpcHdrvafkemb2FXUtHy8PZHQDkOWOjX0j57sd2qvoCz3ocBa7zbioCpxqeAne3L8O5u36uQE6T3aD-yi_KMc7q_1P5iOEDHm5ZN8Ke7-fNrdvkBccTAZMM982LjqlgbYkz5FMhsuBiZ-uEjmNsHad6TpN3J5tSNPitWqZUKNNZzkSjhO2rs4UIZ6vuvJgWNgV-Zgf9r1KLh54GkIHolJh3DU8ZFjI2KPoEmEenICm9xPsjMW5e6inKeHjnyIIFnhKilf1CIDVAwISlDSrUx8yl6W4i0Vanr4jZwKpTnYXKuIJZDt31LvX83-wZ6_uONN6t9_nruWvicO7nLI3YUkvMiMQAlstyO2IZO5ZgMBw-GvyBQB5RCT2U0NmFI3uVAVzhEodOZOXULE1hbSn4gTWRlZl-8vgfJbfCdxcROZVwDL3PqeI_amGnEgTJd011MwQ-KQ1NoPkR-TWaR8vFIAouVdUxqpYbX85aPkRDslG0AV8tYtWrHTpSWLUQiLDAXZLAwJk2TKVaUH2XHT2=w501-h498-no?authuser=0"
 const rysavy_ICON ="https://lh3.googleusercontent.com/toAGukEw_SvENSD56EWgq2dYayFhU5ssxmiwVXjSDC9YoM0mCL3QZBcczGjynp7XSybhXoYxxvl2DcR1rP7qODq18RUAa5VPwX01MJq7fk_HKVPsOz5Ya0jxXHHdxZpQud9CzlebWPP8XiUeovaPvTm5SuReqvoTEyHDppk8sQ5jBvnBe7gSIU3iViVytXJjMwtU7N1JqPjJTks9ANZCrvm4hiCy3YS1y0yCT7_MwTbS1NpdKvMqMazrOmhfMc0BypDlp-eYkhmkbSEqT4v0SjqqKjOwGAPsU7zaYS0jGEnip8qp6aef3bA8tS4r0rk0-bP0uA0F4p_BQb4p2-OCEGfooHjuv21473JiIu63ZZ0VI3LCjpx-zhEwezggWzu7qX77vF-keeCm2HRHp-pWfAqoqeXe6K-ONhavW5-2PITOtbBNBSaXb_c_eGbDpqC2U44NPOXObtCdiraZhln-nlbWJkg3w3bSv1HnPpl0HsElUPqI4xj0luCdg8m-r70PG8_tludzL6LlQpGSnS3Hzh5QnlKIQXSUpBPU0_NPATs5B2E4MQYgPpUINV-OQpC-MfUynFbW4txcdxASOX_Jv-2UL_vQXmlyFmeP2vbA5zXmzcR2WDqUI2DOaNFZzfVINcaKq_L34MtLyRzG2cebws5aH62Yq3LE4UZb0IxzZUzeS-uXf_OkakeW-jei=w230-h228-no?authuser=0"
 const k_owl_ICON ="https://lh3.googleusercontent.com/7sMozmPnty59hsNDCBA92wYnpqXELDLxWg0UOQkd7Whdpmy_FDELXMRvLz049BXopRtrx8TN0RKHH1pfYvm1DVCyPu5yHshGP0ZA50pkDtSjAegwpDbul37fRFOX_EAuML821mZGSdoDGPZzXvVZwypLVoJkbrK8xpAbVJL2oAzm-zCJFQQ_IU5ETPKC9kkdxBNPI-5PyJjQGfThx6NguxAb0U3w9acM3m7yHm9qHUhCWfoDYDJ9X-_Wi8Oe5zZbL9cslmTlsXDCk0R57pFK1C4CqFVnSzcyu6p4hVQXOj7JhJ-J-CmIbvUjYBdgaPn2hVBEeLCMP1qYv-6EbMChpe_DEMC2-Nc_nK14sdQm8EAWeqxAf-Ee_QLtOPV49A_O_iorKcJ6IS6SbjAxXce3cwwrVr_t5Dr-LH64WRQtVZpzt6uVQyM_hA0MKHO1_IUo_K3oZGE9N0c0nTjddmDU0TKT1JB73O8DPsjGZLenV4EyBUcsX5a7O16e8m6xpPFTfn94f1TInqPt50XhDqMPx-2Tb_MAk8nLS-ctUwzFiJCizCGvDCyc0ZNaRh2t1NEJQ7L2FekUFaAZZREzuPNQCsE9bE5tW6g5xJcE39iJGCoP1jAU_IufxhNQYOIqMlOqek1aPSgSP0M3Xp4zcHfGUA4KYHnEMIX5LKkic7lKxU9i1pI5y_OhG6JX6gqj=w491-h495-no?authuser=0"
 const enigmachina_ICON ="https://lh3.googleusercontent.com/GSQT6jmozDS5eNohDn-UGWY8Jfjn6w0fG3XLKpH7renW5oaCkAf4KrT8SySVteCvn7gI1PAAHjgXH1rBE2blLHyA4jidYAO1j_WTFj1Xv5pbkYHcACSW4YaeRuZh5aunKqFtvjCGur4-P8VXm3zreeiSxpabJmrbdB0G3x6pAk3BCf162iSDTBGm8jIPsHC0wUUj4AxmkSPNomxqYhZppuXndU1wqgAHFElVgKIvJgRT5yivYoj7eozkI-76_oYmv6haUKdAKG-yo47p8DMK-5XgYTCXoD65DolU1xksrcbA4ohsxiKd0HYZI5uFTTcDl97RuP8zEiH4yEBn5vmtGyHR7wQoGKf6CudeLAvZZ_9U8QhWRUUuXj79ql1X_yNKpkZp5tx53E1NMWdh4HVMQ0h-7jkp4x9Iwa7eQ0o_JB-stbm2YsgcjeoAZgKfucSN87t3MNhbNiRQNNs1mo_6hnBY5pGlfb_q_HV7gIIYU9sN_EHnj_QJ20QMmI5sddrSb6fQPGzuEHdmZu4wnWJNRDiJmmOdWTTUnMYI4UhF87x3xkOKUGmt14Vsvg1z6J-S_MtKaEhFGc9xN7Q_dwiK-YUo9ii5ADl0kRi4r69HP3Zle3ihLQ_E-SzraoGTuU-dsqyeRhpx6Zg0-UJsN74wgaOpPlq1dN_mNxeG-d12mJcxAldeP6vprzHlR4VQ=w499-h497-no?authuser=0"
 const nox_ICON ="https://lh3.googleusercontent.com/B4BhWsb1QjSo05f744HoQeP1desYe7uR9Xv72qQkN7dtrUW8LtEQAIp6Dsw6f8iAYGXs2SgbwFeR0vKbZ1gnZmwS8ZnLHfNWlZ2ajlYAzX03BWQ9EupX6Pz4tlTBJPJWxm6OrlGjh9L4vC2DLanWk6E1LYSjoW-FknQnoYgHVbMa-Ztzjqmi4YPVHhGNnfISBiH2vx2tVkViCDTnRVrwBHlW4YDEeZturDvdglAW6eZ7rHoAlxJTHqc3kVkm3HQNmYddNlDSAsGtEyWhvsCZWicjI3jYzjTCp3PDO5-EnhLMoPRkrtkTRTKBFjF0ZIwOYsNJHenCvjzivNLy8KjlA06vjsHvg5Msz7dsf8_f50qSzZeLyptz07SvxxB-Cqutyn8OdHVhCMLjufDeDHBCiDoN64ImsBxlK7ExbSTiQcFvh_snHRyc_W60Tucd7VjSZBvBfu8xQ6r67rupb-kQu8QTdv3B8v_y_Ng_rIJJcuSrQhH6HVRPIAtcjo0jV4wks99jRnsOv6EwJwHrumVlxu0Hoa4ifGOwvTNBc00fVHz9Sozs2IAHLxbMuE0KJQA9929QZevQOfL0jHyLjrgEg4cKQw5F1oJUV9O7JyVtxT2jpVQIaxLiBTXNNjFx5YG9K2iLKZofL8kYNEWEuNw8lt1wglYoCzdDzIrAOnzUFJnhX6KVrbgBUR6JtKJW=w498-h501-no?authuser=0"
 const tenebral_cortex_ICOn="https://lh3.googleusercontent.com/LwuCXNa9R6J3X5nzvbppeYi-ljwnjMPuEG7e_7aPAVs-E7KxTixGOjNFwUYKHa_FNL7MLwTZ8I-ajKO9D_pvxK7kOBhy8Ob-ZghkzIF5imBmeLg0mjddI_kf4U7F_csyTzFPmNY_6Qx4Qr1Y60rN7O4s_qF6qn9s4uGIemJ0_lc-HZD97v7Gd_g2c9Od3qyg7dWSx8XkWp9nXNlh6dA3qkYlpDCVwynJu59kU578hVftCIkxWIqF6dqSueu3DGwQHQ2-YaU6dJfEaGg1uIrFjKYVOPNUQ24dwK5Ny4eFLm4kMEm3wA4EKJg22zKrCzhFEui8UtGtTEb4TGVFQ756Cpvikd4JHRC5stkTLhr4YgJT5zXax0NSblAizKYg3u_4CGR6g2hLsZd78ZDBJ6XWSmqvbuintgS0MQXzt9rTut0VA_ij2KSK79j_SVDbrWjPnrD_x3C31quoex0by6kS0pELm5xwiMrreQEyAm70AXsbtmBe-J1nH7jiw9kIzwXamlnIIBYSskUj7glToXESzglmOgyixhNKI9L2ugVvJ2ylpsf7EUU1SfauPMLTR8ZpEPnliKVsUgHsRg3iDuGupsCAw_yHubarrYceCb4Db4jjkRUVIUNLFD5nShLx4h65IFKBAKk4mMnZZAga7qpL0yH8fUgwY48l9R9FNV8CLgWIxKDtGXdc-38g4oZY=w497-h500-no?authuser=0"
 const beep_etc_ICON = "https://lh3.googleusercontent.com/gbJjGhaaH1CWDFNH1P2viBBvGpXGmm8AHJZ5I9LyqGQduw-LXO5wbb5VysE_KV42-0hRU1_pkBref4MBf-9DiuK-CbmusPJT6WNAMaRtn1-TDb9i3wBNJ5iibH-xrqsqjYkhns5JvdheXYr5m6kcmqHz2UwK7L1IHsSEM5nimgTtEnriTTDCf-0yY30fal2gvQV1SMBGZ4RI2PN2iAry8wPZjy04rutiRUEc_JCgFmHZgJ3-4qYP-zHiF8KYi1DuGl2ofxR1iC_meUZ1cDs_yyHYDLSdLfDwHOElNjXK5HGuQFuXY5yPrnW9zjLkYhJlYokMpf9rtiE26btzlogAl7q3ZxeJEg_v-FgeJ6D2ptFUBdyjuK-B_odhgllK4mDsRA3ffAih3ZEBSNG-_1y5f7xQY9czjds62RPzdJrCSsCAbzBgzWKm9SAt0oR5y10FLmaQojQwbSKwkeNdcx7Km6ueJEZsma_j3naik4d7rxiQpSMK4VUUbwsA_eXbtje-7sbrGpIuW0kryt1uVcjxyqy_XycnyWavlleZe1txAyqyozIxB76paDYzjIEu8ZrbxAoZIAqK1j2BrBgeANOSPaYPk-74c3YnO-aGv9o2iejBNHCYowubaRki7DeOFWMS2wSkYK9_CeYunEM-vAB48uEQochAiJhCqEix158iyUnXrXUQzoiJfJdlT-o_=s220-no?authuser=0"
 const tsev_ICON ="https://lh3.googleusercontent.com/60q5pnifzqsye6tgv59TaVumcqejb8Wq5sNwK_2ImRYg2oxabiIPVWhaEzIY0gfvWjBvuxZG09GmM8k8nozRRXyug19WZFRMYEmLlbGZKFMPUI76YbcjHiZeK4VzvHJxcsdJdSqXjYE-tLCMpWSPnXtfg74Vadmr7aSP24GxKvXMCv3yzx10i2LsGTdqRk2mBI-WNkok56Cw-w1qrZSQbn1fK2F88Yo9EQvLKDdGRRcOaOyYBXSnkDZEr3e_hiOJbdQkkv4BCvRWW_0Lmlz6TLqVHpI1hRg2yTrF9SW5XDB-q8GTPQ2d3ADxSI5zfwp-UXcmBHAA-WeGMFaq_33qaOtk74jPlvEDCerCZvs0SRS6ofc4TkwGbpwglEO0PDuajtDYtAPgDQglG6J9Vunb50BKW31QASDZAQ4uMhD-SgjX2qVAEtEQUjROnOiin3ZLlCnM08K2jRYxVdAedRNbPMe4ufu4Zn24h0FTmtDByPbTilAQfuBJeuaHvJgRaYtwvrjt_GFpcu1J1K2h7KTRsz5mRdooxQkDN5eDHUu4_Ut79b_Q-2A8pI7GGPFwEGuwFF2P1BExw8lNUiie9Sz2Gjs0AY7Iq5x5jf9_9CAxqCYxD8MhexpzhSm0y2-RFYIhl_DXTI9FzZmcM1TZiqwbGUJKI3DEiaG-hCjQP2yXkOb0CdDn7kH8DAx2CJ6a=w496-h499-no?authuser=0"
 const disektor_ICON ="https://lh3.googleusercontent.com/K9665YF9IVfdK-hqzShU2K60wc_-7_QsVEjLaowk20u1TUboSl13pphOwFx86ikhacKJng3cJEwJIiI0WeeWvvnKVy5gG2xnM_kn8tQZ_5p05jJY0cba9HLsmkyXi1rsET-NmXCaQxC-L4JhNluwq58ApMBhVNn3Bv3b_LZ9MVoR-9QPOyB5pKuyH-Px21Had2jxVAHe82Cu4nZGBM_cokC9XOwVmswlBeZKvVM2AJUvoci5CBOTJZgAwn5x2M18SLZoroniblCPRcxkzSg1ZQXt2dfVyzS9G1T5wHnTc-XRY8djUFmr4b93hLgFeCYy-PfQ0KWqi_u9Akb80hCdgVI_1xfhO7a3f9fJ6-2yELk0MqUy0v4zKY67Cm1sU9kBJBN3r6yUufC0r3dhkhBAOHbyXAle97yKHGPcO6l056lm948sC9zuM_thKPmgFqom8qYrx87Ep7jLU6VHnYG3M-jEcQWjra6f0jBhrc6XcV8I-JJrbqEJiFZaoLAnLQE2jIPftHbQaVjnOEejMeuw1qjKlIWiNazHyDYbhmB93F6snTJsgSei2MugWQYkCdKyfoSHB1makS0fbICALHnYOmrlS9lIXied3mZn8siybxDaoeh7NiBm3wrJNzSQujpMJ1I5CnnIX-USZ42xqu61BTk9wioZC5rF2H3JwPgdROFAX0bEPgj8EVmfV1t5=w501-h497-no?authuser=0"
 const eno_gata_ICON ="https://lh3.googleusercontent.com/J9XeoHpdEvAsTAd83x-937pDZ_jsUz2TNkV7lJ8g2FNqEcF6N27H5iniZ5-G5CFGpMuyU_E-Qb2rwxlROH1uR-YhVARVkaI0m9ZpEeb2juVU7vCa_y_IUQGJZMC1jL90ndaTbboCQWZqOTF41l48FBziZ7kIBUdhkdqRErMOVNNGcRGskdVhhtYfdJa0ptQFevQHlSNYVMG4E2oz08Bv3l0sl_p-IP_QnquM2jRU0y6Rqefnjf9Sz57O5mu8fQ-gWvZrWydgYZR4zdMUt234BE6qUrTaaGYEKLTFwSpoZwGgDEU9PvGwaNDGQPe1nqx4_Yt8bjoCqpki-kJkn0jMK-jN7Ur-FluyjZ6ldXtX0SU3po_dJGZm7U5W0MsRAZqoSpiZ0gM7TrOvpzWumHlc9XamyTBK0yR-ywtUJ3SRAyEna0U9LbLiMlNvk5yfCQpYglo4r47csrQS1oEKHx-DZozwgOnPEVem89jxYpOmBKV2_cgHCVUdR5ZIB2dBgWfPEyU2k-VySSohAovYTLAaGTJTNz778IOInaen6LonVRNISvKwiLG5AMB4al7x4c_ePsqZc9OZAq5zjcDMpLRYxm2sQ0w7pigEZfGjB26DCk1s-kSmktAfrJDm0-YwE6DRwinZ3cj9Lo8aFYRnVzKhTlHn4VsDqPP0sZ6_vovTjFWxzHJppKR-c2XZKUud=w501-h497-no?authuser=0"
 const alien_lazer_baby_ICON ="https://lh3.googleusercontent.com/UwdYFjIcDtawvKxqds3LbUJpcU5HKH-StwrczbFWkALoEJYjf_o-3E1xnDMzj3d6durNv4jMSjXi1NgZRnOM5icE7Pz9dXDIa4zwCnIhYDnwieXcMz_wBxrLQWgUhFvbJyPKBWrfK_BYm1yvx9Fba6GlankxaMvprRUMWLIQsR-C318kxc_RecoYHVeitnct0aexUlHafkZlXydlFZ7-EP8WijcuC54vLL0nXtaCTRUcmyHwZjb_lgfA9_0NdV_mqY9vq_vgrQPWY53-g2NPThitlAmtePw2_CSt-CyREScWC_c5NCuwI6H04qY6TVi34SZp2sSUhZInsnd8xmAYK-rV75QMCdN8WBwwZJowyMTOmqjfgzqmXv2zPh69oqq-So7JGGWSH_EOkBJKpvn8xeczL_T6QLWLQMF-9LhunlQojlsYkbQof8iDfHdjSXz27yECNNliKnPTUWPB1_jqC_dWbBLLyGUt5ytw-u0qAgc2EtWABd2X0sgidENzQC2nDICCLOmW3tRy_dkwNnMZ5Gubd83ESWx7LeFP4aD0f6PUFpNvNOUXRnC41CoJNuME_RGDvDcoX3Q3tHuqiAf5wvL2KsK49NKaK5Y58OKWAgqIm8Kt-j79Q-8f2RFRQW7qSZhzdTxPElo-I2oM4kKC_snCkQ-SkZ4cpm4kG4AxBjVC6CVxUPbrZGtOYuaU=w497-h500-no?authuser=0"


// const profiles = [doob, jovan, rysavy, k_owl, enigmachina, nox, tenebral_cortex, beep_etc, tsev, disektor,eno_gata]

export const soundcloud = "https://lh3.googleusercontent.com/kOkHYzwpZffs6MreOXbtFPN8p-oSWTTZ2kxXbqS93Z8XcOkW4sDAl6AuuR3FNT9oNysXVTMeTptMV3gTuZqNEV3qmaAgXhe-3Dn4biV1OR-lRYT3TXSrSC4KBwiEnvnqcXtqCfrigc4jmyczia4eLDrH_FvFt_rh3jvaX3eX57ENW6H6QLFIWXaORrVvHCnHjte47sHtN2iN72k75g5n29AlBFsgj-T4C5cDvJ5qS7sLhPFklEFGwtmb8eI_f292tGKUTPMwbJspgfdPB2rm3xJvrNIN67AouEr9dkpyhqcS0txDxlsTb16MlCvsgXmVDlWl2iH9lPqOJnI-rkYM14SMegly19BKmjqJetZtLL9ooMocWUhWHE6FqbrHHGo2FuW7UPOAdEuBU7Lq8ABvQyahRUHkQi-M0fVm1vF09yH8upKZSUr2709EPfsOjbHSUZQ04e0AoavDiIpHp0IJpVMRI49oL3p5JpQ22jY7sMjeCcftB4Q6v_GhjIXCo79fuG2r5xpT89ztaRPMblfXZfhQXFpfOQ9PpYz_KMriuPTbGW53YtuwL46trdqYuaW_JqwvNH-_Ksf09qdgRrwqaXkiITlKK_JcvP7Kyt8rKPvnbEgJn0KM_ScEu4YGzXFekr2EPqCctCJtrJjOohFvy5G-IxoZAHSjgrKgYfbmmdsRfaBzDqgYiw23Bnc=s50-no?authuser=0"
export const download   = "https://lh3.googleusercontent.com/vs9euDxPdXapccFfiKFm1ef27oXelFci43RgaEgIKmos1-HoWYSVZAJY1hTmvB6nhDl6ortNVQuAaPAIevALlSFIXNsbg5eW5smiD5JdyFasKF-AOcUhiHFgnrI7VegPYVD6FVzvKjf-h_YnZqC2-5_lv4InmXzRxC-ccxylT3bs1NimExYlqlP3Kqblkifz-Hh0bN9U9Bqx1spO7pFFlQ-yxegtAKkLvNHlQFDt6BRtADyG-uQghXXjkFUE9XodLd4s0DAua6_yRC3X5XsEvvNqPChOj8QhLh85rfR8Hqb7Vop90hdsUmPw5PTZmr1I_WKlOE1zncfbef15yJBb-figrY_R_z9Neupou_OxX37cCp2UlFXoqusDJGyQC8c6v1rkJZy_rxfe9ZFvcWIC7kjbKf2XajtNdbu53ObUOVJsZx3YIhZXyicPIrOG6pXhEIWar9OOgIjQ5Mv9HMMj9Qh76yCNgQNa06gtTjpqbqEgNARcw08cu8FUYrcPVsdUu4fzc59Fc3_9y_qMxwO99TjgW0xbqUkk7W8bleD9O5P8NffAgniEYFBicGPT-5OwQMmxfQ7iYzzRTf3Cmo7quPEOCkAW-U3uH6vQhoxDfp-I8ABlZ4eC2FtL8JDEUNBw6zIx8JuUB9PlT7M8k7YpiFKPSAXoWGQG7zPZJFKycbHZy1rUdietZgP2rZ4=w512-h369-no?authuser=0"

export const artistInfo = [
    {
        "artist": "doob",
        "nickname": "the schwiggle",
        "description": "The human behind the Project doob is called Joe Nemcok, lives in New York and has Slovakian roots. Believe it or not, he's a real person. Java Developer, and creator of the doobverse",
        "soundcloud": "https://soundcloud.com/jdoobn",
        "profile": doob,
        "fade": "fade-left",
        "icon" : doob_ICON
    },
    {
        "artist": "nihilij | voj",
        "nickname": "the fraggle",
        "description": "Our one and Only Jovan M. Theres not much to say, he lives in California and plays piano.",
        "soundcloud": "https://soundcloud.com/definitely-jovan",
        "profile": jovan,
        "fade": "fade-right",
        "icon" : jovan_ICON
        
    },
    {
        "artist": "rysavy",
        "nickname": "the whomble",
        "description": "Rysavy, is the project of Denis Rysavy, Turkish and German roots, also a Programmer, he is currently living in Germany.",
        "soundcloud": "https://soundcloud.com/denis-rysavy",
        "profile": rysavy,
        "fade": "fade-left",
        "icon": rysavy_ICON
    },
    {
        "artist": "k-owl",
        "nickname": "the skripple",
        "description": "K-Owl - living legend Kasra Sammak, Persian roots, from USA, also a Programmer who is currently housing in Berlin with his cat Bear.",
        "soundcloud": "https://soundcloud.com/k-owl",
        "profile": k_owl,
        "fade": "fade-right",
        "icon": k_owl_ICON
    },
    {
        "artist": "enigmachina",
        "nickname": "the wump",
        "description": "Alban Rumpf is the person behind the  Enigmachina Project, chilling in Oldenburg with some cats.",
        "soundcloud": "https://soundcloud.com/theongoingarcanum",
        "profile": enigmachina,
        "fade": "fade-left",
        "icon" : enigmachina_ICON
    },
    {
        "artist": "nox",
        "nickname": "the winkle",
        "description": <Nox/>,
        "soundcloud": "https://soundcloud.com/nox_sound",
        "profile": nox,
        "fade": "fade-right",
        "icon":nox_ICON
    },
    {
        "artist": "tenebral cortex",
        "nickname": "the quirkle",
        "description": "Tenebral Cortex emerges from the mind of french/greek artist Ioannis Karapostolis of Greece. He is also a Programmer, currently living in France.",
        "soundcloud": "https://soundcloud.com/tenebralcortex",
        "profile": tenebral_cortex,
        "fade": "fade-left",
        "icon":tenebral_cortex_ICOn
    },
    {
        "artist": "beep etc.",
        "nickname": "the weeble",
        "description": "beep etc. is Tanis Nielsen from Denmark",
        "soundcloud": "https://soundcloud.com/beepetc",
        "profile": beep_etc,
        "fade": "fade-right",
        "icon":beep_etc_ICON
    },
    {
        "artist": "tsev",
        "nickname": "the wubble",
        "description": "tsev is Mario from Greece",
        "soundcloud": "https://soundcloud.com/chev-5",
        "profile": tsev,
        "fade": "fade-left",
        "icon":tsev_ICON
    },
    {
        "artist": "disektor",
        "nickname": "the crunkle",
        "description": "disektor is Simo Mansouri , Programmer  from Morocco  He has his own Label called 'Geometric Corruption'",
        "soundcloud": "https://soundcloud.com/disektor",
        "profile": disektor,
        "fade": "fade-right",
        "icon":disektor_ICON
    } ,
    {
        "artist": "eno gata ",
        "nickname": " ??? ",
        "description": "aaron from nowhere ",
        "soundcloud": "https://soundcloud.com/enogata",
        "profile": eno_gata,
        "fade": "fade-left",
        "icon":eno_gata_ICON
    },
    {
        "artist": "alien lazer baby",
        "nickname": " ??? ",
        "description": "alien lazer baby is Eleanor , fucking sick Australian Cunt , shityea ! ",
        "soundcloud": "https://soundcloud.com/sharkface_core",
        "profile": alien_lazer_baby,
        "fade": "fade-right",
        "icon":alien_lazer_baby_ICON
    }
]
