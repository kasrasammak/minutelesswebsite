import React from 'react';
import Min  from './Components/Texts/min_va_text.js'
import Und  from './Components/Texts/underwhelmed_text.js'
import Ard  from './Components/Texts/arduous_text.js'
import Pul  from './Components/Texts/pulviemscri_text.js'
import Rys  from './Components/Texts/rysavy2_text.js'
// import Nox  from './Components/Texts/nox_text.js'
import Rys25  from './Components/Texts/rysavy-25_text.js'
import PastFuture from './Components/Texts/past-future.js'


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
    const past_future = [
        { 
            href: "https://drive.google.com/file/d/1OCYk7QX6CL4qh25r1Wy2Vh24JsTpojgA/view?usp=sharing", 
            title: "01. dinAzor - Irregular" 
        },
        { 
            href: "https://drive.google.com/file/d/1SFdRwCon8Ns3M6tThloZ-HIw1VzdUyBq/view?usp=sharing",
            title: "02. Alien Lazer Baby - Everyone Does Things Differently"
        },
        {
            href: "https://drive.google.com/file/d/1qs9we7R4rqYC89Aczve-EQZYqiChji-L/view?usp=sharing",
            title: "03. ZigzaX - Now Is Less Than A Second Longer Than Infinity",
        },
        { 
            href: "https://drive.google.com/file/d/1YRwkPQA-QqE-ZEX5Qpwmpjtj3ucU_jX5/view?usp=sharing",
            title: "04. doob - Previously Now is Now Before",
        },
        { 
            href: "https://drive.google.com/file/d/1C3SrBqeyHHUPG85mYyFLPRhvPBve-LFy/view?usp=sharing",
            title: "05. K-Owl - Melting Plastic Mind"
        },
        { 
            href: "https://drive.google.com/file/d/1eF3j2D3U-9Jnu0MtfaHMFHPEEHrsFwud/view?usp=sharing",
            title: "06. Rysavy - YANI"
        },
        { 
            href: "https://drive.google.com/file/d/1jYh84UfBH6oUHdcmkPikX1Z8hTmw7mfv/view?usp=sharing",
            title: "07. Tenebral Cortex - Relinquishing Ariadne"
        },
        {
            href: "https://drive.google.com/file/d/1nLu_03zbQ2woH9oG8z44t3h5JgR5qFGk/view?usp=sharing",
            title: "08. Disektor - The Commit"
        },
        {
            href: "https://drive.google.com/file/d/1Sz4F0iXslvHnc9CP3REjniVAnPCu-3ET/view?usp=sharing",
            title: "09. Enigmachina - Wavelab101"
        },
        {
            href: "https://drive.google.com/file/d/1PRcSXSyXvWjK2ovP-hwoKQGWioAJFCrV/view?usp=sharing",
            title: "10. Fatal Error - Underwater Jazz"
        },
        {
            href: "https://drive.google.com/file/d/1yZc9kfwQeYaE2NQ_1wv47RbGP5ZqbRab/view?usp=sharing",
            title: "11. NumaNeith - N8475N"
        },
        {
            href: "https://drive.google.com/file/d/11hZhhX5Hhq5GJT6q4gCRfyD1ZydpHdTB/view?usp=sharing",
            title: "12. Nox - Kezun"
        }
    ]
    const loop_reloop = [
        { 
            href: "https://drive.google.com/file/d/1fDKVDJrPUs5eqiCzrwGR-B-Px0vKjoRL/view?usp=sharing", 
            title: "01. Alien Lazer Baby - Bleed Into You" 
        },
        { 
            href: "https://drive.google.com/file/d/1p8onxw7Dp_LJ5hrR2vXGoxVxvGr2WKCL/view?usp=sharing",
            title: "02. doob - sand planet bazaar"
        },
        {
            href: "https://drive.google.com/file/d/1cop6hzg2c9iGJ0kX9M3Wh7L4BqQTg9bH/view?usp=sharing",
            title: "03. doob - teatime at doobs",
        },
        { 
            href: "https://drive.google.com/file/d/1D48hlzCKqOBaOWhuS8Rr81I4QE6As2sn/view?usp=sharing",
            title: "04. Eno Gata - ich schwör ich habs probiert",
        },
        { 
            href: "https://drive.google.com/file/d/1hTleGjSiEuUDfdUnRZrSihzLm4sMoFHe/view?usp=sharing",
            title: "05. Hypercube - Spine Mechanics"
        },
        { 
            href: "https://drive.google.com/file/d/1-484O8cgEZLb2IbDG50zX8EZlhI7E-yd/view?usp=sharing",
            title: "06. Jim Kimchi - Error E"
        },
        { 
            href: "https://drive.google.com/file/d/1pJ12fR2692JjqRvOBxXD3b5kkBAdswSp/view?usp=sharing",
            title: "07. K-Owl - Slice Line"
        },
        {
            href: "https://drive.google.com/file/d/1-0wJyOhYvtszeWwtcWZVFNxCE_pdjruP/view?usp=sharing",
            title: "08. Rysavy - Let Your Art Go On"
        },
        {
            href: "https://drive.google.com/file/d/1ZbfEDukPnzCKW4vfvImaOtK7jfTN2aZW/view?usp=sharing",
            title: "09. Slicer - MI_RS (Mixing Ideas_Reversing Souls)"
        },
        {
            href: "https://drive.google.com/file/d/1kGhElswujtqEd1006QkVIKqGDsQGGFyN/view?usp=sharing",
            title: "10. Tsev - kabk pervert"
        },
        {
            href: "https://drive.google.com/file/d/1xqbs7ests0wpzbr55EovcynLUZag8qs7/view?usp=sharing",
            title: "11. Voj - Serums"
        },
        {
            href: "https://drive.google.com/file/d/1c38FeBEn1JnMWUegxytC_o7yWQpIQQUM/view?usp=sharing",
            title: "12. ZZY - Humans Not Dancing"
        },
        {
            href: "https://drive.google.com/file/d/1AuLCWtnkyq9UNFD1wfWCpZ520JYdtS_m/view?usp=sharing",
            title: "13. Psypower - Psychological Rewiring"
        }
    ]
//Create Link from Google Photos (Share Button), then paste link here:
//https://www.labnol.org/embed/google/photos/
const covers = [
    "https://lh3.googleusercontent.com/CBsrSflHqrrAMW1WV8-gYAl28BhWe8NxwDwjvHHtvy7JbuWzCQ1uQ56W8BDBcZOUhHOFxPjfgCpx1uTKS3rGsNPBiLmzNTqb8_JjMlrcpLgEEUtFztCQeAmQtLh--qE3JltjfIg3=w2400",
    "https://lh3.googleusercontent.com/VuckXlWcs6qtJ-HuyhuOf9aRKCbR1Vnmwb_I5CSBKf-g4s12CV9AThtuawbpej_tLSjix-RMLriqjaIHK8VXFoScRgUFCPr842ErBs16akf3qG69QqkejyKF711Ce5M3A-dE5VpM=w2400",
    "https://lh3.googleusercontent.com/5fQX314vDdeMrFRUj3W6JJEnXbO9NU9upezlUU1ibGx3134_SAYMEqdW84Q_ytZXzMFMcXRZCH_Lb9d7pyKXqD6RHD8AuLBIwA4cmevJ0-04xsISEomaGXivPN8ALhaeQtp15Cbp=w2400",
    "https://lh3.googleusercontent.com/ftJbuZ0zYcYw5l_vextZP8XXTDvQFbcFSYUIxKjerDkie_pKa321NHDeo2fBMexUwYzvthL1yYWp3EQp1bvVve6A8u8qIQi6s7DckCKtudbzWFwFC5gA_bN_Mfo7NXUmwWlU2tdY=w2400",
    "https://lh3.googleusercontent.com/iIrFEJBNmB2CzfJJnqdLEENUwt_9HGyNfieLuczt3THx_VZdPOxXzJxkn-QvstoAGnnu6sR4A41qfbSiQ66_kbxkEGUjAiSupkXOyAqfxozIlMRvvS0eFJrxhW5QOjW4hLhC6VAILw=w2400",
    "https://lh3.googleusercontent.com/_pjs5oeAt1WPVVPcDrTriQaLLm_AyU7oGXSrIs7VQyfz1FNlDyHr_fJ6STVKoz9SUEwq5xLmglKNIGSTAop2wVfv_tgaYT4z4T4TjOeWZ7XQH6O87xdl-B9ua9_BP7Tw8cnO3ZgZTA=w2400",
    "https://lh3.googleusercontent.com/E_OtSEeFKno-t5w4vAVDlhDLCbRVlx67d9ec8fYQe8HTPGZjeEWw_rJ4TdaqaDx5IKts4x94XhkN1Qa5lmp_yc5HwJFTjnbIhcJ1iQSDTv2xz6cJhlnCvpNYRGVa2Vm-oZRCnWAQuA=w2400",
    "https://lh3.googleusercontent.com/qxwG5lWU8PgwHy2jBlfBGQWlVYKUAupQiNMc1efyWgcKn9s64Eo69dsnHkKY05XDGpe5eUujpEoTJYI7XTMgwRNpwhJofo9nyj0zjdYWNKfwJNQfErKF7YlOWL9vB6VBVUSx_4j4lA=w2400"
  ]
