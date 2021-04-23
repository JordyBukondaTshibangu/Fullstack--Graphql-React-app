const { gql } = require('apollo-server');

const typeDefs = gql`
    type Person {
        name : String!
        height : String!
        mass : String!
        gender : String!
        homeworld : String!
    }
    type Query {
        allPeople(skip: Int, take: Int) : [Person]!
        person(filter : String!) : Person! 
    }
    type Mutation {
        createPerson(name : String! height : String! mass : String! gender : String! homeworld : String! ) : Person!
        updatePerson(name : String! height : String mass : String gender : String homeworld : String) : Person!
        deletePerson(name : String!) : Person!
    }
`;

module.exports = typeDefs;