import React, { useEffect,useRef } from 'react'
import './about.css'




//Gsap Animation
import {TimelineLite , Power3,gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

//AOS
//AOS

import 'aos/dist/aos.css';


//Image and assets
import friends from '../../images/AboutPage/friends.jpg'
import AppleMusic from '../../images/AboutPage/apple-music.svg'
import Maps from '../../images/AboutPage/photos.svg'
import afterHours from '../../images/AboutPage/cover5.png'
import image3 from '../../images/HomePage/cover3.jpg'
import image4 from '../../images/HomePage/cover4.jpg'

//Gallery Content
import DP from '../../images/AboutPage/Gallery/dp.jpeg'

import img1 from  '../../images/AboutPage/Gallery/img1.jpeg'
import img2 from  '../../images/AboutPage/Gallery/img2.jpeg'
import img3 from  '../../images/AboutPage/Gallery/img3.jpeg'
import img4 from  '../../images/AboutPage/Gallery/img4.jpeg'
import img5 from  '../../images/AboutPage/Gallery/img9.jpeg'
import img6 from  '../../images/AboutPage/Gallery/img8.jpeg'

import img7 from  '../../images/AboutPage/Gallery/img7.jpeg'

import img8 from  '../../images/AboutPage/Gallery/img10.jpeg'
import img9 from '../../images/AboutPage/Gallery/img11.jpeg'
import img10 from '../../images/AboutPage/Gallery/img12.jpeg'
import vid1 from  '../../images/AboutPage/Gallery/vid.gif'





import AboutImg from '../../images/AboutPage/AboutImg.png'
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
   
    // Movie Links
    let Friends = 'https://www.netflix.com/watch/70153404?trackId=13752289&tctx=0%2C0%2C29fffb22f0dba0a34294be4433a7da295a13af62%3Ab6bd0d36313beb0e7b152839d68d4b18dbc3266a%2C29fffb22f0dba0a34294be4433a7da295a13af62%3Ab6bd0d36313beb0e7b152839d68d4b18dbc3266a%2Cunknown%2C'
    let JWM = 'https://www.netflix.com/watch/70085612?tctx=0%2C0%2C%2C%2C%2C'
    let Yjhd = 'https://www.netflix.com/watch/70276515?trackId=13752289&tctx=0%2C0%2C7693ff1c146153060ae5d4f4a08dd8e200f76545%3A164c4f1e1b0bf4fe8d5181b135127b2442a45182%2C7693ff1c146153060ae5d4f4a08dd8e200f76545%3A164c4f1e1b0bf4fe8d5181b135127b2442a45182%2Cunknown%2C'
    let SC = 'https://www.netflix.com/watch/80036165?trackId=13752289&tctx=0%2C0%2Cb7149b6ba5cd99d5414e1cd02e41d0ed5dde14cf%3Af0a4c6002223ffbe760432188302bab6dadee318%2Cb7149b6ba5cd99d5414e1cd02e41d0ed5dde14cf%3Af0a4c6002223ffbe760432188302bab6dadee318%2Cunknown%2C'
    let SOML = 'https://www.netflix.com/watch/70117289?trackId=13752289&tctx=0%2C0%2C175030fc4ef6ade5b0ebd008b8189ae9a774d9f8%3A92888eb91b3880d4867bdd4e8e66a2ffefb8e6fb%2C175030fc4ef6ade5b0ebd008b8189ae9a774d9f8%3A92888eb91b3880d4867bdd4e8e66a2ffefb8e6fb%2Cunknown%2C'
    let JTYJN = 'https://www.netflix.com/watch/70089214?trackId=13752289&tctx=0%2C0%2C02a28ef716a276f61e5342bc02ffe149deb303d6%3A5bc1ceb58bf2fc5866261909514f51b9164d5cae%2C02a28ef716a276f61e5342bc02ffe149deb303d6%3A5bc1ceb58bf2fc5866261909514f51b9164d5cae%2Cunknown%2C'
    let TVD = 'https://www.netflix.com/watch/70245674?trackId=13752289&tctx=0%2C0%2C5954df04baf427c203cce585202b4d30881c2594%3A46f4593080e82767e0e32be49146bb9620a18169%2C5954df04baf427c203cce585202b4d30881c2594%3A46f4593080e82767e0e32be49146bb9620a18169%2Cunknown%2C'
    let Loved = 'https://www.netflix.com/watch/80203147?trackId=13752289&tctx=0%2C2%2Ca89e255d60551c1de7ac8b615eea8526bfea4d47%3Aad559690927905f102051c4812082522998111d0%2Ca89e255d60551c1de7ac8b615eea8526bfea4d47%3Aad559690927905f102051c4812082522998111d0%2Cunknown%2C'
    let TSIP = 'https://www.netflix.com/watch/81037373?trackId=13752289&tctx=0%2C0%2Ca190b0f3159ed55bcc24b4873794c8298a34dbe9%3A128a88c09eace0ee71c3439b4fd7fd733bf1cec4%2Ca190b0f3159ed55bcc24b4873794c8298a34dbe9%3A128a88c09eace0ee71c3439b4fd7fd733bf1cec4%2C%2C'
    let CR = 'https://www.netflix.com/watch/81113888?trackId=13752289&tctx=0%2C0%2C17bd4cb789a29a685e5f22203b614761e1229957%3Af814e4b2f4730009efa37f7487444bb2fed51d8c%2C17bd4cb789a29a685e5f22203b614761e1229957%3Af814e4b2f4730009efa37f7487444bb2fed51d8c%2Cunknown%2C'
    let CSL = 'https://www.netflix.com/watch/70167068?trackId=13752289&tctx=0%2C0%2C6f670104ad1169151adb18e00db85b647562aac8%3A964c34abbb39fe3c4d1c16993f509fcff3104273%2C6f670104ad1169151adb18e00db85b647562aac8%3A964c34abbb39fe3c4d1c16993f509fcff3104273%2Cunknown%2C'
    let NH = 'https://www.netflix.com/watch/21304015?trackId=13752289&tctx=0%2C12%2Cb2c59e186f55906e49242d216a9c47ffa9786d60%3A2465343faca7fdd52302d2b37e60e56af896252b%2Cb2c59e186f55906e49242d216a9c47ffa9786d60%3A2465343faca7fdd52302d2b37e60e56af896252b%2Cunknown%2C'
    

    let AOS;

   
    let heading = useRef(null);
    let rightImage = useRef(null);
    
    let tl = new TimelineLite();
    useEffect(()=>{
      const blob = rightImage.children[0];
      const blobImage = blob.nextSibling;
      
      const headlineFirst = heading.children[0].children[0];
      const headlineSecond = headlineFirst.nextSibling;
      const contentP = heading.children[1];
      tl.from([headlineFirst.children,headlineSecond.children ], 1.5, {
        y: 100,
        ease: "power4.out",
        stagger: {
          amount: 0.3
        }
        
      },'Start').from(contentP,1.8 ,{ y: 20, opacity: 0, ease: Power3.easeOut}, .6

      )

      //blob Animation
      tl.from(blob,1.8,{x: 680, ease: Power3.easeOut,opacity:0},'Start')
      .from(blobImage,1.8,{ ease: "power4.out",opacity:0},1)
     
      .to(blob,40,{ 
        rotation: 360, 
        duration:40,
        transformOrigin: "50% 50%",
        yoyo:true,
  repeat: -1})


    },)
    useEffect(() => {
      /**
       * Server-side rendering does not provide the 'document' object
       * therefore this import is required either in useEffect or componentDidMount as they
       * are exclusively executed on a client
       */
      const AOS = require("aos");
      AOS.init({
        once: false,
      duration:1200,
      });
    }, []);

    useEffect(() => {
      if (AOS) {
        AOS.refresh();
      }
    });
    return (
        <div >

          {/* ABOUT_HERO_SECTION */}
        <div className = "About-container">
            <div className = "hero-bg"></div>
            <div className = "About-wrapper">
                <div className = "AboutText-container" ref={el => heading  = el} >
                    <h1>
                        <div className = "About-content-line">
                            <div className  = "about-h1"> Let's get to know</div>
                        </div>
                        
                        <div className = "About-content-line">
                            <div className  = "about-h1"> <span>YOU </span> a little</div>
                        </div>
                    </h1>
                   
                </div>
                <div className = "right-container">
                    <div className = "img-Holder" ref = {el => rightImage = el }>
                      <div className = "blob">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="739.513" height="748.592" viewBox="0 0 739.513 748.592">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#5e84fc"/>
      <stop offset="1" stop-color="#c26efd"/>
    </linearGradient>
  </defs>
  <g id="Group_2380" data-name="Group 2380" transform="translate(-948 -103.853)">
    <path id="blob" d="M626.142,503.209Q504.865,640.766,353.471,628.556T134.519,491Q66.962,365.652,116.612,209.375T338.82,66.934Q511.376,80.771,629.4,223.212T626.142,503.209Z" transform="translate(946.349 121.261)" fill="#c26efd" opacity="0.59"/>
    <path id="blob-2" data-name="blob" d="M497.828,410.414q-113.8,129.07-255.849,117.614T36.537,398.958q-63.389-117.614-16.8-264.25T228.233,1.056q161.91,12.983,272.651,146.636T497.828,410.414Z" transform="translate(1687.513 376.288) rotate(121)" fill="url(#linear-gradient)"/>
  </g>
</svg>

</div>   
                      <div className = "img-div">
<img src = {AboutImg} alt = "demo"/>
</div>
                    </div>

                </div>

            </div>

           

        </div>
        
       
        

        {/* MOVIE-SONG-LOCATION SECTION */}

        <div className="panel" > 
                <h1 className = "sectionHeading" data-aos="fade-down" >What makes you, YOU</h1>
                <div className = "sectionDivider" data-aos="fade-down" data-aos-delay = "50"></div>
                <p className = "sectionQuote" data-aos="fade-down" data-aos-delay = "100">Here's a list of thing that you adore.</p>

                {/* Movie Section */}

            <section className="panel-movies" >
                <div className = "info-holder">
                    <div data-aos="fade-right"  ><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="0 0 106 106">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_52" data-name="Rectangle 52" width="72" height="72" transform="translate(124.432 4005.432)" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
  </defs>
  <g id="Group_2381" data-name="Group 2381" transform="translate(-101 -3781)">
    <rect id="Rectangle_51" data-name="Rectangle 51" width="106" height="106" rx="23" transform="translate(101 3781)" fill="#171717"/>
    <g id="Mask_Group_6" data-name="Mask Group 6" transform="translate(-6.432 -207.432)" clip-path="url(#clip-path)">
      <g id="netflix" transform="translate(140.7 4005)">
        <path id="Path_34" data-name="Path 34" d="M26.551,40.862l-.03,15.361c0,14.6-.03,15.422-.182,15.422-.546,0-5.161.3-6.709.455-1,.091-3.036.3-4.493.486-1.488.182-2.7.3-2.732.273,0-.03-.03-16.424-.03-36.46V0ZM51.809.03H37.753l-.03,16.12V32.328l14.056,40.5c.061-.03.061-16.454.061-36.46Z" transform="translate(-12.374)" fill="#ad080f"/>
        <path id="Path_35" data-name="Path 35" d="M51.779,72.829h-.121c-.243,0-.729-.03-1.305-.091-3.248-.395-7.529-.789-10.99-.941-1.123-.061-2.064-.121-2.095-.121,0,0-.88-2.55-2.55-7.316-1.609-4.645-3.977-11.445-7.043-20.279l-1.123-3.218L12.374,0H26.491L27.1,1.73l2.672,7.681Z" transform="translate(-12.374)" fill="#df0d12"/>
      </g>
    </g>
  </g>
</svg>
</div>
                    <p data-aos="fade-right" data-aos-delay = "50" className = "info-name">Your Go-To Movies & Shows</p>
                </div>
                <div className = "content-holder">
                    <div className = "about-card-wrapper">
                        <a href= {Friends} target= "__blank" className = "card" data-aos="fade-up"  ><img alt = "Friends" src = {friends}></img></a>
                        <a  className = "card" data-aos="fade-up" data-aos-delay = "50"><img alt = "Laila Majnu" src = {"https://upload.wikimedia.org/wikipedia/en/1/1a/Laila_Majnu_2018.jpg"}></img></a>
                        <a href= {Friends} target= "__blank" className = "card" data-aos="fade-up" data-aos-delay = "100"><img alt = "Jab We Met" src = {"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Jab_We_Met_Poster.jpg/220px-Jab_We_Met_Poster.jpg"}></img></a>
                        <a href= {JWM} target= "__blank" className = "card" data-aos="fade-up" data-aos-delay = "150"><img alt = "YJHD" src = {"https://i.pinimg.com/originals/34/5f/ec/345fecf5e269212d9a287508648ec173.jpg"}></img></a>
                        <a href= {SC} target= "__blank" className = "card"data-aos="fade-up"  ><img alt = "Schitt'sCreek" src = {"https://cdn.headlinesoftoday.com/wp-content/uploads/2020/10/S2promo.png"}></img></a>
                        <a href= {SOML} target= "__blank" className = "card"data-aos="fade-up"  data-aos-delay = "50"><img alt = "She's out of my league" src = {"https://m.media-amazon.com/images/M/MV5BMTkwMTY5ODA1MF5BMl5BanBnXkFtZTcwODYyNzAxMw@@._V1_.jpg"}></img></a>
                        <a href= {JTYJN} target= "__blank" className = "card"data-aos="fade-up"  data-aos-delay = "100"><img alt = "Jaane tu ya Jaane Na" src = {"https://i.pinimg.com/originals/aa/74/43/aa7443d64b33e683ea84bc4817f3908c.jpg"}></img></a>
                        <a href= {TVD} target= "__blank" className = "card"data-aos="fade-up"  data-aos-delay = "150"><img alt = "The Vampire Diaries" src = {"http://assets.nflxext.com/us/boxshots/hd1080/70143860.jpg"}></img></a>
                        <a href= {Loved} target= "__blank" className = "card"data-aos="fade-up"  ><img alt = "To All the boys" src = {"https://upload.wikimedia.org/wikipedia/en/b/b8/To_All_the_Boys_I%27ve_Loved_Before_poster.jpg"}></img></a>
                        <a href= {TSIP} target= "__blank" className = "card"data-aos="fade-up"  data-aos-delay = "50"><img alt = "The Sky is Pink" src = {"https://upload.wikimedia.org/wikipedia/en/9/93/The_Sky_Is_Pink.jpg"}></img></a>
                        <a className = "card"data-aos="fade-up" data-aos-delay = "100"><img alt = "Gossip Girl" src = {"https://tvguide1.cbsistatic.com/feed/1/836/11966836.jpg"}></img></a>
                        <a href= {CR} target= "__blank" className = "card"data-aos="fade-up" data-aos-delay = "150"><img alt = "College Romance" src = {"https://m.media-amazon.com/images/M/MV5BMzM3NGIzNDctNWEyOC00ZTY1LWJhNmUtYzZkYmMxNDUwZDA5XkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_UY1200_CR90,0,630,1200_AL_.jpg"}></img></a>
                        <a href= {CSL} target= "__blank" className = "card"data-aos="fade-up" ><img alt = "Crazy Stupid Love" src = {"https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_.jpg"}></img></a>
                        <a  className = "card"data-aos="fade-up" data-aos-delay = "50"><img alt = "The Proposal" src = {"https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"}></img></a>
                        <a href= {NH} target= "__blank" className = "card"data-aos="fade-up" data-aos-delay = "100"><img alt = "Notting Hill" src = {"https://static2.raru.co.za/cover/2014/04/01/11492-l.jpg?v=1398416335"}></img></a>
                        <a className = "card"data-aos="fade-up" data-aos-delay = "150"><img alt = "Pretty woman" src = {"https://upload.wikimedia.org/wikipedia/en/b/b6/Pretty_woman_movie.jpg"}></img></a>
                    </div>
                </div>
            </section>
            <section className="panel-songs" >
                <div className = "info-holder">
                        <div data-aos="fade-right" className = "iconImg"><img alt = "demo" src = {AppleMusic}></img></div>
                        <p data-aos="fade-right" data-aos-delay = "50" className = "info-name">Songs On Repeat</p>
                </div>
                <div className = "content-holder">
                    <div className = "song-card-wrapper">
                        <div className = "card-song" data-aos = "fade-up" >
                            <div className = "coverContainer"><img alt = "SaveYourTears" src ={afterHours}></img></div>
                            <p className = "songname">Save Your Tears</p>
                            <p className = "artist-name">The Weeknd</p>

                        </div>
                        <div className = "card-song" data-aos ="fade-up" data-aos-delay = "50" >
                            <div className = "coverContainer"><img alt = "At My Worst" src ={image3}></img></div>
                            <p className = "songname">At My Worst</p>
                            <p className = "artist-name">Pink Sweat$</p>

                        </div>
                        <div className = "card-song" data-aos = "fade-up" data-aos-delay = "100" >
                            <div className = "coverContainer"><img alt = "Heartbreak Anniversary" src ={image4}></img></div>
                            <p className = "songname">Heartbreak Anniversary</p>
                            <p className = "artist-name">GIVEON</p>

                        </div>
                        <div className = "card-song" data-aos = "fade-up" data-aos-delay = "150" >
                            <div className = "coverContainer"><img alt = "Falling" src ={"https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png"}></img></div>
                            <p className = "songname">Falling</p>
                            <p className = "artist-name">Harry Styles</p>

                        </div>
                        <div className = "card-song" data-aos = "fade-up" data-aos-delay = "200" >
                            <div className = "coverContainer"><img alt = "Baarishein" src ={"https://m.media-amazon.com/images/I/71Y5ju1CGiL._SS500_.jpg"}></img></div>
                            <p className = "songname">Baarishein</p>
                            <p className = "artist-name">Anuv Jain</p>

                        </div>
                        <div className = "card-song" data-aos = "fade-up" >
                            <div className = "coverContainer"><img alt = "Riha" src ={"https://images.genius.com/621bdd4975845663c246fc8b8fdcee9c.1000x1000x1.jpg"}></img></div>
                            <p className = "songname">Riha</p>
                            <p className = "artist-name">Anuv Jain</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "50" >
                            <div className = "coverContainer"><img alt = " Tum Jab paas" src ={"https://i1.sndcdn.com/artworks-000221894027-mf7egq-t500x500.jpg"}></img></div>
                            <p className = "songname"> Tum Jab paas</p>
                            <p className = "artist-name">Prateek Kuhad</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "100" >
                            <div className = "coverContainer"><img alt = "Say You won't let go" src ={"https://upload.wikimedia.org/wikipedia/en/d/d8/Say_You_Won%27t_Let_Go.jpg"}></img></div>
                            <p className = "songname">Say you won't let go</p>
                            <p className = "artist-name">James Arthur</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "150" >
                            <div className = "coverContainer"><img alt = "Aahista" src ={"https://a10.gaanacdn.com/gn_img/albums/R7vKXr6Wmr/7vKXXg4QKm/size_xxl_1556797151.webp"}></img></div>
                            <p className = "songname">Aahista</p>
                            <p className = "artist-name">Arijit Singh & Jonita Gandhi </p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "200" >
                            <div className = "coverContainer"><img alt = " Hath chumme " src ={"https://a10.gaanacdn.com/gn_img/albums/g4w3vr3jJB/4w3voXn8Wj/size_xxl_1553921741.webp"}></img></div>
                            <p className = "songname"> Hath chumme </p>
                            <p className = "artist-name">B Praak</p>

                        </div><div className = "card-song"  data-aos = "fade-up" >
                            <div className = "coverContainer"><img alt = " This is how you fall in love" src ={"https://i.scdn.co/image/ab67616d0000b273dccb079c492cf99e02e3255b"}></img></div>
                            <p className = "songname"> This is how you fall in love</p>
                            <p className = "artist-name">Jeremy Zucker and Chelsea Cutler</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "50" >
                            <div className = "coverContainer"><img alt = " Everything I wanted " src ={"https://upload.wikimedia.org/wikipedia/en/e/e6/Billie_Eilish_-_Everything_I_Wanted.png"}></img></div>
                            <p className = "songname"> Everything I wanted </p>
                            <p className = "artist-name">Billie Eilish</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "100" >
                            <div className = "coverContainer"><img alt = "You are the reason" src ={"https://upload.wikimedia.org/wikipedia/en/1/14/Calum_Scott_You_Are_the_Reason.jpg"}></img></div>
                            <p className = "songname">You are the reason </p>
                            <p className = "artist-name">Calum Scott</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "150" >
                            <div className = "coverContainer"><img alt = " Can’t help falling in love " src ={"https://upload.wikimedia.org/wikipedia/en/3/3c/Can%27t_Help_Falling_in_Love_by_Elvis_Presley_US_picture_sleeve.png"}></img></div>
                            <p className = "songname"> Can’t help falling in love </p>
                            <p className = "artist-name">Elvis Presley</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "200" >
                            <div className = "coverContainer"><img alt = " Sad song" src ={"https://upload.wikimedia.org/wikipedia/en/6/6a/Somewhere_Somehow_album_cover.jpg"}></img></div>
                            <p className = "songname"> Sad song</p>
                            <p className = "artist-name">We The Kings</p>

                        </div><div className = "card-song" data-aos = "fade-up"  >
                            <div className = "coverContainer"><img alt = "Five feet apart " src ={"https://i.scdn.co/image/ab67616d0000b273de1ef6794bce2d9e397717bf"}></img></div>
                            <p className = "songname">Don't give up on me </p>
                            <p className = "artist-name">Andy Grammer</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "50" >
                            <div className = "coverContainer"><img alt = "Make you mine" src ={"https://images.genius.com/91e9c650b8730bfa1eb2cbb1545d0cac.640x640x1.jpg"}></img></div>
                            <p className = "songname"> Make you mine </p>
                            <p className = "artist-name">PUBLIC</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "100" >
                            <div className = "coverContainer"><img alt = "The Scientist " src ={"https://upload.wikimedia.org/wikipedia/en/c/c2/Coldplay_-_The_Scientist.png"}></img></div>
                            <p className = "songname">The Scientist </p>
                            <p className = "artist-name">Coldplay</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "150" >
                            <div className = "coverContainer"><img alt = "Hard for me" src ={"https://images.genius.com/fbb6757ddc8d5e869827eee3575e5346.640x640x1.jpg"}></img></div>
                            <p className = "songname">Hard for me</p>
                            <p className = "artist-name">Michele Morrone</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "200" >
                            <div className = "coverContainer"><img alt = " I love you" src ={"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png/220px-When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png"}></img></div>
                            <p className = "songname"> I love you</p>
                            <p className = "artist-name">Billie Eilish</p>

                        </div><div className = "card-song" data-aos = "fade-up"  >
                            <div className = "coverContainer"><img alt = "Tum" src ={"https://a10.gaanacdn.com/gn_img/albums/R7vKXr6Wmr/7vKXXg4QKm/size_xxl_1556797151.webp"}></img></div>
                            <p className = "songname">Tum</p>
                            <p className = "artist-name">Atif Aslam</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "50" >
                            <div className = "coverContainer"><img alt = "Heather" src ={"https://64.media.tumblr.com/0f5390ff383864b81222b004bedf914f/e8942750230f5bda-2b/s540x810/16f3c688e0d10c1b6c852c8d49e72b204f8ed117.png"}></img></div>
                            <p className = "songname">Heather</p>
                            <p className = "artist-name">Conan Grey</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "100" >
                            <div className = "coverContainer"><img alt = "Teri Ay" src ={"https://i1.sndcdn.com/artworks-000391401258-qqzofc-t500x500.jpg"}></img></div>
                            <p className = "songname">Teri Ay</p>
                            <p className = "artist-name">Umer Farooq</p>

                        </div><div className = "card-song" data-aos = "fade-up" data-aos-delay = "150" >
                            <div className = "coverContainer"><img alt = "Mad at disney " src ={"https://upload.wikimedia.org/wikipedia/en/3/34/Salem_Ilese_-_Mad_at_Disney.jpeg"}></img></div>
                            <p className = "songname">Mad at disney </p>
                            <p className = "artist-name">Salem ilese</p>

                        </div>
                        <div className = "card-song" data-aos = "fade-up" data-aos-delay = "200" >
                            <div className = "coverContainer"><img alt = "Alag Aasmaan" src ={"https://www.bollywoodbabu.in/wp-content/uploads/2020/08/alag-aasmaan-anuv-jain-1.png"}></img></div>
                            <p className = "songname">Alag Aasmaan</p>
                            <p className = "artist-name">Anuv Jain</p>

                        </div>
                        
                    </div>
                </div>
            </section>

               {/* Song Section */}
               
            <section className="panel-location" >
            <div className = "info-holder">
                        <div className = "iconImg" data-aos = "fade-right" ><img alt = "demo" className = "maps" src = {Maps}></img></div>
                        <div>
                        <p className = "info-name" data-aos = "fade-right" data-aos-delay = "50">Let's Take A Look At You</p>
                        
                        </div>
                </div>
                <div className ="content-holder">
                  <div className = "location-card-wrapper">
                     <div className = "location-card-holder">
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  <img src = {img4}>
                        </img></div>
                      
                       </div>
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  <img src = {img5}>
                        </img></div>
                      
                       </div>
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  
                        <img src = {img2}>
                        </img></div>
                      
                       </div>
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  
                        <img src = {img3}>
                        </img></div>
                      
                       </div>
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  
                        <img src = {vid1}>
                        </img></div>
                      
                       </div>
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  
                        <img src = {img1}>
                        </img></div>
                      
                       </div>
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  
                        <img src = {img9}>
                        </img></div>
                      
                       </div>
                       <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  
                        <img src = {img10}>
                        </img></div>
                      
                       </div>   <div className = "location-article" data-aos = "fade-up">
                       <div className = "info">
                         <div className = "DpHolder"></div>
                          <h1 className = "title-loc">@hiitstee</h1>
                        </div>
                        <div className = "thumb">  
                        <img src = {img6}>
                        </img></div>
                      
                       </div>
                     </div> 
                  </div>

                </div>
            </section>
          
            </div>
        </div>
    )
}

export default AboutPage

