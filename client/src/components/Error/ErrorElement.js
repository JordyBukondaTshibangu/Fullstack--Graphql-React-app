import styled from 'styled-components';
import { FaTools } from 'react-icons/fa'

export const ErrorContainer = styled.div`
    margin : 40% 200px;
    background : #FFCCCC;
    text-align : center;
    padding-top : 10px;
    padding-bottom : 20px;
    box-shadow : 0 0 25px 0 rgba(0,0,0,0.4);

    @media screen and (max-width : 768px){
        margin : 40% 50px;
    }
`

export const ErrorTitle = styled.h3`
    font-size : 2.1rem;
    font-weight : 900;
`
export const ErrorMessage = styled.p`
    font-size : 1.2rem;
    font-weight : 300;
    margin-bottom : 20px;
`
export const Tool = styled(FaTools)`
    margin-left : 5px;
`