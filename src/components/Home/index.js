import React , {useEffect, useRef} from 'react'
import './Home.css'
import 'aos/dist/aos.css';


//Gsap
import {TimelineLite ,TweenMax, Power3,gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {AnchorLink } from 'gatsby-plugin-anchor-links'
//AOS



import  {Scrollbars}  from 'react-custom-scrollbars-2';
//Image & assets
import {FaPlay,FaForward} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

import { RiHeartLine ,RiCake3Fill} from "react-icons/ri";


import Phone from '../../images/HomePage/Phone.svg'

import image2 from '../../images/HomePage/cover2.png'
import image3 from '../../images/HomePage/cover3.jpg'
import image4 from '../../images/HomePage/cover4.jpg'
import image5 from '../../images/HomePage/cover5.png'
import image6 from '../../images/HomePage/cover6.jpg'

import image8 from '../../images/HomePage/cover8.png'
import image9 from '../../images/HomePage/cover9.jpg'
import image10 from '../../images/HomePage/cover10.jpg'
import image11 from '../../images/HomePage/cover11.jpg'
import UsToYou from './FromUsToYou';

//Images Second Section
import janvi from '../../images/HomePage/UsToYouContents/Janvi.gif'
import Ojasvi from '../../images/HomePage/UsToYouContents/Ojasvi.gif'
import saksham from '../../images/HomePage/UsToYouContents/Saksham.gif'
import Monali from '../../images/HomePage/UsToYouContents/Monali.gif'
import Anshu from  '../../images/HomePage/UsToYouContents/Anshu.gif'
import Anukriti from '../../images/HomePage/UsToYouContents/Anukriti.gif'
import Roahan from '../../images/HomePage/UsToYouContents/Roahan.gif'
import Drishya from '../../images/HomePage/UsToYouContents/Drishya.gif'
import Tanishq from '../../images/HomePage/UsToYouContents/TanishqTwo.gif'

//Images Memory Section
import img1 from '../../images/HomePage/Memories/img.jpeg'
import img2 from '../../images/HomePage/Memories/img2.jpeg'
import img3 from '../../images/HomePage/Memories/img3.jpeg'
import img4 from '../../images/HomePage/Memories/img4.jpeg'
import img5 from '../../images/HomePage/Memories/img5.jpeg'
import img6 from '../../images/HomePage/Memories/img6.jpeg'
import img7 from '../../images/HomePage/Memories/img7.jpeg'
import img8 from '../../images/HomePage/Memories/img8.jpeg'
import img9 from '../../images/HomePage/Memories/img9.jpeg'
import img10 from '../../images/HomePage/Memories/img10.jpeg'
import img11 from '../../images/HomePage/Memories/img11.jpeg'
import img12 from '../../images/HomePage/Memories/img12.jpeg'
import img13 from '../../images/HomePage/Memories/img13.jpeg'
import img14 from '../../images/HomePage/Memories/img14.jpeg'
import img15 from '../../images/HomePage/Memories/img15.jpeg'
import img16 from '../../images/HomePage/Memories/img16.jpeg'




gsap.registerPlugin(ScrollTrigger);



const HomePage = () => {

   
   
    let heading = useRef(null)

    let phone = useRef(null)
    let album = useRef(null)
    let player  = useRef(null)
    let section = useRef(null)
    let sectionTwo = useRef(null);
    let sectionThree = useRef(null);
    let sectionFour = useRef(null);
    
    
    const cardArray = [];
    
    let scrollRef = useRef(null);
    const sl = useRef(gsap.timeline());
    

    

   

    useEffect(()=>{
        let tl = new TimelineLite();
        const headlineFirst = heading.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const contentP = heading.children[1];
        const contentButton = heading.children[2];
        //album cover animation
        const cover1 = album.children[0];
        const cover2 = cover1.nextSibling;
        const cover3 = cover2.nextSibling;
        const cover4 = cover3.nextSibling;
        const cover5 = cover4.nextSibling;
        const cover6 = cover5.nextSibling;
        const cover7 = cover6.nextSibling;
        const cover8 = cover7.nextSibling;
        const cover9 = cover8.nextSibling;

        //remove initial flash
        TweenMax.to(scrollRef,4,{css:{visibility:'visible'}});

        //phone animation
        tl.from(phone,3,{y: -380, ease: Power3.easeOut,opacity:0},'Start')
        .fromTo(cover1,1.4,{
            x:200,
            y:200,
            opacity:0,
            
        },{
            x:0,
            y:0,
            opacity:1,


        },1)
        .fromTo(cover2,1.4,{
            x:-200,
            y:200,
            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,

        },1)
        .fromTo(cover3,1.4,{
            x:100,
            y:400,

            opacity:0
        },{
            x:0,
            y:0,

            opacity:1,

        },1)
        .fromTo(cover4,1.4,{
            x:-200,
            y:400,

            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,

        },1)
        .fromTo(cover5,1.4,{
            x:-200,
            y:100,

            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,

        },1)
        .fromTo(cover6,1.4,{
            x:300,
            y:100,
            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,

        },1)
        .fromTo(cover7,1.4,{
            x:300,
            y:100,
            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,

        },1)
        .fromTo(cover8,1.4,{
            x:300,
            y:-100,
            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,

        },1)
        .fromTo(cover9,1.4,{
            x:-200,
            y:-100,
            opacity:0
        },{
            x:0,
            y:0,
            opacity:1,

        },1)
        .from(player,1,{y:44,opacity:0,ease:Power3.easeOut},2)

        //text animation
        tl.from([headlineFirst.children,headlineSecond.children ],1,{
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1
        },.15,'Start')
        .from(contentP, 1.4, { y: 20, opacity: 0, ease: Power3.easeOut}, .6)
        .from(contentButton, 1.4, { y: 20, opacity: 0, ease: Power3.easeOut}, .8)


    },[]);

useEffect(()=>{
    gsap.set(cardArray, { y: 100 });
    sl.current = ScrollTrigger.batch(cardArray,{
        
        
        onEnter:batch =>
            gsap.to(batch,1.4,{
                opacity: 1,
                y:0,
                stagger:{each:0.15,grid:[1,3]},
                overwrite: true
            }),
            onLeave:batch =>
            gsap.set(batch,{opacity:0,y:-100,overwrite:true}),
            onEnterBack:batch =>
            gsap.to(batch,{opacity:1,y:0,stagger:0.15,overwrite:true}),
            onLeaveBack:batch =>
            gsap.set(batch, {opacity:0,y:100,overwrite:true}),

            start: "20px bottom",
      end: "+=5000px"
            
        
    });
    ScrollTrigger.refresh();
      
},)

useEffect(() =>{
   TweenMax.fromTo(section,1.8 , {
       x:800,
   },{
       x:0,
       scrollTrigger:{
           trigger:section,
           start:"-600px center",
           end:"600px bottom",
           scrub:1,
           
       }
   })

   TweenMax.fromTo(sectionTwo,1 , {
    x:-800,
},{
    x:0,
    scrollTrigger:{
        trigger:section,
        scrub:0.5,
        
    }
})
TweenMax.fromTo(sectionThree,1 , {
    x:800,
},{
    x:0,
    scrollTrigger:{
        trigger:section,
        scrub:0.5
    }
})
TweenMax.fromTo(sectionFour,1 , {
    x:-800,
},{
    x:0,
    scrollTrigger:{
        trigger:section,
        scrub:0.5
    }
})
})
let AOS;
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
       
            <div className = "App" ref = {el =>scrollRef = el} >

        {/* heroSection */}

          <div className = "hero-container"   >
              <div className = "hero-bg"></div>
              <div className = "hero-wrapper" >
                  <div className = "text-container" ref={el => heading  = el}>
                      <h1>
                    <div className="hero-content-line">
                      <div className = "first-h1" >HAPPY</div>
                      </div>
                      <div className="hero-content-line">
                      <div className = "first-h1" >BIRTHDAY</div>
                      </div>
                      </h1>

                      <p className   ="first-p" >The one with Tanvi's <br></br> 21st Birthday</p>
                        <div className = "hero-btns">
                            <AnchorLink to = "/#FromUS" className = "explore-button">Let's Dive In
                                <div className = "arrow-icon"><BsArrowRight/></div>
                            </AnchorLink>
                        </div>
                  </div>
                  <div className = "right-container">
                    <div className = "right-wrapper">
                        <div className = "album-cover">
                            <div className = "album-cover-container" ref ={el => album =el}>

                                <img className = "cover1"
                               src = {image10} alt= "thishowyoufallinLove"
                               />
                                <img className = "cover2"
                               src = {image2} alt= "Billie"
                               />
                                <img className = "cover3"
                               src = {image3} alt= "At my worst"
                               />
                                <img className = "cover4"
                               src = {image4} alt= "Heartbreak Anniversary"
                               />
                                <img className = "cover5"
                               src = {image5} alt= "AfterHours"
                               />
                                <img className = "cover6"
                               src = {image6}alt= "James Arthur"
                               /> 
                                <img className = "cover7"
                               src = {image11} alt= "maniac"
                               />
                                <img className = "cover8"
                               src = {image8} alt= "Sour"
                               />
                                <img className = "cover9"
                               src = {image9} alt= "Ap Dhillon"
                               />

                            </div>
                        </div>
                        <div className = "play-comp" ref = {el => player = el}>
                            <div className= "img-holder" ></div>
                            <div className = "song-name">Say you won't let go</div>
                            <div className = "play-icon" ><FaPlay/></div>
                            <div className = "forward-icon" ><FaForward/></div>

                        </div>
                        <div className = "phone-container">
                            <div className = "phone-wrapper" ref = {el => phone = el}>
                                <img
                                className = "phone-holder"
                                src ={Phone} alt= "img1"
                                />

                            </div>

                        </div>

                    </div>


                  </div>


              </div>
          </div>


            {/* Us To You Section */}


          <div className = "usToYou-container"  id="FromUS">
             
             <h1 className = "usToYou-h1" data-aos="fade-down" >From us to you</h1>
             
             <div className = "usToYou-divider" data-aos="fade-down" data-aos-delay = "50"></div>
             <p className = "usToYou-quote" data-aos="fade-down" data-aos-delay = "100">There are friends, there is family and then there are friends that become family.</p>
                <div className = "usToYou-wrapper">
                         
                            <div className = "card-wrapper" >
                                  {/* JANVI */}
                                <div className = "blog-card" ref = {el =>{cardArray.push(el) }} >
                                    <div className = "media"  > <img src = {janvi} alt = "" ></img></div>

                                  
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hey,Tanvi <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify">
I can’t even begin to tell how much I miss you. I wish so bad that I was with you on your birthday and I am missing it since two years now and this sucks. You are so so beautiful and kind and trust me I mean it with all my heart when I’m saying this You are one of the best that has ever happened to me. Literally we met in 2018
and the first thing I remember was thinking she’s like me  Whenever I thought 
I was just so lost in college days I found you, 
Always so warm and cherry You have done so much for me and I am so so grateful for that. I can’t wait for us to go to a trip soon. You are one magical person who can cry and laugh at the same time I wanna eat your brownies cakes pasta and what not  I wanna spend so much time with you hopefully soon we get this. I have cherished all my days with you and I know I always will.
And I wish you all the love and happiness in the world. Happy Birthday my girl   I love you tons!!
</p>
</div>
                                    </div>
                           
                                </div>
                                 
                                 {/* OJASVI */}
                                <div className = "blog-card" ref = {el =>{cardArray.push(el) }} >

                                    <div className = "media" ><img  src = {Ojasvi} alt = ""/></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hi,Tanvi <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll"
                                        >
                                        <p  className="paragraph text-justify">Happy Birthday 
I never thought that we'll reach the point where we will get so close but I wouldn't have it any other way. You are a genuine sweetheart and great friend. You have been there for me and have cheered me or motivated me whenever needed. We have made so many beautiful memories and there are so many more to make in the future. You are one strong person and are beautiful inside out so don't let anyone tell you otherwise. I miss our udaipur trip so much because the highlight used to be hanging out with the three of you every morning and getting ready. 
Also I would love to hangout with drunk Tanvi very soon who is as carefree as she can be and has no fucks to give. Time spent with you has always been nice and I can't wait to meet you.
Now I know that things didn't go as planned for your birthday but don't you worry because we'll make up for all the time lost and the fun we couldn't have
Ps- Never gonna forget the time you sent me donuts
I love you so much</p>
</div>
                                    </div>

                                </div>
                            </div>
                           
                            <div className = "card-wrapper" >
                                {/* SAKSHAM */}
                                <div className = "blog-card"  ref = {el =>{cardArray.push(el) }} >
                                    <div className = "media" ><img src = {saksham} alt = "" /></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hey,Tanvi <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify">A very very very happy birthday . Chill Rahma and ache se apna din enjoy karna . 

You are an amazing person who's always been supportive of me. Truly you're one of the bestest people I know.Thank you for being such a wonderful friend . 

My most memorable moment with you will always be the day I spent  carrying that glucon D bottle for you in Udaipur . Ohhhh the fun we had on the trip, it was just one of the best moments of my life.

Looking forward to spend more awesome moments with you . 

Much love, Saksham.</p>
</div>
                                    </div>

                                </div>
                               {/* MONALI */}
                                <div className = "blog-card"  ref = {el =>{cardArray.push(el) }}>
                                    <div className = "media" > <img src = {Monali} alt = ""></img></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hi,Tanvi <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify">HAPPY 21st birthday BESTFRIEND
I still remember the day when we met each other like 14-15 years ago..
From that day till today I don’t even regret a single day of having a friend who is more like a sister now .
You are the one who has always been there to help me & guide me, 
I know you are very sensitive and strong at the same time . 
No matter how many friends I have in my life you will always be my NUMBER 1.
OUR BOND IS TIMELESS !!! 
I can tolerate and adore everything you do even if you sing TUM HI HO in that manly voice or you send me 10000000000 pictures before posting on gram . 
I love you and will always be there with you to make you feel happy and bring smile on your face .</p>
</div>
                                    </div>

                                </div>
                            </div>

                            <div className = "card-wrapper" >
                                {/* Anshu Di */}
                                <div className = "blog-card"  ref = {el =>{cardArray.push(el) }} >
                                    <div className = "media" ><img src = {Anshu} /></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hey,Tanvi <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify">Happyyyy birthday to my lil tanvi whom i know from 5 years who is not little anymore my gorgeous bachaa stay blessed forever  You have a pure heart  always stay like this I am missing our workout together, our evening walks & talks about everything  Hope to see you super soon And Plan to visit jaipur soon  Bachhe you have my heart  okk 
Whenever you neeed me just call i am one call away .. keep glowing & growing 
Happyyyy birthday once again tanviiiiiiiiiiii

Yours 
Anshu di</p>
</div>
                                    </div>

                                </div>
                               {/* Anukriti */}
                                <div className = "blog-card"  ref = {el =>{cardArray.push(el) }}>
                                    <div className = "media" > <img src = {Anukriti} alt = ""></img></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hi,Tums <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify"> I don’t believe in soulmates but i found a friend, sister, lover, well wisher, wingwoman, all in all, everything in you! We’ve gone through a LOT of ups and downs together (mostly ups) and i just wish for us to stay like this forever and go through this thing called life, together! Because of you, i’m safe to say that i got lucky in the friendship department :) Stay mad, i love it. Happiest Birthday - cuddles</p>
</div>
                                    </div>

                                </div>
                            </div>

                            <div className = "card-wrapper" >
                                {/* Roahan */}
                                <div className = "blog-card"  ref = {el =>{cardArray.push(el) }} >
                                    <div className = "media" ><img src = {Roahan}  alt = ""/></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hey,Tanvi <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify">Happiest birthdayyy Tanviii! I remember, right from the date of your Enactus interview I had never imagined that we'll be so good friends, Especially jab main itni baar irritate kar deta hun tujhe 
                                        . Really enjoyed the time when we went shopping to Sarojini, a number of
                                        Enactus parties right from inamul ka suffocating flat
                                        , kaafi purani Baat Lagg rhi ye ab. Remembering all this seems ki 
                                        kitne saalon se jaante hain Right from your initial college days to the final one's,
                                         you have been a great person and I'm really proud of that. One of the best decisions we
                                          made was to recruit you for Enactus, coz agr vo na hota who knows I wouldn't have been
                                           writing this message.So thank god for that Apna college main matching kapde pehenne ka W
                                           plan after trip ho nahi paya that's my only regret :( Coming to some best moments, can't name a few  Udaipur ki galiyon main full ready hoke raasleela dhunde se Anukriti ke ghar night stay tak every moment has been cherishable and I hope we all get to make more of these moments whether in India or abroad! Jaldi jaldi CA banke pese kamao, fir hum bhi full friends' trip karenge A very very happy birthday to you!</p>
</div>
                                    </div>

                                </div>
                               {/* Drishya */}
                                <div className = "blog-card"  ref = {el =>{cardArray.push(el) }}>
                                    <div className = "media" > <img src = {Drishya} alt = "drishya"></img></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hi,Tanvi <RiHeartLine style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify"> A very happy birthday to the sister I never had, but have now .
I never thought we'd get this close when I first met you but I'm so damn glad to have you become a huge part of my life now. You're one of the very few people that I know who will always be there for me and treat me nothing less than a little sister. And not just for me, I see you doing all these amazing things for other people and I feel so proud of the person you're becoming. So thank you for taking care of everyone around you and also for being there for me on the worst of days. Whether it be sending me food or random scrunchies, i love being spoiled. You deserve the best of things in life. Tons of hugs and kisses coming your wayyy. Hope you have a day as beautiful as you are, see you soon. Can't wait to go on dates w you again. 
Love, drishhh</p>
</div>
                                    </div>

                                </div>
                            </div>
                            <div className = "card-wrapper" >
                               
                               {/* Tanishq */}
                                <div className = "blog-card"  ref = {el =>{cardArray.push(el) }}>
                                    <div className = "media" > <img src = {Tanishq} alt = "Tanishq"></img></div>
                                    <div className="card-body" >
                                        <h3 className="title text-center">Hi,Tee <RiCake3Fill style = {{color:"#E81224"}}/></h3>
                                        <div className = "containerScroll">
                                        <p  className="paragraph text-justify"> I have known you for a very long time now and you are the only person in my life who has stayed with me through all my ups and downs, I know that I can count on you for everything and anything.I am so grateful and blessed to know that I had friend with me who never left my side. <br/>
I don’t think I would have been the man that I am today with you.You’ve changed me, you have showered me with love, attention and affection.  You brought immense joy in my life. <br/>
You are beautiful, charming, tenacious and playful.You are everything I’ve ever desired, everything I’ve ever wished for, You lit my dark, You make me happy and You are the apple of my eye and there’s so much more you make me feel that I can’t put into words. <br/>
So as you’ve turned 21 today I created this website for you, telling you how much you really mean to me and to all of us. <br/>
Keep smiling, just the way you are smiling right now <br/><br/>

Happiest Birthday Beautiful.</p>
</div>
                                    </div>

                                </div>
                            </div>
                     
                     
                          



                </div>

          </div>

          <div  data-scroll-section className = "demo-wrapper">
           
                <div className = "df">
                    <h1 data-aos="fade-down" >The Memories we have with you</h1>
                    <div data-aos="fade-down"></div>
                    
                </div>
            
             
                  
                  <div ref = {el => section = el} className = "demo-gallery">
                      <ul className = "wrapper"  >
                          <li>
                              <img className ="gallery-image" alt= "img1"  src = {img1}></img>
                          </li>
                          <li>
                              <img className ="gallery-image"  alt= "img1"  src = {img2}></img>
                          </li>
                          <li>
                              <img className ="gallery-image"   alt= "img1" src = {img3}></img>
                          </li>
                          <li>
                              <img className ="gallery-image" alt= "img1"  src = {img4}></img>
                          </li>

                      </ul>

              </div> 
              <div  ref = {el => sectionTwo = el} className = "demo-gallery">
                      <ul  className = "wrapper"  >
                          <li>
                              <img className ="gallery-image" alt= "img1"   src = {img5} ></img>
                          </li>
                          <li>
                              <img className ="gallery-image" alt = ""  src = {img6} ></img>
                          </li>
                          <li>
                              <img className ="gallery-image" alt = ""  src = {img7}  ></img>
                          </li>
                          <li>
                              <img className ="gallery-image" alt = ""  src = {img8}  ></img>
                          </li>

                      </ul>

              </div>
              <div  ref = {el => sectionThree = el} className = "demo-gallery">
                      <ul  className = "wrapper"  >
                          <li>
                              <img className ="gallery-image" alt= "img1"  src ={img9}  ></img>
                          </li>
                          <li>
                              <img className ="gallery-image"  alt= "img1" src = {img10} ></img>
                          </li>
                          <li >
                              <img  className ="gallery-image-11" alt= "img1"  src = {img11} ></img>
                          </li>
                          <li>
                              <img  className ="gallery-image-12"  alt= "img1" src = {img12} ></img>
                          </li>

                      </ul>

              </div>
              <div  ref = {el => sectionFour = el} className = "demo-gallery">
                      <ul  className = "wrapper"   >
                          <li>
                              <img  className ="gallery-image-13" alt= "img1"  src = {img14}></img>
                          </li>
                          <li>
                              <img  className ="gallery-image-13" alt= "img1"  src = {img15}></img>
                          </li>
                          <li>
                              <img   className ="gallery-image-14" alt= "img1"  src = {img13}></img>
                          </li>
                          <li>
                              <img  className ="gallery-image-13" alt= "img1"  src = {img16}></img>
                          </li>

                      </ul>

              </div>
          </div>

            
        <UsToYou/>
        </div>
        

    )
}

export default HomePage

