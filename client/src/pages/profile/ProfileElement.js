import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProfileContainer = styled.div`
    display : grid;
    grid-template-rows : 2.4fr 0.8fr;
    height : 100vh;
    margin : 20px 15%;
    
    @media screen and (max-width : 430px){
        margin : 0;
    }

`
export const UserDetails  = styled.div`
    display : grid;
    grid-template-columns : 1fr 2fr;
    box-shadow : 0 0 10px 0 rgba(0,0,0,0.6);
    background-color : #f1f2f3;

    @media screen and (max-width : 427px){
        display : block;
        padding-top : 20px;
        box-shadow : 0;
    }
`
export const DetailContainer = styled.div`
    padding : 5px 20px;   
    background-color : #fff;
    margin : 20px 10px;
`

export const AvatarContainer = styled.div`
        text-align : center;

        @media screen and (max-width : 427px){
        display : block;
        margin : 2px 0;
        } 
`
export const LoginFormGroupButton = styled.div`
`
export const GroupButton = styled(Link)`
    text-align : center;
    padding-top : 20px;
`

export const ProfileImage = styled.img`
    width : 150px;
    height : 150px;
    border-radius : 100%;
    margin : 20px;

    @media screen and (max-width : 427px){
        margin : 0;
    } 


`

export const ProfileName = styled.h3`
    font-size : 1rem;
    font-weight : 800;
    letter-spacing : 2px;
`