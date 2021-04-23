import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PersonContainer = styled.div`
    margin : 0 auto;
    height : 100vh;
    padding : 30px;
`
export const PersonDetailWrapper = styled.div`
    background : #fff;
    box-shadow : 0 0 10px 0 rgba(0,0,0,0.3);
    padding-left : 2rem;
    padding-top : 10px;
    padding-bottom : 80px;
    margin-bottom : 100px;
`
export const PersonDetails = styled.p`
    font-size : 1.2rem;
    
    @media screen and (max-width : 425px){
        font-size : 10px;
    }
`
export const PersonDetailKey = styled.span`
    font-weight : 800;
    padding-right : 10px;

`

export const ButtonWrapper = styled.div`
    text-align : center;
`
export const Button = styled(Link)`
    text-decoration : none;
    color : #fff;
    background : #000;
    padding : 1rem;
    font-weight : 800;
    font-size : 1rem;
    transition : 0.6s ease-in-out;
    border-radius : 30px;

    &:hover {
        color : #000;
        background : #fff;
        transition : 0.6s ease-in-out;
        box-shadow : 0 0 25px 0 rgba(0,0,0,0.6);
    }
    
`