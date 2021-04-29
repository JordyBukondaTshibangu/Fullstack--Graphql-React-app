const { gql } = require('apollo-server')

module.exports.typeDefs = gql`

    type User {
        name : String!
        email : String!
        password : String!
        token : String
    }
    type Person {
        name : String!
        height : String!
        mass : String!
        gender : String!
        homeworld : String!
    }

    input CreatedUser {
        name : String!
        email : String!
        password : String!
    }

    input UpdatedUser {
        name : String
        email : String
    }

    input CreatedPersonInput {
        name : String! 
        height : String! 
        mass : String! 
        gender : String! 
        homeworld : String!
    }

    input UpdatedPerson {
        name : String 
        height : String! 
        mass : String! 
        gender : String! 
        homeworld : String!
    }
 
    type Query {
        allPeople(skip: Int, take: Int) : [Person]!
        person(filter : String!) : Person! 
        me : User!
    }
    type Mutation {

        createPerson( createdPersonInput : CreatedPersonInput) : Person!
        updatePerson( updatedPerson : UpdatedPerson) : Person!
        deletePerson(name : String!) : Person!

        login(email:String! password:String!) : User!
        register(createdUser : CreatedUser!) : User!
        updateProfile(updatedUser : UpdatedUser!) : User!
        deleteProfile(email : String!) : User!

    }
`