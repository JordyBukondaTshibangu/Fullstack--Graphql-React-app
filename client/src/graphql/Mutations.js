import { gql } from '@apollo/client'

export const ADD_PERSON = gql`
	mutation CreatePerson($CreatedPersonInput: CreatedPersonInput!) {
		createPerson(createdPersonInput: $CreatedPersonInput) {
			name
			height
			mass
			gender
			homeworld
		}
	}
`
export const CREATE_USER = gql`
	mutation Register($CreatedUser : CreatedUser!){
		register(createdUser : $CreatedUser){ 
			name, 
			email, 
			dateOfBirth, 
			country, 
			token
		} 
	}
`
export const LOGIN_USER = gql`
	mutation Login($email : String! $password : String!){
		login(email : $email password : $password){ 
			name, 
			email, 
			dateOfBirth, 
			country, 
			token
		} 
	}
`
