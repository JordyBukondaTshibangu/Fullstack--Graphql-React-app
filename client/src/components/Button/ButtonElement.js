import styled from 'styled-components'

export const ButtonComponent = styled.button`
    text-decoration : none;
    color : #fff;
    background : #000;
    padding : 5px 60px;
    font-weight : 800;
    font-size : 1rem;
    transition : 0.6s ease-in-out;
    
    &:hover {
        color : #000;
        background : #fff;
        transition : 0.6s ease-in-out;
        box-shadow : 0 0 25px 0 rgba(0,0,0,0.6);
    }
    
`