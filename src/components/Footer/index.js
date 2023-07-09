import React from 'react'

import { FaSnapchatGhost,
    FaInstagram,
    FaFacebookSquare,
    FaGooglePlusSquare } from "react-icons/fa";
import { ATag, FooterContainer, FooterContentTop, FooterContentWrapper, FooterWrap, IconHolder, IconImg, LinksHolder, LogoHolder } from './FooterElements';

import Logo from '../../images/Logo.png'

const Footer = () => {  
    return (
        <>  
            <FooterContainer className = "footer-container">
                <FooterWrap className ="footer-wrap">
                    <FooterContentWrapper className = 'footer-content-wrapper'>
                        <FooterContentTop className = "footer-content-top">
                            <LogoHolder className ="logo-holder">
                                <IconImg src = {Logo}></IconImg>
                            </LogoHolder>
                            <LinksHolder className = "links-holder" >
                                <ATag href ="/">Home</ATag>
                                <ATag href ="/AboutYou">About</ATag>
                                <ATag href ="/Us">Us</ATag>
                                
                            </LinksHolder>
                            <IconHolder >
                               
                                
                               
                                    <FaSnapchatGhost />
                           
                                
                                    <FaInstagram />
                               
                                
                                    <FaFacebookSquare />
                                
                              
                                    <FaGooglePlusSquare />
                                
                            </IconHolder>
                        </FooterContentTop>
                    </FooterContentWrapper>
                </FooterWrap>
            </FooterContainer>
            
        </>
    )
}

export default Footer
