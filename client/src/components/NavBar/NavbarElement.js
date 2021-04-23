import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRedditAlien, FaBook } from 'react-icons/fa';

export const AlienIcon = styled(FaRedditAlien)`
    margin-right : 10px;
`

export const AboutIcon = styled(FaBook)`
    margin-right : 10px;
`

export const Nav = styled.nav`
    background-color : #000;
    height : 80px;
    display : flex;
    align-items : center;
    justify-content : center;
    position : sticky;
    top : 0;
    z-index : 10;
    font-size : 1rem;

    @media screen and (max-width : 960px){
        transition :0.8s all ease;
    }
`

export const NavContainer = styled.div`
    display : flex;
    justify-content : space-between;
    height : 80px;
    z-index : 1;
    width : 100%;
    padding : 0 10px;
    max-width : 1100px;
`

export const NavLogoContainer = styled.div`
    margin-left : 0;
`

export const NavLogo = styled(Link)`
    color : #fff;
    justify-self : flex-start;
    cursor: pointer;
    display : flex;
    align-items : center;
    font-size : 1.5rem;
    font-weight : 800;
    text-decoration : none;
    margin-top : 20px;

    @media  screen and (max-width : 768px){
    font-size : 1.5rem;
    font-weight : 700;
    }
`

export const MobileIcon = styled.div`
    display : none;
    @media  screen and (max-width : 768px){
         display : block;
         color : #fff;
         position : absolute;
         top : 0;
         right : 0;
         transform : translate(-100%, 60%);
         font-size : 1.8rem;
         cursor: pointer;
     }
`

export const NavMenu = styled.ul`
     display : flex;
     align-items : center;
     list-style : none;
     text-align : center;
     margin-right : -10px;

     @media  screen and (max-width : 768px){
         display : none;
     }
`

export const NavItem = styled.li`
    height : 80px;
`
export const NavLink = styled(Link)`
     color : #fff;
     display : flex;
     align-items : center;
     text-decoration : none;
     padding : 0 1rem;
     height : 100%;
     cursor: pointer;

     &:hover {
        text-decoration : underline;
        color : #5adeff;
    }
`