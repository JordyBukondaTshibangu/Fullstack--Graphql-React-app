import styled from 'styled-components';
import { FaTimes, FaRedditAlien,FaUser, FaBook, FaUserPlus, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position : fixed;
    z-index : 999;
    width : 100%;
    height : 100%;
    background-color : #000;
    display : grid;
    align-items : center;
    top : 0;
    left : 0;
    transition : 0.6s ease-in-out;
    opacity : ${({isOpen}) => (isOpen ? '100%' : '0')};
    top : ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color : #fff;
`

export const AlienIcon = styled(FaRedditAlien)`
    margin-right : 10px;
`

export const AboutIcon = styled(FaBook)`
    margin-right : 10px;
`
export const AddAlienIcon = styled(FaUserPlus)`
margin-right : 10px;
`
export const MeIcon = styled(FaUser)`
margin-right : 10px;
`
export const LogoutIcon = styled(FaPowerOff)`
margin-right : 10px;
`

export const Icon = styled.div`
    position : absolute;
    top : 1.2rem;
    right: 1.5rem;
    background : transparent;
    font-size : 2rem;
    cursor: pointer;
    outline : none;
`

export const SidebarWrapper = styled.div`
    color : #fff;
    margin-top : -200px
`
export const SidebarMenu = styled.div`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : (2, repeat());
    text-align : center;

    @media screen and (max-width : 480px){
        grid-template-rows : (2, repeat());
    }
`

export const SidebarLink = styled(Link)`
    display : flex;
    align-items : center;
    justify-content : center;
    text-decoration : none;
    list-style : none;
    font-size : 1.5rem;
    color : #fff;
    cursor: pointer;
    transition : 0.2s ease-in-out;
    margin-top : 20px;
    &:hover {
        color : #01bf71;
        transition : 0.2s ease-in-out;
    }

`
export const SidebarButton = styled.button`
    background-color : #000;
    border : none;
    font-family: Blippo, fantasy;
    letter-spacing: 1px;  
    display : flex;
    align-items : center;
    justify-content : center;
    text-decoration : none;
    list-style : none;
    font-size : 1.5rem;
    color : #fff;
    cursor: pointer;
    transition : 0.2s ease-in-out;
    margin-top : 20px;
    &:hover {
        color : #01bf71;
        transition : 0.2s ease-in-out;
    }
`