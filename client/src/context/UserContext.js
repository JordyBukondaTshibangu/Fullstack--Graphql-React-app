import React, { createContext, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/Mutations'

export const UserContext = createContext()

const UserProviderContext = (props) => {
	const [register, { data }] = useMutation(CREATE_USER)

	const [user, setUser] = useState({
		name: '',
		email: '',
		dateOfBirth: '',
		country: '',
	})
	const [token, setToken] = useState('')
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		if (data) {
			setUser(() => ({ ...data.register }))
			setToken(data.register.token)
			localStorage.setItem('user', JSON.stringify(user))
			localStorage.setItem('token', JSON.stringify(token))
			setSuccess(true)
		} else {
			setError(true)
		}
	}, [data])

	const registerUser = (createdUser) => {
		register({ variables: { CreatedUser: createdUser } })
	}

	return (
		<UserContext.Provider value={{ registerUser, user, token, success, error }}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserProviderContext
