import styled from 'styled-components'
import { Link } from 'gatsby'


export const FooterContainer = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    object-fit: contain;
    background:#171717;
    overflow:hidden;
    position: relative;
    z-index: 1;
`
export const FooterWrap = styled.div`
 width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`
export const FooterContentWrapper = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FooterContentTop = styled.div`
   width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`
export const LogoHolder = styled.div`
font-size: 50px;
`
export const IconImg = styled.img`
width: 200px;
height: auto;
`
export const LinksHolder = styled.div`
display: flex;
flex-direction: row;
width: 40%;
align-items: center;
justify-content: space-between;
`
export const ATag = styled(Link)`
text-decoration: none;
text-transform: uppercase;
color: #fff;
font-weight: 400;
font-size: 25px;
`
export const IconHolder = styled.div`
 display: flex;
    flex-direction: row;
    font-size: 2rem;
    width: 13%;
    justify-content: space-between;
`

