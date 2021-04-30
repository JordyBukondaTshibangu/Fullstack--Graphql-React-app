import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProfileContainer = styled.div`
    display : grid;
    grid-template-rows : 2.4fr 0.8fr;
    height : 80vh;

`
export const UserDetails  = styled.div`
    display : grid;
    grid-template-columns : 2fr 1fr;

    @media screen and (max-width : 427px){
        display : block;
        padding-top : 20px;
    }
`
export const DetailContainer = styled.div`
    padding : 5px 20px;
`

export const AvatarContainer = styled.div`

        @media screen and (max-width : 427px){
        display : block;
        margin : 5px 0;
    } 
`
export const LoginFormGroupButton = styled.div`
`
export const GroupButton = styled(Link)`
    text-align : center;
    padding-top : 20px;
`