const dl = [
"https://drive.google.com/drive/folders/1oJjItBypWsJUCULm_YsKeVI_P-9pMPwc?usp=sharing",
"https://drive.google.com/drive/folders/1DQTvygOl2Djqjv0zyb6C3v0JMiBt4xou?usp=sharing",
"https://drive.google.com/drive/folders/15FwSTmChke0k7bbtPiCnDvejYCaHqsX-?usp=sharing",
"https://drive.google.com/drive/folders/1ocpx2A7tPZjNL88HT3kquzruoXpM3uku?usp=sharing",
"https://drive.google.com/drive/folders/11w1A7Sm76mmXyCcS8sBnXRZaEf8w5i5X?usp=sharing",
"https://drive.google.com/drive/folders/1CVqjpQoajy272B_odxQu-iElNKI7ukTU?usp=sharing",
"https://drive.google.com/drive/folders/1shmML_wiEaR_AWGg7jR28TFXlJCop4IC?usp=sharing",
"https://drive.google.com/drive/folders/15qDackSlP27deNZjq50TMsoGg-WmZYJ3?usp=sharing"
]
const releaseInfo = [
{
    album_name: "minuteless debut va",
    artist_name: "",
    title: "compiled by K-Owl",
    dl_text: "Download Full Album Here",
    description: <Min/>
},
{
    album_name: "underwhelmed",
    artist_name: "rysavy",
    title: "written and produced by Rysavy.",
    dl_text: "Download Full Album Here",
    description: <Und/>
},
{
    album_name: "arduous recursion",
    artist_name: "tenebral cortex",
    title: "written and produced by Tenebral Cortex.",
    dl_text: "Download Full Album Here",
    description: <Ard/>
},
{
    album_name: "pulviemscri textra",
    artist_name: "",
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
    dl_text: "Download Full Album Here",
    description: <Rys25/>
},
{
    album_name: "Past Future",
    artist_name: "",
    title: "written and produced by Various Artists",
    dl_text: "Download Full Album Here",
    description: <PastFuture/>
},
{
    album_name: "loop:/re/:loop",
    artist_name: "",
    title: "compiled by Psypower",
    dl_text: "Out Now!",
    description: "written and produced by Various Artists"
}
]
export const releases = [
    {
        "cover": covers[7],
        "dl": dl[7],
        "releaseInfo": releaseInfo[7],
        "tracklists": loop_reloop,
        "fade": "fade-left"
    },
    {
        "cover": covers[6],
        "dl": dl[6],
        "releaseInfo": releaseInfo[6],
        "tracklists": past_future,
        "fade": "fade-right"
    },
    {
        "cover": covers[5],
        "dl": dl[5],
        "releaseInfo": releaseInfo[5],
        "tracklists": rysavy25,
        "fade": "fade-left"
    },
    {
        "cover": covers[4],
        "dl": dl[4],
        "releaseInfo": releaseInfo[4],
        "tracklists": rysavy2,
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
        "cover": covers[2],
        "dl": dl[2],
        "releaseInfo": releaseInfo[2],
        "tracklists": arduous,
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
        "cover": covers[0],
        "dl": dl[0],
        "releaseInfo": releaseInfo[0],
        "tracklists": minuteless,
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
const beep_etc = "https://lh3.googleusercontent.com/YfFvlkf7Sa46wIB1hlrgEfFdYW_kD1fwB9e2lin8puZwe_M4KNexwW9vxffT-2Y92C7TWW-lwPm5UnMMeN6p65Sf834DPvdnoJxygqDpu2KJ-2xxDmbfQkWTmtUli3_NNeSR-Er3=w2400"
// const tenebral_cortex = "https://lh3.googleusercontent.com/lUgmrKfyU44gl8KX-CUuUMekmh2CruaiyZo-WrLR9GdU0JDaGfgTDwt66ySp62jbFk8-BRUOSvQd__WmKVOz6U09mcls92FckmxxRZrLbPxacLMPnicHchy6WZ-ObCmbvi2M1Cyh=w2400"
// const tsev = "https://lh3.googleusercontent.com/Tm0ajujhKfq65QajSvNIvGuyiBJJLeljzYsuMe6mX2EyAtc9fBa0yHr0cwv-VxvL5VIlnfJA_Qp02IXJgjSxHEO95B3_i3iKXIDjp9Mlrhl_nBAhKngAv0scqDLHsbWQQTLo_arK=w2400"
// const disektor = "https://lh3.googleusercontent.com/ak9bc6IsHWIhL3XCBD9EM5QKs7TqS5R2Cwc9dfAslblDFl56gAPPft74XRBjKPbD50IdZK-UUeAyetpGH9ETtgKiPyODJG45CKArqlOymvY72Y6cvZHWRvZnJVp4iMKd2rlUXbu3=w2400"   

// const profiles = [doob, jovan, rysavy, k_owl, enigmachina, nox, tenebral_cortex, beep_etc, tsev, disektor]

export const soundcloud = "https://lh3.googleusercontent.com/kaGNknUvQbftdzBemEdfdg50FJgYGOEQDUHMrfldLwTeVlSUXhKRs5nnEluXZPC9eqxOj-KaZSd5OLAP0dsv_DVOeaoGOuRWG5Di1p6-r0H1JmIfUR2-pS03nrOtPeffFiZsqsNSeQ=w2400"

export const artistInfo = [
    {
        "artist": "doob",
        "nickname": "the schwiggle",
        "description": "",
        "soundcloud": "https://soundcloud.com/jdoobn",
        "profile": doob,
        "fade": "fade-left"
    },
    {
        "artist": "nihilij | voj",
        "nickname": "the fraggle",
        "description": "",
        "soundcloud": "https://soundcloud.com/definitely-jovan",
        "profile": jovan,
        "fade": "fade-right"
    },
    {
        "artist": "rysavy",
        "nickname": "the whomble",
        "description": "",
        "soundcloud": "https://soundcloud.com/denis-rysavy",
        "profile": rysavy,
        "fade": "fade-left"
    },
    {
        "artist": "k-owl",
        "nickname": "the skripple",
        "description": "",
        "soundcloud": "https://soundcloud.com/k-owl",
        "profile": k_owl,
        "fade": "fade-right"
    },
    {
        "artist": "enigmachina",
        "nickname": "the wubble",
        "description": "",
        "soundcloud": "https://soundcloud.com/theongoingarcanum",
        "profile": enigmachina,
        "fade": "fade-left"
    },
    {
        "artist": "nox",
        "nickname": "the ziggle",
        "description": "",
        "soundcloud": "https://soundcloud.com/nox_sound",
        "profile": nox,
        "fade": "fade-right"
    },
    {
        "artist": "beep etc.",
        "nickname": "the beeble",
        "description": "",
        "soundcloud": "https://soundcloud.com/beepetc",
        "profile": beep_etc,
        "fade": "fade-right"
    }
    // {
    //     "artist": "tenebral cortex",
    //     "nickname": "the quirkle",
    //     "description": "Tenebral Cortex emerges from the mind of french/greek artist Ioannis Karapostolis of Greece. He is currently living in France.",
    //     "soundcloud": "https://soundcloud.com/tenebralcortex",
    //     "profile": tenebral_cortex,
    //     "fade": "fade-left"
    // },

    // {
    //     "artist": "tsev",
    //     "nickname": "the wubble",
    //     "description": "tsev is Mario from Greece",
    //     "soundcloud": "https://soundcloud.com/chev-5",
    //     "profile": tsev,
    //     "fade": "fade-left",
    // },
    // {
    //     "artist": "disektor",
    //     "nickname": "the crunkle",
    //     "description": "disektor is Simo Mansouri from Morocco",
    //     "soundcloud": "https://soundcloud.com/disektor",
    //     "profile": disektor,
    //     "fade": "fade-right"
    // }
]
