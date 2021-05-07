import { gql } from '@apollo/client';

export const FETCH_ALL_PEOPLE = gql`
query AllPeople($skip : Int $take : Int){
  allPeople (skip : $skip take : $take){
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