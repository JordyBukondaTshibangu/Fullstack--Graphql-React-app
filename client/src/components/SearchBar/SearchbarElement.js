import styled from 'styled-components'

export const SearchbarContainer = styled.div`

`
export const SearchbarForm = styled.form`
    width : 50%;
    background-color : #fff;
    height : 20px;
    border-radius : 30px;
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    transition : 0.6s;
    box-shadow : 0 0 25px 0 rgba(0, 0, 0, 0.4);
    background-color : #fff;
    margin : 20px auto;

    @media screen and (max-width : 425px){
        width : 80%
    }
`
export const SearchInput = styled.input`
    background : transparent;
    border: none;
    outline : none;
    font-weight : 700;
    font-size : 1rem;
    margin : 20px auto;
    font-family : 'Comic Sans MS, Comic Sans, cursive';
    font-style: oblique;

    color : #000;
`
export const SearchResult = styled.div`
    margin : 20px auto;
    padding : 20px;
`