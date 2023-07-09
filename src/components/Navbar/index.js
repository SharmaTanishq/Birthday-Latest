import React, { useEffect, useState,useRef } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { Nav,NavbarContainer,NavLogo,MobileIcon, NavMenu, NavItem, NavLinks,IconNav} from './NavbarElements';
//Gsap
import {TimelineLite , Power3} from 'gsap';
import Logo from '../../images/Logo.png'

const Navbar = () => {
     const[click,setClick] = useState(false);
     const [scroll,setScroll] = useState(false);
    let navbar = useRef(null)
   
     const handleClick = () => setClick(!click);
     const changeNav = () =>{
         if(window.scrollY >=80){
             setScroll(true);
         } else{
             setScroll(false);
         }
     }
     useEffect(()=>{
        let tl = new TimelineLite();
         changeNav()
         window.addEventListener("scroll",changeNav);
         tl.from(navbar,1.5,{y: -380, ease: Power3.easeOut,opacity:0})
     }, []);
    return (
        <>
            <Nav active = {scroll} click = {click}>
                <NavbarContainer ref = {el => navbar = el} >
                    <NavLogo change={scroll} to = "/">
                       <IconNav change = {scroll} src = {Logo}></IconNav>
                    </NavLogo>
                    <MobileIcon onClick = {handleClick}>
                        {click? <FaTimes/>: <FaBars/>}
                    </MobileIcon>
                    <NavMenu  onClick = {handleClick} click ={click}>
                        <NavItem>
                            <NavLinks change={scroll} to ="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks change={scroll} to ="/AboutYou">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks change={scroll} to ="/Us">Us</NavLinks>
                        </NavItem>
                       

                    </NavMenu>

                  

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
