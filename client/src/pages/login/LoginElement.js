import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FromContainer = styled.form`
    margin : 10% 20%;
    height : 90vh;
    padding : 30px;
    box-shadow : 10px 10px 20px 5px rgba(0,0,0,0.6);

    @media screen and (max-width : 427px){
        margin : 30% 8%;
        justify-content : space-between;
    }
`
export const Heading = styled.h3`
    font-size : 28px;
    text-align : center;
    font-weight : 700;

    @media screen and (max-width : 427px){
        font-size : 20px;
        text-align : center;
        font-weight : 700;
    }
`

export const LoginFormGroupInput = styled.div`
    text-align : center;
    padding : 5px;
    margin-top : 20px;

    @media screen and (max-width : 427px){
        display : flex;
        justify-content : space-between;
    }
`

export const LoginFormGroupButton = styled.div`
    text-align : center;
    display : block;
    margin-top : 40px;
    padding : 10px;
`
export const RedirectRegister = styled.div`
    margin-top : 10px;
    padding-right : 5px;
`

export const LoginSpan = styled.span`
    font-size : 10px;
    margin-top : 50px;
`

export const LinkRegister = styled(Link)`
    color : #000;
    margin-top : 50px;
`