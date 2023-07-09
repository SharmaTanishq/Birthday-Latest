import React, { useEffect, useRef, useState } from 'react'
import "./UsPage.css"
import { TextWrapper,TextOne,ImageWrapper, BoldText,USHero, 
  UsWrapper,ImageHolder,BackGround } from './UsPageElements'
  import ReactPlayer from 'react-player'
//Assets and Images

import video from '../../images/UsPage/centerVidFinal.mp4'
import leftVid from '../../images/UsPage/leftVid.gif'
import rightVid from '../../images/UsPage/rightVid.gif'
import mainImg from '../../images/UsPage/imgCenter.jpeg'
import leftImg from '../../images/UsPage/img1.jpeg'
import rightImg from '../../images/UsPage/img2.jpeg'
import knew1 from '../../images/UsPage/knew1.jpeg'
import knew2 from '../../images/UsPage/knew2.jpeg'
import knew3 from '../../images/UsPage/knew3.jpeg'

import 'aos/dist/aos.css';
//Gsap
import {  Power3,gsap} from 'gsap';


//Images


const UsPage = () => {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const rotationTween = useRef(null);
    const rotationTweenTwo = useRef(null);
    let imgBg = useRef(null);
    let image = useRef(null);
    console.log(click);
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
   
    useEffect(() => {
        rotationTween.current = gsap
          .to(image,1,{y:0,ease:Power3.easeIn,opacity:1,visibility:'visible'})

          
          
        return () => {
          rotationTween.current.kill();
        };
      }, []);

      useEffect(() => {
        rotationTween.current.reversed(!click);
      }, [click]);

      //Second Object
      useEffect(() => {
      
        rotationTweenTwo.current = gsap
          .fromTo(imgBg,1,{y:-300,ease:Power3.easeIn,opacity:0},{
            y:0,
            opacity: 0.2
          })          
        return () => {
          rotationTweenTwo.current.kill();
        };
      }, );

      useEffect(() => {
        rotationTweenTwo.current.reversed(!click);
      }, [click]);

     
    return (
        <div className = {`background ${click ? "background--on " : "background"}`} >
            <USHero  >
                <UsWrapper >
                    <TextWrapper  >
                        <TextOne   active = {click}>I met you in the <BoldText active = {click} >Dark</BoldText></TextOne>
                        <TextOne   active = {click}><BoldText active = {click}>You</BoldText> lit me up</TextOne> 
                        <div   className={`toggle-body ${click ? "toggle-body--on " : "toggle-body"}`} onClick ={handleClick}>
                        <div    className={`toggle-btn ${click ? "toggle-btn--on" : "toggle-btn"}`}></div>
                         </div>
                    </TextWrapper>
                    <ImageWrapper className = "ImageWrapper"    >
                         <ImageHolder className = "Image-Holder">
                             <BackGround  classname = "imgBgCard" ref = {el => imgBg = el } ></BackGround>
                             <div className = "ImageCheck" ref={el=>image=el }  ></div>
                         </ImageHolder>
                    </ImageWrapper>
                </UsWrapper>
           

            </USHero>
            <div   className={`section-two ${click ? "section-two--on " : "section-two"}`}>
              <p className  = "section-pOne" data-aos="fade-up">You made me feel as though</p>
              <p className  = "section-pOne" data-aos="fade-up">I was <p className = "sectionBoldText">ENOUGH</p></p>
              <div className = "section-photo-wrapper">
                <div className = "section-photo" data-aos="fade-right">
                  <img className = "img-video" src = {leftVid}/>
                </div>
                <div className = "section-photo" data-aos="fade-up">
                 
                <ReactPlayer
                 className='react-player fixed-bottom'
                url = {video}
                width='100%'
                height='100%'
                controls = {true}
                />
                </div>
                <div className = "section-photo"data-aos="fade-left">
                <img className = "img-video" src = {rightVid}/>
                </div>
              </div>
            </div>

            <div  className = "section-quote" data-aos="fade-in">
            <blockquote className="quote">
   
            We danced the night away <br/>
            We drank too much <br/>
            I held your hair back when  <br/>
            You were throwing up


              </blockquote>

            </div>

            <div  className={`section-two ${click ? "section-two--on " : "section-two"}`}>
              <p className  = "section-pOne" data-aos="fade-up">Then you <p className = "sectionBoldText"> SMILED </p> over your shoulder</p>
              <p className  = "section-pTwo" data-aos="fade-up" data-aos-delay= "50">For a minute I was stone-cold sober</p>
              <div className = "section-photo-wrapper">
                <div className = "section-photo-two" data-aos="fade-up">
                  <img className = "img-photo" src = {leftImg}></img>
                </div>
                <div className = "section-photo-two" data-aos="fade-up">
                <img className = "img-photo"  src = {mainImg}></img>
                </div>
                <div className = "section-photo-two" data-aos="fade-up">
                <img className = "img-photo"  src = {rightImg}></img>
                </div>
              </div>
            </div>

            
            <div  className = "section-quote" data-aos="fade-in">
            <blockquote className="quote-2">
   
            I pulled you closer to my chest <br/>
            And you asked me to stay over <br/>
            I said, I already told ya <br/>
            I think that you should get some rest


              </blockquote>

            </div>

            <div  className={`section-two ${click ? "section-two--on " : "section-two"}`}>
              <p className  = "section-pOne" data-aos="fade-up">I knew  <p className = "sectionBoldText"> I LOVED </p> you then</p>
              <p className  = "section-pOne" data-aos="fade-up" data-aos-delay= "50">But you'd never know</p>
              <div className = "section-photo-wrapper">
                <div className = "section-photo-two" data-aos="fade-up">
                  <img className = "img-photoTwo" src = {knew1}></img>
                </div>
                <div className = "section-photo-two" data-aos="fade-up">
                <img className = "img-photoTwo"  src = {knew3}></img>
                </div>
                <div className = "section-photo-two" data-aos="fade-up">
                <img className = "img-photoTwo"  src = {knew2}></img>
                </div>
              </div>
            </div>

            <div  className = "section-quote" data-aos="fade-in">
            <blockquote className="quote-2">
   
            'Cause I played it cool when I was scared of letting go<br/>
            I know I needed you<br/>
            But I never showed<br/>
            But I wanna stay with you until we're grey and old


              </blockquote>

            </div>

            <div  className = "section-quote" data-aos="fade-in">
            <blockquote className="quote-3">
   
            JUST SAY YOU WON'T LET GO

              </blockquote>

            </div>

        </div>
    )
}

export default UsPage
