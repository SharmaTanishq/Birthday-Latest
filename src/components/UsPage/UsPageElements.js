import styled from 'styled-components'

export const UsContainer = styled.div`
 
`
export const USHero = styled.div`
 width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 1300px;
      z-index: 1;
`
export const UsWrapper = styled.div`
 display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    
`
export const TextWrapper = styled.div`
display: flex;
max-width: 800px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    

`
export const TextOne = styled.p`
 color : ${({active}) => (active? "#171717" : "#FFF")};
 font-size: 2.5vw;
 
 
    font-weight: 300;
    transition: 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.35);;
    display: flex;
    flex-direction: row;
    @media screen and (max-width:1601px){
     font-size: 3.5vw;
 }
    
`
export const BoldText = styled.p`
 color : ${({active}) => (active? "#171717" : "#FFF")};
 font-size: 2.5vw;
 font-weight: 700;
 
 margin-left: 10px;
 margin-right: 10px;
 transition: 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.35);
 @media screen and (max-width:1601px){
     font-size: 3.5vw;
 }

`

export const ImageWrapper = styled.div`
  align-items: center;
    justify-content: center;
    display: flex;
    
    height: 100%;
    margin-top: 80px;
    min-width: 709px;
    position: relative;
    transition: 1.5s cubic-bezier(0.68, -0.15, 0.265, 1.35);;
    
`
export const ImageHolder = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    position: relative;
`
export const BackGround = styled.div`
  position: relative;
  width: 350px;
    height: 500px;
    background: #EAEAEA;
    opacity: 0.2;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    left: 20px;
    top: -20px;
    
`
export const Image = styled.div`
 width: 350px;
    height: 500px;
    background: #FFF;
    border-radius: 12px;
    opacity: 0;
   position: absolute;
`
