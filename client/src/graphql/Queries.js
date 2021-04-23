import { gql } from '@apollo/client';

export const FETCH_ALL_PEOPLE = gql`
query {
  allPeople {
    name
    height
    mass
    gender
    homeworld
  }
}
`

export const FETCH_PERSON = gql`
query Person($filter : String!){
  person(filter : $filter){
    name
    height
    mass
    gender
    homeworld
  }
  
}
`