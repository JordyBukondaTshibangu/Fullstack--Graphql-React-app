import styled from 'styled-components';

export const AboutContainer  = styled.div`
    margin : 0 auto;
    height : 100vh;
    padding : 30px;
    text-align : center;
    `
export const AboutContent = styled.h5`
    font-weight : bold;
    font-size : 2rem;
`
export const RepoLink = styled.a`
    font-size : 1.2rem;
    padding : 1rem;
    text-decoration : none;

    &:hover {
        text-decoration : underline
    }
`