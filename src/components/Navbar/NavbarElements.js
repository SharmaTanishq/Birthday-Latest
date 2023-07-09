import { Link } from 'gatsby'
import styled from 'styled-components'
import {DiScala} from  'react-icons/di'

export const Nav = styled.nav`
background: ${({active}) => (active? "#fff" : "transparent")};
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:999;
transition:0.8s all ease;
box-shadow: ${({active}) => (active? "rgba(0, 0, 0, 0.35) 0px 5px 15px":"rgba(0, 0, 0, 0.35) 0px 0px 0px")};

@media screen and (max-width :960px){
    background: ${({ click })=> (click? "#fff" :"transparent" )};
    transition:0.8s all ease;

}
`

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
max-width:1000px;
`
export const NavLogo = styled(Link)`
color: ${({change}) => (change? "#000" : "#fff")};
justify-self:flex-start;
cursor: pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;  


`
export const IconNav = styled.img`
filter : ${({change}) =>(change? "grayscale(1) invert(1)" : "filter: grayscale(0) invert(0)")};
width: 120px;
height:auto;
`
export const NavIcon = styled(DiScala)`
margin: 0 0.5rem 0 2rem;

`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    cursor: pointer;

}
`

export const NavMenu = styled.ul`
display:flex;
width:50%;
justify-content:space-between;
list-style:none;
text-align:center;
margin-left:0;





@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    position:absolute;
    top:${({click})=> (click ? "100%" : "-1400px") };
    opacity:1;
    transition:all 0.2s ease;
    background: #fff;


}
`
export const NavItem = styled.li`
height:80px;


@media screen and (max-width:960px){
    width:100%;
}
`

export const NavLinks = styled(Link)`
color: ${({change}) => (change? "#000" : "#fff")};
display:flex;
align-items:center;
text-decoration:none;
font-size:1.2em;
padding:0.5rem 1rem;
height:100%;

@media screen and (max-width:960px){
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;

    &:hover{
        color:#ff4040;
        transition:all 0.3s ease;

    }
}
`

