import styled from 'styled-components'

export const ProfileContainer = styled.form`
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
export const GroupButton = styled.div`
    display : flex;
    text-align : center;
    padding-top : 20px;
    justify-content : center;
    align-items : center;
`
export const EnableEditButton = styled.div`
    text-decoration : none;
    color : #fff;
    background : #000;
    padding : 8px 60px;
    font-weight : 800;
    font-size : 1rem;
    margin-left : 1rem;
    transition : 0.6s ease-in-out;
    font-family: Blippo, fantasy;
    
    &:hover {
        color : #000;
        background : #fff;
        transition : 0.6s ease-in-out;
        box-shadow : 0 0 25px 0 rgba(0,0,0,0.6);
    }
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
