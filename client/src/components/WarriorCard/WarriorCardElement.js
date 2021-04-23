import styled from 'styled-components';
import { FaRedditAlien, FaMale, FaFemale } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export const WarriorCardContainer = styled.div`
    background : #fff;
    box-shadow : 0 0 25px 0 rgba(0,0,0,0.4);
    margin-top : 5px;
    margin-bottom : 15px;
    padding : 2px 0;
    @media screen and (max-width : 425px){
        box-shadow : 0;
    }
`
export const Warrior = styled.ul`
    list-style : none;
    display : flex;
    justify-content : space-evenly;
    align-items : center; 
`
export const WarriorDetail = styled.li`
    display : flex;
    font-size : 1rem;
    align-items : center;
    justify-content : space-between;
    padding : 5px 10px;   
`

export const WarriorDetailKey = styled.span`
    font-weight : 900;

    @media screen and (max-width : 425px){
        display : none;
    }
`
export const WarriorLink = styled(Link)`
    text-decoration : none;
    color : #000;
    padding-right : 10px;

    &:hover {
        text-decoration : underline;
        color : #5adeff;
    }
`
export const AlienIcon = styled(FaRedditAlien)`
    margin-left : 5px;
`
export const MaleIcon = styled(FaMale)`
    
`
export const FemaleIcon = styled(FaFemale)`
    
`
