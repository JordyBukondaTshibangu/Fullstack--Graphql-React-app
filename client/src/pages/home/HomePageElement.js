import styled from 'styled-components';
import { FaRocket } from 'react-icons/fa'


export const HomePageContainer = styled.div`
    margin : 20px auto;
    text-align : center;
    align-items : center;
    justify-content : center;
`
export const SearchContainer = styled.div`
    align-items : center;
    padding-top : 5px;
`
export const Heading  = styled.h3`
    font-size : 2.5rem;
    font-weight : 800;

    @media screen and (max-width : 425px){
        font-size : 1.5rem;
        font-weight : 800;
    }
`
export const PeopleContainer = styled.div`
    padding : 20px 100px; 
    @media screen and (max-width : 425px){
       padding-top : 20px;
       padding : 5px;
    }

`
export const RocketIcon = styled(FaRocket)`
    color : #ed4337;
    margin : 0 15px;
`